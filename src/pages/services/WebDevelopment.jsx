import React, { useState } from "react";
import {
  ArrowRight,
  CheckCircle,

  // Services
  Globe,
  MonitorSmartphone,
  ShoppingCart,
  LayoutDashboard,
  Smartphone,
  Workflow,

  // Features
  Search,
  Gauge,
  ShieldCheck,
  Cloud,
  BarChart3,

  // Why Choose Us
  Award,
  Users,
  Rocket,
  Headphones,

  // Industries
  HeartPulse,
  ShoppingBag,
  Factory,
  Truck,
  Landmark,
  GraduationCap,
  Building2,
  Cpu,

  // Tech Stack
  Database,

  // Security
  Lock,
  Fingerprint,

  // Metrics

  // FAQ
  HelpCircle,
  Sparkles,
  Zap,
  Play,
  RotateCcw,
  Clock,
  Server,
} from "lucide-react";
import EnterpriseTechStack from "../home/sections/EnterpriseTechStack";
import { Link } from "react-router-dom";
import SEO from "../../components/SEO";

const webServices = [
  {
    icon: Globe,
    title: "Custom Website Development",
    desc: "Design and develop responsive, high-performing websites tailored to your business goals and brand identity.",
  },
  {
    icon: MonitorSmartphone,
    title: "Web Application Development",
    desc: "Build scalable web applications that automate workflows, improve efficiency, and support business growth.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Development",
    desc: "Create feature-rich online stores with seamless shopping experiences and secure payment integrations.",
  },
  {
    icon: LayoutDashboard,
    title: "CMS Development",
    desc: "Develop content management solutions that make publishing and managing content effortless.",
  },
  {
    icon: Smartphone,
    title: "Progressive Web Apps",
    desc: "Deliver app-like experiences through modern web technologies with offline capabilities.",
  },
  {
    icon: Workflow,
    title: "API Development & Integration",
    desc: "Connect applications, services, and business systems through scalable APIs.",
  },
];

const webFeatures = [
  {
    icon: MonitorSmartphone,
    title: "Responsive Design",
    desc: "Optimized experiences across desktops, tablets, and mobile devices.",
  },
  {
    icon: Search,
    title: "SEO-Friendly Architecture",
    desc: "Built with technical SEO best practices to improve visibility and rankings.",
  },
  {
    icon: Gauge,
    title: "High Performance",
    desc: "Fast loading speeds and optimized code for superior user experiences.",
  },
  {
    icon: Cloud,
    title: "Cloud Scalability",
    desc: "Scale applications effortlessly with cloud-native infrastructure.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    desc: "Protect applications and user data through industry-standard security practices.",
  },
  {
    icon: BarChart3,
    title: "Analytics Integration",
    desc: "Gain valuable business insights through advanced analytics and reporting.",
  },
];

const webBenefits = [
  "Increase online visibility and brand awareness",
  "Generate more qualified leads",
  "Improve customer engagement and retention",
  "Increase conversion rates and revenue",
  "Enhance user experience and satisfaction",
  "Support digital transformation initiatives",
  "Automate business processes and workflows",
  "Drive long-term business growth",
];
const whyChooseUs = [
  {
    icon: Award,
    title: "Proven Web Development Expertise",
    desc: "Our team has successfully delivered websites, portals, and enterprise applications across multiple industries.",
  },
  {
    icon: Users,
    title: "Dedicated Development Team",
    desc: "Work with experienced designers, developers, QA engineers, and project managers committed to your success.",
  },
  {
    icon: ShieldCheck,
    title: "Security-First Approach",
    desc: "We implement modern security standards and best practices throughout the development lifecycle.",
  },
  {
    icon: Rocket,
    title: "Faster Time-to-Market",
    desc: "Agile methodologies help us launch projects faster without compromising quality.",
  },
  {
    icon: Workflow,
    title: "Transparent Development Process",
    desc: "Regular updates, sprint reviews, and collaborative planning ensure project visibility.",
  },
  {
    icon: Headphones,
    title: "Ongoing Support",
    desc: "We provide continuous maintenance, updates, monitoring, and technical assistance.",
  },
];

