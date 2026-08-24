import BusinessProcessAutomation from "@/views/services/BusinessProcessAutomation";

export const metadata = {
  title:
    "Business Process Automation Services | BPA Software Solutions | SyncTechn",

  description:
    "SyncTechn provides custom Business Process Automation (BPA) services to streamline workflows, reduce manual data entry, optimize operations, and",

  keywords: [
    "business process automation",
    "bpa services",
    "workflow automation",
    "business automation software",
    "enterprise workflow automation",
    "process optimization software",
    "robotic process automation",
    "rpa solutions",
    "automated data entry",
    "business task automation",
    "operations automation",
    "automation consulting",
    "process mapping software",
    "cloud automation services",
    "document automation",
    "approval workflow software",
    "enterprise automation company",
    "business workflow integration"
  ],

  alternates: {
    canonical:
      "https://synctechn.com/services/business-process-automation-services/",
  },

  openGraph: {
    title:
      "Business Process Automation Services | SyncTechn",

    description:
      "Automate repetitive tasks, streamline operations, and boost employee productivity with custom Business Process Automation (BPA) solutions from SyncTechn.",

    url:
      "https://synctechn.com/services/business-process-automation-services/",

    siteName: "SyncTechn Software Solutions",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/images/services/business-process-automation-services-og.webp",
        width: 1200,
        height: 630,
        alt: "Business Process Automation Services"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Business Process Automation Services | SyncTechn",

    description:
      "Streamline enterprise workflows, reduce manual labor, and optimize operations with intelligent Business Process Automation solutions.",

    images: [
      "/images/services/business-process-automation-services-og.webp"
    ]
  },

  robots: {
    index: true,
    follow: true,
  },

  metadataBase: new URL("https://synctechn.com"),
};

export default function Page(props) {
  return <BusinessProcessAutomation {...props} />;
}
