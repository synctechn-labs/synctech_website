import React from "react";
import { motion } from "framer-motion";
import {
  BrainCircuit,
  Wand2,
  Bot,
  Layers,
  ScanEye,
  Cloud,
  Code2,
  Zap,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Check
} from "lucide-react";

// ---- Configuration Flag ----
// Set to true to use the custom code & telemetry widgets, or false to use the original template images.
const USE_CUSTOM_WIDGETS = false;

const tintBlueStyle = { filter: "hue-rotate(200deg) saturate(130%)" };

// ---- Custom Widget UIs matching the FeaturesGrid design system & App.jsx ----

// Card 1: Web Development & Custom Software IDE Mockup
const WebDevWidget = () => (
  <div className="relative mt-6 rounded-xl border border-white/[0.06] bg-slate-950/60 backdrop-blur-md overflow-hidden text-left font-mono text-[11px] leading-relaxed shadow-2xl">
    <div className="flex items-center gap-1.5 px-4 py-2 border-b border-white/[0.06] bg-white/[0.02]">
      <div className="w-2 h-2 rounded-full bg-red-500/60" />
      <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
      <div className="w-2 h-2 rounded-full bg-green-500/60" />
      <span className="text-[10px] text-slate-500 ml-2">App.jsx</span>
    </div>
    <div className="p-4 text-slate-400 space-y-1">
      <div><span className="text-purple-400">import</span> WebDevelopment <span className="text-purple-400">from</span> <span className="text-emerald-400">"./pages/services/WebDevelopment"</span>;</div>
      <div><span className="text-purple-400">import</span> MicroSaaSDevelopment <span className="text-purple-400">from</span> <span className="text-emerald-400">"./pages/services/MicroSaaSDevelopment"</span>;</div>
      <div className="text-slate-500">// Configure enterprise services router</div>
      <div><span className="text-purple-400">const</span> <span className="text-blue-400">webRoutes</span> = [</div>
      <div className="pl-4">&#123; path: <span className="text-emerald-400">"/web-development"</span>, element: &lt;<span className="text-blue-400">WebDevelopment</span> /&gt; &#125;,</div>
      <div className="pl-4">&#123; path: <span className="text-emerald-400">"/micro-saas-development"</span>, element: &lt;<span className="text-blue-400">MicroSaaSDevelopment</span> /&gt; &#125;</div>
      <div>];</div>
      <div className="pt-2 flex items-center gap-2 text-emerald-400 font-sans font-semibold border-t border-white/[0.04]">
        <span>&gt; Route loading optimized. SSR rendering ready.</span>
        <span className="w-1.5 h-3 bg-emerald-400 animate-pulse inline-block" />
      </div>
    </div>
  </div>
);

// Card 2: Cloud Integration, API & Telemetry Mockup
const CloudAPIWidget = () => (
  <div className="relative mt-6 p-4 rounded-xl border border-white/[0.06] bg-slate-950/40 backdrop-blur-md overflow-hidden font-mono text-[11px] text-slate-400">
    <div className="flex justify-between items-center mb-3">
      <span className="font-semibold text-slate-300">API System Integration Hub</span>
      <div className="flex items-center gap-1">
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
        <span className="text-[9px] text-cyan-400">Active Bridges</span>
      </div>
    </div>
    <div className="space-y-1.5 font-mono text-[9px] mb-3">
      <div className="flex justify-between text-slate-500">
        <span>$ GET /api-development-integration</span>
        <span>12:38:43</span>
      </div>
      <div className="text-slate-300 pl-2">&gt; Syncing CRM database -&gt; [Hubspot & Salesforce]</div>
      <div className="text-slate-300 pl-2">&gt; Mapping client-customer-portal-development API ... [SUCCESS]</div>
    </div>
    <div className="grid grid-cols-2 gap-3 mb-2">
      <div className="p-2 rounded bg-white/[0.02] border border-white/[0.04]">
        <div className="text-[9px] text-slate-500">Latency</div>
        <div className="text-sm font-bold text-white mt-1">12ms</div>
      </div>
      <div className="p-2 rounded bg-white/[0.02] border border-white/[0.04]">
        <div className="text-[9px] text-slate-500">Sync Status</div>
        <div className="text-sm font-bold text-cyan-400 mt-1">100% Online</div>
      </div>
    </div>
    {/* SVG Wave representation */}
    <div className="w-full h-8 flex items-center justify-center bg-white/[0.01] rounded border border-white/[0.03] overflow-hidden">
      <svg className="w-full h-full text-cyan-500/50" viewBox="0 0 100 20" preserveAspectRatio="none">
         <path d="M0,10 Q15,4 30,12 T60,5 T90,14 T100,10" fill="none" stroke="currentColor" strokeWidth="1.5" className="animate-pulse" />
      </svg>
    </div>
  </div>
);

