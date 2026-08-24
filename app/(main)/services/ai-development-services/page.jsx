import AISolutions from "@/views/services/AISolutions";

export const metadata = {
  title: "AI Development Company | Custom AI Integration & Automation — SyncTechn Software Solutions",
  description:
    "SyncTech is an AI development company delivering custom AI integration, automation, and machine learning solutions for businesses. Talk to our AI engineers today.",
  keywords: [
    "ai development company",
    "artificial intelligence development",
    "custom ai development services",
    "ai development services",
    "generative ai development",
    "machine learning development",
    "llm development",
    "ai chatbot development",
    "chatgpt integration",
    "ai agent development",
    "computer vision development",
    "natural language processing",
    "predictive analytics",
    "recommendation engine development",
    "rag development",
    "vector database",
    "langchain development",
    "openai integration",
    "business ai automation",
    "enterprise ai development services",
    "intelligent document processing",
    "ocr ai",
    "voice ai",
    "ai consulting services",
    "ai custom software development"
  ],
  alternates: {
    canonical: "https://synctechn.com/services/ai-development-services/",
  },
  openGraph: {
    title: "AI Development Company | Custom AI Integration & Automation — SyncTechn Software Solutions",
    description:
      "SyncTech is an AI development company delivering custom AI integration, automation, and machine learning solutions for businesses. Talk to our AI engineers today.",
    url: "https://synctechn.com/services/ai-development-services/",
    siteName: "SyncTechn Software Solutions",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/services/ai-development-og.webp",
        width: 1200,
        height: 630,
        alt: "AI Development Services"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Development Company | SyncTechn Software Solutions",
    description:
      "SyncTech is an AI development company delivering custom AI integration, automation, and machine learning solutions for businesses. Talk to our AI engineers today.",
    images: [
      "/images/services/ai-development-og.webp"
    ]
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://synctechn.com"),
};

export default function Page(props) {
  return <AISolutions {...props} />;
}
