import React from 'react';
import SEO from '../../components/SEO';
import ServiceTemplate from './ServiceTemplate';


import {
  Factory,
  ShoppingBag,
  HeartPulse,
  Truck,
  Landmark,
  Building2,
  Workflow,
  Cloud,
  BarChart3,
  Database,
  ShoppingCart,
  Users,
  ShieldCheck,
  Globe,
  Settings,
  Award
} from "lucide-react";

export const metadata = {
  title:
    "Custom ERP Development Company | Enterprise ERP Software Development Services | SyncTechn",

  description:
    "SyncTechn develops custom ERP software to streamline finance, HR, inventory, procurement, manufacturing, CRM, warehouse, and business operations. Our ERP development services help businesses automate workflows, centralize data, improve productivity, and scale with secure cloud-based ERP solutions.",

  keywords: [
    "custom ERP development",
    "ERP development company",
    "ERP software development",
    "enterprise ERP software",
    "custom ERP software",
    "ERP solution provider",
    "ERP application development",
    "cloud ERP software",
    "ERP implementation services",
    "ERP integration",
    "business management software",
    "inventory management system",
    "warehouse management software",
    "manufacturing ERP",
    "procurement software",
    "HR management software",
    "finance management software",
    "CRM ERP integration",
    "enterprise resource planning",
    "ERP consulting",
    "workflow automation",
    "business process automation",
    "digital transformation",
    "enterprise software development",
    "ERP modernization"
  ],

  alternates: {
    canonical:
      "https://synctechn.com/services/custom-erp-development",
  },

  openGraph: {
    title:
      "Custom ERP Development Services | SyncTechn",

    description:
      "Develop secure, scalable, and intelligent ERP software that unifies your business operations, automates workflows, and improves organizational efficiency.",

    url:
      "https://synctechn.com/services/custom-erp-development",

    siteName: "SyncTechn",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/images/services/custom-erp-development-og.webp",
        width: 1200,
        height: 630,
        alt: "Custom ERP Development Services"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Enterprise ERP Software Development | SyncTechn",

    description:
      "Custom ERP software development for finance, HR, inventory, manufacturing, procurement, CRM, warehouse, and enterprise automation.",

    images: [
      "/images/services/custom-erp-development-og.webp"
    ]
  },

  robots: {
    index: true,
    follow: true
  },

  metadataBase: new URL("https://synctechn.com"),
};

