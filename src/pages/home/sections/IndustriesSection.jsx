import React, { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Reveal } from "../../../components/Reveal";

/* ==================================================
   INTERACTIVE DASHBOARD MOCKUPS (Front Faces)
================================================== */

// 1. Healthcare & MedTech
const HospitalDashboard = () => (
  <div className="relative w-full h-[180px] bg-slate-950/60 border border-white/5 rounded-xl p-3.5 font-mono text-[9px] text-slate-400 overflow-hidden">
    <div className="flex justify-between items-center border-b border-white/5 pb-2 mb-2">
      <span className="text-white font-bold">MedTech ERP v1.0</span>
      <span className="text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded font-bold animate-pulse">Live</span>
    </div>
    <div className="grid grid-cols-3 gap-2 mb-2">
      <div className="bg-white/5 p-1.5 rounded border border-white/[0.03]">
        <div className="text-slate-500 text-[8px]">Patients</div>
        <div className="text-xs font-bold text-white mt-0.5">142</div>
      </div>
      <div className="bg-white/5 p-1.5 rounded border border-white/[0.03]">
        <div className="text-slate-500 text-[8px]">Occupancy</div>
        <div className="text-xs font-bold text-cyan-400 mt-0.5">84%</div>
      </div>
      <div className="bg-white/5 p-1.5 rounded border border-white/[0.03]">
        <div className="text-slate-500 text-[8px]">Doctors</div>
        <div className="text-xs font-bold text-white mt-0.5">18</div>
      </div>
    </div>
    <div className="space-y-1.5">
      <div className="flex justify-between items-center bg-white/[0.02] p-1 rounded border border-white/[0.04]">
        <span className="text-slate-300">Appointment: Dr. Mehta</span>
        <span className="text-cyan-400">10:30 AM</span>
      </div>
      <div className="flex justify-between items-center bg-white/[0.02] p-1 rounded border border-white/[0.04]">
        <span className="text-slate-300">Lab Result Sync</span>
        <span className="text-emerald-400 font-bold">Verified</span>
      </div>
    </div>
  </div>
);

// 2. FinTech & Banking
const BankingDashboard = () => (
  <div className="relative w-full h-[180px] bg-slate-950/60 border border-white/5 rounded-xl p-3.5 font-mono text-[9px] text-slate-400 overflow-hidden">
    <div className="flex justify-between items-center border-b border-white/5 pb-2 mb-2">
      <span className="text-white font-bold">FinTech Gateway</span>
      <span className="text-emerald-400 font-bold bg-emerald-500/10 px-1.5 py-0.5 rounded">Secure</span>
    </div>
    <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg p-2 text-white mb-2 relative overflow-hidden">
      <div className="text-[7px] opacity-70">MAIN WALLET</div>
      <div className="text-sm font-bold mt-0.5">$148,290.45</div>
      <div className="text-[8px] mt-2 tracking-widest">**** **** **** 8824</div>
    </div>
    <div className="space-y-1 text-[8px]">
      <div className="flex justify-between text-slate-300">
        <span>Card Verification API</span>
        <span className="text-emerald-400">SUCCESS</span>
      </div>
      <div className="flex justify-between text-slate-300">
        <span>Fraud Monitor Scan</span>
        <span className="text-cyan-400">0 Alerts</span>
      </div>
    </div>
  </div>
);

// 3. E-Commerce & Retail
const RetailDashboard = () => (
  <div className="relative w-full h-[180px] bg-slate-950/60 border border-white/5 rounded-xl p-3.5 font-mono text-[9px] text-slate-400 overflow-hidden">
    <div className="flex justify-between items-center border-b border-white/5 pb-2 mb-2">
      <span className="text-white font-bold">Retail Analytics</span>
      <span className="text-cyan-400 bg-cyan-500/10 px-1.5 py-0.5 rounded font-bold">Sales Live</span>
    </div>
    <div className="grid grid-cols-2 gap-2 mb-2">
      <div className="bg-white/5 p-2 rounded border border-white/[0.03]">
        <div className="text-[7px] text-slate-500">Orders Today</div>
        <div className="text-sm font-bold text-white mt-0.5">1,204</div>
      </div>
      <div className="bg-white/5 p-2 rounded border border-white/[0.03]">
        <div className="text-[7px] text-slate-500">Inventory Status</div>
        <div className="text-sm font-bold text-amber-400 mt-0.5">Low Stock (4)</div>
      </div>
    </div>
    <div className="flex gap-1.5 items-end h-8 pt-1">
      <div className="bg-blue-500/30 w-full h-[30%]" />
      <div className="bg-blue-500/40 w-full h-[55%]" />
      <div className="bg-blue-500/50 w-full h-[70%]" />
      <div className="bg-cyan-500/70 w-full h-[90%] shadow-[0_0_10px_rgba(6,182,212,0.4)]" />
    </div>
  </div>
);

