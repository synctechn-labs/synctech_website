import React, { useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { our360Services } from "../../data/our360Services";
import CarouselCard from "./CarouselCard";
import { ArrowLeft, ArrowRight } from "lucide-react";

const CarouselSection = ({ activeIndex, setActiveIndex, onVideoEnd }) => {
  const total = our360Services.length;
  const isFirstMount = useRef(true);

  useEffect(() => {
    isFirstMount.current = false;
  }, []);

  const handleNext = () => {
    if (setActiveIndex) {
      setActiveIndex(activeIndex === total - 1 ? 0 : activeIndex + 1);
    }
  };

  const handlePrev = () => {
    if (setActiveIndex) {
      setActiveIndex(activeIndex === 0 ? total - 1 : activeIndex - 1);
    }
  };

  return (
    <div className="relative w-full h-[85vh] lg:h-screen bg-[#050505] overflow-hidden flex flex-col items-center justify-center font-sans py-12">

      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* 3D Carousel Container */}
      <div
        className="relative w-full h-[60vh] lg:h-[70vh] flex items-center justify-center perspective-[2000px]"
        style={{ transformStyle: "preserve-3d" }}
      >
        <AnimatePresence mode="popLayout" initial={false}>
          {our360Services.map((service, index) => {
            const diff = index - activeIndex;
            // Handle looping visually for prev/next
            let normalizedDiff = diff;
            if (diff < -2) normalizedDiff += total;
            if (diff > 2) normalizedDiff -= total;

            const isActive = normalizedDiff === 0;

            // Only render active, prev, and next
            if (Math.abs(normalizedDiff) > 1) return null;

            // Compute transforms
            const xPercent = -50 + (normalizedDiff * 75);
            const zOffset = Math.abs(normalizedDiff) * -150;
            const rotateY = normalizedDiff * -35; // steeper angle
            const scale = isActive ? 1 : 0.65; // side cards are noticeably smaller
            const opacity = isActive ? 1 : 0.4;
            const initialX = isFirstMount.current ? `${xPercent}%` : (normalizedDiff > 0 ? "100%" : "-100%");

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: isFirstMount.current ? 1 : 0, x: initialX, z: zOffset, rotateY, scale: isFirstMount.current ? scale : 0.8 }}
                animate={{
                  opacity,
                  x: `${xPercent}%`,
                  z: zOffset,
                  rotateY,
                  scale
                }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1] }} // Slower, smoother easing
                className="absolute top-1/2 left-1/2 origin-center"
                style={{
                  width: "60vw", // Match the image's card width proportion
                  maxWidth: "1100px",
                  height: "65vh", // Match the image's card height proportion
                  maxHeight: "750px",
                  y: "-50%",
                  zIndex: 10 - Math.abs(normalizedDiff),
                }}
              >
                <CarouselCard
                  service={service}
                  isActive={isActive}
                  onVideoEnd={onVideoEnd}
                />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Bottom Controls (Matching the screenshot exactly) */}
      <div className="absolute bottom-12 lg:bottom-16 w-full flex justify-center z-50">
        <div className="flex items-center gap-4 lg:gap-8">
          {/* Prev Button */}
          <button
            onClick={handlePrev}
            className="w-12 h-12 lg:w-14 lg:h-14 bg-white hover:bg-slate-200 rounded-full flex items-center justify-center text-slate-900 transition-colors focus:outline-none"
            aria-label="Previous Service"
          >
            <ArrowLeft className="w-5 h-5 lg:w-6 lg:h-6" />
          </button>

          {/* Center CTA */}
          <button
            className="px-6 py-3 lg:px-8 lg:py-4 border border-white/30 hover:border-white/60 hover:bg-white/5 rounded-full text-white text-xs lg:text-sm font-bold tracking-widest transition-all backdrop-blur-sm"
          >
            TELL US WHAT YOU'RE LOOKING FOR
          </button>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="w-12 h-12 lg:w-14 lg:h-14 bg-white hover:bg-slate-200 rounded-full flex items-center justify-center text-slate-900 transition-colors focus:outline-none"
            aria-label="Next Service"
          >
            <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6" />
          </button>
        </div>
      </div>

    </div>
  );
};

export default CarouselSection;
