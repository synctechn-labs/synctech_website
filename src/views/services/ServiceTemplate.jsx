"use client";
import React, { useState, useEffect, useRef } from "react";

import { ShieldCheck, CheckCheck, ChevronDown, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

function FadeInUpCard({ children, delay = 0 }) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    if (domRef.current) {
      observer.observe(domRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-24"
        }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function HeroBackground({ bgImage, fallbackImg, defaultFallback }) {
  const fallback = fallbackImg || defaultFallback || "";
  const videoRef = useRef(null);
  const isVideo = bgImage && typeof bgImage === 'string' && (bgImage.endsWith('.mp4') || bgImage.endsWith('.webm') || bgImage.endsWith('.mov'));

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    const playVideo = () => {
      video.muted = true;
      video.volume = 0;
      const promise = video.play();
      if (promise !== undefined) {
        promise.catch(() => { });
      }
    };

    playVideo();

    const handleUserInteraction = () => {
      if (video.paused) {
        playVideo();
      }
    };

    window.addEventListener('click', handleUserInteraction, { passive: true });
    window.addEventListener('touchstart', handleUserInteraction, { passive: true });
    window.addEventListener('scroll', handleUserInteraction, { passive: true });

    return () => {
      window.removeEventListener('click', handleUserInteraction);
      window.removeEventListener('touchstart', handleUserInteraction);
      window.removeEventListener('scroll', handleUserInteraction);
    };
  }, [bgImage, isVideo]);

  if (!bgImage) {
    return (
      <img
        src={fallback}
        alt="Hero Background"
        className="w-full h-full object-cover"
      />
    );
  }

  if (isVideo) {
    return (
      <div className="relative w-full h-full overflow-hidden bg-slate-950">
        <img
          src={fallback}
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <video
          ref={videoRef}
          key={bgImage}
          src={bgImage}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={bgImage} type="video/mp4" />
        </video>
      </div>
    );
  }

  return (
    <img
      src={bgImage}
      alt="Hero Background"
      className="w-full h-full object-cover"
    />
  );
}

const serviceRoutes = {
  "Custom ERP Custom Software Development": "/services/custom-erp-software-development-services",
  "SaaS Product Development": "/services/saas-product-development-services",
  "Legacy Software Modernization": "/services/legacy-software-modernization-services",
  "White-Label Custom Software Development": "/services/white-label-software-development-services",
  "Custom Web Application Development": "/services/custom-web-application-development-services",
  "Customer Portal Development": "/services/customer-portal-development-services",
  "Admin Dashboard Development": "/services/admin-dashboard-development-services",
  "Appointment Booking System Development": "/services/appointment-booking-software-development-services",
  "Custom Mobile App Development": "/services/custom-mobile-application-development-services",
  "Human Approval Workflow Automation": "/services/human-approval-workflow-automation-services",
  "Role-Based Business Workspace Development": "/services/role-based-business-workspace-development-services",
  "Operations Exception Management": "/services/operations-exception-management-software-services",
  "Custom CRM Development": "/services/custom-crm-development-services",
  "Business Process Automation": "/services/business-process-automation-services",
  "Business System Integration": "/services/business-system-integration-services",
  "API Development & Integration": "/services/api-development-integration-services",
  "AI Integration Services": "/services/ai-integration-services",
  "AI Workflow Agent Development": "/services/ai-workflow-agent-development-services",
  "AI Email Automation": "/services/ai-email-automation-services",
  "AI Document Verification": "/services/ai-document-verification-services",
  "Document Processing Automation": "/services/document-processing-automation-services",
  "Software Usage Analytics": "/services/software-usage-analytics-services",
  "AI Quality Control": "/services/ai-quality-control-solutions-services",
  "Micro-SaaS Development": "/services/micro-saas-development-services",
  "Custom Software Development": "/services/custom-software-development-services",
  "Custom Web Development": "/services/custom-web-development-services",
  "Mobile App Development": "/services/mobile-app-development",
  "CRM Development Services": "/services/crm-development-services",
  "AI Development Services": "/services/ai-development-services",
  "Digital Marketing Services": "/services/digital-marketing-services",
  
  // New Software Development service titles mappings
  "Enterprise Software Development": "/services/custom-erp-software-development-services",
  "Custom Application Development": "/services/custom-web-application-development-services",
  "SaaS Product Engineering": "/services/saas-product-development-services",
  "Business Process Automation (BPA) & AI Integration": "/services/business-process-automation-services",
  "Custom API & Systems Integration": "/services/api-development-integration-services"
};