// 4. Logistics & Supply Chain
const LogisticsDashboard = () => (
  <div className="relative w-full h-[180px] bg-slate-950/60 border border-white/5 rounded-xl p-3.5 font-mono text-[9px] text-slate-400 overflow-hidden">
    <div className="flex justify-between items-center border-b border-white/5 pb-2 mb-2">
      <span className="text-white font-bold">Logistics Command</span>
      <span className="text-cyan-400 bg-cyan-500/10 px-1.5 py-0.5 rounded font-bold">GPS Active</span>
    </div>
    <div className="p-2 rounded bg-white/5 border border-white/[0.03] mb-2 text-[8px] flex items-center justify-between">
      <div>
        <div className="text-slate-500">Active Fleet</div>
        <div className="text-xs font-bold text-white mt-0.5">34 In Route</div>
      </div>
      <div className="text-right">
        <div className="text-slate-500">Route Efficiency</div>
        <div className="text-xs font-bold text-cyan-400 mt-0.5">98.2%</div>
      </div>
    </div>
    <div className="w-full h-12 flex items-center justify-center bg-white/[0.01] rounded border border-white/[0.03] relative overflow-hidden">
      <div className="absolute top-1/2 left-4 w-2 h-2 rounded-full bg-blue-500 animate-ping" />
      <div className="absolute top-1/2 right-4 w-2 h-2 rounded-full bg-cyan-400" />
      <svg className="w-full h-full text-cyan-500/30" viewBox="0 0 100 20" preserveAspectRatio="none">
        <path d="M15,10 Q50,0 85,10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
      </svg>
    </div>
  </div>
);

// 5. AI & SaaS
const SaasDashboard = () => (
  <div className="relative w-full h-[180px] bg-slate-950/60 border border-white/5 rounded-xl p-3.5 font-mono text-[9px] text-slate-400 overflow-hidden">
    <div className="flex justify-between items-center border-b border-white/5 pb-2 mb-2">
      <span className="text-white font-bold">AI SaaS Console</span>
      <span className="text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded font-bold">Online</span>
    </div>
    <div className="space-y-1 mb-2">
      <div className="text-[7px] text-slate-500">Pipeline Exec:</div>
      <div className="text-cyan-400 font-bold">&gt; Initializing agent execution ...</div>
      <div className="text-slate-300">&gt; Prompt tokens: 1,402 | Output: 409</div>
    </div>
    <div className="grid grid-cols-2 gap-2 mt-2">
      <div className="p-1 bg-white/5 rounded text-[8px]">
        <div className="text-slate-500">MRR Growth</div>
        <div className="text-xs font-bold text-white">+$12,490</div>
      </div>
      <div className="p-1 bg-white/5 rounded text-[8px]">
        <div className="text-slate-500">API Churn</div>
        <div className="text-xs font-bold text-emerald-400">0.8%</div>
      </div>
    </div>
  </div>
);

// 6. Education & E-Learning
const LMSDashboard = () => (
  <div className="relative w-full h-[180px] bg-slate-950/60 border border-white/5 rounded-xl p-3.5 font-mono text-[9px] text-slate-400 overflow-hidden">
    <div className="flex justify-between items-center border-b border-white/5 pb-2 mb-2">
      <span className="text-white font-bold">LMS Student Portal</span>
      <span className="text-cyan-400 bg-cyan-500/10 px-1.5 py-0.5 rounded font-bold">Sync Active</span>
    </div>
    <div className="space-y-2">
      <div>
        <div className="flex justify-between text-[8px] mb-1">
          <span>Python Course Progress</span>
          <span className="text-cyan-400">82%</span>
        </div>
        <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
          <div className="bg-cyan-500 h-full rounded-full" style={{ width: "82%" }} />
        </div>
      </div>
      <div className="flex justify-between items-center bg-white/[0.02] p-1.5 rounded border border-white/[0.04] text-[8px]">
        <span className="text-slate-300">Upcoming Exam: Machine Learning</span>
        <span className="text-amber-400">Tomorrow</span>
      </div>
    </div>
  </div>
);

/* ==================================================
   DATA CONFIG
================================================== */

