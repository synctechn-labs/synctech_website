import CRMSolutions from "@/views/services/CRMSolutions";

export const metadata = {
  title:
    "CRM Development Company | Custom CRM Custom Software Development Services | SyncTechn",

  description:
    "SyncTechn provides custom CRM development services including CRM custom software development, CRM customization, CRM integration, sales automation,",

  keywords: [
    "crm development company",
    "crm custom software development",
    "custom crm development",
    "customer relationship management",
    "crm development services",
    "crm software company",
    "enterprise crm development",
    "sales crm software",
    "crm implementation services",
    "crm consulting services",
    "crm integration services",
    "crm automation",
    "sales automation software",
    "lead management software",
    "customer management software",
    "workflow automation",
    "crm dashboard development",
    "crm customization",
    "cloud crm software",
    "crm application development",
    "hubspot crm development",
    "salesforce development",
    "zoho crm customization",
    "microsoft dynamics crm",
    "business crm software",
    "customer support software",
    "crm migration services",
    "crm maintenance services"
  ],

  alternates: {
    canonical: "https://synctechn.com/services/crm-development-services/",
  },

  openGraph: {
    title:
      "Custom CRM Development Services | SyncTechn",

    description:
      "Build secure and scalable CRM software to automate sales, customer service, marketing, lead management, and business workflows with SyncTechn.",

    url:
      "https://synctechn.com/services/crm-development-services-development/",

    siteName: "SyncTechn Software Solutions",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/images/services/crm-development-services-development-og.webp",
        width: 1200,
        height: 630,
        alt: "CRM Development Services"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",

    title:
      "CRM Custom Software Development Company | SyncTechn",

    description:
      "Custom CRM custom software development, CRM integration, workflow automation, sales automation, cloud CRM solutions, and enterprise CRM development.",

    images: [
      "/images/services/crm-development-services-development-og.webp"
    ]
  },

  robots: {
    index: true,
    follow: true,
  },

  metadataBase: new URL("https://synctechn.com"),
};

export default function Page(props) {
  return <CRMSolutions {...props} />;
}
