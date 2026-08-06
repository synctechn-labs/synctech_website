import React from 'react';
import SEO from '../../components/SEO';
import ServiceTemplate from './ServiceTemplate';
import EnterpriseTechStack from '../home/sections/EnterpriseTechStack';


import {
  Globe,
  MonitorSmartphone,
  ShoppingCart,
  LayoutDashboard,
  Smartphone,
  Workflow,
  Search,
  Gauge,
  ShieldCheck,
  Cloud,
  BarChart3,
  Award,
  Users,
  Rocket,
  Headphones,
  HeartPulse,
  ShoppingBag,
  Factory,
  Truck,
  Landmark,
  GraduationCap,
  Building2,
  Cpu,
  Lock,
  Fingerprint,
  Server,
  Database
} from "lucide-react";

export const metadata = {
  title:
    "Custom Web Development Company | Website & Web Application Development Services | SyncTechn",

  description:
    "SyncTechn is a custom web development company providing website development, web application development, eCommerce development, React, Next.js, Node.js, Python, CMS, SaaS, API integration, and enterprise web development services for startups and businesses worldwide.",

  keywords: [
    "web development company",
    "custom web development",
    "web development services",
    "website development company",
    "website development services",
    "web application development",
    "enterprise web application development",
    "custom website development",
    "react development company",
    "next.js development company",
    "node.js development company",
    "python web development",
    "full stack web development",
    "frontend development services",
    "backend development services",
    "ecommerce website development",
    "cms development services",
    "headless cms development",
    "api development services",
    "rest api development",
    "graphql development",
    "saas application development",
    "enterprise software development",
    "cloud application development",
    "progressive web app development",
    "responsive website development",
    "seo friendly website development",
    "website redesign services",
    "website maintenance services",
    "website modernization",
    "digital transformation services"
  ],

  alternates: {
    canonical:
      "https://synctechn.com/services/web-development",
  },

  openGraph: {
    title:
      "Custom Web Development Services | SyncTechn",

    description:
      "Build secure, scalable, and high-performance websites, web applications, SaaS platforms, enterprise portals, and eCommerce solutions with SyncTechn.",

    url:
      "https://synctechn.com/services/web-development",

    siteName: "SyncTechn",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/images/services/web-development-og.webp",
        width: 1200,
        height: 630,
        alt: "Custom Web Development Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Custom Web Development Company | SyncTechn",

    description:
      "Enterprise web development services including custom websites, web applications, React, Next.js, Node.js, SaaS platforms, cloud-native applications, and eCommerce development.",

    images: [
      "/images/services/web-development-og.webp",
    ],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category: "Technology",

  creator: "SyncTechn",

  publisher: "SyncTechn",

  applicationName: "SyncTechn",

  metadataBase: new URL("https://synctechn.com"),
};

export const webDevelopmentData = {
  overviewImage: "https://res.cloudinary.com/wowukaao/image/upload/v1783865629/web_5_ztsnre.jpg",
  hero: {
  title: "Custom Web Development Services",

  subtitle:
    "SyncTechn develops secure, scalable, and high-performance websites and web applications tailored to your business goals. Our web development services include custom website development, enterprise web application development, eCommerce solutions, SaaS platforms, CMS development, API integration, and cloud-native applications using React, Next.js, Node.js, Python, and modern web technologies. Whether you're launching a startup, modernizing an existing platform, or building enterprise software, we create digital experiences that are fast, secure, user-friendly, and built for long-term growth.",

  bgImage:
    "https://res.cloudinary.com/wowukaao/video/upload/v1783796944/web_dev_service_tljowb.mp4",

  logos: [
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "TypeScript",
    "AWS",
    "MongoDB",
    "Docker"
  ]
},

metrics: [

  {
    value: "100%",
    title: "Custom Development",
    subtitle: "Every website and web application is built specifically for your business requirements."
  },

  {
    value: "Modern",
    title: "Technology Stack",
    subtitle: "React, Next.js, Node.js, Python, cloud technologies, and modern development frameworks."
  },

  {
    value: "Secure",
    title: "Development Practices",
    subtitle: "Security-first engineering with modern coding standards and scalable architecture."
  },

  {
    value: "Scalable",
    title: "Architecture",
    subtitle: "Future-ready web applications designed to grow with your business."
  }

],
 servicesSuite: {
   "title": "Comprehensive Web Development Services",
   "subtitle": "From responsive business websites to enterprise web applications, we build secure, scalable, and high-performance digital products using modern web technologies and agile practices.",
   "services": [
     {
       "id": "custom-web-app",
       "title": "Custom Web Application Development",
       "desc": "Develop secure and scalable web applications that automate business processes, improve operational efficiency, and support digital transformation.",
       "features": [
         "Responsive Design",
         "Modern Frontend Frameworks",
         "Scalable Backends",
         "API Integration",
         "Cloud Hosting",
         "Performance Optimization"
       ],
       "image": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"
     },
     {
       "id": "customer-portal",
       "title": "Client & Customer Portal Development",
       "desc": "Enhance customer engagement with self-service portals that provide secure access to account details, billing, support tickets, and personalized resources.",
       "features": [
         "Secure Authentication",
         "Self-Service Features",
         "Document Sharing",
         "Billing Integration",
         "Support Ticketing",
         "Responsive UI"
       ],
       "image": "https://images.unsplash.com/photo-1531297172867-11f8c1c4e7ab?auto=format&fit=crop&w=800&q=80"
     },
     {
       "id": "admin-dashboard",
       "title": "Admin Dashboard Development",
       "desc": "Empower your team with intuitive admin panels to monitor key metrics, manage users, and control application settings from a centralized interface.",
       "features": [
         "Data Visualization",
         "User Management",
         "Role-Based Access",
         "Real-Time Metrics",
         "Export Capabilities",
         "Activity Logs"
       ],
       "image": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
     },
     {
       "id": "booking-systems",
       "title": "Booking & Appointment Systems",
       "desc": "Streamline scheduling with custom booking systems designed for healthcare, salons, consulting, and service-based businesses.",
       "features": [
         "Calendar Integration",
         "Automated Reminders",
         "Payment Processing",
         "Staff Management",
         "Time Zone Support",
         "Custom Workflows"
       ],
       "image": "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80"
     }
   ]
 },
  industries: {
  title: "Custom Web Development Solutions for Every Industry",

  subtitle:
    "Every industry has unique business challenges and digital transformation goals. SyncTechn develops secure, scalable, and user-focused websites and web applications tailored to your industry's workflows, compliance requirements, and customer expectations.",

  list: [

    {
      icon: <HeartPulse className="w-5 h-5" />,
      title: "Healthcare Web Development",

      desc:
        "Develop HIPAA-ready healthcare websites, patient portals, telemedicine platforms, hospital management systems, appointment booking applications, healthcare CRM solutions, and secure medical web applications."
    },

    {
      icon: <Landmark className="w-5 h-5" />,
      title: "Banking & Financial Software",

      desc:
        "Build secure banking websites, fintech platforms, payment gateways, investment portals, digital wallets, customer dashboards, financial management systems, and online banking applications."
    },

    {
      icon: <ShoppingBag className="w-5 h-5" />,
      title: "Retail & eCommerce Development",

      desc:
        "Create modern eCommerce websites with inventory management, payment gateway integration, shopping carts, order management, loyalty programs, product catalogs, and omnichannel customer experiences."
    },

    {
      icon: <Truck className="w-5 h-5" />,
      title: "Logistics & Supply Chain",

      desc:
        "Develop logistics management software, shipment tracking systems, warehouse management solutions, fleet management dashboards, route optimization platforms, and inventory monitoring applications."
    },

    {
      icon: <Factory className="w-5 h-5" />,
      title: "Manufacturing Software",

      desc:
        "Build manufacturing management systems, production dashboards, quality control software, inventory automation, ERP portals, and Industry 4.0 web applications."
    },

    {
      icon: <GraduationCap className="w-5 h-5" />,
      title: "Education & eLearning",

      desc:
        "Develop Learning Management Systems (LMS), student portals, online examination platforms, virtual classrooms, eLearning platforms, and educational web applications."
    },

    {
      icon: <Building2 className="w-5 h-5" />,
      title: "Real Estate Platforms",

      desc:
        "Build real estate websites, property listing portals, CRM solutions, virtual property tours, booking systems, mortgage calculators, and property management platforms."
    },

    {
      icon: <Cpu className="w-5 h-5" />,
      title: "Technology & SaaS",

      desc:
        "Develop SaaS platforms, customer portals, enterprise dashboards, subscription-based applications, cloud-native software, admin panels, and scalable web applications."
    }

  ]
},

whyChooseUs: {
  title: "Why Choose SyncTechn for Custom Web Development?",

  subtitle:
    "At SyncTechn, we combine modern technologies, user-centered design, and scalable architecture to build high-performance websites and web applications. We focus on delivering secure, maintainable, and future-ready digital solutions that help businesses establish a strong online presence and grow with confidence.",

  cards: [

    {
      title: "Modern Technology Stack",

      desc:
        "We build web applications using React, Next.js, Node.js, Python, TypeScript, Tailwind CSS, MongoDB, PostgreSQL, and cloud-native technologies to ensure long-term scalability and maintainability."
    },

    {
      title: "Custom Web Development",

      desc:
        "Every website and web application is designed and developed based on your business objectives, workflows, branding, and customer experience requirements instead of relying on generic templates."
    },

    {
      title: "SEO-Friendly Development",

      desc:
        "We build websites with SEO best practices including optimized code, structured data, Core Web Vitals optimization, responsive layouts, semantic HTML, and fast loading performance to improve search visibility."
    },

    {
      title: "Security-First Engineering",

      desc:
        "Our development process follows secure coding practices, HTTPS implementation, authentication, authorization, encryption, OWASP recommendations, and regular security testing to help protect your business and users."
    },

    {
      title: "Scalable Cloud Architecture",

      desc:
        "We design applications that can scale as your business grows using AWS, Microsoft Azure, Google Cloud, Docker, serverless computing, and modern deployment pipelines."
    },

    {
      title: "Agile & Transparent Development",

      desc:
        "We work in Agile development cycles with regular progress updates, sprint planning, collaborative communication, and continuous feedback to ensure your project aligns with your business goals."
    }

  ]
},
  primaryCta: {
  title: "Ready to Build a Modern Web Solution?",

  subtitle:
    "Whether you need a business website, enterprise web application, SaaS platform, customer portal, or eCommerce website, SyncTechn helps transform your ideas into secure, scalable, and high-performing digital products. Let's discuss your project requirements and build a solution designed for long-term business growth.",

  buttonText: "Book a Free Consultation",

  image:
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80"
},

secondaryCta: {
  title: "Future-Proof Your Business",

  highlight: "with Modern Web Technologies",

  subtitle:
    "Build fast, secure, and scalable digital platforms using React, Next.js, Node.js, Python, cloud infrastructure, API integrations, and AI-powered automation. Our web development services help businesses improve customer experiences, streamline operations, and accelerate digital transformation.",

  buttonText: "Discuss Your Project",

  image:
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",

  grid: [
    {
      title: "React & Next.js Development",
      icon: <MonitorSmartphone />
    },
    {
      title: "Node.js & Python Backend",
      icon: <Server />
    },
    {
      title: "Cloud Infrastructure",
      icon: <Cloud />
    },
    {
      title: "Database Design",
      icon: <Database />
    }
  ]
},

features: {
  title: "Enterprise-Ready Web Application Features",

  subtitle:
    "Every web solution is built using modern development standards with security, scalability, performance, accessibility, and maintainability at its core. We focus on creating reliable web applications that support your business today and scale for tomorrow.",

  list: [

    {
      icon: <MonitorSmartphone />,
      text: "Responsive Web Design for Desktop, Tablet & Mobile"
    },

    {
      icon: <Search />,
      text: "SEO-Friendly Website Architecture & Clean Code"
    },

    {
      icon: <Gauge />,
      text: "Core Web Vitals & Performance Optimization"
    },

    {
      icon: <Cloud />,
      text: "Cloud Deployment on AWS, Azure & Google Cloud"
    },

    {
      icon: <ShieldCheck />,
      text: "Secure Coding Standards & OWASP Best Practices"
    },

    {
      icon: <BarChart3 />,
      text: "Analytics, User Insights & Performance Monitoring"
    },

    {
      icon: <Lock />,
      text: "SSL Encryption & Secure Data Protection"
    },

    {
      icon: <Fingerprint />,
      text: "Authentication & Role-Based User Access"
    },

    {
      icon: <Database />,
      text: "Database Design, Backup & Recovery"
    },

    {
      icon: <Workflow />,
      text: "API Integration & Workflow Automation"
    },

    {
      icon: <Server />,
      text: "Scalable Backend Architecture"
    },

    {
      icon: <Award />,
      text: "Accessibility & Industry Best Practices"
    }

  ]
},

process: {
  title: "Our Web Development Process",

  subtitle:
    "Our structured web development process combines business strategy, user experience design, modern engineering practices, and agile development to deliver secure, scalable, and future-ready web solutions.",

  steps: [

    {
      title: "1. Discovery & Requirement Analysis",

      desc:
        "Understand your business objectives, users, competitors, functional requirements, and technical goals before development begins."
    },

    {
      title: "2. Planning & Technical Strategy",

      desc:
        "Define the technology stack, application architecture, database structure, project roadmap, and development milestones."
    },

    {
      title: "3. UI/UX Design",

      desc:
        "Design intuitive user experiences, responsive interfaces, wireframes, prototypes, and modern user journeys focused on usability and conversions."
    },

    {
      title: "4. Frontend Development",

      desc:
        "Develop fast, responsive, and SEO-friendly user interfaces using React, Next.js, TypeScript, Tailwind CSS, and modern frontend technologies."
    },

    {
      title: "5. Backend Development",

      desc:
        "Build secure backend systems, APIs, authentication, business logic, databases, and cloud services using Node.js, Python, and scalable architectures."
    },

    {
      title: "6. Integration & Testing",

      desc:
        "Integrate payment gateways, CRM, ERP, third-party APIs, cloud services, and perform functional, security, performance, and compatibility testing."
    },

    {
      title: "7. Deployment & Launch",

      desc:
        "Deploy your application on secure cloud infrastructure with CI/CD pipelines, SSL configuration, monitoring, backups, and production optimization."
    },

    {
      title: "8. Maintenance & Continuous Improvement",

      desc:
        "Provide ongoing maintenance, security updates, bug fixes, feature enhancements, monitoring, and performance optimization to support long-term growth."
    }

  ]
},
  faqs: {
    title: "Frequently Asked Questions",
    subtitle: "Everything you need to know about our web development services.",
    list: [
      { q: "How long does web development take?", a: "Most business websites take 4–8 weeks while enterprise applications may require several months depending on complexity and integrations." },
      { q: "Will my website be mobile responsive?", a: "Yes. Every website and application we build is optimized for desktops, tablets, and smartphones." },
      { q: "Do you build e-commerce websites?", a: "Yes. We develop secure and scalable online stores with advanced commerce features." },
      { q: "Will my website be scalable?", a: "Yes. Our solutions are designed to support increasing traffic, users, and future business requirements." },
      { q: "How secure are your web applications?", a: "We follow security best practices including secure coding standards, encryption, authentication, and vulnerability testing." },
      { q: "Do you offer cloud deployment?", a: "Yes. We deploy applications on AWS, Azure, Google Cloud, and other cloud platforms." }
    ]
  }
};

export default function WebDevelopment() {
  return (
    <>
      <SEO 
        title="Custom Website Development & Web Applications | SyncTech"
        description="SyncTech Software Solutions builds secure, high-performing websites and web applications tailored to your business operations. Technical SEO and mobile responsive designs standard."
        keywords="website development, custom web application development, e-commerce web development, React development agency, Next.js web application"
      />
      <ServiceTemplate 
        data={webDevelopmentData} 
        techStackComponent={<EnterpriseTechStack />} 
      />
    </>
  );
}
