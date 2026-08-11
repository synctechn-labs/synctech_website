import ERPSolutions from "@/views/services/ERPSolutions";

export const metadata = {
  title:
    "Custom ERP Custom Software Development Company | Enterprise ERP Custom Software Development Services | SyncTechn",

  description:
    "SyncTechn develops custom ERP software to streamline finance, HR, inventory, procurement, manufacturing, CRM, warehouse, and business operations. Our",

  keywords: [
    "custom ERP development",
    "ERP development company",
    "ERP custom software development",
    "enterprise ERP software",
    "custom ERP software",
    "ERP solution provider",
    "ERP application development",
    "cloud ERP software",
    "ERP implementation services",
    "ERP integration",
    "business management software",
    "inventory management system",
    "warehouse management software",
    "manufacturing ERP",
    "procurement software",
    "HR management software",
    "finance management software",
    "CRM ERP integration",
    "enterprise resource planning",
    "ERP consulting",
    "workflow automation",
    "business process automation",
    "digital transformation",
    "enterprise custom software development",
    "ERP modernization"
  ],

  alternates: {
    canonical:
      "https://synctechn.com/services/custom-erp-software-development-services/",
  },

  openGraph: {
    title:
      "Custom ERP Custom Software Development Services | SyncTechn",

    description:
      "Develop secure, scalable, and intelligent ERP software that unifies your business operations, automates workflows, and improves organizational efficiency.",

    url:
      "https://synctechn.com/services/custom-erp-software-development-services/",

    siteName: "SyncTechn",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/images/services/custom-erp-software-development-services-og.webp",
        width: 1200,
        height: 630,
        alt: "Custom ERP Custom Software Development Services"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Enterprise ERP Custom Software Development | SyncTechn",

    description:
      "Custom ERP custom software development for finance, HR, inventory, manufacturing, procurement, CRM, warehouse, and enterprise automation.",

    images: [
      "/images/services/custom-erp-software-development-services-og.webp"
    ]
  },

  robots: {
    index: true,
    follow: true
  },

  metadataBase: new URL("https://synctechn.com"),
};

export default function Page(props) {
  return <ERPSolutions {...props} />;
}