// Card 3: AI Agents & LLM Processing Mockup
const AIWidget = () => (
  <div className="relative mt-6 p-4 rounded-xl border border-white/[0.06] bg-slate-950/40 backdrop-blur-md overflow-hidden font-mono text-[11px] text-slate-400">
    <div className="flex justify-between items-center mb-3">
      <span className="font-semibold text-slate-300">Agentic AI Workflow Run</span>
      <div className="flex items-center gap-1.5">
        <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
        <span className="text-[10px] text-cyan-400 font-bold">Active Agent</span>
      </div>
    </div>
    <div className="space-y-1.5 text-[9px] mb-3">
      <div className="text-slate-500">Task: Analyze and reply to support email</div>
      <div className="text-cyan-400 font-semibold">&gt; Understanding intent ... [SUPPORT_REQUEST]</div>
      <div className="text-slate-300">&gt; Retrieving context from vector DB ... [Success]</div>
      <div className="text-emerald-400 font-semibold">&gt; Drafting reply using LLM API ... [Complete]</div>
    </div>
    <div className="p-2.5 rounded bg-white/[0.02] border border-white/[0.04] text-[10px] text-slate-300">
      <span className="text-cyan-400 font-bold">Processing Confidence:</span> 98.4%
    </div>
  </div>
);

