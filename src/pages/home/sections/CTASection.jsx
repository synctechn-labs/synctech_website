import React from "react";

export default function CTASection() {
  return (
    <section id="contact" className="py-24 border-t border-slate-900 bg-[#060910]/40 relative overflow-hidden">
      {/* High-tech vector grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-cyan-500/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
          Ready to scale your insights?
        </h2>
        <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto mb-10">
          Join thousands of developers and tech-stacks leveraging SyncTech. Configure and launch your first AI dashboard for free.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/contact-us"
            className="glass-button-glow w-full sm:w-auto px-8 py-3.5 text-white text-sm font-semibold flex items-center justify-center"
          >
            Get Started Now
          </a>
          <a
            href="mailto:contact@synctech.com"
            className="glass-button-simple w-full sm:w-auto px-8 py-3.5 text-slate-300 hover:text-white text-sm font-semibold flex items-center justify-center"
          >
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
}
