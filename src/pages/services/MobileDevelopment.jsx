import React, { useState } from "react";
import {
  ArrowRight,
  Smartphone,
  Layers,
  ShieldCheck,
  Zap,
  Bell,
  Cloud,
  BarChart3,
  Globe,
  CheckCircle,
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
  Sparkles,
  RotateCcw,
} from "lucide-react";
import EnterpriseTechStack from "../home/sections/EnterpriseTechStack";
import { Link } from "react-router-dom";
import SEO from "../../components/SEO";
const services = [
  {
    icon: Smartphone,
    title: "Native iOS Development",
    desc: "High-performance iPhone and iPad applications built using Swift and Apple's latest frameworks.",
  },
  {
    icon: Smartphone,
    title: "Native Android Development",
    desc: "Scalable Android applications engineered with Kotlin for reliability and performance.",
  },
  {
    icon: Layers,
    title: "Cross-Platform Development",
    desc: "Build once and deploy across multiple platforms using Flutter and React Native.",
  },
  {
    icon: Cloud,
    title: "Enterprise Mobility Solutions",
    desc: "Secure mobile applications that streamline business operations and improve productivity.",
  },
  {
    icon: ShieldCheck,
    title: "App Modernization",
    desc: "Upgrade legacy applications with modern technologies, security, and performance enhancements.",
  },
  {
    icon: Zap,
    title: "API & System Integration",
    desc: "Seamlessly connect mobile applications with CRMs, ERPs, payment gateways, and cloud services.",
  },
];

const features = [
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    desc: "Data encryption, secure authentication, and industry-standard security practices.",
  },
  {
    icon: Zap,
    title: "High Performance",
    desc: "Fast loading times and optimized user experiences across all devices.",
  },
  {
    icon: Cloud,
    title: "Cloud Integration",
    desc: "Scalable cloud infrastructure with real-time synchronization.",
  },
  {
    icon: Bell,
    title: "Push Notifications",
    desc: "Increase engagement through personalized notifications and updates.",
  },
  {
    icon: Globe,
    title: "Cross-Device Support",
    desc: "Consistent experiences across smartphones, tablets, and wearables.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    desc: "Track user behavior and gain valuable business intelligence.",
  },
];

const benefits = [
  "Increase customer engagement and retention",
  "Improve brand visibility and customer loyalty",
  "Streamline business processes and workflows",
  "Generate new revenue opportunities",
  "Enhance customer experience",
  "Access real-time business insights",
  "Improve operational efficiency",
  "Stay ahead of competitors",
];
const whyChooseUs = [
  {
    icon: Award,
    title: "Proven Mobile Expertise",
    desc: "Our team has successfully delivered mobile applications across multiple industries, helping businesses improve customer engagement and operational efficiency.",
  },
  {
    icon: Users,
    title: "Dedicated Development Team",
    desc: "Work with experienced developers, designers, QA engineers, and project managers committed to your project's success.",
  },
  {
    icon: ShieldCheck,
    title: "Security-First Approach",
    desc: "We follow secure coding practices, encryption standards, and compliance requirements to protect your data.",
  },
  {
    icon: Rocket,
    title: "Faster Time-to-Market",
    desc: "Our agile methodology enables faster development cycles and quicker product launches.",
  },
  {
    icon: Workflow,
    title: "Agile Delivery Model",
    desc: "Transparent project management, regular sprint reviews, and continuous stakeholder collaboration.",
  },
  {
    icon: Headphones,
    title: "Long-Term Support",
    desc: "We provide ongoing maintenance, monitoring, updates, and technical support after launch.",
  },
];

