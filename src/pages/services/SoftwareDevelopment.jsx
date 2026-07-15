import React from 'react';
import SEO from '../../components/SEO';
import ServiceTemplate from './ServiceTemplate';
import EnterpriseTechStack from '../home/sections/EnterpriseTechStack';


import {
  Smartphone,
  Layers,
  ShieldCheck,
  Zap,
  Bell,
  Cloud,
  BarChart3,
  Globe,
  Award,
  Users,
  Rocket,
  Headphones,
  Workflow,
  HeartPulse,
  ShoppingBag,
  Factory,
  Truck,
  Landmark,
  GraduationCap,
  Building2,
  Plane,
  Database,
  Lock,
  Fingerprint,
  HelpCircle,
  RotateCcw,
  LineChart,
  Target
} from "lucide-react";

export const metadata = {
  title:
    "Custom Software Development Company | Enterprise Software Development Services | SyncTechn",

  description:
    "SyncTechn provides custom software development services for startups, SMBs, and enterprises. We build secure, scalable, and cloud-native software solutions including enterprise applications, SaaS platforms, business automation software, APIs, CRM, ERP, and AI-powered software tailored to your business goals.",

  keywords: [
    "custom software development",
    "software development company",
    "software development services",
    "enterprise software development",
    "custom software solutions",
    "business software development",
    "software product development",
    "enterprise application development",
    "saas development company",
    "cloud software development",
    "software consulting services",
    "crm software development",
    "erp software development",
    "api development services",
    "workflow automation software",
    "business process automation",
    "ai software development",
    "cloud native applications",
    "startup software development company",
    "digital transformation services"
  ],

  alternates: {
    canonical:
      "https://synctechn.com/services/software-development",
  },

  openGraph: {
    title:
      "Custom Software Development Services | SyncTechn",

    description:
      "Build secure, scalable, and future-ready custom software solutions including enterprise applications, SaaS platforms, business software, APIs, AI-powered solutions, and cloud-native applications.",

    url:
      "https://synctechn.com/services/software-development",

    siteName: "SyncTechn",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/images/services/software-development-og.webp",
        width: 1200,
        height: 630,
        alt: "Custom Software Development Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Custom Software Development Company | SyncTechn",

    description:
      "Enterprise software development services including SaaS platforms, business applications, workflow automation, APIs, cloud-native software, and AI-powered solutions.",

    images: [
      "/images/services/software-development-og.webp",
    ],
  },

  robots: {
    index: true,
    follow: true,
  },

  metadataBase: new URL("https://synctechn.com"),
};

