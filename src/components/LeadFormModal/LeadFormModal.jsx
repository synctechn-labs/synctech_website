"use client";
import React, { useState, useEffect, useRef } from "react";
import { X, ShieldCheck, CheckCircle } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";

export default function LeadFormModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [pendingUrl, setPendingUrl] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [captchaNum1, setCaptchaNum1] = useState(0);
  const [captchaNum2, setCaptchaNum2] = useState(0);
  const [captchaInput, setCaptchaInput] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    countryCode: "+91",
    contactNumber: "",
    budget: "",
    projectDetails: "",
  });

  const [errors, setErrors] = useState({});

  const modalRef = useRef(null);
  const navigate = useRouter();
  const location = { pathname: usePathname() };

  // (Removed 10-second auto-trigger per user request)

  // Global click listener to intercept navigation
  useEffect(() => {
    const handleGlobalClick = (e) => {
      const triggerElement = e.target.closest('[data-lead-trigger="true"]');
      if (triggerElement) {
        e.preventDefault();
        e.stopPropagation();

        const destUrl = triggerElement.getAttribute("href");
        if (destUrl) {
          setPendingUrl(destUrl);
          setIsOpen(true);
        }
      }
    };

    document.addEventListener("click", handleGlobalClick, true);

    return () => {
      document.removeEventListener("click", handleGlobalClick, true);
    };
  }, []);

  // Handle body scroll locking and keyboard escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        closeModal();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      setCaptchaNum1(Math.floor(Math.random() * 10) + 1);
      setCaptchaNum2(Math.floor(Math.random() * 10) + 1);
    }
  }, [isOpen]);

  const closeModal = () => {
    setIsOpen(false);
    setTimeout(() => {
      setIsSuccess(false);
      setFormData({
        fullName: "",
        email: "",
        countryCode: "+91",
        contactNumber: "",
        budget: "",
        projectDetails: "",
      });
      setErrors({});
      setCaptchaInput("");
    }, 500);

    if (pendingUrl) {
      const url = pendingUrl;
      setPendingUrl(null);
      if (url.startsWith("http")) {
        window.location.href = url;
      } else {
        navigate.push(url);
      }
    }
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Required";
    
    if (!formData.email.trim()) {
      newErrors.email = "Required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid format";
    }

    if (!formData.contactNumber.trim()) {
      newErrors.contactNumber = "Required";
    }

    if (parseInt(captchaInput) !== captchaNum1 + captchaNum2) {
      newErrors.captcha = "Incorrect math";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      
      const formPayload = new FormData();
      formPayload.append("formType", "Popup Lead");
      formPayload.append("fullName", formData.fullName);
      formPayload.append("email", formData.email);
      formPayload.append("contactNumber", `${formData.countryCode} ${formData.contactNumber}`);
      formPayload.append("budget", formData.budget);
      formPayload.append("projectDetails", formData.projectDetails);
      
      const scriptURL = "https://script.google.com/macros/s/AKfycbwbD3RUzV7Yd3qHxMPieMIEpVCAq6sPXHHsMgzjGBQxtZMyU0-rTzP6CKM1vtm4hHA/exec";
      
      fetch(scriptURL, { 
        method: 'POST', 
        mode: 'no-cors',
        body: formPayload,
      }).catch(error => {
        console.error('Error submitting form in background:', error);
      }).finally(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
      });
    } else {
      if (errors.captcha) {
        setCaptchaNum1(Math.floor(Math.random() * 10) + 1);
        setCaptchaNum2(Math.floor(Math.random() * 10) + 1);
        setCaptchaInput("");
      }
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: null });
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 font-sans"
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={closeModal}
      />

      {/* Modal Container */}
      <div 
        ref={modalRef}
        className="relative w-full max-w-[480px] max-h-[90vh] overflow-y-auto bg-gradient-to-b from-[#0d1c2b] to-[#122b3c] rounded-[16px] shadow-2xl animate-fade-up text-white my-auto mx-auto"
      >
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 z-50 w-8 h-8 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>

        {isSuccess ? (
          <div className="flex flex-col items-center justify-center text-center p-8 h-[400px]">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
              <CheckCircle size={32} className="text-green-400" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Thank You!</h3>
            <p className="text-slate-300 mb-6 max-w-sm text-sm">
              Your project details have been received. Our team will get in touch with you shortly.
            </p>
            <button
              onClick={closeModal}
              className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <div className="p-6 lg:p-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-white leading-tight mb-6">
              Let's Discuss Your Software<br />Project
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Name */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-bold text-slate-100">Name</label>
                <input 
                  type="text" 
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className={`w-full bg-transparent border-b ${errors.fullName ? 'border-red-400' : 'border-slate-500/60 hover:border-slate-400'} focus:border-blue-400 outline-none pb-2 text-white placeholder:text-slate-500 text-base transition-colors`}
                />
              </div>

              {/* Contact Number */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-bold text-slate-100">Contact Number</label>
                <div className="flex gap-4">
                  <input
                    type="text"
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleChange}
                    className="w-16 bg-transparent border-b border-slate-500/60 hover:border-slate-400 focus:border-blue-400 outline-none pb-2 text-white text-base transition-colors shrink-0 text-center"
                  />
                  <input 
                    type="tel" 
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    placeholder="Enter Your Number*"
                    className={`w-full bg-transparent border-b ${errors.contactNumber ? 'border-red-400' : 'border-slate-500/60 hover:border-slate-400'} focus:border-blue-400 outline-none pb-2 text-white placeholder:text-slate-500 text-base transition-colors`}
                  />
                </div>
              </div>

              {/* Work Email */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-bold text-slate-100">Work Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email Address*"
                  className={`w-full bg-transparent border-b ${errors.email ? 'border-red-400' : 'border-slate-500/60 hover:border-slate-400'} focus:border-blue-400 outline-none pb-2 text-white placeholder:text-slate-500 text-base transition-colors`}
                />
              </div>

              {/* Budget Range */}
              <div className="flex flex-col gap-1.5 relative">
                <label className="text-sm font-bold text-slate-100">Budget Range</label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-slate-500/60 hover:border-slate-400 focus:border-blue-400 outline-none pb-2 text-slate-400 focus:text-white text-base transition-colors cursor-pointer appearance-none"
                >
                  <option value="" className="bg-[#122b3c] text-slate-400">Select a Budget Range</option>
                  <option value="<$10k" className="bg-[#122b3c] text-white">Under $10,000</option>
                  <option value="$10k-$50k" className="bg-[#122b3c] text-white">$10,000 - $50,000</option>
                  <option value="$50k-$100k" className="bg-[#122b3c] text-white">$50,000 - $100,000</option>
                  <option value=">$100k" className="bg-[#122b3c] text-white">Over $100,000</option>
                </select>
                {/* Custom arrow for select */}
                <div className="absolute right-0 top-[28px] pointer-events-none text-slate-500">
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              {/* Project Details */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-bold text-slate-100">Describe your project (Help us come back better prepared)</label>
                <textarea 
                  name="projectDetails"
                  value={formData.projectDetails}
                  onChange={handleChange}
                  placeholder="Describe your project"
                  className="w-full h-8 bg-transparent border-b border-slate-500/60 hover:border-slate-400 focus:border-blue-400 outline-none pb-1 text-white placeholder:text-slate-500 text-sm transition-colors resize-none pt-1"
                />
              </div>

              {/* Info Box */}
              <div className="bg-[#1e293b]/50 border border-slate-600/50 rounded-lg p-3 flex items-center justify-center gap-2 mt-4">
                <ShieldCheck size={16} fill="#f59e0b" stroke="#1e293b" />
                <span className="text-xs font-semibold text-white tracking-wide">
                  ✓ Free Consultation • NDA Available • 24-Hour Response
                </span>
              </div>

              {/* Footer row: Captcha and Submit */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-4">
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <span className="font-bold text-lg whitespace-nowrap">{captchaNum1} + {captchaNum2} =</span>
                  <input
                    type="text"
                    value={captchaInput}
                    onChange={(e) => {
                      setCaptchaInput(e.target.value);
                      if (errors.captcha) setErrors({ ...errors, captcha: null });
                    }}
                    className={`w-14 h-10 bg-white rounded-md text-slate-900 text-center font-bold text-base outline-none border-2 ${errors.captcha ? 'border-red-500' : 'border-transparent focus:border-blue-500'}`}
                  />
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto bg-[#0066ff] hover:bg-blue-600 text-white font-bold py-2.5 px-5 rounded-xl transition-colors flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed shadow-[0_4px_14px_0_rgba(0,102,255,0.39)] text-sm"
                >
                  {isSubmitting ? "Scheduling..." : "Schedule a Free Consultation"}
                </button>
              </div>

            </form>
          </div>
        )}
      </div>
    </div>
  );
}
