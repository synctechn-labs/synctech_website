import HumanApprovalAutomation from "@/views/services/HumanApprovalAutomation";

export const metadata = {
  title:
    "Human Approval Workflow Automation | Approval Workflow Automation Solutions | SyncTechn",

  description:
    "SyncTechn develops Human Approval Workflow Automation that streamline approval workflows, automate business processes, manage requests, digital",

  keywords: [
    "human approval automation",
    "approval workflow automation",
    "approval management system",
    "digital approval system",
    "approval software",
    "business approval workflow",
    "workflow approval software",
    "approval process automation",
    "employee approval system",
    "purchase approval workflow",
    "leave approval system",
    "invoice approval software",
    "expense approval system",
    "document approval workflow",
    "enterprise workflow automation",
    "approval portal",
    "approval dashboard",
    "business process automation",
    "workflow management software",
    "approval application development",
    "custom workflow software",
    "approval tracking system",
    "online approval platform",
    "enterprise approval software",
    "workflow automation company"
  ],

  alternates: {
    canonical:
      "https://synctechn.com/services/human-approval-workflow-automation-services/",
  },

  openGraph: {
    title:
      "Human Approval Workflow Automation | SyncTechn",

    description:
    "Automate business approval workflows with secure approval management systems, digital approvals, workflow automation, notifications, reporting, and",

    url:
      "https://synctechn.com/services/human-approval-workflow-automation-services/",

    siteName: "SyncTechn Software Solutions",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/images/services/human-approval-automation-og.webp",
        width: 1200,
        height: 630,
        alt: "Human Approval Workflow Automation"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Approval Workflow Automation Solutions | SyncTechn",

    description:
      "Automate human approval workflows, document approvals, purchase requests, HR approvals, finance approvals, and enterprise business processes.",

    images: [
      "/images/services/human-approval-automation-og.webp"
    ]
  },

  robots: {
    index: true,
    follow: true,
  },

  metadataBase: new URL("https://synctechn.com"),
};

export default function Page(props) {
  return <HumanApprovalAutomation {...props} />;
}
