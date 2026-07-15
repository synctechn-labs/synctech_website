import React, { useState, useRef } from "react";
import CarouselSection from "./CarouselSection";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { useGSAP } from "@gsap/react";
import { motion, AnimatePresence } from "motion/react";
import { our360Services } from "../../data/our360Services";

gsap.registerPlugin(ScrollTrigger, Observer);

const introVariants = {
  initial: { opacity: 0, scale: 0.9, y: 50 },
  animate: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  exit: { opacity: 0, scale: 1.5, filter: "blur(10px)", transition: { duration: 0.8, ease: "easeIn" } }
};

const carouselWrapperVariants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1, transition: { duration: 1, delay: 0.3, ease: "easeOut" } },
  exit: { opacity: 0, scale: 0.8, transition: { duration: 0.8, ease: "easeIn" } }
};

const Our360 = () => {
  const containerRef = useRef(null);
  // -1 represents Intro Screen. 0 to 5 represents Carousel Cards.
  const [activeIndex, setActiveIndex] = useState(-1);
  const activeIndexRef = useRef(-1);
  const isAnimatingRef = useRef(false);
  const totalServices = our360Services.length;
  const stRef = useRef(null);

  const updateIndex = (newIndex) => {
    activeIndexRef.current = newIndex;
    setActiveIndex(newIndex);
  };

  const handleVideoEnd = () => {
    if (!stRef.current) return;
    const st = stRef.current;

    // Smoothly scroll to the start of the next section
    const nextIndex = activeIndexRef.current + 1;
    if (nextIndex <= 5) {
      let nextProgress = 0;
      if (nextIndex === 0) nextProgress = 0.11;
      else if (nextIndex === 1) nextProgress = 0.26;
      else if (nextIndex === 2) nextProgress = 0.41;
      else if (nextIndex === 3) nextProgress = 0.56;
      else if (nextIndex === 4) nextProgress = 0.71;
      else if (nextIndex === 5) nextProgress = 0.86;

      const nextScroll = st.start + (st.end - st.start) * nextProgress;
      window.scrollTo({ top: nextScroll, behavior: 'smooth' });
    } else {
      // If the last video finishes, smoothly scroll past the 360 section
      window.scrollTo({ top: st.end + 10, behavior: 'smooth' });
    }
  };

  useGSAP(() => {
    stRef.current = ScrollTrigger.create({
      trigger: containerRef.current,
      pin: true,
      start: "top top",
      end: "+=4000", // Large scroll area to naturally cycle through all cards
      scrub: 1.5, // 1.5s delay for butter-smooth manual scrubbing
      onUpdate: (self) => {
        const p = self.progress;
        let newIndex = -1;

        if (p < 0.1) newIndex = -1; // 0% - 10%: Intro Screen
        else if (p < 0.25) newIndex = 0; // 10% - 25%: Card 1
        else if (p < 0.40) newIndex = 1; // 25% - 40%: Card 2
        else if (p < 0.55) newIndex = 2; // 40% - 55%: Card 3
        else if (p < 0.70) newIndex = 3; // 55% - 70%: Card 4
        else if (p < 0.85) newIndex = 4; // 70% - 85%: Card 5
        else newIndex = 5;               // 85% - 100%: Card 6

        // Only update React state if the index actually changed
        if (newIndex !== activeIndexRef.current) {
          updateIndex(newIndex);
        }
      }
    });
  }, { dependencies: [] });

  return (
    <section ref={containerRef} className="w-full h-screen relative bg-[#050505] overflow-hidden flex items-center justify-center">

      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none z-0" />

      <AnimatePresence mode="wait">
        {activeIndex === -1 ? (
          /* Intro Screen */
          <motion.div
            key="intro"
            variants={introVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute inset-0 flex flex-col items-center justify-center bg-transparent z-20 pointer-events-none"
          >
            {/* The main typographic lockup */}
            <div className="relative flex items-center justify-center mt-[-10vh]">

              {/* "our" - Cursive script */}
              <div
                className="absolute top-[5%] md:top-[10%] -left-[5%] md:-left-[10%] text-5xl md:text-7xl lg:text-[110px] z-10 gradient-text"
                style={{
                  fontFamily: "'Brush Script MT', 'Caveat', 'Great Vibes', cursive",
                  transform: "rotate(-8deg)",
                  textShadow: "0 10px 30px rgba(0,0,0,0.5)"
                }}
              >
                our
              </div>

              {/* "360°" - Giant ultra-tall condensed text */}
              <div
                className="text-white font-black leading-none select-none relative z-0"
                style={{
                  fontSize: "clamp(8rem, 22vw, 22rem)",
                  transform: "scaleY(1.3)",
                  letterSpacing: "-0.04em"
                }}
              >
                360°
              </div>

              {/* "growth engine" - Cursive script */}
              <div
                className="absolute bottom-[5%] md:bottom-[10%] -right-[5%] md:-right-[10%] text-5xl md:text-7xl lg:text-[110px] z-10 gradient-text leading-none flex flex-col items-end"
                style={{
                  fontFamily: "'Brush Script MT', 'Caveat', 'Great Vibes', cursive",
                  transform: "rotate(-8deg)",
                  textShadow: "0 10px 30px rgba(0,0,0,0.5)"
                }}
              >
                <span>growth</span>
                <span className="-mt-2 md:-mt-6">engine</span>
              </div>
            </div>

            {/* Scroll Indicator */}
            {/* <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
              <span className="text-white/40 text-[10px] tracking-[0.3em] uppercase font-sans">Scroll to Explore</span>
              <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent" />
            </div> */}
          </motion.div>
        ) : (
          /* Carousel Screen */
          <motion.div
            key="carousel"
            variants={carouselWrapperVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute inset-0 z-30 w-full h-full flex items-center justify-center"
          >
            <CarouselSection
              activeIndex={activeIndex}
              setActiveIndex={updateIndex}
              onVideoEnd={handleVideoEnd}
            />
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Our360;
