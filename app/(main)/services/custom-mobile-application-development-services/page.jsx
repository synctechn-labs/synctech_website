import MobileApplicationDevelopment from "@/views/services/MobileApplicationDevelopment";

export const metadata = {
  title:
    "Custom Mobile App Development Company | Custom Mobile App Development Services | SyncTechn",

  description:
    "SyncTechn provides custom custom mobile app development services for Android, iOS, Flutter, React Native, enterprise mobility, SaaS, healthcare,",

  keywords: [
    "custom mobile app development",
    "mobile app development company",
    "custom mobile app development",
    "android app development",
    "ios app development",
    "flutter app development",
    "react native app development",
    "cross platform app development",
    "enterprise mobile app development",
    "mobile custom software development",
    "business mobile applications",
    "custom mobile app development services",
    "hybrid app development",
    "native mobile app development",
    "mobile ui ux design",
    "mobile app consulting",
    "mobile app modernization",
    "startup app development",
    "saas mobile application",
    "ecommerce app development",
    "healthcare mobile app",
    "fintech mobile app",
    "logistics mobile app",
    "mobile app maintenance",
    "mobile app development agency"
  ],

  alternates: {
    canonical:
      "https://synctechn.com/services/custom-mobile-application-development-services/",
  },

  openGraph: {
    title:
      "Custom Mobile App Development Services | SyncTechn",

    description:
    "Develop secure Android, iOS, Flutter, and cross-platform mobile applications with modern UI/UX, cloud integration, enterprise security, and scalable",

    url:
      "https://synctechn.com/services/custom-mobile-application-development-services/",

    siteName: "SyncTechn",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/images/services/custom-mobile-application-development-services-og.webp",
        width: 1200,
        height: 630,
        alt: "Custom Mobile App Development Services"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Custom Custom Mobile App Development Company | SyncTechn",

    description:
      "Android, iOS, Flutter, React Native, enterprise mobile apps, SaaS applications, and cross-platform mobile development.",

    images: [
      "/images/services/custom-mobile-application-development-services-og.webp"
    ]
  },

  robots: {
    index: true,
    follow: true,
  },

  metadataBase: new URL("https://synctechn.com"),
};

export default function Page(props) {
  return <MobileApplicationDevelopment {...props} />;
}
