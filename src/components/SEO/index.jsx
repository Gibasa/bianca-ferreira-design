import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useLocation, useParams } from "react-router-dom";

const SEO = ({ title, description, image, keywords, jsonLd, type = "website" }) => {
    const { pathname } = useLocation();
    const { lang } = useParams();
    const siteUrl = "https://www.biancaferreiradesign.com";

    // Construct URL based on lang parameter to ensure it matches the route
    const currentLang = lang || "pt";
    const cleanPathname = pathname.replace(/^\/(pt|en)/, "") || "/";
    const url = `${siteUrl}/${currentLang}${cleanPathname === "/" ? "" : cleanPathname}`;

    const defaultImage = `${siteUrl}/images/bia.png`; // Fallback image
    const metaImage = image ? (image.startsWith("http") ? image : `${siteUrl}${image}`) : defaultImage;

    return (
        <Helmet>
            <html lang={currentLang} />
            {/* Basic Tags */}
            <title>{title} | Bianca Ferreira Design</title>
            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords} />}
            <link rel="canonical" href={url} />

            {/* Language Alternates */}
            <link rel="alternate" href={`${siteUrl}/pt${cleanPathname === "/" ? "" : cleanPathname}`} hreflang="pt" />
            <link rel="alternate" href={`${siteUrl}/en${cleanPathname === "/" ? "" : cleanPathname}`} hreflang="en" />
            <link rel="alternate" href={`${siteUrl}/pt${cleanPathname === "/" ? "" : cleanPathname}`} hreflang="x-default" />

            {/* Open Graph Tags */}
            <meta property="og:url" content={url} />
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={metaImage} />
            <meta property="og:locale" content={currentLang === "pt" ? "pt_BR" : "en_US"} />

            {/* Twitter Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={metaImage} />

            {/* Structured Data */}
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
    type: PropTypes.string,
};

export default SEO;