export default function ServicesSection() {
  const services = [
    {
      id: "ai",
      title: "Artificial Intelligence",
      icon: BrainCircuit,
      description:
        "AI only creates value when it fits into how an organization actually works. We help enterprises apply intelligence in ways that improve decisions, reduce manual effort, and support operations at scale.",
    },
    {
      id: "gen-ai",
      title: "Generative AI",
      icon: Wand2,
      description:
        "Gen AI is most useful when it becomes part of everyday work. We integrate it into internal knowledge systems, customer interactions, and operational tools, with the controls and governance enterprises expect.",
    },
    {
      id: "agentic-ai",
      title: "Agentic AI",
      icon: Bot,
      description:
        "We work with organizations exploring autonomous systems, helping them introduce AI agents that can take action across processes while remaining transparent, supervised, and accountable.",
    },
    {
      id: "machine-learning",
      title: "Machine Learning",
      icon: Layers,
      description:
        "ML in enterprise environments is less about experimentation and more about reliability. We develop models that adapt over time and continue to perform as data, demand, and conditions change.",
    },
    {
      id: "computer-vision",
      title: "Computer Vision",
      icon: ScanEye,
      description:
        "In environments where speed and accuracy matter, vision-based systems can remove friction. We apply computer vision to automate inspection, monitoring, and visual analysis across real operational settings.",
    },
    {
      id: "cloud",
      title: "Cloud",
      icon: Cloud,
      description:
        "Cloud modernization is not a lift-and-shift exercise. We help enterprises rethink how applications and infrastructure are structured so systems remain secure, resilient, and ready to scale over time.",
    },
    {
      id: "custom-software",
      title: "Custom Software",
      icon: Code2,
      description:
        "We build resilient custom software systems designed around your unique operational logic, replacing legacy friction with modern, scalable web and mobile infrastructure.",
    },
    {
      id: "workflow-automation",
      title: "Workflow Automation",
      icon: Zap,
      description:
        "Eliminate manual handoffs and repetitive tasks. We design end-to-end event-driven workflow engines that operate seamlessly in the background with full operational visibility.",
    },
    {
      id: "cyber-security",
      title: "Cybersecurity & Governance",
      icon: ShieldCheck,
      description:
        "Protect your enterprise data assets with zero-trust security architecture, strict access controls, and continuous automated vulnerability monitoring.",
    },
  ];

  return (
    <section id="services" className="relative py-24 sm:py-32 bg-[#060910] text-white overflow-hidden">
      {/* Subtle background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-blue-600/10 via-cyan-500/10 to-indigo-600/10 rounded-full blur-[160px] pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        {/* <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-5">
            <Sparkles size={14} className="text-cyan-400 animate-pulse" />
            Capabilities & Services
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-5">
            Enterprise Technology{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Capabilities
            </span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            We partner with forward-thinking organizations to build intelligent systems, scalable cloud infrastructure, and autonomous AI applications.
          </p>
        </div> */}

        {/* 3-Column Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => {
            const IconComponent = service.icon;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                className="group relative rounded-2xl border border-white/[0.08] bg-slate-950/40 p-7 sm:p-9 transition-all duration-300 hover:border-cyan-500/30 hover:bg-slate-950/90 shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col justify-between"
              >
                <div>
                  {/* Service Icon */}
                  <div className="mb-6 inline-flex items-center justify-center text-cyan-400 transition-transform duration-300 group-hover:scale-110">
                    <IconComponent size={26} strokeWidth={1.75} />
                  </div>

                  {/* Service Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>

                  {/* Service Description */}
                  <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-normal">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Detailed Service Block 1 */}
        <div id="service-web" className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32 scroll-mt-24">
          <div>
            <h3 className="text-3xl font-bold text-white mb-6 leading-tight">
              Custom Software & Enterprise Web Development
            </h3>
            <p className="text-slate-400 mb-8 leading-relaxed">
              We design and engineer bespoke, high-performance web applications and custom software solutions 
              designed for speed, security, and scalability. Utilizing modern front-end and back-end frameworks, 
              we build robust solutions that optimize workflows and drive customer engagement.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Tailored web applications built with React, Next.js, Node.js, and Python.",
                "Search engine optimized (SEO) structures designed to maximize organic visibility.",
                "Clean, maintainable, and modular codebases matching strict industry standards."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center mt-1">
                    <Check size={14} className="text-blue-400" />
                  </div>
                  <span className="text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
            <a href="#pricing" className="glass-button-simple inline-flex items-center gap-2 px-5 py-3 text-white text-sm font-semibold">
              Explore Plans <ArrowRight size={16} />
            </a>
          </div>
          <div className="relative rounded-2xl border border-slate-800/80 bg-[#060910] p-2 shadow-[0_0_40px_rgba(59,130,246,0.1)]">
            {USE_CUSTOM_WIDGETS ? (
              <WebDevWidget />
            ) : (
              <img
                src="https://cdn.prod.website-files.com/673c8623b53e085c22dcde7d/673ca401ef8e7fd09ba9f4fa_Feature%20Image%2001.jpg"
                alt="Custom Software and Web Development Services"
                style={tintBlueStyle}
                className="w-full h-auto rounded-xl border border-slate-900"
              />
            )}
          </div>
        </div>

        {/* Detailed Service Block 2 (reversed) */}
        <div id="service-crm" className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32 scroll-mt-24">
          <div className="order-2 lg:order-1 relative rounded-2xl border border-slate-800/80 bg-[#060910] p-2 shadow-[0_0_40px_rgba(59,130,246,0.1)]">
            {USE_CUSTOM_WIDGETS ? (
              <CloudAPIWidget />
            ) : (
              <img
                src="https://cdn.prod.website-files.com/673c8623b53e085c22dcde7d/673ca401d0386358ecf73562_Feature%20Image%2002.jpg"
                alt="Cloud Infrastructure and API Integration Services"
                style={tintBlueStyle}
                className="w-full h-auto rounded-xl border border-slate-900"
              />
            )}
          </div>
          <div className="order-1 lg:order-2">
            <h3 className="text-3xl font-bold text-white mb-6 leading-tight">
              Cloud Infrastructure, API & CRM Integration
            </h3>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Streamline operations and eliminate data silos with seamless cloud architectures, scalable databases, 
              and robust API integrations. We connect your custom CRM, ERP, and payment systems while ensuring 
              99.99% uptime, data synchronization, and automated backup lifecycle.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Reliable cloud engineering, server performance tuning, and database optimization.",
                "Secure RESTful/GraphQL API development and smooth CRM platform integrations.",
                "Continuous integration & deployment (CI/CD) pipelines with automated unit testing."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mt-1">
                    <Check size={14} className="text-cyan-400" />
                  </div>
                  <span className="text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
            <a href="#pricing" className="glass-button-simple inline-flex items-center gap-2 px-5 py-3 text-white text-sm font-semibold">
              Explore Plans <ArrowRight size={16} />
            </a>
          </div>
        </div>

        {/* Detailed Service Block 3 */}
        <div id="service-ai" className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center scroll-mt-24">
          <div>
            <h3 className="text-3xl font-bold text-white mb-6 leading-tight">
              Generative AI & Autonomous Agentic Workflows
            </h3>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Supercharge productivity and automate complex business processes with custom Generative AI applications, large language models (LLMs), and autonomous AI agents. We build secure, production-ready AI pipelines tailored to your operations.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Autonomous AI agents that plan, execute, and monitor multi-step business workflows.",
                "Custom LLM fine-tuning and secure integration with RAG databases.",
                "AI document verification, automated email dispatch, and business intelligence."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center mt-1">
                    <Check size={14} className="text-blue-400" />
                  </div>
                  <span className="text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
            <a href="/services/ai-solutions" className="glass-button-glow inline-flex items-center gap-2 px-5 py-3 text-white text-sm font-semibold">
              Explore AI Solutions <ArrowRight size={16} />
            </a>
          </div>
          <div className="relative rounded-2xl border border-slate-800/80 bg-[#060910] p-2 shadow-[0_0_40px_rgba(59,130,246,0.1)]">
            {USE_CUSTOM_WIDGETS ? (
              <AIWidget />
            ) : (
              <img
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80"
                alt="Generative AI and Agentic Solutions"
                style={tintBlueStyle}
                className="w-full h-auto rounded-xl border border-slate-900"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
