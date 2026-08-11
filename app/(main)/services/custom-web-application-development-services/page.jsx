import WebApplicationDevelopment from "@/views/services/WebApplicationDevelopment";

export const metadata = {
  title:
    "Custom Web Application Development Company | Web Application Development Services | SyncTechn",

  description:
    "SyncTechn provides custom web application development services including enterprise web applications, business portals, SaaS applications, CRM, ERP,",

  keywords: [
    "custom web application development",
    "web application development company",
    "web application development services",
    "custom web app development",
    "enterprise web application development",
    "business web application",
    "web custom software development",
    "cloud web applications",
    "custom business applications",
    "web portal development",
    "enterprise portal development",
    "workflow automation software",
    "saas web application",
    "api development",
    "crm web application",
    "erp web application",
    "business process automation",
    "react custom web development",
    "next js development",
    "node js development",
    "python custom web development",
    "full stack custom web development",
    "progressive web application",
    "digital transformation services",
    "enterprise custom software development"
  ],

  alternates: {
    canonical:
      "https://synctechn.com/services/custom-web-application-development-services/",
  },

  openGraph: {
    title:
      "Custom Web Application Development Services | SyncTechn",

    description:
      "Develop secure, scalable, and cloud-ready web applications for startups, enterprises, and growing businesses using modern technologies.",

    url:
      "https://synctechn.com/services/custom-web-application-development-services/",

    siteName: "SyncTechn",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/images/services/web-application-development-og.webp",
        width: 1200,
        height: 630,
        alt: "Custom Web Application Development"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Custom Web Application Development Company | SyncTechn",

    description:
      "Enterprise web applications, SaaS platforms, business portals, workflow automation, cloud applications, and full-stack custom web development.",

    images: [
      "/images/services/web-application-development-og.webp"
    ]
  },

  robots: {
    index: true,
    follow: true,
  },

  metadataBase: new URL("https://synctechn.com"),
};

export default function Page(props) {
  return <WebApplicationDevelopment {...props} />;
}
