import { useEffect } from "react";

const SEO = ({ 
  title, 
  description, 
  keywords, 
  canonicalUrl,
  ogTitle,
  ogDescription,
  ogUrl,
  ogType,
  twitterTitle,
  twitterDescription,
  schema 
}) => {
  useEffect(() => {
    // 1. Update title
    document.title = title;

    // 2. Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", description);

    // 3. Update meta keywords
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement("meta");
        metaKeywords.setAttribute("name", "keywords");
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute("content", keywords);
    }

    // 4. Update canonical link
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement("link");
      linkCanonical.setAttribute("rel", "canonical");
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute("href", canonicalUrl || window.location.href);

    // 5. Update Open Graph Title
    if (ogTitle) {
      let metaOgTitle = document.querySelector('meta[property="og:title"]');
      if (!metaOgTitle) {
        metaOgTitle = document.createElement("meta");
        metaOgTitle.setAttribute("property", "og:title");
        document.head.appendChild(metaOgTitle);
      }
      metaOgTitle.setAttribute("content", ogTitle);
    }

    // 6. Update Open Graph Description
    if (ogDescription) {
      let metaOgDesc = document.querySelector('meta[property="og:description"]');
      if (!metaOgDesc) {
        metaOgDesc = document.createElement("meta");
        metaOgDesc.setAttribute("property", "og:description");
        document.head.appendChild(metaOgDesc);
      }
      metaOgDesc.setAttribute("content", ogDescription);
    }

    // 7. Update Open Graph URL
    let metaOgUrl = document.querySelector('meta[property="og:url"]');
    if (!metaOgUrl) {
      metaOgUrl = document.createElement("meta");
      metaOgUrl.setAttribute("property", "og:url");
      document.head.appendChild(metaOgUrl);
    }
    metaOgUrl.setAttribute("content", ogUrl || canonicalUrl || window.location.href);

    // 8. Update Open Graph Type
    let metaOgType = document.querySelector('meta[property="og:type"]');
    if (!metaOgType) {
      metaOgType = document.createElement("meta");
      metaOgType.setAttribute("property", "og:type");
      document.head.appendChild(metaOgType);
    }
    metaOgType.setAttribute("content", ogType || "website");

    // 8.5. Update/inject Twitter Card Meta Tags
    if (twitterTitle || ogTitle) {
      let metaTwitterTitle = document.querySelector('meta[name="twitter:title"]');
      if (!metaTwitterTitle) {
        metaTwitterTitle = document.createElement("meta");
        metaTwitterTitle.setAttribute("name", "twitter:title");
        document.head.appendChild(metaTwitterTitle);
      }
      metaTwitterTitle.setAttribute("content", twitterTitle || ogTitle);
    }

    if (twitterDescription || ogDescription) {
      let metaTwitterDesc = document.querySelector('meta[name="twitter:description"]');
      if (!metaTwitterDesc) {
        metaTwitterDesc = document.createElement("meta");
        metaTwitterDesc.setAttribute("name", "twitter:description");
        document.head.appendChild(metaTwitterDesc);
      }
      metaTwitterDesc.setAttribute("content", twitterDescription || ogDescription);
    }

    // 9. Update/inject JSON-LD Schema
    if (schema) {
      let scriptSchema = document.querySelector('script[type="application/ld+json"]#seo-jsonld');
      if (!scriptSchema) {
        scriptSchema = document.createElement("script");
        scriptSchema.setAttribute("type", "application/ld+json");
        scriptSchema.setAttribute("id", "seo-jsonld");
        document.head.appendChild(scriptSchema);
      }
      scriptSchema.textContent = JSON.stringify(schema);
    }
  }, [title, description, keywords, canonicalUrl, ogTitle, ogDescription, ogUrl, ogType, twitterTitle, twitterDescription, schema]);

  return null; // This component doesn't render anything visually
};

export default SEO;
