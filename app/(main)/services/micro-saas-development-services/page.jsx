import MicroSaaSDevelopment from "@/views/services/MicroSaaSDevelopment";

export const metadata = {
  title:
    "Micro-SaaS Development | Niche SaaS | SyncTechn",

  description:
    "SyncTechn develops custom Micro-SaaS platforms. Build highly focused, profitable, and scalable SaaS products designed for niche B2B and B2C markets.",

  keywords: [
    "micro saas development",
    "niche saas software",
    "saas mvp development",
    "custom software development",
    "b2b micro saas",
    "profitable saas development",
    "saas startup development",
    "subscription software",
    "white label saas",
    "saas architecture",
    "cloud native saas",
    "agile saas development"
  ],

  alternates: {
    canonical:
      "https://synctechn.com/services/micro-saas-development-services/",
  },

  openGraph: {
    title:
      "Micro-SaaS Development Services | SyncTechn",

    description:
      "Turn your niche software idea into a profitable subscription business. We build secure, scalable Micro-SaaS platforms from MVP to launch.",

    url:
      "https://synctechn.com/services/micro-saas-development-services/",

    siteName: "SyncTechn Software Solutions",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/images/services/micro-saas-og.webp",
        width: 1200,
        height: 630,
        alt: "Micro-SaaS Development"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Micro-SaaS Development Company | SyncTechn",

    description:
      "Develop highly focused, subscription-based software products designed to solve specific problems for niche markets.",

    images: [
      "/images/services/micro-saas-og.webp"
    ]
  },

  robots: {
    index: true,
    follow: true,
  },

  metadataBase: new URL("https://synctechn.com"),
};

export default function Page(props) {
  return <MicroSaaSDevelopment {...props} />;
}
