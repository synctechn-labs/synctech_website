import React from 'react';
import SEO from '../../components/SEO';
import ServiceTemplate from './ServiceTemplate';
import {
  ShieldCheck,
  Scan,
  CheckCircle,
  Eye,
  Camera,
  Activity,
  AlertTriangle,
  Factory,
  PackageCheck,
  Settings,
  Cpu,
  Database,
  BarChart4,
  ServerCog,
  Building2,
  Landmark,
  ShoppingCart,
  Zap
} from "lucide-react";

export const metadata = {
  title:
    "AI-Assisted Quality Control Platforms | Computer Vision AI | SyncTechn",

  description:
    "SyncTechn develops AI-Assisted Quality Control Platforms. Automate visual inspections, detect manufacturing defects in real-time, and ensure product compliance using custom computer vision models.",

  keywords: [
    "ai quality control",
    "automated visual inspection",
    "computer vision quality assurance",
    "ai defect detection",
    "manufacturing ai solutions",
    "smart factory software",
    "machine vision software",
    "real time defect detection",
    "industrial ai",
    "quality assurance automation",
    "production line ai",
    "visual quality inspection"
  ],

  alternates: {
    canonical:
      "https://synctechn.com/services/ai-assisted-quality-control",
  },

  openGraph: {
    title:
      "AI-Assisted Quality Control Platforms | SyncTechn",

    description:
      "Catch defects before they ship. We build custom computer vision platforms that automate visual quality control on manufacturing and assembly lines.",

    url:
      "https://synctechn.com/services/ai-assisted-quality-control",

    siteName: "SyncTechn",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/images/services/ai-quality-control-og.webp",
        width: 1200,
        height: 630,
        alt: "AI-Assisted Quality Control"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Computer Vision Quality Control | SyncTechn",

    description:
      "Automate your manufacturing inspections with AI. Detect microscopic defects in real-time with machine vision.",

    images: [
      "/images/services/ai-quality-control-og.webp"
    ]
  },

  robots: {
    index: true,
    follow: true,
  },

  metadataBase: new URL("https://synctechn.com"),
};