const INDUSTRIES_DATA = [
  {
    title: "Healthcare & MedTech",
    desc: "We build secure healthcare platforms that improve patient care, streamline operations, and ensure compliance.",
    solutions: [
      "Hospital Management Systems",
      "Electronic Health Records (EHR)",
      "Telemedicine Platforms",
      "Patient Portals",
      "Appointment & Billing Systems"
    ],
    widget: HospitalDashboard,
  },
  {
    title: "FinTech & Banking",
    desc: "Secure financial software built for modern banking, digital payments, and financial operations.",
    solutions: [
      "Digital Banking Platforms",
      "Payment Gateways",
      "Loan Management Systems",
      "Fraud Detection",
      "Financial Analytics"
    ],
    widget: BankingDashboard,
  },
  {
    title: "E-Commerce & Retail",
    desc: "Create seamless shopping experiences with scalable retail and e-commerce platforms.",
    solutions: [
      "Online Marketplace Development",
      "Inventory Management",
      "Order Management",
      "Customer Loyalty Systems",
      "Retail Analytics"
    ],
    widget: RetailDashboard,
  },
  {
    title: "Logistics & Supply Chain",
    desc: "Improve operational efficiency with intelligent logistics and warehouse management solutions.",
    solutions: [
      "Fleet Tracking",
      "Warehouse Management",
      "Route Optimization",
      "Inventory Tracking",
      "Delivery Management"
    ],
    widget: LogisticsDashboard,
  },
  {
    title: "AI & SaaS",
    desc: "Build intelligent SaaS platforms powered by automation and scalable cloud infrastructure.",
    solutions: [
      "SaaS Product Development",
      "AI Assistants",
      "Workflow Automation",
      "Multi-Tenant Platforms",
      "Analytics Dashboards"
    ],
    widget: SaasDashboard,
  },
  {
    title: "Education & E-Learning",
    desc: "Deliver engaging digital learning experiences with scalable education platforms.",
    solutions: [
      "Learning Management Systems",
      "Student Portals",
      "Online Assessments",
      "Virtual Classrooms",
      "Certification Platforms"
    ],
    widget: LMSDashboard,
  },
];

/* ==================================================
   CARD DESIGN
================================================== */

function IndustryCard({ industry, index }) {
  const Widget = industry.widget;
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="w-full h-[400px] perspective-1000 cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front Side */}
        <div className="absolute inset-0 bg-[#060910]/40 backdrop-blur-xl border border-white/[0.06] rounded-[32px] p-6 flex flex-col justify-between shadow-[0_20px_40px_rgba(0,0,0,0.3)] backface-hidden">
          <div className="relative w-full">
            <Widget />
          </div>
          <div className="mt-4">
            <h3 className="text-2xl font-bold text-white tracking-tight mb-2">
              {industry.title}
            </h3>
            <p className="text-[11px] text-cyan-400 font-semibold tracking-wider uppercase flex items-center gap-1.5">
              Hover to view solutions <span className="animate-pulse">&rarr;</span>
            </p>
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 bg-[#0c121e]/90 backdrop-blur-xl border border-blue-500/20 rounded-[32px] p-6 flex flex-col justify-between shadow-[0_20px_40px_rgba(59,130,246,0.1)] rotate-y-180 backface-hidden">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">
              {industry.title}
            </h3>
            <p className="text-slate-400 text-xs leading-relaxed mb-4">
              {industry.desc}
            </p>
            <div className="border-t border-white/5 pt-3">
              <span className="text-[9px] uppercase tracking-widest text-slate-500 font-bold block mb-2">
                Solutions
              </span>
              <ul className="space-y-2">
                {industry.solutions.map((sol, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 size={13} className="text-blue-400 flex-shrink-0" />
                    <span>{sol}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-white/5 pt-3 flex items-center justify-between">
            <span className="text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1 cursor-pointer">
              Explore Solutions &rarr;
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ==================================================
   MAIN SECTION COMPONENT
================================================== */

export default function IndustriesSection() {
  return (
    <section
      id="industries"
      className="relative py-28 bg-gradient-to-b from-[#060910]/40 to-[#060910] overflow-hidden font-sans border-t border-slate-900/60"
    >
      <div className="relative max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <Reveal>
          <div className="text-center max-w-5xl mx-auto mb-20">
            <span className="inline-flex items-center px-5 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-semibold uppercase tracking-[0.25em] mb-6">
              INDUSTRY EXPERTISE
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
              Industries We Serve with Custom Software Development
            </h2>
            <p className="mt-4 text-base md:text-lg text-slate-400 max-w-4xl mx-auto leading-relaxed">
              We deliver custom software development services tailored to the unique challenges of different industries. From healthcare and fintech to logistics and e-commerce, we build secure, scalable, and future-ready software that drives business growth.
            </p>
          </div>
        </Reveal>

        {/* 3D Flip Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INDUSTRIES_DATA.map((industry, index) => (
            <Reveal key={index} delay={index * 120}>
              <IndustryCard industry={industry} index={index} />
            </Reveal>
          ))}
        </div>
      </div>

      {/* Global CSS Helper for Flipping & 3D Transitions */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .perspective-1000 {
              perspective: 1000px;
            }
            .backface-hidden {
              backface-visibility: hidden;
              -webkit-backface-visibility: hidden;
            }
            .rotate-y-180 {
              transform: rotateY(180deg);
            }
            .transform-style-3d {
              transform-style: preserve-3d;
            }
          `,
        }}
      />
    </section>
  );
}
