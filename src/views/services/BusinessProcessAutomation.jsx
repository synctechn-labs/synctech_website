import React from 'react';
import SEO from '../../components/SEO';
import ServiceTemplate from './ServiceTemplate';
import {
  Workflow,
  Settings,
  Clock,
  Zap,
  Building2,
  Landmark,
  HeartPulse,
  Truck,
  Factory,
  ShoppingBag,
  Database,
  BarChart,
  ShieldCheck,
  Cpu,
  RefreshCw,
  Users
} from "lucide-react";

export const metadata = {
  title:
    "Business Process Automation Services | BPA Software Solutions | SyncTechn",

  description:
    "SyncTechn provides custom Business Process Automation (BPA) services to streamline workflows, reduce manual data entry, optimize operations, and connect disparate enterprise systems using modern automation technologies.",

  keywords: [
    "business process automation",
    "bpa services",
    "workflow automation",
    "business automation software",
    "enterprise workflow automation",
    "process optimization software",
    "robotic process automation",
    "rpa solutions",
    "automated data entry",
    "business task automation",
    "operations automation",
    "automation consulting",
    "process mapping software",
    "cloud automation services",
    "document automation",
    "approval workflow software",
    "enterprise automation company",
    "business workflow integration"
  ],

  alternates: {
    canonical:
      "https://synctechn.com/services/business-process-automation",
  },

  openGraph: {
    title:
      "Business Process Automation Services | SyncTechn",

    description:
      "Automate repetitive tasks, streamline operations, and boost employee productivity with custom Business Process Automation (BPA) solutions from SyncTechn.",

    url:
      "https://synctechn.com/services/business-process-automation",

    siteName: "SyncTechn",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/images/services/business-process-automation-og.webp",
        width: 1200,
        height: 630,
        alt: "Business Process Automation Services"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Business Process Automation Services | SyncTechn",

    description:
      "Streamline enterprise workflows, reduce manual labor, and optimize operations with intelligent Business Process Automation solutions.",

    images: [
      "/images/services/business-process-automation-og.webp"
    ]
  },

  robots: {
    index: true,
    follow: true,
  },

  metadataBase: new URL("https://synctechn.com"),
};

