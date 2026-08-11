import AIWorkflowAgentDevelopment from "@/views/services/AIWorkflowAgentDevelopment";

export const metadata = {
  title:
    "AI Workflow Agent Development | Autonomous AI Agents | SyncTechn",

  description:
    "SyncTechn develops custom AI Workflow Agents capable of reasoning, using tools, and autonomously executing complex, multi-step business processes",

  keywords: [
    "ai workflow agents",
    "autonomous ai agents",
    "ai agent development",
    "intelligent automation",
    "ai task execution",
    "tool calling ai",
    "langchain agents",
    "enterprise ai agents",
    "autonomous workflow automation",
    "ai business agents",
    "cognitive automation",
    "ai orchestrated workflows"
  ],

  alternates: {
    canonical:
      "https://synctechn.com/services/ai-workflow-agent-development-services/",
  },

  openGraph: {
    title:
      "AI Workflow Agent Development | SyncTechn",

    description:
      "Deploy autonomous AI agents that can reason, use external APIs, and execute complex business workflows independently.",

    url:
      "https://synctechn.com/services/ai-workflow-agent-development-services/",

    siteName: "SyncTechn",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/images/services/ai-workflow-agent-og.webp",
        width: 1200,
        height: 630,
        alt: "AI Workflow Agent Development"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Autonomous AI Agents | SyncTechn",

    description:
      "Build intelligent AI agents capable of planning, executing, and orchestrating complex enterprise workflows.",

    images: [
      "/images/services/ai-workflow-agent-og.webp"
    ]
  },

  robots: {
    index: true,
    follow: true,
  },

  metadataBase: new URL("https://synctechn.com"),
};

export default function Page(props) {
  return <AIWorkflowAgentDevelopment {...props} />;
}
