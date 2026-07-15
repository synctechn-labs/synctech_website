import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

const tintBlueStyle = { filter: "hue-rotate(200deg) saturate(130%)" };

export default function DemoHero() {
  const [translateY, setTranslateY] = useState(0);
  const [circleRotation, setCircleRotation] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      const translateValue = window.scrollY * 0.24;
      setTranslateY(translateValue);
      const maxScroll = 600;
      const rotation = Math.min(45, (window.scrollY / maxScroll) * 45);
      setCircleRotation(rotation);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative pt-20 pb-16 overflow-hidden">
      {/* Diagonal Light Rays */}
      <div className="light-wrapper">
        <div className="lights-holder">
          <div className="light-ray left" />
          <div className="light-ray" />
          <div className="light-ray right" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 max-w-4xl mx-auto leading-[1.1]">
          Intelligent Solutions <br />
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Powered by AI.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Gain clarity and harness the power of your data with SyncTech. <br className="hidden md:inline" />
          Our intuitive dashboard provides real-time analytics.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="/services"
            className="glass-button-simple w-full sm:w-auto px-8 py-3.5 text-white text-sm font-semibold flex items-center justify-center gap-2"
          >
            Explore Services
            <ArrowRight size={16} className="text-blue-400" />
          </a>
          <a
            href="/contact-us"
            className="glass-button-glow w-full sm:w-auto px-8 py-3.5 text-white text-sm font-semibold flex items-center justify-center gap-2"
          >
            Book a Demo
            <ArrowRight size={16} />
          </a>
        </div>

        {/* Metallic Circle */}
        <div className="relative max-w-5xl mx-auto mt-10">
          <div className="absolute -bottom-40 md:-bottom-72 left-1/2 -translate-x-1/2 w-[110%] max-w-[1100px] h-[300px] md:h-[450px] -z-10 pointer-events-none">
            <div
              style={{
                transform: `translate3d(0, ${translateY}px, 0) scale(${mounted ? 1 : 0.7})`,
                opacity: mounted ? 0.8 : 0,
                transition: "opacity 1.2s ease-out, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
              className="w-full h-full relative"
            >
              <img
                src="https://cdn.prod.website-files.com/673c8623b53e085c22dcde7d/673c8790c213543ea74788a0_Red%20Circle%20No%20Glow.png"
                alt=""
                style={{ ...tintBlueStyle, transform: `rotate(${circleRotation}deg)`, transformOrigin: "50% 50%", transition: "transform 0.3s ease-out" }}
                className="w-full h-auto object-cover"
              />
              <img
                src="https://cdn.prod.website-files.com/673c8623b53e085c22dcde7d/673c87ad03ca3526725241f9_Red%20Glow.png"
                alt=""
                style={{ ...tintBlueStyle, transform: `rotate(${circleRotation}deg)`, transformOrigin: "50% 50%", transition: "transform 0.3s ease-out" }}
                className="absolute top-0 left-0 w-full h-auto object-cover opacity-75 mix-blend-screen blur-md"
              />
              <img
                src="https://cdn.prod.website-files.com/673c8623b53e085c22dcde7d/673c878ff9abee9c378d3e76_Glow.png"
                alt=""
                style={{ ...tintBlueStyle, transform: `rotate(${circleRotation}deg)`, transformOrigin: "50% 50%", transition: "transform 0.3s ease-out" }}
                className="absolute top-0 left-0 w-full h-auto object-cover opacity-55 mix-blend-screen"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
