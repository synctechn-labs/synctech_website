import React from 'react';
import SEO from '../../components/SEO';
import ServiceTemplate from './ServiceTemplate';
import MarketingTechnologies from './sections/MarketingTechnologies';


import {
  ArrowRight,
  CheckCircle,
  Search,
  TrendingUp,
  Megaphone,
  Mail,
  BarChart3,
  Users,
  Globe,
  Target,
  Award,
  ShieldCheck,
  Rocket,
  Headphones,
  Workflow,
  LineChart,
  Share2,
  HelpCircle,
  Sparkles,
  Zap,
  Play,
  RotateCcw,
  Clock,
  Gauge,
  Lock,
  HeartPulse,
  ShoppingBag,
  Truck,
  Landmark,
  Factory,
  GraduationCap
} from "lucide-react";
export const metadata = {
  title:
    "Digital Marketing Agency | SEO, PPC, Social Media & Performance Marketing Services | SyncTechn",

  description:
    "SyncTechn provides digital marketing services including SEO, PPC advertising, social media marketing, content marketing, email marketing, performance marketing, local SEO, conversion rate optimization, and lead generation strategies for startups and growing businesses.",

  keywords: [
    "digital marketing agency",
    "digital marketing services",
    "seo company",
    "search engine optimization services",
    "performance marketing agency",
    "social media marketing services",
    "content marketing services",
    "email marketing services",
    "google ads management",
    "ppc management services",
    "local seo services",
    "technical seo",
    "on page seo",
    "off page seo",
    "seo audit services",
    "lead generation services",
    "conversion rate optimization",
    "facebook ads agency",
    "instagram marketing",
    "linkedin marketing",
    "youtube marketing",
    "online marketing agency",
    "startup marketing agency",
    "branding and digital marketing",
    "marketing automation"
  ],

  alternates: {
    canonical:
      "https://synctechn.com/services/digital-marketing",
  },

  openGraph: {
    title:
      "Digital Marketing Services | SEO, PPC & Social Media | SyncTechn",

    description:
      "Grow your business with SEO, paid advertising, social media marketing, content marketing, email marketing, and performance marketing services from SyncTechn.",

    url:
      "https://synctechn.com/services/digital-marketing",

    siteName: "SyncTechn",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/images/services/digital-marketing-og.webp",
        width: 1200,
        height: 630,
        alt: "Digital Marketing Services"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Digital Marketing Agency | SyncTechn",

    description:
      "SEO, PPC, Social Media Marketing, Content Marketing, Lead Generation, Email Marketing, and Performance Marketing services.",

    images: [
      "/images/services/digital-marketing-og.webp"
    ]
  },

  robots: {
    index: true,
    follow: true,
  },

  metadataBase: new URL("https://synctechn.com"),
};

