// Dados derivados dos cases (src/assets/portfolio.json) para páginas e SEO.
// Usado pela página do case (src/pages/Case) e pelo plugin de build que gera
// o <head> estático e o sitemap (scripts/vite-plugin-seo-pages.js).

import { absoluteUrl, pageUrl, SITE_NAME, SITE_URL } from "./config.js";

// "DIVALMIRA GUIMARÃES" -> "divalmira-guimaraes"
export const caseSlug = (group) =>
  group
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

// "COPARTNERS BANK" -> "Copartners Bank"; mantém siglas com número ("3P")
export const caseName = (group) =>
  group
    .split(" ")
    .map((word) =>
      /\d/.test(word) ? word : word.charAt(0) + word.slice(1).toLocaleLowerCase("pt-BR")
    )
    .join(" ");

export const casePath = (group) => `/cases/${caseSlug(group)}`;

// Imagem de prévia (Open Graph) em JPG 1200x630, ao lado da capa: <pasta>/cover-og.jpg
export const caseOgImage = (item) => item.images.cover.replace(/[^/]+$/, "cover-og.jpg");
export const CASE_OG_SIZE = [1200, 630];

export const caseParagraphs = (item, lang) => (lang === "en" ? item.text_en : item.text);

const truncate = (text, max = 155) => {
  if (text.length <= max) return text;
  const cut = text.slice(0, max - 1);
  return `${cut.slice(0, cut.lastIndexOf(" "))}…`;
};

const LABELS = {
  pt: { kind: "Identidade Visual", home: "Início", cases: "Cases" },
  en: { kind: "Visual Identity", home: "Home", cases: "Cases" },
};

export const caseMeta = (item, lang) => {
  const name = caseName(item.group);
  const labels = LABELS[lang];
  const path = casePath(item.group);
  const url = pageUrl(lang, path);
  const description = truncate(caseParagraphs(item, lang)[0] || "");
  const image = absoluteUrl(caseOgImage(item));

  return {
    path,
    title: `${name} — ${labels.kind} | ${SITE_NAME}`,
    description,
    image,
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "CreativeWork",
          name: `${name} — ${labels.kind}`,
          description,
          image,
          url,
          inLanguage: lang === "en" ? "en" : "pt-BR",
          creator: { "@id": SITE_URL },
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: labels.home, item: pageUrl(lang) },
            { "@type": "ListItem", position: 2, name: labels.cases, item: pageUrl(lang, "/cases") },
            { "@type": "ListItem", position: 3, name, item: url },
          ],
        },
      ],
    },
  };
};