const industries = [
  {
    icon: HeartPulse,
    title: "Healthcare",
    desc: "Patient portals, telemedicine apps, appointment booking systems, and healthcare management solutions.",
  },
  {
    icon: ShoppingBag,
    title: "Retail & E-Commerce",
    desc: "Mobile shopping experiences, loyalty programs, inventory tracking, and digital commerce solutions.",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    desc: "Production monitoring, workforce management, maintenance tracking, and operational visibility.",
  },
  {
    icon: Truck,
    title: "Logistics & Transportation",
    desc: "Fleet management, route optimization, delivery tracking, and warehouse operations.",
  },
  {
    icon: Landmark,
    title: "Banking & Finance",
    desc: "Secure mobile banking, payment solutions, digital wallets, and financial management platforms.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    desc: "Learning management systems, online courses, student engagement, and virtual classrooms.",
  },
  {
    icon: Building2,
    title: "Real Estate",
    desc: "Property management, virtual tours, lead generation, and client communication platforms.",
  },
  {
    icon: Plane,
    title: "Travel & Hospitality",
    desc: "Booking systems, customer engagement, travel planning, and loyalty applications.",
  },
];

const technologies = {
  frontend: [
    "SwiftUI",
    "UIKit",
    "Kotlin",
    "Jetpack Compose",
    "Flutter",
    "React Native",
  ],
  backend: ["Node.js", "Python", "Java", ".NET", "Express.js", "Django"],
  database: ["PostgreSQL", "MySQL", "MongoDB", "Firebase", "SQLite"],
  cloud: ["AWS", "Microsoft Azure", "Google Cloud", "Firebase Cloud"],
};

const process = [
  {
    step: "01",
    title: "Discovery & Planning",
    desc: "Understand business goals, user requirements, and project scope.",
  },
  {
    step: "02",
    title: "Research & Strategy",
    desc: "Define product roadmap, technology stack, and implementation strategy.",
  },
  {
    step: "03",
    title: "UI/UX Design",
    desc: "Create intuitive user experiences, wireframes, and interactive prototypes.",
  },
  {
    step: "04",
    title: "Development",
    desc: "Build scalable mobile applications using modern technologies and frameworks.",
  },
  {
    step: "05",
    title: "Testing & QA",
    desc: "Perform functional, performance, usability, and security testing.",
  },
  {
    step: "06",
    title: "Deployment",
    desc: "Launch applications on App Store and Google Play with optimized release processes.",
  },
  {
    step: "07",
    title: "Monitoring",
    desc: "Track application performance, user engagement, and operational health.",
  },
  {
    step: "08",
    title: "Continuous Improvement",
    desc: "Enhance functionality through updates, optimizations, and new features.",
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
    title: "Data Encryption",
    desc: "Protect sensitive information with industry-standard encryption protocols.",
  },
  {
    icon: Fingerprint,
    title: "Secure Authentication",
    desc: "Implement biometric authentication, multi-factor authentication, and role-based access controls.",
  },
  {
    icon: Database,
    title: "Secure Data Storage",
    desc: "Ensure secure storage and transmission of business-critical information.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance Ready",
    desc: "Support for GDPR, HIPAA, SOC 2, and industry-specific compliance requirements.",
  },
];

