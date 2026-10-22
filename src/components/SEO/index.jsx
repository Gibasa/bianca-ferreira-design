import PropTypes from "prop-types";
import { Helmet } from "react-helmet-async";
import { useLocation, useParams } from "react-router-dom";
import {
  absoluteUrl,
  DEFAULT_LANG,
  DEFAULT_OG_IMAGE,
  fullTitle,
  HTML_LANG,
  LANGS,
  OG_IMAGE_HEIGHT,
  OG_IMAGE_WIDTH,
  OG_LOCALE,
  pageUrl,
  SITE_NAME,
} from "@/seo/config";

// As mesmas tags são geradas no build (vite.config.js) para o HTML estático de cada rota;
// aqui elas são mantidas em sincronia durante a navegação no navegador.
const SEO = ({ title, description, image, keywords, jsonLd, noindex = false, type = "website" }) => {
    const { pathname } = useLocation();
    const { lang } = useParams();

    const currentLang = LANGS.includes(lang) ? lang : DEFAULT_LANG;
    const path = pathname.replace(/^\/(pt|en)/, "").replace(/\/$/, "");
    const url = pageUrl(currentLang, path);
    const metaTitle = fullTitle(title);
    const metaImage = absoluteUrl(image || DEFAULT_OG_IMAGE);

    return (
        <Helmet>
            <html lang={HTML_LANG[currentLang]} />
            <title>{metaTitle}</title>
            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords} />}
            {noindex && <meta name="robots" content="noindex, follow" />}
            <link rel="canonical" href={url} />

            {LANGS.map((l) => (
                <link key={l} rel="alternate" hrefLang={l} href={pageUrl(l, path)} />
            ))}
            <link rel="alternate" hrefLang="x-default" href={pageUrl(DEFAULT_LANG, path)} />

            <meta property="og:site_name" content={SITE_NAME} />
            <meta property="og:url" content={url} />
            <meta property="og:type" content={type} />
            <meta property="og:title" content={metaTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={metaImage} />
            {!image && <meta property="og:image:width" content={String(OG_IMAGE_WIDTH)} />}
            {!image && <meta property="og:image:height" content={String(OG_IMAGE_HEIGHT)} />}
            <meta property="og:locale" content={OG_LOCALE[currentLang]} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={metaTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={metaImage} />

            {jsonLd && (
                <script type="application/ld+json">
                    {JSON.stringify(jsonLd)}
                </script>
            )}
        </Helmet>
    );
};

SEO.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string,
    keywords: PropTypes.string,
    jsonLd: PropTypes.object,
    noindex: PropTypes.bool,
    type: PropTypes.string,
};

export default SEO;
