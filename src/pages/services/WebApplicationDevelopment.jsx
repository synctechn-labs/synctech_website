import React from 'react';
import SEO from '../../components/SEO';
import ServiceTemplate from './ServiceTemplate';


import {
  HeartPulse,
  Landmark,
  ShoppingBag,
  Factory,
  Truck,
  GraduationCap,
  Building2,
  Globe,
  Cloud,
  Workflow,
  Database,
  BarChart3,
  Users,
  ShieldCheck,
  Lock,
  Search,
  Bell,
  Settings,
  Rocket
} from "lucide-react";

export const metadata = {
  title:
    "Custom Web Application Development Company | Web Application Development Services | SyncTechn",

  description:
    "SyncTechn provides custom web application development services including enterprise web applications, business portals, SaaS applications, CRM, ERP, customer portals, cloud-based applications, workflow automation, API development, and scalable web solutions.",

  keywords: [
    "custom web application development",
    "web application development company",
    "web application development services",
    "custom web app development",
    "enterprise web application development",
    "business web application",
    "web software development",
    "cloud web applications",
    "custom business applications",
    "web portal development",
    "enterprise portal development",
    "workflow automation software",
    "saas web application",
    "api development",
    "crm web application",
    "erp web application",
    "business process automation",
    "react web development",
    "next js development",
    "node js development",
    "python web development",
    "full stack web development",
    "progressive web application",
    "digital transformation services",
    "enterprise software development"
  ],

  alternates: {
    canonical:
      "https://synctechn.com/services/custom-web-application-development",
  },

  openGraph: {
    title:
      "Custom Web Application Development Services | SyncTechn",

    description:
      "Develop secure, scalable, and cloud-ready web applications for startups, enterprises, and growing businesses using modern technologies.",

    url:
      "https://synctechn.com/services/custom-web-application-development",

    siteName: "SyncTechn",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/images/services/web-application-development-og.webp",
        width: 1200,
        height: 630,
        alt: "Custom Web Application Development"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Custom Web Application Development Company | SyncTechn",

    description:
      "Enterprise web applications, SaaS platforms, business portals, workflow automation, cloud applications, and full-stack web development.",

    images: [
      "/images/services/web-application-development-og.webp"
    ]
  },

  robots: {
    index: true,
    follow: true,
  },

  metadataBase: new URL("https://synctechn.com"),
};