export const softwareDevelopmentData = {
  overviewImage: "https://res.cloudinary.com/wowukaao/image/upload/v1783865632/soft_dev_2_wgcix5.jpg",

hero: {
  title: "Custom Software Development Services",

  subtitle:
    "SyncTechn develops secure, scalable, and high-performance custom software solutions that help businesses streamline operations, automate workflows, improve productivity, and accelerate digital transformation. Our software development services include enterprise software development, business applications, SaaS platforms, CRM and ERP solutions, cloud-native applications, API development, workflow automation, and AI-powered software built using modern technologies and scalable architectures.",

  bgImage:
    "https://res.cloudinary.com/wowukaao/video/upload/v1783796947/SOFTWARE_DEV_SERVICE_opdqyb.mp4",

  logos: [
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "Java",
    "AWS",
    "Microsoft Azure",
    "Docker"
  ]
},

metrics: [

  {
    value: "100%",
    title: "Custom Software Solutions",
    subtitle:
      "Every application is designed and developed around your unique business requirements."
  },

  {
    value: "Modern",
    title: "Technology Stack",
    subtitle:
      "React, Next.js, Node.js, Python, Java, cloud platforms, and scalable software architecture."
  },

  {
    value: "Secure",
    title: "Development Practices",
    subtitle:
      "Built using secure coding standards, modern frameworks, and industry best practices."
  },

  {
    value: "Scalable",
    title: "Software Architecture",
    subtitle:
      "Applications designed to support business growth, future expansion, and long-term maintainability."
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
  title: "Custom Software Development Solutions for Every Industry",

  subtitle:
    "Every industry has unique operational challenges, compliance requirements, and digital transformation goals. SyncTechn develops custom software solutions tailored to industry-specific workflows, helping businesses automate operations, improve efficiency, and deliver better customer experiences.",

  list: [

    {
      icon: <HeartPulse className="w-5 h-5" />,
      title: "Healthcare Software Development",

      desc:
        "Develop secure healthcare software including Electronic Health Records (EHR), Hospital Management Systems (HMS), telemedicine platforms, patient portals, appointment scheduling applications, pharmacy management software, and healthcare analytics solutions."
    },

    {
      icon: <Landmark className="w-5 h-5" />,
      title: "Banking & Financial Software Development",

      desc:
        "Build secure financial software including digital banking platforms, payment gateway solutions, financial management systems, investment platforms, accounting software, loan management systems, and FinTech applications."
    },

    {
      icon: <ShoppingBag className="w-5 h-5" />,
      title: "Retail & eCommerce Software",

      desc:
        "Create retail software solutions with inventory management, POS systems, eCommerce platforms, customer loyalty programs, order management systems, warehouse management, and omnichannel commerce solutions."
    },

    {
      icon: <Truck className="w-5 h-5" />,
      title: "Logistics & Supply Chain Software",

      desc:
        "Develop logistics management software, transportation management systems, warehouse automation, shipment tracking platforms, fleet management applications, inventory optimization, and supply chain analytics."
    },

    {
      icon: <Factory className="w-5 h-5" />,
      title: "Manufacturing Software Development",

      desc:
        "Build manufacturing software including production planning systems, ERP solutions, quality management software, inventory automation, predictive maintenance platforms, and Industry 4.0 applications."
    },

    {
      icon: <GraduationCap className="w-5 h-5" />,
      title: "Education & eLearning Software",

      desc:
        "Develop Learning Management Systems (LMS), student information systems, virtual classrooms, examination portals, online training platforms, education management software, and eLearning applications."
    },

    {
      icon: <Building2 className="w-5 h-5" />,
      title: "Real Estate Software Development",

      desc:
        "Build property management systems, CRM solutions, real estate listing platforms, property booking applications, rental management software, and real estate analytics dashboards."
    },

    {
      icon: <Plane className="w-5 h-5" />,
      title: "Travel & Hospitality Software",

      desc:
        "Develop hotel management software, travel booking platforms, reservation systems, tourism portals, travel CRM solutions, customer loyalty applications, and hospitality management systems."
    }

  ]
},

whyChooseUs: {
  title: "Why Choose SyncTechn for Custom Software Development?",

  subtitle:
    "At SyncTechn, we combine modern technologies, business-focused engineering, and agile software development practices to build scalable, secure, and future-ready software solutions. We focus on understanding your business requirements and delivering software that supports long-term growth and digital transformation.",

  cards: [

    {
      title: "Business-Focused Software Development",

      desc:
        "We develop software aligned with your business goals, operational workflows, and long-term strategy, ensuring every feature delivers measurable value."
    },

    {
      title: "Modern Technology Stack",

      desc:
        "Our developers use React, Next.js, Node.js, Python, Java, .NET, PostgreSQL, MongoDB, Docker, Kubernetes, AWS, Microsoft Azure, and Google Cloud to build scalable software solutions."
    },

    {
      title: "Secure & Scalable Architecture",

      desc:
        "Every application is built with security, maintainability, and scalability in mind using secure coding standards, cloud-native architecture, API-first development, and industry best practices."
    },

    {
      title: "Custom Software Solutions",

      desc:
        "Instead of one-size-fits-all products, we design and develop software tailored to your business processes, helping you automate operations and improve productivity."
    },

    {
      title: "Agile Development Process",

      desc:
        "We follow Agile methodologies with transparent communication, milestone-based delivery, iterative development, and continuous feedback throughout the project lifecycle."
    },

    {
      title: "Long-Term Technical Partnership",

      desc:
        "Beyond development, we provide software maintenance, feature enhancements, performance optimization, cloud support, and technical guidance to help your software evolve with your business."
    }

  ]
},
  primaryCta: {
  title: "Build Custom Software That Grows with Your Business",

  subtitle:
    "Whether you're developing a new software product, modernizing legacy systems, building an enterprise platform, or automating business operations, SyncTechn delivers custom software development services tailored to your goals. Let's discuss your project and create a scalable solution for long-term success.",

  buttonText: "Schedule a Free Consultation",

  image:
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80"
},

secondaryCta: {
  title: "Accelerate Business Growth",

  highlight: "with Modern Software Solutions",

  subtitle:
    "Develop secure, cloud-native, and scalable software using modern technologies such as React, Next.js, Node.js, Python, Java, cloud infrastructure, AI integration, and business automation. We help organizations streamline operations, improve productivity, and support digital transformation through custom software development.",

  buttonText: "Talk to Our Software Experts",

  image:
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",

  grid: [
    {
      title: "Business Consulting",
      icon: <Target />
    },
    {
      title: "Software Architecture",
      icon: <Workflow />
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud />
    },
    {
      title: "AI & Automation",
      icon: <Zap />
    }
  ]
},

features: {
  title: "Enterprise-Ready Software Features",

  subtitle:
    "Every software solution is developed using modern engineering standards with security, scalability, maintainability, and performance at its core. Our applications are designed to support business growth while providing a seamless user experience.",

  list: [

    {
      icon: <Workflow />,
      text: "Business Process Automation"
    },

    {
      icon: <Database />,
      text: "Scalable Database Design & Data Management"
    },

    {
      icon: <ShieldCheck />,
      text: "Enterprise Security & Secure Coding Practices"
    },

    {
      icon: <Cloud />,
      text: "Cloud-Native Software Architecture"
    },

    {
      icon: <LineChart />,
      text: "Performance Monitoring & Optimization"
    },

    {
      icon: <Target />,
      text: "Custom Business Workflows"
    },

    {
      icon: <RotateCcw />,
      text: "Legacy Software Modernization"
    },

    {
      icon: <Lock />,
      text: "Authentication & Role-Based Access Control"
    },

    {
      icon: <Users />,
      text: "Multi-User Collaboration & Team Management"
    },

    {
      icon: <BarChart3 />,
      text: "Analytics, Reporting & Business Intelligence"
    },

    {
      icon: <Globe />,
      text: "Cross-Platform & Cloud Accessibility"
    },

    {
      icon: <Award />,
      text: "Maintainable & Future-Ready Architecture"
    }

  ]
},

process: {
  title: "Our Custom Software Development Process",

  subtitle:
    "We follow a structured software development lifecycle (SDLC) that combines business analysis, agile development, modern architecture, testing, and continuous improvement to deliver reliable and scalable software solutions.",

  steps: [

    {
      title: "1. Business Discovery & Requirement Analysis",

      desc:
        "Understand your business objectives, workflows, users, technical requirements, and project scope before defining the software roadmap."
    },

    {
      title: "2. Solution Planning & Architecture",

      desc:
        "Design the application architecture, database structure, technology stack, APIs, cloud infrastructure, and implementation strategy."
    },

    {
      title: "3. UI/UX Design & Prototyping",

      desc:
        "Create intuitive user interfaces, wireframes, prototypes, and user journeys that deliver an excellent user experience across devices."
    },

    {
      title: "4. Agile Software Development",

      desc:
        "Develop scalable software using modern technologies including React, Next.js, Node.js, Python, Java, and cloud-native development practices."
    },

    {
      title: "5. API Development & System Integration",

      desc:
        "Integrate payment gateways, ERP systems, CRM software, cloud services, third-party APIs, and legacy business applications."
    },

    {
      title: "6. Testing & Quality Assurance",

      desc:
        "Perform functional testing, security testing, performance testing, usability testing, compatibility testing, and code quality reviews."
    },

    {
      title: "7. Deployment & Cloud Infrastructure",

      desc:
        "Deploy applications using CI/CD pipelines on AWS, Microsoft Azure, Google Cloud, or private cloud environments with monitoring and backup strategies."
    },

    {
      title: "8. Maintenance & Continuous Improvement",

      desc:
        "Provide software maintenance, feature enhancements, performance optimization, security updates, cloud monitoring, and long-term technical support."
    }

  ]
},
  faqs: {
    title: "Frequently Asked Questions",
    subtitle: "Common questions about our software development services.",
    list: [
      { q: "What is custom software development?", a: "Custom software development is the process of designing, building, and maintaining software applications tailored specifically to your business requirements, workflows, and objectives." },
      { q: "How long does it take to develop custom software?", a: "The development timeline depends on the project's complexity, features, integrations, and testing requirements. Most projects are completed within 8 to 20 weeks, while larger enterprise solutions may require more time." },
      { q: "Do you develop both web and mobile applications?", a: "Yes. We develop responsive web applications, enterprise software, SaaS platforms, Android apps, iOS apps, and cross-platform mobile applications using modern technologies." },
      { q: "Can you integrate the software with our existing systems?", a: "Absolutely. We integrate custom software with ERP systems, CRM platforms, payment gateways, cloud services, APIs, third-party applications, and legacy systems to ensure seamless business operations." },
      { q: "Which technologies do you use for software development?", a: "We work with React, Next.js, Node.js, Python, Java, .NET, PHP, Flutter, React Native, AWS, Microsoft Azure, Google Cloud, SQL, MongoDB, and many other modern development technologies." },
      { q: "Do you provide cloud-based software solutions?", a: "Yes. We develop secure cloud-native applications and SaaS solutions that offer scalability, high availability, remote accessibility, and enterprise-grade security." },
      { q: "Do you provide maintenance and support after deployment?", a: "Yes. We offer ongoing software maintenance, performance optimization, security updates, bug fixes, feature enhancements, monitoring, and technical support to ensure your application continues to perform efficiently." }
    ]
  }
};

export default function SoftwareDevelopment() {
  return (
    <>
      <SEO 
        title="Custom Software Development Services | Enterprise Software Development Company | SyncTech"
        description="SyncTech Software Solutions provides custom software development services, enterprise application development, web and mobile app development, software product development, API integration, cloud solutions, and legacy software modernization to help businesses accelerate digital transformation."
        keywords="custom software development, software development company, enterprise software development, custom software solutions, software product development, web application development, mobile app development, cloud application development, API development, software integration services, legacy software modernization, SaaS application development, business software development, custom enterprise applications"
      />
      <ServiceTemplate 
        data={softwareDevelopmentData} 
        techStackComponent={<EnterpriseTechStack />}
      />
    </>
  );
}
