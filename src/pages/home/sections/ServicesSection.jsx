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
} from "lucide-react";

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

      </div>
    </section>
  );
}