export const aiQualityControlData = {
  overviewImage: "https://res.cloudinary.com/wowukaao/image/upload/v1783865629/digital_marketing_z4aivk.jpg",

hero: {
  title: "AI-Assisted Quality Control Platforms",

  subtitle:
    "Human inspectors get tired; AI doesn't. SyncTechn develops custom AI-Assisted Quality Control platforms that utilize high-speed Computer Vision to inspect products, detect microscopic defects, and ensure perfect compliance on your production lines in real time.",

  bgImage:
    "https://res.cloudinary.com/wowukaao/video/upload/v1783796945/DIGITAL_MARKETING_SERVICE_vkkpyq.mp4",

  logos: [
    "OpenCV",
    "TensorFlow",
    "PyTorch",
    "NVIDIA TensorRT",
    "Python",
    "C++",
    "AWS IoT",
    "Docker Edge"
  ]
},

metrics: [

  {
    value: "Sub-Second",
    title: "Inspection Speeds",

    subtitle:
      "Process high-resolution imagery and make pass/fail decisions in milliseconds without slowing the line."
  },

  {
    value: "99.9%",
    title: "Defect Catch Rate",

    subtitle:
      "Detect scratches, misalignments, and color variations that are invisible to the naked human eye."
  },

  {
    value: "Zero",
    title: "Inspector Fatigue",

    subtitle:
      "Maintain the exact same standard of quality check at hour 12 of a shift as at hour 1."
  },

  {
    value: "Real-Time",
    title: "Analytics",

    subtitle:
      "Track defect trends over time to identify upstream machinery issues before they cause massive waste."
  }

],
servicesSuite: {
  "title": "Data-Driven Marketing & Micro-SaaS Solutions",
  "subtitle": "Leverage intelligent systems, software analytics, and Micro-SaaS architectures to optimize operations, scale marketing efforts, and uncover new revenue streams.",
  "services": [
    {
      "id": "document-processing",
      "title": "Document Processing Automation",
      "desc": "Transform unstructured documents into actionable data using intelligent automation, significantly reducing manual data entry in your marketing and sales pipelines.",
      "features": [
        "Invoice Processing",
        "Form Extraction",
        "Data Standardization",
        "CRM Syncing",
        "Error Reduction",
        "Batch Processing"
      ],
      "image": "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=800&q=80"
    },
    {
      "id": "software-intelligence",
      "title": "Software Usage Intelligence Systems",
      "desc": "Gain deep insights into how users interact with your software to drive product-led growth and targeted marketing campaigns.",
      "features": [
        "User Tracking",
        "Feature Adoption",
        "Churn Prediction",
        "Behavioral Analytics",
        "Custom Dashboards",
        "A/B Testing"
      ],
      "image": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
    },
    {
      "id": "ai-quality",
      "title": "AI-Assisted Quality Control Platforms",
      "desc": "Ensure the highest standards for your digital content and marketing assets with AI systems that automatically check for quality, consistency, and compliance.",
      "features": [
        "Content Auditing",
        "Brand Compliance",
        "Visual Inspection",
        "Automated Proofreading",
        "Performance Metrics",
        "Continuous Monitoring"
      ],
      "image": "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80"
    },
    {
      "id": "micro-saas",
      "title": "Micro-SaaS Development for Businesses",
      "desc": "Create targeted, niche Micro-SaaS products to solve specific pain points for your audience, generating new recurring revenue channels.",
      "features": [
        "Rapid Prototyping",
        "Niche Focus",
        "Subscription Billing",
        "Minimal Overhead",
        "Scalable Tech Stack",
        "Market Validation"
      ],
      "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
    }
  ]
},
industries: {
  title: "AI Inspection Across Industries",

  subtitle:
    "Different products require different vision approaches. We tailor our models to the specific materials, lighting, and speeds of your industry.",

  list: [

    {
      icon: <Factory className="w-5 h-5" />,
      title: "Manufacturing & Automotive",

      desc:
        "Inspect machined parts for microscopic burrs, verify that all screws are placed, and check paint consistency on automotive panels."
    },

    {
      icon: <ShoppingCart className="w-5 h-5" />,
      title: "Food & Beverage",

      desc:
        "Ensure packaging integrity, verify expiration date legibility via OCR, and detect foreign contaminants on high-speed bottling lines."
    },

    {
      icon: <Cpu className="w-5 h-5" />,
      title: "Electronics & PCBs",

      desc:
        "Identify missing surface-mount components, improper soldering joints, and bent pins on Printed Circuit Boards."
    },

    {
      icon: <PackageCheck className="w-5 h-5" />,
      title: "Logistics & Fulfillment",

      desc:
        "Verify order accuracy before sealing the box, ensuring the correct items are packed and the shipping label is applied without wrinkles."
    }

  ]
},

whyChooseUs: {
  title: "Why Choose SyncTechn for Vision AI?",

  subtitle:
    "A model that works perfectly in a lab will fail on a factory floor if lighting changes or dust settles. We build robust, production-ready pipelines.",

  cards: [

    {
      title: "Edge Deployment Expertise",

      desc:
        "Cloud APIs are too slow for assembly lines. We deploy our AI models directly onto industrial edge computers (like NVIDIA Jetson) for millisecond latency."
    },

    {
      title: "Synthetic Data Generation",

      desc:
        "Don't have enough photos of defective products? We use Generative AI to create synthetic defect images, ensuring the model is fully trained before day one."
    },

    {
      title: "Hardware Agnostic",

      desc:
        "We are software experts. We can integrate our models with your existing GigE Vision cameras, PLCs, and lighting rigs without forcing expensive hardware upgrades."
    },

    {
      title: "Continuous Active Learning",

      desc:
        "When the AI flags an edge case, a human operator reviews it. The model continuously retrains itself on these human corrections, getting smarter every week."
    }

  ]
},
primaryCta: {
  title: "Catch Defects. Protect Your Brand.",

  subtitle:
    "A single defective batch can cost thousands in recalls and ruin customer trust. Let SyncTechn build an AI inspection system that guarantees perfection.",

  buttonText: "Schedule a Vision AI Assessment",

  image:
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80"
},

secondaryCta: {
  title: "Inspect Faster.",

  highlight: "Produce Better.",

  subtitle:
    "Replace manual, error-prone visual inspections with tireless AI models that measure, read, and verify every single product coming off your line.",

  buttonText: "Talk to a Computer Vision Architect",

  image:
    "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",

  grid: [
    {
      title: "Vision AI",
      icon: <Eye />
    },
    {
      title: "Edge Speed",
      icon: <Zap />
    },
    {
      title: "Defect Catch",
      icon: <AlertTriangle />
    },
    {
      title: "Analytics",
      icon: <BarChart4 />
    }
  ]
},

features: {
  title: "Quality Control Platform Features",

  subtitle:
    "We architect end-to-end industrial software designed for harsh environments, high uptime, and strict data governance.",

  list: [

    {
      icon: <Scan />,
      text: "Multi-Camera Stitching & Alignment"
    },

    {
      icon: <Cpu />,
      text: "TensorRT Edge Optimization"
    },

    {
      icon: <CheckCircle />,
      text: "Automated PLC Ejection Signaling"
    },

    {
      icon: <Settings />,
      text: "Dynamic Lighting Compensation"
    },

    {
      icon: <Database />,
      text: "Image Archiving & Data Lakes"
    },

    {
      icon: <ShieldCheck />,
      text: "Role-Based Factory Dashboards"
    },

    {
      icon: <ServerCog />,
      text: "Over-the-Air (OTA) Model Updates"
    },

    {
      icon: <Camera />,
      text: "GigE & GenICam Protocol Support"
    }

  ]
},

process: {
  title: "Our Vision AI Implementation Process",

  subtitle:
    "Building computer vision for manufacturing requires a highly collaborative approach between our AI engineers and your line operators.",

  steps: [

    {
      title: "1. Feasibility & Optical Assessment",

      desc:
        "We visit your facility (or review footage) to assess the line speed, evaluate current lighting, and determine the camera resolution required for the task."
    },

    {
      title: "2. Data Collection & Annotation",

      desc:
        "We collect thousands of images of both 'good' products and various defects, using our team to meticulously label bounding boxes and segmentation masks."
    },

    {
      title: "3. Model Training & Validation",

      desc:
        "We train state-of-the-art neural networks on the dataset, utilizing data augmentation techniques to ensure the model handles glare, rotation, and scale variations."
    },

    {
      title: "4. Edge Optimization",

      desc:
        "We compress and compile the trained model (using tools like TensorRT or ONNX) so it can run at high frame rates on localized edge computing hardware."
    },

    {
      title: "5. Integration & Shadow Mode",

      desc:
        "We install the software on the line in 'Shadow Mode'. It records what it *would* have flagged, allowing us to compare its decisions against human inspectors without stopping production."
    },

    {
      title: "6. Active Deployment & PLC Control",

      desc:
        "Once accuracy thresholds are met, the software is connected to the PLC to actively trigger rejection mechanisms (like air blowers or robotic arms) for defective products."
    }

  ]
},
faqs: {
  title: "Frequently Asked Questions",

  subtitle:
    "Find answers to common questions about computer vision, edge computing, and factory integration.",

  list: [

    {
      q: "Do we need an internet connection on the factory floor for this to work?",

      a:
        "No. The actual AI inference (the inspection decision) happens entirely locally on 'Edge' hardware installed next to the line. Internet is only required periodically to push new model updates or sync analytics to your central dashboard."
    },

    {
      q: "What if our product changes shape or color?",

      a:
        "The model will need to be updated, but you don't need to start from scratch. We build intuitive UI tools that allow your Quality Assurance managers to take photos of the new product, label it as 'Good', and the system will fine-tune itself rapidly."
    },

    {
      q: "Do you supply the cameras and lighting hardware?",

      a:
        "SyncTechn is a software engineering firm. While we design the software, we usually partner with your existing System Integrators or recommend trusted hardware vendors for the physical installation of cameras, lighting, and mounts."
    },

    {
      q: "How fast can the AI inspect a product?",

      a:
        "Depending on the complexity of the image and the edge hardware used, our optimized models can easily process 30 to 60 frames per second, inspecting multiple items per second without causing bottlenecks."
    }

  ]
}
};

export default function AIQualityControl() {
  return (
    <>
      <SEO 
        title={metadata.title}
        description={metadata.description}
        keywords={metadata.keywords.join(', ')}
      />
      <ServiceTemplate 
        data={aiQualityControlData} 
      />
    </>
  );
}
