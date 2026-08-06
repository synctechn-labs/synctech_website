import React from 'react';
import SEO from '../../components/SEO';
import ServiceTemplate from './ServiceTemplate';
import {
  Network,
  Database,
  ArrowRightLeft,
  ServerCog,
  CloudCog,
  ShieldCheck,
  Blocks,
  Activity,
  HeartPulse,
  Landmark,
  ShoppingCart,
  Truck,
  Building2,
  Settings,
  Cpu,
  Lock
} from "lucide-react";

export const metadata = {
  title:
    "Business System Integration Hub | Enterprise Software Integration | SyncTechn",

  description:
    "SyncTechn develops Business System Integration Hubs that connect your ERP, CRM, HRMS, and legacy systems into a unified architecture. Eliminate data silos, ensure real-time synchronization, and improve operational visibility.",

  keywords: [
    "business system integration",
    "enterprise software integration",
    "system integration hub",
    "erp integration",
    "crm integration",
    "data synchronization",
    "legacy system integration",
    "middleware development",
    "enterprise service bus",
    "api integration platform",
    "cloud system integration",
    "b2b integration solutions",
    "software connectivity",
    "data silo elimination",
    "cross platform integration",
    "hybrid integration platform"
  ],

  alternates: {
    canonical:
      "https://synctechn.com/services/business-system-integration-hub",
  },

  openGraph: {
    title:
      "Business System Integration Hub | SyncTechn",

    description:
      "Connect your disparate enterprise software into a unified ecosystem. We develop integration hubs that synchronize data in real-time and eliminate silos.",

    url:
      "https://synctechn.com/services/business-system-integration-hub",

    siteName: "SyncTechn",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/images/services/system-integration-og.webp",
        width: 1200,
        height: 630,
        alt: "Business System Integration Hub"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Enterprise System Integration Services | SyncTechn",

    description:
      "Unify your technology stack with custom middleware and API integration hubs for real-time data synchronization across all departments.",

    images: [
      "/images/services/system-integration-og.webp"
    ]
  },

  robots: {
    index: true,
    follow: true,
  },

  metadataBase: new URL("https://synctechn.com"),
};

