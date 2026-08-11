import AIIntegrationServices from "@/views/services/AIIntegrationServices";

export const metadata = {
  title:
    "AI Integration Services | Artificial Intelligence Integration | SyncTechn",

  description:
    "SyncTechn provides custom AI Integration Services. We integrate advanced Large Language Models (LLMs), machine learning algorithms, and cognitive",

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
    canonical:
      "https://synctechn.com/services/ai-integration-services/",
  },

  openGraph: {
    title:
      "AI Integration Services | SyncTechn",

    description:
      "Transform your software with Artificial Intelligence. We integrate cutting-edge LLMs and machine learning models into your enterprise ecosystem.",

    url:
      "https://synctechn.com/services/ai-integration-services/",

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

    title:
      "AI Integration Services | SyncTechn",

    description:
      "Supercharge your enterprise software with custom AI and LLM integrations for intelligent automation and data analysis.",

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