export const businessProcessAutomationData = {
  overviewImage: "https://res.cloudinary.com/wowukaao/image/upload/v1783865630/AI_Solutions_3_d3m38m.jpg",

hero: {
  title: "Business Process Automation Services",

  subtitle:
    "Eliminate manual bottlenecks, reduce human error, and accelerate business operations. SyncTechn develops intelligent Business Process Automation (BPA) solutions that digitize paper-based workflows, connect siloed enterprise systems, and automate repetitive tasks across your entire organization.",

  bgImage:
    "https://res.cloudinary.com/wowukaao/video/upload/v1783796944/CRM_SERVICE_fqe94n.mp4",

  logos: [
    "UiPath",
    "Power Automate",
    "Zapier",
    "Make",
    "Python",
    "Node.js",
    "AWS",
    "Azure"
  ]
},

metrics: [

  {
    value: "Faster",
    title: "Process Execution",

    subtitle:
      "Accelerate operations by replacing slow, manual tasks with instantaneous automated workflows."
  },

  {
    value: "Reduced",
    title: "Operational Costs",

    subtitle:
      "Lower administrative overhead by automating data entry, approvals, and document routing."
  },

  {
    value: "Zero",
    title: "Manual Errors",

    subtitle:
      "Ensure complete data accuracy and compliance through rule-based process execution."
  },

  {
    value: "Scalable",
    title: "Enterprise Architecture",

    subtitle:
      "Support growing operational demands without requiring proportional increases in administrative staff."
  }

],
servicesSuite: {
  "title": "Advanced CRM & Business Integration Solutions",
  "subtitle": "Empower your business with custom CRM solutions, seamless system integrations, and intelligent process automation tailored to your unique workflows.",
  "services": [
    {
      "id": "custom-crm",
      "title": "Custom CRM Development",
      "desc": "Develop a centralized CRM system tailored perfectly to your sales, marketing, and support processes, avoiding the clutter of off-the-shelf software.",
      "features": [
        "Lead Management",
        "Sales Pipelines",
        "Customer Support",
        "Custom Reporting",
        "Email Integration",
        "Role-Based Access"
      ],
      "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
    },
    {
      "id": "process-automation",
      "title": "Business Process Automation",
      "desc": "Eliminate manual data entry and repetitive tasks. We design workflows that connect your apps and automate processes end-to-end.",
      "features": [
        "Workflow Mapping",
        "Trigger-Based Actions",
        "Data Synchronization",
        "Error Handling",
        "Audit Logs",
        "Process Optimization"
      ],
      "image": "https://images.unsplash.com/photo-1607705410880-caa9ae554c9e?auto=format&fit=crop&w=800&q=80"
    },
    {
      "id": "system-integration",
      "title": "Business System Integration Hub",
      "desc": "Connect disparate business software into a unified ecosystem. We ensure your ERP, CRM, marketing, and support tools speak the same language.",
      "features": [
        "Data Mapping",
        "Two-Way Sync",
        "Legacy System Connection",
        "Middleware Development",
        "Real-Time Updates",
        "Secure Data Transfer"
      ],
      "image": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
    },
    {
      "id": "api-dev",
      "title": "API Development & Integration",
      "desc": "Build robust REST and GraphQL APIs to securely share data between your applications or with third-party vendors.",
      "features": [
        "RESTful APIs",
        "GraphQL",
        "OAuth2 Security",
        "API Rate Limiting",
        "Comprehensive Documentation",
        "Third-Party Integration"
      ],
      "image": "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
    }
  ]
},
industries: {
  title: "Automation Solutions for Every Industry",

  subtitle:
    "Different industries face unique operational bottlenecks. We develop specialized automation solutions tailored to the compliance, speed, and volume requirements of your specific sector.",

  list: [

    {
      icon: <HeartPulse className="w-5 h-5" />,
      title: "Healthcare & Medical",

      desc:
        "Automate patient onboarding, insurance claim processing, appointment scheduling, and EHR data synchronization while maintaining strict HIPAA compliance."
    },

    {
      icon: <Landmark className="w-5 h-5" />,
      title: "Finance & Banking",

      desc:
        "Streamline loan origination, KYC verification, invoice processing, expense approvals, and regulatory reporting with secure, auditable workflows."
    },

    {
      icon: <Factory className="w-5 h-5" />,
      title: "Manufacturing",

      desc:
        "Automate procurement workflows, inventory reordering, maintenance scheduling, quality control reporting, and supply chain communications."
    },

    {
      icon: <Truck className="w-5 h-5" />,
      title: "Logistics & Supply Chain",

      desc:
        "Optimize dispatch routing, automate freight billing, synchronize tracking updates, and streamline customs documentation processing."
    }

  ]
},

whyChooseUs: {
  title: "Why Choose SyncTechn for Process Automation?",

  subtitle:
    "We don't just write scripts; we re-engineer business processes. Our holistic approach to automation ensures that we are solving the root cause of operational inefficiency with scalable, resilient technology.",

  cards: [

    {
      title: "Process Discovery & Mapping",

      desc:
        "We map your existing processes to identify bottlenecks and redesign workflows for maximum automation efficiency before writing a single line of code."
    },

    {
      title: "Platform-Agnostic Approach",

      desc:
        "Whether it's custom Python scripts, Microsoft Power Automate, or enterprise RPA tools, we select the technology that best fits your infrastructure."
    },

    {
      title: "Resilient Error Handling",

      desc:
        "Our automations include comprehensive fallback mechanisms, retry logic, and human-in-the-loop escalations to ensure business continuity."
    },

    {
      title: "Comprehensive Audit Trails",

      desc:
        "Every automated action is logged, providing complete transparency and compliance reporting for enterprise governance."
    }

  ]
},
primaryCta: {
  title: "Stop Doing Busywork. Start Automating.",

  subtitle:
    "Free your team from repetitive tasks and data entry. SyncTechn develops intelligent Business Process Automation solutions that reduce costs, eliminate errors, and scale your operations effortlessly.",

  buttonText: "Schedule an Automation Audit",

  image:
    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80"
},

secondaryCta: {
  title: "Work Smarter.",

  highlight: "Automate Faster.",

  subtitle:
    "Connect your CRM, ERP, and legacy systems into a unified, automated operational engine. We build robust workflows that handle the heavy lifting so your team can focus on growth.",

  buttonText: "Talk to an Automation Expert",

  image:
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",

  grid: [
    {
      title: "Workflow Design",
      icon: <Workflow />
    },
    {
      title: "API Integration",
      icon: <Zap />
    },
    {
      title: "Data Sync",
      icon: <RefreshCw />
    },
    {
      title: "24/7 Operations",
      icon: <Clock />
    }
  ]
},

features: {
  title: "Enterprise Automation Features",

  subtitle:
    "Our Business Process Automation platforms provide a comprehensive toolkit for digitizing, executing, and monitoring your company's most critical operations.",

  list: [

    {
      icon: <Workflow />,
      text: "Visual Workflow Builders"
    },

    {
      icon: <Zap />,
      text: "Event-Triggered Automation"
    },

    {
      icon: <Clock />,
      text: "Scheduled Batch Processing"
    },

    {
      icon: <ShieldCheck />,
      text: "Role-Based Access Controls"
    },

    {
      icon: <Database />,
      text: "Secure Database Integration"
    },

    {
      icon: <BarChart />,
      text: "Real-Time Automation Analytics"
    },

    {
      icon: <Cpu />,
      text: "Machine Learning Integration"
    },

    {
      icon: <Settings />,
      text: "Configurable Business Rules"
    }

  ]
},

process: {
  title: "Our Process Automation Methodology",

  subtitle:
    "We follow a rigorous implementation strategy that ensures your automated workflows are secure, scalable, and fully adopted by your workforce.",

  steps: [

    {
      title: "1. Process Mining & Discovery",

      desc:
        "We analyze your current operations, identify manual bottlenecks, and prioritize processes based on ROI and feasibility."
    },

    {
      title: "2. Workflow Optimization & Design",

      desc:
        "We redesign the targeted processes for digital execution, eliminating unnecessary steps and defining clear business logic."
    },

    {
      title: "3. Architecture & Integration Planning",

      desc:
        "We map out the required API integrations, database connections, and security protocols needed to execute the automation."
    },

    {
      title: "4. Development & Orchestration",

      desc:
        "We build the automated workflows, scripts, or RPA bots, implementing robust error handling and logging mechanisms."
    },

    {
      title: "5. Sandbox Testing & Validation",

      desc:
        "We test the automations in a secure staging environment, validating edge cases and ensuring data integrity without impacting production."
    },

    {
      title: "6. Production Deployment & Monitoring",

      desc:
        "We deploy the solutions into your live environment and set up proactive monitoring dashboards to track performance and errors."
    }

  ]
},
faqs: {
  title: "Frequently Asked Questions",

  subtitle:
    "Find answers to common questions about Business Process Automation, ROI, integrations, security, and implementation strategies.",

  list: [

    {
      q: "What is Business Process Automation (BPA)?",

      a:
        "BPA is the use of software technology to execute recurring business tasks or processes in a routing where manual effort can be replaced. It is designed to minimize costs, increase efficiency, and streamline complex processes."
    },

    {
      q: "What is the difference between BPA and RPA?",

      a:
        "Robotic Process Automation (RPA) focuses on automating specific, repetitive tasks by mimicking human interactions with software UI (like clicking buttons). Business Process Automation (BPA) is broader, focusing on re-engineering and automating entire complex workflows, often through backend API integrations."
    },

    {
      q: "Will automation replace my employees?",

      a:
        "No, automation is designed to augment your workforce, not replace it. By automating repetitive administrative tasks like data entry and document routing, your employees are freed up to focus on strategic work, customer relations, and problem-solving."
    },

    {
      q: "How long does it take to see ROI on automation?",

      a:
        "Many organizations see a positive return on investment within 3 to 6 months. High-volume, manual tasks that require significant employee hours (like invoice processing or data synchronization) often yield immediate cost savings."
    },

    {
      q: "Can you automate processes that involve legacy systems?",

      a:
        "Yes. While modern systems use APIs for automation, we can utilize Robotic Process Automation (RPA) bots, database scripts, or middleware to connect and automate workflows involving older, legacy software that lacks modern integration capabilities."
    }

  ]
}
};

export default function BusinessProcessAutomation() {
  return (
    <>
      <SEO 
        title={metadata.title}
        description={metadata.description}
        keywords={metadata.keywords.join(', ')}
      />
      <ServiceTemplate 
        data={businessProcessAutomationData} 
      />
    </>
  );
}
