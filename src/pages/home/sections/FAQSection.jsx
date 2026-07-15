import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FAQS = [
  {
    q: "How do I get started with SyncTech?",
    a: "To get started, simply choose a plan that fits your needs and sign up. Our onboarding wizard will guide you through connecting your data sources and launching your first dashboard in minutes.",
  },
  {
    q: "Can I upgrade or downgrade my plan at any time?",
    a: "Yes, you can change your plan at any time from your billing dashboard. Upgrades are prorated immediately, while downgrades take effect at the end of your current billing cycle.",
  },
  {
    q: "What payment methods do you support?",
    a: "We support all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, Apple Pay, Google Pay, and bank transfers for enterprise accounts.",
  },
  {
    q: "Is my data secure with SyncTech?",
    a: "Absolutely. Security is our top priority. We employ industry-standard end-to-end encryption (AES-256) both in transit and at rest, alongside compliance with SOC2 Type II, GDPR, and HIPAA guidelines.",
  },
];

export default function FAQSection() {
  const [activeFaq, setActiveFaq] = useState(null);

  return (
    <section id="faq" className="py-24 border-t border-slate-900/60 max-w-4xl mx-auto px-6 relative overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />
        <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
        <p className="text-slate-400">Find answers to common questions about configuring your SyncTech platforms.</p>
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
                <span className={isOpen ? "text-cyan-400" : "text-white"}>{faq.q}</span>
                <ChevronDown
                  size={20}
                  className={`text-slate-400 transition-transform duration-300 ${isOpen ? "rotate-180 text-cyan-400" : ""}`}
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
                    <div className="px-6 pb-6 text-sm text-slate-400 leading-relaxed border-t border-slate-900/40 pt-4 bg-[#060910]/20">
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
