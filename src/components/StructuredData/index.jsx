import { Helmet } from "react-helmet";

const StructuredData = () => {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService", // or "DesignAgency" if available in specific schema versions, but ProfessionalService is safe
        "name": "Bianca Ferreira Design",
        "image": "https://www.biancaferreiradesign.com/images/bia.png",
        "@id": "https://www.biancaferreiradesign.com",
        "url": "https://www.biancaferreiradesign.com",
        "telephone": "", // Add specific phone if available
        "email": "biancafdesign@gmail.com",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Campinas",
            "addressRegion": "SP",
            "addressCountry": "BR"
        },
        "sameAs": [
            "https://www.instagram.com/biancaferreiradesign/"
        ],
        "priceRange": "$$"
    };

    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(structuredData)}
            </script>
        </Helmet>
    );
};

export default StructuredData;
