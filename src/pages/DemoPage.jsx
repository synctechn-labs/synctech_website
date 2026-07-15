import React, { useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Menu,
  X,
  Sparkles,
  Shield,
  Zap,
  TrendingUp,
  Users,
  Database,
  MessageSquare,
  Plus,
  FolderPlus,
  Play,
  ArrowUpRight,
  HelpCircle,
  Clock,
  Layers,
  CircleDot,
  Terminal,
  Cloud
} from "lucide-react";
import SEO from "../components/SEO";
import { useScrollReveal } from "../hooks/useScrollReveal";

// Custom styles for marquee, glassmorphism, buttons and light rays
const CustomStyles = () => (
  <style dangerouslySetInnerHTML={{
    __html: `
    @keyframes marquee-left {
      0% { transform: translateX(0%); }
      100% { transform: translateX(-50%); }
    }
    @keyframes marquee-right {
      0% { transform: translateX(-50%); }
      100% { transform: translateX(0%); }
    }
    .animate-marquee-left {
      display: flex;
      animation: marquee-left 25s linear infinite;
      width: max-content;
    }
    .animate-marquee-right {
      display: flex;
      animation: marquee-right 25s linear infinite;
      width: max-content;
    }
    .animate-marquee-left:hover, .animate-marquee-right:hover {
      animation-play-state: paused;
    }

    /* Reference Glass Styling (Blue Theme) */
    .glass-badge {
      background-color: rgba(33, 33, 33, 0.3);
      border: 1px solid rgba(59, 130, 246, 0.15);
      box-shadow: inset 0 -8px 24px rgba(59, 130, 246, 0.18);
      border-radius: 60px;
      backdrop-filter: blur(10px);
    }
    .glass-button-simple {
      background-color: rgba(33, 33, 33, 0.3);
      border: 1px solid rgba(59, 130, 246, 0.15);
      box-shadow: inset 0 -9px 24px rgba(59, 130, 246, 0.18);
      border-radius: 15px;
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .glass-button-simple:hover {
      border-color: #3b82f6;
      transform: scale(1.04);
      box-shadow: inset 0 -8px 32px rgba(59, 130, 246, 0.24), 
                  inset 0 0 12px rgba(255, 255, 255, 0.08), 
                  0 53px 15px rgba(0, 0, 0, 0.01), 
                  0 34px 14px rgba(0, 0, 0, 0.06);
    }
    .glass-button-glow {
      background-color: #2563eb;
      background-image: radial-gradient(circle farthest-corner at 50% 100%, #93c5fd, rgba(37, 99, 235, 0) 79%);
      border: 1px solid #1d4ed8;
      box-shadow: inset 0 2px 5px rgba(0,0,0,0), inset 0 2px 5px rgba(0,0,0,0), 0 0 30px rgba(59, 130, 246, 0.5);
      border-radius: 15px;
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .glass-button-glow:hover {
      border-color: #2563eb;
      transform: scale(1.04);
      box-shadow: inset 0 6px 5px rgba(255, 255, 255, 0.2), 
                  inset 1px -9px 13px rgba(0, 0, 23, 0.34), 
                  0 7px 30px rgba(37, 99, 235, 0.6);
    }
    .glass-card-wrapper {
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 28px;
      padding: 6px;
      transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
      background-color: transparent;
      height: 100%;
    }
    .glass-card-wrapper:hover {
      padding: 0;
      border-radius: 25px;
      border-color: rgba(59, 130, 246, 0.25);
    }
    .glass-card {
      background-color: rgba(33, 33, 33, 0.3);
      box-shadow: inset 0 -9px 24px rgba(59, 130, 246, 0.18);
      border-radius: 24px;
      height: 100%;
      transition: border-radius 0.5s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .glass-card-wrapper:hover .glass-card {
      border-radius: 25px;
    }
    
    /* Diagonal light rays */
    .light-wrapper {
      opacity: 0.74;
      justify-content: center;
      align-items: center;
      display: flex;
      position: absolute;
      inset: 0%;
      overflow: hidden;
      pointer-events: none;
      z-index: 0;
    }
    .lights-holder {
      grid-column-gap: 70px;
      opacity: 0.35;
      justify-content: center;
      align-items: flex-start;
      width: 100%;
      height: 100%;
      display: flex;
      position: relative;
      top: -217px;
      left: -129px;
      transform: rotate(-30deg);
    }
    .light-ray {
      opacity: 0.4;
      filter: blur(18px);
      background-image: linear-gradient(#ffffff 5%, rgba(255, 255, 255, 0) 67%);
      width: 180px;
      height: 1000px;
    }
    .light-ray.left {
      opacity: 0.1;
      filter: blur(9px);
      width: 110px;
    }
    .light-ray.right {
      opacity: 0.3;
      filter: blur(16px);
      width: 110px;
    }
  `}} />
);

