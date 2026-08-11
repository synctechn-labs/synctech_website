import OperationsExceptionManagement from "@/views/services/OperationsExceptionManagement";

export const metadata = {
  title:
    "Operations Exception Management | Business Exception Management Software | SyncTechn",

  description:
    "SyncTechn develops Operations Exception Management that help businesses detect, monitor, prioritize, and resolve operational exceptions in real time.",

  keywords: [
    "operations exception management",
    "exception management system",
    "business exception management",
    "operations monitoring software",
    "incident management software",
    "workflow exception management",
    "enterprise operations management",
    "business operations software",
    "exception tracking system",
    "exception monitoring platform",
    "workflow automation",
    "real time operations monitoring",
    "business process monitoring",
    "alert management software",
    "incident tracking software",
    "operations dashboard",
    "root cause analysis software",
    "enterprise workflow software",
    "operational risk management",
    "business process automation",
    "operations management platform",
    "exception reporting software",
    "enterprise monitoring solution",
    "business operations dashboard",
    "workflow management system"
  ],

  alternates: {
    canonical:
      "https://synctechn.com/services/operations-exception-management-software-services/",
  },

  openGraph: {
    title:
      "Operations Exception Management | SyncTechn",

    description:
    "Develop intelligent Operations Exception Management with real-time monitoring, automated alerts, incident management, workflow automation, reporting,",

    url:
      "https://synctechn.com/services/operations-exception-management-software-services/",

    siteName: "SyncTechn",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/images/services/operations-exception-management-og.webp",
        width: 1200,
        height: 630,
        alt: "Operations Exception Management"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Operations Exception Management | SyncTechn",

    description:
    "Monitor, detect, prioritize, and resolve operational exceptions with intelligent dashboards, automated alerts, workflow automation, and enterprise",

    images: [
      "/images/services/operations-exception-management-og.webp"
    ]
  },

  robots: {
    index: true,
    follow: true,
  },

  metadataBase: new URL("https://synctechn.com"),
};

export default function Page(props) {
  return <OperationsExceptionManagement {...props} />;
}
