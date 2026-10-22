// Gera, após o build, um HTML por rota com title, description, canonical, hreflang,
// Open Graph e JSON-LD já no <head>. Assim robôs que não executam JavaScript
// (WhatsApp, Instagram, LinkedIn, Bing) e o primeiro rastreio do Google enxergam as tags.
//
// Saída: dist/_pages/<lang><path>.html — servido pelo .htaccess para /<lang><path>.
// O index.html raiz recebe as tags da home em português.
// dist/404.html é a página de erro do Apache (ErrorDocument 404).
// dist/sitemap.xml lista as páginas indexáveis com as versões PT/EN.
// As tags levam data-rh="true" para o react-helmet-async substituí-las na navegação.

import fs from "node:fs";
import path from "node:path";
import {
  absoluteUrl,
  DEFAULT_LANG,
  DEFAULT_OG_IMAGE,
  fullTitle,
  HTML_LANG,
  LANGS,
  NOT_FOUND_PAGE,
  OG_IMAGE_HEIGHT,
  OG_IMAGE_WIDTH,
  OG_LOCALE,
  organizationJsonLd,
  pageUrl,
  PAGES,
  SITE_NAME,
} from "../src/seo/config.js";

const escapeAttr = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

const lookup = (dict, key) => key.split(".").reduce((obj, k) => obj?.[k], dict);

const renderHead = (page, lang, dict) => {
  const title = fullTitle(lookup(dict, page.titleKey));
  const description = lookup(dict, page.descriptionKey);
  if (!title || !description) {
    throw new Error(`[seo-pages] texto ausente para ${lang}${page.path}`);
  }

  const url = pageUrl(lang, page.path);
  const image = absoluteUrl(DEFAULT_OG_IMAGE);
  const tag = (name, attrs) =>
    `<${name} data-rh="true" ${Object.entries(attrs)
      .map(([k, v]) => `${k}="${escapeAttr(v)}"`)
      .join(" ")} />`;

  const basic = [
    `<title>${escapeAttr(title)}</title>`,
    tag("meta", { name: "description", content: description }),
    page.noindex && tag("meta", { name: "robots", content: "noindex, follow" }),
  ];
  // Página de erro: sem canonical/hreflang/Open Graph (não tem URL própria)
  if (page.notFound) return basic.filter(Boolean).join("\n    ");

  const tags = [
    ...basic,
    tag("link", { rel: "canonical", href: url }),
    ...LANGS.map((l) => tag("link", { rel: "alternate", hreflang: l, href: pageUrl(l, page.path) })),
    tag("link", { rel: "alternate", hreflang: "x-default", href: pageUrl(DEFAULT_LANG, page.path) }),
    tag("meta", { property: "og:site_name", content: SITE_NAME }),
    tag("meta", { property: "og:url", content: url }),
    tag("meta", { property: "og:type", content: "website" }),
    tag("meta", { property: "og:title", content: title }),
    tag("meta", { property: "og:description", content: description }),
    tag("meta", { property: "og:image", content: image }),
    tag("meta", { property: "og:image:width", content: OG_IMAGE_WIDTH }),
    tag("meta", { property: "og:image:height", content: OG_IMAGE_HEIGHT }),
    tag("meta", { property: "og:locale", content: OG_LOCALE[lang] }),
    tag("meta", { name: "twitter:card", content: "summary_large_image" }),
    tag("meta", { name: "twitter:title", content: title }),
    tag("meta", { name: "twitter:description", content: description }),
    tag("meta", { name: "twitter:image", content: image }),
    page.organization &&
      `<script data-rh="true" type="application/ld+json">${JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c")}</script>`,
  ];

  return tags.filter(Boolean).join("\n    ");
};

const renderSitemap = () => {
  const today = new Date().toISOString().slice(0, 10);
  const urls = PAGES.filter((page) => !page.noindex).flatMap((page) =>
    LANGS.map((lang) => {
      const alternates = [...LANGS, "x-default"]
        .map((l) => {
          const href = pageUrl(l === "x-default" ? DEFAULT_LANG : l, page.path);
          return `    <xhtml:link rel="alternate" hreflang="${l}" href="${href}" />`;
        })
        .join("\n");
      return `  <url>
    <loc>${pageUrl(lang, page.path)}</loc>
    <lastmod>${today}</lastmod>
${alternates}
  </url>`;
    })
  );
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join("\n")}
</urlset>
`;
};

const applyHead = (html, page, lang, dict) => {
  const withLang = html.replace(/<html lang="[^"]*">/, `<html lang="${HTML_LANG[lang]}">`);
  const withHead = withLang.replace(/<title>[^<]*<\/title>/, renderHead(page, lang, dict));
  if (withHead === withLang) {
    throw new Error("[seo-pages] <title> não encontrado no index.html");
  }
  return withHead;
};

export default function seoPages() {
  let root;
  let outDir;

  return {
    name: "seo-pages",
    apply: "build",
    configResolved(config) {
      root = config.root;
      outDir = path.resolve(root, config.build.outDir);
    },
    writeBundle() {
      const indexPath = path.join(outDir, "index.html");
      const template = fs.readFileSync(indexPath, "utf-8");
      const dicts = Object.fromEntries(
        LANGS.map((lang) => [
          lang,
          JSON.parse(fs.readFileSync(path.join(root, "src", "i18n", `${lang}.json`), "utf-8")),
        ])
      );

      for (const lang of LANGS) {
        for (const page of PAGES) {
          const file = path.join(outDir, "_pages", `${lang}${page.path}.html`);
          fs.mkdirSync(path.dirname(file), { recursive: true });
          fs.writeFileSync(file, applyHead(template, page, lang, dicts[lang]));
        }
      }

      const home = PAGES.find((p) => p.path === "");
      fs.writeFileSync(indexPath, applyHead(template, home, DEFAULT_LANG, dicts[DEFAULT_LANG]));
      fs.writeFileSync(path.join(outDir, "sitemap.xml"), renderSitemap());
      fs.writeFileSync(
        path.join(outDir, "404.html"),
        applyHead(template, NOT_FOUND_PAGE, DEFAULT_LANG, dicts[DEFAULT_LANG])
      );
    },
  };
}
