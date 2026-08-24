import AIDocumentVerification from "@/views/services/AIDocumentVerification";

export const metadata = {
  title:
    "AI Document Verification | Fraud Detection AI | SyncTechn",

  description:
    "SyncTechn develops custom AI Document Verification. Automate KYC compliance, detect fraudulent documents, and verify IDs instantly with computer vision",

  keywords: [
    "ai document verification",
    "document fraud detection",
    "kyc automation software",
    "ai identity verification",
    "id verification api",
    "document scanning ai",
    "optical character recognition",
    "ocr document processing",
    "machine learning fraud detection",
    "automated document checking",
    "aml compliance software",
    "fintech security solutions",
    "passport verification api"
  ],

  alternates: {
    canonical:
      "https://synctechn.com/services/ai-document-verification-services/",
  },

  openGraph: {
    title:
      "AI Document Verification | SyncTechn",

    description:
      "Protect your business from fraud. We build AI systems that instantly verify IDs, passports, and financial documents with pixel-perfect accuracy.",

    url:
      "https://synctechn.com/services/ai-document-verification-services/",

    siteName: "SyncTechn Software Solutions",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/images/services/ai-document-verification-og.webp",
        width: 1200,
        height: 630,
        alt: "AI Document Verification"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",

    title:
      "AI Document Verification & KYC | SyncTechn",

    description:
      "Automate your compliance and fraud detection with advanced AI-powered document verification software.",

    images: [
      "/images/services/ai-document-verification-og.webp"
    ]
  },

  robots: {
    index: true,
    follow: true,
  },

  metadataBase: new URL("https://synctechn.com"),
};

export default function Page(props) {
  return <AIDocumentVerification {...props} />;
}
