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
  Users,
  ShieldCheck,
  Workflow,
  Cloud,
  Lock,
  Database,
  Bell,
  MessageSquare,
  BarChart3,
  Settings,
  Search
} from "lucide-react";

export const metadata = {
  title:
    "Client & Customer Portal Development Company | Custom Customer Portal Development Services | SyncTechn",

  description:
    "SyncTechn provides custom client and customer portal development services including self-service portals, customer dashboards, client management portals, secure document sharing, account management, support portals, B2B portals, B2C portals, and enterprise customer portal solutions.",

  keywords: [
    "client portal development",
    "customer portal development",
    "custom customer portal",
    "client portal development company",
    "customer portal software",
    "self service portal development",
    "customer self service portal",
    "client management portal",
    "customer dashboard",
    "secure client portal",
    "enterprise customer portal",
    "b2b portal development",
    "b2c portal development",
    "partner portal development",
    "member portal development",
    "customer account portal",
    "online customer portal",
    "portal application development",
    "web portal development",
    "customer engagement platform",
    "document management portal",
    "support portal development",
    "business portal development",
    "enterprise portal solutions",
    "portal software development"
  ],

  alternates: {
    canonical:
      "https://synctechn.com/services/client-customer-portal-development",
  },

  openGraph: {
    title:
      "Client & Customer Portal Development Services | SyncTechn",

    description:
      "Develop secure client and customer portals with self-service features, dashboards, document management, workflow automation, account management, and real-time communication.",

    url:
      "https://synctechn.com/services/client-customer-portal-development",

    siteName: "SyncTechn",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/images/services/customer-portal-development-og.webp",
        width: 1200,
        height: 630,
        alt: "Client & Customer Portal Development"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Client & Customer Portal Development Company | SyncTechn",

    description:
      "Custom customer portals, client dashboards, self-service portals, partner portals, secure document sharing, workflow automation, and enterprise portal development.",

    images: [
      "/images/services/customer-portal-development-og.webp"
    ]
  },

  robots: {
    index: true,
    follow: true,
  },

  metadataBase: new URL("https://synctechn.com"),
};

export const customerPortalDevelopmentData = {
  overviewImage: "https://res.cloudinary.com/wowukaao/image/upload/v1783865629/web_5_ztsnre.jpg",

hero: {
  title: "Client & Customer Portal Development Services",

  subtitle:
    "Deliver exceptional digital experiences with secure, scalable, and feature-rich client and customer portals. SyncTechn develops custom customer portals that enable businesses to provide self-service capabilities, account management, document sharing, communication, workflow automation, service requests, payment management, reporting, and real-time business interactions through a centralized web platform.",

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
    "Azure"
  ]
},

