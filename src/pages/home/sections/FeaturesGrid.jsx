import React from "react";
import { useScrollReveal } from "../../../hooks/useScrollReveal";

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

const FEATURES = [
  {
    tag: "Our Purpose",
    tagColor: "blue",
    title: "Empowering Growth",
    description: "We align advanced technical expertise with strategic business goals to create high-performing custom software, reliable CRM integrations, and optimized data ecosystems.",
    widget: GrowthChartWidget,
    imgTop: false,
  },
  {
    tag: "Elite Engineering",
    tagColor: "cyan",
    title: "Expert Development",
    description: "Our developers build using modern stacks (React, Next.js, Node.js, Python) to deploy high-availability platforms engineered for scale and speed.",
    widget: CodeIDEWidget,
    imgTop: false,
  },
  {
    tag: "Agile Methodology",
    tagColor: "blue",
    title: "Result-Driven Execution",
    description: "From architecture mapping to production release, our sprints combine transparent milestones, automated unit testing, and rigorous QA.",
    widget: SprintKanbanWidget,
    imgTop: true,
  },
  {
    tag: "Client Focus",
    tagColor: "cyan",
    title: "Dedicated Integration",
    description: "We integrate directly with your product lifecycle, delivering proactive 24/7 technical monitoring, database tuning, and API updates.",
    widget: SystemStatusWidget,
    imgTop: false,
  },
];

function FeatureCard({ feature }) {
  const tagClass = feature.tagColor === "blue"
    ? "bg-blue-500/10 border-blue-500/20 text-blue-400"
    : "bg-cyan-500/10 border-cyan-500/20 text-cyan-400";

  const Widget = feature.widget;

  return (
    <div className="relative rounded-[28px] border border-white/[0.08] bg-slate-900/10 p-1.5 transition-all duration-500 hover:border-cyan-500/30 hover:shadow-[0_20px_50px_rgba(6,182,212,0.08)] hover:scale-[1.01] min-h-[380px] group">
      <div className="bg-slate-950/40 border border-white/[0.04] rounded-[22px] p-8 flex flex-col justify-between h-full">
        {feature.imgTop && (
          <div className="relative mb-6">
            <Widget />
          </div>
        )}

        <div className={feature.imgTop ? "relative z-10" : ""}>
          <span className={`text-xs font-semibold px-3 py-1 rounded-full border mb-4 inline-block ${tagClass}`}>
            {feature.tag}
          </span>
          <h3 className="text-2xl font-bold text-white mb-2">{feature.title}</h3>
          <p className="text-slate-400 text-sm max-w-md">{feature.description}</p>
        </div>

        {!feature.imgTop && (
          <div className="relative mt-4">
            <Widget />
          </div>
        )}
      </div>
    </div>
  );
}

export default function FeaturesGrid() {
  const [revealRef, revealClass] = useScrollReveal();

  return (
    <section id="about" className="py-24 max-w-7xl mx-auto px-6 relative overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="relative z-10">
        {/* About Section Header */}
        <div ref={revealRef} className={`text-center max-w-3xl mx-auto mb-20 overflow-hidden ${revealClass}`}>
          {/* <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-4 inline-block tracking-widest uppercase">
            About SyncTech
          </span> */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <ScrollTypingText text="Driving Digital Transformation" />
          </h2>
          <p className={`text-slate-400 text-base md:text-lg transition-all duration-1000 delay-500 transform ${revealClass === "revealed" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}>
            We are a premier software development partner dedicated to scaling enterprises through custom web architectures, cloud engineering, and custom CRM solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {FEATURES.map((f, i) => (
            <FeatureCard key={i} feature={f} />
          ))}
        </div>
      </div>
    </section>
  );
}
