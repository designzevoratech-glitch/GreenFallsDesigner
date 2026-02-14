import { useEffect } from "react";

interface SEOProps {
    title: string;
    description: string;
    keywords?: string;
    canonical?: string;
    preloadImage?: string;
    schema?: any;
}

const SEO = ({ title, description, keywords, canonical, preloadImage, schema }: SEOProps) => {
    useEffect(() => {
        // Update Document Title
        const fullTitle = `${title} | Green Falls Garden Designer Coimbatore`;
        document.title = fullTitle;

        // Update Meta Description
        let metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", description);
        } else {
            metaDesc = document.createElement("meta");
            metaDesc.setAttribute("name", "description");
            metaDesc.setAttribute("content", description);
            document.head.appendChild(metaDesc);
        }

        // Update Meta Keywords
        if (keywords) {
            let metaKeywords = document.querySelector('meta[name="keywords"]');
            if (metaKeywords) {
                metaKeywords.setAttribute("content", keywords);
            } else {
                metaKeywords = document.createElement("meta");
                metaKeywords.setAttribute("name", "keywords");
                metaKeywords.setAttribute("content", keywords);
                document.head.appendChild(metaKeywords);
            }
        }

        // Update Canonical URL
        if (canonical) {
            let linkCanonical = document.querySelector('link[rel="canonical"]');
            const fullUrl = canonical.startsWith('http') ? canonical : `https://greenfallsgardendesigner.com${canonical}`;
            if (linkCanonical) {
                linkCanonical.setAttribute("href", fullUrl);
            } else {
                linkCanonical = document.createElement("link");
                linkCanonical.setAttribute("rel", "canonical");
                linkCanonical.setAttribute("href", fullUrl);
                document.head.appendChild(linkCanonical);
            }
        }

        // Update Preload Image
        if (preloadImage) {
            let linkPreload = document.querySelector('link[rel="preload"][as="image"]');
            if (linkPreload) {
                linkPreload.setAttribute("href", preloadImage);
            } else {
                linkPreload = document.createElement("link");
                linkPreload.setAttribute("rel", "preload");
                linkPreload.setAttribute("as", "image");
                linkPreload.setAttribute("href", preloadImage);
                document.head.appendChild(linkPreload);
            }
        } else {
            const existingPreload = document.querySelector('link[rel="preload"][as="image"]');
            if (existingPreload) existingPreload.remove();
        }

        // Update Schema (JSON-LD)
        const existingSchema = document.getElementById("page-schema");
        if (existingSchema) {
            existingSchema.remove();
        }

        if (schema) {
            const script = document.createElement("script");
            script.id = "page-schema";
            script.type = "application/ld+json";
            script.text = JSON.stringify(schema);
            document.head.appendChild(script);
        }
    }, [title, description, keywords, canonical, schema]);

    return null; // This component doesn't render anything visually
};

export default SEO;
