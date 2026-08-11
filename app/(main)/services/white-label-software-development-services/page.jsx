import WhiteLabelDevelopment from "@/views/services/WhiteLabelDevelopment";

export const metadata = {
  title:
    "White Label Custom Software Development Company | White Label Custom Software Development Services | SyncTechn",

  description:
    "SyncTechn provides white label custom software development services for agencies, startups, SaaS companies, IT consultants, and enterprises. Build",

  keywords: [
    "white label custom software development",
    "white label custom software development company",
    "white label custom software development services",
    "white label development company",
    "software outsourcing company",
    "offshore custom software development",
    "dedicated custom software development team",
    "custom software development",
    "white label custom web development",
    "white label mobile app development",
    "white label SaaS development",
    "white label CRM development",
    "white label ERP development",
    "custom software development partner",
    "software product development",
    "IT outsourcing services",
    "technology partner",
    "private label custom software development",
    "agency custom software development",
    "enterprise custom software development",
    "digital product development",
    "startup technology partner",
    "software engineering services",
    "application development company",
    "business custom software development"
  ],

  alternates: {
    canonical:
      "https://synctechn.com/services/white-label-software-development-services/",
  },

  openGraph: {
    title:
      "White Label Custom Software Development Services | SyncTechn",

    description:
      "Expand your software delivery capabilities with white label custom software development for agencies, startups, SaaS businesses, and enterprises.",

    url:
      "https://synctechn.com/services/white-label-software-development-services/",

    siteName: "SyncTechn",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/images/services/white-label-software-development-services-og.webp",
        width: 1200,
        height: 630,
        alt: "White Label Custom Software Development"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",

    title:
      "White Label Custom Software Development Company | SyncTechn",

    description:
      "Custom white label software, SaaS, web applications, mobile apps, CRM, ERP, AI solutions, and dedicated development teams.",

    images: [
      "/images/services/white-label-software-development-services-og.webp"
    ]
  },

  robots: {
    index: true,
    follow: true,
  },

  metadataBase: new URL("https://synctechn.com"),
};

export default function Page(props) {
  return <WhiteLabelDevelopment {...props} />;
}
