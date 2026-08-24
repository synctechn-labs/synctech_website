import AIIntegrationServices from "@/views/services/AIIntegrationServices";

export const metadata = {
  title: "AI Integration Services for Business Systems | SyncTech",
  description:
    "Connect AI into your CRM, ERP, and internal tools. SyncTech's AI integration services help businesses automate workflows and unlock data-driven decisions.",
  keywords: [
    "ai integration services",
    "artificial intelligence integration",
    "llm integration",
    "openai integration",
    "machine learning integration",
    "enterprise ai development services",
    "ai consulting company",
    "custom ai development",
    "cognitive services integration",
    "ai automation",
    "chatgpt api integration",
    "generative ai development services",
    "business ai implementation",
    "predictive analytics",
    "ai powered software"
  ],
  alternates: {
    canonical: "https://synctechn.com/services/ai-integration-services/",
  },
  openGraph: {
    title: "AI Integration Services for Business Systems | SyncTech",
    description:
      "Connect AI into your CRM, ERP, and internal tools. SyncTech's AI integration services help businesses automate workflows and unlock data-driven decisions.",
    url: "https://synctechn.com/services/ai-integration-services/",
    siteName: "SyncTechn",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/services/ai-integration-og.webp",
        width: 1200,
        height: 630,
        alt: "AI Integration Services"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Integration Services for Business Systems | SyncTech",
    description:
      "Connect AI into your CRM, ERP, and internal tools. SyncTech's AI integration services help businesses automate workflows and unlock data-driven decisions.",
    images: [
      "/images/services/ai-integration-og.webp"
    ]
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://synctechn.com"),
};

export default function Page(props) {
  return <AIIntegrationServices {...props} />;
}
