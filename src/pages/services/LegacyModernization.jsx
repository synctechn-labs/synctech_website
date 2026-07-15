import React from 'react';
import SEO from '../../components/SEO';
import ServiceTemplate from './ServiceTemplate';


import {
  HeartPulse,
  Landmark,
  Factory,
  ShoppingBag,
  Truck,
  Building2,
  Cloud,
  Workflow,
  Database,
  Gauge,
  Layers,
  ShieldCheck,
  Lock,
  RefreshCw,
  Globe,
  MonitorSmartphone,
  BarChart3,
  Cpu,
  Server
} from "lucide-react";

export const metadata = {
  title:
    "Legacy Software Modernization Services | Legacy Application Modernization Company | SyncTechn",

  description:
    "SyncTechn provides legacy software modernization services including application modernization, legacy system migration, cloud migration, software reengineering, application refactoring, API integration, database modernization, UI/UX modernization, and digital transformation solutions for businesses.",

  keywords: [
    "legacy software modernization",
    "legacy application modernization",
    "legacy system modernization",
    "application modernization services",
    "software modernization company",
    "legacy software migration",
    "legacy application migration",
    "legacy system migration",
    "application reengineering",
    "software reengineering",
    "legacy software upgrade",
    "application modernization company",
    "cloud migration services",
    "legacy software transformation",
    "application refactoring",
    "legacy application support",
    "digital transformation services",
    "enterprise application modernization",
    "software migration services",
    "legacy database modernization",
    "api integration services",
    "cloud application modernization",
    "technology modernization",
    "enterprise software modernization",
    "legacy software consulting"
  ],

  alternates: {
    canonical:
      "https://synctechn.com/services/legacy-software-modernization",
  },

  openGraph: {
    title:
      "Legacy Software Modernization Services | SyncTechn",

    description:
      "Modernize legacy software, migrate enterprise applications to the cloud, improve performance, enhance security, and extend software lifespan with SyncTechn.",

    url:
      "https://synctechn.com/services/legacy-software-modernization",

    siteName: "SyncTechn",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/images/services/legacy-modernization-og.webp",
        width: 1200,
        height: 630,
        alt: "Legacy Software Modernization Services"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Legacy Software Modernization Company | SyncTechn",

    description:
      "Modernize legacy applications through cloud migration, software reengineering, API integration, database modernization, and digital transformation.",

    images: [
      "/images/services/legacy-modernization-og.webp"
    ]
  },

  robots: {
    index: true,
    follow: true,
  },

  metadataBase: new URL("https://synctechn.com"),
};

