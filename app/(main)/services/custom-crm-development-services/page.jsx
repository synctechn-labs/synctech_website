import CustomCRMDevelopment from "@/views/services/CustomCRMDevelopment";

export const metadata = {
  title:
    "Custom CRM Development Company | CRM Custom Software Development Services | SyncTechn",

  description:
    "SyncTechn develops custom CRM software tailored to your sales, customer support, marketing, and business operations. Build scalable CRM solutions with",

  keywords: [
    "custom CRM development",
    "CRM custom software development",
    "CRM development company",
    "customer relationship management software",
    "custom CRM software",
    "sales CRM development",
    "enterprise CRM development",
    "CRM application development",
    "CRM platform development",
    "lead management software",
    "sales automation software",
    "customer management system",
    "CRM workflow automation",
    "CRM dashboard",
    "customer portal development",
    "CRM integration services",
    "cloud CRM development",
    "CRM solution provider",
    "business CRM software",
    "CRM consulting services",
    "CRM migration",
    "CRM maintenance",
    "CRM reporting software",
    "CRM analytics",
    "CRM customization"
  ],

  alternates: {
    canonical:
      "https://synctechn.com/services/custom-crm-development-services/",
  },

  openGraph: {
    title:
      "Custom CRM Development Services | SyncTechn",

    description:
    "Develop secure and scalable CRM software with lead management, sales automation, workflow automation, customer portals, analytics, and enterprise",

    url:
      "https://synctechn.com/services/custom-crm-development-services/",

    siteName: "SyncTechn Software Solutions",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/images/services/custom-crm-development-services-og.webp",
        width: 1200,
        height: 630,
        alt: "Custom CRM Development Services"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Custom CRM Development Company | SyncTechn",

    description:
      "Build custom CRM software with sales automation, lead management, workflow automation, customer engagement tools, and enterprise integrations.",

    images: [
      "/images/services/custom-crm-development-services-og.webp"
    ]
  },

  robots: {
    index: true,
    follow: true,
  },

  metadataBase: new URL("https://synctechn.com"),
};

export default function Page(props) {
  return <CustomCRMDevelopment {...props} />;
}
