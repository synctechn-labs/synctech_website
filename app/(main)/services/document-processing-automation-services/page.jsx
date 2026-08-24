import DocumentProcessingAutomation from "@/views/services/DocumentProcessingAutomation";

export const metadata = {
  title:
    "Document Processing Automation | Intelligent Document Parsing | SyncTechn",

  description:
    "SyncTechn provides Document Processing Automation services using AI and advanced OCR. Instantly extract structured data from PDFs, invoices, contracts,",

  keywords: [
    "document processing automation",
    "intelligent document processing",
    "idp software",
    "ai document extraction",
    "ocr data capture",
    "automated invoice processing",
    "pdf parsing automation",
    "machine learning document extraction",
    "data entry automation",
    "unstructured data extraction",
    "enterprise content management",
    "automated data capture"
  ],

  alternates: {
    canonical:
      "https://synctechn.com/services/document-processing-automation-services/",
  },

  openGraph: {
    title:
      "Document Processing Automation | SyncTechn",

    description:
      "Turn unstructured documents into actionable data instantly. Automate data entry and extraction with our AI-powered Intelligent Document Processing.",

    url:
      "https://synctechn.com/services/document-processing-automation-services/",

    siteName: "SyncTechn Software Solutions",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/images/services/document-processing-og.webp",
        width: 1200,
        height: 630,
        alt: "Document Processing Automation"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Intelligent Document Processing | SyncTechn",

    description:
      "Automate your data entry. We build AI pipelines that extract structured data from invoices, forms, and PDFs.",

    images: [
      "/images/services/document-processing-og.webp"
    ]
  },

  robots: {
    index: true,
    follow: true,
  },

  metadataBase: new URL("https://synctechn.com"),
};

export default function Page(props) {
  return <DocumentProcessingAutomation {...props} />;
}
