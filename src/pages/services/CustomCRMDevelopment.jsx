import React from 'react';
import SEO from '../../components/SEO';
import ServiceTemplate from './ServiceTemplate';
import {
  HeartPulse,
  ShoppingBag,
  Landmark,
  Truck,
  Factory,
  GraduationCap,
  Building2,
  Globe,
  Users,
  Workflow,
  BarChart3,
  Cloud,
  LayoutDashboard,
  Bell,
  FileText,
  ShieldCheck,
  Database,
  Settings,
  Lock
} from "lucide-react";

export const metadata = {
  title:
    "Custom CRM Development Company | CRM Software Development Services | SyncTechn",

  description:
    "SyncTechn develops custom CRM software tailored to your sales, customer support, marketing, and business operations. Build scalable CRM solutions with lead management, sales automation, customer portals, workflow automation, analytics, and third-party integrations.",

  keywords: [
    "custom CRM development",
    "CRM software development",
    "CRM development company",
    "customer relationship management software",
    "custom CRM software",
    "sales CRM development",
    "enterprise CRM development",
    "CRM application development",
    "CRM platform development",
    "lead management software",
    "sales automation software",
    "customer management system",
    "CRM workflow automation",
    "CRM dashboard",
    "customer portal development",
    "CRM integration services",
    "cloud CRM development",
    "CRM solution provider",
    "business CRM software",
    "CRM consulting services",
    "CRM migration",
    "CRM maintenance",
    "CRM reporting software",
    "CRM analytics",
    "CRM customization"
  ],

  alternates: {
    canonical:
      "https://synctechn.com/services/custom-crm-development",
  },

  openGraph: {
    title:
      "Custom CRM Development Services | SyncTechn",

    description:
      "Develop secure and scalable CRM software with lead management, sales automation, workflow automation, customer portals, analytics, and enterprise integrations.",

    url:
      "https://synctechn.com/services/custom-crm-development",

    siteName: "SyncTechn",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/images/services/custom-crm-development-og.webp",
        width: 1200,
        height: 630,
        alt: "Custom CRM Development Services"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Custom CRM Development Company | SyncTechn",

    description:
      "Build custom CRM software with sales automation, lead management, workflow automation, customer engagement tools, and enterprise integrations.",

    images: [
      "/images/services/custom-crm-development-og.webp"
    ]
  },

  robots: {
    index: true,
    follow: true,
  },

  metadataBase: new URL("https://synctechn.com"),
};

