import APIDevelopmentIntegration from "@/views/services/APIDevelopmentIntegration";

export const metadata = {
  title:
    "API Development & Integration Services | Custom APIs | SyncTechn",

  description:
    "SyncTechn provides custom API development and integration services. We build secure, scalable RESTful and GraphQL APIs that allow your applications to",

  keywords: [
    "api development",
    "api integration services",
    "custom api development",
    "rest api development",
    "graphql api services",
    "api integration company",
    "third party api integration",
    "backend api development",
    "microservices architecture",
    "api security",
    "api consulting",
    "software connectivity",
    "payment gateway integration",
    "api management",
    "api design",
    "b2b api integration"
  ],

  alternates: {
    canonical:
      "https://synctechn.com/services/api-development-integration-services/",
  },

  openGraph: {
    title:
      "API Development & Integration Services | SyncTechn",

    description:
      "Build a connected digital ecosystem. We develop robust, secure, and scalable APIs to power your web and mobile applications.",

    url:
      "https://synctechn.com/services/api-development-integration-services/",

    siteName: "SyncTechn Software Solutions",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/images/services/api-development-og.webp",
        width: 1200,
        height: 630,
        alt: "API Development Services"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",

    title:
      "API Development & Integration | SyncTechn",

    description:
      "Secure RESTful and GraphQL API development services. Connect your software and scale your architecture.",

    images: [
      "/images/services/api-development-og.webp"
    ]
  },

  robots: {
    index: true,
    follow: true,
  },

  metadataBase: new URL("https://synctechn.com"),
};

export default function Page(props) {
  return <APIDevelopmentIntegration {...props} />;
}