const industries = [
  {
    icon: HeartPulse,
    title: "Healthcare",
    desc: "Patient portals, telemedicine solutions, appointment systems, and healthcare platforms.",
  },
  {
    icon: ShoppingBag,
    title: "Retail & E-Commerce",
    desc: "Online stores, inventory systems, loyalty programs, and digital commerce platforms.",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    desc: "Production management, inventory tracking, and workflow automation systems.",
  },
  {
    icon: Truck,
    title: "Logistics & Transportation",
    desc: "Fleet management, shipment tracking, and warehouse management solutions.",
  },
  {
    icon: Landmark,
    title: "Banking & Finance",
    desc: "Secure financial platforms, payment systems, and customer management solutions.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    desc: "Learning management systems, online training portals, and educational platforms.",
  },
  {
    icon: Building2,
    title: "Real Estate",
    desc: "Property management, lead generation, and real estate marketplace solutions.",
  },
  {
    icon: Cpu,
    title: "Technology & SaaS",
    desc: "Scalable SaaS platforms, dashboards, portals, and cloud-native applications.",
  },
];

const techStack = {
  frontend: ["React", "Next.js", "Angular", "Vue.js", "Tailwind CSS"],
  backend: ["Node.js", "Python", "Java", ".NET", "Express.js"],
  database: ["PostgreSQL", "MySQL", "MongoDB", "Firebase"],
  cloud: ["AWS", "Azure", "Google Cloud", "Vercel"],
};

const process = [
  {
    step: "01",
    title: "Discovery & Planning",
    desc: "Understand business goals, target audience, and technical requirements.",
  },
  {
    step: "02",
    title: "Research & Strategy",
    desc: "Define user journeys, architecture, and implementation roadmap.",
  },
  {
    step: "03",
    title: "UI/UX Design",
    desc: "Create wireframes, prototypes, and intuitive user experiences.",
  },
  {
    step: "04",
    title: "Development",
    desc: "Build scalable, secure, and high-performance web applications.",
  },
  {
    step: "05",
    title: "Testing & QA",
    desc: "Perform functional, security, performance, and usability testing.",
  },
  {
    step: "06",
    title: "Deployment",
    desc: "Launch your application with optimized infrastructure and monitoring.",
  },
  {
    step: "07",
    title: "Monitoring",
    desc: "Track performance, uptime, and user engagement metrics.",
  },
  {
    step: "08",
    title: "Continuous Improvement",
    desc: "Enhance your platform through updates, optimizations, and new features.",
  },
];
const stats = [
  {
    value: "100%",
    label: "Commitment to Quality",
  },
  {
    value: "Modern",
    label: "Technology Stack",
  },
  {
    value: "Agile",
    label: "Development Process",
  },
  {
    value: "Scalable",
    label: "Solutions Built",
  },
];
const securityFeatures = [
  {
    icon: Lock,
    title: "SSL & Data Encryption",
    desc: "Protect user data through industry-standard encryption and secure communication protocols.",
  },
  {
    icon: Fingerprint,
    title: "Secure Authentication",
    desc: "Role-based access controls, multi-factor authentication, and secure login systems.",
  },
  {
    icon: Database,
    title: "Data Protection",
    desc: "Reliable backup strategies, secure storage, and disaster recovery planning.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance Ready",
    desc: "Support for GDPR, HIPAA, SOC 2, PCI DSS, and other regulatory requirements.",
  },
];

