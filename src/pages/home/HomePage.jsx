import React from "react";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Features from "./sections/Features";
import Services from "./sections/Services";
import WhyUs from "./sections/WhyUs";
import IndustriesSection from "./sections/IndustriesSection";
import Operations from "./sections/Operations";
import EnterpriseTechStack from "./sections/EnterpriseTechStack";
import Support from "./sections/Support";

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Features />
      <Services />
      <WhyUs />
      <IndustriesSection />
      <Operations />
      <EnterpriseTechStack />
      <Support />
    </>
  );
}

export default HomePage;
