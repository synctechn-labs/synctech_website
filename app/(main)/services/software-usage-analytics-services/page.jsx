import SoftwareUsageIntelligence from "@/views/services/SoftwareUsageIntelligence";

export const metadata = {
  title:
    "Software Usage Analytics | Application Analytics | SyncTechn",

  description:
    "SyncTechn develops custom Software Usage Analytics that track user behavior, feature adoption, and application performance to drive data-driven product",

  keywords: [
    "software usage intelligence",
    "application analytics",
    "product usage tracking",
    "user behavior analytics",
    "feature adoption tracking",
    "saas analytics software",
    "telemetry data collection",
    "product telemetry",
    "software metrics tracking",
    "in app analytics",
    "customer success analytics",
    "b2b software analytics"
  ],

  alternates: {
    canonical:
      "https://synctechn.com/services/software-usage-analytics-services/",
  },

  openGraph: {
    title:
      "Software Usage Analytics | SyncTechn",

    description:
      "Understand exactly how users interact with your software. We build custom telemetry and analytics platforms for deep product insights.",

    url:
      "https://synctechn.com/services/software-usage-analytics-services/",

    siteName: "SyncTechn Software Solutions",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/images/services/software-usage-intelligence-og.webp",
        width: 1200,
        height: 630,
        alt: "Software Usage Analytics"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Software Usage Analytics & Telemetry | SyncTechn",

    description:
      "Track feature adoption, user journeys, and application performance with our custom software intelligence systems.",

    images: [
      "/images/services/software-usage-intelligence-og.webp"
    ]
  },

  robots: {
    index: true,
    follow: true,
  },

  metadataBase: new URL("https://synctechn.com"),
};

export default function Page(props) {
  return <SoftwareUsageIntelligence {...props} />;
}