export const customCRMDevelopmentData = {
  overviewImage: "https://res.cloudinary.com/wowukaao/image/upload/v1783865630/AI_Solutions_3_d3m38m.jpg",

hero: {
  title: "Custom CRM Development Services",

  subtitle:
    "Build a powerful Customer Relationship Management (CRM) platform tailored to your business. SyncTechn develops secure, scalable, and intelligent CRM software that helps businesses manage leads, automate sales processes, improve customer engagement, streamline operations, and make data-driven decisions through centralized dashboards and workflow automation.",

  bgImage:
    "https://res.cloudinary.com/wowukaao/video/upload/v1783796944/CRM_SERVICE_fqe94n.mp4",

  logos: [
    "React",
    "Next.js",
    "Node.js",
    "PostgreSQL",
    "AWS",
    "Azure",
    "Power BI",
    "Docker"
  ]
},

metrics: [

  {
    value: "Centralized",
    title: "Customer Management",

    subtitle:
      "Manage customer information, interactions, sales activities, and communication from a single platform."
  },

  {
    value: "Automated",
    title: "Sales Workflows",

    subtitle:
      "Automate lead management, follow-ups, approvals, task assignments, and customer engagement workflows."
  },

  {
    value: "Insightful",
    title: "CRM Analytics",

    subtitle:
      "Track sales performance, customer behavior, business KPIs, and operational metrics through interactive dashboards."
  },

  {
    value: "Scalable",
    title: "Enterprise CRM",

    subtitle:
      "Support growing teams, multiple departments, customer segments, and business operations with cloud-ready CRM architecture."
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
  title: "Custom CRM Solutions for Every Industry",

  subtitle:
    "Every business manages customer relationships differently. SyncTechn develops industry-specific CRM software that streamlines customer interactions, automates sales processes, improves team collaboration, and delivers valuable business insights through centralized customer management.",

  list: [

    {
      icon: <HeartPulse className="w-5 h-5" />,
      title: "Healthcare & Medical",

      desc:
        "Develop healthcare CRM solutions for hospitals, clinics, diagnostic centers, telemedicine providers, and healthcare organizations to manage patient relationships, appointments, referrals, communications, and follow-up care."
    },

    {
      icon: <ShoppingBag className="w-5 h-5" />,
      title: "Retail & eCommerce",

      desc:
        "Manage customer profiles, purchase history, loyalty programs, order tracking, customer support, personalized marketing campaigns, and sales analytics from one centralized CRM platform."
    },

    {
      icon: <Landmark className="w-5 h-5" />,
      title: "Banking & Financial Services",

      desc:
        "Build CRM platforms for banks, insurance providers, financial advisors, lending companies, and investment firms with customer onboarding, compliance tracking, lead management, and financial relationship management."
    },

    {
      icon: <Truck className="w-5 h-5" />,
      title: "Logistics & Supply Chain",

      desc:
        "Track customer accounts, shipment requests, delivery schedules, service inquiries, vendor relationships, quotations, and operational communications through a centralized CRM solution."
    },

    {
      icon: <Factory className="w-5 h-5" />,
      title: "Manufacturing & Industrial",

      desc:
        "Manage distributors, suppliers, dealers, quotations, after-sales support, maintenance requests, customer service, and long-term business relationships using customized CRM software."
    },

    {
      icon: <GraduationCap className="w-5 h-5" />,
      title: "Education & Training",

      desc:
        "Develop CRM systems for educational institutions to manage student admissions, inquiries, alumni engagement, marketing campaigns, counseling, and communication workflows."
    },

    {
      icon: <Building2 className="w-5 h-5" />,
      title: "Real Estate & Property Management",

      desc:
        "Manage property listings, buyer and seller leads, customer communication, appointment scheduling, sales pipelines, contracts, and post-sale customer relationships."
    },

    {
      icon: <Globe className="w-5 h-5" />,
      title: "Technology & SaaS",

      desc:
        "Build CRM solutions for SaaS businesses to manage subscriptions, customer onboarding, sales opportunities, customer success, renewals, technical support, and business growth."
    }

  ]
},

whyChooseUs: {
  title: "Why Choose SyncTechn for Custom CRM Development?",

  subtitle:
    "SyncTechn develops scalable CRM platforms that improve customer engagement, automate business processes, strengthen sales performance, and provide organizations with complete visibility into customer relationships through secure and modern technology.",

  cards: [

    {
      title: "CRM Built Around Your Business",

      desc:
        "Every CRM solution is customized around your sales process, customer journey, business workflows, operational requirements, and industry-specific challenges rather than using generic software."
    },

    {
      title: "Sales & Workflow Automation",

      desc:
        "Automate lead assignment, customer follow-ups, sales pipelines, approvals, reminders, task management, notifications, and repetitive business processes to improve productivity."
    },

    {
      title: "360° Customer View",

      desc:
        "Access complete customer profiles including interactions, communication history, purchases, support tickets, contracts, documents, invoices, and engagement activities from a single platform."
    },

    {
      title: "Advanced Reporting & Analytics",

      desc:
        "Monitor sales performance, customer behavior, lead conversion rates, revenue growth, team productivity, forecasts, and business KPIs through interactive dashboards and reports."
    },

    {
      title: "Enterprise Integrations",

      desc:
        "Integrate CRM software with ERP systems, accounting platforms, Microsoft 365, Google Workspace, payment gateways, email services, cloud platforms, and third-party APIs for seamless business operations."
    },

    {
      title: "Secure & Scalable Architecture",

      desc:
        "Develop cloud-ready CRM solutions with role-based access control, secure authentication, encrypted communication, scalable infrastructure, automated backups, and enterprise-grade security practices."
    }

  ]
},
primaryCta: {
  title: "Build a CRM That Grows With Your Business",

  subtitle:
    "Empower your sales, marketing, and customer support teams with a custom CRM platform built specifically for your business. SyncTechn develops scalable CRM solutions that centralize customer data, automate workflows, improve collaboration, and drive long-term business growth.",

  buttonText: "Start Your CRM Project",

  image:
    "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80"
},

secondaryCta: {
  title: "Manage Customers Better.",

  highlight: "Grow Revenue Faster.",

  subtitle:
    "Our CRM platforms help businesses automate lead management, streamline sales processes, improve customer engagement, monitor team performance, and generate actionable insights through intelligent dashboards and enterprise integrations.",

  buttonText: "Talk to Our CRM Experts",

  image:
    "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80",

  grid: [
    {
      title: "Lead Management",
      icon: <Users />
    },
    {
      title: "Sales Automation",
      icon: <Workflow />
    },
    {
      title: "CRM Analytics",
      icon: <BarChart3 />
    },
    {
      title: "Cloud CRM",
      icon: <Cloud />
    }
  ]
},

features: {
  title: "Enterprise CRM Features",

  subtitle:
    "Our custom CRM platforms provide everything businesses need to manage customer relationships, improve sales efficiency, automate workflows, and make data-driven decisions through a centralized business platform.",

  list: [

    {
      icon: <Users />,
      text: "Lead & Contact Management"
    },

    {
      icon: <Workflow />,
      text: "Sales Workflow Automation"
    },

    {
      icon: <LayoutDashboard />,
      text: "Personalized CRM Dashboards"
    },

    {
      icon: <BarChart3 />,
      text: "Sales Analytics & Business Reports"
    },

    {
      icon: <Bell />,
      text: "Automated Follow-Ups & Notifications"
    },

    {
      icon: <FileText />,
      text: "Customer Documents & Activity History"
    },

    {
      icon: <ShieldCheck />,
      text: "Role-Based User Access"
    },

    {
      icon: <Database />,
      text: "Centralized Customer Database"
    },

    {
      icon: <Globe />,
      text: "Customer Portal Integration"
    },

    {
      icon: <Cloud />,
      text: "Cloud-Based CRM Platform"
    },

    {
      icon: <Settings />,
      text: "Third-Party API Integrations"
    },

    {
      icon: <Lock />,
      text: "Enterprise Security & Data Protection"
    }

  ]
},

process: {
  title: "Our Custom CRM Development Process",

  subtitle:
    "We follow a structured CRM development process that transforms customer management into a streamlined, automated, and data-driven business operation through secure and scalable software solutions.",

  steps: [

    {
      title: "1. Business Discovery & CRM Strategy",

      desc:
        "Understand your sales process, customer lifecycle, operational workflows, reporting needs, integrations, and business objectives before designing the CRM solution."
    },

    {
      title: "2. CRM Architecture & Planning",

      desc:
        "Design CRM modules, user roles, customer database structure, automation workflows, dashboards, API integrations, and cloud infrastructure for long-term scalability."
    },

    {
      title: "3. UI/UX Design & Interactive Prototyping",

      desc:
        "Create intuitive CRM dashboards, customer management screens, sales pipelines, reporting interfaces, and responsive user experiences for every business role."
    },

    {
      title: "4. CRM Platform Development",

      desc:
        "Develop secure CRM software using React, Next.js, Node.js, Python, PostgreSQL, REST APIs, cloud-native technologies, and enterprise-grade software architecture."
    },

    {
      title: "5. Business Integration & Automation",

      desc:
        "Integrate the CRM with ERP software, accounting systems, Microsoft 365, Google Workspace, payment gateways, email platforms, cloud storage, communication tools, and third-party APIs while automating business workflows."
    },

    {
      title: "6. Testing & Quality Assurance",

      desc:
        "Perform functional testing, security assessments, workflow validation, API testing, responsive testing, performance optimization, and user acceptance testing before deployment."
    },

    {
      title: "7. Deployment & User Training",

      desc:
        "Deploy the CRM platform on AWS, Microsoft Azure, Google Cloud, or private infrastructure with CI/CD pipelines, monitoring, backup strategies, administrator configuration, and user onboarding."
    },

    {
      title: "8. Maintenance & Continuous Improvement",

      desc:
        "Provide ongoing software updates, security enhancements, performance optimization, feature development, cloud monitoring, bug fixes, and technical support as your business grows."
    }

  ]
},
faqs: {
  title: "Frequently Asked Questions",

  subtitle:
    "Find answers to common questions about our Custom CRM Development services, CRM software solutions, integrations, security, deployment, scalability, and long-term support.",

  list: [

    {
      q: "What is a Custom CRM and how is it different from an off-the-shelf CRM?",

      a:
        "A Custom CRM is a customer relationship management platform built specifically for your business processes, sales workflows, customer lifecycle, and operational requirements. Unlike generic CRM software, a custom CRM includes only the features your business needs, integrates with your existing systems, and can be expanded as your organization grows."
    },

    {
      q: "Which businesses can benefit from a Custom CRM solution?",

      a:
        "Custom CRM software is suitable for startups, small businesses, enterprises, healthcare organizations, financial institutions, manufacturing companies, logistics providers, educational institutions, real estate firms, retail businesses, SaaS companies, and any organization that manages customer relationships, leads, sales, or support operations."
    },

    {
      q: "Can the CRM integrate with our existing business software?",

      a:
        "Yes. We integrate CRM platforms with ERP systems, accounting software, Microsoft 365, Google Workspace, payment gateways, email platforms, marketing automation tools, cloud storage, customer support software, communication platforms, and third-party REST APIs to create a unified business ecosystem."
    },

    {
      q: "Can the CRM automate sales and business workflows?",

      a:
        "Absolutely. Our CRM solutions automate lead assignment, follow-ups, customer onboarding, quotations, approvals, reminders, sales pipelines, email notifications, customer communications, task management, and repetitive business workflows to improve team productivity."
    },

    {
      q: "How do you ensure CRM security and data protection?",

      a:
        "Security is implemented using role-based access control (RBAC), multi-factor authentication (MFA), encrypted communication, secure APIs, activity logs, audit trails, automated backups, user permissions, and industry-standard security practices to help protect sensitive customer and business data."
    },

    {
      q: "Can the CRM generate reports and business insights?",

      a:
        "Yes. The CRM includes interactive dashboards, sales reports, lead conversion tracking, customer analytics, revenue forecasting, employee performance metrics, business KPIs, and customizable reports that help organizations make informed business decisions."
    },

    {
      q: "Can the CRM scale as our business grows?",

      a:
        "Yes. Our CRM platforms are built on scalable cloud architecture that supports additional users, departments, customer records, workflows, integrations, automation rules, reports, and business modules as your organization expands."
    },

    {
      q: "Do you provide CRM maintenance and technical support after deployment?",

      a:
        "Yes. We provide ongoing CRM maintenance, software updates, security enhancements, cloud monitoring, feature development, performance optimization, bug fixes, data backup support, and technical assistance to ensure your CRM continues to perform reliably as your business evolves."
    }

  ]
}
};

export default function CustomCRMDevelopment() {
  return (
    <>
      <SEO 
        title={metadata.title}
        description={metadata.description}
        keywords={metadata.keywords.join(', ')}
      />
      <ServiceTemplate 
        data={customCRMDevelopmentData} 
      />
    </>
  );
}
