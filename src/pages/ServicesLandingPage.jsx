import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  Globe,
  Smartphone,
  Database,
  Megaphone,
  Check,
  Zap,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Clock,
  Briefcase,
  ShieldCheck,
  Code,
  Sparkles,
} from "lucide-react";
import SEO from "../components/SEO";
import { Reveal } from "../components/Reveal";

const CALCULATOR_SERVICES = {
  web: {
    name: "Website & Web App Development",
    baseUsd: 1500,
    baseInr: 125000,
    baseDays: 20,
    description:
      "Responsive, high-converting websites and cloud web applications.",
    icon: Globe,
    features: [
      {
        id: "auth",
        name: "User Auth & Profiles",
        priceUsd: 600,
        priceInr: 50000,
        days: 8,
        description:
          "Secure login, signup, user profiles, and session management.",
      },
      {
        id: "ecommerce",
        name: "E-Commerce & Checkout",
        priceUsd: 1200,
        priceInr: 100000,
        days: 15,
        description:
          "Product catalog, shopping cart, checkout flow, and payment integration.",
      },
      {
        id: "admin",
        name: "CMS & Admin Dashboard",
        priceUsd: 900,
        priceInr: 75000,
        days: 12,
        description:
          "Control panel to manage contents, view statistics, and manage users.",
      },
      {
        id: "chat",
        name: "Real-time Messaging",
        priceUsd: 800,
        priceInr: 65000,
        days: 10,
        description: "Instant messaging, notification system, and web sockets.",
      },
      {
        id: "ai",
        name: "AI Copilot / Chatbot",
        priceUsd: 1400,
        priceInr: 115000,
        days: 18,
        description:
          "Custom OpenAI/Gemini integration for smart assistant support.",
      },
      {
        id: "seo",
        name: "Advanced SEO & Speed Optimization",
        priceUsd: 400,
        priceInr: 35000,
        days: 5,
        description:
          "Strict technical SEO audit, Schema markup, and speed caching.",
      },
    ],
  },
  mobile: {
    name: "Mobile App Development",
    baseUsd: 2000,
    baseInr: 165000,
    baseDays: 25,
    description:
      "Custom iOS and Android applications built with Flutter or React Native.",
    icon: Smartphone,
    features: [
      {
        id: "crossplatform",
        name: "Multiplatform support (iOS + Android)",
        priceUsd: 1500,
        priceInr: 125000,
        days: 15,
        description:
          "Optimized deployment on both Apple App Store and Google Play Store.",
      },
      {
        id: "auth",
        name: "Social Login & Accounts",
        priceUsd: 500,
        priceInr: 40000,
        days: 7,
        description: "Google, Apple, and Facebook single sign-on mechanisms.",
      },
      {
        id: "payments",
        name: "In-App Purchases & Gateway",
        priceUsd: 1000,
        priceInr: 80000,
        days: 12,
        description:
          "Apple/Google subscriptions, Stripe/Razorpay SDKs integration.",
      },
      {
        id: "push",
        name: "Smart Push Notifications",
        priceUsd: 400,
        priceInr: 35000,
        days: 5,
        description: "Custom segmented push alerts via Firebase or OneSignal.",
      },
      {
        id: "offline",
        name: "Offline Storage & Sync",
        priceUsd: 800,
        priceInr: 65000,
        days: 10,
        description: "Local Database storage with auto cloud synchronization.",
      },
      {
        id: "geolocation",
        name: "Maps & Live Geolocation Tracking",
        priceUsd: 900,
        priceInr: 75000,
        days: 12,
        description:
          "Google Maps/Mapbox integrations, geofencing, and live tracking.",
      },
    ],
  },
  crm: {
    name: "Enterprise CRM Portal",
    baseUsd: 2500,
    baseInr: 200000,
    baseDays: 30,
    description:
      "Custom business dashboard portals to manage workflows and customers.",
    icon: Database,
    features: [
      {
        id: "roles",
        name: "Granular Role-based Access",
        priceUsd: 800,
        priceInr: 65000,
        days: 10,
        description:
          "Admin, Manager, Agent, and Client roles with custom permissions.",
      },
      {
        id: "automation",
        name: "Workflow & Email Automation",
        priceUsd: 1200,
        priceInr: 100000,
        days: 15,
        description:
          "Auto lead assignment, drip email followups, and task scheduling.",
      },
      {
        id: "integrations",
        name: "ERP & Multi-API Sync",
        priceUsd: 1000,
        priceInr: 80000,
        days: 12,
        description:
          "Integrations with Salesforce, QuickBooks, SAP, or other ERP systems.",
      },
      {
        id: "analytics",
        name: "BI Reports & Excel Exports",
        priceUsd: 700,
        priceInr: 60000,
        days: 8,
        description:
          "Visual dashboards, charts, financial summaries, and data exports.",
      },
      {
        id: "invoicing",
        name: "Invoicing & Billing Portal",
        priceUsd: 800,
        priceInr: 65000,
        days: 10,
        description:
          "Auto invoice generator, recurring subscriptions, and payment log tracking.",
      },
    ],
  },
  marketing: {
    name: "Digital Marketing Campaign",
    baseUsd: 800,
    baseInr: 65000,
    baseDays: 15,
    description: "ROI-driven digital marketing, SEO, and paid ad management.",
    icon: Megaphone,
    features: [
      {
        id: "seo",
        name: "Full Authority SEO Campaign",
        priceUsd: 600,
        priceInr: 50000,
        days: 15,
        description:
          "Keyword mapping, on-page optimization, and high-quality backlink building.",
      },
      {
        id: "ppc",
        name: "Paid Ads Management (PPC)",
        priceUsd: 700,
        priceInr: 60000,
        days: 10,
        description:
          "Creative design and campaign management for Google & Meta Ads.",
      },
      {
        id: "smm",
        name: "Social Media Management",
        priceUsd: 500,
        priceInr: 40000,
        days: 12,
        description:
          "12 high-quality custom posts per month, copywriting, and engagement management.",
      },
      {
        id: "content",
        name: "Copywriting & Blogs Campaign",
        priceUsd: 400,
        priceInr: 35000,
        days: 8,
        description:
          "4 SEO-optimized high-authority articles per month written by experts.",
      },
      {
        id: "email",
        name: "Newsletter & Cold Email Flows",
        priceUsd: 500,
        priceInr: 40000,
        days: 10,
        description:
          "Lead capture forms setup, email design, automation, and delivery checks.",
      },
    ],
  },
};

