import BusinessSystemIntegration from "@/views/services/BusinessSystemIntegration";

export const metadata = {
  title:
    "Business System Integration | Enterprise Software Integration | SyncTechn",

  description:
    "SyncTechn develops Business System Integrations that connect your ERP, CRM, HRMS, and legacy systems into a unified architecture. Eliminate data silos,",

  keywords: [
    "business system integration",
    "enterprise software integration",
    "system integration hub",
    "erp integration",
    "crm integration",
    "data synchronization",
    "legacy system integration",
    "middleware development",
    "enterprise service bus",
    "api integration platform",
    "cloud system integration",
    "b2b integration solutions",
    "software connectivity",
    "data silo elimination",
    "cross platform integration",
    "hybrid integration platform"
  ],

  alternates: {
    canonical:
      "https://synctechn.com/services/business-system-integration-services/",
  },

  openGraph: {
    title:
      "Business System Integration | SyncTechn",

    description:
      "Connect your disparate enterprise software into a unified ecosystem. We develop integration hubs that synchronize data in real-time and eliminate silos.",

    url:
      "https://synctechn.com/services/business-system-integration-services/",

    siteName: "SyncTechn Software Solutions",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/images/services/system-integration-og.webp",
        width: 1200,
        height: 630,
        alt: "Business System Integration"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Enterprise System Integration Services | SyncTechn",

    description:
      "Unify your technology stack with custom middleware and API integration hubs for real-time data synchronization across all departments.",

    images: [
      "/images/services/system-integration-og.webp"
    ]
  },

  robots: {
    index: true,
    follow: true,
  },

  metadataBase: new URL("https://synctechn.com"),
};

export default function Page(props) {
  return <BusinessSystemIntegration {...props} />;
}
