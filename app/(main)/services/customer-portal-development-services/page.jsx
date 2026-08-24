import CustomerPortalDevelopment from "@/views/services/CustomerPortalDevelopment";

export const metadata = {
  title:
    "Customer Portal Development Company | Custom Customer Portal Development Services | SyncTechn",

  description:
    "SyncTechn provides custom customer portal development services including self-service portals, customer dashboards, client management portals, secure",

  keywords: [
    "client portal development",
    "customer portal development",
    "custom customer portal",
    "client portal development company",
    "customer portal software",
    "self service portal development",
    "customer self service portal",
    "client management portal",
    "customer dashboard",
    "secure client portal",
    "enterprise customer portal",
    "b2b portal development",
    "b2c portal development",
    "partner portal development",
    "member portal development",
    "customer account portal",
    "online customer portal",
    "portal application development",
    "web portal development",
    "customer engagement platform",
    "document management portal",
    "support portal development",
    "business portal development",
    "enterprise portal solutions",
    "portal custom software development"
  ],

  alternates: {
    canonical:
      "https://synctechn.com/services/customer-portal-development-services/",
  },

  openGraph: {
    title:
      "Customer Portal Development Services | SyncTechn",

    description:
    "Develop secure client and customer portals with self-service features, dashboards, document management, workflow automation, account management, and",

    url:
      "https://synctechn.com/services/customer-portal-development-services/",

    siteName: "SyncTechn Software Solutions",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/images/services/customer-portal-development-og.webp",
        width: 1200,
        height: 630,
        alt: "Customer Portal Development"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Customer Portal Development Company | SyncTechn",

    description:
    "Custom customer portals, client dashboards, self-service portals, partner portals, secure document sharing, workflow automation, and enterprise portal",

    images: [
      "/images/services/customer-portal-development-og.webp"
    ]
  },

  robots: {
    index: true,
    follow: true,
  },

  metadataBase: new URL("https://synctechn.com"),
};

export default function Page(props) {
  return <CustomerPortalDevelopment {...props} />;
}
