import React from 'react';

export default function AIDevelopmentLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://synctechn.com/services/ai-development-services/#service",
        "name": "AI Development Services",
        "serviceType": "AI Development",
        "provider": {
          "@id": "https://synctechn.com/#organization"
        },
        "description": "Custom AI integration, automation, and machine learning development for businesses.",
        "url": "https://synctechn.com/services/ai-development-services/",
        "areaServed": "Global",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "AI Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Generative AI Development"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Machine Learning Development"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "AI Automation"
              }
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://synctechn.com/services/ai-development-services/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What does an AI development company do?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "An AI development company specializes in building and integrating machine learning models, automation, and AI-powered features into products, rather than just traditional software engineering."
            }
          },
          {
            "@type": "Question",
            "name": "How much does AI development cost?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The cost of AI development depends on the complexity of the models, data requirements, and integration needs. Simple integrations can start around $10,000, while complex custom machine learning models can cost upwards of $100,000."
            }
          },
          {
            "@type": "Question",
            "name": "Can SyncTechn integrate AI into existing software?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we can integrate AI models like OpenAI's GPT, custom LLMs, or predictive algorithms into your existing CRM, ERP, or custom web applications."
            }
          }
        ]
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
