import React from 'react';

export const metadata = {
  title:
    "Enterprise Custom Software Development Services | Synctechn Software Solutions",

  description:
    "Transform your business with enterprise-grade custom software development services from Synctechn Software Solutions. We design, build, and scale bespoke software solutions, cloud-native applications, and tailored systems. Get a free engineering consultation today.",

  keywords: [
    "custom software development",
    "custom software development company",
    "custom software development services",
    "enterprise custom software development",
    "custom software solutions",
    "business custom software development",
    "software product development",
    "enterprise application development",
    "saas development company",
    "cloud custom software development",
    "software consulting services",
    "crm custom software development",
    "erp custom software development",
    "api development services",
    "workflow automation software",
    "business process automation",
    "ai custom software development",
    "cloud native applications",
    "startup custom software development company",
    "digital transformation services"
  ],

  alternates: {
    canonical:
      "https://synctechn.com/services/software-development/",
  },

  openGraph: {
    title:
      "Custom Software Development Services | SyncTechn",

    description:
      "Build secure, scalable, and future-ready custom software solutions including enterprise applications, SaaS platforms, business software, APIs, AI-powered solutions, and cloud-native applications.",

    url:
      "https://synctechn.com/services/software-development/",

    siteName: "SyncTechn",

    locale: "en_IN",

    type: "website",

    images: [
      {
        url: "/images/services/custom-software-development-services-og.webp",
        width: 1200,
        height: 630,
        alt: "Custom Software Development Services"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Custom Software Development Company | SyncTechn",

    description:
      "Enterprise software development services including SaaS platforms, business applications, workflow automation, APIs, cloud-native software, and AI-powered solutions.",

    images: [
      "/images/services/custom-software-development-services-og.webp"
    ]
  },

  robots: {
    index: true,
    follow: true,
  },

  metadataBase: new URL("https://synctechn.com"),
};

export default function CustomSoftwareLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [

      {
        "@type": "Service",
        "@id": "https://synctechn.com/services/custom-software-development-services/#service",
        "name": "Custom Software Development Services",
        "serviceType": "Software Engineering & Application Development",
        "provider": {
          "@id": "https://synctechn.com/#organization"
        },
        "description": "End-to-end custom software development services tailored for startups, SMEs, and global enterprises. We specialize in bespoke software development, cloud application architecture, legacy system modernization, and enterprise API integrations.",
        "areaServed": "Global",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Software Engineering Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Bespoke Enterprise Software Development"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "SaaS Product Engineering"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Legacy Software Modernization"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Custom ERP & CRM Development"
              }
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://synctechn.com/services/custom-software-development-services/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What are custom software development services?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Custom software development services involve the process of designing, building, deploying, and maintaining software applications tailored specifically to the unique business processes, workflows, and operational needs of an individual organization, unlike commercial off-the-shelf software."
            }
          },
          {
            "@type": "Question",
            "name": "How much does custom software development cost at Synctechn Software Solutions?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The cost of bespoke software development depends on project scope, complexity, technology stack, integration requirements, and security compliance. Mid-sized business applications typically range from $25,000 to $75,000, while complex enterprise systems range from $80,000 to $250,000+. We offer transparent fixed-price and dedicated team engagement models."
            }
          },
          {
            "@type": "Question",
            "name": "How long does it take to develop custom business software?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A standard Minimum Viable Product (MVP) or targeted software module usually takes between 8 to 14 weeks. Comprehensive enterprise software development projects typically take 4 to 9 months depending on feature sets, testing iterations, and third-party integrations."
            }
          },
          {
            "@type": "Question",
            "name": "Who owns the Intellectual Property (IP) and source code?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You retain 100% ownership of the source code, intellectual property rights, database schemas, and digital assets upon completion of the project. Synctechn Software Solutions signs strict non-disclosure agreements (NDAs) prior to discovery."
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