export const erpDevelopmentData = {
  overviewImage: "https://res.cloudinary.com/wowukaao/image/upload/v1783865632/soft_dev_2_wgcix5.jpg",

hero: {
  title: "Custom ERP Development Services",

  subtitle:
    "Transform the way your business operates with custom ERP software designed specifically for your organization. SyncTechn develops secure, scalable, and cloud-ready Enterprise Resource Planning (ERP) systems that centralize business operations, automate workflows, eliminate manual processes, and provide real-time visibility across departments. Our ERP development services include finance management, HR management, inventory management, procurement, warehouse management, manufacturing ERP, CRM integration, supply chain management, reporting dashboards, analytics, and cloud-based enterprise applications built using modern technologies.",

  bgImage:
    "https://res.cloudinary.com/wowukaao/video/upload/v1783796947/SOFTWARE_DEV_SERVICE_opdqyb.mp4",

  logos: [
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "PostgreSQL",
    "Docker",
    "AWS",
    "Microsoft Azure"
  ]
},

metrics: [

  {
    value: "100%",
    title: "Business-Centric ERP",

    subtitle:
      "Every ERP solution is customized to match your organization's workflows and operational requirements."
  },

  {
    value: "Cloud",
    title: "Deployment Ready",

    subtitle:
      "Deploy securely on AWS, Azure, private cloud, or on-premise infrastructure."
  },

  {
    value: "Integrated",
    title: "Business Operations",

    subtitle:
      "Connect finance, HR, inventory, procurement, manufacturing, CRM, and reporting within one unified ERP platform."
  },

  {
    value: "Scalable",
    title: "Enterprise Architecture",

    subtitle:
      "Future-ready ERP systems designed to support growing teams, increasing data, and expanding business operations."
  }

],
servicesSuite: {
  "title": "Comprehensive Custom Software Development Services",
  "subtitle": "SyncTechn provides end-to-end custom software development services that help businesses automate operations, improve productivity, and accelerate digital transformation. We design and develop secure, scalable, and cloud-ready software solutions.",
  "services": [
    {
      "id": "custom-erp",
      "title": "Custom ERP Development",
      "desc": "Centralize your business operations, automate workflows, and gain real-time insights with a scalable Custom ERP system tailored to your unique industry requirements.",
      "features": [
        "Centralized Operations",
        "Workflow Automation",
        "Real-time Analytics",
        "Inventory Management",
        "Financial Integration",
        "Scalable Architecture"
      ],
      "image": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
    },
    {
      "id": "saas-product",
      "title": "SaaS Product Development",
      "desc": "Build cloud-native Software-as-a-Service (SaaS) products with multi-tenant architecture, secure user management, and scalable infrastructure to grow your subscriber base.",
      "features": [
        "Multi-Tenant Architecture",
        "Subscription Billing",
        "User Management",
        "Cloud Deployment",
        "API Integration",
        "High Availability"
      ],
      "image": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80"
    },
    {
      "id": "legacy-modernization",
      "title": "Legacy Software Modernization",
      "desc": "Upgrade outdated systems to modern tech stacks. We help you migrate to the cloud, improve performance, reduce technical debt, and ensure long-term security.",
      "features": [
        "Cloud Migration",
        "Tech Stack Upgrade",
        "Performance Tuning",
        "Security Enhancements",
        "UI/UX Revamp",
        "Zero Downtime"
      ],
      "image": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80"
    },
    {
      "id": "white-label",
      "title": "White-Label Software Development",
      "desc": "Expand your service offerings quickly with our white-label software development. We build the platform, and you brand it as your own to resell to your clients.",
      "features": [
        "Custom Branding",
        "Reseller Ready",
        "Scalable Solutions",
        "Dedicated Support",
        "Fast Time to Market",
        "Enterprise Security"
      ],
      "image": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
    }
  ]
},
industries: {
  title: "Custom ERP Solutions for Every Industry",

  subtitle:
    "Every industry operates with unique workflows, compliance requirements, and operational challenges. SyncTechn develops custom ERP software that centralizes business operations, automates processes, improves collaboration, and provides real-time insights across departments.",

  list: [

    {
      icon: <Factory className="w-5 h-5" />,
      title: "Manufacturing ERP",

      desc:
        "Develop ERP solutions for manufacturing businesses with production planning, inventory management, procurement, quality control, machine utilization, production scheduling, and supply chain visibility."
    },

    {
      icon: <ShoppingBag className="w-5 h-5" />,
      title: "Retail & eCommerce ERP",

      desc:
        "Manage inventory, warehouses, suppliers, procurement, customer orders, accounting, CRM, and omnichannel operations through a centralized ERP platform."
    },

    {
      icon: <HeartPulse className="w-5 h-5" />,
      title: "Healthcare ERP",

      desc:
        "Build healthcare ERP systems for hospital administration, pharmacy management, patient records, inventory control, HR, finance, procurement, and healthcare workflow management."
    },

    {
      icon: <Truck className="w-5 h-5" />,
      title: "Logistics & Supply Chain ERP",

      desc:
        "Optimize logistics operations through fleet management, warehouse automation, shipment tracking, inventory optimization, procurement, and supply chain management."
    },

    {
      icon: <Landmark className="w-5 h-5" />,
      title: "Finance & Banking ERP",

      desc:
        "Develop secure ERP software for accounting, budgeting, payroll, financial reporting, compliance management, document management, and enterprise finance operations."
    },

    {
      icon: <Building2 className="w-5 h-5" />,
      title: "Professional Services ERP",

      desc:
        "Manage projects, employees, customer relationships, invoicing, contracts, resource planning, document management, and business operations from one integrated ERP platform."
    }

  ]
},

whyChooseUs: {
  title: "Why Choose SyncTechn for Custom ERP Development?",

  subtitle:
    "SyncTechn develops modern ERP software that helps businesses simplify complex operations, automate repetitive processes, and improve organizational efficiency. Our ERP solutions are designed to integrate departments, improve decision-making, and support long-term business growth through secure, scalable, and cloud-ready architecture.",

  cards: [

    {
      title: "Business-Centric ERP Solutions",

      desc:
        "Every ERP platform is developed around your organization's workflows, operational requirements, departments, and long-term business objectives rather than using generic off-the-shelf software."
    },

    {
      title: "Modern ERP Technology Stack",

      desc:
        "We build ERP software using React, Next.js, Node.js, Python, Java, PostgreSQL, Docker, Kubernetes, AWS, Microsoft Azure, and modern cloud-native technologies to ensure flexibility, scalability, and long-term maintainability."
    },

    {
      title: "End-to-End Business Automation",

      desc:
        "Automate finance, inventory, procurement, HR, manufacturing, CRM, warehouse operations, approvals, reporting, and business workflows through one centralized ERP platform."
    },

    {
      title: "Secure & Scalable Architecture",

      desc:
        "Our ERP applications are developed using secure authentication, role-based permissions, encrypted communication, API-first architecture, cloud deployment, backup strategies, and industry-standard security practices."
    },

    {
      title: "Seamless Integration",

      desc:
        "Integrate your ERP software with CRM platforms, accounting software, HR systems, payment gateways, eCommerce platforms, BI tools, third-party applications, and existing enterprise software."
    },

    {
      title: "Long-Term ERP Partnership",

      desc:
        "We provide ERP maintenance, software enhancements, module expansion, cloud migration, performance optimization, security updates, and technical support to ensure your ERP system continues to evolve with your business."
    }

  ]
},
primaryCta: {
  title: "Ready to Modernize Your Business with Custom ERP Software?",

  subtitle:
    "Whether you're replacing spreadsheets, upgrading legacy systems, or building a centralized ERP platform, SyncTechn develops custom ERP software that streamlines operations, improves collaboration, and supports long-term business growth.",

  buttonText: "Book a Free ERP Consultation",

  image:
    "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1000&q=80"
},

secondaryCta: {
  title: "Unify Every Department",

  highlight: "with Intelligent ERP Solutions",

  subtitle:
    "Manage finance, inventory, procurement, manufacturing, HR, CRM, warehouses, and reporting through a secure, cloud-ready ERP platform. Our ERP development services help businesses automate workflows, improve visibility, and make data-driven decisions from a single system.",

  buttonText: "Talk to Our ERP Experts",

  image:
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",

  grid: [
    {
      title: "Business Automation",
      icon: <Workflow />
    },
    {
      title: "Cloud ERP",
      icon: <Cloud />
    },
    {
      title: "Business Intelligence",
      icon: <BarChart3 />
    },
    {
      title: "Enterprise Integration",
      icon: <Database />
    }
  ]
},

features: {
  title: "Enterprise ERP Features",

  subtitle:
    "Our ERP software is designed to centralize business operations, improve collaboration, automate repetitive tasks, and provide real-time visibility across every department within your organization.",

  list: [

    {
      icon: <Workflow />,
      text: "Business Process Automation"
    },

    {
      icon: <Database />,
      text: "Centralized Business Data Management"
    },

    {
      icon: <BarChart3 />,
      text: "Real-Time Dashboards & Analytics"
    },

    {
      icon: <ShoppingCart />,
      text: "Procurement & Purchase Management"
    },

    {
      icon: <Truck />,
      text: "Inventory & Warehouse Management"
    },

    {
      icon: <Users />,
      text: "Human Resource Management"
    },

    {
      icon: <Building2 />,
      text: "CRM & Customer Relationship Management"
    },

    {
      icon: <ShieldCheck />,
      text: "Role-Based Access & Enterprise Security"
    },

    {
      icon: <Cloud />,
      text: "Cloud & On-Premise Deployment"
    },

    {
      icon: <Globe />,
      text: "Multi-Branch & Multi-Location Management"
    },

    {
      icon: <Settings />,
      text: "Third-Party API Integration"
    },

    {
      icon: <Award />,
      text: "Scalable & Future-Ready ERP Architecture"
    }

  ]
},

process: {
  title: "Our ERP Development Process",

  subtitle:
    "We follow a structured ERP development lifecycle that combines business analysis, software engineering, workflow automation, cloud technologies, and continuous improvement to build secure and scalable ERP solutions.",

  steps: [

    {
      title: "1. Business Analysis & ERP Consulting",

      desc:
        "Understand your organization, departments, operational challenges, existing workflows, and long-term business objectives to define the ERP strategy."
    },

    {
      title: "2. ERP Planning & Solution Architecture",

      desc:
        "Design ERP modules, database architecture, user roles, workflows, integrations, cloud infrastructure, and implementation roadmap based on your business requirements."
    },

    {
      title: "3. UI/UX Design & Module Planning",

      desc:
        "Create intuitive dashboards, reports, workflows, forms, and user experiences that simplify business operations and improve productivity."
    },

    {
      title: "4. Custom ERP Development",

      desc:
        "Develop scalable ERP software using React, Next.js, Node.js, Python, Java, PostgreSQL, cloud technologies, and secure enterprise development practices."
    },

    {
      title: "5. ERP Integration & Data Migration",

      desc:
        "Integrate ERP software with CRM platforms, HR systems, accounting software, payment gateways, eCommerce platforms, APIs, and migrate business data securely."
    },

    {
      title: "6. Testing & Quality Assurance",

      desc:
        "Perform functional testing, security testing, performance optimization, workflow validation, compatibility testing, and user acceptance testing before deployment."
    },

    {
      title: "7. Deployment & User Onboarding",

      desc:
        "Deploy the ERP system on cloud or on-premise infrastructure, configure environments, train users, and provide implementation documentation for smooth adoption."
    },

    {
      title: "8. Maintenance & Continuous Improvement",

      desc:
        "Provide ERP maintenance, feature enhancements, module expansion, cloud optimization, security updates, monitoring, and ongoing technical support to keep your ERP platform evolving with your business."
    }

  ]
},
faqs: {
  title: "Frequently Asked Questions",

  subtitle:
    "Find answers to common questions about our custom ERP software development services, implementation process, integrations, security, pricing, and ongoing support.",

  list: [

    {
      q: "What is Custom ERP Software Development?",

      a: "Custom ERP software development is the process of designing and building an Enterprise Resource Planning (ERP) system tailored specifically to your business operations. Unlike off-the-shelf ERP solutions, custom ERP software is developed around your workflows, departments, business rules, reporting requirements, and future growth plans."
    },

    {
      q: "Why should I choose a custom ERP solution instead of ready-made ERP software?",

      a: "Custom ERP software gives your business greater flexibility, scalability, and control. It allows you to automate unique business processes, integrate with existing systems, improve productivity, eliminate unnecessary features, and adapt the platform as your organization grows."
    },

    {
      q: "What ERP modules can SyncTechn develop?",

      a: "We develop ERP modules for finance and accounting, human resources, payroll, inventory management, warehouse management, procurement, manufacturing, CRM, sales management, project management, supply chain management, reporting dashboards, analytics, and workflow automation."
    },

    {
      q: "Can the ERP software integrate with our existing applications?",

      a: "Yes. Our ERP solutions can integrate with CRM platforms, accounting software, HR systems, payment gateways, eCommerce platforms, cloud services, business intelligence tools, and third-party applications through secure APIs and modern integration technologies."
    },

    {
      q: "Do you develop cloud-based ERP software?",

      a: "Yes. We develop cloud-native ERP applications that can be deployed on AWS, Microsoft Azure, Google Cloud, private cloud infrastructure, or on-premise environments based on your business requirements."
    },

    {
      q: "How secure is your ERP software?",

      a: "Security is integrated throughout our development process. We implement role-based access control, secure authentication, encrypted communication, API security, backup strategies, audit logs, and secure coding practices to help protect your business data."
    },

    {
      q: "How long does it take to develop a custom ERP system?",

      a: "Development timelines depend on the project's complexity, number of modules, integrations, and business requirements. During the discovery phase, we provide a roadmap with estimated milestones and implementation phases tailored to your project."
    },

    {
      q: "Do you provide ERP maintenance and support after deployment?",

      a: "Yes. We offer ongoing ERP maintenance, performance optimization, software updates, security improvements, feature enhancements, technical support, and module expansion to ensure your ERP system continues to meet your business needs."
    }

  ]
}
};

export default function ERPSolutions() {
  return (
    <>
      <SEO 
        title={metadata.title}
        description={metadata.description}
        keywords={metadata.keywords.join(', ')}
      />
      <ServiceTemplate 
        data={erpDevelopmentData} 
      />
    </>
  );
}