const FadeTypingText = ({ text, startDelay = 0, speed = 0.04 }) => {
  return (
    <span>
      {text.split("").map((char, index) => (
        <span
          key={index}
          className="char-fade-in"
          style={{ animationDelay: `${startDelay + index * speed}s` }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
};

const ScrollTypingText = ({ text, delayOffset = 0, speed = 0.04 }) => {
  return (
    <span>
      {text.split("").map((char, index) => (
        <span
          key={index}
          className="char-reveal"
          style={{ transitionDelay: `${delayOffset + index * speed}s` }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
};

// ---- Interactive Mini-Dashboards (SEO-Related & Mobile Responsive) ----

// Card 1 Mockup: Empowering Growth Metrics
const GrowthChartWidget = () => (
  <div className="relative mt-6 p-4 rounded-xl border border-white/[0.06] bg-slate-950/40 backdrop-blur-md overflow-hidden font-mono text-[11px] text-slate-400">
    <div className="flex justify-between items-center mb-3">
      <div className="flex items-center gap-1.5">
        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span className="font-semibold text-slate-300">Live Traffic Analytics</span>
      </div>
      <span className="text-[10px] text-cyan-400 font-bold bg-cyan-500/10 px-2 py-0.5 rounded-full">+348.6%</span>
    </div>
    {/* Animated Bar Graph mock */}
    <div className="flex gap-2.5 items-end h-20 pt-2 border-b border-white/[0.06]">
      <div className="bg-blue-500/30 w-full rounded-t-sm h-[30%] hover:bg-blue-500/50 transition-all duration-300" />
      <div className="bg-blue-500/40 w-full rounded-t-sm h-[45%] hover:bg-blue-500/50 transition-all duration-300" />
      <div className="bg-blue-500/30 w-full rounded-t-sm h-[20%] hover:bg-blue-500/50 transition-all duration-300" />
      <div className="bg-cyan-500/50 w-full rounded-t-sm h-[60%] hover:bg-cyan-500/70 transition-all duration-300" />
      <div className="bg-cyan-500/60 w-full rounded-t-sm h-[75%] hover:bg-cyan-500/70 transition-all duration-300 animate-pulse" />
      <div className="bg-gradient-to-t from-blue-600 to-cyan-400 w-full rounded-t-sm h-[95%] shadow-[0_0_15px_rgba(6,182,212,0.4)]" />
    </div>
    <div className="flex justify-between mt-2 text-[9px] text-slate-500">
      <span>Q1</span>
      <span>Q2</span>
      <span>Q3</span>
      <span>Active</span>
    </div>
  </div>
);

// Card 2 Mockup: IDE for Development Expertise
const CodeIDEWidget = () => (
  <div className="relative mt-6 rounded-xl border border-white/[0.06] bg-slate-950/60 backdrop-blur-md overflow-hidden text-left font-mono text-[11px] leading-relaxed shadow-2xl">
    <div className="flex items-center gap-1.5 px-4 py-2 border-b border-white/[0.06] bg-white/[0.02]">
      <div className="w-2 h-2 rounded-full bg-red-500/60" />
      <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
      <div className="w-2 h-2 rounded-full bg-green-500/60" />
      <span className="text-[10px] text-slate-500 ml-2">SyncTechCompiler.ts</span>
    </div>
    <div className="p-4 text-slate-400 space-y-1">
      <div><span className="text-purple-400">import</span> &#123; <span className="text-blue-400">deploy</span> &#125; <span className="text-purple-400">from</span> <span className="text-emerald-400">"synctech-cloud"</span>;</div>
      <div className="text-slate-500">// Initialize optimization lifecycle</div>
      <div><span className="text-purple-400">const</span> <span className="text-blue-400">config</span> = &#123;</div>
      <div className="pl-4">engine: <span className="text-emerald-400">"next-generation-ai"</span>,</div>
      <div className="pl-4">autoscaling: <span className="text-amber-400">true</span></div>
      <div>&#125;;</div>
      <div className="pt-2 flex items-center gap-2 text-emerald-400">
        <span>&gt; Compilation successful. Server live on port 3000</span>
        <span className="w-1.5 h-3 bg-emerald-400 animate-pulse inline-block" />
      </div>
    </div>
  </div>
);

// Card 3 Mockup: Agile Sprint Board
const SprintKanbanWidget = () => (
  <div className="relative mb-6 p-4 rounded-xl border border-white/[0.06] bg-slate-950/40 backdrop-blur-md overflow-hidden font-sans text-[11px] text-slate-400">
    <div className="flex justify-between items-center mb-3">
      <span className="font-semibold text-slate-300">Sprint Lifecycle v4.2</span>
      <span className="text-[9px] bg-blue-500/10 border border-blue-500/30 text-blue-400 px-2 py-0.5 rounded-full">In Progress</span>
    </div>
    <div className="grid grid-cols-3 gap-2">
      <div className="bg-slate-900/60 p-2 rounded-lg border border-white/[0.03]">
        <div className="text-[9px] font-semibold text-slate-500 uppercase mb-2">Backlog</div>
        <div className="bg-white/[0.02] p-1.5 rounded border border-white/[0.04] text-[9px] line-through text-slate-600 mb-1">Architecture</div>
        <div className="bg-white/[0.02] p-1.5 rounded border border-white/[0.04] text-[9px] line-through text-slate-600">API Mapping</div>
      </div>
      <div className="bg-slate-900/60 p-2 rounded-lg border border-white/[0.03]">
        <div className="text-[9px] font-semibold text-slate-500 uppercase mb-2">In Progress</div>
        <div className="bg-blue-500/10 p-1.5 rounded border border-blue-500/20 text-[9px] text-blue-300 mb-1 animate-pulse">UI Assembly</div>
        <div className="bg-white/[0.02] p-1.5 rounded border border-white/[0.04] text-[9px] text-slate-400">Staging Run</div>
      </div>
      <div className="bg-slate-900/60 p-2 rounded-lg border border-white/[0.03]">
        <div className="text-[9px] font-semibold text-slate-500 uppercase mb-2">QA & Release</div>
        <div className="bg-cyan-500/10 p-1.5 rounded border border-cyan-500/20 text-[9px] text-cyan-300 mb-1">E2E Testing</div>
        <div className="bg-emerald-500/10 p-1.5 rounded border border-emerald-500/20 text-[9px] text-emerald-300 flex items-center gap-1 font-bold">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Done
        </div>
      </div>
    </div>
  </div>
);

// Card 4 Mockup: Client Dedicated Support/System Monitoring
const SystemStatusWidget = () => (
  <div className="relative mt-6 p-4 rounded-xl border border-white/[0.06] bg-slate-950/40 backdrop-blur-md overflow-hidden font-mono text-[11px] text-slate-400">
    <div className="flex justify-between items-center mb-3">
      <span className="font-semibold text-slate-300">Infrastructure Metrics</span>
      <div className="flex items-center gap-1">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-[9px] text-emerald-400">Online</span>
      </div>
    </div>
    <div className="grid grid-cols-2 gap-3 mb-2">
      <div className="p-2 rounded bg-white/[0.02] border border-white/[0.04]">
        <div className="text-[9px] text-slate-500">API Latency</div>
        <div className="text-sm font-bold text-white mt-1">24ms</div>
      </div>
      <div className="p-2 rounded bg-white/[0.02] border border-white/[0.04]">
        <div className="text-[9px] text-slate-500">Uptime Rate</div>
        <div className="text-sm font-bold text-cyan-400 mt-1">99.99%</div>
      </div>
    </div>
    {/* SVG Wave representation */}
    <div className="w-full h-8 flex items-center justify-center bg-white/[0.01] rounded border border-white/[0.03] overflow-hidden">
      <svg className="w-full h-full text-blue-500/50" viewBox="0 0 100 20" preserveAspectRatio="none">
        <path d="M0,10 Q10,2 20,10 T40,10 T60,10 T80,15 T100,8" fill="none" stroke="currentColor" strokeWidth="1.5" className="animate-pulse" />
      </svg>
    </div>
  </div>
);

export default function DemoPage() {
  const [aboutRef, aboutClass] = useScrollReveal();
  const [techRef, techClass] = useScrollReveal();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [translateY, setTranslateY] = useState(0);
  const [circleRotation, setCircleRotation] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      // Calculate smooth vertical parallax translation
      const translateValue = window.scrollY * 0.24;
      setTranslateY(translateValue);
      // Rotate slowly up to 45deg max as user scrolls
      const maxScroll = 600; // scroll distance over which full 45deg rotation happens
      const rotation = Math.min(45, (window.scrollY / maxScroll) * 45);
      setCircleRotation(rotation);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // FAQs
  const faqs = [
    {
      q: "How do I get started with RedSun?",
      a: "To get started, simply choose a plan that fits your needs and sign up. Our onboarding wizard will guide you through connecting your data sources and launching your first dashboard in minutes."
    },
    {
      q: "Can I upgrade or downgrade my plan at any time?",
      a: "Yes, you can change your plan at any time from your billing dashboard. Upgrades are prorated immediately, while downgrades take effect at the end of your current billing cycle."
    },
    {
      q: "What payment methods do you support?",
      a: "We support all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, Apple Pay, Google Pay, and bank transfers for enterprise accounts."
    },
    {
      q: "Is my data secure with RedSun?",
      a: "Absolutely. Security is our top priority. We employ industry-standard end-to-end encryption (AES-256) both in transit and at rest, alongside compliance with SOC2 Type II, GDPR, and HIPAA guidelines."
    }
  ];

  // Tinting helper style for original Webflow assets to make them blue instead of red/orange
  const tintBlueStyle = {
    filter: "hue-rotate(200deg) saturate(130%)",
  };

  return (
    <div className="min-h-screen bg-[#060910] text-slate-100 selection:bg-blue-600/30 selection:text-white font-sans relative overflow-hidden">
      <SEO
        title="RedSun - Intelligent Solutions Powered by AI"
        description="Gain clarity and harness the power of your data with RedSun. Our intuitive dashboard provides real-time analytics."
      />
      <CustomStyles />

      {/* Background Glowing Orbs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[140px] -z-10 animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] -z-10 animate-pulse" style={{ animationDuration: '12s' }} />
      <div className="absolute bottom-20 left-1/3 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[160px] -z-10" />


      {/* ========================================= */}
      {/* HEADER / NAVIGATION */}
      {/* ========================================= */}
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
          ? "bg-[#060910]/30 backdrop-blur-xl border-b border-white/[0.04]"
          : "bg-[#060910] border-b border-transparent"
        }`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="relative w-8 h-8 flex items-center justify-center rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]">
              <span className="text-white font-black text-lg">R</span>
              <div className="absolute -inset-1 bg-gradient-to-tr from-blue-600 to-cyan-500 rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-300 -z-10" />
            </div>
            <span className="text-xl font-bold tracking-wider text-white">
              RED<span className="text-blue-400">SUN</span>
            </span>
          </a>

          {/* Nav items */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#" className="hover:text-blue-400 transition-colors">Home</a>
            <a href="#features" className="hover:text-blue-400 transition-colors">Features</a>
            <a href="#pricing" className="hover:text-blue-400 transition-colors">Pricing</a>
            <a href="#faq" className="hover:text-blue-400 transition-colors">FAQ</a>
            <a href="#blog" className="hover:text-blue-400 transition-colors">Blog</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
          </nav>

          {/* CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <button className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              Cart (0)
            </button>
            <a
              href="#pricing"
              className="glass-button-glow px-5 py-2 flex items-center justify-center text-white text-sm font-semibold shadow-[0_0_20px_rgba(59,130,246,0.3)]"
            >
              Book a Demo
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-white focus:outline-none"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-[#060910]/95 backdrop-blur-xl border-b border-white/[0.04] px-6 py-8 flex flex-col gap-6">
            <nav className="flex flex-col gap-4 text-base font-medium text-slate-300">
              <a href="#" onClick={() => setMobileMenuOpen(false)} className="hover:text-blue-400 transition-colors">Home</a>
              <a href="#features" onClick={() => setMobileMenuOpen(false)} className="hover:text-blue-400 transition-colors">Features</a>
              <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="hover:text-blue-400 transition-colors">Pricing</a>
              <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="hover:text-blue-400 transition-colors">FAQ</a>
              <a href="#blog" onClick={() => setMobileMenuOpen(false)} className="hover:text-blue-400 transition-colors">Blog</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-blue-400 transition-colors">Contact</a>
            </nav>
            <div className="h-px bg-slate-900" />
            <div className="flex flex-col gap-4">
              <div className="text-sm font-medium text-slate-300 px-2">Cart (0)</div>
              <a
                href="#pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-sm shadow-[0_0_20px_rgba(59,130,246,0.3)]"
              >
                Book a Demo
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Spacer for navbar */}
      <div className="h-20" />

      {/* ========================================= */}
      {/* HERO SECTION */}
      {/* ========================================= */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        {/* Hero Diagonal Light Rays */}
        <div className="light-wrapper">
          <div className="lights-holder">
            <div className="light-ray left" />
            <div className="light-ray" />
            <div className="light-ray right" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">

          {/* Announcement Badge */}
          {/* <div className="glass-badge inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold mb-8">
            <span className="px-2 py-0.5 rounded-full bg-blue-600 text-white text-[10px] font-black uppercase tracking-wider shadow-[0_0_12px_rgba(59,130,246,0.4)] animate-pulse">
              Whats New
            </span>
            <span className="text-slate-300">Ease Update v0.1</span>
            <ArrowRight size={12} className="text-blue-400 ml-1" />
          </div> */}

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 max-w-4xl mx-auto leading-[1.1]">
            Intelligent Solutions <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Powered by AI.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Gain clarity and harness the power of your data with RedSun. <br className="hidden md:inline" />
            Our intuitive dashboard provides real-time analytics.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="#features"
              className="glass-button-simple w-full sm:w-auto px-8 py-3.5 text-white text-sm font-semibold flex items-center justify-center gap-2"
            >
              Read More
              <ArrowRight size={16} className="text-blue-400" />
            </a>
            <a
              href="#pricing"
              className="glass-button-glow w-full sm:w-auto px-8 py-3.5 text-white text-sm font-semibold flex items-center justify-center gap-2"
            >
              Book a Demo
              <ArrowRight size={16} />
            </a>
          </div>

          {/* App Preview Showcase Container */}
          <div className="relative max-w-5xl mx-auto mt-10">
            {/* Metallic Circle Behind/Below */}
            <div className="absolute -bottom-40 md:-bottom-72 left-1/2 -translate-x-1/2 w-[110%] max-w-[1100px] h-[300px] md:h-[450px] -z-10 pointer-events-none">
              {/* Parallax + Rotation Container */}
              <div
                style={{
                  transform: `translate3d(0, ${translateY}px, 0) scale(${mounted ? 1 : 0.7})`,
                  opacity: mounted ? 0.8 : 0,
                  transition: 'opacity 1.2s ease-out, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                className="w-full h-full relative"
              >
                {/* Metallic ring — rotates on scroll */}
                <img
                  src="/red_circle_no_glow.png"
                  alt=""
                  style={{
                    ...tintBlueStyle,
                    transform: `rotate(${circleRotation}deg)`,
                    transformOrigin: '50% 50%',
                    transition: 'transform 0.3s ease-out'
                  }}
                  className="w-full h-auto object-cover"
                />
                {/* Glow 1 — rotates with ring */}
                <img
                  src="/red_glow.png"
                  alt=""
                  style={{
                    ...tintBlueStyle,
                    transform: `rotate(${circleRotation}deg)`,
                    transformOrigin: '50% 50%',
                    transition: 'transform 0.3s ease-out'
                  }}
                  className="absolute top-0 left-0 w-full h-auto object-cover opacity-75 mix-blend-screen blur-md"
                />
                {/* Glow 2 — rotates with ring */}
                <img
                  src="/glow.png"
                  alt=""
                  style={{
                    ...tintBlueStyle,
                    transform: `rotate(${circleRotation}deg)`,
                    transformOrigin: '50% 50%',
                    transition: 'transform 0.3s ease-out'
                  }}
                  className="absolute top-0 left-0 w-full h-auto object-cover opacity-55 mix-blend-screen"
                />
              </div>
            </div>

            {/* Dashboard Mockup Frame (Commented Out)
            <div className="relative rounded-2xl border border-slate-800/80 bg-[#060910]/80 p-2 shadow-[0_0_50px_rgba(59,130,246,0.15)] overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 via-transparent to-cyan-500/5 pointer-events-none" />
              <img 
                src="https://cdn.prod.website-files.com/673c8623b53e085c22dcde7d/673c878f2b1a8d87c7549905_App.jpg" 
                alt="RedSun Dashboard Mockup" 
                style={tintBlueStyle}
                className="w-full h-auto rounded-xl border border-slate-900 transition-transform duration-1000 group-hover:scale-[1.01]"
              />
              
              <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#060910] to-transparent" />
            </div>
            */}

          </div>

        </div>
      </section>

      {/* ========================================= */}
      {/* BUILT WITH MODERN TECHNOLOGIES */}
      {/* ========================================= */}
      <section className="py-24 border-t border-b border-slate-900 bg-gradient-to-b from-[#060910]/30 to-[#060910]/80 relative overflow-hidden">
        {/* Visual background lights */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />

        <div ref={techRef} className={`max-w-7xl mx-auto px-6 text-center mb-16 overflow-hidden ${techClass}`}>
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-4 inline-block tracking-widest uppercase">
            Technology Stack
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <ScrollTypingText text="Built with Modern Technologies" />
          </h2>
          <p className={`text-slate-400 text-base md:text-lg max-w-2xl mx-auto transition-all duration-1000 delay-500 transform ${
            techClass === "revealed" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}>
            Multi-layered infrastructure engineered for maximum latency control and computation speed.
          </p>
        </div>

        {/* Skewed and tilted 3D perspective wrapper */}
        <div className="relative flex flex-col gap-6 w-full max-w-8xl mx-auto py-4 overflow-hidden [perspective:1000px] transform hover:scale-[1.01] transition-transform duration-500">
          
          {/* Row 1: Left scrolling */}
          <div className="w-full overflow-hidden relative">
            <div className="animate-marquee-left flex gap-6 items-center">
              {[
                { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
                { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", invert: true },
                { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
                { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
                { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
                { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
                { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
                { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
                { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
                { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
                { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
                { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg" },
                { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
                { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-original.svg" },
                { name: "AWS", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/amazonwebservices.svg", invert: true },
                { name: "Microsoft Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
                // Duplicate Row 1 for seamless looping
                { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
                { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", invert: true },
                { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
                { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
                { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
                { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
                { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
                { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
                { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
                { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
                { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
                { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg" },
                { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
                { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-original.svg" },
                { name: "AWS", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/amazonwebservices.svg", invert: true },
                { name: "Microsoft Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
              ].map((tech, i) => (
                <div key={`row1-${i}`} className="flex items-center gap-3.5 px-6 py-4 rounded-2xl border border-slate-800/80 bg-gradient-to-r from-slate-900/40 to-slate-950/40 hover:border-blue-500/40 hover:bg-slate-900/60 shadow-[0_4px_20px_rgba(0,0,0,0.3)] transition-all duration-300 group cursor-pointer flex-shrink-0">
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="h-7 w-7 object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ filter: tech.invert ? "invert(1)" : "none" }}
                  />
                  <span className="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Right scrolling */}
          <div className="w-full overflow-hidden relative">
            <div className="animate-marquee-right flex gap-6 items-center">
              {[
                { name: "Google Cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
                { name: "Nginx", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" },
                { name: "GitHub Actions", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", invert: true },
                { name: "CI/CD", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
                { name: "OpenAI", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/openai.svg", invert: true },
                { name: "LangChain", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/langchain.svg", invert: true },
                { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
                { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
                { name: "Hugging Face", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/huggingface.svg", invert: true },
                { name: "Vector Databases", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/qdrant.svg", invert: true },
                { name: "RAG", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-original.svg" },
                { name: "AI Agents", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/githubcopilot.svg", invert: true },
                { name: "Sanity CMS", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/sanity.svg", invert: true },
                { name: "WordPress", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg" },
                { name: "Shopify", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/shopify.svg", invert: true },
                { name: "Strapi", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/strapi.svg", invert: true },
                // Duplicate Row 2 for seamless looping
                { name: "Google Cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
                { name: "Nginx", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" },
                { name: "GitHub Actions", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", invert: true },
                { name: "CI/CD", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
                { name: "OpenAI", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/openai.svg", invert: true },
                { name: "LangChain", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/langchain.svg", invert: true },
                { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
                { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
                { name: "Hugging Face", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/huggingface.svg", invert: true },
                { name: "Vector Databases", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/qdrant.svg", invert: true },
                { name: "RAG", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-original.svg" },
                { name: "AI Agents", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/githubcopilot.svg", invert: true },
                { name: "Sanity CMS", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/sanity.svg", invert: true },
                { name: "WordPress", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg" },
                { name: "Shopify", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/shopify.svg", invert: true },
                { name: "Strapi", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/strapi.svg", invert: true },
              ].map((tech, i) => (
                <div key={`row2-${i}`} className="flex items-center gap-3.5 px-6 py-4 rounded-2xl border border-slate-800/80 bg-gradient-to-r from-slate-900/40 to-slate-950/40 hover:border-blue-500/40 hover:bg-slate-900/60 shadow-[0_4px_20px_rgba(0,0,0,0.3)] transition-all duration-300 group cursor-pointer flex-shrink-0">
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="h-7 w-7 object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ filter: tech.invert ? "invert(1)" : "none" }}
                  />
                  <span className="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Side fades */}
          <div className="absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-[#060910] to-transparent pointer-events-none z-10" />
          <div className="absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-[#060910] to-transparent pointer-events-none z-10" />
        </div>
      </section>
      {/* ========================================= */}
      {/* ABOUT US SECTION */}
      {/* ========================================= */}
      <section id="about" className="py-24 max-w-7xl mx-auto px-6">
        {/* About Section Header */}
        <div ref={aboutRef} className={`text-center max-w-3xl mx-auto mb-20 overflow-hidden ${aboutClass}`}>
          {/* <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-4 inline-block tracking-widest uppercase">
            About SyncTech
          </span> */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <ScrollTypingText text="Driving Digital Transformation" />
          </h2>
          <p className={`text-slate-400 text-base md:text-lg transition-all duration-1000 delay-500 transform ${
            aboutClass === "revealed" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}>
            We are a premier software development partner dedicated to scaling enterprises through custom web architectures, cloud engineering, and custom CRM solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Card 1: Our Mission */}
          <div className="glass-card-wrapper min-h-[380px] group">
            <div className="glass-card p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-4 inline-block">
                  Our Purpose
                </span>
                <h3 className="text-2xl font-bold text-white mb-2">Empowering Growth</h3>
                <p className="text-slate-400 text-sm max-w-md">
                  We align advanced technical expertise with strategic business goals to create high-performing custom software, reliable CRM integrations, and optimized data ecosystems.
                </p>
              </div>

              {/* Visual Widget */}
              <GrowthChartWidget />
            </div>
          </div>

          {/* Card 2: Our Team & Expertise */}
          <div className="glass-card-wrapper min-h-[380px] group">
            <div className="glass-card p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 mb-4 inline-block">
                  Elite Engineering
                </span>
                <h3 className="text-2xl font-bold text-white mb-2">Expert Development</h3>
                <p className="text-slate-400 text-sm max-w-md">
                  Our developers build using modern stacks (React, Next.js, Node.js, Python) to deploy high-availability platforms engineered for scale and speed.
                </p>
              </div>

              {/* Visual Widget */}
              <CodeIDEWidget />
            </div>
          </div>

          {/* Card 3: Seamless Process */}
          <div className="glass-card-wrapper min-h-[380px] group">
            <div className="glass-card p-8 flex flex-col justify-between">
              {/* Visual Widget at top */}
              <div className="order-2 md:order-1">
                <SprintKanbanWidget />
              </div>

              <div className="relative z-10 order-1 md:order-2">
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-4 inline-block">
                  Agile Methodology
                </span>
                <h3 className="text-2xl font-bold text-white mb-2">Result-Driven Execution</h3>
                <p className="text-slate-400 text-sm max-w-md">
                  From architecture mapping to production release, our sprints combine transparent milestones, automated unit testing, and rigorous QA.
                </p>
              </div>
            </div>
          </div>

          {/* Card 4: Dedicated Partnership */}
          <div className="glass-card-wrapper min-h-[380px] group">
            <div className="glass-card p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 mb-4 inline-block">
                  Client Focus
                </span>
                <h3 className="text-2xl font-bold text-white mb-2">Dedicated Integration</h3>
                <p className="text-slate-400 text-sm max-w-md">
                  We integrate directly with your product lifecycle, delivering proactive 24/7 technical monitoring, database tuning, and API updates.
                </p>
              </div>

              {/* Visual Widget */}
              <SystemStatusWidget />
            </div>
          </div>

        </div>
      </section>

      {/* ========================================= */}
      {/* POWERFUL FEATURES SECTION */}
      {/* ========================================= */}
      <section className="py-24 border-t border-slate-900/60 bg-gradient-to-b from-[#060910] to-[#060910]/40">
        <div className="max-w-7xl mx-auto px-6">

          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Powerful Features
            </h2>
            <p className="text-slate-400 text-lg">
              Explore the frontier of coding evolution with RedSun Unleashed. <br />
              Our latest features redefine the boundaries of what's possible in analytics tools.
            </p>
          </div>

          {/* Feature Block 1: Top Management */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6 leading-tight">
                Top Management, to help you see the bigger picture
              </h3>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Stay updated with absolute precision. Our administrative hub combines server performance metrics, pipeline states, and user activity profiles into a singular premium view.
              </p>

              {/* Checklist */}
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center mt-1">
                    <Check size={14} className="text-blue-400" />
                  </div>
                  <span className="text-slate-300">Customizable layouts for efficient coding.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center mt-1">
                    <Check size={14} className="text-blue-400" />
                  </div>
                  <span className="text-slate-300">Font preferences to match your style.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center mt-1">
                    <Check size={14} className="text-blue-400" />
                  </div>
                  <span className="text-slate-300">Create multiple profiles for versatility.</span>
                </li>
              </ul>

              <a
                href="#pricing"
                className="glass-button-simple inline-flex items-center gap-2 px-5 py-3 text-white text-sm font-semibold"
              >
                See Doc
                <ArrowRight size={16} />
              </a>
            </div>

            <div className="relative rounded-2xl border border-slate-800/80 bg-[#060910] p-2 shadow-[0_0_40px_rgba(59,130,246,0.1)]">
              <img
                src="https://cdn.prod.website-files.com/673c8623b53e085c22dcde7d/673ca401ef8e7fd09ba9f4fa_Feature%20Image%2001.jpg"
                alt="Management Showcase"
                style={tintBlueStyle}
                className="w-full h-auto rounded-xl border border-slate-900"
              />
            </div>
          </div>

          {/* Feature Block 2: Charts (Reversed Layout) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative rounded-2xl border border-slate-800/80 bg-[#060910] p-2 shadow-[0_0_40px_rgba(59,130,246,0.1)]">
              <img
                src="https://cdn.prod.website-files.com/673c8623b53e085c22dcde7d/673ca401d0386358ecf73562_Feature%20Image%2002.jpg"
                alt="Charts Showcase"
                style={tintBlueStyle}
                className="w-full h-auto rounded-xl border border-slate-900"
              />
            </div>

            <div className="order-1 lg:order-2">
              <h3 className="text-3xl font-bold text-white mb-6 leading-tight">
                Helping you with fast-reading charts on the go
              </h3>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Enjoy responsive visualizations engineered for modern screens. Whether inspecting logs from a phone or tracking active pipelines on an ultra-wide monitor, your metrics remain beautifully formatted.
              </p>

              {/* Checklist */}
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mt-1">
                    <Check size={14} className="text-cyan-400" />
                  </div>
                  <span className="text-slate-300">Clean dashboard metrics and mobile notifications.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mt-1">
                    <Check size={14} className="text-cyan-400" />
                  </div>
                  <span className="text-slate-300">Live export structures in PNG/PDF formats.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mt-1">
                    <Check size={14} className="text-cyan-400" />
                  </div>
                  <span className="text-slate-300">Cross-reference logs seamlessly on the fly.</span>
                </li>
              </ul>

              <a
                href="#pricing"
                className="glass-button-simple inline-flex items-center gap-2 px-5 py-3 text-white text-sm font-semibold"
              >
                See Doc
                <ArrowRight size={16} />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================= */}
      {/* PRICING SECTION */}
      {/* ========================================= */}
      <section id="pricing" className="py-24 border-t border-slate-900/60">
        <div className="max-w-7xl mx-auto px-6">

          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Pricing Plans for Success
            </h2>
            <p className="text-slate-400 text-lg">
              Discover the perfect plan for your project with RedSun. <br />
              Our tiers are built to give developers and teams optimal scale.
            </p>
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">

            {/* Tier 1: Basic */}
            <div className="glass-card-wrapper group">
              <div className="glass-card p-8 flex flex-col justify-between">
                <div>
                  <div className="text-slate-400 text-sm font-semibold mb-6">Basic plan</div>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-4xl font-extrabold text-white">$49</span>
                    <span className="text-slate-500 text-sm">/mo</span>
                  </div>
                  <p className="text-slate-500 text-xs mb-8 leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur metus massa et amet cursus sit semper justo.
                  </p>
                  <div className="h-px bg-slate-800/50 mb-8" />
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                      <Check size={16} className="text-blue-500" />
                      <span className="text-slate-300 text-sm">Access to basic features</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check size={16} className="text-blue-500" />
                      <span className="text-slate-300 text-sm">Basic reporting and analytics</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check size={16} className="text-blue-500" />
                      <span className="text-slate-300 text-sm">Up to 10 individual users</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check size={16} className="text-blue-500" />
                      <span className="text-slate-300 text-sm">20GB data each user</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check size={16} className="text-blue-500" />
                      <span className="text-slate-300 text-sm">Basic chat and email support</span>
                    </li>
                  </ul>
                </div>
                <button className="glass-button-simple w-full mt-8 py-3 text-white font-semibold text-sm flex items-center justify-center">
                  Get started
                </button>
              </div>
            </div>

            {/* Tier 2: Professional (Highlighted) */}
            <div className="glass-card-wrapper group border-blue-500 border-2 shadow-[0_0_40px_rgba(59,130,246,0.2)]">
              <div className="glass-card p-8 flex flex-col justify-between relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-blue-500 text-white text-[11px] font-black uppercase tracking-widest shadow-md">
                  Best Value
                </div>
                <div>
                  <div className="text-blue-400 text-sm font-semibold mb-6 mt-2">Professional plan</div>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-4xl font-extrabold text-white">$99</span>
                    <span className="text-slate-500 text-sm">/mo</span>
                  </div>
                  <p className="text-slate-400 text-xs mb-8 leading-relaxed">
                    Ideal for growing engineering teams and mid-sized web businesses.
                  </p>
                  <div className="h-px bg-slate-800/80 mb-8" />
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                      <Check size={16} className="text-blue-400" />
                      <span className="text-slate-200 text-sm">Access to premium features</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check size={16} className="text-blue-400" />
                      <span className="text-slate-200 text-sm">Advanced reporting and charts</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check size={16} className="text-blue-400" />
                      <span className="text-slate-200 text-sm">Up to 100 individual users</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check size={16} className="text-blue-400" />
                      <span className="text-slate-200 text-sm">100GB data each user</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check size={16} className="text-blue-400" />
                      <span className="text-slate-200 text-sm">24/7 dedicated chat support</span>
                    </li>
                  </ul>
                </div>
                <button className="glass-button-glow w-full mt-8 py-3 text-white font-semibold text-sm flex items-center justify-center">
                  Get started
                </button>
              </div>
            </div>

            {/* Tier 3: Enterprise */}
            <div className="glass-card-wrapper group">
              <div className="glass-card p-8 flex flex-col justify-between">
                <div>
                  <div className="text-slate-400 text-sm font-semibold mb-6">Enterprise plan</div>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-4xl font-extrabold text-white">$149</span>
                    <span className="text-slate-500 text-sm">/mo</span>
                  </div>
                  <p className="text-slate-500 text-xs mb-8 leading-relaxed">
                    Custom configurations and full SLA integrations for large-scale operations.
                  </p>
                  <div className="h-px bg-slate-800/50 mb-8" />
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                      <Check size={16} className="text-blue-500" />
                      <span className="text-slate-300 text-sm">Unlimited system integrations</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check size={16} className="text-blue-500" />
                      <span className="text-slate-300 text-sm">Enterprise security credentials</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check size={16} className="text-blue-500" />
                      <span className="text-slate-300 text-sm">Unlimited seat allocation</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check size={16} className="text-blue-500" />
                      <span className="text-slate-300 text-sm">Custom API endpoint metrics</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check size={16} className="text-blue-500" />
                      <span className="text-slate-300 text-sm">Dedicated account manager 24/7</span>
                    </li>
                  </ul>
                </div>
                <button className="glass-button-simple w-full mt-8 py-3 text-white font-semibold text-sm flex items-center justify-center">
                  Get started
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================= */}
      {/* FAQS SECTION */}
      {/* ========================================= */}
      <section id="faq" className="py-24 border-t border-slate-900/60 max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-400">
            Find answers to common questions about configuring your RedSun platforms.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeFaq === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-slate-800/80 bg-slate-900/15 overflow-hidden transition-all duration-300 hover:border-slate-700"
              >
                <button
                  onClick={() => setActiveFaq(isOpen ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left font-semibold text-white focus:outline-none"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={20}
                    className={`text-slate-400 transition-transform duration-300 ${isOpen ? "rotate-180 text-blue-400" : ""}`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-slate-400 leading-relaxed border-t border-slate-900/40 pt-4 bg-[#060910]/20">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ========================================= */}
      {/* LATEST FROM THE BLOG */}
      {/* ========================================= */}
      <section id="blog" className="py-24 border-t border-slate-900/60">
        <div className="max-w-7xl mx-auto px-6">

          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16">
            <div>
              <h2 className="text-4xl font-bold text-white mb-4">
                Latest from the Blog
              </h2>
              <p className="text-slate-400">
                Insights, tutorials, and ecosystem updates from our core engineering team.
              </p>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 font-semibold text-sm mt-4 sm:mt-0 transition-colors"
            >
              See all articles
              <ArrowUpRight size={16} />
            </a>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Blog Post 1 */}
            <div className="group rounded-2xl bg-slate-900/20 border border-slate-800/80 overflow-hidden hover:border-blue-500/30 transition duration-300 flex flex-col justify-between">
              <div>
                <div className="relative overflow-hidden aspect-video border-b border-slate-900">
                  <img
                    src="https://cdn.prod.website-files.com/673c8623b53e085c22dcde7d/673ca401ef8e7fd09ba9f4fa_Feature%20Image%2001.jpg"
                    alt="Blog Post 1"
                    style={tintBlueStyle}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                    <span className="px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-semibold">
                      AI Solutions
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      5 min read
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-blue-400 transition-colors">
                    Scaling AI Workflows in Production environments
                  </h3>
                  <p className="text-slate-400 text-xs line-clamp-3">
                    Discover how to architect databases and cache endpoints to support thousands of parallel model invocations efficiently.
                  </p>
                </div>
              </div>
              <div className="p-6 pt-0 text-slate-500 text-[11px] font-medium border-t border-slate-900/50 mt-4 flex items-center justify-between">
                <span>May 12, 2026</span>
                <span className="text-blue-400 group-hover:translate-x-1 transition-transform">Read article &rarr;</span>
              </div>
            </div>

            {/* Blog Post 2 */}
            <div className="group rounded-2xl bg-slate-900/20 border border-slate-800/80 overflow-hidden hover:border-blue-500/30 transition duration-300 flex flex-col justify-between">
              <div>
                <div className="relative overflow-hidden aspect-video border-b border-slate-900">
                  <img
                    src="https://cdn.prod.website-files.com/673c8623b53e085c22dcde7d/673ca401d0386358ecf73562_Feature%20Image%2002.jpg"
                    alt="Blog Post 2"
                    style={tintBlueStyle}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                    <span className="px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-semibold">
                      Web Dev
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      4 min read
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-blue-400 transition-colors">
                    Mastering React 19 and Tailwind CSS v4 setup
                  </h3>
                  <p className="text-slate-400 text-xs line-clamp-3">
                    A comprehensive walkthrough of deploying modern compiler frameworks without breaking hydration rendering metrics.
                  </p>
                </div>
              </div>
              <div className="p-6 pt-0 text-slate-500 text-[11px] font-medium border-t border-slate-900/50 mt-4 flex items-center justify-between">
                <span>Apr 28, 2026</span>
                <span className="text-blue-400 group-hover:translate-x-1 transition-transform">Read article &rarr;</span>
              </div>
            </div>

            {/* Blog Post 3 */}
            <div className="group rounded-2xl bg-slate-900/20 border border-slate-800/80 overflow-hidden hover:border-blue-500/30 transition duration-300 flex flex-col justify-between">
              <div>
                <div className="relative overflow-hidden aspect-video border-b border-slate-900">
                  <img
                    src="https://cdn.prod.website-files.com/673c8623b53e085c22dcde7d/673ca38f02354f48e7708d75_Features%201.png"
                    alt="Blog Post 3"
                    style={tintBlueStyle}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                    <span className="px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-semibold">
                      Technology
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      7 min read
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-blue-400 transition-colors">
                    The Future of Intelligent Dashboards in 2026
                  </h3>
                  <p className="text-slate-400 text-xs line-clamp-3">
                    Exploring how visual analytics architectures will transition toward natural language conversational queries.
                  </p>
                </div>
              </div>
              <div className="p-6 pt-0 text-slate-500 text-[11px] font-medium border-t border-slate-900/50 mt-4 flex items-center justify-between">
                <span>Apr 15, 2026</span>
                <span className="text-blue-400 group-hover:translate-x-1 transition-transform">Read article &rarr;</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================= */}
      {/* CONTACT / CTA BLOCK SECTION */}
      {/* ========================================= */}
      <section id="contact" className="py-24 border-t border-slate-900 bg-[#060910]/40 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Ready to scale your insights?
          </h2>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto mb-10">
            Join thousands of developers and tech-stacks leveraging RedSun. Configure and launch your first AI dashboard for free.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#pricing"
              className="glass-button-glow w-full sm:w-auto px-8 py-3.5 text-white text-sm font-semibold flex items-center justify-center"
            >
              Get Started Now
            </a>
            <a
              href="mailto:contact@redsun.ai"
              className="glass-button-simple w-full sm:w-auto px-8 py-3.5 text-slate-300 hover:text-white text-sm font-semibold flex items-center justify-center"
            >
              Contact Support
            </a>
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* FOOTER */}
      {/* ========================================= */}
      <footer className="border-t border-slate-900 py-16 bg-[#060910]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Col 1 */}
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="w-7 h-7 flex items-center justify-center rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-500 shadow-[0_0_10px_rgba(59,130,246,0.3)]">
                <span className="text-white font-black text-sm">R</span>
              </div>
              <span className="text-lg font-bold tracking-wider text-white">
                RED<span className="text-blue-400">SUN</span>
              </span>
            </a>
            <p className="text-slate-400 text-sm max-w-sm mb-6 leading-relaxed">
              Intelligent Solutions Powered by AI. Gain clarity, optimize servers, and harness the power of your database workflows.
            </p>
            <p className="text-xs text-slate-600">
              &copy; {new Date().getFullYear()} RedSun. All rights reserved.
            </p>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="text-xs font-semibold text-white tracking-widest uppercase mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#features" className="hover:text-blue-400 transition-colors">Features</a></li>
              <li><a href="#pricing" className="hover:text-blue-400 transition-colors">Pricing</a></li>
              <li><a href="#faq" className="hover:text-blue-400 transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Documentation</a></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="text-xs font-semibold text-white tracking-widest uppercase mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#blog" className="hover:text-blue-400 transition-colors">Blog</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
              <li><a href="/Careers" className="hover:text-blue-400 transition-colors">Careers</a></li>
              <li><a href="/PrivacyPolicy" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

        </div>
      </footer>

    </div>
  );
}
