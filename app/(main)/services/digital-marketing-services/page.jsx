import DigitalMarketing from "@/views/services/DigitalMarketing";

export const metadata = {
  title:
    "Digital Marketing Agency | SEO, PPC, Social Media & Performance Marketing Services | SyncTechn",

  description:
    "SyncTechn provides digital marketing services including SEO, PPC advertising, social media marketing, content marketing, email marketing, performance",

  keywords: [
    "digital marketing agency",
    "digital marketing services",
    "seo company",
    "search engine optimization services",
    "performance marketing agency",
    "social media marketing services",
    "content marketing services",
    "email marketing services",
    "google ads management",
    "ppc management services",
    "local seo services",
    "technical seo",
    "on page seo",
    "off page seo",
    "seo audit services",
    "lead generation services",
    "conversion rate optimization",
    "facebook ads agency",
    "instagram marketing",
    "linkedin marketing",
    "youtube marketing",
    "online marketing agency",
    "startup marketing agency",
    "branding and digital marketing services",
    "marketing automation"
  ],

  alternates: {
    canonical:
      "https://synctechn.com/services/digital-marketing-services/",
  },

  openGraph: {
    title:
      "Digital Marketing Services | SEO, PPC & Social Media | SyncTechn",

    description:
    "Grow your business with SEO, paid advertising, social media marketing, content marketing, email marketing, and performance marketing services from",

    url:
      "https://synctechn.com/services/digital-marketing-services/",

    siteName: "SyncTechn Software Solutions",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/images/services/digital-marketing-services-og.webp",
        width: 1200,
        height: 630,
        alt: "Digital Marketing Services"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Digital Marketing Agency | SyncTechn",

    description:
      "SEO, PPC, Social Media Marketing, Content Marketing, Lead Generation, Email Marketing, and Performance Marketing services.",

    images: [
      "/images/services/digital-marketing-services-og.webp"
    ]
  },

  robots: {
    index: true,
    follow: true,
  },

  metadataBase: new URL("https://synctechn.com"),
};

export default function Page(props) {
  return <DigitalMarketing {...props} />;
}
