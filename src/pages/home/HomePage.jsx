import React from "react";

// ---- Demo-style section components ----
import DemoHero from "./sections/DemoHero";
import MosaicVideoSection from "./sections/MosaicVideoSection";
import TechStackMarquee from "./sections/TechStackMarquee";
import FeaturesGrid from "./sections/FeaturesGrid";
import ServicesSection from "./sections/ServicesSection";
import ShowcaseCarouselSection from "./sections/ShowcaseCarouselSection";
import DesignProHero from "../../components/DesignProHero";
import ZoomParallaxSection from "./sections/ZoomParallaxSection";
// import IndustriesSection from "./sections/IndustriesSection";
import Operations from "./sections/Operations";
// import EnterpriseTechStack from "./sections/EnterpriseTechStack";
import TeamShowcaseSection from "./sections/TeamShowcaseSection";
import LayeredTextSection from "./sections/LayeredTextSection";
import FAQSection from "./sections/FAQSection";
import BlogSection from "./sections/BlogSection";
import CTASection from "./sections/CTASection";

// ---- Old sections (commented out, not removed) ----
// import Hero from "./sections/Hero";
// import About from "./sections/About";
// import Features from "./sections/Features";
// import Services from "./sections/Services";
// import WhyUs from "./sections/WhyUs";
// import IndustriesSection from "./sections/IndustriesSection";
// import Operations from "./sections/Operations";
// import EnterpriseTechStack from "./sections/EnterpriseTechStack";
// import Support from "./sections/Support";

// Inline light-ray + glass-card styles that mirror DemoPage's CustomStyles
const HomePageStyles = () => (
  <style dangerouslySetInnerHTML={{
    __html: `
    /* Diagonal light rays */
    .light-wrapper {
      opacity: 0.74;
      justify-content: center;
      align-items: center;
      display: flex;
      position: absolute;
      inset: 0%;
      overflow: hidden;
      pointer-events: none;
      z-index: 0;
    }
    .lights-holder {
      grid-column-gap: 70px;
      opacity: 0.35;
      justify-content: center;
      align-items: flex-start;
      width: 100%;
      height: 100%;
      display: flex;
      position: relative;
      top: -217px;
      left: -129px;
      transform: rotate(-30deg);
    }
    .light-ray {
      opacity: 0.4;
      filter: blur(18px);
      background-image: linear-gradient(#ffffff 5%, rgba(255,255,255,0) 67%);
      width: 180px;
      height: 1000px;
    }
    .light-ray.left { opacity: 0.1; filter: blur(9px); width: 110px; }
    .light-ray.right { opacity: 0.3; filter: blur(16px); width: 110px; }

    /* Glass cards (features / pricing) */
    .glass-card-wrapper {
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 28px;
      padding: 6px;
      transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
      background-color: transparent;
      height: 100%;
    }
    .glass-card-wrapper:hover {
      padding: 0;
      border-radius: 25px;
      border-color: rgba(59,130,246,0.25);
    }
    .glass-card {
      background-color: rgba(33,33,33,0.3);
      box-shadow: inset 0 -9px 24px rgba(59,130,246,0.18);
      border-radius: 24px;
      height: 100%;
      transition: border-radius 0.5s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .glass-card-wrapper:hover .glass-card { border-radius: 25px; }

    /* Marquee */
    @keyframes marquee {
      0%   { transform: translateX(0%); }
      100% { transform: translateX(-50%); }
    }
    .animate-marquee {
      display: flex;
      width: max-content;
      animation: marquee 30s linear infinite;
    }
    .animate-marquee:hover { animation-play-state: paused; }
  `}} />
);

function HomePage() {
  return (
    <div className="min-h-screen bg-[#060910] text-slate-100 selection:bg-blue-600/30 selection:text-white font-sans relative overflow-x-clip">
      <HomePageStyles />

      {/* Background Glowing Orbs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[140px] -z-10 animate-pulse" style={{ animationDuration: "8s" }} />
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] -z-10 animate-pulse" style={{ animationDuration: "12s" }} />
      <div className="absolute bottom-20 left-1/3 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[160px] -z-10" />

      {/* ---- Sections (exact DemoPage order) ---- */}
      <DemoHero />
      <MosaicVideoSection />
      <TechStackMarquee />
      <ZoomParallaxSection />
      <ServicesSection />
      {/* <ShowcaseCarouselSection /> */}
      <DesignProHero />
      <Operations />
      <LayeredTextSection />
      {/* <IndustriesSection /> */}
      {/* <EnterpriseTechStack /> */}
      <TeamShowcaseSection />
      <FAQSection />
      {/* <BlogSection /> */}
      <CTASection />
    </div>
  );
}

export default HomePage;
