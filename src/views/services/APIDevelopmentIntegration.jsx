import React from 'react';
import SEO from '../../components/SEO';
import ServiceTemplate from './ServiceTemplate';
import {
  Code2,
  Plug,
  Server,
  Lock,
  Globe,
  Smartphone,
  Cpu,
  Monitor,
  HeartPulse,
  Landmark,
  ShoppingCart,
  Truck,
  ShieldCheck,
  Zap,
  BookOpen,
  Activity
} from "lucide-react";

export const metadata = {
  title:
    "API Development & Integration Services | Custom APIs | SyncTechn",

  description:
    "SyncTechn provides custom API development and integration services. We build secure, scalable RESTful and GraphQL APIs that allow your applications to communicate effortlessly and securely.",

  keywords: [
    "api development",
    "api integration services",
    "custom api development",
    "rest api development",
    "graphql api services",
    "api integration company",
    "third party api integration",
    "backend api development",
    "microservices architecture",
    "api security",
    "api consulting",
    "software connectivity",
    "payment gateway integration",
    "api management",
    "api design",
    "b2b api integration"
  ],

  alternates: {
    canonical:
      "https://synctechn.com/services/api-development-integration",
  },

  openGraph: {
    title:
      "API Development & Integration Services | SyncTechn",

    description:
      "Build a connected digital ecosystem. We develop robust, secure, and scalable APIs to power your web and mobile applications.",

    url:
      "https://synctechn.com/services/api-development-integration",

    siteName: "SyncTechn",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/images/services/api-development-og.webp",
        width: 1200,
        height: 630,
        alt: "API Development Services"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",

    title:
      "API Development & Integration | SyncTechn",

    description:
      "Secure RESTful and GraphQL API development services. Connect your software and scale your architecture.",

    images: [
      "/images/services/api-development-og.webp"
    ]
  },

  robots: {
    index: true,
    follow: true,
  },

  metadataBase: new URL("https://synctechn.com"),
};