export const webApplicationDevelopmentData = {
  overviewImage: "https://res.cloudinary.com/wowukaao/image/upload/v1783865629/web_5_ztsnre.jpg",

hero: {
  title: "Custom Web Application Development Services",

  subtitle:
    "Build secure, scalable, and high-performance web applications tailored to your business goals. SyncTechn develops custom web applications that streamline business operations, automate workflows, improve customer experiences, and support digital transformation. Our web application development services include enterprise portals, SaaS applications, CRM systems, ERP software, customer portals, cloud-native applications, workflow automation, API development, dashboards, and progressive web applications using modern full-stack technologies.",

  bgImage:
    "https://res.cloudinary.com/wowukaao/video/upload/v1783796944/web_dev_service_tljowb.mp4",

  logos: [
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "PostgreSQL",
    "AWS",
    "Docker",
    "Microsoft Azure"
  ]
},

metrics: [

  {
    value: "Modern",
    title: "Full-Stack Technology",

    subtitle:
      "Built using React, Next.js, Node.js, Python, cloud platforms, APIs, and scalable databases."
  },

  {
    value: "Cloud",
    title: "Deployment Ready",

    subtitle:
      "Deploy web applications securely on AWS, Azure, Google Cloud, or private infrastructure."
  },

  {
    value: "Secure",
    title: "Application Security",

    subtitle:
      "Enterprise-grade authentication, role-based access control, secure APIs, and encrypted communication."
  },

  {
    value: "Scalable",
    title: "Business Applications",

    subtitle:
      "Web applications designed to support growing users, increasing workloads, and long-term business expansion."
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
  title: "Custom Web Application Solutions for Every Industry",

  subtitle:
    "Every industry has unique operational challenges and business processes. SyncTechn develops secure, scalable, and cloud-ready web applications tailored to industry-specific workflows, helping organizations improve productivity, automate operations, and deliver better digital experiences.",

  list: [

    {
      icon: <HeartPulse className="w-5 h-5" />,
      title: "Healthcare Web Applications",

      desc:
        "Develop healthcare portals, patient management systems, appointment scheduling platforms, electronic medical records (EMR), telemedicine applications, healthcare dashboards, and secure medical software."
    },

    {
      icon: <Landmark className="w-5 h-5" />,
      title: "Banking & Financial Applications",

      desc:
        "Build secure financial web applications including online banking portals, payment systems, accounting software, expense management platforms, loan management systems, and financial reporting dashboards."
    },

    {
      icon: <ShoppingBag className="w-5 h-5" />,
      title: "Retail & eCommerce Applications",

      desc:
        "Create custom eCommerce platforms, customer portals, inventory management systems, order management software, CRM applications, loyalty platforms, and omnichannel retail solutions."
    },

    {
      icon: <Factory className="w-5 h-5" />,
      title: "Manufacturing Applications",

      desc:
        "Develop ERP systems, production management software, inventory tracking applications, procurement platforms, quality management systems, and manufacturing dashboards."
    },

    {
      icon: <Truck className="w-5 h-5" />,
      title: "Logistics & Supply Chain",

      desc:
        "Build transportation management systems, fleet tracking applications, warehouse management platforms, shipment tracking software, inventory planning tools, and logistics dashboards."
    },

    {
      icon: <GraduationCap className="w-5 h-5" />,
      title: "Education & eLearning",

      desc:
        "Develop Learning Management Systems (LMS), student portals, examination platforms, virtual classrooms, online learning applications, and education management software."
    },

    {
      icon: <Building2 className="w-5 h-5" />,
      title: "Enterprise Business Solutions",

      desc:
        "Build enterprise portals, CRM software, ERP applications, HR management systems, workflow automation platforms, document management systems, and business intelligence dashboards."
    },

    {
      icon: <Globe className="w-5 h-5" />,
      title: "Travel & Hospitality",

      desc:
        "Develop hotel booking systems, reservation platforms, travel management portals, customer self-service applications, tourism software, and hospitality management solutions."
    }

  ]
},

whyChooseUs: {
  title: "Why Choose SyncTechn for Custom Web Application Development?",

  subtitle:
    "SyncTechn develops secure, scalable, and future-ready web applications using modern technologies and best development practices. We focus on delivering reliable digital solutions that improve business efficiency, streamline workflows, and support long-term business growth.",

  cards: [

    {
      title: "Tailor-Made Business Solutions",

      desc:
        "Every web application is designed around your unique business requirements, workflows, operational goals, and customer expectations instead of relying on generic off-the-shelf software."
    },

    {
      title: "Modern Full-Stack Development",

      desc:
        "We develop applications using React, Next.js, Node.js, Python, PostgreSQL, cloud technologies, REST APIs, GraphQL, Docker, and modern full-stack development practices."
    },

    {
      title: "Secure & Scalable Architecture",

      desc:
        "Our applications include secure authentication, role-based permissions, encrypted communication, cloud-native infrastructure, scalable databases, and enterprise-grade security practices."
    },

    {
      title: "Seamless System Integration",

      desc:
        "Integrate your web application with CRM systems, ERP platforms, payment gateways, cloud services, third-party APIs, authentication providers, analytics platforms, and business software."
    },

    {
      title: "Cloud-Ready Deployment",

      desc:
        "Deploy applications on AWS, Microsoft Azure, Google Cloud, private cloud, or on-premise environments with scalable infrastructure, automated deployment pipelines, and high availability."
    },

    {
      title: "Long-Term Technical Support",

      desc:
        "We continue supporting your application with software maintenance, security updates, feature enhancements, performance optimization, cloud monitoring, and ongoing technical improvements."
    }

  ]
},
primaryCta: {
  title: "Ready to Build a Custom Web Application?",

  subtitle:
    "Whether you're building a customer portal, enterprise platform, SaaS application, internal business system, or workflow automation solution, SyncTechn develops secure, scalable, and cloud-ready web applications tailored to your business objectives.",

  buttonText: "Book a Free Consultation",

  image:
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=80"
},

secondaryCta: {
  title: "Transform Your Business",

  highlight: "with Modern Web Applications",

  subtitle:
    "Create high-performance web applications using modern technologies, cloud-native architecture, API integrations, automation, analytics, and enterprise-grade security. We help businesses digitize operations and deliver exceptional user experiences.",

  buttonText: "Talk to Our Web Development Experts",

  image:
    "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80",

  grid: [
    {
      title: "Cloud Applications",
      icon: <Cloud />
    },
    {
      title: "Workflow Automation",
      icon: <Workflow />
    },
    {
      title: "API Integration",
      icon: <Database />
    },
    {
      title: "Business Analytics",
      icon: <BarChart3 />
    }
  ]
},

features: {
  title: "Enterprise Web Application Features",

  subtitle:
    "Our custom web applications are designed to improve business productivity, strengthen security, automate workflows, and support long-term scalability through modern software engineering practices.",

  list: [

    {
      icon: <Globe />,
      text: "Responsive Cross-Browser Web Applications"
    },

    {
      icon: <Users />,
      text: "Role-Based User & Access Management"
    },

    {
      icon: <Workflow />,
      text: "Business Workflow Automation"
    },

    {
      icon: <Database />,
      text: "Centralized Data Management"
    },

    {
      icon: <Cloud />,
      text: "Cloud-Native Deployment"
    },

    {
      icon: <ShieldCheck />,
      text: "Enterprise Security & Authentication"
    },

    {
      icon: <Lock />,
      text: "Data Encryption & Secure APIs"
    },

    {
      icon: <BarChart3 />,
      text: "Real-Time Dashboards & Reporting"
    },

    {
      icon: <Search />,
      text: "Advanced Search & Filtering"
    },

    {
      icon: <Bell />,
      text: "Real-Time Notifications"
    },

    {
      icon: <Settings />,
      text: "Third-Party API Integration"
    },

    {
      icon: <Rocket />,
      text: "Scalable Cloud Architecture"
    }

  ]
},

process: {
  title: "Our Custom Web Application Development Process",

  subtitle:
    "We follow an agile and structured development process to build secure, scalable, and business-focused web applications that deliver measurable value and support long-term digital transformation.",

  steps: [

    {
      title: "1. Business Discovery & Requirement Analysis",

      desc:
        "Understand your business objectives, users, workflows, technical requirements, integrations, and project goals to define the right solution."
    },

    {
      title: "2. Solution Architecture & Planning",

      desc:
        "Design application architecture, databases, APIs, user roles, security models, cloud infrastructure, and development roadmap for a scalable solution."
    },

    {
      title: "3. UI/UX Design & Interactive Prototyping",

      desc:
        "Create responsive user interfaces, wireframes, interactive prototypes, and user journeys focused on usability, accessibility, and engagement."
    },

    {
      title: "4. Full-Stack Web Application Development",

      desc:
        "Develop custom web applications using React, Next.js, Node.js, Python, PostgreSQL, REST APIs, GraphQL, and cloud-native development practices."
    },

    {
      title: "5. API Integration & Business Automation",

      desc:
        "Integrate payment gateways, CRM, ERP, cloud services, authentication providers, analytics tools, and third-party APIs while automating business workflows."
    },

    {
      title: "6. Testing & Quality Assurance",

      desc:
        "Perform functional testing, security testing, API validation, performance optimization, cross-browser testing, responsive testing, and user acceptance testing."
    },

    {
      title: "7. Cloud Deployment & Launch",

      desc:
        "Deploy applications securely on AWS, Microsoft Azure, Google Cloud, or private infrastructure using CI/CD pipelines, monitoring, backups, and scalable hosting."
    },

    {
      title: "8. Maintenance & Continuous Improvement",

      desc:
        "Provide ongoing software maintenance, feature enhancements, cloud optimization, performance monitoring, security updates, bug fixes, and technical support to ensure continuous growth."
    }

  ]
},
faqs: {
  title: "Frequently Asked Questions",

  subtitle:
    "Find answers to common questions about our custom web application development services, technologies, security, integrations, deployment, and ongoing support.",

  list: [

    {
      q: "What is custom web application development?",

      a: "Custom web application development is the process of designing and building web-based software tailored to your business requirements. Unlike off-the-shelf software, custom web applications are developed specifically for your workflows, users, business processes, and long-term growth objectives."
    },

    {
      q: "What types of web applications does SyncTechn develop?",

      a: "We develop custom business applications, enterprise portals, customer portals, employee portals, SaaS applications, CRM systems, ERP software, workflow automation platforms, dashboards, Progressive Web Apps (PWAs), eCommerce applications, and industry-specific web solutions."
    },

    {
      q: "Can you integrate our web application with existing business systems?",

      a: "Yes. We integrate custom web applications with CRM platforms, ERP systems, payment gateways, HR software, cloud services, authentication providers, accounting software, analytics tools, and third-party APIs to create a connected digital ecosystem."
    },

    {
      q: "Which technologies do you use for web application development?",

      a: "We use modern technologies including React, Next.js, Node.js, Python, JavaScript, TypeScript, PostgreSQL, MySQL, MongoDB, Docker, REST APIs, GraphQL, AWS, Microsoft Azure, and Google Cloud to build secure, scalable, and high-performance web applications."
    },

    {
      q: "Are your web applications secure?",

      a: "Yes. Security is an essential part of our development process. We implement secure authentication, role-based access control, HTTPS encryption, API security, secure coding standards, database protection, vulnerability testing, and regular security updates to protect your application and business data."
    },

    {
      q: "Can you modernize or upgrade our existing web application?",

      a: "Absolutely. We modernize legacy web applications by upgrading outdated technologies, redesigning user interfaces, improving application performance, migrating to cloud infrastructure, strengthening security, and integrating modern APIs without disrupting your business operations."
    },

    {
      q: "How long does it take to develop a custom web application?",

      a: "Development timelines vary depending on project complexity, features, integrations, and business requirements. After understanding your project goals during the discovery phase, we provide a detailed development roadmap with estimated milestones and delivery timelines."
    },

    {
      q: "Do you provide maintenance and support after deployment?",

      a: "Yes. We provide ongoing application maintenance, software updates, cloud monitoring, bug fixes, security improvements, feature enhancements, performance optimization, and technical support to ensure your web application continues to perform reliably as your business grows."
    }

  ]
}
};

export default function WebApplicationDevelopment() {
  return (
    <>
      <SEO 
        title={metadata.title}
        description={metadata.description}
        keywords={metadata.keywords.join(', ')}
      />
      <ServiceTemplate 
        data={webApplicationDevelopmentData} 
      />
    </>
  );
}
