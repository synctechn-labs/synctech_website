import React from "react";
import IndustryShowcase from "@/components/ui/industry-showcase";
import { Building2 } from "lucide-react";

export default function TeamShowcaseSection() {
  return (
    <section className="relative py-20 bg-[#060910] text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-blue-600/10 via-cyan-500/10 to-indigo-600/10 rounded-full blur-[140px] pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Building2 size={14} className="text-cyan-400" />
            Domain Expertise
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Industries We{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Transform
            </span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Tailored high-performance software architecture engineered for mission-critical verticals.
          </p>
        </div>

        {/* Industry Showcase Component */}
        <IndustryShowcase />
      </div>
    </section>
  );
}