export const digitalMarketingData = {
  overviewImage: "https://res.cloudinary.com/wowukaao/image/upload/v1783865629/digital_marketing_z4aivk.jpg",

hero: {
  title: "Digital Marketing Services",

  subtitle:
    "SyncTechn helps startups, growing businesses, and enterprises build a strong digital presence through data-driven digital marketing strategies. Our digital marketing services include Search Engine Optimization (SEO), Pay-Per-Click (PPC) advertising, social media marketing, content marketing, email marketing, performance marketing, lead generation, conversion rate optimization, branding, and marketing automation. We create customized marketing strategies that increase online visibility, attract qualified leads, improve customer engagement, and support sustainable business growth.",

  bgImage:
    "https://res.cloudinary.com/wowukaao/video/upload/v1783796945/DIGITAL_MARKETING_SERVICE_vkkpyq.mp4",

  logos: [
    "Google Ads",
    "Google Analytics",
    "Meta",
    "LinkedIn",
    "HubSpot",
    "Semrush",
    "Ahrefs",
    "Mailchimp"
  ]
},

metrics: [

  {
    value: "100%",
    title: "Custom Marketing Strategy",

    subtitle:
      "Every campaign is designed around your business goals, target audience, and growth objectives."
  },

  {
    value: "Multi",
    title: "Channel Marketing",

    subtitle:
      "SEO, PPC, content marketing, social media, email marketing, and performance marketing."
  },

  {
    value: "Data",
    title: "Performance Insights",

    subtitle:
      "Campaign decisions supported by analytics, customer behavior, and measurable marketing data."
  },

  {
    value: "Growth",
    title: "Marketing Approach",

    subtitle:
      "Scalable digital marketing strategies focused on improving visibility, engagement, and lead generation."
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
  title: "Digital Marketing Solutions for Every Industry",

  subtitle:
    "Every industry requires a unique digital marketing strategy. SyncTechn develops customized marketing campaigns that align with your business objectives, target audience, and industry trends to improve online visibility, generate qualified leads, and support long-term business growth.",

  list: [

    {
      icon: <HeartPulse className="w-5 h-5" />,
      title: "Healthcare Digital Marketing",

      desc:
        "Build a stronger online presence for healthcare providers through healthcare SEO, local SEO, content marketing, patient engagement campaigns, reputation management, and healthcare-focused digital advertising."
    },

    {
      icon: <ShoppingBag className="w-5 h-5" />,
      title: "Retail & eCommerce Marketing",

      desc:
        "Increase online sales through SEO, Google Shopping campaigns, social media marketing, email automation, product promotion, conversion optimization, and customer retention strategies."
    },

    {
      icon: <Truck className="w-5 h-5" />,
      title: "Logistics & Transportation Marketing",

      desc:
        "Generate B2B leads and strengthen brand visibility with content marketing, LinkedIn marketing, SEO, PPC advertising, website optimization, and digital campaigns for logistics businesses."
    },

    {
      icon: <Landmark className="w-5 h-5" />,
      title: "Banking & Financial Marketing",

      desc:
        "Develop trust-driven marketing strategies for financial institutions through SEO, educational content, lead generation, paid advertising, compliance-focused campaigns, and brand awareness initiatives."
    },

    {
      icon: <Factory className="w-5 h-5" />,
      title: "Manufacturing Marketing",

      desc:
        "Help manufacturers reach distributors, partners, and customers using industrial SEO, technical content marketing, PPC campaigns, B2B lead generation, and digital brand positioning."
    },

    {
      icon: <GraduationCap className="w-5 h-5" />,
      title: "Education & eLearning Marketing",

      desc:
        "Increase student enrollments with education-focused SEO, social media campaigns, email marketing, content marketing, paid advertising, and lead nurturing strategies."
    }

  ]
},

whyChooseUs: {
  title: "Why Choose SyncTechn for Digital Marketing?",

  subtitle:
    "At SyncTechn, we combine data-driven strategies, creative content, modern marketing technologies, and continuous optimization to help businesses strengthen their online presence, reach the right audience, and achieve sustainable digital growth.",

  cards: [

    {
      title: "Customized Marketing Strategies",

      desc:
        "Every digital marketing campaign is tailored to your business goals, industry, competition, target audience, and growth objectives instead of using generic marketing templates."
    },

    {
      title: "Multi-Channel Marketing Expertise",

      desc:
        "We develop integrated marketing strategies across SEO, PPC, social media, content marketing, email marketing, local SEO, and performance marketing to maximize your online reach."
    },

    {
      title: "Data-Driven Decision Making",

      desc:
        "Marketing strategies are continuously refined using Google Analytics, Search Console, keyword research, user behavior analysis, campaign insights, and conversion tracking."
    },

    {
      title: "SEO & Content Focus",

      desc:
        "We create SEO-friendly content, optimize websites for search engines, improve technical SEO, and develop content strategies that help increase organic visibility and attract qualified traffic."
    },

    {
      title: "Transparent Reporting",

      desc:
        "Receive clear marketing reports with campaign performance, keyword rankings, traffic insights, lead generation metrics, and actionable recommendations to support informed business decisions."
    },

    {
      title: "Long-Term Growth Partnership",

      desc:
        "Beyond launching campaigns, we continuously optimize marketing strategies, improve campaign performance, update content, monitor trends, and provide ongoing digital marketing support."
    }

  ]
},
  primaryCta: {
  title: "Ready to Grow Your Business with Digital Marketing?",

  subtitle:
    "Whether you're launching a new business, building brand awareness, generating qualified leads, or improving online conversions, SyncTechn creates customized digital marketing strategies that align with your business goals and long-term growth plans.",

  buttonText: "Book a Free Marketing Consultation",

  image:
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80"
},

secondaryCta: {
  title: "Accelerate Your Online Growth",

  highlight: "with Data-Driven Digital Marketing",

  subtitle:
    "Increase your online visibility through SEO, Google Ads, social media marketing, content marketing, email automation, and performance marketing. We combine creativity, analytics, and technology to help businesses attract the right audience and build sustainable digital growth.",

  buttonText: "Talk to Our Marketing Experts",

  image:
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",

  grid: [
    {
      title: "SEO & Organic Growth",
      icon: <Search />
    },
    {
      title: "Performance Marketing",
      icon: <TrendingUp />
    },
    {
      title: "Marketing Analytics",
      icon: <BarChart3 />
    },
    {
      title: "Marketing Automation",
      icon: <Workflow />
    }
  ]
},

features: {
  title: "Digital Marketing Features for Business Growth",

  subtitle:
    "Our digital marketing services combine strategy, creativity, analytics, and technology to help businesses improve online visibility, generate quality leads, strengthen customer engagement, and achieve measurable marketing goals.",

  list: [

    {
      icon: <Search />,
      text: "Search Engine Optimization (SEO)"
    },

    {
      icon: <Megaphone />,
      text: "Google Ads & PPC Campaign Management"
    },

    {
      icon: <Share2 />,
      text: "Social Media Marketing & Management"
    },

    {
      icon: <Mail />,
      text: "Email Marketing & Marketing Automation"
    },

    {
      icon: <Target />,
      text: "Audience Targeting & Lead Generation"
    },

    {
      icon: <TrendingUp />,
      text: "Conversion Rate Optimization (CRO)"
    },

    {
      icon: <BarChart3 />,
      text: "Marketing Analytics & Performance Reporting"
    },

    {
      icon: <Globe />,
      text: "Local SEO & Global Digital Marketing"
    },

    {
      icon: <Sparkles />,
      text: "Content Marketing & Brand Storytelling"
    },

    {
      icon: <Workflow />,
      text: "Marketing Funnel Optimization"
    },

    {
      icon: <Play />,
      text: "Video Marketing & YouTube Promotion"
    },

    {
      icon: <ShieldCheck />,
      text: "Brand Reputation & Online Presence Management"
    }

  ]
},

process: {
  title: "Our Digital Marketing Process",

  subtitle:
    "We follow a structured digital marketing process that combines research, strategy, creative execution, campaign optimization, and continuous improvement to help businesses achieve sustainable online growth.",

  steps: [

    {
      title: "1. Business Discovery & Marketing Consultation",

      desc:
        "Understand your business objectives, target audience, competitors, products, services, and marketing goals to develop a customized digital marketing strategy."
    },

    {
      title: "2. Market Research & Strategy Planning",

      desc:
        "Perform keyword research, competitor analysis, audience research, SEO audits, and channel planning to identify growth opportunities and build a data-driven marketing roadmap."
    },

    {
      title: "3. Content & Creative Development",

      desc:
        "Develop SEO-optimized website content, blogs, landing pages, ad creatives, email campaigns, social media content, and marketing assets aligned with your brand."
    },

    {
      title: "4. Campaign Setup & Launch",

      desc:
        "Launch SEO initiatives, Google Ads, social media campaigns, email marketing workflows, content marketing strategies, and conversion-focused landing pages."
    },

    {
      title: "5. Performance Monitoring & Optimization",

      desc:
        "Monitor campaign performance using Google Analytics, Search Console, advertising platforms, user behavior insights, and conversion tracking to continuously improve results."
    },

    {
      title: "6. Lead Generation & Conversion Optimization",

      desc:
        "Improve lead quality, optimize customer journeys, enhance landing pages, refine audience targeting, and maximize conversion opportunities across all marketing channels."
    },

    {
      title: "7. Reporting & Business Insights",

      desc:
        "Provide transparent reports covering SEO performance, advertising metrics, traffic insights, keyword rankings, lead generation, campaign performance, and actionable recommendations."
    },

    {
      title: "8. Continuous Growth & Marketing Support",

      desc:
        "Continuously refine marketing strategies, optimize campaigns, publish new content, monitor market trends, and support long-term digital growth as your business evolves."
    }

  ]
},
  faqs: {
    title: "Frequently Asked Questions",
    subtitle: "Common questions about our digital marketing services.",
    list: [
      { q: "What digital marketing services do you offer?", a: "We provide SEO, social media marketing, content marketing, PPC advertising, email marketing, lead generation, and performance marketing services." },
      { q: "Can you help a startup grow online?", a: "Yes. We work with startups and growing businesses to build brand awareness, generate leads, and establish a strong digital presence." },
      { q: "How often will I receive reports?", a: "Reporting frequency can be customized, but most clients receive monthly performance reports and insights." },
      { q: "Do you create content for marketing campaigns?", a: "Yes. We help develop blogs, website content, social media posts, email campaigns, and other marketing materials." },
      { q: "Can you work with businesses in any industry?", a: "Yes. Our marketing strategies are tailored to different industries, business models, and target audiences." },
      { q: "Why choose your digital marketing services?", a: "We focus on personalized strategies, transparent communication, data-driven decisions, and long-term business growth." }
    ]
  }
};

export default function DigitalMarketing() {
  return (
    <>
      <SEO 
        title="Performance Digital Marketing & SEO Services | SyncTech"
        description="Scale your business with SyncTech's ROI-focused digital marketing campaigns. We deliver SEO optimization, social media marketing, PPC Google Ads, and copywriting."
        keywords="digital marketing, search engine optimization, SEO services, pay per click advertising, Google Ads agency, brand strategy"
      />
      <ServiceTemplate 
        data={digitalMarketingData} 
        techStackComponent={<MarketingTechnologies />} 
      />
    </>
  );
}
