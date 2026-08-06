import React from "react";
import { Check } from "lucide-react";

const PLANS = [
  {
    name: "Basic plan",
    price: "$49",
    desc: "Lorem ipsum dolor sit amet consectetur metus massa et amet cursus sit semper justo.",
    features: ["Access to basic features", "Basic reporting and analytics", "Up to 10 individual users", "20GB data each user", "Basic chat and email support"],
    highlighted: false,
    btnClass: "glass-button-simple",
    checkColor: "text-blue-500",
  },
  {
    name: "Professional plan",
    price: "$99",
    desc: "Ideal for growing engineering teams and mid-sized web businesses.",
    features: ["Access to premium features", "Advanced reporting and charts", "Up to 100 individual users", "100GB data each user", "24/7 dedicated chat support"],
    highlighted: true,
    btnClass: "glass-button-glow",
    checkColor: "text-blue-400",
    badge: "Best Value",
  },
  {
    name: "Enterprise plan",
    price: "$149",
    desc: "Custom configurations and full SLA integrations for large-scale operations.",
    features: ["Unlimited system integrations", "Enterprise security credentials", "Unlimited seat allocation", "Custom API endpoint metrics", "Dedicated account manager 24/7"],
    highlighted: false,
    btnClass: "glass-button-simple",
    checkColor: "text-blue-500",
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 border-t border-slate-900/60">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Pricing Plans for Success</h2>
          <p className="text-slate-400 text-lg">
            Discover the perfect plan for your project with SyncTech. <br />
            Our tiers are built to give developers and teams optimal scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {PLANS.map((plan, i) => (
            <div
              key={i}
              className={`glass-card-wrapper group ${plan.highlighted ? "border-blue-500 border-2 shadow-[0_0_40px_rgba(59,130,246,0.2)]" : ""}`}
            >
              <div className="glass-card p-8 flex flex-col justify-between relative">
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-blue-500 text-white text-[11px] font-black uppercase tracking-widest shadow-md">
                    {plan.badge}
                  </div>
                )}
                <div>
                  <div className={`text-sm font-semibold mb-6 ${plan.highlighted ? "text-blue-400 mt-2" : "text-slate-400"}`}>
                    {plan.name}
                  </div>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-4xl font-extrabold text-white">{plan.price}</span>
                    <span className="text-slate-500 text-sm">/mo</span>
                  </div>
                  <p className={`text-xs mb-8 leading-relaxed ${plan.highlighted ? "text-slate-400" : "text-slate-500"}`}>
                    {plan.desc}
                  </p>
                  <div className="h-px bg-slate-800/50 mb-8" />
                  <ul className="space-y-4">
                    {plan.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-3">
                        <Check size={16} className={plan.checkColor} />
                        <span className={`text-sm ${plan.highlighted ? "text-slate-200" : "text-slate-300"}`}>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button className={`${plan.btnClass} w-full mt-8 py-3 text-white font-semibold text-sm flex items-center justify-center`}>
                  Get started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
