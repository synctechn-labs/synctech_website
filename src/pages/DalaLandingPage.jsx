import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Search, Sparkles, ChevronRight, Check } from "lucide-react";
import DalaConstellationCanvas from "../components/DalaConstellationCanvas";

export default function DalaLandingPage() {
  const [activeTab, setActiveTab] = useState("manifesto");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchAnswer, setSearchAnswer] = useState(null);
  const [isSearching, setIsSearching] = useState(false);
  const [activeTeamIndex, setActiveTeamIndex] = useState(0);

  // Pre-set enterprise questions for interactive demo
  const sampleQuestions = [
    "Where is the Q3 AI Product Roadmap?",
    "Who leads the OAuth 2.0 security audit?",
    "What were the architectural decisions from yesterday's engineering sync?",
  ];

  const handleSampleClick = (q) => {
    setSearchQuery(q);
    setIsSearching(true);
    setSearchAnswer(null);
    setTimeout(() => {
      setIsSearching(false);
      if (q.includes("Roadmap")) {
        setSearchAnswer({
          title: "Q3 AI Product Roadmap & Milestones",
          author: "Product Strategy & Engineering",
          summary:
            "The Q3 roadmap focuses on real-time vector search integration, sub-50ms query latency, and self-hosted constellation nodes. Approved by Sarah Lin on July 12.",
          sources: ["Figma Specs", "Notion Workspace", "Slack #proj-ai-core"],
        });
      } else if (q.includes("OAuth")) {
        setSearchAnswer({
          title: "OAuth 2.0 Security Audit Ownership",
          author: "Security Architecture Team",
          summary:
            "Lead Security Engineer Marcus Vance owns the OAuth 2.0 audit. Final report completed with zero critical vulnerabilities.",
          sources: ["GitHub Security Advisory", "Jira SEC-889"],
        });
      } else {
        setSearchAnswer({
          title: "Engineering Sync Decisions - July 18",
          author: "Core Architecture Group",
          summary:
            "Team decided to adopt gRPC for microservice RPCs, deploy zero-trust constellation nodes, and sunset legacy REST v1 by Q4.",
          sources: ["Google Meet Transcripts", "Confluence Doc #4409"],
        });
      }
    }, 600);
  };

  const teamMembers = [
    {
      name: "Evelyn Vance",
      role: "FOUNDER & CHIEF ARCHITECT",
      bio: "Former Distributed Systems Lead at MIT CSAIL. Specialist in high-dimensional graph topologies.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Dr. Aris Thorne",
      role: "VP OF QUANTUM & NEURAL GRAPHS",
      bio: "Pioneered neural knowledge retrieval models with over 14 patents in continuous graph embeddings.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Elena Rostova",
      role: "HEAD OF PRODUCT EXPERIENCE",
      bio: "Ex-Linear UI Systems architect. Obsessed with zero-friction human-AI cognitive flow.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#8052ff] selection:text-white overflow-x-hidden relative">
      
      {/* Navbar */}
      <nav className="w-full max-w-[1280px] mx-auto px-6 sm:px-10 py-8 flex items-center justify-between relative z-50">
        
        {/* Logo Lockup */}
        <a href="#" className="flex items-center gap-3 group">
          {/* Triangular logo mark with gradient fade #8052ff -> #15846e */}
          <div className="w-7 h-7 relative flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-7 h-7 fill-none">
              <defs>
                <linearGradient id="dalaLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8052ff" />
                  <stop offset="100%" stopColor="#15846e" />
                </linearGradient>
              </defs>
              <polygon
                points="12,2 22,21 2,21"
                fill="url(#dalaLogoGrad)"
                stroke="#8052ff"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <circle cx="12" cy="13" r="2.5" fill="#ffffff" />
            </svg>
          </div>
          <span className="text-white text-xl font-normal tracking-tight">
            Dala
          </span>
        </a>

        {/* Center Nav Links (Ghost links) */}
        <div className="hidden md:flex items-center gap-8 text-[14px] font-semibold uppercase tracking-[0.025em]">
          <a href="#manifesto" className="text-[#ffffff] hover:text-white transition-colors">
            Manifesto
          </a>
          <a href="#demo" className="text-[#9a9a9a] hover:text-white transition-colors">
            Intelligence Engine
          </a>
          <a href="#team" className="text-[#9a9a9a] hover:text-white transition-colors">
            Team
          </a>
          <a href="#principles" className="text-[#9a9a9a] hover:text-white transition-colors">
            Principles
          </a>
        </div>

        {/* Primary Action Button - Electric Iris Filled Violet Pill */}
        <button className="bg-[#8052ff] hover:bg-[#6c3cf5] text-white rounded-full px-6 py-3 text-[14px] font-semibold uppercase tracking-[0.025em] transition-all hover:scale-105 shadow-[0_0_20px_rgba(128,82,255,0.4)] cursor-pointer">
          Request Access
        </button>
      </nav>

      {/* HERO SECTION - Asymmetric 2-column on Pure Black Canvas */}
      <section className="w-full max-w-[1280px] mx-auto px-6 sm:px-10 pt-8 pb-24 lg:pt-16 lg:pb-36 min-h-[85vh] flex flex-col justify-center relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Monolithic Headlines & Airy Copy */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            
            {/* Amber Highlight Tag */}
            <span className="text-[#ffb829] text-[14px] font-semibold uppercase tracking-[0.025em] mb-4 inline-block">
              INSTANT ORGANIZATIONAL KNOWLEDGE
            </span>

            {/* Monolithic Display Headline (78px - 113px) */}
            <h1 className="text-white font-normal text-[52px] sm:text-[76px] lg:text-[104px] leading-[0.9] tracking-[-0.04em] mb-8 select-none">
              Your workplace <br />
              has the answer. <br />
              <span className="text-[#ffffff]">Just ask Dala.</span>
            </h1>

            {/* Signature 18px Weight 200 (Ultra-light) Body Copy */}
            <p className="text-[#bdbdbd] font-[200] text-[18px] leading-[1.6] max-w-xl mb-10">
              Dala operates as a dark-stage cognitive canvas. It visualizes your enterprise knowledge graph as a distributed constellation, synthesizing fragmented documents, conversations, and code into unified clarity.
            </p>

            {/* Actions: Primary Violet Pill + Ghost Link */}
            <div className="flex flex-wrap items-center gap-6">
              <button className="bg-[#8052ff] hover:bg-[#6c3cf5] text-white rounded-full px-8 py-4 text-[14px] font-semibold uppercase tracking-[0.025em] transition-all hover:scale-105 shadow-[0_0_25px_rgba(128,82,255,0.45)] cursor-pointer">
                Request Access
              </button>

              <a
                href="#demo"
                className="text-[#ffffff] hover:text-[#ffb829] text-[14px] font-normal transition-colors flex items-center gap-2 group cursor-pointer"
              >
                <span>Explore the Constellation</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform text-[#ffb829]" />
              </a>
            </div>
          </div>

          {/* Right Column: Hero Constellation Visualization */}
          <div className="lg:col-span-5 h-[450px] sm:h-[550px] lg:h-[620px] w-full flex items-center justify-center relative">
            <DalaConstellationCanvas />
          </div>
        </div>
      </section>

      {/* INTERACTIVE DEMO SECTION - Pure Black Floating Interface */}
      <section id="demo" className="w-full max-w-[1280px] mx-auto px-6 sm:px-10 py-24 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-left">
          
          <span className="text-[#ffb829] text-[14px] font-semibold uppercase tracking-[0.025em] block mb-3">
            INTERACTIVE KNOWLEDGE ENGINE
          </span>

          <h2 className="text-white font-normal text-[36px] sm:text-[48px] lg:text-[78px] leading-[1.0] tracking-[-0.04em] mb-6">
            Query your organizational matrix.
          </h2>

          <p className="text-[#bdbdbd] font-[200] text-[18px] leading-[1.5] mb-10 max-w-2xl">
            Type any question below or select a prompt to watch Dala synthesize real-time answers across thousands of enterprise node points.
          </p>

          {/* Floating Minimal Input on Black Canvas */}
          <div className="relative w-full mb-6">
            <div className="flex items-center gap-4 bg-transparent border-b border-white/30 focus-within:border-[#8052ff] py-4 transition-colors">
              <Search className="text-[#8052ff] w-6 h-6 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Ask Dala anything about your company's data..."
                className="w-full bg-transparent text-white font-[200] text-[20px] placeholder:text-[#9a9a9a] focus:outline-none"
              />
              <button
                onClick={() => handleSampleClick(searchQuery || sampleQuestions[0])}
                className="bg-[#8052ff] hover:bg-[#6c3cf5] text-white rounded-full px-5 py-2.5 text-[14px] font-semibold uppercase tracking-[0.025em] transition-all shrink-0 cursor-pointer"
              >
                Synthesize
              </button>
            </div>
          </div>

          {/* Sample Prompts (Ghost text links with amber highlight) */}
          <div className="flex flex-wrap items-center gap-3 mb-10">
            <span className="text-[#9a9a9a] text-[14px] font-normal">Try asking:</span>
            {sampleQuestions.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSampleClick(q)}
                className="text-[#9a9a9a] hover:text-[#ffb829] text-[14px] font-[200] underline underline-offset-4 transition-colors cursor-pointer"
              >
                "{q}"
              </button>
            ))}
          </div>

          {/* Animated Answer Result Floating on Canvas */}
          <AnimatePresence mode="wait">
            {isSearching && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="py-8 text-left flex items-center gap-3 text-[#ffb829]"
              >
                <div className="w-3 h-3 rounded-full bg-[#8052ff] animate-ping" />
                <span className="text-[15px] font-mono tracking-wide">Synthesizing enterprise node graph...</span>
              </motion.div>
            )}

            {searchAnswer && !isSearching && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="pt-6 pb-8 text-left border-l-2 border-[#8052ff] pl-6 my-6"
              >
                <span className="text-[#8052ff] text-[12px] font-semibold uppercase tracking-[0.025em] block mb-1">
                  SYNTHESIS COMPLETE — 99.4% CONFIDENCE
                </span>

                <h3 className="text-white text-[24px] font-normal tracking-[-0.48px] mb-3">
                  {searchAnswer.title}
                </h3>

                <p className="text-[#ffffff] font-[200] text-[18px] leading-[1.6] mb-6">
                  {searchAnswer.summary}
                </p>

                <div className="flex flex-wrap items-center gap-4 text-[14px] text-[#9a9a9a] font-[200]">
                  <span className="text-[#ffb829] font-normal">Connected Sources:</span>
                  {searchAnswer.sources.map((src, i) => (
                    <span key={i} className="bg-white/5 px-3 py-1 rounded-full text-white text-[12px]">
                      {src}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* SECTION HEADLINE BLOCK - Asymmetric Two-Column Layout */}
      <section id="manifesto" className="w-full max-w-[1280px] mx-auto px-6 sm:px-10 py-24 sm:py-36 border-t border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Oversized Left-Aligned Headline (78px) */}
          <div className="lg:col-span-7">
            <h2 className="text-white font-normal text-[42px] sm:text-[64px] lg:text-[78px] leading-[0.95] tracking-[-3.12px]">
              Knowledge visualized as distributed intelligence.
            </h2>
          </div>

          {/* Supporting Copy Right Side */}
          <div className="lg:col-span-5 pt-2">
            <span className="text-[#ffb829] text-[14px] font-semibold uppercase tracking-[0.025em] block mb-4">
              OUR MANIFESTO
            </span>

            <p className="text-[#ffffff] font-[200] text-[18px] leading-[1.6] mb-6">
              Traditional workplace search relies on rigid file hierarchies and keyword matches. Dala dismantles silos by mapping continuous relationships across teams, codebases, and conversations.
            </p>

            <p className="text-[#bdbdbd] font-[200] text-[18px] leading-[1.6]">
              Every document is a node. Every team member is a beacon. In the dark void of raw data, Dala illuminates exact answers instantly.
            </p>
          </div>
        </div>
      </section>

      {/* TEAM SECTION - Floating Member Cards on Pure Black Canvas */}
      <section id="team" className="w-full max-w-[1280px] mx-auto px-6 sm:px-10 py-24 border-t border-white/10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-[#ffb829] text-[14px] font-semibold uppercase tracking-[0.025em] block mb-2">
              THE ARCHITECTS
            </span>
            <h2 className="text-white font-normal text-[36px] sm:text-[48px] lg:text-[78px] leading-[1.0] tracking-[-3.12px]">
              Built by leaders in neural systems.
            </h2>
          </div>

          {/* Carousel Navigation Dots (Violet active state) */}
          <div className="flex items-center gap-2">
            {teamMembers.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTeamIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                  activeTeamIndex === idx
                    ? "bg-[#8052ff] w-6"
                    : "bg-white/30 hover:bg-white/60"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Floating Team Cards Grid (No borders, no cards, no background fills) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="flex flex-col text-left group">
              {/* Rounded Portrait (24px radius token) */}
              <div className="w-full aspect-[4/5] rounded-[24px] overflow-hidden mb-6 bg-white/5 relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
              </div>

              {/* Role label in 12px uppercase #8052ff */}
              <span className="text-[#8052ff] text-[12px] font-semibold uppercase tracking-[0.025em] block mb-1">
                {member.role}
              </span>

              {/* Name in large white display type */}
              <h3 className="text-white text-[27px] font-normal tracking-tight mb-2">
                {member.name}
              </h3>

              {/* Ultra-light body copy */}
              <p className="text-[#bdbdbd] font-[200] text-[15px] leading-[1.5]">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CORE PRINCIPLES - Pure Black Typography Grid */}
      <section id="principles" className="w-full max-w-[1280px] mx-auto px-6 sm:px-10 py-24 sm:py-36 border-t border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-4">
            <span className="text-[#ffb829] text-[14px] font-semibold uppercase tracking-[0.025em] block mb-3">
              DESIGN PHILOSOPHY
            </span>
            <h2 className="text-white font-normal text-[36px] sm:text-[48px] leading-[1.0] tracking-[-1.68px]">
              Stripped to pure clarity.
            </h2>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-12">
            <div>
              <span className="text-[#8052ff] text-[14px] font-semibold uppercase tracking-[0.025em] block mb-2">
                01. MONOLITHIC SCALE
              </span>
              <h4 className="text-white text-[24px] font-normal tracking-[-0.48px] mb-2">
                Scale Over Weight
              </h4>
              <p className="text-[#bdbdbd] font-[200] text-[18px] leading-[1.5]">
                Hierarchy is established through outsized typography (78–113px) set at regular weight 400 with negative tracking, avoiding heavy bold fills.
              </p>
            </div>

            <div>
              <span className="text-[#8052ff] text-[14px] font-semibold uppercase tracking-[0.025em] block mb-2">
                02. THE BLACK VOID
              </span>
              <h4 className="text-white text-[24px] font-normal tracking-[-0.48px] mb-2">
                No Containers
              </h4>
              <p className="text-[#bdbdbd] font-[200] text-[18px] leading-[1.5]">
                Components float freely on pure #000000 canvas. We remove borders, drop shadows, and gray background cards to preserve open space.
              </p>
            </div>

            <div>
              <span className="text-[#8052ff] text-[14px] font-semibold uppercase tracking-[0.025em] block mb-2">
                03. CHROMATIC TENSION
              </span>
              <h4 className="text-white text-[24px] font-normal tracking-[-0.48px] mb-2">
                Violet & Amber
              </h4>
              <p className="text-[#bdbdbd] font-[200] text-[18px] leading-[1.5]">
                Single saturated Electric Iris (#8052ff) pill button anchors action, paired with Saffron Spark (#ffb829) for targeted emphasis.
              </p>
            </div>

            <div>
              <span className="text-[#8052ff] text-[14px] font-semibold uppercase tracking-[0.025em] block mb-2">
                04. AIRY READING
              </span>
              <h4 className="text-white text-[24px] font-normal tracking-[-0.48px] mb-2">
                Ultra-Light Body
              </h4>
              <p className="text-[#bdbdbd] font-[200] text-[18px] leading-[1.5]">
                18px copy set at weight 200 delivers effortless reading rhythm without heavy visual density.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA - Pure Black Canvas CTA */}
      <section className="w-full max-w-[1280px] mx-auto px-6 sm:px-10 py-28 text-center border-t border-white/10">
        <span className="text-[#ffb829] text-[14px] font-semibold uppercase tracking-[0.025em] block mb-4">
          LIMITED ENTERPRISE ALPHA
        </span>

        <h2 className="text-white font-normal text-[48px] sm:text-[78px] lg:text-[104px] leading-[0.9] tracking-[-0.04em] mb-8 max-w-4xl mx-auto">
          Illuminate your workplace knowledge.
        </h2>

        <p className="text-[#bdbdbd] font-[200] text-[18px] leading-[1.6] max-w-xl mx-auto mb-10">
          Join leading technology teams already discovering answers at the speed of thought.
        </p>

        <div className="flex justify-center">
          <button className="bg-[#8052ff] hover:bg-[#6c3cf5] text-white rounded-full px-10 py-5 text-[14px] font-semibold uppercase tracking-[0.025em] transition-all hover:scale-105 shadow-[0_0_35px_rgba(128,82,255,0.5)] cursor-pointer">
            Request Enterprise Access
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full border-t border-white/10 py-12 px-6 sm:px-10 text-[14px] text-[#9a9a9a] font-[200]">
        <div className="max-w-[1280px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none">
              <polygon points="12,2 22,21 2,21" fill="url(#dalaLogoGrad)" />
            </svg>
            <span className="text-white font-normal">Dala Inc.</span>
            <span>&copy; 2026. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#manifesto" className="hover:text-white transition-colors">Manifesto</a>
            <a href="#demo" className="hover:text-white transition-colors">Engine</a>
            <a href="#team" className="hover:text-white transition-colors">Team</a>
            <a href="#privacy" className="hover:text-white transition-colors">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
