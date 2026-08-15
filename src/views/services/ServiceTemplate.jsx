"use client";
import React, { useState, useEffect, useRef } from "react";

import { ShieldCheck, CheckCheck, ChevronDown, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import LeadFormModal from "@/components/LeadFormModal/LeadFormModal";

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

const MidCTA = ({ title, desc, btnText, bgVariant = 1, phoneIcon = false }) => {
  const isVariant2 = bgVariant === 2;
  return (
    <section className="w-full bg-[#050505] py-8 lg:py-12 px-6 lg:px-12">
      <div className={`max-w-7xl mx-auto w-full rounded-[2rem] p-8 lg:p-10 flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-2xl ${isVariant2 ? 'bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-800' : 'bg-gradient-to-r from-[#008ba3] via-[#005fb8] to-[#5b4bff]'}`}>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-black/30 rounded-full blur-[60px] translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>

        {/* Left Side Content */}
        <div className="relative z-10 flex-1 max-w-4xl flex flex-col items-start text-left">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4 leading-tight">
            {title}
          </h2>
          <p className="text-blue-50 text-base lg:text-lg leading-relaxed mb-6">
            {desc}
          </p>
          <Link href="#contact" data-lead-trigger="true" className="inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-white text-blue-900 font-bold rounded-full hover:bg-slate-100 hover:-translate-y-1 transition-all duration-300 shadow-xl text-sm lg:text-base whitespace-nowrap">
            {phoneIcon ? (
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
            ) : (
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
            )}
            {btnText}
          </Link>
        </div>
        
        {/* Right Side Empty Space for Gradient */}
        <div className="relative z-10 hidden lg:block lg:w-[20%]">
        </div>

      </div>
    </section>
  );
};

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
  "Custom ERP Custom Software Development": "/services/custom-erp-software-development-services/",
  "SaaS Product Development": "/services/saas-product-development-services/",
  "Legacy Software Modernization": "/services/legacy-software-modernization-services/",
  "White-Label Custom Software Development": "/services/white-label-software-development-services/",
  "Custom Web Application Development": "/services/custom-web-application-development-services/",
  "Customer Portal Development": "/services/customer-portal-development-services/",
  "Admin Dashboard Development": "/services/admin-dashboard-development-services/",
  "Appointment Booking System Development": "/services/appointment-booking-software-development-services/",
  "Custom Mobile App Development": "/services/custom-mobile-application-development-services/",
  "Human Approval Workflow Automation": "/services/human-approval-workflow-automation-services/",
  "Role-Based Business Workspace Development": "/services/role-based-business-workspace-development-services/",
  "Operations Exception Management": "/services/operations-exception-management-software-services/",
  "Custom CRM Development": "/services/custom-crm-development-services/",
  "Business Process Automation": "/services/business-process-automation-services/",
  "Business System Integration": "/services/business-system-integration-services/",
  "API Development & Integration": "/services/api-development-integration-services/",
  "AI Integration Services": "/services/ai-integration-services/",
  "AI Workflow Agent Development": "/services/ai-workflow-agent-development-services/",
  "AI Email Automation": "/services/ai-email-automation-services/",
  "AI Document Verification": "/services/ai-document-verification-services/",
  "Document Processing Automation": "/services/document-processing-automation-services/",
  "Software Usage Analytics": "/services/software-usage-analytics-services/",
  "AI Quality Control": "/services/ai-quality-control-solutions-services/",
  "Micro-SaaS Development": "/services/micro-saas-development-services/",
  "Custom Software Development": "/services/custom-software-development-services/",
  "Custom Web Development": "/services/custom-web-development-services/",
  "Mobile App Development": "/services/mobile-app-development/",
  "CRM Development Services": "/services/crm-development-services/",
  "AI Development Services": "/services/ai-development-services/",
  "Digital Marketing Services": "/services/digital-marketing-services/",
  
  // New Software Development service titles mappings
  "Enterprise Software Development": "/services/custom-erp-software-development-services/",
  "Custom Application Development": "/services/custom-web-application-development-services/",
  "SaaS Product Engineering": "/services/saas-product-development-services/",
  "Business Process Automation (BPA) & AI Integration": "/services/business-process-automation-services/",
  "Custom API & Systems Integration": "/services/api-development-integration-services/"
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

const getCtaContent = (shortName) => {
  const nameLower = shortName.toLowerCase();
  
  if (nameLower.includes("mobile")) {
    return {
      title1: "Work with Mobile App Architects Who Understand Enterprise Challenges:",
      desc1: "Multi-region data residency? Industry-specific compliance? Complex user hierarchies? You need custom mobile solutions to solve these unique challenges, not off-the-shelf templates.",
      btn1: "Schedule Consultation with Mobile Expert",
      title2: "Ready to Accelerate Your Mobile Transformation?",
      desc2: "Leverage our deep industry expertise to build secure, scalable mobile applications tailored to your exact business needs.",
      btn2: "Discuss Your Mobile App Project"
    };
  }
  if (nameLower.includes("web") || nameLower.includes("portal")) {
    return {
      title1: "Work with Web Architects Who Understand Enterprise Challenges:",
      desc1: "High traffic volumes? Complex third-party integrations? Stringent security requirements? You need custom web solutions engineered to scale seamlessly with your growing user base.",
      btn1: "Schedule Consultation with Web Expert",
      title2: "Ready to Accelerate Your Digital Transformation?",
      desc2: "Leverage our deep industry expertise to build secure, scalable web applications tailored to your exact business needs.",
      btn2: "Discuss Your Web Project"
    };
  }
  if (nameLower.includes("crm")) {
    return {
      title1: "Work with CRM Architects Who Understand Enterprise Challenges:",
      desc1: "Siloed customer data? Inefficient sales pipelines? Poor adoption rates? You need a custom CRM solution that perfectly aligns with your unique sales and operational workflows.",
      btn1: "Schedule Consultation with CRM Expert",
      title2: "Ready to Accelerate Your Business Operations?",
      desc2: "Leverage our deep industry expertise to build a secure, highly customized CRM platform tailored to your exact business needs.",
      btn2: "Discuss Your CRM Project"
    };
  }
  if (nameLower.includes("ai") || nameLower.includes("artificial")) {
    return {
      title1: "Work with AI Architects Who Understand Enterprise Challenges:",
      desc1: "Unstructured data overload? Manual bottleneck processes? You need bespoke AI solutions—from predictive models to intelligent automation—built specifically for your operational ecosystem.",
      btn1: "Schedule Consultation with AI Expert",
      title2: "Ready to Accelerate Your AI Transformation?",
      desc2: "Leverage our deep AI expertise to build secure, scalable intelligent systems tailored to your exact business needs.",
      btn2: "Discuss Your AI Project"
    };
  }
  if (nameLower.includes("marketing") || nameLower.includes("seo")) {
    return {
      title1: "Work with Growth Architects Who Understand Enterprise Challenges:",
      desc1: "Stagnant conversion rates? Inefficient ad spend? Disconnected analytics? You need data-driven digital strategies engineered to maximize ROI and scale your market presence.",
      btn1: "Schedule Consultation with Marketing Expert",
      title2: "Ready to Accelerate Your Market Growth?",
      desc2: "Leverage our deep industry expertise to execute targeted, scalable marketing campaigns tailored to your exact business goals.",
      btn2: "Discuss Your Marketing Strategy"
    };
  }
  
  // Default fallback
  return {
    title1: `Work with ${shortName} Architects Who Understand Enterprise Challenges:`,
    desc1: "Multi-region data residency? Industry-specific compliance? Complex user hierarchies? You need custom solutions to solve these unique challenges, not off-the-shelf software.",
    btn1: `Schedule Consultation with ${shortName} Expert`,
    title2: "Ready to Accelerate Your Digital Transformation?",
    desc2: `Leverage our deep industry expertise to build secure, scalable ${shortName.toLowerCase()} solutions tailored to your exact business needs.`,
    btn2: "Discuss Your Project With Us"
  };
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

  const serviceTitle = data?.hero?.title || "";
  
  let serviceCategory = "Software";
  if (serviceToParentMap[serviceTitle]) {
      serviceCategory = serviceToParentMap[serviceTitle];
  } else {
      // Safe fallback if title isn't in map
      if (serviceTitle.match(/mobile/i)) serviceCategory = "Mobile App";
      else if (serviceTitle.match(/web/i) || serviceTitle.match(/portal/i)) serviceCategory = "Web";
      else if (serviceTitle.match(/crm/i)) serviceCategory = "CRM";
      else if (serviceTitle.match(/ai /i) || serviceTitle.match(/artificial/i)) serviceCategory = "AI";
      else if (serviceTitle.match(/marketing/i) || serviceTitle.match(/seo/i)) serviceCategory = "Marketing";
      else serviceCategory = "Software";
  }
  
  const ctaContent = getCtaContent(serviceCategory);

  let suiteServices = data?.servicesSuite?.services ? [...data.servicesSuite.services] : [];
  const activeServiceInSuite = suiteServices.find(s => 
    serviceRoutes[s.title] === currentPath || 
    (serviceRoutes[s.title] && serviceRoutes[s.title].replace(/\/$/, "") === currentPath.replace(/\/$/, ""))
  );

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
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setCaptchaNum1(Math.floor(Math.random() * 10) + 1);
    setCaptchaNum2(Math.floor(Math.random() * 10) + 1);
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (parseInt(captchaInput) !== captchaNum1 + captchaNum2) {
      alert("Incorrect captcha answer. Please try again.");
      setCaptchaNum1(Math.floor(Math.random() * 10) + 1);
      setCaptchaNum2(Math.floor(Math.random() * 10) + 1);
      setCaptchaInput("");
      return;
    }
    
    const formData = new FormData(e.target);
    formData.append("formType", "Service Leads");
    
    // Using the specific web app URL you provided
    const scriptURL = "https://script.google.com/macros/s/AKfycbwbD3RUzV7Yd3qHxMPieMIEpVCAq6sPXHHsMgzjGBQxtZMyU0-rTzP6CKM1vtm4hHA/exec";
    
    if (!scriptURL) {
      alert("Google Sheets integration is not configured.");
      return;
    }
    
    // Send in the background instantly
    fetch(scriptURL, { 
      method: 'POST', 
      mode: 'no-cors',
      body: formData,
    }).catch(error => {
      console.error('Error submitting form in background:', error);
    });
    
    // Instant UI feedback
    alert('Thank you! Your submission has been received.');
    e.target.reset();
    setCaptchaInput("");
    setCaptchaNum1(Math.floor(Math.random() * 10) + 1);
    setCaptchaNum2(Math.floor(Math.random() * 10) + 1);
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
      <style>{`
        @keyframes laser-scan {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
      `}</style>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://synctechn.com/" },
              { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://synctechn.com/services/" },
              { "@type": "ListItem", "position": 3, "name": serviceTitle, "item": `https://synctechn.com${currentPath}` }
            ]
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://synctechn.com${currentPath}`
            },
            "headline": serviceTitle,
            "description": data?.hero?.subtitle || data?.hero?.paragraph || serviceTitle,
            "image": data?.hero?.bgImage || data?.overviewImage || "https://synctechn.com/logo.png",
            "author": { "@type": "Organization", "name": "SyncTech" },
            "publisher": { "@type": "Organization", "name": "SyncTech", "logo": { "@type": "ImageObject", "url": "https://synctechn.com/logo.png" } },
            "datePublished": "2024-01-01T08:00:00+08:00",
            "dateModified": new Date().toISOString()
          })
        }}
      />

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
        <div className="relative z-10 w-full lg:w-[65%] flex flex-col justify-end px-6 lg:px-20 py-32 lg:py-40">
          <div className="relative text-white">
            {/* Heading */}
            <h1 className="text-4xl md:text-5xl xl:text-7xl font-black leading-[1.05] tracking-tight">
              {data?.hero?.title}
            </h1>
          </div>
        </div>

        {/* Right Side: Transparent Blur + Form */}
        <div className="w-full lg:w-[40%] flex items-center justify-center p-6 lg:p-12 xl:p-16 relative z-10">
          <div className="w-full max-w-lg mx-auto bg-black/40 backdrop-blur-3xl border border-white/10 rounded-3xl p-8 lg:p-10 shadow-[0_8px_40px_rgba(0,0,0,0.4)]">
            <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">
              {data?.form?.title || "Let's Discuss Your App Vision"}
            </h3>
            {/* <p className="text-slate-300 text-sm mb-6">
              {data?.form?.desc || "Tell us about your project and we'll get back within 24 hours with a clear next step."}
            </p> */}

            <form className="space-y-4 lg:space-y-5" onSubmit={handleFormSubmit}>
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Name</label>
                <input
                  type="text"
                  name="Name"
                  required
                  placeholder="Full Name"
                  className="w-full bg-transparent border-b border-slate-500 focus:border-white text-white py-1.5 outline-none transition-colors placeholder:text-slate-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Contact Number</label>
                <div className="flex gap-4">
                  <select name="PhoneCode" className="bg-transparent border-b border-slate-500 focus:border-white text-white py-1.5 outline-none cursor-pointer w-20 appearance-none">
                    <option value="+91" className="text-slate-900">+91</option>
                    <option value="+1" className="text-slate-900">+1</option>
                    <option value="+44" className="text-slate-900">+44</option>
                  </select>
                  <input
                    type="text"
                    name="Phone"
                    required
                    placeholder="Enter Your Number*"
                    className="w-full bg-transparent border-b border-slate-500 focus:border-white text-white py-1.5 outline-none transition-colors placeholder:text-slate-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Work Email</label>
                <input
                  type="email"
                  name="Email"
                  required
                  placeholder="Enter your email Address*"
                  className="w-full bg-transparent border-b border-slate-500 focus:border-white text-white py-1.5 outline-none transition-colors placeholder:text-slate-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Budget Range</label>
                <select name="Budget" defaultValue="" required className="w-full bg-transparent border-b border-slate-500 focus:border-white text-slate-400 py-1.5 outline-none cursor-pointer appearance-none">
                  <option value="" disabled className="text-slate-900">Select a Budget Range</option>
                  <option value="10k-25k" className="text-slate-900">$10k - $25k</option>
                  <option value="25k-50k" className="text-slate-900">$25k - $50k</option>
                  <option value="50k+" className="text-slate-900">$50k+</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Describe your project (Help us come back better prepared)</label>
                <textarea
                  name="ProjectDescription"
                  required
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
                  disabled={isSubmitting}
                  className="w-full text-center block bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-cyan-500/25 hover:shadow-lg text-white font-bold py-2.5 rounded-full transition-all duration-300 shadow-lg hover:-translate-y-0.5 text-sm disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Submitting..." : (data?.form?.ctaText || "Schedule a Call")}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 1.5. KEY TAKEAWAY & AUDIENCE (HERO DESCRIPTION) */}
      {/* ========================================================= */}
      <section className="relative bg-[#050505] overflow-hidden pt-24 pb-12 border-b border-white/5">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-6xl mx-auto flex flex-col gap-6">
            
            {/* Top Grid: Executive Summary & Key Takeaways */}
            <div className="grid lg:grid-cols-[1fr_450px] gap-6">
              
              {/* Left Column: Executive Summary */}
              <div className="bg-[#0b0f19] border border-blue-900/30 rounded-3xl p-8 lg:p-10 shadow-lg h-full">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-900/40 border border-blue-800/50 text-[10px] font-bold text-cyan-400 tracking-widest uppercase mb-6">
                  Executive Summary
                </div>
                
                <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-6 leading-tight">
                  {data?.hero?.title ? (
                    <>
                      {data.hero.title.split(' ').slice(0, -1).join(' ')} <br />
                      <span className="text-cyan-400">{data.hero.title.split(' ').slice(-1)}</span>
                    </>
                  ) : (
                    <>
                      Engine of Digital <br />
                      <span className="text-cyan-400">Transformation</span>
                    </>
                  )}
                </h2>
                
                {/* Animated Glowing Line */}
                <div className="relative w-full h-[2px] bg-blue-900/30 mb-8 rounded-full overflow-hidden">
                  <div 
                    className="absolute top-0 left-0 h-full w-[50%] bg-gradient-to-r from-transparent via-cyan-400 to-cyan-300"
                    style={{ animation: 'laser-scan 3s linear infinite' }}
                  >
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_10px_3px_#22d3ee]"></div>
                  </div>
                </div>
                
                {data?.hero?.subtitle && (
                  <p className="text-lg text-slate-200 font-semibold leading-relaxed mb-6">
                    {data.hero.subtitle}
                  </p>
                )}
                
                {data?.hero?.paragraph && (
                  <div className="text-sm text-slate-400 leading-relaxed mb-4 space-y-4">
                    {typeof data.hero.paragraph === 'string' ? (
                      data.hero.paragraph.split('\n\n').map((para, i) => (
                        <p key={i}>{para}</p>
                      ))
                    ) : (
                      data.hero.paragraph
                    )}
                  </div>
                )}
              </div>
              
              {/* Right Column: Key Takeaways */}
              <div className="bg-[#0b0f19] border border-blue-900/30 rounded-3xl p-8 lg:p-10 shadow-lg h-full flex flex-col">
                <h3 className="text-sm font-bold text-cyan-400 uppercase tracking-widest mb-6">
                  Key Takeaways
                </h3>
                <div className="flex flex-col gap-4 flex-1 justify-center">
                  
                  {/* Takeaway 1 */}
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#0d1424] border border-blue-900/30 hover:border-cyan-500/30 transition-colors">
                    <div className="mt-1 w-10 h-10 shrink-0 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                      <ShieldCheck className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white mb-1">Secure by Design</h4>
                      <p className="text-xs text-slate-400 leading-relaxed">Enterprise-grade security and compliance built into every solution.</p>
                    </div>
                  </div>
                  
                  {/* Takeaway 2 */}
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#0d1424] border border-blue-900/30 hover:border-cyan-500/30 transition-colors">
                    <div className="mt-1 w-10 h-10 shrink-0 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                      <svg className="w-5 h-5 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2l.5-.5M15 4l.5-.5c1.17-1.17 3.07-1.17 4.24 0 1.17 1.17 1.17 3.07 0 4.24l-.5.5M12 12l-3 3M16 10l-1-1M14 8l-1-1"/></svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white mb-1">Future-Ready Solutions</h4>
                      <p className="text-xs text-slate-400 leading-relaxed">Scalable, adaptable, and designed to evolve with your business.</p>
                    </div>
                  </div>
                  
                  {/* Takeaway 3 */}
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#0d1424] border border-blue-900/30 hover:border-cyan-500/30 transition-colors">
                    <div className="mt-1 w-10 h-10 shrink-0 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                      <svg className="w-5 h-5 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white mb-1">Tailored to You</h4>
                      <p className="text-xs text-slate-400 leading-relaxed">Custom-built software that fits your unique workflows and growth goals.</p>
                    </div>
                  </div>
                  
                  {/* Takeaway 4 */}
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#0d1424] border border-blue-900/30 hover:border-cyan-500/30 transition-colors">
                    <div className="mt-1 w-10 h-10 shrink-0 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                      <svg className="w-5 h-5 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><polyline points="1 13 6 8 12 14 23 3"/></svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white mb-1">Business Impact Driven</h4>
                      <p className="text-xs text-slate-400 leading-relaxed">Solutions that automate, optimize, and unlock new revenue opportunities.</p>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>

            {/* Bottom Row: Ideal Audience & Article Metadata (hidden) */}
            <div className="grid lg:grid-cols-1 gap-6">
              
              {/* Audience Box */}
              <div className="bg-[#0b0f19] border border-blue-900/30 rounded-3xl p-8 lg:p-10 shadow-lg">
                <div className="flex items-center gap-3 mb-8">
                  <svg className="w-6 h-6 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                  <h3 className="text-sm font-bold text-cyan-400 uppercase tracking-widest">
                    Ideal Audience & Use-Case
                  </h3>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center md:text-left">
                    <div className="w-16 h-16 rounded-full border border-blue-900/50 bg-[#0d1424] mx-auto md:mx-0 flex items-center justify-center mb-5 text-cyan-400">
                      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                    </div>
                    <h4 className="text-sm font-bold text-white mb-2">Enterprise Leaders</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">Drive digital transformation with secure, scalable software tailored to your strategic goals.</p>
                  </div>
                  
                  <div className="text-center md:text-left border-t md:border-t-0 md:border-l border-slate-800/50 pt-6 md:pt-0 md:pl-8">
                    <div className="w-16 h-16 rounded-full border border-blue-900/50 bg-[#0d1424] mx-auto md:mx-0 flex items-center justify-center mb-5 text-cyan-400">
                      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                    </div>
                    <h4 className="text-sm font-bold text-white mb-2">CTOs & Tech Leaders</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">Modernize infrastructure, integrate systems, and accelerate innovation with custom solutions.</p>
                  </div>
                  
                  <div className="text-center md:text-left border-t md:border-t-0 md:border-l border-slate-800/50 pt-6 md:pt-0 md:pl-8">
                    <div className="w-16 h-16 rounded-full border border-blue-900/50 bg-[#0d1424] mx-auto md:mx-0 flex items-center justify-center mb-5 text-cyan-400">
                      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></svg>
                    </div>
                    <h4 className="text-sm font-bold text-white mb-2">Operations Managers</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">Automate workflows, reduce bottlenecks, and improve operational efficiency at scale.</p>
                  </div>
                </div>
                
                <div className="bg-[#0d1424] border border-blue-900/30 rounded-full py-3 px-6 flex items-center gap-3 w-fit md:mx-0 mx-auto">
                  <svg className="w-5 h-5 text-cyan-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
                  <p className="text-xs text-slate-300 font-medium tracking-wide">
                    Industries We Serve: <span className="text-cyan-400 font-bold">{data?.industries?.list?.[0]?.title || serviceCategory}</span> | Banking | Healthcare | Logistics | SaaS
                  </p>
                </div>
              </div>

              {/* Hidden Article Metadata code */}
              <div className="hidden bg-[#0b0f19] border border-blue-900/30 rounded-3xl p-8 lg:p-10 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <svg className="w-6 h-6 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                  <h3 className="text-sm font-bold text-cyan-400 uppercase tracking-widest">
                    Article Metadata
                  </h3>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4 pb-4 border-b border-slate-800">
                    <div className="mt-0.5 shrink-0">
                      <svg className="w-5 h-5 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase text-slate-500 font-bold mb-1">Published by</p>
                      <p className="text-sm font-semibold text-white">SyncTech Solutions</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 pb-4 border-b border-slate-800">
                    <div className="mt-0.5 shrink-0">
                      <svg className="w-5 h-5 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase text-slate-500 font-bold mb-1">Last Updated</p>
                      <p className="text-sm font-semibold text-white">{new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="mt-0.5 shrink-0">
                      <svg className="w-5 h-5 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase text-slate-500 font-bold mb-1">Category</p>
                      <p className="text-sm font-semibold text-white">Executive Summary</p>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. PROBLEM STATEMENT */}
      {/* ========================================================= */}
      <section className="relative bg-[#050505] overflow-hidden py-24">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,.05),transparent_45%)]" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">

          <div className="max-w-4xl mb-16">

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
                className="group relative rounded-3xl p-[2px] bg-white/10 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-xl hover:shadow-cyan-500/20 hover:-translate-y-1"
              >
                <div className="h-full w-full rounded-[22px] bg-[#0b0b0b] p-8 transition-all duration-300">
                  <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 mb-6 group-hover:scale-110 transition-transform duration-300">
                    <CheckCheck className="w-7 h-7 text-cyan-400" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-slate-400 leading-7">
                    {item.desc}
                  </p>
                </div>
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

            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              {data?.servicesSuite?.title}
            </h2>

            <p className="text-slate-400 text-lg leading-8">
              {data?.servicesSuite?.subtitle}
            </p>

          </div>

          {/* Accordion Section */}
          <div className="border-t border-white/10 mt-12">
            {suiteServices?.map((service, index) => {
              const isOpen = activeService === index;
              return (
                <div 
                  key={index}
                  className="group relative overflow-hidden border-b border-white/10"
                >
                  <button
                    onClick={() => setActiveService(isOpen ? null : index)}
                    className="w-full text-left cursor-pointer grid grid-cols-[1fr_32px] lg:grid-cols-[1fr_40px] items-center gap-4 lg:gap-6 py-6 lg:py-8 relative z-10"
                  >
                    <h3 className="text-xl lg:text-3xl font-bold text-white m-0 min-w-0 break-words leading-tight pr-4">
                      {service.title}
                    </h3>
                    <span className={`w-8 h-8 lg:w-10 lg:h-10 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen ? 'bg-cyan-500 border-cyan-500 rotate-45' : 'border-white/20 bg-transparent'}`}>
                      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round" className={`w-4 h-4 lg:w-5 lg:h-5 transition-colors ${isOpen ? 'stroke-white' : 'stroke-slate-300'}`}>
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                    </span>
                  </button>

                  {/* Panel */}
                  <div 
                    className={`relative z-10 transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-[2000px] opacity-100 pb-10' : 'max-h-0 opacity-0 pb-0'}`}
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-12 min-w-0 px-2 lg:px-4">
                      
                      <div className="min-w-0">
                        <p className="text-slate-300 text-base leading-relaxed mb-6">
                          {service.desc}
                        </p>
                        <ul className="flex flex-col gap-3 mb-8">
                          {service.features?.map((feature, i) => (
                            <li key={i} className="flex gap-3 text-slate-200 text-sm leading-relaxed">
                              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 shrink-0"></span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Link
                          href={serviceRoutes[service.title] || "#"}
                          target="_blank"
                          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-cyan-500/25 hover:shadow-lg px-6 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 text-sm"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>

                      <div className="min-w-0 order-first lg:order-last">
                        <div className="w-full aspect-[16/9] lg:aspect-[4/3] rounded-2xl overflow-hidden bg-white/5">
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover"
                          />
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

      {!data?.hideMiddleCtas && (
        <MidCTA 
          title={ctaContent.title1}
          desc={ctaContent.desc1}
          btnText={ctaContent.btn1}
          phoneIcon={true}
        />
      )}

      {/* ========================================================= */}
      {/* 4. FEATURES SECTION */}
      {/* ========================================================= */}

      <section className="relative py-24 bg-[#050505] overflow-hidden">

        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="text-center max-w-4xl mx-auto mb-20">

            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              {data?.features?.title}
            </h2>

            <p className="text-lg text-slate-400 leading-8">
              {data?.features?.subtitle}
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

            {data?.features?.list?.map((feature, index) => {
              const bentoClasses = [
                "md:col-span-12 lg:col-span-7",
                "md:col-span-12 lg:col-span-5",
                "md:col-span-6 lg:col-span-4",
                "md:col-span-6 lg:col-span-4",
                "md:col-span-12 lg:col-span-4",
                "col-span-12 flex flex-col lg:flex-row items-start lg:items-center gap-8",
              ];
              const fallbackClass = "md:col-span-6 lg:col-span-4";
              const gridClass = index < bentoClasses.length ? bentoClasses[index] : fallbackClass;
              const isFullWidth = index === 5;

              return (
              <div
                key={index}
                className={`group rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-300 hover:border-cyan-500/30 hover:bg-white/[0.05] flex ${isFullWidth ? "flex-col lg:flex-row items-start lg:items-center gap-8" : "flex-col"} ${gridClass}`}
              >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition shadow-lg shadow-cyan-500/20 ${isFullWidth ? "mb-0" : "mb-6"}`}>
                    {feature.icon}
                  </div>

                  <div className={isFullWidth ? "flex-1 min-w-0" : "flex-1 flex flex-col min-w-0"}>
                    <h3 className={`font-bold text-white ${isFullWidth ? "text-2xl mb-2" : "text-xl mb-4"}`}>
                      {feature.text}
                    </h3>

                    <p className={`text-slate-400 leading-7 ${isFullWidth ? "mb-0" : ""}`}>
                      {feature.desc}
                    </p>
                  </div>

                  {feature.chips && (
                    <div className={`flex flex-wrap gap-2 ${isFullWidth ? "lg:w-72 shrink-0" : "mt-6"}`}>
                      {feature.chips.map((chip, i) => (
                        <span key={i} className="font-mono text-[11px] tracking-wider text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 px-2.5 py-1.5 rounded-lg whitespace-nowrap">
                          {chip}
                        </span>
                      ))}
                    </div>
                  )}

              </div>
            )})}

          </div>

        </div>

      </section>
      {/* ========================================================= */}
      {/* 5. BENEFITS SECTION */}
      {/* ========================================================= */}

      <section className="relative py-24 bg-gradient-to-b from-[#050505] via-[#07121f] to-[#050505] overflow-hidden">

        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="text-center max-w-4xl mx-auto mb-20">

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
                className="group relative rounded-3xl border border-white/10 bg-white/[0.03] p-8 overflow-hidden transition-all duration-300 hover:border-cyan-500/30 hover:bg-white/[0.05]"
              >

                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />

                <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 text-xl font-bold mb-6">
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

            <div className="space-y-10 lg:space-y-12">

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
                      <div className={`transition-all duration-500 ${isActive ? "opacity-100" : "opacity-40"}`}>
                        <h3 className="text-2xl font-bold text-white mb-4">
                          {step.title}
                        </h3>
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

          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-start">
            
            {/* Left Header */}
            <div className="lg:sticky lg:top-32">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                {data?.industries?.title}
              </h2>
              <p className="text-lg text-slate-400 leading-relaxed">
                {data?.industries?.subtitle}
              </p>
            </div>

            {/* Right Accordion */}
            <div className="flex flex-col border-t border-white/10 mt-8 lg:mt-0">
              {data?.industries?.list?.map((industry, idx) => {
                const isOpen = openIndustry === idx;
                return (
                  <div key={idx} className="group relative overflow-hidden border-b border-white/10">
                    <button
                      onClick={() => {
                        setIsIndustryAutomated(false);
                        setOpenIndustry(isOpen ? null : idx);
                      }}
                      className="w-full text-left cursor-pointer grid grid-cols-[40px_1fr_32px] lg:grid-cols-[64px_1fr_40px] items-center gap-4 lg:gap-6 py-6 lg:py-8 relative z-10"
                    >
                      <span className={`font-mono text-sm lg:text-base font-bold transition-colors ${isOpen ? 'text-white' : 'text-slate-500'}`}>
                        [{idx + 1}]
                      </span>
                      <h3 className="text-xl lg:text-2xl font-bold text-white m-0">
                        {industry.title}
                      </h3>
                      <span className={`flex items-center justify-center transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                        <ChevronDown className="w-5 h-5 text-slate-400" />
                      </span>
                    </button>

                    {/* Expandable Panel */}
                    <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-[1000px] opacity-100 pb-10' : 'max-h-0 opacity-0 pb-0'}`}>
                      <div className="pl-[40px] lg:pl-[64px] pr-4">
                        <div className="grid sm:grid-cols-2 gap-4">
                          {industry.solutions?.map((solution, sIdx) => (
                            <div key={sIdx} className="flex items-center gap-3 bg-white/5 rounded-xl px-4 py-3 border border-white/5">
                              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shrink-0">
                                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                              </div>
                              <span className="text-slate-300 text-sm">
                                {solution}
                              </span>
                            </div>
                          ))}
                        </div>
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
      {/* 8. WHY CHOOSE US SECTION */}
      {/* ========================================================= */}
      <section className="relative py-24 lg:py-32 bg-[#050505] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          {/* Header */}
          <div className="max-w-4xl mx-auto text-center mb-20">
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

      {!data?.hideMiddleCtas && (
        <MidCTA 
          title={ctaContent.title2}
          desc={ctaContent.desc2}
          btnText={ctaContent.btn2}
          bgVariant={2}
        />
      )}

      {/* ========================================================= */}
      {/* 12. FAQ SECTION */}
      {/* ========================================================= */}
      <section className="w-full bg-[#050505] py-24 px-6 lg:px-16 text-white border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-semibold text-white mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-400 text-sm lg:text-base max-w-2xl mx-auto">
              {data?.faqs?.subtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20 items-start">
            
            {/* Left Side: CTA Block */}
            <div className="lg:sticky lg:top-32 rounded-[2.5rem] bg-gradient-to-b from-[#050505] via-[#0b1b36] to-[#0c5cff] p-10 lg:p-12 text-center h-[500px] flex flex-col justify-end items-center relative overflow-hidden border border-white/10 shadow-2xl">
              
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.05)_0%,transparent_50%)]" />
              
              {/* Fallback huge ? in the background since we don't have the 3D asset */}
              <div className="absolute top-10 text-[200px] leading-none font-black text-white/[0.03] rotate-12 -right-10 pointer-events-none select-none">
                ?
              </div>

              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 z-10 relative leading-tight">
                Didn't Find What You<br/>Were Looking For?
              </h3>
              <p className="text-slate-300 text-sm mb-8 z-10 relative max-w-[280px]">
                We've got more answers waiting for you! If your question didn't make the list, don't hesitate to reach out.
              </p>
              
              <Link href="/contact-us" className="bg-white text-slate-900 font-bold px-8 py-3.5 rounded-full hover:bg-slate-100 transition-colors z-10 relative text-sm w-full max-w-[300px]">
                Get In Touch With Our Experts
              </Link>

            </div>

            {/* Right side: FAQ Accordion */}
            <div className="flex flex-col border-t border-white/10">
              {data?.faqs?.items?.map((faq, idx) => (
                <div
                  key={idx}
                  className="group relative overflow-hidden border-b border-white/10"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full flex items-center gap-6 py-6 text-left focus:outline-none"
                  >
                    <h3 className="font-semibold text-sm lg:text-base pr-4 text-slate-100 flex-1 m-0">
                      {faq.question}
                    </h3>
                    <span className="text-slate-500 font-light text-2xl transition-transform duration-300">
                      {openFaq === idx ? '−' : '+'}
                    </span>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === idx ? "max-h-[1000px] opacity-100 pb-6" : "max-h-0 opacity-0 pb-0"}`}
                  >
                    <div className="text-slate-400 text-sm lg:text-base leading-relaxed whitespace-pre-line">
                      {faq.answer && <strong className="text-white block mb-3">Short Answer: {faq.answer.split('.')[0]}.</strong>}
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>

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
                      name="Name"
                      required
                      placeholder="Full Name"
                      className="w-full bg-transparent border-b border-slate-750 focus:border-white text-white py-1.5 outline-none transition-colors placeholder:text-slate-650"
                    />
                  </div>

                  <div className="flex gap-4">
                    <div className="w-20 shrink-0">
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Code</label>
                      <select name="PhoneCode" className="w-full bg-transparent border-b border-slate-750 focus:border-white text-white py-1.5 outline-none cursor-pointer appearance-none">
                        <option value="+91" className="text-slate-900">+91</option>
                        <option value="+1" className="text-slate-900">+1</option>
                        <option value="+44" className="text-slate-900">+44</option>
                      </select>
                    </div>
                    <div className="flex-1">
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Contact Number</label>
                      <input
                        type="text"
                        name="Phone"
                        required
                        placeholder="Enter Your Number*"
                        className="w-full bg-transparent border-b border-slate-750 focus:border-white text-white py-1.5 outline-none transition-colors placeholder:text-slate-655"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Work Email</label>
                    <input
                      type="email"
                      name="Email"
                      required
                      placeholder="Enter your email Address*"
                      className="w-full bg-transparent border-b border-slate-750 focus:border-white text-white py-1.5 outline-none transition-colors placeholder:text-slate-655"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Describe your project (Help us come back better prepared)</label>
                    <textarea
                      name="ProjectDescription"
                      required
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
                      disabled={isSubmitting}
                      className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold rounded-full transition-all duration-300 shadow-[0_4px_20px_rgba(6,182,212,0.25)] text-sm disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Submitting..." : data.cta.ctaText}
                    </button>
                  </div>
                </form>
              </div>
            )}

          </div>
        </section>
      )}

      {/* Subsequent sections will be added here based on your images */}

      <LeadFormModal />
    </div>
  );
}