const faqs = [
  {
    question: "How long does web development take?",
    answer:
      "Most business websites take 4–8 weeks while enterprise applications may require several months depending on complexity and integrations.",
  },
  {
    question: "Will my website be mobile responsive?",
    answer:
      "Yes. Every website and application we build is optimized for desktops, tablets, and smartphones.",
  },
  {
    question: "Do you build e-commerce websites?",
    answer:
      "Yes. We develop secure and scalable online stores with advanced commerce features.",
  },
  {
    question: "Will my website be scalable?",
    answer:
      "Yes. Our solutions are designed to support increasing traffic, users, and future business requirements.",
  },
  {
    question: "How secure are your web applications?",
    answer:
      "We follow security best practices including secure coding standards, encryption, authentication, and vulnerability testing.",
  },
  {
    question: "Do you offer cloud deployment?",
    answer:
      "Yes. We deploy applications on AWS, Azure, Google Cloud, and other cloud platforms.",
  },
];
export default function WebDevelopment() {
  const [activeTab, setActiveTab] = useState("lighthouse");

  // Lighthouse Simulator States
  const [lighthouseScore, setLighthouseScore] = useState(42);
  const [lighthouseStage, setLighthouseStage] = useState("idle");
  const [currentStepIdx, setCurrentStepIdx] = useState(-1);

  const stepsList = [
    { title: "Compress Assets & Enable Gzip", desc: "Minifies JS/CSS bundles and optimizes image payloads.", speedMultiplier: 12 },
    { title: "Configure Cloudflare Edge Cache", desc: "Reduces TTFB from 600ms to 40ms via global edge servers.", speedMultiplier: 18 },
    { title: "Implement React SSR & Hydration", desc: "Pre-renders HTML skeleton to accelerate Largest Contentful Paint (LCP).", speedMultiplier: 20 },
    { title: "Defer Third-Party Scripts", desc: "Delays tracking tags until core page elements interactive.", speedMultiplier: 10 }
  ];

  const runLighthouseOptimization = () => {
    if (lighthouseStage !== "idle") return;
    setLighthouseStage("optimizing");
    setCurrentStepIdx(0);
    
    let step = 0;
    const interval = setInterval(() => {
      setLighthouseScore(prev => prev + stepsList[step].speedMultiplier);
      step += 1;
      setCurrentStepIdx(step);
      if (step >= stepsList.length) {
        clearInterval(interval);
        setLighthouseStage("complete");
        setLighthouseScore(100);
      }
    }, 1000);
  };

  const resetLighthouse = () => {
    setLighthouseScore(42);
    setLighthouseStage("idle");
    setCurrentStepIdx(-1);
  };

  // Stack Configurator States
  const [selectedStack, setSelectedStack] = useState("frontend");

  const STACK_DATA = {
    frontend: [
      { name: "React / Next.js", desc: "Component architecture, dynamic SSR routing, and strict SEO indexing rules." },
      { name: "Tailwind CSS", desc: "Utility-first rapid UI styling with pre-compiled theme variables." },
      { name: "TypeScript", desc: "Complete compile-time type safety preventing runtime interface crashes." }
    ],
    backend: [
      { name: "Node.js (Express)", desc: "High-concurrency server handling thousands of dynamic requests." },
      { name: "Python (FastAPI)", desc: "Optimized async REST endpoints with automated OpenAPI schemas." },
      { name: "GraphQL (Apollo)", desc: "Flexible single-endpoint data fetching for complex client portals." }
    ],
    database: [
      { name: "PostgreSQL", desc: "Relational ACID-compliant transaction hub with indexing optimizations." },
      { name: "MongoDB", desc: "Document store for high-velocity catalogs and dynamic form objects." },
      { name: "Redis Cache", desc: "Ultra-fast in-memory session database minimizing primary DB loads." }
    ],
    cloud: [
      { name: "AWS (S3 & EC2)", desc: "Elastic scaling load balancers and secure cloud storage vaults." },
      { name: "Vercel / Netlify", desc: "Global edge CDN deployment with instant CI/CD push hooks." },
      { name: "Docker", desc: "Containerized environments guaranteeing local-to-production parity." }
    ]
  };

  return (
    <>
      <SEO
        title="Custom Website Development & Web Applications | SyncTech"
        description="SyncTech Software Solutions builds secure, high-performing websites and web applications tailored to your business operations. Technical SEO and mobile responsive designs standard."
        keywords="website development, custom web application development, e-commerce web development, React development agency, Next.js web application"
      />

      {/* ========================================================= */}
      {/* HERO SECTION */}
      {/* ========================================================= */}

      <section className="relative overflow-hidden pt-24 pb-28 lg:pt-32 lg:pb-36 bg-gradient-to-b from-blue-50 via-white to-white">
        {/* Background glow elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-80 h-80 rounded-full bg-blue-500/10 blur-[100px] animate-pulse" />
          <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-cyan-500/10 blur-[100px] animate-pulse" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-20">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Heading, Description, and Stats */}
            <div className="lg:col-span-7 text-center lg:text-left">
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-700">
                <Sparkles size={16} className="text-blue-500" />
                WEB DEVELOPMENT SERVICES
              </span>

              <h1 className="mt-6 text-4xl md:text-6xl font-black leading-[1.1] text-slate-900">
                Build Modern Websites &
                <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent pb-1">
                  Scalable Web Apps
                </span>
              </h1>

              <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-2xl">
                Create exceptional digital experiences with secure, scalable, and
                high-performing web solutions designed to improve customer
                engagement, streamline operations, and accelerate business growth.
              </p>

              <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-white font-semibold shadow-lg hover:bg-blue-700 hover:scale-[1.03] transition-all duration-300"
                >
                  Get Free Consultation
                  <ArrowRight size={18} />
                </a>
              </div>

              {/* STATS OVERLAY IN HERO */}
              <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="group text-center lg:text-left rounded-2xl border border-slate-100 bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-200"
                  >
                    <h3 className="text-2xl font-bold text-blue-600 transition-transform duration-300 group-hover:scale-105">
                      {stat.value}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium mt-1">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Illustration Mockup */}
            <div className="lg:col-span-5 flex justify-center relative">
              <div className="absolute inset-0 bg-blue-500/5 rounded-full blur-[80px] pointer-events-none" />
              <div className="relative glass-card border border-slate-200/50 p-3 rounded-3xl shadow-2xl hover:rotate-1 hover:scale-[1.02] transition-all duration-500 max-w-[420px] lg:max-w-none">
                <img
                  src="/web_development.png"
                  alt="SyncTech Web Development Solutions"
                  className="w-full h-auto rounded-2xl object-cover"
                />
                {/* Micro notification badge */}
                <div className="absolute -top-3 -right-3 bg-blue-650 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg border border-white flex items-center gap-1.5 animate-bounce">
                  <Gauge size={12} className="text-cyan-300" />
                  100/100 Speed Score
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* OVERVIEW */}
      {/* ========================================================= */}

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="max-w-4xl">
            <span className="text-blue-600 font-semibold uppercase tracking-wider">
              Overview
            </span>

            <h2 className="mt-4 text-4xl lg:text-5xl font-bold mb-8">
              Future-Ready Web Solutions for Modern Businesses
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Your website is often the first interaction customers have with
              your business. A professionally developed website not only creates
              a strong first impression but also drives engagement, builds
              trust, and supports business growth.
            </p>

            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              We specialize in building custom websites and enterprise-grade web
              applications that combine modern design, robust functionality, and
              scalable architecture.
            </p>

            <p className="text-lg text-slate-600 leading-relaxed">
              Whether you're launching a new digital platform, modernizing an
              existing website, or developing a complex web application, our
              team delivers solutions designed for long-term success.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* INTERACTIVE WEB DEVELOPMENT PREVIEW */}
      {/* ========================================================= */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-semibold uppercase tracking-wider">
              Interactive Preview
            </span>
            <h2 className="mt-4 text-4xl font-bold text-slate-900 tracking-tight">
              Test Our Core Web Standards
            </h2>
            <p className="mt-4 text-slate-600 text-lg">
              Simulate a real-time Google Lighthouse performance audit or examine our robust stack architecture layout below.
            </p>

            {/* Selector Tabs */}
            <div className="inline-flex p-1 bg-slate-200/80 backdrop-blur rounded-xl mt-8">
              <button
                type="button"
                onClick={() => setActiveTab("lighthouse")}
                className={`px-5 py-2.5 rounded-lg text-sm font-bold transition-all ${
                  activeTab === "lighthouse"
                    ? "bg-white text-blue-600 shadow"
                    : "text-slate-600 hover:text-slate-800"
                }`}
              >
                1. Lighthouse Speed Simulator
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("stack")}
                className={`px-5 py-2.5 rounded-lg text-sm font-bold transition-all ${
                  activeTab === "stack"
                    ? "bg-white text-blue-600 shadow"
                    : "text-slate-600 hover:text-slate-800"
                }`}
              >
                2. Tech Stack Configurator
              </button>
            </div>
          </div>

          {activeTab === "lighthouse" ? (
            <div className="bg-white rounded-3xl border border-slate-200/60 shadow-xl overflow-hidden p-6 md:p-8">
              <div className="grid lg:grid-cols-12 gap-8 items-center">
                {/* Score gauge Left */}
                <div className="lg:col-span-4 text-center">
                  <div className={`inline-flex flex-col items-center justify-center w-40 h-40 rounded-full border-8 bg-slate-50/50 shadow-inner transition-all duration-500 ${
                    lighthouseScore >= 90
                      ? "border-green-500 bg-green-55/10 text-green-600"
                      : lighthouseScore >= 70
                      ? "border-orange-400 bg-orange-55/10 text-orange-500"
                      : "border-red-500 bg-red-55/10 text-red-500"
                  }`}>
                    <span className="text-5xl font-black">{lighthouseScore}</span>
                    <span className="text-[10px] uppercase font-bold tracking-wider mt-1">Performance</span>
                  </div>

                  <div className="mt-6 flex flex-col gap-2.5 max-w-[200px] mx-auto">
                    <button
                      type="button"
                      onClick={runLighthouseOptimization}
                      disabled={lighthouseStage !== "idle"}
                      className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50"
                    >
                      <Zap size={14} className="text-cyan-300" />
                      {lighthouseStage === "idle" ? "Run Optimizations" : lighthouseStage === "optimizing" ? "Optimizing..." : "Successfully Optimized!"}
                    </button>

                    <button
                      type="button"
                      onClick={resetLighthouse}
                      disabled={lighthouseStage === "optimizing"}
                      className="w-full py-2.5 rounded-xl border border-slate-200 text-slate-600 text-xs font-bold hover:bg-slate-50 transition-all flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50"
                    >
                      <RotateCcw size={14} />
                      Reset Score
                    </button>
                  </div>
                </div>

                {/* Audit Steps Right */}
                <div className="lg:col-span-8 space-y-4">
                  <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wider mb-2">SyncTech Performance Steps:</h3>
                  {stepsList.map((step, idx) => {
                    const isExecuted = currentStepIdx >= idx;
                    const isActive = currentStepIdx === idx;
                    return (
                      <div
                        key={idx}
                        className={`p-4 rounded-2xl border transition-all duration-300 ${
                          isActive
                            ? "bg-blue-50/50 border-blue-400 shadow-sm"
                            : isExecuted
                            ? "bg-slate-50 border-slate-200 opacity-90"
                            : "bg-white border-slate-150 opacity-40"
                        }`}
                      >
                        <div className="flex items-start gap-3.5">
                          <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold border mt-0.5 transition-all ${
                            isExecuted
                              ? "bg-green-500 border-green-500 text-white"
                              : "border-slate-300 text-slate-400 bg-white"
                          }`}>
                            {isExecuted ? "✓" : idx + 1}
                          </div>
                          <div className="text-left">
                            <span className="text-sm font-bold text-slate-900 block flex items-center gap-1.5">
                              {step.title}
                              {isActive && <span className="text-[9px] bg-blue-100 text-blue-700 font-bold px-1.5 py-0.5 rounded uppercase tracking-wider animate-pulse">Running</span>}
                            </span>
                            <span className="text-xs text-slate-500 leading-relaxed block mt-1">{step.desc}</span>
                          </div>
                          {isExecuted && (
                            <span className="text-xs font-black text-green-600 ml-auto shrink-0">
                              +{step.speedMultiplier} Pts
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              {/* Lead Capture CTA at bottom of Lighthouse Simulator */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4">
                <p className="text-xs text-slate-500 text-center sm:text-left">
                  Ready to optimize your business platform to a perfect 100/100 Core Web Vitals score?
                </p>
                <Link
                  to={`/contact?service=Custom%20Web%20Development&source=Lighthouse%20Optimizer&optimizedScore=${lighthouseScore}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-750 px-6 py-3.5 text-white font-bold text-xs shadow-md transition-all hover:scale-[1.02] cursor-pointer"
                >
                  Get 100/100 Speed Score
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-3xl border border-slate-200/60 shadow-xl overflow-hidden p-6 md:p-8">
              <div className="grid lg:grid-cols-12 gap-8 items-start">
                {/* Select layers left */}
                <div className="lg:col-span-4 space-y-2">
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-4 text-left">Architecture Layers:</h3>
                  {["frontend", "backend", "database", "cloud"].map((layer) => (
                    <button
                      key={layer}
                      type="button"
                      onClick={() => setSelectedStack(layer)}
                      className={`w-full text-left p-4 rounded-xl border text-sm font-bold capitalize transition-all flex items-center justify-between group ${
                        selectedStack === layer
                          ? "bg-blue-600 border-blue-600 text-white shadow-md shadow-blue-200"
                          : "bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300"
                      }`}
                    >
                      <span className="flex items-center gap-2.5">
                        {layer === "frontend" && <MonitorSmartphone size={18} />}
                        {layer === "backend" && <Server size={18} />}
                        {layer === "database" && <Database size={18} />}
                        {layer === "cloud" && <Cloud size={18} />}
                        {layer === "frontend" ? "Client Side (UI/UX)" : layer === "backend" ? "Server Node (API)" : layer === "database" ? "Data Storage" : "Cloud Host"}
                      </span>
                      <ArrowRight size={16} className={`opacity-0 group-hover:opacity-100 transition-all ${selectedStack === layer ? "text-cyan-300 opacity-100" : "text-slate-400"}`} />
                    </button>
                  ))}
                </div>

                {/* Layer breakouts right */}
                <div className="lg:col-span-8 bg-slate-50 border border-slate-100 p-6 md:p-8 rounded-2xl text-left">
                  <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-slate-200">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
                      <Sparkles size={20} />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900 capitalize">
                        {selectedStack} Infrastructure
                      </h4>
                      <p className="text-xs text-slate-500">Optimized parameters we configure for enterprise scaling.</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {STACK_DATA[selectedStack].map((tech, index) => (
                      <div key={index} className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm flex items-start gap-3">
                        <CheckCircle size={16} className="text-green-500 shrink-0 mt-0.5" />
                        <div>
                          <span className="text-sm font-bold text-slate-900 block">{tech.name}</span>
                          <span className="text-xs text-slate-500 mt-1 block leading-relaxed">{tech.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Lead Capture CTA at bottom of Tech Stack Configurator */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4 text-left">
                <p className="text-xs text-slate-500 text-center sm:text-left">
                  Need a secure database architecture or multi-region cloud deployment?
                </p>
                <Link
                  to={`/contact?service=Custom%20Web%20Development&source=Tech%20Stack%20Configurator&stack=${selectedStack}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-750 px-6 py-3.5 text-white font-bold text-xs shadow-md transition-all hover:scale-[1.02] cursor-pointer"
                >
                  Build Custom Web Stack
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ========================================================= */}
      {/* SERVICES */}
      {/* ========================================================= */}

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-semibold uppercase tracking-wider">
              Services
            </span>

            <h2 className="mt-4 text-4xl lg:text-5xl font-bold">
              Comprehensive Web Development Services
            </h2>

            <p className="mt-6 text-lg text-slate-600">
              End-to-end web development solutions tailored to your business
              objectives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webServices.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={index}
                  className="group bg-white rounded-3xl border border-slate-200 p-8 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:border-blue-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110">
                    <Icon className="text-blue-600" size={28} />
                  </div>

                  <h3 className="text-xl font-semibold mb-3">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* FEATURES */}
      {/* ========================================================= */}

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-semibold uppercase tracking-wider">
              Features
            </span>

            <h2 className="mt-4 text-4xl lg:text-5xl font-bold">
              Key Features & Capabilities
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webFeatures.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  key={index}
                  className="group rounded-3xl border border-slate-200 p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:border-blue-300"
                >
                  <Icon
                    className="text-blue-600 mb-5 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                    size={28}
                  />

                  <h3 className="text-xl font-semibold mb-3">
                    {feature.title}
                  </h3>

                  <p className="text-slate-600">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* BENEFITS */}
      {/* ========================================================= */}

      <section className="py-24 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-400 font-semibold uppercase tracking-wider">
              Benefits
            </span>

            <h2 className="mt-4 text-4xl lg:text-5xl font-bold">
              Business Benefits
            </h2>

            <p className="mt-6 text-slate-300 text-lg">
              Transform your digital presence into a powerful growth engine.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {webBenefits.map((benefit, index) => (
              <div
                key={index}
                className="group flex items-start gap-4 rounded-2xl border border-slate-800 p-6 transition-all duration-300 hover:border-blue-500 hover:bg-slate-900"
              >
                <CheckCircle
                  className="text-green-400 shrink-0 mt-1 group-hover:scale-110 transition-transform"
                  size={22}
                />

                <span className="text-slate-200">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-semibold uppercase tracking-wider">
              Why Choose Us
            </span>

            <h2 className="mt-4 text-4xl lg:text-5xl font-bold">
              Why Businesses Trust Our Web Development Team
            </h2>

            <p className="mt-6 text-lg text-slate-600">
              We combine innovation, technical expertise, and strategic thinking
              to deliver web solutions that create measurable business impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="group rounded-3xl border border-slate-200 p-8 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:border-blue-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-all">
                    <Icon className="text-blue-600" size={28} />
                  </div>

                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>

                  <p className="text-slate-600">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* INDUSTRIES */}
      {/* ========================================================= */}

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-semibold uppercase tracking-wider">
              Industries We Serve
            </span>

            <h2 className="mt-4 text-4xl lg:text-5xl font-bold">
              Industry-Focused Web Solutions
            </h2>

            <p className="mt-6 text-lg text-slate-600">
              Delivering tailored digital solutions across diverse industries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => {
              const Icon = industry.icon;

              return (
                <div
                  key={index}
                  className="group bg-white rounded-3xl p-8 border border-slate-200 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:border-blue-300"
                >
                  <Icon
                    className="text-blue-600 mb-5 group-hover:scale-110 transition-transform"
                    size={30}
                  />

                  <h3 className="font-semibold text-lg mb-3">
                    {industry.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {industry.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* TECHNOLOGY STACK */}
      {/* ========================================================= */}

      <EnterpriseTechStack />
      {/* ========================================================= */}
      {/* PROCESS */}
      {/* ========================================================= */}

      <section className="py-24 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-blue-400 font-semibold uppercase tracking-wider">
              Development Process
            </span>

            <h2 className="mt-4 text-4xl lg:text-5xl font-bold">
              Our Proven Development Methodology
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {process.map((item) => (
              <div
                key={item.step}
                className="rounded-3xl border border-slate-800 p-8 hover:border-blue-500 transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl font-bold text-blue-400">
                    {item.step}
                  </span>

                  <ArrowRight className="text-slate-600" />
                </div>

                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>

                <p className="text-slate-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-semibold uppercase tracking-wider">
              Results & Metrics
            </span>

            <h2 className="mt-4 text-4xl lg:text-5xl font-bold">
              Delivering Measurable Results
            </h2>

            <p className="mt-6 text-lg text-slate-600">
              We focus on outcomes that drive business growth and digital
              success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((item, index) => (
              <div
                key={index}
                className="group rounded-3xl border border-slate-200 p-8 text-center transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:border-blue-300 flex flex-col justify-center"
              >
                <h3 className="text-4xl font-bold mb-2 text-blue-600">
                  {item.value}
                </h3>

                <p className="font-semibold text-slate-700">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECURITY & COMPLIANCE */}
      {/* ========================================================= */}

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-semibold uppercase tracking-wider">
              Security & Compliance
            </span>

            <h2 className="mt-4 text-4xl lg:text-5xl font-bold">
              Security Built Into Every Project
            </h2>

            <p className="mt-6 text-lg text-slate-600">
              We follow enterprise-grade security practices to protect your
              systems, users, and business data.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {securityFeatures.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="group bg-white rounded-3xl border border-slate-200 p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:border-blue-300"
                >
                  <Icon
                    className="text-blue-600 mb-5 transition-transform duration-500 group-hover:scale-110"
                    size={30}
                  />

                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>

                  <p className="text-slate-600">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* FAQ SECTION */}
      {/* ========================================================= */}

      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold uppercase tracking-wider">
              FAQs
            </span>

            <h2 className="mt-4 text-4xl lg:text-5xl font-bold">
              Frequently Asked Questions
            </h2>

            <p className="mt-6 text-lg text-slate-600">
              Answers to common questions about our web development services.
            </p>
          </div>

          <div className="space-y-5">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group border border-slate-200 rounded-2xl p-6 transition-all duration-300 hover:border-blue-300"
              >
                <summary className="flex cursor-pointer items-center justify-between list-none text-lg font-semibold">
                  {faq.question}

                  <HelpCircle
                    size={22}
                    className="text-blue-600 transition-transform group-open:rotate-180"
                  />
                </summary>

                <p className="mt-4 text-slate-600 leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* FINAL CTA */}
      {/* ========================================================= */}

      <section className="py-24 bg-slate-950 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-blue-400 font-semibold uppercase tracking-wider">
            Get Started
          </span>

          <h2 className="mt-4 text-4xl lg:text-6xl font-bold">
            Ready to Build Your Next Web Project?
          </h2>

          <p className="mt-8 text-lg text-slate-300 leading-relaxed">
            Whether you need a business website, enterprise portal, SaaS
            platform, or custom web application, our team is ready to help you
            create digital experiences that drive results.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <a
              href="/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-white font-semibold transition-all duration-300 hover:bg-blue-700 hover:scale-105"
            >
              Book a Free Consultation
              <ArrowRight size={18} />
            </a>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-green-400" />
              Free Project Consultation
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-green-400" />
              Dedicated Development Team
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-green-400" />
              Ongoing Support & Maintenance
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