export const apiDevelopmentData = {
  overviewImage: "https://res.cloudinary.com/wowukaao/image/upload/v1783865630/AI_Solutions_3_d3m38m.jpg",

hero: {
  title: "API Development & Integration",

  subtitle:
    "Fuel your digital transformation with high-performance APIs. SyncTechn develops custom RESTful and GraphQL APIs that serve as the backbone of your software, enabling seamless data exchange, third-party integrations, and scalable microservices architectures.",

  bgImage:
    "https://res.cloudinary.com/wowukaao/video/upload/v1783796944/CRM_SERVICE_fqe94n.mp4",

  logos: [
    "Node.js",
    "Python",
    "GraphQL",
    "REST",
    "Swagger",
    "AWS API Gateway",
    "PostgreSQL",
    "Redis"
  ]
},

metrics: [

  {
    value: "Scalable",
    title: "Microservices",

    subtitle:
      "Decouple your monolithic applications into scalable, independent microservices powered by robust APIs."
  },

  {
    value: "Secure",
    title: "Data Exchange",

    subtitle:
      "Protect your data with military-grade encryption, JWT authentication, OAuth2, and rate-limiting."
  },

  {
    value: "Rapid",
    title: "Integration",

    subtitle:
      "Connect seamlessly with popular third-party services like Stripe, Twilio, Salesforce, and Google Maps."
  },

  {
    value: "Documented",
    title: "Developer Ready",

    subtitle:
      "Comprehensive Swagger/OpenAPI documentation ensures your external partners can integrate effortlessly."
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
  title: "API Solutions for Modern Businesses",

  subtitle:
    "APIs are the building blocks of modern commerce. We develop industry-compliant API architectures that meet strict regulatory and performance standards.",

  list: [

    {
      icon: <Landmark className="w-5 h-5" />,
      title: "FinTech & Banking",

      desc:
        "Build secure open-banking APIs, payment processing integrations, and financial data aggregation endpoints compliant with PCI-DSS."
    },

    {
      icon: <HeartPulse className="w-5 h-5" />,
      title: "HealthTech",

      desc:
        "Develop interoperable healthcare APIs using FHIR and HL7 standards for secure patient data exchange and EHR integration."
    },

    {
      icon: <ShoppingCart className="w-5 h-5" />,
      title: "eCommerce",

      desc:
        "Integrate inventory management, dynamic pricing engines, shipping providers, and personalized recommendation APIs into your storefront."
    },

    {
      icon: <Truck className="w-5 h-5" />,
      title: "Logistics",

      desc:
        "Consume fleet tracking APIs, route optimization algorithms, and warehouse management systems to automate supply chain visibility."
    }

  ]
},

whyChooseUs: {
  title: "Why Choose SyncTechn for API Development?",

  subtitle:
    "We don't just write code; we design architectural contracts. Our APIs are built to be intuitive for developers to use, fiercely secure, and infinitely scalable.",

  cards: [

    {
      title: "Contract-First Design",

      desc:
        "We define the API schema and documentation (Swagger/OpenAPI) before writing code, allowing frontend teams and external partners to begin integration immediately."
    },

    {
      title: "High-Performance Architecture",

      desc:
        "We optimize database queries, implement Redis caching layers, and use asynchronous processing to ensure sub-millisecond API response times."
    },

    {
      title: "Future-Proof Versioning",

      desc:
        "We implement robust URL and header-based versioning strategies, ensuring you can upgrade your API capabilities without breaking existing client integrations."
    },

    {
      title: "Comprehensive Documentation",

      desc:
        "An API is only as good as its documentation. We generate interactive, developer-friendly documentation complete with code snippets and testing playgrounds."
    }

  ]
},
primaryCta: {
  title: "Connect Your Digital Ecosystem",

  subtitle:
    "Whether you are building a new mobile app, transitioning to microservices, or connecting to external platforms, our expert API developers are ready to build your backend infrastructure.",

  buttonText: "Discuss Your API Project",

  image:
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80"
},

secondaryCta: {
  title: "Build Faster.",

  highlight: "Scale Better.",

  subtitle:
    "Unlock the true potential of your software by exposing secure, high-performance APIs to your partners, developers, and internal teams.",

  buttonText: "Talk to an API Architect",

  image:
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",

  grid: [
    {
      title: "REST APIs",
      icon: <Globe />
    },
    {
      title: "GraphQL",
      icon: <Zap />
    },
    {
      title: "Secure Access",
      icon: <Lock />
    },
    {
      title: "Documentation",
      icon: <BookOpen />
    }
  ]
},

features: {
  title: "Enterprise-Grade API Features",

  subtitle:
    "We build APIs that developers love to use and security teams trust to deploy.",

  list: [

    {
      icon: <Code2 />,
      text: "RESTful & GraphQL Support"
    },

    {
      icon: <Plug />,
      text: "Seamless Third-Party Integrations"
    },

    {
      icon: <ShieldCheck />,
      text: "OAuth2 & JWT Authentication"
    },

    {
      icon: <Server />,
      text: "Microservices Architecture"
    },

    {
      icon: <Zap />,
      text: "Redis Caching for Low Latency"
    },

    {
      icon: <BookOpen />,
      text: "Swagger & OpenAPI Documentation"
    },

    {
      icon: <Activity />,
      text: "Real-Time Monitoring & Logging"
    },

    {
      icon: <Lock />,
      text: "Rate Limiting & DDoS Protection"
    }

  ]
},

process: {
  title: "Our API Development Process",

  subtitle:
    "From schema design to production deployment, we follow a rigorous methodology to ensure your APIs are reliable, secure, and performant.",

  steps: [

    {
      title: "1. Requirement & Architecture Planning",

      desc:
        "We analyze your business logic, data models, and anticipated traffic to determine if REST, GraphQL, or gRPC is the best architectural fit."
    },

    {
      title: "2. Contract Definition & Documentation",

      desc:
        "We design the API endpoints, payloads, and response codes using OpenAPI specifications, providing a clear contract before development begins."
    },

    {
      title: "3. Backend Development & Security",

      desc:
        "Our engineers build the endpoints, integrating business logic, database queries, authentication (OAuth/JWT), and input validation."
    },

    {
      title: "4. Automated Testing",

      desc:
        "We write comprehensive unit and integration tests to validate edge cases, ensure data integrity, and guarantee backwards compatibility."
    },

    {
      title: "5. Load Testing & Optimization",

      desc:
        "We subject the API to simulated high-traffic loads to identify bottlenecks, implementing caching (Redis) and indexing to optimize response times."
    },

    {
      title: "6. Gateway Deployment & Monitoring",

      desc:
        "We deploy the API through a secure Gateway, establishing usage quotas, setting up APM (Application Performance Monitoring), and providing support."
    }

  ]
},
faqs: {
  title: "Frequently Asked Questions",

  subtitle:
    "Find answers to common questions about our API development, integration, and security practices.",

  list: [

    {
      q: "Should I use REST or GraphQL for my API?",

      a:
        "It depends on your use case. REST is excellent for standard, resource-based operations and is widely understood. GraphQL is ideal when frontend clients need to query highly specific, nested data in a single request without over-fetching. We can help you determine the best architecture during our discovery phase."
    },

    {
      q: "How do you ensure the API is secure against attacks?",

      a:
        "We implement multiple layers of security. This includes HTTPS for data encryption in transit, JWT or OAuth2 for authentication, strict payload validation to prevent SQL injection, rate limiting to mitigate DDoS attacks, and CORS configuration to restrict browser access."
    },

    {
      q: "Can you fix or scale an API that another team built?",

      a:
        "Yes. We frequently conduct API audits to identify performance bottlenecks or security vulnerabilities in existing codebases. We can refactor the code, optimize database queries, implement caching, and set up API gateways to handle larger traffic loads."
    },

    {
      q: "How do you handle API updates without breaking existing apps?",

      a:
        "We implement strict API versioning (e.g., /v1/, /v2/ in the URL or via headers). This allows us to introduce breaking changes or new features in a new version while the older version remains active for existing clients, giving them time to migrate."
    }

  ]
}
};

export default function APIDevelopmentIntegration() {
  return (
    <>
      <SEO 
        title={metadata.title}
        description={metadata.description}
        keywords={metadata.keywords.join(', ')}
      />
      <ServiceTemplate 
        data={apiDevelopmentData} 
      />
    </>
  );
}
