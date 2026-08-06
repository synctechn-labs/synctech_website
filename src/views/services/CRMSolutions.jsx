import React from 'react';
import SEO from '../../components/SEO';
import ServiceTemplate from './ServiceTemplate';
import CrmTechnologies from './sections/CrmTechnologies';


import {
  Users,
  Database,
  Workflow,
  BarChart3,
  MessageSquare,
  ShieldCheck,
  Target,
  Bell,
  LineChart,
  Globe,
  Award,
  Rocket,
  Headphones,
  Settings,
  Building2,
  ShoppingBag,
  HeartPulse,
  GraduationCap,
  Landmark,
  Factory
} from "lucide-react";

export const metadata = {
  title:
    "CRM Development Company | Custom CRM Software Development Services | SyncTechn",

  description:
    "SyncTechn provides custom CRM development services including CRM software development, CRM customization, CRM integration, sales automation, customer relationship management, workflow automation, cloud CRM solutions, and enterprise CRM software for businesses.",

  keywords: [
    "crm development company",
    "crm software development",
    "custom crm development",
    "customer relationship management",
    "crm development services",
    "crm software company",
    "enterprise crm development",
    "sales crm software",
    "crm implementation services",
    "crm consulting services",
    "crm integration services",
    "crm automation",
    "sales automation software",
    "lead management software",
    "customer management software",
    "workflow automation",
    "crm dashboard development",
    "crm customization",
    "cloud crm software",
    "crm application development",
    "hubspot crm development",
    "salesforce development",
    "zoho crm customization",
    "microsoft dynamics crm",
    "business crm software",
    "customer support software",
    "crm migration services",
    "crm maintenance services"
  ],

  alternates: {
    canonical:
      "https://synctechn.com/services/crm-development",
  },

  openGraph: {
    title:
      "Custom CRM Development Services | SyncTechn",

    description:
      "Build secure and scalable CRM software to automate sales, customer service, marketing, lead management, and business workflows with SyncTechn.",

    url:
      "https://synctechn.com/services/crm-development",

    siteName: "SyncTechn",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/images/services/crm-development-og.webp",
        width: 1200,
        height: 630,
        alt: "CRM Development Services"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",

    title:
      "CRM Software Development Company | SyncTechn",

    description:
      "Custom CRM software development, CRM integration, workflow automation, sales automation, cloud CRM solutions, and enterprise CRM development.",

    images: [
      "/images/services/crm-development-og.webp"
    ]
  },

  robots: {
    index: true,
    follow: true,
  },

  metadataBase: new URL("https://synctechn.com"),
};

