// Fonte única dos dados de SEO. Usado pelo componente <SEO /> no navegador
// e pelo plugin de build (vite.config.js) que gera o <head> estático de cada rota.

export const SITE_URL = "https://www.biancaferreiradesign.com";
export const SITE_NAME = "Bianca Ferreira Design";
export const DEFAULT_OG_IMAGE = "/images/og-image.jpg";
export const OG_IMAGE_WIDTH = 1200;
export const OG_IMAGE_HEIGHT = 630;

export const LANGS = ["pt", "en"];
export const DEFAULT_LANG = "pt";
export const HTML_LANG = { pt: "pt-BR", en: "en" };
export const OG_LOCALE = { pt: "pt_BR", en: "en_US" };

// Rotas geradas no build. As chaves apontam para src/i18n/{pt,en}.json.
export const PAGES = [
  { path: "", titleKey: "home.title", descriptionKey: "home.description", organization: true },
  { path: "/cases", titleKey: "portfolio.allCasesPage.title", descriptionKey: "portfolio.allCasesPage.description" },
  { path: "/politica-de-privacidade", titleKey: "seo.privacyPolicy.title", descriptionKey: "seo.privacyPolicy.description" },
  { path: "/form", titleKey: "seo.form.title", descriptionKey: "seo.form.description", noindex: true },
  { path: "/form-en", titleKey: "seo.form.title", descriptionKey: "seo.form.description", noindex: true },
];

// Servida pelo Apache (ErrorDocument) para qualquer URL inexistente
export const NOT_FOUND_PAGE = { titleKey: "seo.notFound.title", descriptionKey: "seo.notFound.description", noindex: true, notFound: true };

export const pageUrl = (lang, path = "") => `${SITE_URL}/${lang}${path}`;

export const absoluteUrl = (src) => (src.startsWith("http") ? src : `${SITE_URL}${src}`);

// Garante o nome do estúdio no título sem duplicá-lo
export const fullTitle = (title) =>
  title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE_NAME,
  image: absoluteUrl(DEFAULT_OG_IMAGE),
  "@id": SITE_URL,
  url: SITE_URL,
  email: "contato@biancaferreiradesign.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Campinas",
    addressRegion: "SP",
    addressCountry: "BR",
  },
  sameAs: [
    "https://www.instagram.com/biancaferreiradesign/",
    "https://www.tiktok.com/@biancaferreiradesign",
  ],
  priceRange: "$$",
};