const serviceToParentMap = {
  "Custom ERP Custom Software Development": "Custom Software Development",
  "SaaS Product Development": "Custom Software Development",
  "Legacy Software Modernization": "Custom Software Development",
  "White-Label Custom Software Development": "Custom Software Development",
  "Custom Web Application Development": "Custom Web Development",
  "Customer Portal Development": "Custom Web Development",
  "Admin Dashboard Development": "Custom Web Development",
  "Appointment Booking System Development": "Custom Web Development",
  "Custom Mobile App Development": "Mobile App Development",
  "Human Approval Workflow Automation": "Mobile App Development",
  "Role-Based Business Workspace Development": "Mobile App Development",
  "Operations Exception Management": "Mobile App Development",
  "Custom CRM Development": "CRM Development Services",
  "Business Process Automation": "CRM Development Services",
  "Business System Integration": "CRM Development Services",
  "API Development & Integration": "CRM Development Services",
  "AI Integration Services": "AI Development Services",
  "AI Workflow Agent Development": "AI Development Services",
  "AI Email Automation": "AI Development Services",
  "AI Document Verification": "AI Development Services",
  "Document Processing Automation": "Digital Marketing Services",
  "Software Usage Analytics": "Digital Marketing Services",
  "AI Quality Control": "Digital Marketing Services",
  "Micro-SaaS Development": "Digital Marketing Services",

  // New Software Development service titles mappings
  "Enterprise Software Development": "Custom Software Development",
  "Custom Application Development": "Custom Software Development",
  "SaaS Product Engineering": "Custom Software Development",
  "Business Process Automation (BPA) & AI Integration": "Custom Software Development",
  "Custom API & Systems Integration": "Custom Software Development"
};

