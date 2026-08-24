import React from 'react';

export default function AIIntegrationLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://synctechn.com/services/ai-integration-services/#service",
        "name": "AI Integration Services",
        "serviceType": "AI Integration",
        "provider": {
          "@id": "https://synctechn.com/#organization"
        },
        "description": "Connect AI into your CRM, ERP, and internal tools. SyncTech's AI integration services help businesses automate workflows and unlock data-driven decisions.",
        "url": "https://synctechn.com/services/ai-integration-services/",
        "areaServed": "Global",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "AI Integration Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "CRM AI Integration"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "ERP AI Integration"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Workflow Automation"
              }
            }
          ]
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
