import React from "react";
import { Reveal } from "../../../components/Reveal";
import {
  SearchCheck,
  ClipboardCheck,
  Code2,
  ShieldCheck,
  Rocket,
} from "lucide-react";

export const PROCESS_STEPS = [
  {
    icon: SearchCheck,
    title: "Discovery & Requirement Analysis",
    desc: "We begin by understanding your business objectives, workflows, and technical requirements to define a clear roadmap for successful software development.",
  },
  {
    icon: ClipboardCheck,
    title: "Planning & Solution Architecture",
    desc: "Our team designs the software architecture, selects the right technology stack, and creates a scalable development plan tailored to your business.",
  },
  {
    icon: Code2,
    title: "Design & Development",
    desc: "We build secure, high-performance web applications, mobile apps, enterprise software, and AI-powered solutions using modern development practices.",
  },
  {
    icon: ShieldCheck,
    title: "Testing & Quality Assurance",
    desc: "Every feature is thoroughly tested to ensure reliability, security, performance, and a seamless user experience across all supported platforms.",
  },
  {
    icon: Rocket,
    title: "Deployment & Ongoing Support",
    desc: "After launch, we monitor performance, provide continuous maintenance, release updates, and help your software evolve as your business grows.",
  },
];

const Operations = () => {
  return (
    <>
      <section id="process" className="relative py-32 bg-gradient-to-b from-[#060910] to-[#060910]/40 overflow-hidden border-t border-slate-900/60">
        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-950/10 blur-[140px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          {/* Header */}
          <Reveal>
            <div className="max-w-5xl mx-auto text-center mb-24">
              <span
                className="
                  inline-flex
                  items-center
                  px-5
                  py-2
                  rounded-full
                  bg-blue-500/10
                  border
                  border-blue-500/30
                  text-blue-400
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  mb-6
                "
              >
                OUR DEVELOPMENT PROCESS
              </span>

              <h2
                className="
                  text-4xl
                  md:text-5xl
                  lg:text-6xl
                  font-bold
                  text-white
                  leading-tight
                  mb-6
                "
              >
                Our Proven{" "}
                <span className="block bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Custom Software Development Process
                </span>
              </h2>

              <p className="mt-4 text-base md:text-lg text-slate-500 leading-relaxed max-w-4xl mx-auto">
                Every successful project starts with a structured approach. Our custom software development process focuses on understanding your business goals, building scalable solutions, and delivering secure, high-quality software through transparent collaboration and agile development practices.
              </p>
            </div>
          </Reveal>

          {/* PROCESS FLOW */}
          <div className="relative max-w-7xl mx-auto">
            {/* Background Glow */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-950/20 blur-[120px] rounded-full" />
            </div>

            {/* Desktop Connection Line */}
            <div className="hidden lg:block absolute top-[45%] left-0 right-0 z-0">
              <div className="relative h-[2px] bg-slate-800">
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-r
                    from-blue-600
                    via-cyan-500
                    to-blue-600
                    animate-pulse
                  "
                />
              </div>
            </div>

            <div className="grid lg:grid-cols-5 gap-8 relative z-10">
              {PROCESS_STEPS.map((step, index) => {
                const Icon = step.icon;

                return (
                  <Reveal key={index} delay={index * 150}>
                    <div
                      className={`
                        relative
                        group
                        ${index % 2 === 1 ? "lg:translate-y-20" : ""}
                      `}
                    >
                      {/* Card */}
                      <div
                        className="
                          relative
                          overflow-hidden
                          bg-slate-950/40
                          backdrop-blur-xl
                          border
                          border-white/[0.06]
                          rounded-3xl
                          p-8
                          shadow-[0_20px_40px_rgba(0,0,0,0.3)]
                          hover:-translate-y-4
                          hover:border-blue-500/30
                          hover:shadow-[0_20px_40px_rgba(59,130,246,0.15)]
                          transition-all
                          duration-500
                          min-h-[300px]
                        "
                      >
                        {/* Hover Gradient */}
                        <div
                          className="
                            absolute
                            inset-0
                            bg-gradient-to-br
                            from-blue-500/5
                            via-transparent
                            to-cyan-500/5
                            opacity-0
                            group-hover:opacity-100
                            transition-opacity
                            duration-500
                          "
                        />

                        {/* Icon */}
                        <div
                          className="
                            relative
                            z-10
                            w-16
                            h-16
                            rounded-2xl
                            bg-gradient-to-br
                            from-blue-600
                            to-cyan-500
                            flex
                            items-center
                            justify-center
                            shadow-lg
                            mb-6
                            group-hover:scale-110
                            group-hover:rotate-6
                            transition-all
                            duration-500
                          "
                        >
                          <Icon className="w-8 h-8 text-white" />
                        </div>

                        {/* Title */}
                        <h3
                          className="
                            relative
                            z-10
                            text-xl
                            font-bold
                            text-white
                            mb-4
                            group-hover:text-cyan-400
                            transition-colors
                          "
                        >
                          {step.title}
                        </h3>

                        {/* Description */}
                        <p
                          className="
                            relative
                            z-10
                            text-slate-400
                            leading-relaxed
                            text-sm
                          "
                        >
                          {step.desc}
                        </p>

                        {/* Bottom Line */}
                        <div
                          className="
                            absolute
                            bottom-0
                            left-0
                            h-1
                            w-0
                            bg-gradient-to-r
                            from-blue-600
                            to-cyan-500
                            group-hover:w-full
                            transition-all
                            duration-500
                          "
                        />
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Operations;