const PARENT_SERVICES = {
  "Custom Software Development": {
    title: "Custom Software Development",
    desc: "End-to-end custom software development services that help businesses automate operations and accelerate digital transformation.",
    features: ["Custom Software", "Enterprise Solutions", "Cloud-Native", "Agile Methodologies", "High Performance", "Secure Architecture"],
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
  },
  "Custom Web Development": {
    title: "Custom Web Development",
    desc: "Secure, scalable, and high-performance web applications using modern web technologies and agile practices.",
    features: ["Responsive Design", "Frontend Development", "Backend Architecture", "API Integration", "Cloud Hosting", "Performance Tuned"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
  },
  "Mobile App Development": {
    title: "Mobile App Development",
    desc: "High-performance mobile applications that drive engagement and provide seamless experiences across iOS and Android.",
    features: ["iOS Apps", "Android Apps", "Cross-Platform", "UI/UX Design", "App Store Optimization", "Enterprise Mobile"],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80"
  },
  "CRM Development Services": {
    title: "CRM Development Services",
    desc: "Empower your business with custom CRM solutions, seamless system integrations, and intelligent process automation.",
    features: ["Custom CRM", "Sales Automation", "Data Migration", "Third-party Integration", "Analytics Dashboard", "Secure Access"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
  },
  "AI Development Services": {
    title: "AI Development Services",
    desc: "Harness Artificial Intelligence to automate complex workflows, manage operations, and drive unprecedented efficiency.",
    features: ["Machine Learning", "NLP Models", "AI Chatbots", "Workflow Automation", "Predictive Analytics", "Process Optimization"],
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80"
  },
  "Digital Marketing Services": {
    title: "Digital Marketing Services",
    desc: "Leverage intelligent systems and software analytics to optimize operations, scale marketing efforts, and uncover new revenue streams.",
    features: ["SEO Optimization", "Content Strategy", "Performance Marketing", "Analytics Setup", "Conversion Optimization", "Growth Hacking"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
  }
};

export default function ServiceTemplate({ data, techStackComponent }) {
  const [activeService, setActiveService] = useState(0);
  const [openIndustry, setOpenIndustry] = useState(0);
  const [isIndustryAutomated, setIsIndustryAutomated] = useState(true);
  const [showMoreFeatures, setShowMoreFeatures] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const navigate = useRouter();
  const location = { pathname: usePathname() };
  const currentPath = location.pathname;

  let suiteServices = data?.servicesSuite?.services ? [...data.servicesSuite.services] : [];
  const activeServiceInSuite = suiteServices.find(s => serviceRoutes[s.title] === currentPath);

  if (activeServiceInSuite) {
    const parentName = serviceToParentMap[activeServiceInSuite.title];
    if (parentName && PARENT_SERVICES[parentName]) {
      suiteServices = suiteServices.filter(s => s.title !== activeServiceInSuite.title);
      suiteServices.push(PARENT_SERVICES[parentName]);
    }
  }
  const [captchaNum1, setCaptchaNum1] = useState(0);
  const [captchaNum2, setCaptchaNum2] = useState(0);
  const [captchaInput, setCaptchaInput] = useState("");

  useEffect(() => {
    setCaptchaNum1(Math.floor(Math.random() * 10) + 1);
    setCaptchaNum2(Math.floor(Math.random() * 10) + 1);
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (parseInt(captchaInput) === captchaNum1 + captchaNum2) {
      navigate.push('/contact-us');
    } else {
      alert("Incorrect captcha answer. Please try again.");
      setCaptchaNum1(Math.floor(Math.random() * 10) + 1);
      setCaptchaNum2(Math.floor(Math.random() * 10) + 1);
      setCaptchaInput("");
    }
  };

  const [timelineProgress, setTimelineProgress] = useState(0);
  const timelineRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      const rect = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const startTrigger = windowHeight / 2;
      const totalDistance = rect.height;
      const scrolled = startTrigger - rect.top;
      let progress = scrolled / totalDistance;
      progress = Math.max(0, Math.min(1, progress));
      setTimelineProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-cycle through industries
  useEffect(() => {
    if (!isIndustryAutomated || !data?.industries?.list) return;

    const interval = setInterval(() => {
      setOpenIndustry((prev) => {
        if (prev === null) return 0;
        return (prev + 1) % data.industries.list.length;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [isIndustryAutomated, data?.industries?.list]);

  return (
    <div className="w-full bg-white font-sans text-slate-900">

      {/* ========================================================= */}
      {/* 1. HERO SECTION */}
      {/* ========================================================= */}
      <section className="relative w-full min-h-screen flex flex-col lg:flex-row bg-slate-900 overflow-hidden">

        {/* Full Background Image or Video */}
        <div className="absolute inset-0 z-0 bg-slate-950">
          <HeroBackground bgImage={data?.hero?.bgImage} fallbackImg={data?.overviewImage} />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 via-slate-900/40 to-slate-900/10"></div>
        </div>

        {/* Left Side: Text */}
        <div className="relative z-10 w-full lg:w-[60%] flex flex-col justify-center px-6 lg:px-20 py-32 lg:py-40">
          <div className="relative text-white">
            {/* Heading */}
            <h1 className="text-4xl md:text-5xl xl:text-7xl font-black leading-[1.05] tracking-tight">
              {data?.hero?.title}
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-lg md:text-xl text-slate-200 leading-relaxed max-w-2xl">
              {data?.hero?.subtitle}
            </p>

            {/* Paragraph */}
            <p className="mt-6 text-base md:text-lg text-slate-300 leading-8 max-w-3xl">
              {data?.hero?.paragraph}
            </p>
          </div>
        </div>

        {/* Right Side: Transparent Blur + Form */}
        <div className="w-full lg:w-[40%] bg-white/5 backdrop-blur-lg border-l border-white/10 flex flex-col justify-center px-6 lg:px-12 py-20 lg:py-32 relative z-10 shadow-[-20px_0_40px_rgba(0,0,0,0.3)]">
          <div className="w-full max-w-lg mx-auto">
            <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">
              {data?.form?.title || "Let's Discuss Your App Vision"}
            </h3>
            <p className="text-slate-300 text-sm mb-6">
              {data?.form?.desc || "Tell us about your project and we'll get back within 24 hours with a clear next step."}
            </p>

            <form className="space-y-4 lg:space-y-5" onSubmit={handleFormSubmit}>
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Name</label>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full bg-transparent border-b border-slate-500 focus:border-white text-white py-1.5 outline-none transition-colors placeholder:text-slate-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Contact Number</label>
                <div className="flex gap-4">
                  <select className="bg-transparent border-b border-slate-500 focus:border-white text-white py-1.5 outline-none cursor-pointer w-20 appearance-none">
                    <option value="+91" className="text-slate-900">+91</option>
                    <option value="+1" className="text-slate-900">+1</option>
                    <option value="+44" className="text-slate-900">+44</option>
                  </select>
                  <input
                    type="text"
                    placeholder="Enter Your Number*"
                    className="w-full bg-transparent border-b border-slate-500 focus:border-white text-white py-1.5 outline-none transition-colors placeholder:text-slate-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Work Email</label>
                <input
                  type="email"
                  placeholder="Enter your email Address*"
                  className="w-full bg-transparent border-b border-slate-500 focus:border-white text-white py-1.5 outline-none transition-colors placeholder:text-slate-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Budget Range</label>
                <select defaultValue="" className="w-full bg-transparent border-b border-slate-500 focus:border-white text-slate-400 py-1.5 outline-none cursor-pointer appearance-none">
                  <option value="" disabled className="text-slate-900">Select a Budget Range</option>
                  <option value="10k-25k" className="text-slate-900">$10k - $25k</option>
                  <option value="25k-50k" className="text-slate-900">$25k - $50k</option>
                  <option value="50k+" className="text-slate-900">$50k+</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Describe your project (Help us come back better prepared)</label>
                <textarea
                  placeholder="Describe your project"
                  rows="1"
                  className="w-full bg-transparent border-b border-slate-500 focus:border-white text-white py-1.5 outline-none transition-colors placeholder:text-slate-500 resize-none"
                ></textarea>
              </div>

              <div className="bg-slate-800/80 border border-slate-700 rounded-lg p-2.5 flex items-center gap-3">
                <svg className="text-amber-500 w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                <span className="text-[11px] text-white leading-tight">
                  {data?.form?.trustLine || <>Fast 2-minute response, fully <strong className="font-bold">NDA-protected</strong>.</>}
                </span>
              </div>

              <div className="flex items-center justify-between gap-4 pt-1">
                <div className="flex items-center gap-2 text-white font-semibold text-sm whitespace-nowrap">
                  {captchaNum1} + {captchaNum2} = <input
                    type="text"
                    value={captchaInput}
                    onChange={(e) => setCaptchaInput(e.target.value)}
                    className="w-10 bg-white text-slate-900 rounded px-2 py-1.5 text-center outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full text-center block bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-cyan-500/25 text-white font-bold py-2.5 rounded-full transition-all duration-300 shadow-lg text-sm"
                >
                  {data?.form?.ctaText || "Schedule a Call"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      {/* ========================================================= */}
      {/* 2. PROBLEM STATEMENT */}
      {/* ========================================================= */}
      <section className="relative bg-[#050505] overflow-hidden py-24">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,.08),transparent_45%)]" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">

          <div className="max-w-4xl mb-16">

            <span className="inline-flex items-center rounded-full bg-cyan-500/10 border border-cyan-500/20 px-4 py-2 text-cyan-300 text-sm font-medium mb-6">
              Business Challenges
            </span>

            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              {data?.coreChallenges?.title}
            </h2>

            <p className="text-slate-400 text-lg leading-8">
              {data?.coreChallenges?.desc}
            </p>

          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

            {data?.coreChallenges?.cards?.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-300 hover:border-cyan-500/30 hover:bg-white/[0.05]"
              >

                <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-cyan-500 to-blue-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />

                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 mb-6">

                  <CheckCheck className="w-7 h-7 text-cyan-400" />

                </div>

                <h3 className="text-2xl font-bold text-white mb-4 leading-snug">
                  {item.title}
                </h3>

                <p className="text-slate-400 leading-7">
                  {item.desc}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>
      {/* ========================================================= */}
      {/* 3. SOLUTION SECTION */}
      {/* ========================================================= */}
      <section
        id="services"
        className="relative bg-gradient-to-b from-[#050505] via-[#0b1120] to-[#050505] py-24 overflow-hidden"
      >

        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          {/* Heading */}
          <div className="text-center max-w-4xl mx-auto mb-20">

            <span className="inline-flex items-center rounded-full bg-cyan-500/10 border border-cyan-500/20 px-4 py-2 text-cyan-300 text-sm font-medium mb-6">
              Our Solutions
            </span>

            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              {data?.servicesSuite?.title}
            </h2>

            <p className="text-slate-400 text-lg leading-8">
              {data?.servicesSuite?.subtitle}
            </p>

          </div>

          {/* Interactive Section */}

          <div className="rounded-[32px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl flex flex-col lg:flex-row">

            {/* LEFT MENU */}

            <div className="w-full lg:w-[34%] border-r border-white/10 bg-black/20">

              {suiteServices?.map((service, index) => (

                <button
                  key={index}
                  onMouseEnter={() => setActiveService(index)}
                  onClick={() => setActiveService(index)}
                  className={`w-full text-left px-8 py-8 transition-all duration-300 border-b border-white/5

            ${activeService === index
                      ? "bg-gradient-to-r from-cyan-500/20 to-blue-500/10 border-l-4 border-cyan-400"
                      : "hover:bg-white/5"
                    }
            `}
                >

                  <div className="flex items-start gap-5">

                    <span
                      className={`text-lg font-bold

                ${activeService === index
                          ? "text-cyan-400"
                          : "text-slate-500"
                        }
                `}
                    >
                      0{index + 1}
                    </span>

                    <div>

                      <h3
                        className={`text-xl font-bold

                  ${activeService === index
                            ? "text-white"
                            : "text-slate-300"
                          }
                  `}
                      >
                        {service.title}
                      </h3>

                      <p className="text-sm text-slate-500 mt-2 line-clamp-2">
                        {service.desc}
                      </p>

                    </div>

                  </div>

                </button>

              ))}

            </div>

            {/* RIGHT CONTENT */}

            <div className="w-full lg:w-[66%] bg-[#0d1117]">

              {/* Image */}

              <div className="relative h-80 overflow-hidden">

                <img
                  src={suiteServices?.[activeService]?.image}
                  alt={suiteServices?.[activeService]?.title}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/30 to-transparent" />

              </div>

              {/* Content */}

              <div className="p-10 lg:p-14">

                <div className="flex items-center gap-3 mb-6">

                  <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">

                    <ShieldCheck className="w-7 h-7 text-cyan-400" />

                  </div>

                  <div>

                    <h3 className="text-3xl font-bold text-white">
                      {suiteServices?.[activeService]?.title}
                    </h3>

                  </div>

                </div>

                <p className="text-slate-300 text-lg leading-8 mb-10">
                  {suiteServices?.[activeService]?.desc}
                </p>

                {/* Features */}

                <div className="grid md:grid-cols-2 gap-5">

                  {suiteServices?.[activeService]?.features?.map(
                    (feature, index) => (

                      <div
                        key={index}
                        className="flex items-start gap-3 rounded-xl bg-white/5 border border-white/10 p-4"
                      >

                        <CheckCheck className="w-5 h-5 text-cyan-400 mt-1 shrink-0" />

                        <span className="text-slate-200">
                          {feature}
                        </span>

                      </div>

                    )
                  )}

                </div>

                <Link
                  href={
                    serviceRoutes[
                    suiteServices?.[activeService]?.title
                    ] || "#"
                  }
                  target="_blank"
                  className="inline-flex items-center gap-3 mt-10 rounded-full bg-cyan-500 hover:bg-cyan-400 px-8 py-4 font-semibold text-white transition"
                >
                  Learn More
                  <ArrowRight className="w-5 h-5" />
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>
      {/* ========================================================= */}
      {/* 4. FEATURES SECTION */}
      {/* ========================================================= */}

      <section className="relative py-24 bg-[#050505] overflow-hidden">

        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="text-center max-w-4xl mx-auto mb-20">

            <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-cyan-300 text-sm font-medium mb-6">
              Enterprise Features
            </span>

            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              {data?.features?.title}
            </h2>

            <p className="text-lg text-slate-400 leading-8">
              {data?.features?.subtitle}
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">

            {data?.features?.list?.map((feature, index) => (

              <div
                key={index}
                className="group rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-300 hover:border-cyan-500/30 hover:bg-white/[0.05]"
              >

                <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition">

                  {feature.icon}

                </div>

                <h3 className="text-xl font-bold text-white mb-4">
                  {feature.text}
                </h3>

                <p className="text-slate-400 leading-7">
                  {feature.desc}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>
      {/* ========================================================= */}
      {/* 5. BENEFITS SECTION */}
      {/* ========================================================= */}

      <section className="relative py-24 bg-gradient-to-b from-[#050505] via-[#07121f] to-[#050505] overflow-hidden">

        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="text-center max-w-4xl mx-auto mb-20">

            <span className="inline-flex rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-green-300 text-sm font-medium mb-6">
              Business Benefits
            </span>

            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              {data?.whyInvest?.title}
            </h2>

            <p className="text-lg text-slate-400 leading-8">
              {data?.whyInvest?.desc}
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {data?.whyInvest?.cards?.map((card, index) => (

              <div
                key={index}
                className="group relative rounded-3xl border border-white/10 bg-white/[0.03] p-8 overflow-hidden transition-all duration-300 hover:border-green-500/30 hover:bg-white/[0.05]"
              >

                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-green-400 to-cyan-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />

                <div className="w-16 h-16 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400 text-xl font-bold mb-6">

                  {index + 1}

                </div>

                <h3 className="text-2xl font-bold text-white mb-5">
                  {card.title}
                </h3>

                <p className="text-slate-400 leading-7">
                  {card.desc}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>
      {techStackComponent && (
        <div className="w-full">
          {techStackComponent}
        </div>
      )}
      {/* ========================================================= */}
      {/* 11. PROCESS SECTION */}
      {/* ========================================================= */}
      <section className="relative py-24 lg:py-32 bg-[#050505] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          {/* Header */}
          <div className="max-w-4xl mx-auto text-center mb-20">
            <span className="inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-cyan-400 text-sm font-semibold mb-6">
              Agile Development Process
            </span>

            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              {data?.process?.title}
            </h2>

            <p className="text-lg text-slate-400 leading-relaxed">
              {data?.process?.subtitle}
            </p>
          </div>

          {/* Timeline */}
          <div className="relative" ref={timelineRef}>

            {/* Timeline Line */}
            <div className="absolute left-5 lg:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 lg:-translate-x-1/2"></div>

            {/* Active Line */}
            <div
              className="absolute left-5 lg:left-1/2 top-0 w-[2px] bg-gradient-to-b from-cyan-400 via-sky-500 to-blue-600 lg:-translate-x-1/2 transition-all duration-300"
              style={{
                height: `${timelineProgress * 100}%`,
              }}
            />

            <div className="space-y-16 lg:space-y-20">

              {data?.process?.steps?.map((step, idx) => {

                const nodePosition =
                  idx / Math.max(1, data.process.steps.length - 1);

                const isActive =
                  timelineProgress >= nodePosition * 0.95;

                return (

                  <div
                    key={idx}
                    className={`relative flex flex-col lg:flex-row items-start lg:items-center ${idx % 2 === 0 ? "" : "lg:flex-row-reverse"
                      }`}
                  >

                    {/* Node */}
                    <div
                      className={`absolute left-5 lg:left-1/2 -translate-x-1/2 z-20
                w-12 h-12 rounded-full border-4 flex items-center justify-center
                font-bold transition-all duration-500

                ${isActive
                          ? "bg-cyan-500 border-[#050505] text-white shadow-[0_0_30px_rgba(6,182,212,.5)]"
                          : "bg-[#111] border-[#050505] text-slate-400"
                        }`}
                    >
                      {idx + 1}
                    </div>

                    {/* Card */}
                    <div
                      className={`w-full lg:w-[46%] pl-20 lg:pl-0 ${idx % 2 === 0
                        ? "lg:pr-20"
                        : "lg:pl-20"
                        }`}
                    >
                      <div
                        className={`rounded-3xl border p-8 transition-all duration-500

                  ${isActive
                            ? "bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border-cyan-500/30"
                            : "bg-[#0b0b0b] border-white/10"
                          }`}
                      >

                        <div className="flex items-center gap-4 mb-6">

                          <div
                            className={`w-14 h-14 rounded-2xl flex items-center justify-center font-bold

                      ${isActive
                                ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
                                : "bg-white/5 text-slate-400"
                              }`}
                          >
                            0{idx + 1}
                          </div>

                          <h3 className="text-2xl font-bold text-white">
                            {step.title}
                          </h3>

                        </div>

                        <p className="text-slate-400 leading-8">
                          {step.desc}
                        </p>

                      </div>
                    </div>

                  </div>

                );
              })}

            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. INDUSTRIES SECTION */}
      {/* ========================================================= */}
      <section className="relative py-24 lg:py-32 bg-[#050505] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          {/* Header */}
          <div className="max-w-4xl mx-auto text-center mb-20">

            <span className="inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-cyan-400 text-sm font-semibold mb-6">
              Industries We Serve
            </span>

            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              {data?.industries?.title}
            </h2>

            <p className="text-lg text-slate-400 leading-relaxed">
              {data?.industries?.subtitle}
            </p>

          </div>

          {/* Industries Grid */}
          <div className="grid lg:grid-cols-2 gap-8">

            {data?.industries?.list?.map((industry, idx) => {

              const isOpen = openIndustry === idx;

              return (

                <div
                  key={idx}
                  className="rounded-3xl border border-white/10 bg-[#0b0b0b] overflow-hidden transition-all duration-300 hover:border-cyan-500/30 hover:shadow-[0_0_35px_rgba(6,182,212,.08)]"
                >

                  {/* Header */}
                  <button
                    onClick={() => {
                      setIsIndustryAutomated(false);
                      setOpenIndustry(isOpen ? null : idx);
                    }}
                    className="w-full flex items-center justify-between p-8 text-left"
                  >

                    <div className="flex items-start gap-5">

                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center text-cyan-400 shrink-0">
                        {industry.icon}
                      </div>

                      <div>

                        <h3 className="text-2xl font-bold text-white mb-2">
                          {industry.title}
                        </h3>

                        <p className="text-slate-400 leading-7">
                          {industry.desc}
                        </p>

                      </div>

                    </div>

                    <ChevronDown
                      className={`w-6 h-6 text-cyan-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                        }`}
                    />

                  </button>

                  {/* Expandable Solutions */}
                  <div
                    className={`transition-all duration-500 overflow-hidden ${isOpen
                      ? "max-h-[600px] opacity-100"
                      : "max-h-0 opacity-0"
                      }`}
                  >

                    <div className="px-8 pb-8">

                      <div className="border-t border-white/10 pt-6">

                        <h4 className="uppercase tracking-[0.2em] text-xs font-semibold text-cyan-400 mb-5">
                          Solutions Include
                        </h4>

                        <div className="grid sm:grid-cols-2 gap-4">

                          {industry.solutions?.map((solution, sIdx) => (

                            <div
                              key={sIdx}
                              className="flex items-center gap-3 bg-white/5 rounded-xl px-4 py-3 border border-white/5"
                            >

                              <div className="w-2 h-2 rounded-full bg-cyan-400 shrink-0"></div>

                              <span className="text-slate-300">
                                {solution}
                              </span>

                            </div>

                          ))}

                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              );

            })}

          </div>

        </div>
      </section>
      {/* ========================================================= */}
      {/* 8. WHY CHOOSE US SECTION */}
      {/* ========================================================= */}
      <section className="relative py-24 lg:py-32 bg-[#050505] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          {/* Header */}
          <div className="max-w-4xl mx-auto text-center mb-20">

            <span className="inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-cyan-400 text-sm font-semibold mb-6">
              Why SyncTechn
            </span>

            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              {data?.whyChooseUs?.title}
            </h2>

            <p className="text-lg text-slate-400 leading-relaxed">
              {data?.whyChooseUs?.subtitle}
            </p>

          </div>


          {/* Reasons */}
          <div className="space-y-0 border-t border-white/10">

            {data?.whyChooseUs?.points?.map((point, idx) => (

              <FadeInUpCard key={idx} delay={idx * 120}>

                <div className="group flex flex-col lg:flex-row py-12 border-b border-white/10 hover:bg-white/[0.02] transition-all duration-300">

                  {/* Left */}
                  <div className="w-full lg:w-24 flex-shrink-0 mb-6 lg:mb-0">

                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white flex items-center justify-center font-bold text-lg">
                      0{idx + 1}
                    </div>

                  </div>

                  {/* Right */}
                  <div className="flex-1 lg:pl-10">

                    <h3 className="text-2xl font-bold text-white mb-5 group-hover:text-cyan-400 transition-colors">
                      {point.title}
                    </h3>

                    <p className="text-slate-400 leading-8 max-w-4xl">
                      {point.desc}
                    </p>

                  </div>

                </div>

              </FadeInUpCard>

            ))}

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 12. FAQ SECTION */}
      {/* ========================================================= */}
      <section className="w-full bg-[#050505] py-24 px-6 lg:px-16 text-white border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-500 to-blue-600 text-transparent bg-clip-text mb-6 tracking-tight pb-2 whitespace-pre-line text-balance line-clamp-2">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-400 text-sm lg:text-base max-w-2xl mx-auto">
              {data?.faqs?.subtitle}
            </p>
          </div>

          {/* Accordion */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 items-start">
            {data?.faqs?.items?.map((faq, idx) => (
              <div
                key={idx}
                className="bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none group hover:bg-[#111] transition-colors"
                >
                  <span className="font-semibold text-sm lg:text-base pr-4 group-hover:text-blue-400 transition-colors">
                    {faq.question}
                  </span>
                  <div className={`shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${openFaq === idx ? 'border-blue-500 bg-blue-500 text-white' : 'border-white/20 text-white/50 group-hover:border-white/50 group-hover:text-white'}`}>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${openFaq === idx ? "rotate-180" : ""}`} />
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === idx ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <div className="px-6 pb-6 pt-2 text-slate-400 text-sm lg:text-base leading-relaxed border-t border-white/5 mt-2 whitespace-pre-line">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* NEW: FINAL CTA SECTION */}
      {/* ========================================================= */}
      {data?.cta && (
        <section className="w-full bg-[#050505] py-24 px-6 lg:px-16 flex justify-center border-t border-white/5">
          <div className={`w-full max-w-7xl rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-[#0c1220] to-[#050912] border border-white/10 p-10 lg:p-16 relative shadow-2xl flex flex-col ${data.cta.showForm ? 'lg:flex-row gap-12 items-center' : 'items-center justify-center text-center'}`}>

            {/* Background glowing circle */}
            <div className="absolute w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] -top-64 -left-64 pointer-events-none"></div>
            <div className="absolute w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px] -bottom-64 -right-64 pointer-events-none"></div>

            {/* Left Column (Text Info) */}
            <div className={`relative z-10 w-full ${data.cta.showForm ? 'lg:w-1/2 text-left' : 'max-w-3xl mx-auto flex flex-col items-center'}`}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 text-transparent bg-clip-text mb-6 tracking-tight leading-tight">
                {data.cta.title}
              </h2>

              <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-8 max-w-2xl">
                {data.cta.subtitle}
              </p>

              {!data.cta.showForm && (
                <div>
                  <Link
                    href="/contact-us"
                    className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold rounded-full transition-all duration-300 shadow-[0_4px_20px_rgba(6,182,212,0.25)] hover:shadow-[0_10px_30px_rgba(6,182,212,0.4)] hover:-translate-y-0.5 inline-flex items-center gap-3 text-base"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    {data.cta.ctaText}
                  </Link>
                </div>
              )}
            </div>

            {/* Right Column: Contact Form */}
            {data.cta.showForm && (
              <div className="relative z-10 w-full lg:w-1/2 bg-white/[0.01] border border-white/10 rounded-3xl p-8 lg:p-10 backdrop-blur-md">
                <form className="space-y-4 lg:space-y-5" onSubmit={handleFormSubmit}>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Name</label>
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full bg-transparent border-b border-slate-750 focus:border-white text-white py-1.5 outline-none transition-colors placeholder:text-slate-650"
                    />
                  </div>

                  <div className="flex gap-4">
                    <div className="w-20 shrink-0">
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Code</label>
                      <select className="w-full bg-transparent border-b border-slate-750 focus:border-white text-white py-1.5 outline-none cursor-pointer appearance-none">
                        <option value="+91" className="text-slate-900">+91</option>
                        <option value="+1" className="text-slate-900">+1</option>
                        <option value="+44" className="text-slate-900">+44</option>
                      </select>
                    </div>
                    <div className="flex-1">
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Contact Number</label>
                      <input
                        type="text"
                        placeholder="Enter Your Number*"
                        className="w-full bg-transparent border-b border-slate-750 focus:border-white text-white py-1.5 outline-none transition-colors placeholder:text-slate-655"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Work Email</label>
                    <input
                      type="email"
                      placeholder="Enter your email Address*"
                      className="w-full bg-transparent border-b border-slate-750 focus:border-white text-white py-1.5 outline-none transition-colors placeholder:text-slate-655"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Describe your project (Help us come back better prepared)</label>
                    <textarea
                      placeholder="Describe your project"
                      rows="1"
                      className="w-full bg-transparent border-b border-slate-750 focus:border-white text-white py-1.5 outline-none transition-colors placeholder:text-slate-655 resize-none"
                    ></textarea>
                  </div>

                  <div className="flex items-center justify-between gap-4 pt-4">
                    <div className="flex items-center gap-2 text-white font-semibold text-sm whitespace-nowrap">
                      {captchaNum1} + {captchaNum2} = <input
                        type="text"
                        value={captchaInput}
                        onChange={(e) => setCaptchaInput(e.target.value)}
                        className="w-10 bg-white text-slate-900 rounded px-2 py-1.5 text-center outline-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold rounded-full transition-all duration-300 shadow-[0_4px_20px_rgba(6,182,212,0.25)] text-sm"
                    >
                      {data.cta.ctaText}
                    </button>
                  </div>
                </form>
              </div>
            )}

          </div>
        </section>
      )}

      {/* Subsequent sections will be added here based on your images */}

    </div>
  );
}