metrics: [

  {
    value: "24/7",
    title: "Customer Self-Service",

    subtitle:
      "Enable customers to access accounts, documents, support, and services anytime from a centralized portal."
  },

  {
    value: "Secure",
    title: "Portal Access",

    subtitle:
      "Role-based authentication, encrypted communication, secure file sharing, and enterprise-grade access control."
  },

  {
    value: "Cloud",
    title: "Portal Infrastructure",

    subtitle:
      "Scalable cloud-native portals designed for growing businesses, teams, customers, and partners."
  },

  {
    value: "Modern",
    title: "User Experience",

    subtitle:
      "Responsive customer portals optimized for desktop, tablet, and mobile devices with intuitive navigation."
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
  title: "Client & Customer Portal Solutions for Every Industry",

  subtitle:
    "Every industry requires secure, efficient, and user-friendly digital experiences. SyncTechn develops custom client and customer portals that simplify communication, improve customer engagement, automate business processes, and provide secure access to services, documents, and business information.",

  list: [

    {
      icon: <HeartPulse className="w-5 h-5" />,
      title: "Healthcare Portals",

      desc:
        "Develop patient portals, appointment management systems, medical record access, telemedicine portals, healthcare document sharing, and secure communication platforms for hospitals and healthcare providers."
    },

    {
      icon: <Landmark className="w-5 h-5" />,
      title: "Banking & Financial Portals",

      desc:
        "Build secure client portals for account management, financial reporting, loan applications, document verification, payment tracking, customer onboarding, and digital banking services."
    },

    {
      icon: <ShoppingBag className="w-5 h-5" />,
      title: "Retail & eCommerce Portals",

      desc:
        "Create customer portals that allow users to manage orders, subscriptions, invoices, returns, loyalty programs, wishlists, product recommendations, and customer support."
    },

    {
      icon: <Factory className="w-5 h-5" />,
      title: "Manufacturing & Distribution",

      desc:
        "Develop supplier portals, distributor portals, inventory dashboards, procurement management, purchase orders, shipment tracking, and production collaboration portals."
    },

    {
      icon: <Truck className="w-5 h-5" />,
      title: "Logistics & Supply Chain",

      desc:
        "Build customer and vendor portals for shipment tracking, warehouse visibility, fleet management, delivery scheduling, logistics reporting, and supply chain collaboration."
    },

    {
      icon: <GraduationCap className="w-5 h-5" />,
      title: "Education & eLearning",

      desc:
        "Develop student portals, parent portals, faculty dashboards, learning management portals, online course platforms, assignment tracking, and academic reporting systems."
    },

    {
      icon: <Building2 className="w-5 h-5" />,
      title: "Professional Services",

      desc:
        "Create secure client portals for consulting firms, law firms, accounting companies, marketing agencies, and service providers with document sharing, project tracking, approvals, and billing."
    },

    {
      icon: <Globe className="w-5 h-5" />,
      title: "SaaS & Enterprise Platforms",

      desc:
        "Develop multi-tenant customer portals, SaaS dashboards, partner portals, reseller portals, subscription management platforms, and enterprise collaboration systems."
    }

  ]
},

whyChooseUs: {
  title: "Why Choose SyncTechn for Client & Customer Portal Development?",

  subtitle:
    "SyncTechn develops secure, scalable, and user-focused client and customer portals that improve collaboration, enhance customer satisfaction, streamline business operations, and support digital transformation. Every portal is designed around your business processes, security requirements, and long-term growth strategy.",

  cards: [

    {
      title: "Custom Portal Development",

      desc:
        "Every client and customer portal is designed specifically for your business workflows, customer journeys, branding, operational requirements, and service delivery model."
    },

    {
      title: "Modern Portal Technologies",

      desc:
        "We build portals using React, Next.js, Node.js, Python, PostgreSQL, REST APIs, GraphQL, cloud platforms, and modern full-stack development practices for performance and scalability."
    },

    {
      title: "Secure User Access",

      desc:
        "Protect sensitive business and customer information through secure authentication, role-based permissions, encrypted communication, multi-factor authentication, audit logs, and enterprise security standards."
    },

    {
      title: "Seamless Business Integrations",

      desc:
        "Integrate customer portals with CRM software, ERP systems, payment gateways, accounting platforms, cloud storage, helpdesk software, email services, and third-party APIs."
    },

    {
      title: "Cloud-Native & Scalable Architecture",

      desc:
        "Deploy customer portals on AWS, Microsoft Azure, Google Cloud, or private cloud environments with scalable infrastructure, automated deployment, high availability, and disaster recovery support."
    },

    {
      title: "Long-Term Portal Support",

      desc:
        "We continue supporting your portal with software maintenance, feature enhancements, security updates, performance optimization, cloud monitoring, and technical assistance as your business grows."
    }

  ]
},
primaryCta: {
  title: "Deliver Better Customer Experiences with a Custom Portal",

  subtitle:
    "Empower your customers, clients, partners, and vendors with a secure self-service portal that simplifies communication, document sharing, account management, service requests, and business collaboration. SyncTechn develops scalable portal solutions tailored to your business needs.",

  buttonText: "Book a Portal Development Consultation",

  image:
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
},

secondaryCta: {
  title: "Connect Better.",

  highlight: "Serve Faster.",

  subtitle:
    "Our custom client and customer portals centralize business interactions through secure authentication, self-service features, workflow automation, real-time notifications, document management, and seamless third-party integrations to improve customer satisfaction and operational efficiency.",

  buttonText: "Talk to Our Portal Experts",

  image:
    "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80",

  grid: [
    {
      title: "Customer Self-Service",
      icon: <Users />
    },
    {
      title: "Secure Collaboration",
      icon: <ShieldCheck />
    },
    {
      title: "Workflow Automation",
      icon: <Workflow />
    },
    {
      title: "Cloud Portal",
      icon: <Cloud />
    }
  ]
},

features: {
  title: "Enterprise Client & Customer Portal Features",

  subtitle:
    "Our client and customer portals are designed to improve user experience, strengthen customer relationships, automate business processes, and provide secure access to business information from anywhere.",

  list: [

    {
      icon: <Users />,
      text: "Customer & Client Account Management"
    },

    {
      icon: <Lock />,
      text: "Secure Login & Multi-Factor Authentication"
    },

    {
      icon: <ShieldCheck />,
      text: "Role-Based Access Control"
    },

    {
      icon: <Database />,
      text: "Secure Document Storage & File Sharing"
    },

    {
      icon: <Bell />,
      text: "Real-Time Notifications & Alerts"
    },

    {
      icon: <Workflow />,
      text: "Workflow Automation & Approval Processes"
    },

    {
      icon: <MessageSquare />,
      text: "Customer Messaging & Communication"
    },

    {
      icon: <BarChart3 />,
      text: "Reports, Analytics & Activity Tracking"
    },

    {
      icon: <Settings />,
      text: "Third-Party API Integrations"
    },

    {
      icon: <Cloud />,
      text: "Cloud-Based Portal Infrastructure"
    },

    {
      icon: <Search />,
      text: "Advanced Search & Smart Filtering"
    },

    {
      icon: <Globe />,
      text: "Responsive Multi-Device Access"
    }

  ]
},

process: {
  title: "Our Client & Customer Portal Development Process",

  subtitle:
    "We follow a structured portal development methodology that combines user experience, secure architecture, business process automation, and scalable technologies to deliver reliable client and customer portals.",

  steps: [

    {
      title: "1. Business Discovery & Portal Strategy",

      desc:
        "Understand your customers, business workflows, service processes, portal objectives, security requirements, integrations, and long-term business goals."
    },

    {
      title: "2. Portal Architecture & Planning",

      desc:
        "Design user roles, permission models, portal workflows, database architecture, API integrations, cloud infrastructure, and a scalable implementation roadmap."
    },

    {
      title: "3. UI/UX Design & Interactive Prototyping",

      desc:
        "Create responsive portal interfaces, intuitive navigation, dashboards, customer journeys, and interactive prototypes that deliver an excellent user experience."
    },

    {
      title: "4. Portal Development",

      desc:
        "Develop secure customer portals using React, Next.js, Node.js, Python, PostgreSQL, REST APIs, GraphQL, and cloud-native technologies with enterprise-grade security."
    },

    {
      title: "5. Business Integration & Automation",

      desc:
        "Integrate CRM platforms, ERP systems, payment gateways, accounting software, cloud storage, helpdesk platforms, email services, and third-party APIs while automating business workflows."
    },

    {
      title: "6. Quality Assurance & Security Testing",

      desc:
        "Perform functional testing, usability testing, security assessments, API validation, responsive testing, performance optimization, and user acceptance testing before deployment."
    },

    {
      title: "7. Cloud Deployment & Portal Launch",

      desc:
        "Deploy portals securely on AWS, Microsoft Azure, Google Cloud, or private cloud infrastructure with monitoring, backups, CI/CD pipelines, and scalable hosting."
    },

    {
      title: "8. Maintenance & Continuous Improvement",

      desc:
        "Provide ongoing maintenance, feature enhancements, cloud optimization, security updates, performance monitoring, bug fixes, and technical support to ensure your portal continues to evolve with your business."
    }

  ]
},
faqs: {
  title: "Frequently Asked Questions",

  subtitle:
    "Find answers to common questions about our client and customer portal development services, self-service portals, integrations, security, deployment, and ongoing support.",

  list: [

    {
      q: "What is a client or customer portal?",

      a: "A client or customer portal is a secure web-based application that allows customers, clients, partners, or vendors to access their accounts, manage documents, track requests, communicate with your business, view reports, make payments, and complete tasks through a centralized self-service platform."
    },

    {
      q: "What types of client and customer portals does SyncTechn develop?",

      a: "We develop custom client portals, customer self-service portals, B2B portals, B2C portals, partner portals, vendor portals, member portals, customer dashboards, document management portals, support portals, and enterprise collaboration portals tailored to your business requirements."
    },

    {
      q: "Can the portal integrate with our existing business systems?",

      a: "Yes. We integrate portals with CRM software, ERP systems, payment gateways, accounting platforms, helpdesk software, cloud storage, email services, identity providers, and third-party APIs to streamline business operations and improve the customer experience."
    },

    {
      q: "Can customers securely upload and download documents?",

      a: "Yes. Our portals include secure document management features such as file uploads, downloads, version control, access permissions, encrypted storage, document sharing, and approval workflows while maintaining appropriate security controls."
    },

    {
      q: "How do you secure customer portal applications?",

      a: "Security is built into every portal using role-based access control (RBAC), multi-factor authentication (MFA), secure authentication, HTTPS encryption, audit logs, secure APIs, session management, and industry-standard secure development practices to help protect sensitive customer and business data."
    },

    {
      q: "Can the portal be customized as our business grows?",

      a: "Absolutely. Our client and customer portals are designed to scale with your business. New modules, workflows, integrations, user roles, reporting capabilities, dashboards, and business features can be added as your operational requirements evolve."
    },

    {
      q: "Which technologies do you use for portal development?",

      a: "We build portal applications using modern technologies including React, Next.js, Node.js, Python, TypeScript, PostgreSQL, MySQL, REST APIs, GraphQL, Docker, AWS, Microsoft Azure, and Google Cloud to deliver secure, scalable, and high-performance portal solutions."
    },

    {
      q: "Do you provide maintenance and support after deployment?",

      a: "Yes. We provide ongoing portal maintenance, cloud monitoring, security updates, bug fixes, feature enhancements, performance optimization, infrastructure support, and technical assistance to ensure your portal continues to perform reliably as your business grows."
    }

  ]
}
};

export default function CustomerPortalDevelopment() {
  return (
    <>
      <SEO 
        title={metadata.title}
        description={metadata.description}
        keywords={metadata.keywords.join(', ')}
      />
      <ServiceTemplate 
        data={customerPortalDevelopmentData} 
      />
    </>
  );
}
