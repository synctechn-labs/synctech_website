"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon, Sparkles } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { cn } from "@/lib/utils";

const defaultImages = [
  { src: "/crm_dashboard.png", alt: "Enterprise CRM Dashboard", title: "CRM & ERP Hub" },
  { src: "/web_development.png", alt: "Modern Web Platform", title: "Web Platform" },
  { src: "/mobile_development.png", alt: "iOS & Android Mobile App", title: "Mobile Experience" },
  { src: "/marketing_analytics.png", alt: "Analytics Engine", title: "Growth & Analytics" },
  { src: "/services_hero.png", alt: "Cloud Infrastructure", title: "Cloud Architecture" },
  {
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    alt: "FinTech Platform",
    title: "FinTech Platform"
  },
  {
    src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop",
    alt: "HealthTech Portal",
    title: "HealthTech Portal"
  },
  {
    src: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=1000&auto=format&fit=crop",
    alt: "E-Commerce Solution",
    title: "Headless E-Commerce"
  },
  {
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
    alt: "Data Visualization",
    title: "Data Visualization"
  }
];

export function Carousel003({
  images = defaultImages,
  className,
  showPagination = true,
  showNavigation = true,
  loop = true,
  autoplay = true,
  spaceBetween = 0,
}) {
  const css = `
    .Carousal_003 {
      width: 100%;
      height: 540px;
      padding-top: 30px !important;
      padding-bottom: 70px !important;
    }

    @media (max-width: 640px) {
      .Carousal_003 {
        height: 380px;
        padding-top: 15px !important;
        padding-bottom: 50px !important;
      }
    }

    .Carousal_003 .swiper-slide {
      background-position: center;
      background-size: cover;
      width: 440px;
      height: 440px;
      border-radius: 24px;
      overflow: hidden;
      box-shadow: 0 25px 50px rgba(0, 0, 0, 0.6);
      border: 1px solid rgba(255, 255, 255, 0.15);
      transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    }

    @media (max-width: 640px) {
      .Carousal_003 .swiper-slide {
        width: 290px;
        height: 290px;
        border-radius: 18px;
      }
    }

    .Carousal_003 .swiper-slide-active {
      border-color: rgba(59, 130, 246, 0.7);
      box-shadow: 0 30px 60px -10px rgba(59, 130, 246, 0.4);
      transform: scale(1.03);
    }

    .Carousal_003 .swiper-pagination-bullets {
      bottom: 15px !important;
    }

    .Carousal_003 .swiper-pagination-bullet {
      background-color: rgba(255, 255, 255, 0.3) !important;
      opacity: 1 !important;
      width: 12px;
      height: 12px;
      margin: 0 6px !important;
      transition: all 0.3s ease;
    }

    .Carousal_003 .swiper-pagination-bullet-active {
      background: linear-gradient(90deg, #3b82f6, #06b6d4) !important;
      width: 36px !important;
      border-radius: 8px !important;
      box-shadow: 0 0 14px rgba(6, 182, 212, 0.7);
    }

    .Carousal_003 .swiper-button-next,
    .Carousal_003 .swiper-button-prev {
      width: 52px;
      height: 52px;
      border-radius: 50%;
      background: rgba(15, 23, 42, 0.85);
      border: 1px solid rgba(255, 255, 255, 0.2);
      backdrop-filter: blur(14px);
      transition: all 0.3s ease;
      color: #fff;
    }

    .Carousal_003 .swiper-button-next:hover,
    .Carousal_003 .swiper-button-prev:hover {
      background: rgba(59, 130, 246, 0.85);
      border-color: rgba(96, 165, 250, 0.9);
      transform: scale(1.1);
      box-shadow: 0 0 24px rgba(59, 130, 246, 0.6);
    }
  `;

  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: 0.2,
      }}
      className={cn("relative w-full max-w-7xl mx-auto px-4", className)}
    >
      <style>{css}</style>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="w-full relative"
      >
        <Swiper
          spaceBetween={spaceBetween}
          speed={800}
          autoplay={
            autoplay
              ? {
                  delay: 2000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }
              : false
          }
          effect="coverflow"
          grabCursor={true}
          slidesPerView="auto"
          centeredSlides={true}
          loop={loop}
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 140,
            modifier: 1.1,
            slideShadows: true,
          }}
          pagination={
            showPagination
              ? {
                  clickable: true,
                }
              : false
          }
          navigation={
            showNavigation
              ? {
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }
              : false
          }
          className="Carousal_003"
          modules={[
            EffectCoverflow,
            Autoplay,
            Pagination,
            Navigation,
          ]}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="group relative">
              <img
                src={image.src}
                alt={image.alt || `Slide ${index + 1}`}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
              {image.title && (
                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider block mb-0.5">
                    Showcase #{index + 1}
                  </span>
                  <h4 className="text-sm font-bold text-white tracking-wide">
                    {image.title}
                  </h4>
                </div>
              )}
            </SwiperSlide>
          ))}

          {showNavigation && (
            <>
              <div className="swiper-button-next after:hidden flex items-center justify-center">
                <ChevronRightIcon className="h-5 w-5 text-white" />
              </div>

              <div className="swiper-button-prev after:hidden flex items-center justify-center">
                <ChevronLeftIcon className="h-5 w-5 text-white" />
              </div>
            </>
          )}
        </Swiper>
      </motion.div>
    </motion.div>
  );
}

export default function ShowcaseCarouselSection() {
  return (
    <section className="relative py-20 overflow-hidden bg-[#060910]">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-blue-600/10 via-cyan-500/10 to-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles size={14} className="text-cyan-400" />
            Project Showcase
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Innovations Built with{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Precision & Speed
            </span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Explore how our high-performance web applications, mobile platforms, and enterprise solutions bring digital visions to life.
          </p>
        </div>

        {/* Carousel Component */}
        <Carousel003 showPagination={true} showNavigation={true} loop={true} autoplay={true} />
      </div>
    </section>
  );
}

// Export Skiper49 alias for compatibility
export const Skiper49 = ShowcaseCarouselSection;
