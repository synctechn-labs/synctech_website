import SoftwareDevelopment from "@/views/services/SoftwareDevelopment";

export const metadata = {
  title:
    "Custom Software Development Company | Enterprise Custom Software Development Services | SyncTechn",

  description:
    "SyncTechn provides custom software development services for startups, SMBs, and enterprises. We build secure, scalable, and cloud-native software",

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
      "https://synctechn.com/services/custom-software-development-services/",
  },

  openGraph: {
    title:
      "Custom Software Development Services | SyncTechn",

    description:
    "Build secure, scalable, and future-ready custom software solutions including enterprise applications, SaaS platforms, business software, APIs,",

    url:
      "https://synctechn.com/services/custom-software-development-services/",

    siteName: "SyncTechn",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/images/services/custom-software-development-services-og.webp",
        width: 1200,
        height: 630,
        alt: "Custom Software Development Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Custom Software Development Company | SyncTechn",

    description:
    "Enterprise custom software development services including SaaS platforms, business applications, workflow automation, APIs, cloud-native software, and",

    images: [
      "/images/services/custom-software-development-services-og.webp",
    ],
  },

  robots: {
    index: true,
    follow: true,
  },

  metadataBase: new URL("https://synctechn.com"),
};

export default function Page(props) {
  return <SoftwareDevelopment {...props} />;
}
