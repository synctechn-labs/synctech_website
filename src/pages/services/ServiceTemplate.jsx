import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ShieldCheck, CheckCheck, ChevronDown } from "lucide-react";

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
      className={`transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-24"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function HeroBackground({ bgImage, fallbackImg }) {
  const videoRef = useRef(null);
  const isVideo = typeof bgImage === 'string' && (
    bgImage.toLowerCase().includes('.mp4') || 
    bgImage.toLowerCase().includes('.webm') || 
    bgImage.toLowerCase().includes('/video/upload/')
  );

  useEffect(() => {
    if (isVideo && videoRef.current) {
      const video = videoRef.current;
      video.muted = true;
      video.defaultMuted = true;
      video.playsInline = true;
      video.setAttribute('muted', '');
      video.setAttribute('playsinline', '');

      const playVideo = () => {
        const promise = video.play();
        if (promise !== undefined) {
          promise.catch((err) => {
            console.warn("Video play error:", err);
          });
        }
      };

      playVideo();
      video.addEventListener('canplay', playVideo);

      return () => {
        video.removeEventListener('canplay', playVideo);
      };
    }
  }, [bgImage, isVideo]);

  if (!bgImage) {
    return (
      <img 
        src={fallbackImg || "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80"} 
        alt="Hero Background" 
        className="w-full h-full object-cover"
      />
    );
  }

  if (isVideo) {
    return (
      <video 
        ref={videoRef}
        key={bgImage}
        src={bgImage}
        autoPlay
        loop
        muted
        defaultMuted
        playsInline
        preload="auto"
        className="w-full h-full object-cover"
      >
        <source src={bgImage} type="video/mp4" />
      </video>
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
  "Custom ERP Development": "/services/custom-erp-development",
  "SaaS Product Development": "/services/saas-product-development",
  "Legacy Software Modernization": "/services/legacy-software-modernization",
  "White-Label Software Development": "/services/white-label-software-development",
  "Custom Web Application Development": "/services/custom-web-application-development",
  "Client & Customer Portal Development": "/services/client-customer-portal-development",
  "Admin Dashboard Development": "/services/admin-dashboard-development",
  "Booking & Appointment Systems": "/services/booking-appointment-system-development",
  "Mobile Application Development": "/services/mobile-application-development",
  "Human Approval Automation Systems": "/services/human-approval-automation-systems",
  "Role-Based Business Workspace Development": "/services/role-based-business-workspace-development",
  "Operations Exception Management Systems": "/services/operations-exception-management-systems",
  "Custom CRM Development": "/services/custom-crm-development",
  "Business Process Automation": "/services/business-process-automation",
  "Business System Integration Hub": "/services/business-system-integration-hub",
  "API Development & Integration": "/services/api-development-integration",
  "AI Integration Services": "/services/ai-integration-services",
  "AI Workflow Agent Development": "/services/ai-workflow-agent-development",
  "AI Email Operations Automation": "/services/ai-email-operations-automation",
  "AI Document Verification Systems": "/services/ai-document-verification-systems",
  "Document Processing Automation": "/services/document-processing-automation",
  "Software Usage Intelligence Systems": "/services/software-usage-intelligence-systems",
  "AI-Assisted Quality Control Platforms": "/services/ai-assisted-quality-control",
  "Micro-SaaS Development for Businesses": "/services/micro-saas-development",
  "Software Development": "/services/software-development",
  "Web Development": "/services/web-development",
  "Mobile App Development": "/services/mobile-app-development",
  "CRM Solutions": "/services/crm",
  "AI Solutions": "/services/ai-solutions",
  "Digital Marketing": "/services/digital-marketing"
};

const serviceToParentMap = {
  "Custom ERP Development": "Software Development",
  "SaaS Product Development": "Software Development",
  "Legacy Software Modernization": "Software Development",
  "White-Label Software Development": "Software Development",
  "Custom Web Application Development": "Web Development",
  "Client & Customer Portal Development": "Web Development",
  "Admin Dashboard Development": "Web Development",
  "Booking & Appointment Systems": "Web Development",
  "Mobile Application Development": "Mobile App Development",
  "Human Approval Automation Systems": "Mobile App Development",
  "Role-Based Business Workspace Development": "Mobile App Development",
  "Operations Exception Management Systems": "Mobile App Development",
  "Custom CRM Development": "CRM Solutions",
  "Business Process Automation": "CRM Solutions",
  "Business System Integration Hub": "CRM Solutions",
  "API Development & Integration": "CRM Solutions",
  "AI Integration Services": "AI Solutions",
  "AI Workflow Agent Development": "AI Solutions",
  "AI Email Operations Automation": "AI Solutions",
  "AI Document Verification Systems": "AI Solutions",
  "Document Processing Automation": "Digital Marketing",
  "Software Usage Intelligence Systems": "Digital Marketing",
  "AI-Assisted Quality Control Platforms": "Digital Marketing",
  "Micro-SaaS Development for Businesses": "Digital Marketing",
};

const PARENT_SERVICES = {
  "Software Development": {
    title: "Software Development",
    desc: "End-to-end custom software development services that help businesses automate operations and accelerate digital transformation.",
    features: ["Custom Software", "Enterprise Solutions", "Cloud-Native", "Agile Methodologies", "High Performance", "Secure Architecture"],
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
  },
  "Web Development": {
    title: "Web Development",
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
  "CRM Solutions": {
    title: "CRM Solutions",
    desc: "Empower your business with custom CRM solutions, seamless system integrations, and intelligent process automation.",
    features: ["Custom CRM", "Sales Automation", "Data Migration", "Third-party Integration", "Analytics Dashboard", "Secure Access"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
  },
  "AI Solutions": {
    title: "AI Solutions",
    desc: "Harness Artificial Intelligence to automate complex workflows, manage operations, and drive unprecedented efficiency.",
    features: ["Machine Learning", "NLP Models", "AI Chatbots", "Workflow Automation", "Predictive Analytics", "Process Optimization"],
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80"
  },
  "Digital Marketing": {
    title: "Digital Marketing",
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

  const navigate = useNavigate();
  const location = useLocation();
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
      navigate('/contact-us');
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
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] mb-6 whitespace-pre-line">
              {data?.hero?.title}
            </h1>
            <p className="text-base md:text-lg text-slate-300 leading-relaxed max-w-2xl">
              {data?.hero?.subtitle}
            </p>
          </div>
        </div>

        {/* Right Side: Transparent Blur + Form */}
        <div className="w-full lg:w-[40%] bg-white/5 backdrop-blur-lg border-l border-white/10 flex flex-col justify-center px-6 lg:px-12 py-20 lg:py-32 relative z-10 shadow-[-20px_0_40px_rgba(0,0,0,0.3)]">
          <div className="w-full max-w-lg mx-auto">
            <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">Let's Discuss Your App Vision</h3>
            <p className="text-slate-300 text-sm mb-6">
              Tell us about your project and we'll get back within 24 hours with a clear next step.
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
                <select className="w-full bg-transparent border-b border-slate-500 focus:border-white text-slate-400 py-1.5 outline-none cursor-pointer appearance-none">
                  <option value="" disabled selected className="text-slate-900">Select a Budget Range</option>
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
                <span className="text-[11px] text-white leading-tight">Fast 2-minute response, fully <strong className="font-bold">NDA-protected</strong>.</span>
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
                  Schedule a Call
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. OVERVIEW & COMPLIANCE SECTION */}
      {/* ========================================================= */}
      <section className="w-full flex flex-col lg:flex-row min-h-[60vh]">
        {/* Left Side: Dark Background */}
        <div className="w-full lg:w-1/2 bg-[#050505] text-white py-24 px-8 lg:px-20 flex flex-col justify-center">
          <p className="text-xl leading-relaxed text-slate-200 font-medium mb-16">
            With over a decade of industry experience and a powerhouse team of 1700+ tech experts, we operate as a full-cycle mobile app development company that engineers high-performance, scalable mobile solutions backed by ISO-27001, ISO-9001, and CMMI Level 3 certifications.
          </p>

          <h3 className="text-2xl font-bold mb-8">Our Core Capabilities:</h3>
          
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <CheckCheck className="text-[#3a86ff] mt-1 shrink-0 w-5 h-5" />
              <span className="text-lg md:text-xl font-medium text-slate-300 leading-relaxed">
                Building secure, scalable native and cross-platform applications on AWS, Azure, and Google Cloud infrastructures
              </span>
            </li>
            <li className="flex items-start gap-4">
              <CheckCheck className="text-[#3a86ff] mt-1 shrink-0 w-5 h-5" />
              <span className="text-lg md:text-xl font-medium text-slate-300 leading-relaxed">
                Designing intuitive, high-retention user experiences that captivate audiences and drive measurable ROI
              </span>
            </li>
            <li className="flex items-start gap-4">
              <CheckCheck className="text-[#3a86ff] mt-1 shrink-0 w-5 h-5" />
              <span className="text-lg md:text-xl font-medium text-slate-300 leading-relaxed">
                Building intelligent mobile platforms powered by AI, ML, and real-time data analytics
              </span>
            </li>
            <li className="flex items-start gap-4">
              <CheckCheck className="text-[#3a86ff] mt-1 shrink-0 w-5 h-5" />
              <span className="text-lg md:text-xl font-medium text-slate-300 leading-relaxed">
                Protecting sensitive user data by integrating multi-layered security frameworks and compliance standards
              </span>
            </li>
            <li className="flex items-start gap-4">
              <CheckCheck className="text-[#3a86ff] mt-1 shrink-0 w-5 h-5" />
              <span className="text-base md:text-lg font-medium text-slate-300 leading-relaxed">
                Connecting mobile ecosystems with existing ERP, CRM, and legacy systems via API-first architectures
              </span>
            </li>
          </ul>
        </div>

        {/* Right Side: Service Image */}
        <div className="w-full lg:w-1/2 bg-[#050505] flex items-center justify-center p-8 lg:p-12 border-l border-white/5">
          <img 
            src={data?.overviewImage || data?.primaryCta?.image || "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"} 
            alt="Service Overview" 
            className="w-full h-auto rounded-[2rem] shadow-2xl"
          />
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. METRICS SECTION */}
      {/* ========================================================= */}
      <section className="w-full bg-[#050505] py-20 px-6 lg:px-16 flex justify-center">
        <div className="w-full max-w-6xl rounded-[2rem] relative overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-600 p-10 lg:p-16 shadow-2xl border border-white/5">
          <div className="relative z-10 text-white">
            <h3 className="text-lg lg:text-xl font-bold mb-16">
              We engineer complexity into results:
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
              {data?.metrics?.map((metric, idx) => (
                <div key={idx} className="border-b border-white/20 pb-8 flex flex-col justify-end">
                  <h4 className="text-5xl lg:text-6xl font-light mb-6 tracking-tight">{metric.value}</h4>
                  <p className="text-sm text-blue-50 font-medium">
                    {metric.title}
                    {metric.subtitle && <span className="block mt-1 text-blue-100/80">{metric.subtitle}</span>}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. SERVICES SUITE SECTION */}
      {/* ========================================================= */}
      <section className="w-full bg-[#050505] py-24 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto mb-16 flex flex-col gap-8">
          <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-500 to-blue-600 text-transparent bg-clip-text mb-2 tracking-tight pb-2 w-full text-balance line-clamp-2">
            {data?.servicesSuite?.title}
          </h2>
          <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-4xl">
            {data?.servicesSuite?.subtitle}
          </p>
        </div>

        {/* Interactive Tabs Area */}
        <div className="w-full flex flex-col lg:flex-row rounded-[2.5rem] overflow-hidden bg-white mx-auto shadow-2xl border border-white/5">
          {/* Left Navigation */}
          <div className="w-full lg:w-[35%] bg-white p-8 lg:p-10 border-r border-slate-100 max-h-[600px] overflow-y-auto">
            <div className="space-y-2">
              {suiteServices?.map((service, idx) => (
                <Link 
                  to={serviceRoutes[service.title] || "#"}
                  target="_blank" rel="noopener noreferrer"
                  key={idx}
                  onMouseEnter={() => setActiveService(idx)}
                  className={`w-full text-left py-6 px-4 border-b border-slate-200 transition-all duration-300 flex items-center gap-6 group ${activeService === idx ? 'opacity-100' : 'opacity-40 hover:opacity-100'}`}
                >
                  <span className={`text-sm font-bold ${activeService === idx ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-transparent bg-clip-text' : 'text-slate-400'}`}>
                    [0{idx + 1}]
                  </span>
                  <span className={`text-xl lg:text-2xl font-bold transition-all duration-300 ${activeService === idx ? 'text-slate-900' : 'text-slate-500 group-hover:bg-gradient-to-r group-hover:from-cyan-500 group-hover:to-blue-600 group-hover:text-transparent group-hover:bg-clip-text'}`}>
                    {service.title}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Right Content Area */}
          <div className="w-full lg:w-[65%] flex flex-col bg-slate-50 relative">
            {/* Image Banner */}
            <div className="w-full h-64 lg:h-80 overflow-hidden relative">
              <img 
                src={suiteServices?.[activeService]?.image || "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80"} 
                alt={suiteServices?.[activeService]?.title} 
                className="w-full h-full object-cover transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent pointer-events-none"></div>
            </div>
            
            {/* Info Split */}
            <div className="flex flex-col lg:flex-row flex-1 relative -mt-6">
              {/* Blue Info Box */}
              <div className="w-full lg:w-1/2 bg-gradient-to-br from-cyan-500 to-blue-600 text-white p-10 lg:p-12 flex flex-col justify-center rounded-tl-3xl shadow-[0_-10px_20px_rgba(0,0,0,0.1)] relative z-10">
                <div className="flex items-center gap-2 mb-6">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold mb-6 uppercase tracking-wider">
                  {suiteServices?.[activeService]?.title}
                </h4>
                <p className="text-lg md:text-xl leading-relaxed text-blue-50 mb-8">
                  {suiteServices?.[activeService]?.desc}
                </p>
                <Link to={serviceRoutes[suiteServices?.[activeService]?.title] || "#"} target="_blank" rel="noopener noreferrer" className="mt-auto inline-flex items-center gap-2 text-white font-semibold hover:text-cyan-200 transition-colors w-max">
                  Explore Service <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
              </div>

              {/* White Bullets Box */}
              <div className="w-full lg:w-1/2 bg-white p-10 lg:p-12 flex flex-col justify-center rounded-tr-3xl lg:rounded-none shadow-[0_-10px_20px_rgba(0,0,0,0.05)] relative z-10">
                {suiteServices?.[activeService]?.features?.map((feature, idx) => (
                  <div className="mb-8 last:mb-0" key={idx}>
                    <h5 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-900 shrink-0"></span>
                      {feature}
                    </h5>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. CTA SECTION */}
      {/* ========================================================= */}
      <section className="w-full bg-[#050505] py-24 px-6 lg:px-16 flex justify-center">
        <div className="w-full max-w-7xl rounded-[2.5rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl">
          {/* Left Column (Blue Gradient text area) */}
          <div className="w-full lg:w-[55%] bg-gradient-to-br from-cyan-500 to-blue-600 p-10 lg:p-12 flex flex-col justify-center text-white relative">
            <h2 className="text-3xl lg:text-4xl leading-tight mb-4 whitespace-pre-line font-bold">
              {data?.primaryCta?.title}
            </h2>
            <p className="text-sm lg:text-base text-blue-50 leading-relaxed mb-8 max-w-xl">
              {data?.primaryCta?.subtitle}
            </p>
            <div>
              <button className="bg-white text-slate-900 rounded-full px-8 py-3.5 font-semibold text-sm flex items-center gap-3 hover:bg-slate-100 transition-colors shadow-xl">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                {data?.primaryCta?.buttonText}
              </button>
            </div>
          </div>
          
          {/* Right Column (Image) */}
          <div className="w-full lg:w-[45%] h-64 lg:h-auto min-h-[300px]">
            <img 
              src="https://res.cloudinary.com/wowukaao/image/upload/v1783865631/CTA_1_1_ymdwgy.jpg" 
              alt="CTA Image" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. INDUSTRIES SECTION */}
      {/* ========================================================= */}
      <section className="w-full bg-[#050505] py-24 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col gap-16 lg:gap-20">
          
          {/* Top Column - Text */}
          <div className="w-full max-w-4xl flex flex-col">
            <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-500 to-blue-600 text-transparent bg-clip-text mb-6 tracking-tight pb-2 whitespace-pre-line text-balance line-clamp-2">
              {data?.industries?.title}
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-slate-300">
              {data?.industries?.subtitle}
            </p>
          </div>

          {/* Bottom Column - Accordion List */}
          <div className="w-full">
            <div className="border-t border-white/10">
              {data?.industries?.list?.map((industry, idx) => (
                <div key={idx} className="border-b border-white/10">
                  <button 
                    onClick={() => {
                      setIsIndustryAutomated(false);
                      setOpenIndustry(openIndustry === idx ? null : idx);
                    }}
                    className="w-full py-6 flex items-center justify-between focus:outline-none group"
                  >
                    <div className="flex items-center gap-6">
                      <span className="text-blue-600 group-hover:text-cyan-500 transition-colors">
                        {industry.icon}
                      </span>
                      <span className={`text-xl md:text-2xl font-semibold transition-colors duration-300 ${openIndustry === idx ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-transparent bg-clip-text' : 'text-white group-hover:text-blue-100'}`}>
                        {industry.title}
                      </span>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${openIndustry === idx ? 'rotate-180 text-cyan-500' : ''}`} />
                  </button>
                  {/* Accordion Content */}
                  <div className={`overflow-hidden transition-all duration-300 ${openIndustry === idx ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="text-base md:text-lg text-slate-400 px-4">
                      {industry.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 7. SECOND CTA SECTION */}
      {/* ========================================================= */}
      <section className="w-full bg-[#050505] py-24 px-6 lg:px-16 flex justify-center">
        <div className="w-full max-w-7xl rounded-[2.5rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl">
          {/* Left Column (Blue Gradient text area) */}
          <div className="w-full lg:w-[55%] bg-gradient-to-br from-cyan-500 to-blue-600 p-10 lg:p-12 flex flex-col justify-center text-white relative">
            <h2 className="text-3xl lg:text-4xl leading-tight mb-4">
              <span className="font-light">Your Industry Demands </span>
              <span className="font-bold">Custom Mobile Solutions.</span><span className="font-light"> Off-the-shelf Solutions are Not Enough!</span>
            </h2>
            <p className="text-sm lg:text-base text-blue-50 leading-relaxed mb-8 max-w-xl font-medium">
              With 1700+ experts and ISO/HIPAA-compliant processes, we engineer secure, hyper-scalable digital assets that deliver measurable business outcomes in your sector.
            </p>
            <div>
              <Link to="/contact-us" className="bg-white text-slate-900 rounded-full px-8 py-3.5 font-semibold text-sm inline-flex items-center gap-3 hover:bg-slate-100 transition-colors shadow-xl w-max">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                Consult Our Industry Specialists
              </Link>
            </div>
          </div>
          
          {/* Right Column (Image) */}
          <div className="w-full lg:w-[45%] h-64 lg:h-auto min-h-[300px]">
            <img 
              src="https://res.cloudinary.com/wowukaao/image/upload/v1783865631/CTA_1_2_fxgfo0.jpg" 
              alt="Industry Specialists" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 8. WHY CHOOSE US SECTION (With Scroll Animation) */}
      {/* ========================================================= */}
      <section className="w-full bg-[#050505] py-24 px-6 lg:px-16 text-white overflow-hidden">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center md:text-left mb-20 md:ml-12">
            <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-500 to-blue-600 text-transparent bg-clip-text mb-6 tracking-tight pb-2 whitespace-pre-line text-balance line-clamp-2">
              {data?.whyChooseUs?.title}
            </h2>
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl">
              {data?.whyChooseUs?.subtitle}
            </p>
          </div>

          {/* Cards List */}
          <div className="space-y-0 border-t border-white/10">
            {data?.whyChooseUs?.cards?.map((card, idx) => (
              <FadeInUpCard key={idx} delay={idx * 150}>
                <div className="group border-b border-white/10 flex flex-col md:flex-row items-start py-12 md:py-16 hover:bg-white/[0.02] transition-colors">
                  {/* Number */}
                  <div className="w-full md:w-32 mb-6 md:mb-0 shrink-0">
                    <span className="text-xl font-bold font-mono text-white/50 group-hover:text-blue-500 transition-colors">
                      0{idx + 1}
                    </span>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 md:pl-12 md:border-l border-white/10 group-hover:border-blue-500/50 transition-colors">
                    <h3 className="text-2xl font-bold mb-6 group-hover:text-blue-400 transition-colors">{card.title}</h3>
                    <p className="text-slate-400 leading-relaxed max-w-2xl text-base md:text-lg">
                      {card.desc}
                    </p>
                  </div>
                </div>
              </FadeInUpCard>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 9. SERVICE SPECIFIC CTA / FEATURE SECTION */}
      {/* ========================================================= */}
      <section className="w-full bg-[#050505] py-24 px-6 lg:px-16 flex justify-center">
        <div className="w-full max-w-7xl rounded-[2.5rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl">
          
          {/* Left Column (Solid Bright Blue) */}
          <div className="w-full lg:w-[55%] bg-gradient-to-br from-cyan-500 to-blue-600 p-10 lg:p-12 flex flex-col justify-center text-white relative">
            <h2 className="text-3xl lg:text-4xl leading-tight mb-4 font-medium">
              <span className="font-bold">{data?.secondaryCta?.title}</span> <br/>{data?.secondaryCta?.highlight}
            </h2>
            <p className="text-sm lg:text-base text-blue-50 leading-relaxed mb-8 max-w-xl">
              {data?.secondaryCta?.subtitle}
            </p>
            <div>
              <Link to="/contact-us" className="bg-white text-slate-900 rounded-full px-8 py-3.5 font-semibold text-sm inline-flex items-center gap-3 hover:bg-slate-100 transition-colors shadow-xl w-max">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                {data?.secondaryCta?.buttonText}
              </Link>
            </div>
          </div>
          
          {/* Right Column (Image) */}
          <div className="w-full lg:w-[45%] h-64 lg:h-auto min-h-[300px]">
            <img 
              src="https://res.cloudinary.com/wowukaao/image/upload/v1783865630/CTA_1_3_rpss5y.jpg" 
              alt="Secondary CTA Image" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Optional Technology Stack Section */}
      {techStackComponent && (
        <div className="w-full">
          {techStackComponent}
        </div>
      )}

      {/* ========================================================= */}
      {/* 10. MUST HAVE FEATURES SECTION */}
      {/* ========================================================= */}
      <section className="w-full bg-[#050505] py-24 px-6 lg:px-16 text-white">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-500 to-blue-600 text-transparent bg-clip-text mb-6 tracking-tight pb-2 max-w-5xl mx-auto whitespace-pre-line text-balance line-clamp-2">
              {data?.features?.title}
            </h2>
            <p className="text-sm lg:text-base text-slate-400 leading-relaxed max-w-3xl mx-auto">
              {data?.features?.subtitle}
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 transition-all duration-500">
            {data?.features?.list?.slice(0, showMoreFeatures ? 20 : 12).map((feature, idx) => (
              <div 
                key={idx} 
                className="flex items-center gap-4 bg-[#0a0a0a] hover:bg-[#111] border border-white/10 rounded-2xl p-6 transition-colors group"
              >
                <div className="text-white/50 group-hover:text-white transition-colors shrink-0">
                  {feature.icon}
                </div>
                <p className="text-sm font-medium leading-snug">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>

          {/* Show More/Less Button */}
          {data?.features?.list?.length > 12 && (
            <div className="mt-12 flex justify-center">
              <button 
                onClick={() => setShowMoreFeatures(!showMoreFeatures)}
                className="flex items-center gap-2 border border-white/20 hover:border-white/40 rounded-full px-6 py-3 text-sm transition-colors font-medium bg-transparent text-white"
              >
                {showMoreFeatures ? "Show Less" : "Show More"}
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showMoreFeatures ? "rotate-180" : ""}`} />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ========================================================= */}
      {/* 11. PROCESS / TIMELINE SECTION */}
      {/* ========================================================= */}
      <section className="w-full bg-[#050505] py-24 px-6 lg:px-16 text-white overflow-hidden">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-500 to-blue-600 text-transparent bg-clip-text mb-6 tracking-tight pb-2 max-w-4xl mx-auto whitespace-pre-line text-balance line-clamp-2">
              {data?.process?.title}
            </h2>
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto">
              {data?.process?.subtitle}
            </p>
          </div>

          {/* Timeline */}
          <div className="relative" ref={timelineRef}>
            {/* Center Line Container */}
            <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-[2px] bg-[#1a1a1a] lg:-translate-x-1/2"></div>
            {/* Active Blue Line */}
            <div 
              className="absolute left-4 lg:left-1/2 top-0 w-[2px] bg-gradient-to-b from-cyan-500 to-blue-600 lg:-translate-x-1/2 transition-all duration-300 ease-out"
              style={{ height: `${timelineProgress * 100}%` }}
            ></div>

            <div className="space-y-16 lg:space-y-24">
              {data?.process?.steps?.map((step, idx) => {
                const nodePosition = idx / Math.max(1, (data.process.steps.length - 1));
                const isActive = timelineProgress >= (nodePosition * 0.95); // Slight offset for visual sync
                return (
                  <div key={idx} className="relative flex flex-col lg:flex-row items-start lg:items-center w-full group">
                    
                    {/* Center Node */}
                    <div className={`absolute left-4 lg:left-1/2 w-4 h-4 rounded-full -translate-x-1/2 mt-1 lg:mt-0 z-10 transition-colors duration-500 box-content border-[4px] ${isActive ? "bg-cyan-500 border-[#050505] shadow-[0_0_15px_rgba(6,182,212,0.5)]" : "bg-[#1a1a1a] border-[#050505]"}`}>
                    </div>

                    {/* Left Content (Title) */}
                    <div className="w-full lg:w-1/2 pl-12 lg:pl-0 lg:pr-24 text-left lg:text-right mb-4 lg:mb-0">
                      <h3 className={`text-xl lg:text-2xl font-bold transition-colors duration-500 ${isActive ? 'text-white' : 'text-slate-200'}`}>
                        {step.title}
                      </h3>
                    </div>

                    {/* Right Content (Description) */}
                    <div className="w-full lg:w-1/2 pl-12 lg:pl-24 text-left">
                      <p className="text-base md:text-lg text-slate-400 leading-relaxed max-w-md">
                        {step.desc}
                      </p>
                    </div>

                  </div>
                );
              })}
            </div>
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
            {data?.faqs?.list?.map((faq, idx) => (
              <div 
                key={idx} 
                className="bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden transition-all duration-300"
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none group hover:bg-[#111] transition-colors"
                >
                  <span className="font-semibold text-sm lg:text-base pr-4 group-hover:text-blue-400 transition-colors">
                    {faq.q}
                  </span>
                  <div className={`shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${openFaq === idx ? 'border-blue-500 bg-blue-500 text-white' : 'border-white/20 text-white/50 group-hover:border-white/50 group-hover:text-white'}`}>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${openFaq === idx ? "rotate-180" : ""}`} />
                  </div>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === idx ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <div className="px-6 pb-6 pt-2 text-slate-400 text-sm lg:text-base leading-relaxed border-t border-white/5 mt-2">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subsequent sections will be added here based on your images */}

    </div>
  );
}
