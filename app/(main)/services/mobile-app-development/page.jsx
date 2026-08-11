import MobileDevelopment from "@/views/services/MobileDevelopment";

export const metadata = {
  title:
    "Custom Mobile App Development Company | Android, iOS, Flutter & React Native | SyncTechn",

  description:
    "SyncTechn provides custom mobile app development services for startups, SMBs, and enterprises. We build secure Android, iOS, Flutter, React Native,",

  keywords: [
    "mobile app development company",
    "custom mobile app development",
    "mobile app development services",
    "android app development company",
    "ios app development company",
    "flutter app development company",
    "react native app development",
    "enterprise mobile app development",
    "custom mobile app development company",
    "cross platform app development",
    "ai mobile app development",
    "mobile custom software development",
    "enterprise mobility solutions",
    "business mobile applications",
    "mobile app modernization",
    "app maintenance services",
    "mobile app developers",
    "custom software development",
    "digital transformation services",
    "cloud mobile applications"
  ],

  alternates: {
    canonical:
      "https://synctechn.com/services/mobile-app-development/",
  },

  openGraph: {
    title:
      "Custom Mobile App Development Services | SyncTechn",

    description:
    "Enterprise mobile app development company specializing in Android, iOS, Flutter, React Native, AI-powered mobile applications, cloud-native solutions,",

    url:
      "https://synctechn.com/services/mobile-app-development/",

    siteName: "SyncTechn",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/images/services/mobile-app-development-og.webp",
        width: 1200,
        height: 630,
        alt: "Custom Mobile App Development Company",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Mobile App Development Company | SyncTechn",

    description:
      "Build scalable Android, iOS, Flutter, React Native and enterprise mobile applications with SyncTechn.",

    images: [
      "/images/services/mobile-app-development-og.webp",
    ],
  },

  robots: {
    index: true,
    follow: true,
  },

  metadataBase: new URL("https://synctechn.com"),
};

export default function Page(props) {
  return <MobileDevelopment {...props} />;
}
