import { Helmet } from "react-helmet-async";
import { organizationJsonLd } from "@/seo/config";

const StructuredData = () => {
    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(organizationJsonLd)}
            </script>
        </Helmet>
    );
};

export default StructuredData;
