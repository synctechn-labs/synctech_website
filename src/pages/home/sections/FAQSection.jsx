import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FAQS = [
  {
    q: "What is custom software development?",
    a: "Custom software development is the process of designing, developing, and maintaining software built specifically for your business needs. Unlike off-the-shelf software, custom solutions are tailored to your workflows, business goals, and future growth. At SyncTechn, we develop scalable web applications, mobile apps, enterprise software, AI-powered solutions, and business automation platforms that help organizations improve efficiency and drive long-term success."
  },
  {
    q: "Why should I choose custom software instead of off-the-shelf software?",
    a: "Off-the-shelf software is built for a broad audience and often requires businesses to adapt their processes to the software. Custom software is designed around your unique requirements, allowing greater flexibility, seamless integrations, enhanced security, and better scalability. As your business evolves, your software can evolve with it."
  },
  {
    q: "What custom software development services does SyncTechn offer?",
    a: `SyncTechn provides end-to-end custom software development services, including:

• Custom Web Application Development
• Mobile App Development
• Enterprise Software Development
• AI & Machine Learning Solutions
• SaaS Product Development
• ERP & CRM Development
• Workflow Automation
• API Development & System Integrations
• Cloud-Based Software Solutions

Every solution is designed to align with your business objectives and operational requirements.`
  },
  {
    q: "How much does custom software development cost?",
    a: "The cost of custom software development depends on factors such as project scope, complexity, required features, integrations, technology stack, and timeline. After understanding your business requirements during our discovery phase, we provide a transparent proposal with a detailed project roadmap and pricing estimate tailored to your needs."
  },
  {
    q: "How long does it take to develop custom software?",
    a: "Development timelines vary based on the project's complexity and functionality. Small business applications can often be delivered within a few weeks, while larger enterprise solutions may take several months. Our structured development process ensures transparent milestones, regular progress updates, and timely delivery without compromising quality."
  },
  {
    q: "Can SyncTechn integrate custom software with our existing systems?",
    a: "Yes. We build software that integrates seamlessly with your existing business systems, including ERP platforms, CRM software, payment gateways, third-party APIs, cloud services, and internal databases. Our goal is to create a connected ecosystem that improves efficiency and reduces manual work."
  },
  {
    q: "Do you provide post-launch support and maintenance?",
    a: "Absolutely. Our relationship doesn't end after deployment. We provide ongoing maintenance, performance monitoring, security updates, bug fixes, feature enhancements, and technical support to ensure your software continues to perform reliably as your business grows."
  },
  {
    q: "Why choose SyncTechn as your custom software development company?",
    a: "At SyncTechn, we combine technical expertise with a business-first approach to build software that delivers measurable results. From strategy and planning to development, deployment, and ongoing support, our team focuses on creating secure, scalable, and future-ready digital solutions tailored to your organization's goals. Whether you're a startup, growing business, or enterprise, we work as your long-term technology partner."
  }
];

export default function FAQSection() {
  const [activeFaq, setActiveFaq] = useState(null);

  return (
    <section id="faq" className="py-24 border-t border-slate-900/60 max-w-4xl mx-auto px-6 relative overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />
      
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-6">
          Frequently Asked Questions About Custom Software Development
        </h2>
        <p className="text-slate-400 text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
          Have questions about our custom software development services? Here are answers to the most common questions businesses ask before starting a software development project with SyncTechn.
        </p>
      </div>

      <div className="space-y-4">
        {FAQS.map((faq, index) => {
          const isOpen = activeFaq === index;
          return (
            <div
              key={index}
              className={`rounded-2xl border transition-all duration-300 bg-slate-900/15 overflow-hidden ${
                isOpen ? "border-cyan-500/30 shadow-[0_0_20px_rgba(6,182,212,0.1)]" : "border-slate-800/80 hover:border-slate-700"
              }`}
            >
              <button
                onClick={() => setActiveFaq(isOpen ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left font-semibold text-white focus:outline-none transition-colors duration-300"
              >
                <span className={isOpen ? "text-cyan-400 text-base md:text-lg" : "text-white text-base md:text-lg"}>{faq.q}</span>
                <ChevronDown
                  size={20}
                  className={`text-slate-400 flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-cyan-400" : ""}`}
                />
              </button>
              
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-sm text-slate-400 leading-relaxed border-t border-slate-900/40 pt-4 bg-[#060910]/20 whitespace-pre-line">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