export const businessSystemIntegrationData = {
  overviewImage: "https://res.cloudinary.com/wowukaao/image/upload/v1783865630/AI_Solutions_3_d3m38m.jpg",

hero: {
  title: "Business System Integration Hub",

  subtitle:
    "Break down data silos and create a unified technological ecosystem. SyncTechn develops robust Business System Integration Hubs that seamlessly connect your ERP, CRM, legacy software, and cloud applications, ensuring real-time data synchronization and enterprise-wide visibility.",

  bgImage:
    "https://res.cloudinary.com/wowukaao/video/upload/v1783796944/CRM_SERVICE_fqe94n.mp4",

  logos: [
    "MuleSoft",
    "Dell Boomi",
    "Apache Kafka",
    "Node.js",
    "PostgreSQL",
    "AWS",
    "Azure",
    "GraphQL"
  ]
},

metrics: [

  {
    value: "Unified",
    title: "Data Architecture",

    subtitle:
      "Consolidate fragmented data from dozens of disparate systems into a single source of truth."
  },

  {
    value: "Real-Time",
    title: "Synchronization",

    subtitle:
      "Ensure updates in your CRM instantly reflect in your ERP, accounting, and inventory management systems."
  },

  {
    value: "Secure",
    title: "Data Transit",

    subtitle:
      "Transfer highly sensitive enterprise data through encrypted middleware channels and secure APIs."
  },

  {
    value: "Scalable",
    title: "Integration Fabric",

    subtitle:
      "Easily add new SaaS products or legacy systems to your hub without rewriting your entire architecture."
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
  title: "Integration Solutions for Every Industry",

  subtitle:
    "We architect secure system integrations that meet the specific compliance, high-availability, and data throughput requirements of demanding enterprise sectors.",

  list: [

    {
      icon: <HeartPulse className="w-5 h-5" />,
      title: "Healthcare",

      desc:
        "Integrate EHR systems with billing, CRM, and telehealth platforms using HL7 and FHIR standards while maintaining strict HIPAA compliance."
    },

    {
      icon: <Landmark className="w-5 h-5" />,
      title: "Banking & Financial",

      desc:
        "Connect core banking legacy systems with modern mobile apps, payment gateways, and fraud detection software securely."
    },

    {
      icon: <ShoppingCart className="w-5 h-5" />,
      title: "Retail & eCommerce",

      desc:
        "Synchronize Shopify or Magento storefronts with backend ERPs, inventory management systems, and 3PL fulfillment centers in real-time."
    },

    {
      icon: <Building2 className="w-5 h-5" />,
      title: "Enterprise Corporate",

      desc:
        "Unify HRMS (Workday), ERP (SAP), CRM (Salesforce), and Active Directory to ensure seamless employee onboarding and data governance."
    }

  ]
},

whyChooseUs: {
  title: "Why Choose SyncTechn for System Integration?",

  subtitle:
    "Integrating complex enterprise systems requires deep architectural expertise. SyncTechn builds resilient hubs that don't just connect software—they guarantee data integrity across your entire organization.",

  cards: [

    {
      title: "Event-Driven Architecture",

      desc:
        "We build integrations using event-driven models (like Apache Kafka) ensuring that data updates happen instantly across all connected platforms without performance bottlenecks."
    },

    {
      title: "Resilient Error Handling",

      desc:
        "Our integration hubs feature automated retry mechanisms, dead-letter queues, and alert systems to ensure zero data loss during network outages or API limits."
    },

    {
      title: "Agnostic Connectivity",

      desc:
        "We aren't locked into one vendor. We connect REST APIs, SOAP, GraphQL, direct database connections, and legacy flat files into a unified fabric."
    },

    {
      title: "Security by Design",

      desc:
        "All data in transit is encrypted. We utilize OAuth2, API gateways, IP whitelisting, and rate limiting to protect your internal systems from exposure."
    }

  ]
},
primaryCta: {
  title: "Connect Your Enterprise Software Ecosystem",

  subtitle:
    "Stop manually moving data between systems. SyncTechn develops custom integration hubs that synchronize your ERP, CRM, and legacy software, giving you a unified, real-time view of your business.",

  buttonText: "Schedule an Integration Architecture Review",

  image:
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1000&q=80"
},

secondaryCta: {
  title: "Eliminate Data Silos.",

  highlight: "Unify Your Operations.",

  subtitle:
    "A fragmented software stack leads to contradictory data and lost productivity. Let us build the middleware that makes your business applications talk to each other seamlessly.",

  buttonText: "Talk to an Integration Architect",

  image:
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",

  grid: [
    {
      title: "API Hubs",
      icon: <Network />
    },
    {
      title: "Data Sync",
      icon: <ArrowRightLeft />
    },
    {
      title: "Middleware",
      icon: <Blocks />
    },
    {
      title: "Cloud Connect",
      icon: <CloudCog />
    }
  ]
},

features: {
  title: "Integration Hub Architecture Features",

  subtitle:
    "We build robust, scalable, and highly available integration platforms designed to handle millions of transactions securely.",

  list: [

    {
      icon: <Network />,
      text: "Centralized API Gateway"
    },

    {
      icon: <ArrowRightLeft />,
      text: "Bi-directional Data Sync"
    },

    {
      icon: <Database />,
      text: "ETL & Data Transformation"
    },

    {
      icon: <ServerCog />,
      text: "Message Queuing (RabbitMQ/Kafka)"
    },

    {
      icon: <ShieldCheck />,
      text: "OAuth & Secure Authentication"
    },

    {
      icon: <Activity />,
      text: "Real-Time Health Monitoring"
    },

    {
      icon: <Settings />,
      text: "Custom Mapping Rules"
    },

    {
      icon: <Lock />,
      text: "Encrypted Data Pipelines"
    }

  ]
},

process: {
  title: "Our Integration Implementation Process",

  subtitle:
    "Integrating enterprise systems carries significant risk. We mitigate this through a rigorous methodology of mapping, testing, and phased deployment.",

  steps: [

    {
      title: "1. Systems Audit & Data Mapping",

      desc:
        "We audit all platforms involved, map the data fields between them, and determine the single source of truth for every data entity."
    },

    {
      title: "2. Architecture Design",

      desc:
        "We design the middleware architecture, selecting the right message brokers, API gateways, and hosting environments based on expected throughput."
    },

    {
      title: "3. Development & Transformation Logic",

      desc:
        "We build the hub, implementing the logic required to translate data formats (e.g., XML to JSON) and normalize fields between differing systems."
    },

    {
      title: "4. Security & Compliance Hardening",

      desc:
        "We secure the endpoints using OAuth, implement rate limiting, encrypt data in transit, and ensure compliance with relevant regulations."
    },

    {
      title: "5. Staging Integration & UAT",

      desc:
        "We connect the staging environments of your software stack to test data flows, conflict resolution, and error handling safely."
    },

    {
      title: "6. Phased Go-Live & Monitoring",

      desc:
        "We deploy the integration in phases (e.g., one-way sync first) and establish 24/7 monitoring to catch and resolve any API timeouts or dead letters."
    }

  ]
},
faqs: {
  title: "Frequently Asked Questions",

  subtitle:
    "Find answers to common questions about system integration, legacy modernization, and data synchronization.",

  list: [

    {
      q: "What is an Integration Hub vs. Point-to-Point Integration?",

      a:
        "Point-to-point integration involves writing custom code to connect System A directly to System B. As you add more systems, this creates a tangled 'spaghetti' architecture. An Integration Hub (or Middleware) sits in the middle; all systems connect to the Hub once, and the Hub routes the data appropriately, making it infinitely more scalable and easier to maintain."
    },

    {
      q: "Can you integrate older systems that don't have APIs?",

      a:
        "Yes. While modern REST or GraphQL APIs are preferred, we can integrate legacy systems through direct database replication, secure flat file transfers (SFTP/CSV), or by building custom API wrappers around legacy codebases."
    },

    {
      q: "How do you handle data conflicts if two systems are updated simultaneously?",

      a:
        "During our mapping phase, we establish a 'Single Source of Truth' hierarchy. We implement timestamping, logical conflict resolution rules, and event-driven updates to ensure the master system overwrites subordinate systems without data corruption."
    },

    {
      q: "Is it secure to pass our financial/healthcare data through a middleware hub?",

      a:
        "Absolutely. The integration hub acts as a secure conduit. Data is encrypted in transit (TLS 1.3) and at rest. The hub can be deployed within your private cloud (VPC) so that sensitive data never traverses the public internet."
    }

  ]
}
};

export default function BusinessSystemIntegration() {
  return (
    <>
      <SEO 
        title={metadata.title}
        description={metadata.description}
        keywords={metadata.keywords.join(', ')}
      />
      <ServiceTemplate 
        data={businessSystemIntegrationData} 
      />
    </>
  );
}