const faqs = [
  {
    question: "How long does it take to develop a mobile application?",
    answer:
      "Project timelines depend on complexity, features, and integrations. MVP applications typically take 8–12 weeks, while enterprise-grade applications may require 4–6 months.",
  },
  {
    question: "Do you develop apps for both iOS and Android?",
    answer:
      "Yes. We build native iOS apps, native Android apps, and cross-platform applications using Flutter and React Native.",
  },
  {
    question: "How much does mobile app development cost?",
    answer:
      "The cost depends on project scope, features, integrations, and complexity. We provide customized estimates after understanding your requirements.",
  },
  {
    question: "Can you redesign an existing application?",
    answer:
      "Absolutely. We modernize legacy applications by improving UI/UX, performance, security, and scalability.",
  },
  {
    question: "Do you provide post-launch support?",
    answer:
      "Yes. We offer maintenance, monitoring, updates, performance optimization, and technical support.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "We use Swift, Kotlin, Flutter, React Native, Node.js, Python, Firebase, AWS, Azure, and Google Cloud technologies.",
  },
  {
    question: "Can you integrate third-party services?",
    answer:
      "Yes. We integrate payment gateways, CRMs, ERPs, analytics platforms, cloud services, and external APIs.",
  },
  {
    question: "Will my application be scalable?",
    answer:
      "Yes. Every application is designed with scalability in mind to support future growth and increasing user demands.",
  },
  {
    question: "Do you sign NDAs?",
    answer:
      "Yes. We are happy to sign Non-Disclosure Agreements before discussing your project details.",
  },
  {
    question: "How do you ensure application security?",
    answer:
      "We implement encryption, secure authentication, vulnerability assessments, security testing, and compliance best practices.",
  },
];
export default function MobileDevelopment() {
  const [activeTab, setActiveTab] = useState("mockup");

  // Screen mockups state
  const [selectedMockupApp, setSelectedMockupApp] = useState("ecommerce");

  const APP_SCREENS = {
    ecommerce: {
      title: "SwiftCart Store",
      bg: "from-blue-600 to-indigo-800",
      content: (
        <div className="space-y-4">
          <div className="flex justify-between items-center text-white">
            <span className="font-black text-sm">SwiftCart</span>
            <span className="text-xs bg-white/20 px-2 py-0.5 rounded">🛒 3 items</span>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-xl p-3 text-white border border-white/10">
            <span className="text-[9px] block text-slate-350">Summer Sale Live</span>
            <span className="text-xs font-bold block mt-1">Get 40% Off Checkout</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-slate-800">
            <div className="bg-white rounded-lg p-2 shadow text-left">
              <div className="w-full h-12 bg-slate-100 rounded mb-1.5" />
              <span className="text-[10px] font-bold block truncate">Wireless Buds</span>
              <span className="text-[9px] font-black text-blue-600 block mt-0.5">$59.99</span>
            </div>
            <div className="bg-white rounded-lg p-2 shadow text-left">
              <div className="w-full h-12 bg-slate-100 rounded mb-1.5" />
              <span className="text-[10px] font-bold block truncate">Smart Watch Pro</span>
              <span className="text-[9px] font-black text-blue-600 block mt-0.5">$129.99</span>
            </div>
          </div>
        </div>
      )
    },
    healthcare: {
      title: "BioCare Portal",
      bg: "from-teal-600 to-emerald-700",
      content: (
        <div className="space-y-4">
          <div className="flex justify-between items-center text-white">
            <span className="font-black text-sm">BioCare Health</span>
            <span className="text-[10px] bg-emerald-500/30 text-emerald-300 px-2 py-0.5 rounded font-bold">● Active</span>
          </div>
          <div className="bg-white/15 backdrop-blur rounded-xl p-3 text-white border border-white/10 text-left">
            <span className="text-[9px] block text-slate-300">Heart Rate Pulse</span>
            <span className="text-lg font-black block mt-1 text-white">74 BPM <span className="text-xs font-normal">Normal</span></span>
          </div>
          <div className="bg-white rounded-xl p-3 text-slate-800 shadow text-left">
            <span className="text-[10px] font-bold block text-slate-405">Next Consultation</span>
            <span className="text-xs font-bold block mt-1 text-slate-800">Dr. Sarah Johnson</span>
            <span className="text-[9px] text-teal-600 font-bold block mt-0.5">Today at 4:30 PM</span>
          </div>
        </div>
      )
    },
    delivery: {
      title: "QuickRoute GPS",
      bg: "from-slate-900 to-slate-800",
      content: (
        <div className="space-y-4">
          <div className="flex justify-between items-center text-white">
            <span className="font-black text-sm">QuickRoute</span>
            <span className="text-[10px] bg-amber-500/20 text-amber-400 px-2 py-0.5 rounded font-bold">In Transit</span>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-xl p-3 text-white border border-white/10 text-left relative overflow-hidden">
            <span className="text-[9px] block text-slate-400">Estimated Delivery</span>
            <span className="text-lg font-black block mt-0.5">14 Mins Away</span>
            <div className="w-full h-1 bg-slate-700 rounded-full overflow-hidden mt-3">
              <div className="bg-amber-400 h-full rounded-full w-2/3" />
            </div>
          </div>
          <div className="bg-white rounded-xl p-3 text-slate-800 shadow text-left">
            <span className="text-[9px] text-slate-400 block font-bold">Courier Details</span>
            <span className="text-xs font-bold block mt-0.5">Alex Miller (Bike #12)</span>
            <span className="text-[9px] text-slate-400 block mt-0.5">Phone: +1 555-0192</span>
          </div>
        </div>
      )
    }
  };

  // Path Finder Diagnostic States
  const [platform, setPlatform] = useState("both");
  const [complexity, setComplexity] = useState("medium");
  const [budget, setBudget] = useState("moderate");

  const getRecommendation = () => {
    if (platform === "both" && complexity === "high") {
      return {
        tech: "Flutter / React Native Hybrid",
        reason: "Allows you to target both iOS and Android stores with high visual parity while maintaining a unified codebase to save development costs.",
        score: "Recommended Pathway"
      };
    }
    if (platform !== "both" || complexity === "high") {
      return {
        tech: "Native iOS (Swift) / Android (Kotlin)",
        reason: "Best path for low-latency graphics, direct physical device hardware calls, secure cryptography, or background operations.",
        score: "Enterprise Performance"
      };
    }
    return {
      tech: "React Native Cross-Platform",
      reason: "Most cost-efficient way to deploy clean UI, utilizing JavaScript components with near-native performance benchmark speeds.",
      score: "Rapid Startup MVP"
    };
  };

  const recommendation = getRecommendation();

  return (
    <div className="bg-white text-slate-900">
      <SEO
        title="Custom Mobile App Development (iOS & Android) | SyncTech"
        description="SyncTech Software Solutions designs and engineers high-performance custom mobile apps using React Native, Flutter, Kotlin, and Swift. Maximize user engagement today."
        keywords="mobile app development, iOS app development, Android app development, Flutter apps, React Native agency, custom mobile application"
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
                MOBILE DEVELOPMENT SERVICES
              </span>

              <h1 className="mt-6 text-4xl md:text-6xl font-black leading-[1.1] text-slate-900">
                Build Mobile Apps That
                <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent pb-1">
                  Drive Business Growth
                </span>
              </h1>

              <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-2xl">
                Transform your ideas into powerful mobile experiences with
                scalable, secure, and high-performance applications for iOS and
                Android. From startup MVPs to enterprise-grade solutions, we help
                businesses accelerate digital transformation through innovative
                mobile technology.
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
                  src="/mobile_development.png"
                  alt="SyncTech Mobile Application Solutions"
                  className="w-full h-auto rounded-2xl object-cover"
                />
                {/* Micro notification badge */}
                <div className="absolute -top-3 -right-3 bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg border border-white flex items-center gap-1.5 animate-bounce">
                  <Smartphone size={12} className="text-cyan-350" />
                  Store Optimization Ready
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* OVERVIEW SECTION */}
      {/* ========================================================= */}

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="max-w-4xl">
            <h2 className="text-4xl font-bold mb-8">
              Mobile App Development Overview
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Mobile applications have become an essential component of modern
              business strategies. They enable organizations to engage
              customers, streamline operations, improve accessibility, and
              create new digital revenue streams.
            </p>

            <p className="text-lg text-slate-600 leading-relaxed">
              Our mobile app development services help businesses build
              innovative applications that combine exceptional user experiences,
              robust security, and scalable architectures. Whether you're
              launching a new digital product or modernizing an existing
              application, we deliver solutions designed for long-term growth.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* INTERACTIVE MOBILE SOLUTIONS WIDGET */}
      {/* ========================================================= */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-semibold uppercase tracking-wider">
              Interactive Preview
            </span>
            <h2 className="mt-4 text-4xl font-bold text-slate-900 tracking-tight">
              Test Drive Our App Concepts
            </h2>
            <p className="mt-4 text-slate-600 text-lg">
              Interact with simulated device frames or consult our framework recommender below.
            </p>

            {/* Selector Tabs */}
            <div className="inline-flex p-1 bg-slate-200/80 backdrop-blur rounded-xl mt-8">
              <button
                type="button"
                onClick={() => setActiveTab("mockup")}
                className={`px-5 py-2.5 rounded-lg text-sm font-bold transition-all ${
                  activeTab === "mockup"
                    ? "bg-white text-blue-600 shadow"
                    : "text-slate-600 hover:text-slate-800"
                }`}
              >
                1. Smartphone Screen Changer
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("finder")}
                className={`px-5 py-2.5 rounded-lg text-sm font-bold transition-all ${
                  activeTab === "finder"
                    ? "bg-white text-blue-600 shadow"
                    : "text-slate-600 hover:text-slate-800"
                }`}
              >
                2. Framework Architecture Selector
              </button>
            </div>
          </div>

          {activeTab === "mockup" ? (
            <div className="bg-white rounded-3xl border border-slate-200/60 shadow-xl overflow-hidden p-6 md:p-8">
              <div className="grid lg:grid-cols-12 gap-8 items-center">
                {/* Selector Buttons Left */}
                <div className="lg:col-span-6 space-y-3 text-left">
                  <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wider mb-4">Choose App Profile:</h3>
                  {Object.keys(APP_SCREENS).map((key) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setSelectedMockupApp(key)}
                      className={`w-full text-left p-5 rounded-xl border text-sm font-bold capitalize transition-all flex items-center justify-between group ${
                        selectedMockupApp === key
                          ? "bg-blue-600 border-blue-600 text-white shadow-md shadow-blue-200"
                          : "bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300"
                      }`}
                    >
                      <span>{APP_SCREENS[key].title}</span>
                      <ArrowRight size={16} className={`opacity-0 group-hover:opacity-100 transition-all ${selectedMockupApp === key ? "text-cyan-300 opacity-100" : "text-slate-400"}`} />
                    </button>
                  ))}
                  <p className="text-xs text-slate-400 mt-4 leading-relaxed">
                    *Tapping the options changes the active mockup screen rendered in the device frame. We build standard-compliant native UI structures tailored for optimal experience.
                  </p>
                </div>

                {/* Smartphone Device Frame Right */}
                <div className="lg:col-span-6 flex justify-center">
                  <div className="relative w-[280px] h-[540px] bg-slate-900 rounded-[45px] p-3 shadow-2xl border-4 border-slate-800 flex flex-col items-center">
                    {/* Speaker/Camera notch */}
                    <div className="absolute top-4 w-32 h-6 bg-slate-950 rounded-full z-20 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-800 mr-2" />
                      <div className="w-10 h-1 bg-slate-800 rounded-full" />
                    </div>

                    {/* App Screen Canvas */}
                    <div className={`w-full h-full rounded-[38px] bg-gradient-to-b ${APP_SCREENS[selectedMockupApp].bg} p-5 pt-10 overflow-hidden relative transition-all duration-500`}>
                      <div className="absolute inset-0 bg-white/5 pointer-events-none" />
                      {APP_SCREENS[selectedMockupApp].content}
                    </div>
                  </div>
                </div>
              </div>
              {/* Lead Capture CTA at bottom of App Mockup screen */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4 text-left">
                <p className="text-xs text-slate-500 text-center sm:text-left">
                  Need a custom app developed for your brand with standard native guidelines?
                </p>
                <Link
                  to={`/contact?service=Custom%20Mobile%20App&source=Smartphone%20Mockup&appType=${selectedMockupApp}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-750 px-6 py-3.5 text-white font-bold text-xs shadow-md transition-all hover:scale-[1.02] cursor-pointer"
                >
                  Build My {APP_SCREENS[selectedMockupApp].title} App
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-3xl border border-slate-200/60 shadow-xl overflow-hidden p-6 md:p-8 text-left">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Selector Diagnostics */}
                <div>
                  <h3 className="text-xl font-bold text-slate-950 mb-6">Select App Requirements</h3>
                  
                  {/* Platform */}
                  <div className="mb-6">
                    <span className="block text-sm font-bold text-slate-700 mb-2">1. Operating Systems Needed:</span>
                    <div className="flex gap-2">
                      {[
                        { id: "both", label: "Both iOS + Android" },
                        { id: "ios", label: "iOS Only" },
                        { id: "android", label: "Android Only" }
                      ].map(item => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setPlatform(item.id)}
                          className={`px-4 py-2 text-xs font-bold rounded-lg border transition-all ${
                            platform === item.id
                              ? "bg-blue-600 border-blue-600 text-white shadow-sm"
                              : "bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300"
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Complexity */}
                  <div className="mb-6">
                    <span className="block text-sm font-bold text-slate-700 mb-2">2. Hardware / Cryptography Needs:</span>
                    <div className="flex gap-2">
                      {[
                        { id: "low", label: "Basic UI & API Sync" },
                        { id: "medium", label: "Push Notifications & GPS" },
                        { id: "high", label: "Direct Bluetooth / Low Latency" }
                      ].map(item => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setComplexity(item.id)}
                          className={`px-4 py-2 text-xs font-bold rounded-lg border transition-all ${
                            complexity === item.id
                              ? "bg-blue-600 border-blue-600 text-white shadow-sm"
                              : "bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300"
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Budget */}
                  <div>
                    <span className="block text-sm font-bold text-slate-700 mb-2">3. Pricing Constraints:</span>
                    <div className="flex gap-2">
                      {[
                        { id: "low", label: "Highly Cost-Conscious" },
                        { id: "moderate", label: "Moderate Budget" },
                        { id: "high", label: "Enterprise Scale" }
                      ].map(item => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setBudget(item.id)}
                          className={`px-4 py-2 text-xs font-bold rounded-lg border transition-all ${
                            budget === item.id
                              ? "bg-blue-600 border-blue-600 text-white shadow-sm"
                              : "bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-350"
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Recommendations */}
                <div className="bg-gradient-to-br from-slate-900 to-blue-950 p-6 md:p-8 rounded-2xl text-white border border-slate-800 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
                  
                  <span className="text-[10px] text-cyan-400 uppercase tracking-widest font-bold block mb-1">
                    {recommendation.score}
                  </span>
                  <h3 className="text-2xl font-black text-white mb-4">
                    {recommendation.tech}
                  </h3>
                  
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {recommendation.reason}
                  </p>

                  <div className="border-t border-white/10 pt-4 flex gap-4 text-xs font-semibold text-slate-405">
                    <span className="flex items-center gap-1"><CheckCircle size={14} className="text-green-500" /> Flutter Support</span>
                    <span className="flex items-center gap-1"><CheckCircle size={14} className="text-green-500" /> React Native Support</span>
                  </div>
                  <div className="mt-6 pt-4 border-t border-white/10">
                    <Link
                      to={`/contact?service=Custom%20Mobile%20App&source=Platform%20Diagnostic&recommendation=${encodeURIComponent(recommendation.tech)}`}
                      className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 hover:bg-cyan-300 px-6 py-3.5 text-slate-900 font-bold text-xs shadow-md transition-all hover:scale-[1.02] cursor-pointer"
                    >
                      Request {recommendation.tech} Proposal
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ========================================================= */}
      {/* SERVICES WE OFFER */}
      {/* ========================================================= */}

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Mobile App Development Services
            </h2>
            <p className="text-lg text-slate-600">
              End-to-end mobile application development services tailored to
              your business requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-3xl border border-slate-200 hover:shadow-xl transition"
                >
                  <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center mb-6">
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
      {/* KEY FEATURES */}
      {/* ========================================================= */}

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Key Features & Capabilities
            </h2>

            <p className="text-lg text-slate-600">
              Build secure, scalable, and future-ready mobile applications with
              advanced capabilities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  key={index}
                  className="border border-slate-200 rounded-3xl p-8 hover:shadow-lg transition"
                >
                  <Icon className="text-blue-600 mb-5" size={28} />

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
      {/* BUSINESS BENEFITS */}
      {/* ========================================================= */}

      <section className="py-24 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Business Benefits of Mobile Apps
            </h2>

            <p className="text-slate-300 text-lg">
              Unlock new opportunities for growth, customer engagement, and
              operational excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-4 rounded-2xl border border-slate-800 p-6"
              >
                <CheckCircle
                  className="text-green-400 shrink-0 mt-1"
                  size={22}
                />

                <span className="text-slate-200">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ========================================================= */}
      {/* WHY CHOOSE US */}
      {/* ========================================================= */}

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-blue-600 font-semibold uppercase tracking-wider">
              Why Choose Us
            </span>

            <h2 className="mt-4 text-4xl lg:text-5xl font-bold">
              Mobile Solutions Built for Long-Term Success
            </h2>

            <p className="mt-6 text-lg text-slate-600">
              We combine strategy, design, engineering, and innovation to
              deliver mobile applications that create measurable business value.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="rounded-3xl border border-slate-200 p-8 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center mb-6">
                    <Icon className="text-blue-600" size={28} />
                  </div>

                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>

                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* INDUSTRIES WE SERVE */}
      {/* ========================================================= */}

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-blue-600 font-semibold uppercase tracking-wider">
              Industries We Serve
            </span>

            <h2 className="mt-4 text-4xl lg:text-5xl font-bold">
              Mobile Solutions Across Industries
            </h2>

            <p className="mt-6 text-lg text-slate-600">
              We help organizations across industries accelerate digital
              transformation through innovative mobile applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => {
              const Icon = industry.icon;

              return (
                <div
                  key={index}
                  className="bg-white rounded-3xl p-8 border border-slate-200 hover:shadow-lg transition-all duration-300"
                >
                  <Icon className="text-blue-600 mb-5" size={30} />

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
      {/* DEVELOPMENT PROCESS */}
      {/* ========================================================= */}

      <section className="py-24 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <span className="text-blue-400 font-semibold uppercase tracking-wider">
              Development Process
            </span>

            <h2 className="mt-4 text-4xl lg:text-5xl font-bold">
              Our Mobile App Development Journey
            </h2>

            <p className="mt-6 text-lg text-slate-300">
              A proven process that ensures quality, transparency, and
              predictable delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {process.map((item) => (
              <div
                key={item.step}
                className="rounded-3xl border border-slate-800 p-8"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl font-bold text-blue-400">
                    {item.step}
                  </span>

                  <ArrowRight className="text-slate-600" />
                </div>

                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>

                <p className="text-slate-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ========================================================= */}
      {/* RESULTS & METRICS */}
      {/* ========================================================= */}

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-blue-600 font-semibold uppercase tracking-wider">
              Results & Metrics
            </span>

            <h2 className="mt-4 text-4xl lg:text-5xl font-bold">
              Delivering Measurable Business Outcomes
            </h2>

            <p className="mt-6 text-lg text-slate-600">
              Our success is measured by the impact we create for our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((item, index) => (
              <div
                key={index}
                className="rounded-3xl border border-slate-200 p-8 text-center hover:shadow-lg transition flex flex-col justify-center"
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
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-blue-600 font-semibold uppercase tracking-wider">
              Security & Compliance
            </span>

            <h2 className="mt-4 text-4xl lg:text-5xl font-bold">
              Built with Security at the Core
            </h2>

            <p className="mt-6 text-lg text-slate-600">
              Security is integrated into every stage of our mobile app
              development lifecycle.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {securityFeatures.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="bg-white rounded-3xl border border-slate-200 p-8"
                >
                  <Icon className="text-blue-600 mb-5" size={30} />

                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>

                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
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
              Answers to common questions about our mobile development services.
            </p>
          </div>

          <div className="space-y-5">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group border border-slate-200 rounded-2xl p-6"
              >
                <summary className="flex cursor-pointer items-center justify-between font-semibold text-lg list-none">
                  {faq.question}
                  <HelpCircle className="text-blue-600 group-open:rotate-180 transition-transform" />
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
            Ready to Build Your Mobile Application?
          </h2>

          <p className="mt-8 text-lg text-slate-300 leading-relaxed">
            Whether you're launching a startup MVP, building a customer-facing
            platform, or modernizing an enterprise application, our team can
            help bring your vision to life with scalable, secure, and
            high-performance mobile solutions.
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
    </div>
  );
}