const TIMELINES = [
  {
    id: "flexible",
    name: "Flexible (Phased release)",
    priceMult: 0.9,
    daysMult: 1.3,
  },
  { id: "standard", name: "Standard Delivery", priceMult: 1.0, daysMult: 1.0 },
  {
    id: "express",
    name: "Express (Accelerated)",
    priceMult: 1.25,
    daysMult: 0.75,
  },
];

const ServicesLandingPage = () => {
  // Calculator States
  const [selectedService, setSelectedService] = useState("web");
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [selectedTimeline, setSelectedTimeline] = useState("standard");

  // FAQ Accordion States
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // Workflow Active Step State
  const [activeWorkflowStep, setActiveWorkflowStep] = useState(0);

  // Toggle dynamic features
  const handleFeatureToggle = (featureId) => {
    setSelectedFeatures((prev) =>
      prev.includes(featureId)
        ? prev.filter((id) => id !== featureId)
        : [...prev, featureId],
    );
  };

  // Reset features when service type changes
  const handleServiceChange = (service) => {
    setSelectedService(service);
    setSelectedFeatures([]);
  };

  // Compute Cost & Duration Estimates
  const estimates = useMemo(() => {
    const serviceInfo = CALCULATOR_SERVICES[selectedService];
    let totalUsd = serviceInfo.baseUsd;
    let totalInr = serviceInfo.baseInr;
    let totalDays = serviceInfo.baseDays;

    selectedFeatures.forEach((featId) => {
      const feature = serviceInfo.features.find((f) => f.id === featId);
      if (feature) {
        totalUsd += feature.priceUsd;
        totalInr += feature.priceInr;
        totalDays += feature.days;
      }
    });

    const timelineInfo =
      TIMELINES.find((t) => t.id === selectedTimeline) || TIMELINES[1];

    totalUsd = Math.round(totalUsd * timelineInfo.priceMult);
    totalInr = Math.round(totalInr * timelineInfo.priceMult);
    totalDays = Math.round(totalDays * timelineInfo.daysMult);

    return {
      usdLow: Math.round(totalUsd * 0.9),
      usdHigh: Math.round(totalUsd * 1.15),
      inrLow: Math.round(totalInr * 0.9),
      inrHigh: Math.round(totalInr * 1.15),
      daysLow: Math.max(5, Math.round(totalDays * 0.9)),
      daysHigh: Math.round(totalDays * 1.15),
    };
  }, [selectedService, selectedFeatures, selectedTimeline]);

  // Construct query string for pre-filling contact page
  const quoteContactLink = useMemo(() => {
    const serviceName = CALCULATOR_SERVICES[selectedService].name;
    const chosenFeaturesText = selectedFeatures
      .map(
        (id) =>
          CALCULATOR_SERVICES[selectedService].features.find((f) => f.id === id)
            ?.name,
      )
      .filter(Boolean)
      .join(", ");

    const estimateText = `$${estimates.usdLow.toLocaleString()} - $${estimates.usdHigh.toLocaleString()} (₹${estimates.inrLow.toLocaleString()} - ₹${estimates.inrHigh.toLocaleString()})`;

    return `/contact?service=${encodeURIComponent(
      serviceName,
    )}&features=${encodeURIComponent(
      chosenFeaturesText || "Base Setup Only",
    )}&estimate=${encodeURIComponent(estimateText)}`;
  }, [selectedService, selectedFeatures, estimates]);

  const toggleFaq = (index) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  const workflowSteps = [
    {
      title: "1. Discover & Consult",
      headline: "Deconstruct Requirements & Scope Analysis",
      desc: "We analyze your business objectives, technical gaps, user personas, and competitor landscape. Our consultants refine features and set performance benchmarks to maximize product ROI from day one.",
      icon: Briefcase,
      points: [
        "In-depth consultation session",
        "Competitor technical analysis",
        "Detailed architecture feasibility check",
        "Interactive prototype planning",
      ],
    },
    {
      title: "2. Custom UI/UX Design",
      headline: "High-Fidelity Wireframes & User Experience",
      desc: "Our design team develops customized wireframes and beautiful, user-centered interactive prototypes. We establish clear design tokens, visual aesthetics, and verify typography before coding begins.",
      icon: Sparkles,
      points: [
        "User Persona & Flow Mapping",
        "Figma Mockups & High-Fidelity prototypes",
        "Mobile-first responsive layout planning",
        "Interactive animation and micro-effects testing",
      ],
    },
    {
      title: "3. Custom Development",
      headline: "Clean Architecture & Scalable Performance Coding",
      desc: "Experienced developers translate designs into production-ready software using TypeScript, React/Next.js, Node.js, and cloud-native services. We employ atomic component design and maintain optimized build bundles.",
      icon: Code,
      points: [
        "Type-safe structures with TypeScript",
        "Modular, highly reusable React code",
        "State management and API integration",
        "Continuous Integration and deployment configurations",
      ],
    },
    {
      title: "4. Quality Assurance (QA)",
      headline: "Comprehensive Automated & Manual Testing",
      desc: "Our QA engineers rigorously test the application on physical devices, verifying API contracts, performance benchmarks, responsiveness, cross-browser compatibility, and core security standards.",
      icon: ShieldCheck,
      points: [
        "Cross-device responsiveness validation",
        "Technical SEO & schema audits",
        "Performance optimization (Lighthouse 90+ score checks)",
        "Security validation and data encryption checks",
      ],
    },
    {
      title: "5. Launch & Support",
      headline: "Secure Production Deployments & SLA Support",
      desc: "We deploy the application securely on AWS, GCP, Vercel, or stores (App Store / Google Play). Following launch, we offer continuous monitoring, version updates, and security patch support.",
      icon: Clock,
      points: [
        "Production environment scaling configuration",
        "Google Analytics & Clarity search tracking config",
        "Complete Source Code ownership handover",
        "3 Months complimentary post-launch support",
      ],
    },
  ];

  const FAQS = [
    {
      q: "What software development services does SyncTech offer?",
      a: "SyncTech is a premium development agency offering custom website development, enterprise web application building, native and cross-platform mobile app development (iOS & Android), custom CRM portal architectures, and ROI-focused digital marketing (including SEO, PPC, and branding).",
    },
    {
      q: "Do you use generic templates or build custom solutions?",
      a: "We develop custom software, mobile apps, and websites from scratch using optimized modern technologies. We do not use pre-built generic templates. This ensures your site runs significantly faster, ranks better on search engines, and can scale dynamically as your operations expand.",
    },
    {
      q: "How does the interactive project quote calculator work?",
      a: "Our estimator uses actual industry benchmark metrics. By selecting your target platform, ticking desired features (like secure auth, checkout, or chatbot systems), and choosing a timeline priority, you receive an immediate, realistic cost range (in both USD and INR) and an estimate of the required development days.",
    },
    {
      q: "Do we get complete ownership of the source code?",
      a: "Yes. Once the project is completed and final milestones are cleared, we transfer complete intellectual property (IP) and source code ownership rights to you. There are no recurring hosting royalties or hidden fees.",
    },
    {
      q: "How does SyncTech ensure technical SEO friendliness?",
      a: "All web applications we create are built with technical SEO best practices from the start: semantic HTML elements, schema structures, dynamic metadata updating, quick server responses, highly optimized asset bundling, and 90+ Google Lighthouse mobile scores.",
    },
    {
      q: "What post-launch support do you provide?",
      a: "Every customized project includes 3 months of complimentary post-launch support. This covers bug resolutions, performance optimization checks, regular backups, and minor software alterations to guarantee a smooth release phase.",
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-sans">
      {/* SEO Tags */}
      <SEO
        title="Custom Software & Digital Services | SyncTech Software Solutions"
        description="Transform your business with SyncTech's professional software development, web app creation, mobile apps, CRM systems, and technical SEO marketing services."
        keywords="custom software development, web development company india, mobile app development, CRM solutions, CRM portal development, digital marketing services, SEO friendly website, SyncTech solutions"
      />

      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-200/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[800px] left-0 w-[400px] h-[400px] bg-cyan-200/20 rounded-full blur-[100px] pointer-events-none" />

      {/* HERO SECTION */}
      <section className="relative pt-24 pb-28 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Content */}
            <div className="lg:col-span-7 text-center lg:text-left">
              <Reveal>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold mb-6">
                  <Sparkles size={16} className="text-blue-500 animate-pulse" />
                  Tailored Professional Services
                </div>
              </Reveal>

              <Reveal delay={100}>
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-6">
                  Empowering Businesses with
                  <span className="block bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
                    High-Performance Software
                  </span>
                </h1>
              </Reveal>

              <Reveal delay={200}>
                <p className="text-slate-600 text-lg md:text-xl leading-relaxed mb-10">
                  We design and engineer bespoke web platforms, native mobile
                  applications, custom CRM systems, and result-oriented marketing
                  models. Clean code, technical SEO, and gorgeous UI responses come
                  standard.
                </p>
              </Reveal>

              <Reveal delay={300}>
                <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4">
                  <a
                    href="#estimator"
                    className="w-full sm:w-auto px-8 py-4 rounded-xl bg-blue-600 text-white font-bold shadow-lg hover:bg-blue-700 transition-all duration-300 hover:scale-[1.03] text-center"
                  >
                    Try Project Estimator
                  </a>
                  <Link
                    to="/contact"
                    className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white border border-slate-200 text-slate-700 font-bold hover:bg-slate-50 transition-all duration-300 hover:border-slate-300 text-center"
                  >
                    Schedule Free Audit
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Illustration */}
            <div className="lg:col-span-5 flex justify-center relative">
              <Reveal delay={400} className="relative w-full max-w-[450px] lg:max-w-none">
                {/* Glow behind */}
                <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-[60px] transform scale-90 pointer-events-none" />
                <div className="relative glass-card border border-slate-200/50 p-4 rounded-3xl shadow-2xl overflow-hidden hover:rotate-1 hover:scale-[1.02] transition-all duration-500">
                  <img
                    src="/services_hero.png"
                    alt="SyncTech Premium Services"
                    className="w-full h-auto rounded-2xl object-cover"
                  />
                  {/* Floating badges/stats overlay for premium feel */}
                  <div className="absolute bottom-6 left-6 right-6 bg-slate-900/80 backdrop-blur-md p-4 rounded-2xl border border-white/10 flex justify-between text-white shadow-xl animate-float">
                    <div className="text-center flex-1 border-r border-white/10">
                      <div className="text-lg font-black text-cyan-400">99%</div>
                      <div className="text-[10px] text-slate-400">Client satisfaction</div>
                    </div>
                    <div className="text-center flex-1 border-r border-white/10">
                      <div className="text-lg font-black text-cyan-400">20+</div>
                      <div className="text-[10px] text-slate-400">Custom builds</div>
                    </div>
                    <div className="text-center flex-1">
                      <div className="text-lg font-black text-cyan-400">24/7</div>
                      <div className="text-[10px] text-slate-400">Active SLA support</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE CALCULATOR (ESTIMATOR) */}
      <section
        id="estimator"
        className="py-20 bg-white border-y border-slate-100 relative"
      >
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Reveal>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
                Interactive Project Estimator
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-slate-500 text-base md:text-lg">
                Select a service vertical, choose your required technical
                features, and define the timeline constraint to receive an
                instant, accurate project quote.
              </p>
            </Reveal>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Left side: Inputs */}
            <div className="lg:col-span-7 bg-slate-50/50 border border-slate-100 rounded-3xl p-6 md:p-8">
              {/* Step 1: Select Service Category */}
              <div className="mb-8">
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
                  1. Select Service Category
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {Object.keys(CALCULATOR_SERVICES).map((serviceKey) => {
                    const svc = CALCULATOR_SERVICES[serviceKey];
                    const IconComponent = svc.icon;
                    const isSelected = selectedService === serviceKey;
                    return (
                      <button
                        key={serviceKey}
                        type="button"
                        onClick={() => handleServiceChange(serviceKey)}
                        className={`flex flex-col items-center justify-center p-4 rounded-2xl border text-center transition-all duration-300 ${
                          isSelected
                            ? "bg-blue-600 border-blue-600 text-white shadow-md shadow-blue-200"
                            : "bg-white border-slate-200 text-slate-700 hover:border-blue-400"
                        }`}
                      >
                        <IconComponent
                          size={24}
                          className={`mb-2 ${isSelected ? "text-white" : "text-blue-500"}`}
                        />

                        <span className="text-xs font-bold leading-tight">
                          {svc.name}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Choose Features */}
              <div className="mb-8">
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
                  2. Choose Specific Features / Modules
                </label>
                <div className="space-y-3">
                  {CALCULATOR_SERVICES[selectedService].features.map(
                    (feature) => {
                      const isChecked = selectedFeatures.includes(feature.id);
                      return (
                        <div
                          key={feature.id}
                          onClick={() => handleFeatureToggle(feature.id)}
                          className={`flex items-start gap-4 p-4 rounded-xl border cursor-pointer select-none transition-all duration-200 ${
                            isChecked
                              ? "bg-blue-50/60 border-blue-400 shadow-sm"
                              : "bg-white border-slate-200 hover:border-slate-300"
                          }`}
                        >
                          <div
                            className={`w-5 h-5 rounded flex items-center justify-center border mt-0.5 transition-all ${
                              isChecked
                                ? "bg-blue-600 border-blue-600 text-white"
                                : "border-slate-300 bg-white"
                            }`}
                          >
                            {isChecked && <Check size={12} strokeWidth={3} />}
                          </div>
                          <div className="flex-grow">
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-sm font-bold text-slate-800">
                                {feature.name}
                              </span>
                              <span className="text-xs font-bold text-blue-600">
                                +${feature.priceUsd} (₹
                                {feature.priceInr.toLocaleString()})
                              </span>
                            </div>
                            <p className="text-xs text-slate-500 leading-relaxed">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      );
                    },
                  )}
                </div>
              </div>

              {/* Step 3: Timeline Constraints */}
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
                  3. Delivery Timeline Requirement
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {TIMELINES.map((t) => {
                    const isSelected = selectedTimeline === t.id;
                    return (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => setSelectedTimeline(t.id)}
                        className={`px-3 py-3.5 rounded-xl border text-xs font-bold transition-all duration-300 ${
                          isSelected
                            ? "bg-slate-900 border-slate-900 text-white shadow-sm"
                            : "bg-white border-slate-200 text-slate-600 hover:border-slate-400"
                        }`}
                      >
                        {t.name}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right side: Outputs */}
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden border border-slate-800">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-xl pointer-events-none" />

                <h3 className="text-xl font-bold tracking-tight text-white mb-6 flex items-center gap-2">
                  <Zap size={20} className="text-cyan-400" />
                  Estimated Quote Summary
                </h3>

                <div className="border-b border-white/10 pb-6 mb-6">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
                    Service Vertical Chosen
                  </span>
                  <p className="text-base font-bold text-cyan-400">
                    {CALCULATOR_SERVICES[selectedService].name}
                  </p>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    {CALCULATOR_SERVICES[selectedService].description}
                  </p>
                </div>

                <div className="space-y-5 mb-8">
                  {/* Estimated Cost */}
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
                      Project Cost Range
                    </span>
                    <div className="text-3xl font-black tracking-tight text-white">
                      ${estimates.usdLow.toLocaleString()} - $
                      {estimates.usdHigh.toLocaleString()}
                    </div>
                    <div className="text-sm font-semibold text-slate-400 mt-1">
                      ₹{estimates.inrLow.toLocaleString()} - ₹
                      {estimates.inrHigh.toLocaleString()}
                    </div>
                  </div>

                  {/* Estimated Delivery */}
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
                      Estimated Duration
                    </span>
                    <div className="text-xl font-bold text-white flex items-center gap-2">
                      <Clock size={18} className="text-cyan-400" />
                      {estimates.daysLow} - {estimates.daysHigh} Working Days
                    </div>
                  </div>

                  {/* Features Included Count */}
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
                      Custom Modules Configured
                    </span>
                    <p className="text-sm font-medium text-white">
                      {selectedFeatures.length === 0
                        ? "Base System Core Architecture"
                        : `${selectedFeatures.length} Custom Features Added`}
                    </p>
                  </div>
                </div>

                {/* Free Value additions */}
                <div className="bg-white/5 rounded-2xl p-5 border border-white/5 mb-8">
                  <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-3">
                    SyncTech Standard Inclusions:
                  </h4>
                  <ul className="text-xs text-slate-300 space-y-2">
                    <li className="flex items-center gap-2">
                      <Check size={12} className="text-green-400" /> Complete
                      Source Code & IP Ownership
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={12} className="text-green-400" /> 3 Months
                      Complimentary Bug Support
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={12} className="text-green-400" />{" "}
                      Production-ready Security & SEO Setup
                    </li>
                  </ul>
                </div>

                {/* CTA Redirect to Form */}
                <Link
                  to={quoteContactLink}
                  className="block w-full py-4 text-center text-sm font-bold text-slate-900 bg-cyan-400 hover:bg-cyan-300 rounded-2xl shadow-lg transition-all duration-300 hover:scale-[1.02]"
                >
                  Send Proposal Request
                </Link>
                <span className="block text-center text-[10px] text-slate-500 mt-3 leading-relaxed">
                  *Calculations represent high-fidelity project scope estimates.
                  Final project agreements will be subject to custom scoping
                  workshops.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE SERVICES GRID */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <Reveal>
              <h4 className="text-blue-600 font-bold uppercase tracking-[0.2em] text-xs mb-3">
                Core Competencies
              </h4>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-5">
                Our Software Services
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-slate-600 text-lg">
                Discover our specialized development segments. Click to browse
                custom technologies, features, and details for each vertical.
              </p>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Service 1: Web Dev */}
            <Reveal delay={100}>
              <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8 hover:shadow-xl hover:border-blue-200 transition-all group flex flex-col justify-between h-full">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <Globe size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    Website & Web App Development
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    We deliver customized responsive websites, headless
                    e-commerce stores, custom CMS platforms, and scalable cloud
                    SaaS portals. Built clean with SEO-friendly semantics and
                    rapid response structures.
                  </p>
                  <ul className="grid grid-cols-2 gap-y-2 gap-x-4 mb-8 text-xs font-medium text-slate-500">
                    <li className="flex items-center gap-2">
                      <Check size={14} className="text-green-500" /> React &
                      Next.js Setup
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={14} className="text-green-500" /> E-commerce
                      Integrations
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={14} className="text-green-500" /> RESTful /
                      GraphQL APIs
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={14} className="text-green-500" /> Cloud
                      Server Hosting
                    </li>
                  </ul>
                </div>
                <Link
                  to="/services/web-development"
                  className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 group/link"
                >
                  Explore Web Solutions
                  <ArrowRight
                    size={16}
                    className="group-hover/link:translate-x-1.5 transition-transform"
                  />
                </Link>
              </div>
            </Reveal>

            {/* Service 2: Mobile Dev */}
            <Reveal delay={200}>
              <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8 hover:shadow-xl hover:border-blue-200 transition-all group flex flex-col justify-between h-full">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <Smartphone size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    Mobile Application Development
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    High-performance native and cross-platform mobile apps for
                    Android and iOS devices. We employ Flutter and React Native
                    to assure rapid delivery times, native UX benchmarks, and
                    smooth transitions.
                  </p>
                  <ul className="grid grid-cols-2 gap-y-2 gap-x-4 mb-8 text-xs font-medium text-slate-500">
                    <li className="flex items-center gap-2">
                      <Check size={14} className="text-green-500" /> iOS &
                      Android Deployments
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={14} className="text-green-500" /> Flutter /
                      React Native
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={14} className="text-green-500" /> Interactive
                      UI Mockups
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={14} className="text-green-500" /> Post-launch
                      Store Ops
                    </li>
                  </ul>
                </div>
                <Link
                  to="/services/mobile-development"
                  className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 group/link"
                >
                  Explore Mobile Apps
                  <ArrowRight
                    size={16}
                    className="group-hover/link:translate-x-1.5 transition-transform"
                  />
                </Link>
              </div>
            </Reveal>

            {/* Service 3: CRM Portal Dev */}
            <Reveal delay={300}>
              <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8 hover:shadow-xl hover:border-blue-200 transition-all group flex flex-col justify-between h-full">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <Database size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    Custom CRM Portal Architectures
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    Ditch legacy spreadsheets. We architect robust custom CRM
                    and ERP software systems that align effortlessly with your
                    operations, automate lead assignment workflows, and track
                    pipelines.
                  </p>
                  <ul className="grid grid-cols-2 gap-y-2 gap-x-4 mb-8 text-xs font-medium text-slate-500">
                    <li className="flex items-center gap-2">
                      <Check size={14} className="text-green-500" /> Role-based
                      Security
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={14} className="text-green-500" /> Sales
                      Pipelines Sync
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={14} className="text-green-500" /> BI Custom
                      Chart Dashboards
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={14} className="text-green-500" /> Invoice
                      Automation
                    </li>
                  </ul>
                </div>
                <Link
                  to="/services/crm"
                  className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 group/link"
                >
                  Explore CRM Solutions
                  <ArrowRight
                    size={16}
                    className="group-hover/link:translate-x-1.5 transition-transform"
                  />
                </Link>
              </div>
            </Reveal>

            {/* Service 4: Digital Marketing */}
            <Reveal delay={400}>
              <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8 hover:shadow-xl hover:border-blue-200 transition-all group flex flex-col justify-between h-full">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <Megaphone size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    Result-Driven Digital Marketing
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    Our performance marketing targets concrete conversion
                    growth. From technical and off-page SEO audits, paid Google
                    and Meta ads management, to brand identity and copywriting
                    strategies.
                  </p>
                  <ul className="grid grid-cols-2 gap-y-2 gap-x-4 mb-8 text-xs font-medium text-slate-500">
                    <li className="flex items-center gap-2">
                      <Check size={14} className="text-green-500" /> Search
                      Engine Optimization
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={14} className="text-green-500" /> PPC
                      Campaign Auditing
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={14} className="text-green-500" /> Social
                      Engagement Ops
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={14} className="text-green-500" /> Analytical
                      KPI Tracking
                    </li>
                  </ul>
                </div>
                <Link
                  to="/services/digital-marketing"
                  className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 group/link"
                >
                  Explore Marketing Services
                  <ArrowRight
                    size={16}
                    className="group-hover/link:translate-x-1.5 transition-transform"
                  />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* COMPARISON ANGLE TABLE */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Reveal>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
                What Sets SyncTech Apart?
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-slate-500">
                Compare custom-developed engineering from SyncTech against
                freelance groups or generic website builders.
              </p>
            </Reveal>
          </div>

          <Reveal>
            <div className="overflow-x-auto rounded-3xl border border-slate-200/80 shadow-md">
              <table className="w-full text-left border-collapse bg-white">
                <thead>
                  <tr className="bg-slate-900 text-white text-xs font-bold uppercase tracking-wider">
                    <th className="p-5 md:p-6">Feature / Capability</th>
                    <th className="p-5 md:p-6 text-cyan-400">
                      SyncTech Solutions
                    </th>
                    <th className="p-5 md:p-6 text-slate-400">
                      Freelancers / Generic Builders
                    </th>
                  </tr>
                </thead>
                <tbody className="text-xs md:text-sm font-medium text-slate-700 divide-y divide-slate-100">
                  <tr>
                    <td className="p-5 md:p-6 font-bold text-slate-900">
                      Source Code Ownership
                    </td>
                    <td className="p-5 md:p-6 bg-blue-50/20 text-blue-700 flex items-center gap-2">
                      <Check size={16} className="text-green-500 shrink-0" />{" "}
                      Full IP & code ownership rights
                    </td>
                    <td className="p-5 md:p-6 text-slate-400">
                      Often hidden behind proprietary platform licenses
                    </td>
                  </tr>
                  <tr>
                    <td className="p-5 md:p-6 font-bold text-slate-900">
                      Performance & Speed
                    </td>
                    <td className="p-5 md:p-6 bg-blue-50/20 text-blue-700">
                      <div className="flex items-center gap-2">
                        <Check size={16} className="text-green-500 shrink-0" />{" "}
                        Lighthouse score 90+ standard
                      </div>
                    </td>
                    <td className="p-5 md:p-6 text-slate-400">
                      Average 40-60 scores due to excessive plugin bloat
                    </td>
                  </tr>
                  <tr>
                    <td className="p-5 md:p-6 font-bold text-slate-900">
                      Architecture Scaling
                    </td>
                    <td className="p-5 md:p-6 bg-blue-50/20 text-blue-700 flex items-center gap-2">
                      <Check size={16} className="text-green-500 shrink-0" />{" "}
                      Enterprise-ready modular structures
                    </td>
                    <td className="p-5 md:p-6 text-slate-400">
                      Difficult to scale or modify without rewriting
                    </td>
                  </tr>
                  <tr>
                    <td className="p-5 md:p-6 font-bold text-slate-900">
                      Technical SEO Standards
                    </td>
                    <td className="p-5 md:p-6 bg-blue-50/20 text-blue-700 flex items-center gap-2">
                      <Check size={16} className="text-green-500 shrink-0" />{" "}
                      Built-in custom schemas & semantic HTML
                    </td>
                    <td className="p-5 md:p-6 text-slate-400">
                      Basic setups that struggle with organic discovery
                    </td>
                  </tr>
                  <tr>
                    <td className="p-5 md:p-6 font-bold text-slate-900">
                      Client Service Level (SLA)
                    </td>
                    <td className="p-5 md:p-6 bg-blue-50/20 text-blue-700 flex items-center gap-2">
                      <Check size={16} className="text-green-500 shrink-0" /> 3
                      months dedicated bug support
                    </td>
                    <td className="p-5 md:p-6 text-slate-400">
                      Support fades rapidly post final payment
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* INTERACTIVE WORKFLOW STEPPER */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Reveal>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
                Our Agile Execution Process
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-slate-500">
                Click on the process phases below to understand how we drive
                projects from scoping to launch.
              </p>
            </Reveal>
          </div>

          {/* Stepper Tabs */}
          <div className="grid grid-cols-5 gap-2 md:gap-4 mb-8">
            {workflowSteps.map((step, idx) => {
              const isActive = activeWorkflowStep === idx;
              const Icon = step.icon;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveWorkflowStep(idx)}
                  className={`flex flex-col items-center p-3 md:p-5 rounded-2xl border text-center transition-all duration-300 ${
                    isActive
                      ? "bg-blue-600 border-blue-600 text-white shadow-lg"
                      : "bg-white border-slate-200 text-slate-500 hover:border-slate-300 hover:text-slate-700"
                  }`}
                >
                  <Icon
                    size={20}
                    className={`mb-2 ${isActive ? "text-cyan-300" : "text-blue-500"}`}
                  />
                  <span className="text-[10px] md:text-xs font-bold block truncate max-w-full">
                    {step.title.split(". ")[1]}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Stepper active panel details */}
          <div className="bg-white rounded-3xl border border-slate-200/80 shadow-md p-8 min-h-[300px] flex flex-col justify-between transition-all duration-300">
            <div>
              <div className="inline-block text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-4">
                Phase {activeWorkflowStep + 1}
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-2">
                {workflowSteps[activeWorkflowStep].headline}
              </h3>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
                {workflowSteps[activeWorkflowStep].desc}
              </p>

              <div className="border-t border-slate-100 pt-6">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                  Key Milestones In This Phase
                </h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {workflowSteps[activeWorkflowStep].points.map((pt, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2.5 text-slate-700 text-sm"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center mt-8 pt-6 border-t border-slate-100">
              <button
                type="button"
                onClick={() =>
                  setActiveWorkflowStep((prev) => Math.max(0, prev - 1))
                }
                disabled={activeWorkflowStep === 0}
                className="text-xs font-bold text-slate-400 hover:text-slate-600 disabled:opacity-30 disabled:cursor-not-allowed"
              >
                Previous Step
              </button>
              <button
                type="button"
                onClick={() =>
                  setActiveWorkflowStep((prev) =>
                    Math.min(workflowSteps.length - 1, prev + 1),
                  )
                }
                disabled={activeWorkflowStep === workflowSteps.length - 1}
                className="text-xs font-bold text-blue-600 hover:text-blue-700 disabled:opacity-30 disabled:cursor-not-allowed"
              >
                Next Step
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs SECTION */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Reveal>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
                Services FAQ
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-slate-500">
                Common questions regarding custom software development pricing,
                methodologies, and delivery.
              </p>
            </Reveal>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-slate-50/50 border border-slate-200/80 rounded-2xl overflow-hidden transition-all duration-300"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex justify-between items-center p-6 text-left font-bold text-slate-800 hover:text-blue-600 transition-colors"
                  >
                    <span className="text-sm md:text-base pr-4">{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp size={18} className="text-blue-500 shrink-0" />
                    ) : (
                      <ChevronDown
                        size={18}
                        className="text-blue-500 shrink-0"
                      />
                    )}
                  </button>

                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      isOpen
                        ? "max-h-[300px] border-t border-slate-200"
                        : "max-h-0"
                    }`}
                  >
                    <p className="p-6 text-xs md:text-sm text-slate-600 leading-relaxed bg-white">
                      {faq.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA CONSULTATION BANNER */}
      <section className="py-24 bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-800 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-400/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-900/40 rounded-full blur-[80px] pointer-events-none" />

        <div className="container mx-auto px-6 text-center max-w-4xl relative z-10">
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
              Launch Your Next Digital Breakthrough
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
              Consult with our engineering team to design custom, performant
              systems that scale, optimize operations, and generate higher
              conversions.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-blue-700 font-bold hover:bg-blue-50 shadow-lg hover:shadow-xl hover:scale-[1.03] transition-all duration-300 text-center"
              >
                Schedule Free Consultation
              </Link>
              <a
                href="#estimator"
                className="w-full sm:w-auto px-8 py-4 rounded-xl border border-white/30 text-white font-bold hover:bg-white/10 transition-all duration-300 text-center"
              >
                Estimate Custom Scope
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default ServicesLandingPage;
