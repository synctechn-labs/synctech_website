import SaaSSolutions from "@/views/services/SaaSSolutions";

export const metadata = {
  title:
    "SaaS Product Development Company | Custom SaaS Application Development Services | SyncTechn",

  description:
    "SyncTechn provides SaaS product development services including custom SaaS application development, multi-tenant software, cloud-native SaaS platforms,",

  keywords: [
    "saas product development",
    "saas development company",
    "custom saas development",
    "saas application development",
    "software as a service development",
    "cloud saas development",
    "multi tenant application",
    "enterprise saas solutions",
    "saas platform development",
    "saas custom software development",
    "mvp development company",
    "startup custom software development",
    "subscription management software",
    "cloud native applications",
    "api development",
    "microservices development",
    "custom software development",
    "business custom software development",
    "saas consulting",
    "saas migration",
    "product engineering services",
    "web application development",
    "scalable software architecture",
    "startup technology partner",
    "digital product development"
  ],

  alternates: {
    canonical:
      "https://synctechn.com/services/saas-product-development-services/",
  },

  openGraph: {
    title:
      "Custom SaaS Product Development Services | SyncTechn",

    description:
    "Build secure, scalable, and cloud-native SaaS products with multi-tenant architecture, subscription management, API integrations, and modern software",

    url:
      "https://synctechn.com/services/saas-product-development-services/",

    siteName: "SyncTechn Software Solutions",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/images/services/saas-development-og.webp",
        width: 1200,
        height: 630,
        alt: "SaaS Product Development Services"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",

    title:
      "SaaS Product Development Company | SyncTechn",

    description:
      "Custom SaaS development, cloud-native software, MVP development, enterprise SaaS applications, subscription platforms, and scalable product engineering.",

    images: [
      "/images/services/saas-development-og.webp"
    ]
  },

  robots: {
    index: true,
    follow: true,
  },

  metadataBase: new URL("https://synctechn.com"),
};

export default function Page(props) {
  return <SaaSSolutions {...props} />;
}