export const legacyModernizationData = {
  overviewImage: "https://res.cloudinary.com/wowukaao/image/upload/v1783865632/soft_dev_2_wgcix5.jpg",

hero: {
  title: "Legacy Software Modernization Services",

  subtitle:
    "Modernize outdated software without disrupting your business operations. SyncTechn helps organizations transform legacy applications into secure, scalable, and cloud-ready solutions through application modernization, software reengineering, cloud migration, API integration, database modernization, UI/UX redesign, performance optimization, and digital transformation. Our modernization services help businesses improve agility, reduce technical debt, strengthen security, and prepare existing systems for future growth.",

  bgImage:
    "https://res.cloudinary.com/wowukaao/video/upload/v1783796947/SOFTWARE_DEV_SERVICE_opdqyb.mp4",

  logos: [
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "Docker",
    "AWS",
    "Microsoft Azure",
    "PostgreSQL"
  ]
},

metrics: [

  {
    value: "Modern",
    title: "Technology Stack",

    subtitle:
      "Upgrade legacy systems using modern frameworks, cloud platforms, APIs, and scalable architectures."
  },

  {
    value: "Cloud",
    title: "Migration Ready",

    subtitle:
      "Move legacy applications securely to cloud-native environments with minimal operational disruption."
  },

  {
    value: "Secure",
    title: "Software Modernization",

    subtitle:
      "Improve application security, compliance, authentication, and system reliability through modernization."
  },

  {
    value: "Future",
    title: "Ready Architecture",

    subtitle:
      "Build scalable, maintainable, and high-performance applications designed for long-term business growth."
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
  title: "Legacy Software Modernization Across Industries",

  subtitle:
    "Every industry depends on software that must evolve with changing business requirements, security standards, and technology trends. SyncTechn modernizes legacy applications by improving performance, enhancing user experience, integrating modern technologies, and preparing systems for future growth.",

  list: [

    {
      icon: <HeartPulse className="w-5 h-5" />,
      title: "Healthcare Application Modernization",

      desc:
        "Modernize hospital management systems, patient portals, healthcare applications, laboratory software, and medical record systems with secure cloud-native architecture, improved performance, and regulatory compliance."
    },

    {
      icon: <Landmark className="w-5 h-5" />,
      title: "Banking & Financial Software",

      desc:
        "Upgrade banking applications, accounting systems, financial reporting platforms, payment processing software, and customer portals with enhanced security, API integration, and scalable cloud infrastructure."
    },

    {
      icon: <Factory className="w-5 h-5" />,
      title: "Manufacturing Software",

      desc:
        "Modernize manufacturing ERP systems, production management software, inventory applications, procurement platforms, and factory management solutions to improve operational efficiency and automation."
    },

    {
      icon: <ShoppingBag className="w-5 h-5" />,
      title: "Retail & eCommerce Platforms",

      desc:
        "Transform outdated retail systems, POS software, inventory management applications, CRM platforms, and eCommerce solutions with responsive interfaces and modern cloud technologies."
    },

    {
      icon: <Truck className="w-5 h-5" />,
      title: "Logistics & Supply Chain Systems",

      desc:
        "Upgrade transportation software, warehouse management systems, fleet management platforms, shipment tracking applications, and logistics solutions through cloud migration and workflow automation."
    },

    {
      icon: <Building2 className="w-5 h-5" />,
      title: "Enterprise Business Applications",

      desc:
        "Modernize ERP software, HR systems, CRM platforms, internal business applications, workflow management systems, reporting tools, and enterprise portals using modern software engineering practices."
    }

  ]
},

whyChooseUs: {
  title: "Why Choose SyncTechn for Legacy Software Modernization?",

  subtitle:
    "Modernizing legacy software requires more than upgrading technology. We focus on preserving business value, improving software performance, strengthening security, and preparing applications for long-term scalability while minimizing operational disruption.",

  cards: [

    {
      title: "End-to-End Modernization Strategy",

      desc:
        "We analyze your existing software, identify modernization opportunities, reduce technical debt, improve maintainability, and build a modernization roadmap aligned with your business objectives."
    },

    {
      title: "Modern Technology Expertise",

      desc:
        "Our engineers modernize applications using React, Next.js, Node.js, Python, Java, PostgreSQL, Docker, Kubernetes, REST APIs, GraphQL, AWS, Microsoft Azure, and cloud-native development practices."
    },

    {
      title: "Cloud Migration & Digital Transformation",

      desc:
        "Move legacy applications from outdated infrastructure to secure cloud platforms while improving scalability, reliability, disaster recovery, deployment flexibility, and operational efficiency."
    },

    {
      title: "Performance & Security Improvements",

      desc:
        "Enhance application performance through optimized architecture, database modernization, secure authentication, API security, role-based access control, encryption, and continuous monitoring."
    },

    {
      title: "Seamless Integration",

      desc:
        "Integrate legacy software with modern ERP systems, CRM platforms, cloud services, payment gateways, AI solutions, mobile applications, and third-party business tools using secure APIs."
    },

    {
      title: "Continuous Support & Evolution",

      desc:
        "Beyond modernization, we provide application maintenance, cloud optimization, software updates, feature enhancements, security improvements, monitoring, and long-term technical support."
    }

  ]
},
primaryCta: {
  title: "Ready to Modernize Your Legacy Software?",

  subtitle:
    "Transform outdated applications into secure, scalable, and cloud-ready software without disrupting your business operations. SyncTechn helps organizations modernize legacy systems to improve performance, enhance user experiences, strengthen security, and support future digital transformation.",

  buttonText: "Schedule a Modernization Consultation",

  image:
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80"
},

secondaryCta: {
  title: "Transform Legacy Applications",

  highlight: "Into Modern Digital Platforms",

  subtitle:
    "Upgrade legacy software with modern architecture, cloud-native technologies, API integrations, responsive user interfaces, enhanced security, and scalable infrastructure. Our modernization approach minimizes business disruption while maximizing long-term value.",

  buttonText: "Talk to Our Modernization Experts",

  image:
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",

  grid: [
    {
      title: "Cloud Migration",
      icon: <Cloud />
    },
    {
      title: "Application Reengineering",
      icon: <Workflow />
    },
    {
      title: "API Integration",
      icon: <Database />
    },
    {
      title: "Performance Optimization",
      icon: <Gauge />
    }
  ]
},

features: {
  title: "Enterprise Legacy Modernization Capabilities",

  subtitle:
    "Our legacy software modernization services help businesses improve application performance, reduce technical debt, strengthen security, and prepare existing systems for future business growth.",

  list: [

    {
      icon: <Cloud />,
      text: "Cloud Migration & Cloud-Native Architecture"
    },

    {
      icon: <Workflow />,
      text: "Business Process Modernization"
    },

    {
      icon: <Database />,
      text: "Database Modernization & Migration"
    },

    {
      icon: <Layers />,
      text: "Microservices & Modular Architecture"
    },

    {
      icon: <ShieldCheck />,
      text: "Application Security Enhancement"
    },

    {
      icon: <Lock />,
      text: "Identity & Access Management"
    },

    {
      icon: <RefreshCw />,
      text: "Legacy System Refactoring"
    },

    {
      icon: <Globe />,
      text: "API Development & Third-Party Integration"
    },

    {
      icon: <MonitorSmartphone />,
      text: "Responsive UI/UX Modernization"
    },

    {
      icon: <BarChart3 />,
      text: "Business Analytics & Reporting"
    },

    {
      icon: <Cpu />,
      text: "Performance Optimization"
    },

    {
      icon: <Server />,
      text: "Scalable Infrastructure & DevOps"
    }

  ]
},

process: {
  title: "Our Legacy Software Modernization Process",

  subtitle:
    "We follow a structured modernization methodology that minimizes operational risks while transforming legacy applications into secure, scalable, and future-ready software platforms.",

  steps: [

    {
      title: "1. Application Assessment & Discovery",

      desc:
        "Analyze your legacy software architecture, technology stack, business workflows, infrastructure, integrations, security posture, and modernization goals."
    },

    {
      title: "2. Modernization Strategy & Roadmap",

      desc:
        "Define the modernization approach, migration strategy, technology stack, cloud architecture, timelines, and implementation roadmap aligned with your business objectives."
    },

    {
      title: "3. UI/UX & Architecture Redesign",

      desc:
        "Modernize outdated interfaces, redesign application architecture, improve user experience, and prepare the platform for scalability and cloud deployment."
    },

    {
      title: "4. Application Refactoring & Development",

      desc:
        "Refactor legacy code, replace obsolete technologies, optimize databases, implement APIs, and rebuild software using modern frameworks and development best practices."
    },

    {
      title: "5. System Integration & Cloud Migration",

      desc:
        "Integrate modernized applications with ERP, CRM, cloud platforms, payment gateways, authentication providers, and third-party business systems while migrating workloads securely."
    },

    {
      title: "6. Testing & Quality Assurance",

      desc:
        "Perform functional testing, regression testing, security validation, performance testing, compatibility testing, and user acceptance testing to ensure a stable transition."
    },

    {
      title: "7. Deployment & Production Rollout",

      desc:
        "Deploy the modernized application using CI/CD pipelines with monitoring, backup strategies, rollback planning, and minimal downtime during production release."
    },

    {
      title: "8. Continuous Optimization & Support",

      desc:
        "Provide ongoing maintenance, cloud optimization, software updates, security improvements, performance monitoring, feature enhancements, and technical support to ensure long-term success."
    }

  ]
},
faqs: {
  title: "Frequently Asked Questions",

  subtitle:
    "Learn more about our legacy software modernization services, cloud migration, application reengineering, modernization strategies, and long-term application support.",

  list: [

    {
      q: "What is legacy software modernization?",

      a: "Legacy software modernization is the process of upgrading outdated applications, systems, and technologies using modern development frameworks, cloud platforms, APIs, and scalable architectures. The objective is to improve performance, security, maintainability, user experience, and long-term business value while preserving important business functionality."
    },

    {
      q: "Why should businesses modernize legacy applications?",

      a: "Modernizing legacy applications helps businesses reduce technical debt, improve system performance, strengthen cybersecurity, simplify maintenance, integrate with modern technologies, enhance user experience, and support future digital transformation initiatives."
    },

    {
      q: "Can you modernize our existing software without rebuilding everything?",

      a: "Yes. Depending on your application's condition and business goals, we can modernize existing software through code refactoring, UI/UX redesign, API integration, cloud migration, database modernization, or incremental upgrades without requiring a complete rebuild."
    },

    {
      q: "Do you migrate legacy applications to cloud platforms?",

      a: "Yes. We help organizations migrate legacy applications to cloud environments such as AWS, Microsoft Azure, Google Cloud, or hybrid infrastructures while improving scalability, reliability, security, and operational efficiency."
    },

    {
      q: "Can legacy applications integrate with modern software?",

      a: "Absolutely. We develop secure APIs and integration layers that allow legacy systems to communicate with ERP platforms, CRM software, payment gateways, mobile applications, cloud services, analytics platforms, and third-party business applications."
    },

    {
      q: "How do you ensure data security during modernization?",

      a: "Security is integrated throughout the modernization process using secure authentication, role-based access control, encrypted communication, vulnerability assessments, secure coding standards, backup strategies, and comprehensive testing before deployment."
    },

    {
      q: "How long does a legacy software modernization project take?",

      a: "The timeline depends on factors such as application complexity, technology stack, integrations, business requirements, and migration strategy. After an initial assessment, we provide a detailed modernization roadmap with estimated milestones and implementation phases."
    },

    {
      q: "Do you provide support after modernization is completed?",

      a: "Yes. We provide ongoing maintenance, cloud optimization, software updates, performance monitoring, feature enhancements, security improvements, technical support, and continuous optimization to help your modernized application evolve with your business."
    }

  ]
}
};

export default function LegacyModernization() {
  return (
    <>
      <SEO 
        title={metadata.title}
        description={metadata.description}
        keywords={metadata.keywords.join(', ')}
      />
      <ServiceTemplate 
        data={legacyModernizationData} 
      />
    </>
  );
}