export const crmSolutionsData = {
  overviewImage: "https://res.cloudinary.com/wowukaao/image/upload/v1783865630/AI_Solutions_3_d3m38m.jpg",

hero: {
  title: "Custom CRM Development Services",

  subtitle:
    "SyncTechn develops custom Customer Relationship Management (CRM) software that helps businesses manage customer interactions, automate sales processes, improve customer support, streamline marketing campaigns, and strengthen customer relationships. Our CRM development services include CRM software development, CRM customization, cloud CRM solutions, sales automation, workflow automation, CRM integration, analytics dashboards, and enterprise CRM platforms built using modern technologies and scalable cloud architecture.",

  bgImage:
    "https://res.cloudinary.com/wowukaao/video/upload/v1783796944/CRM_SERVICE_fqe94n.mp4",

  logos: [
    "Salesforce",
    "HubSpot",
    "Zoho CRM",
    "Microsoft Dynamics 365",
    "React",
    "Node.js",
    "AWS",
    "Azure"
  ]
},

metrics: [

  {
    value: "100%",
    title: "Custom CRM Solutions",

    subtitle:
      "Every CRM platform is designed around your business workflows, sales process, and customer journey."
  },

  {
    value: "Modern",
    title: "CRM Technology Stack",

    subtitle:
      "React, Next.js, Node.js, Python, cloud technologies, REST APIs, and modern CRM architecture."
  },

  {
    value: "Secure",
    title: "Customer Data Protection",

    subtitle:
      "Built with secure authentication, role-based access control, encryption, and modern security practices."
  },

  {
    value: "Scalable",
    title: "CRM Architecture",

    subtitle:
      "Cloud-ready CRM systems designed to grow alongside your business, teams, and customer base."
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
  title: "CRM Solutions for Every Industry",

  subtitle:
    "Every industry has unique customer engagement, sales, and operational challenges. SyncTechn develops custom CRM solutions tailored to industry-specific workflows, helping businesses strengthen customer relationships, improve team collaboration, automate processes, and accelerate digital transformation.",

  list: [

    {
      icon: <ShoppingBag className="w-5 h-5" />,
      title: "Retail & eCommerce CRM",

      desc:
        "Build CRM software for retail and eCommerce businesses to manage customer interactions, loyalty programs, order history, marketing campaigns, customer segmentation, sales performance, and omnichannel customer experiences."
    },

    {
      icon: <HeartPulse className="w-5 h-5" />,
      title: "Healthcare CRM Solutions",

      desc:
        "Develop secure healthcare CRM systems for patient relationship management, appointment scheduling, communication, follow-ups, healthcare marketing, patient engagement, and medical service coordination."
    },

    {
      icon: <Landmark className="w-5 h-5" />,
      title: "Banking & Financial CRM",

      desc:
        "Create CRM platforms for financial institutions to manage customer onboarding, loan processing, investment advisory, customer support, relationship management, compliance workflows, and financial service automation."
    },

    {
      icon: <GraduationCap className="w-5 h-5" />,
      title: "Education CRM",

      desc:
        "Develop CRM solutions for educational institutions to manage student admissions, communication, lead nurturing, alumni engagement, student lifecycle management, and admission marketing campaigns."
    },

    {
      icon: <Factory className="w-5 h-5" />,
      title: "Manufacturing CRM",

      desc:
        "Build CRM software for manufacturing businesses to manage distributors, B2B sales pipelines, customer support, quotations, inventory coordination, after-sales services, and account management."
    },

    {
      icon: <Building2 className="w-5 h-5" />,
      title: "Professional Services CRM",

      desc:
        "Develop CRM platforms for consulting firms, legal services, IT companies, agencies, and service providers to streamline client communication, project tracking, contract management, and customer engagement."
    }

  ]
},

whyChooseUs: {
  title: "Why Choose SyncTechn for CRM Development?",

  subtitle:
    "SyncTechn develops secure, scalable, and business-focused CRM solutions that simplify customer relationship management, automate repetitive tasks, improve sales productivity, and help businesses deliver exceptional customer experiences. Our CRM platforms are designed to adapt to your unique workflows and future business growth.",

  cards: [

    {
      title: "Custom CRM Development",

      desc:
        "Every CRM platform is designed specifically around your sales process, customer lifecycle, operational workflows, and business objectives instead of relying on one-size-fits-all solutions."
    },

    {
      title: "Modern CRM Technology",

      desc:
        "We develop CRM applications using React, Next.js, Node.js, Python, cloud technologies, REST APIs, and scalable databases while integrating with Salesforce, HubSpot, Zoho CRM, Microsoft Dynamics 365, and other business platforms."
    },

    {
      title: "Workflow Automation",

      desc:
        "Automate lead management, customer communication, approvals, notifications, follow-ups, reporting, sales pipelines, marketing campaigns, and repetitive business processes through intelligent CRM workflows."
    },

    {
      title: "Secure Customer Data Management",

      desc:
        "Protect customer information using secure authentication, role-based access control, encrypted communication, audit logs, backup strategies, and modern security best practices."
    },

    {
      title: "Cloud-Based & Scalable CRM",

      desc:
        "Build cloud-native CRM software that supports remote teams, multiple business locations, growing customer databases, third-party integrations, and future business expansion."
    },

    {
      title: "Long-Term CRM Support",

      desc:
        "We provide CRM maintenance, feature enhancements, integration support, performance optimization, software updates, and technical guidance to help your CRM platform evolve with your business."
    }

  ]
},
  primaryCta: {
  title: "Ready to Transform Your Customer Relationship Management?",

  subtitle:
    "Whether you're implementing a new CRM platform, modernizing an existing system, automating your sales process, or improving customer engagement, SyncTechn develops secure, scalable, and business-focused CRM solutions tailored to your organization's needs.",

  buttonText: "Book a Free CRM Consultation",

  image:
    "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=1000&q=80"
},

secondaryCta: {
  title: "Accelerate Business Growth",

  highlight: "with Intelligent CRM Solutions",

  subtitle:
    "Improve customer relationships, automate sales pipelines, streamline customer support, and gain valuable business insights with custom CRM software designed around your workflows. We develop cloud-based CRM solutions that integrate seamlessly with your existing business applications.",

  buttonText: "Talk to Our CRM Experts",

  image:
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",

  grid: [
    {
      title: "Sales Automation",
      icon: <Users />
    },
    {
      title: "Workflow Automation",
      icon: <Workflow />
    },
    {
      title: "Business Analytics",
      icon: <BarChart3 />
    },
    {
      title: "Cloud CRM",
      icon: <Database />
    }
  ]
},

features: {
  title: "Enterprise CRM Features",

  subtitle:
    "Our CRM software is built with the essential features businesses need to manage customers, improve sales performance, automate operations, and deliver exceptional customer experiences.",

  list: [

    {
      icon: <Users />,
      text: "360° Customer Relationship Management"
    },

    {
      icon: <Target />,
      text: "Lead Management & Opportunity Tracking"
    },

    {
      icon: <Workflow />,
      text: "Sales & Workflow Automation"
    },

    {
      icon: <MessageSquare />,
      text: "Customer Support & Ticket Management"
    },

    {
      icon: <Bell />,
      text: "Automated Notifications & Follow-Ups"
    },

    {
      icon: <Database />,
      text: "Centralized Customer Database"
    },

    {
      icon: <BarChart3 />,
      text: "CRM Analytics & Business Reporting"
    },

    {
      icon: <Globe />,
      text: "Cloud-Based CRM Accessibility"
    },

    {
      icon: <ShieldCheck />,
      text: "Role-Based Access & Data Security"
    },

    {
      icon: <Settings />,
      text: "Third-Party API Integration"
    },

    {
      icon: <Rocket />,
      text: "Scalable CRM Architecture"
    },

    {
      icon: <Award />,
      text: "Custom Dashboards & Performance Monitoring"
    }

  ]
},

process: {
  title: "Our CRM Development Process",

  subtitle:
    "We follow a structured CRM implementation process that combines business analysis, workflow optimization, modern software engineering, and continuous improvement to deliver CRM platforms that support long-term business growth.",

  steps: [

    {
      title: "1. Business Discovery & CRM Consulting",

      desc:
        "Understand your sales process, customer lifecycle, operational workflows, reporting requirements, and CRM objectives before designing the solution."
    },

    {
      title: "2. CRM Strategy & Solution Design",

      desc:
        "Define CRM architecture, customer data models, user roles, automation workflows, integrations, dashboards, and implementation roadmap."
    },

    {
      title: "3. UI/UX Design & CRM Customization",

      desc:
        "Design intuitive dashboards, customer management interfaces, sales pipelines, reports, and user experiences tailored to your business processes."
    },

    {
      title: "4. CRM Development & Configuration",

      desc:
        "Develop custom CRM software or configure platforms such as Salesforce, HubSpot, Zoho CRM, or Microsoft Dynamics 365 to match your operational requirements."
    },

    {
      title: "5. Integration & Workflow Automation",

      desc:
        "Integrate CRM software with ERP systems, accounting software, email marketing tools, payment gateways, cloud services, and third-party APIs while automating repetitive business processes."
    },

    {
      title: "6. Testing & Quality Assurance",

      desc:
        "Perform functional testing, workflow validation, security testing, user acceptance testing, performance optimization, and compatibility testing before deployment."
    },

    {
      title: "7. Deployment & User Training",

      desc:
        "Deploy the CRM platform securely, migrate customer data, onboard users, provide documentation, and deliver training to maximize adoption across your organization."
    },

    {
      title: "8. Maintenance & Continuous Improvement",

      desc:
        "Provide ongoing CRM support, feature enhancements, performance optimization, software updates, security improvements, and integration support as your business evolves."
    }

  ]
},
  faqs: {
    title: "CRM Frequently Asked Questions",
    subtitle: "Learn more about our CRM development and integration services.",
    list: [
      { q: "What is CRM software?", a: "CRM (Customer Relationship Management) software helps businesses manage customer interactions, sales activities, support processes, and customer data from a centralized platform." },
      { q: "Can CRM improve customer retention?", a: "Yes. CRM systems help businesses understand customer behavior, personalize communication, and improve customer satisfaction." },
      { q: "Do you provide CRM customization?", a: "Yes. We customize workflows, dashboards, reports, automation, and integrations based on your business requirements." },
      { q: "Can CRM integrate with existing software?", a: "Yes. CRM solutions can integrate with ERP systems, accounting software, email platforms, marketing tools, and other business applications." },
      { q: "Which CRM platforms do you support?", a: "We work with Salesforce, HubSpot CRM, Zoho CRM, Microsoft Dynamics 365, and custom CRM solutions." },
      { q: "Do you provide cloud-based CRM solutions?", a: "Yes. We implement secure cloud-based CRM systems that can be accessed from anywhere." },
      { q: "Can CRM automate business processes?", a: "Absolutely. CRM systems can automate lead management, follow-ups, approvals, notifications, reporting, and more." }
    ]
  }
};

export default function CRMSolutions() {
  return (
    <>
      <SEO 
        title="Custom CRM Portal Development & Solutions | SyncTech"
        description="SyncTech Software Solutions develops custom enterprise CRM and ERP portals. Manage customer data, automate processes, and optimize workflows with secure systems."
        keywords="CRM portal development, custom CRM systems, CRM workflows automation, HubSpot Salesforce integrations, customer management software"
      />
      <ServiceTemplate 
        data={crmSolutionsData} 
        techStackComponent={<CrmTechnologies />} 
      />
    </>
  );
}
