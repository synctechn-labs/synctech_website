import AIQualityControl from "@/views/services/AIQualityControl";

export const metadata = {
  title:
    "AI Quality Control | Computer Vision AI | SyncTechn",

  description:
    "SyncTechn develops AI Quality Control. Automate visual inspections, detect manufacturing defects in real-time, and ensure product compliance using",

  keywords: [
    "ai quality control",
    "automated visual inspection",
    "computer vision quality assurance",
    "ai defect detection",
    "manufacturing ai development services",
    "smart factory software",
    "machine vision software",
    "real time defect detection",
    "industrial ai",
    "quality assurance automation",
    "production line ai",
    "visual quality inspection"
  ],

  alternates: {
    canonical:
      "https://synctechn.com/services/ai-quality-control-solutions-services/",
  },

  openGraph: {
    title:
      "AI Quality Control | SyncTechn",

    description:
      "Catch defects before they ship. We build custom computer vision platforms that automate visual quality control on manufacturing and assembly lines.",

    url:
      "https://synctechn.com/services/ai-quality-control-solutions-services/",

    siteName: "SyncTechn",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/images/services/ai-quality-control-og.webp",
        width: 1200,
        height: 630,
        alt: "AI-Assisted Quality Control"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Computer Vision Quality Control | SyncTechn",

    description:
      "Automate your manufacturing inspections with AI. Detect microscopic defects in real-time with machine vision.",

    images: [
      "/images/services/ai-quality-control-og.webp"
    ]
  },

  robots: {
    index: true,
    follow: true,
  },

  metadataBase: new URL("https://synctechn.com"),
};

export default function Page(props) {
  return <AIQualityControl {...props} />;
}
