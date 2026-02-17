import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

const SEO = ({ title, description, image, keywords, jsonLd, type = "website" }) => {
    const { pathname } = useLocation();
    const siteUrl = "https://www.biancaferreiradesign.com";
    const url = `${siteUrl}${pathname}`;
    const defaultImage = `${siteUrl}/images/bia.png`; // Fallback image

    const metaImage = image ? (image.startsWith("http") ? image : `${siteUrl}${image}`) : defaultImage;

    return (
        <Helmet>
            {/* Basic Tags */}
            <title>{title} | Bianca Ferreira Design</title>
            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords} />}
            <link rel="canonical" href={url} />

            {/* Open Graph Tags */}
            <meta property="og:url" content={url} />
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={metaImage} />

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
