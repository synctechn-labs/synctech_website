import SoftwareDevelopment from "@/views/services/SoftwareDevelopment";

export const metadata = {
  title: "Custom Software Development Company | SyncTechn Software Solutions",

  description:
    "SyncTech is a custom software development company building scalable web, mobile, and AI-powered applications for growing businesses. Get a free project consultation.",

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
      "Custom Software Development Company | SyncTechn",

    description:
    "SyncTech is a custom software development company building scalable web, mobile, and AI-powered applications for growing businesses. Get a free project consultation.",

    url:
      "https://synctechn.com/services/custom-software-development-services/",

    siteName: "SyncTechn Software Solutions",

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
    "SyncTech is a custom software development company building scalable web, mobile, and AI-powered applications for growing businesses. Get a free project consultation.",

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
