import WebDevelopment from "@/views/services/WebDevelopment";

export const metadata = {
  title:
    "Custom Web Development Company | Website & Web Application Development Services | SyncTechn",

  description:
    "SyncTechn is a custom web development company providing website development, web application development, eCommerce development, React, Next.js,",

  keywords: [
    "custom web development company",
    "custom web development",
    "custom web development services",
    "website development company",
    "website development services",
    "web application development",
    "enterprise web application development",
    "custom website development",
    "react development company",
    "next.js development company",
    "node.js development company",
    "python custom web development",
    "full stack custom web development",
    "frontend development services",
    "backend development services",
    "ecommerce website development",
    "cms development services",
    "headless cms development",
    "api development services",
    "rest api development",
    "graphql development",
    "saas application development",
    "enterprise custom software development",
    "cloud application development",
    "progressive web app development",
    "responsive website development",
    "seo friendly website development",
    "website redesign services",
    "website maintenance services",
    "website modernization",
    "digital transformation services"
  ],

  alternates: {
    canonical:
      "https://synctechn.com/services/custom-web-development-services/",
  },

  openGraph: {
    title:
      "Custom Web Development Services | SyncTechn",

    description:
    "Build secure, scalable, and high-performance websites, web applications, SaaS platforms, enterprise portals, and eCommerce solutions with SyncTechn.",

    url:
      "https://synctechn.com/services/custom-web-development-services/",

    siteName: "SyncTechn Software Solutions",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/images/services/custom-web-development-services-og.webp",
        width: 1200,
        height: 630,
        alt: "Custom Web Development Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Custom Web Development Company | SyncTechn",

    description:
    "Enterprise custom web development services including custom websites, web applications, React, Next.js, Node.js, SaaS platforms, cloud-native",

    images: [
      "/images/services/custom-web-development-services-og.webp",
    ],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category: "Technology",

  creator: "SyncTechn",

  publisher: "SyncTechn Software Solutions",

  applicationName: "SyncTechn Software Solutions",

  metadataBase: new URL("https://synctechn.com"),
};

export default function Page(props) {
  return <WebDevelopment {...props} />;
}
