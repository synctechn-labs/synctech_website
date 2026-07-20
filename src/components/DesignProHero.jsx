import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * ShinyText Component
 * Animates a white shining light sweeping continuously across light-blue text.
 */
export function ShinyText({
  text,
  disabled = false,
  speed = 3,
  className = "",
}) {
  const animationProps = disabled
    ? {}
    : {
        animate: {
          backgroundPosition: ["200% 0%", "-200% 0%"],
        },
        transition: {
          repeat: Infinity,
          duration: speed,
          ease: "linear",
        },
      };

  return (
    <motion.span
      className={cn("inline-block bg-clip-text text-transparent select-none", className)}
      style={{
        backgroundImage:
          "linear-gradient(100deg, #64CEFB 0%, #64CEFB 35%, #ffffff 50%, #64CEFB 65%, #64CEFB 100%)",
        backgroundSize: "200% 100%",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
      {...animationProps}
    >
      {text}
    </motion.span>
  );
}

export default function DesignProHero() {
  return (
    <section className="relative w-full h-screen min-h-[700px] bg-black font-sans text-white overflow-hidden flex flex-col justify-between select-none">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-80"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_105406_16f4600d-7a92-4292-b96e-b19156c7830a.mp4"
      />

      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/40 backdrop-brightness-90 z-[1]" />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col justify-between h-full w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        
        {/* Top Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start lg:items-center mt-4 sm:mt-6">
          {/* Left column */}
          <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-xl">
            We deliver transformative programs that empower emerging product designers with cutting-edge expertise and vision to thrive globally.
          </p>

          {/* Right column */}
          <p className="text-white/80 text-sm md:text-base font-medium lg:text-right">
            8000+ Talented Designers Launched !
          </p>
        </div>

        {/* Center Hero Section */}
        <div className="flex-1 flex flex-col justify-center items-center text-center py-8">
          {/* Subheading tag */}
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white/80 text-xs md:text-sm uppercase tracking-tight font-medium mb-3 sm:mb-5 block"
          >
            Seats for Next Program Opening Soon
          </motion.span>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl sm:text-7xl md:text-8xl xl:text-9xl font-bold tracking-tighter leading-[0.85] flex flex-col items-center justify-center gap-1 sm:gap-2"
          >
            <span className="text-white font-medium">Become</span>
            <ShinyText text="Product Leader." speed={3} />
          </motion.h1>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 sm:mt-12"
          >
            <a
              href="#apply"
              className="group inline-flex items-center gap-3 bg-black hover:bg-gray-900 text-white font-medium rounded-full px-6 md:px-8 py-3 md:py-4 border border-white/20 shadow-2xl transition-all duration-300 hover:border-white/40 cursor-pointer"
            >
              <span>Apply for Next Enrollment</span>
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1.5 transition-transform duration-300 text-white/90"
              />
            </a>
          </motion.div>
        </div>

        {/* Empty bottom element for flex spacing alignment */}
        <div className="h-2 hidden sm:block" />
      </div>
    </section>
  );
}
