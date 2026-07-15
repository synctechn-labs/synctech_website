import React from "react";
import { ArrowRight, Check } from "lucide-react";
import { SERVICES } from "../../../constants";
import { Reveal } from "../../../components/Reveal";

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

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-[#060910] to-[#060910]/40 relative overflow-hidden border-t border-slate-900/60">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-slate-400 text-lg">
            Accelerate your business growth with custom software solutions, high-performance web applications, 
            and scalable cloud architectures engineered for digital transformation.
          </p>
        </div>

        {/* Desktop Wave Services */}
        <div className="hidden lg:block relative h-[600px] w-full m-auto mb-28">
          {/* SVG Wave */}
          <svg
            className="absolute inset-0 w-full h-full overflow-visible pointer-events-none"
            preserveAspectRatio="none"
            viewBox="0 0 1200 600"
          >
            <defs>
              <linearGradient
                id="serviceGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.05" />
                <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.05" />
              </linearGradient>
            </defs>

            <path
              d="M0,300 Q150,600 300,300 T600,300 T900,300 T1200,300"
              fill="none"
              stroke="url(#serviceGradient)"
              strokeWidth="2"
              className="opacity-80"
            />
          </svg>

          {/* Service Nodes */}
          {SERVICES.map((service, index) => {
            const positions = [
              { left: "12.5%", top: "450px" },
              { left: "37.5%", top: "150px" },
              { left: "62.5%", top: "450px" },
              { left: "87.5%", top: "150px" },
            ];
            const pos = positions[index] || { left: "0", top: "0" };
            const isTop = parseInt(pos.top) < 300;
            const ServiceIcon = service.icon;

            return (
              <div
                key={service.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 group w-64 flex flex-col items-center"
                style={{ left: pos.left, top: pos.top }}
              >
                <Reveal delay={index * 150}>
                  <a
                    href={`#service-${service.id}`}
                    className="flex flex-col items-center group/item relative"
                  >
                    {/* Hexagon */}
                    <div
                      className="
                        relative
                        w-28
                        h-28
                        flex
                        items-center
                        justify-center
                        transition-all
                        duration-500
                        group-hover/item:scale-110
                        group-hover/item:-translate-y-2
                        cursor-pointer
                        z-20
                      "
                    >
                      {/* Glow */}
                      <div
                        className="
                          absolute
                          inset-0
                          rounded-full
                          bg-blue-500/0
                          blur-2xl
                          transition-all
                          duration-500
                          group-hover/item:bg-blue-500/20
                        "
                      />

                      <div className="absolute inset-0 bg-slate-900 border border-white/[0.08] clip-path-hexagon shadow-[0_0_20px_rgba(59,130,246,0.1)]" />

                      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-slate-900 to-cyan-950/20 clip-path-hexagon" />

                      <ServiceIcon
                        className="
                          relative
                          z-10
                          text-cyan-400
                          group-hover/item:text-white
                          transition-colors
                        "
                        size={40}
                      />

                      {/* Number */}
                      <span
                        className="
                          absolute
                          text-[160px]
                          font-black
                          text-white/[0.02]
                          transition-all
                          duration-500
                          group-hover/item:text-blue-500/10
                          group-hover/item:scale-110
                          -z-10
                          select-none
                          pointer-events-none
                          leading-none
                        "
                        style={{ [isTop ? "bottom" : "top"]: "-150px" }}
                      >
                        {index + 1}
                      </span>

                      <div
                        className={`
                          absolute left-1/2 -translate-x-1/2
                          w-3 h-3 rounded-full bg-cyan-500
                          animate-pulse
                          ${isTop ? "-bottom-5" : "-top-5"}
                        `}
                      />
                    </div>

                    {/* Content */}
                    <div
                      className={`
                        absolute w-72 text-center
                        transition-all duration-500
                        z-30
                        ${isTop ? "top-32" : "bottom-32"}
                      `}
                    >
                      <h3
                        className="
                          text-2xl
                          font-extrabold
                          tracking-tight
                          mb-3
                          transition-all
                          duration-300
                        "
                      >
                        {service.title}
                      </h3>

                      <p className="text-slate-400 leading-relaxed text-xs max-w-[240px] mx-auto">
                        {service.shortDesc}
                      </p>
                    </div>
                  </a>
                </Reveal>
              </div>
            );
          })}
        </div>

        {/* Mobile Vertical List */}
        <div className="lg:hidden space-y-8 mb-24 relative pl-8 border-l border-slate-800 ml-4">
          {SERVICES.map((service, index) => {
            const ServiceIcon = service.icon;
            return (
              <Reveal key={service.id} delay={index * 100}>
                <a
                  href={`#service-${service.id}`}
                  className="block relative pl-6 group"
                >
                  <div className="absolute -left-[41px] top-0 w-10 h-10 bg-slate-900 border border-white/[0.08] rounded-full flex items-center justify-center shadow-sm group-hover:border-cyan-500/40 transition-all">
                    <ServiceIcon size={18} className="text-cyan-400" />
                  </div>
                  <span className="text-6xl font-bold text-white/[0.02] absolute -top-8 right-0 -z-10">
                    0{index + 1}
                  </span>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    {service.shortDesc}
                  </p>
                </a>
              </Reveal>
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
        <div id="service-crm" className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center scroll-mt-24">
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

      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
            .clip-path-hexagon {
              clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
            }
          `,
        }}
      />
    </section>
  );
}
