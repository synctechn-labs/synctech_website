import React from "react";
import { Briefcase, Sliders, Layers, RefreshCw, ShieldCheck, Handshake } from "lucide-react";
import { Reveal } from "../../../components/Reveal";

const WHY_US_DATA = [
  {
    icon: Briefcase,
    title: "Business-First Approach",
    desc: "Every project begins with understanding your business goals, challenges, and users. We develop software that solves real problems and creates measurable business value."
  },
  {
    icon: Sliders,
    title: "Tailored Software Solutions",
    desc: "No two businesses are the same. Our custom software is designed specifically for your workflows, operational needs, and future growth instead of relying on one-size-fits-all solutions."
  },
  {
    icon: Layers,
    title: "Scalable & Future-Ready Architecture",
    desc: "We build software with scalability in mind, ensuring your applications can support increasing users, evolving features, and changing business requirements without costly rebuilds."
  },
  {
    icon: RefreshCw,
    title: "Agile & Transparent Development",
    desc: "Our agile development process keeps you involved throughout the project with regular updates, milestone reviews, and clear communication from planning to deployment."
  },
  {
    icon: ShieldCheck,
    title: "Security & Quality Assurance",
    desc: "Security and reliability are built into every stage of development. We follow industry best practices, rigorous testing, and quality assurance processes to deliver dependable software."
  },
  {
    icon: Handshake,
    title: "Long-Term Technology Partner",
    desc: "Our commitment continues after launch. We provide ongoing maintenance, performance optimization, feature enhancements, and technical support to help your software evolve alongside your business."
  }
];

export default function WhyUs() {
  return (
    <section id="why-us" className="relative py-28 bg-[#060910] overflow-hidden font-sans border-t border-slate-900/60">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        {/* Header */}
        <Reveal>
          <div className="text-center max-w-5xl mx-auto mb-20">
            <span className="inline-flex items-center px-5 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-semibold uppercase tracking-[0.25em] mb-6">
              WHY CHOOSE SYNCTECHN
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
              Why Choose SyncTechn
            </h2>
            <p className="mt-4 text-base md:text-lg text-slate-400 max-w-4xl mx-auto leading-relaxed">
              Choosing the right custom software development company is about more than writing code—it's about finding a technology partner who understands your business. At SyncTechn, we combine strategic thinking, modern engineering, and agile development to deliver custom software development services that are secure, scalable, and built for long-term success. From startups to enterprises, we create digital solutions that help businesses innovate, automate, and grow with confidence.
            </p>
          </div>
        </Reveal>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_US_DATA.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={index} delay={index * 100}>
                <div className="group relative rounded-[28px] border border-white/[0.08] bg-[#0c121e]/40 p-6 flex flex-col justify-between shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:border-blue-500/30 hover:shadow-[0_20px_40px_rgba(59,130,246,0.1)] hover:-translate-y-2 transition-all duration-500 min-h-[260px]">
                  <div>
                    {/* Icon container */}
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center mb-6 shadow-md shadow-blue-500/10 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  {/* Bottom Line Border on hover */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-blue-600 to-cyan-500 group-hover:w-full transition-all duration-500 rounded-b-[28px]" />
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
