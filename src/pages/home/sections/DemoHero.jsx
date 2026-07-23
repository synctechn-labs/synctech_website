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
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-4 max-w-5xl mx-auto leading-[1.1]">
          Custom Software Development Company <br />
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            for Modern Businesses
          </span>
        </h1>

        {/* Highlighted text (below H1 in small size) */}
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs md:text-sm font-bold tracking-wider mb-8">
          Scalable Software. Smarter Growth.
        </div>

        {/* Description */}
        <p className="text-base md:text-lg text-slate-400 max-w-4xl mx-auto mb-10 leading-relaxed">
          Transform your ideas into scalable digital products with a trusted custom software development company. We provide custom software development services, including web applications, mobile apps, AI-powered solutions, and enterprise software tailored to your business goals. As a reliable software development agency, we build secure, high-performance solutions that streamline operations, improve efficiency, and support long-term growth.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="/contact-us"
            className="glass-button-glow w-full sm:w-auto px-8 py-3.5 text-white text-sm font-semibold flex items-center justify-center gap-2"
          >
            Get a Free Consultation
            <ArrowRight size={16} />
          </a>
          <a
            href="/services"
            className="glass-button-simple w-full sm:w-auto px-8 py-3.5 text-white text-sm font-semibold flex items-center justify-center gap-2"
          >
            Explore Our Services
            <ArrowRight size={16} className="text-blue-400" />
          </a>
        </div>

        {/* Small Trust Line */}
        <div className="text-xs md:text-sm text-slate-400 font-semibold tracking-wider mb-12 max-w-3xl mx-auto border-t border-white/5 pt-6 flex flex-wrap justify-center items-center gap-x-4 gap-y-2 opacity-85">
          <span>Custom Software Development</span>
          <span className="text-blue-400">•</span>
          <span>AI Solutions</span>
          <span className="text-blue-400">•</span>
          <span>Web Applications</span>
          <span className="text-blue-400">•</span>
          <span>Mobile Apps</span>
          <span className="text-blue-400">•</span>
          <span>Business Automation</span>
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
                src="/red_circle_no_glow.png"
                alt=""
                style={{ ...tintBlueStyle, transform: `rotate(${circleRotation}deg)`, transformOrigin: "50% 50%", transition: "transform 0.3s ease-out" }}
                className="w-full h-auto object-cover"
              />
              <img
                src="/red_glow.png"
                alt=""
                style={{ ...tintBlueStyle, transform: `rotate(${circleRotation}deg)`, transformOrigin: "50% 50%", transition: "transform 0.3s ease-out" }}
                className="absolute top-0 left-0 w-full h-auto object-cover opacity-75 mix-blend-screen blur-md"
              />
              <img
                src="/glow.png"
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
