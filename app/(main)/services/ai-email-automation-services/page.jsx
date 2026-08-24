import AIEmailOperations from "@/views/services/AIEmailOperations";

export const metadata = {
  title:
    "AI Email Automation | Intelligent Inbox Management | SyncTechn",

  description:
    "SyncTechn develops AI-powered email operations automation to categorize, route, draft, and respond to high volumes of corporate emails autonomously.",

  keywords: [
    "ai email automation",
    "email operations ai",
    "intelligent inbox management",
    "ai email drafting",
    "automated email routing",
    "customer service ai",
    "email triage automation",
    "llm email parsing",
    "email categorization ai",
    "autonomous email agents",
    "helpdesk automation",
    "corporate email management"
  ],

  alternates: {
    canonical:
      "https://synctechn.com/services/ai-email-automation-services/",
  },

  openGraph: {
    title:
      "AI Email Automation | SyncTechn",

    description:
      "Automate your corporate inboxes. We build AI systems that read, route, and reply to thousands of emails daily with human-like accuracy.",

    url:
      "https://synctechn.com/services/ai-email-automation-services/",

    siteName: "SyncTechn Software Solutions",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/images/services/ai-email-automation-og.webp",
        width: 1200,
        height: 630,
        alt: "AI Email Automation"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",

    title:
      "AI Email Automation Services | SyncTechn",

    description:
      "Transform your inbox into an automated workflow. AI agents that triage, draft, and respond to high-volume emails.",

    images: [
      "/images/services/ai-email-automation-og.webp"
    ]
  },

  robots: {
    index: true,
    follow: true,
  },

  metadataBase: new URL("https://synctechn.com"),
};

export default function Page(props) {
  return <AIEmailOperations {...props} />;
}
