// import React, { useState, useEffect, useRef } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import {
//   X,
//   MessageSquare,
//   User,
//   Mail,
//   Phone,
//   ChevronDown,
//   ShieldCheck,
//   Clock3,
//   ArrowRight,
//   CheckCircle,
// } from "lucide-react";
// import "./LeadFormModal.css";

// export default function LeadFormModal() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [pendingUrl, setPendingUrl] = useState(null);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSuccess, setIsSuccess] = useState(false);

//   // Form fields
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     countryCode: "+91",
//     contactNumber: "",
//     projectDetails: "",
//   });

//   const [errors, setErrors] = useState({});

//   const modalRef = useRef(null);
//   const navigate = useNavigate();

//   const location = useLocation();

//   // 10-second trigger after page load or navigation
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       // Keep track of which pages we've shown it on so we don't spam if they click back
//       const shownPaths = JSON.parse(sessionStorage.getItem("leadPopupShownPaths") || "{}");
//       if (!shownPaths[location.pathname]) {
//         setIsOpen(true);
//         shownPaths[location.pathname] = true;
//         sessionStorage.setItem("leadPopupShownPaths", JSON.stringify(shownPaths));
//       }
//     }, 10000);
    
//     return () => clearTimeout(timer);
//   }, [location.pathname]);

//   // Global click listener to intercept navigation
//   useEffect(() => {
//     const handleGlobalClick = (e) => {
//       // Find closest element with data-lead-trigger="true"
//       const triggerElement = e.target.closest('[data-lead-trigger="true"]');
//       if (triggerElement) {
//         // Prevent default navigation
//         e.preventDefault();
//         e.stopPropagation();

//         const destUrl = triggerElement.getAttribute("href");
//         if (destUrl) {
//           setPendingUrl(destUrl);
//           setIsOpen(true);
//         }
//       }
//     };

//     // Use capture phase to intercept before React Router does
//     document.addEventListener("click", handleGlobalClick, true);

//     return () => {
//       document.removeEventListener("click", handleGlobalClick, true);
//     };
//   }, []);

//   // Handle body scroll locking and keyboard escape
//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (e.key === "Escape" && isOpen) {
//         closeModal();
//       }
//     };

//     if (isOpen) {
//       document.body.style.overflow = "hidden";
//       document.addEventListener("keydown", handleKeyDown);
//     } else {
//       document.body.style.overflow = "";
//     }

//     return () => {
//       document.body.style.overflow = "";
//       document.removeEventListener("keydown", handleKeyDown);
//     };
//   }, [isOpen]);

//   const closeModal = () => {
//     setIsOpen(false);
//     // Reset state on close if needed, except success if we want to show it again (usually we do reset)
//     setTimeout(() => {
//       setIsSuccess(false);
//       setFormData({
//         fullName: "",
//         email: "",
//         countryCode: "+91",
//         contactNumber: "",
//         projectDetails: "",
//       });
//       setErrors({});
//     }, 500);

//     // Continue navigation if pending
//     if (pendingUrl) {
//       const url = pendingUrl;
//       setPendingUrl(null);
//       // Navigate to the intercepted URL
//       if (url.startsWith("http")) {
//         window.location.href = url;
//       } else {
//         navigate(url);
//       }
//     }
//   };

//   const validateForm = () => {
//     let newErrors = {};
//     if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    
//     if (!formData.email.trim()) {
//       newErrors.email = "Email is required";
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = "Email format is invalid";
//     }

//     if (!formData.projectDetails.trim()) {
//       newErrors.projectDetails = "Project details are required";
//     }

//     if (!formData.contactNumber.trim()) {
//       newErrors.contactNumber = "Contact number is required";
//     } else if (!/^\d+$/.test(formData.contactNumber.replace(/[\s-]/g, ''))) {
//       newErrors.contactNumber = "Please enter a valid number";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       setIsSubmitting(true);
//       // Simulate API call
//       setTimeout(() => {
//         setIsSubmitting(false);
//         setIsSuccess(true);
//       }, 1500);
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     if (errors[e.target.name]) {
//       setErrors({ ...errors, [e.target.name]: null });
//     }
//   };

//   if (!isOpen) return null;

//   return (
//     <div 
//       className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6"
//       role="dialog"
//       aria-modal="true"
//       aria-labelledby="modal-title"
//     >
//       {/* Backdrop */}
//       <div 
//         className="fixed inset-0 bg-slate-900/60 backdrop-blur-md transition-opacity duration-600"
//         onClick={closeModal}
//       />

//       {/* Modal Container */}
//       <div 
//         ref={modalRef}
//         className="relative w-full max-w-[1050px] w-[95vw] h-auto max-h-[90vh] bg-white rounded-[24px] shadow-[0_20px_60px_-15px_rgba(0,87,255,0.15)] flex flex-col md:flex-row overflow-hidden animate-modal-enter ring-1 ring-blue-500/10"
//       >
//         {/* Close Button (Compact) */}
//         <button
//           onClick={closeModal}
//           aria-label="Close consultation form"
//           className="absolute top-3 right-3 md:top-4 md:right-4 z-50 w-8 h-8 md:w-10 md:h-10 bg-slate-50 md:bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md text-slate-500 hover:text-blue-600 transition-all duration-300 group ring-1 ring-slate-200 hover:ring-blue-200"
//         >
//           <X size={20} className="transition-transform duration-300 group-hover:rotate-90 group-hover:scale-110" />
//         </button>

//         {/* LEFT COLUMN - Creative Project Intro */}
//         <div className="hidden md:flex flex-col w-[42%] bg-gradient-to-br from-[#f0f5ff] via-white to-[#e6f0ff] p-6 lg:p-10 relative overflow-hidden shrink-0 border-r border-blue-50/50 animate-slide-left stagger-1">
//           {/* Abstract Decorations */}
//           <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-300/30 to-transparent rounded-full blur-3xl pointer-events-none" />
//           <div className="absolute bottom-10 left-10 w-48 h-48 bg-gradient-to-tr from-cyan-300/20 to-transparent rounded-full blur-2xl pointer-events-none" />
//           <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.03] pointer-events-none" />

//           {/* Header */}
//           <div className="relative z-10 animate-fade-up stagger-2">
//             <div className="inline-block px-3 py-1 rounded-full border border-blue-200 bg-white/50 text-blue-600 text-[10px] font-bold uppercase tracking-widest mb-4 backdrop-blur-sm shadow-sm">
//               Let's Connect
//             </div>
//             <h2 className="text-3xl lg:text-4xl font-extrabold text-[#071B41] leading-[1.1] tracking-tight mb-3">
//               Let's Bring<br />Your Idea<br />
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0057FF] to-cyan-500">
//                 to Life
//               </span>
//             </h2>
//             <p className="text-slate-600 text-sm lg:text-base leading-relaxed max-w-sm font-medium">
//               Share your project details and our experts will get in touch with you shortly.
//             </p>
//           </div>

//           {/* Illustration Area */}
//           <div className="relative flex-grow w-full flex items-end justify-center pb-12 animate-fade-up stagger-3 z-10">
//             {/* Background Decor */}
//             <div className="absolute right-0 bottom-10 w-48 h-32 bg-blue-100/40 rounded-t-full blur-xl pointer-events-none" />
//             <div className="absolute left-0 top-10 w-32 h-32 bg-blue-100/50 rounded-full blur-2xl pointer-events-none" />
//             {/* Dot Grid */}
//             <div className="absolute right-4 bottom-16 w-24 h-24 bg-[radial-gradient(#93c5fd_2px,transparent_2px)] [background-size:16px_16px] opacity-40 pointer-events-none" />

//             {/* Desk Surface Line */}
//             <div className="absolute bottom-6 left-2 right-2 h-1.5 bg-[#dbeafe] rounded-full z-0" />

//             {/* Plant */}
//             <div className="absolute bottom-6 left-6 z-10 flex flex-col items-center">
//               {/* Leaves */}
//               <div className="relative w-16 h-20 mb-[-12px]">
//                 <div className="absolute bottom-2 left-1/2 -translate-x-6 w-5 h-12 bg-[#60a5fa] rounded-full rounded-tl-none origin-bottom -rotate-[35deg] opacity-90 shadow-sm" />
//                 <div className="absolute bottom-2 left-1/2 -translate-x-2 w-7 h-16 bg-[#3b82f6] rounded-[100%_0_100%_0] origin-bottom -rotate-12 shadow-sm" />
//                 <div className="absolute bottom-2 left-1/2 translate-x-1 w-6 h-14 bg-[#2563eb] rounded-[0_100%_0_100%] origin-bottom rotate-[25deg] shadow-sm" />
//                 <div className="absolute bottom-0 left-1/2 translate-x-4 w-4 h-10 bg-[#3b82f6] rounded-[0_100%_0_100%] origin-bottom rotate-[45deg] opacity-90 shadow-sm" />
//               </div>
//               {/* Pot */}
//               <div className="w-10 h-8 bg-[#3b82f6] rounded-b-xl border-t-2 border-[#2563eb] shadow-md relative z-10">
//                 <div className="absolute top-1 left-2 w-1.5 h-4 bg-white/30 rounded-full" />
//               </div>
//             </div>

//             {/* Laptop */}
//             <div className="relative z-20 flex flex-col items-center ml-4 mb-2">
//               {/* Screen */}
//               <div className="w-40 h-28 bg-white rounded-lg shadow-[0_8px_16px_rgba(0,0,0,0.06)] border border-blue-50 flex items-center justify-center transform -rotate-[8deg] origin-bottom-left translate-x-6 translate-y-1 z-20">
//                 {/* Logo glow */}
//                 <div className="w-5 h-5 bg-blue-50 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.2)]" />
//               </div>
//               {/* Base */}
//               <div className="w-48 h-2.5 bg-white rounded-full shadow-[0_4px_6px_rgba(0,0,0,0.1)] z-10 translate-x-2" />
//               <div className="w-12 h-1 bg-slate-200 rounded-full absolute bottom-0 left-1/2 -translate-x-1/2 z-30 translate-x-2" />
//             </div>

//             {/* Blue Object / Book */}
//             <div className="absolute bottom-7 right-14 w-24 h-16 bg-gradient-to-tr from-[#2563eb] to-[#60a5fa] rounded-t-xl rounded-br-lg shadow-lg z-10 transform skew-x-[-10deg]">
//                <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#1d4ed8] rounded-br-lg" />
//                <div className="absolute bottom-2 left-2 w-10 h-1 bg-white/80 rounded-full" />
//             </div>

//             {/* Paper Plane & Path */}
//             <svg className="absolute top-0 right-8 w-40 h-32 pointer-events-none z-10" viewBox="0 0 160 120">
//               <path 
//                 d="M 10,120 C 50,110 30,30 70,60 C 110,90 90,40 140,20" 
//                 fill="none" 
//                 stroke="#93c5fd" 
//                 strokeWidth="2" 
//                 strokeDasharray="6 6" 
//                 className="animate-[dash_10s_linear_infinite]"
//               />
//             </svg>
//             <div className="absolute -top-2 right-4 text-[#2563eb] rotate-[25deg] animate-[bounce_3s_infinite]">
//                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                   <path d="M22 2L15 22L11 13L2 9L22 2Z" fill="currentColor" />
//                </svg>
//             </div>
//           </div>

//           {/* Trust Metrics */}
//           <div className="relative z-20 mt-auto bg-white rounded-[20px] shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-blue-50/50 p-4 flex items-center justify-between animate-fade-up stagger-4 w-full">
//             <div className="flex items-center gap-2.5 w-1/3 justify-center">
//               <div className="w-7 h-7 rounded-full border-2 border-[#2563eb] flex items-center justify-center shrink-0">
//                  <Clock3 size={14} className="text-[#2563eb] stroke-[2.5]" />
//               </div>
//               <div className="flex flex-col">
//                 <span className="text-[11px] font-extrabold text-[#071B41] leading-tight">24-Hour</span>
//                 <span className="text-[10px] text-slate-500 font-medium leading-tight">Response</span>
//               </div>
//             </div>
//             <div className="w-[1px] h-8 bg-blue-100/60" />
//             <div className="flex items-center gap-2.5 w-1/3 justify-center">
//               <div className="w-7 h-7 rounded-full border-2 border-[#2563eb] flex items-center justify-center shrink-0 overflow-hidden">
//                  <User size={14} className="text-[#2563eb] stroke-[2.5] mt-1" />
//               </div>
//               <div className="flex flex-col">
//                 <span className="text-[11px] font-extrabold text-[#071B41] leading-tight">Expert</span>
//                 <span className="text-[10px] text-slate-500 font-medium leading-tight">Consultation</span>
//               </div>
//             </div>
//             <div className="w-[1px] h-8 bg-blue-100/60" />
//             <div className="flex items-center gap-2.5 w-1/3 justify-center">
//               <div className="w-7 h-7 rounded-full border-2 border-[#2563eb] flex items-center justify-center shrink-0">
//                  <ShieldCheck size={14} className="text-[#2563eb] stroke-[2.5]" />
//               </div>
//               <div className="flex flex-col">
//                 <span className="text-[11px] font-extrabold text-[#071B41] leading-tight">100%</span>
//                 <span className="text-[10px] text-slate-500 font-medium leading-tight">Confidential</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* RIGHT COLUMN - Lead Form */}
//         <div className="flex-1 bg-white p-6 lg:p-10 flex flex-col overflow-y-auto lead-modal-scroll relative">
          
//           {isSuccess ? (
//             <div className="flex flex-col items-center justify-center text-center h-full animate-fade-up">
//               <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mb-6 animate-check-pop">
//                 <CheckCircle size={48} className="text-green-500" />
//               </div>
//               <h3 className="text-4xl font-extrabold text-[#071B41] mb-4">Thank You!</h3>
//               <p className="text-slate-600 text-lg mb-8 max-w-sm">
//                 Your project details have been received. Our team will get in touch with you shortly.
//               </p>
//               <button
//                 onClick={closeModal}
//                 className="px-8 py-4 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-xl transition-colors duration-300"
//               >
//                 Continue Exploring
//               </button>
//             </div>
//           ) : (
//             <div className="max-w-2xl mx-auto w-full my-auto pb-8">
//               {/* Mobile Header (Hidden on Desktop) */}
//               <div className="md:hidden mb-8 text-center animate-fade-up stagger-1 mt-4">
//                  <div className="inline-block px-3 py-1 rounded-full border border-blue-200 bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-widest mb-4">
//                   Let's Connect
//                 </div>
//                 <h2 className="text-3xl font-extrabold text-[#071B41] leading-tight mb-2">
//                   Let's Bring Your Idea <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0057FF] to-cyan-500">to Life</span>
//                 </h2>
//               </div>

//               <div className="animate-fade-up stagger-2 mb-6 hidden md:block">
//                 <h3 id="modal-title" className="text-2xl lg:text-3xl font-extrabold text-[#071B41] mb-2">
//                   Tell us about your project
//                 </h3>
//                 <p className="text-slate-500 text-sm font-medium">
//                   Fill in the details below and we'll get back to you.
//                 </p>
//               </div>

//               <form onSubmit={handleSubmit} className="space-y-4">
                
//                 {/* ROW 1: Name & Email */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-up stagger-3">
//                   {/* Full Name */}
//                   <div className="flex flex-col gap-1.5">
//                     <label className="text-xs font-bold text-[#071B41] ml-1">Full Name</label>
//                     <div className={`form-field-group relative flex items-center bg-white border ${errors.fullName ? 'border-red-300' : 'border-[#DCE5F2] focus-within:border-[#0057FF] focus-within:ring-4 focus-within:ring-[#0057FF]/10'} rounded-xl h-[52px] px-4 transition-all duration-250 group`}>
//                       <User size={18} className={`shrink-0 transition-colors ${errors.fullName ? 'text-red-400' : 'text-slate-400 group-focus-within:text-[#0057FF]'}`} />
//                       <input 
//                         type="text" 
//                         name="fullName"
//                         value={formData.fullName}
//                         onChange={handleChange}
//                         placeholder="John Doe"
//                         className="w-full h-full bg-transparent border-none outline-none pl-3 text-slate-800 placeholder:text-slate-400 text-sm font-medium"
//                       />
//                     </div>
//                     {errors.fullName && <span className="text-red-500 text-[10px] font-semibold ml-2">{errors.fullName}</span>}
//                   </div>

//                   {/* Business Email */}
//                   <div className="flex flex-col gap-1.5">
//                     <label className="text-xs font-bold text-[#071B41] ml-1">Business Email*</label>
//                     <div className={`form-field-group relative flex items-center bg-white border ${errors.email ? 'border-red-300' : 'border-[#DCE5F2] focus-within:border-[#0057FF] focus-within:ring-4 focus-within:ring-[#0057FF]/10'} rounded-xl h-[52px] px-4 transition-all duration-250 group`}>
//                       <Mail size={18} className={`shrink-0 transition-colors ${errors.email ? 'text-red-400' : 'text-slate-400 group-focus-within:text-[#0057FF]'}`} />
//                       <input 
//                         type="email" 
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         placeholder="john@company.com"
//                         className="w-full h-full bg-transparent border-none outline-none pl-3 text-slate-800 placeholder:text-slate-400 text-sm font-medium"
//                       />
//                     </div>
//                     {errors.email && <span className="text-red-500 text-[10px] font-semibold ml-2">{errors.email}</span>}
//                   </div>
//                 </div>

//                 {/* ROW 2: Project Details */}
//                 <div className="flex flex-col gap-1.5 animate-fade-up stagger-4">
//                   <label className="text-xs font-bold text-[#071B41] ml-1">Project Details</label>
//                   <div className={`form-field-group relative flex bg-white border ${errors.projectDetails ? 'border-red-300' : 'border-[#DCE5F2] focus-within:border-[#0057FF] focus-within:ring-4 focus-within:ring-[#0057FF]/10'} rounded-xl p-4 transition-all duration-250 group`}>
//                     <MessageSquare size={18} className={`shrink-0 mt-0.5 transition-colors ${errors.projectDetails ? 'text-red-400' : 'text-slate-400 group-focus-within:text-[#0057FF]'}`} />
//                     <textarea 
//                       name="projectDetails"
//                       value={formData.projectDetails}
//                       onChange={handleChange}
//                       placeholder="Describe Your Project/Idea"
//                       className="w-full h-[80px] md:h-[100px] bg-transparent border-none outline-none pl-3 text-slate-800 placeholder:text-slate-400 text-sm font-medium resize-none"
//                     />
//                   </div>
//                   {errors.projectDetails && <span className="text-red-500 text-[10px] font-semibold ml-2">{errors.projectDetails}</span>}
//                 </div>

//                 {/* ROW 3: Contact Number */}
//                 <div className="flex flex-col gap-1.5 animate-fade-up stagger-5">
//                   <label className="text-xs font-bold text-[#071B41] ml-1">Contact Number*</label>
//                   <div className="flex flex-col md:flex-row gap-4">
//                     {/* Country Code */}
//                     <div className="form-field-group relative flex items-center bg-white border border-[#DCE5F2] focus-within:border-[#0057FF] focus-within:ring-4 focus-within:ring-[#0057FF]/10 rounded-xl h-[52px] px-4 transition-all duration-250 group md:w-[35%] shrink-0">
//                       <Phone size={18} className="shrink-0 text-slate-400 group-focus-within:text-[#0057FF] transition-colors" />
//                       <select 
//                         name="countryCode"
//                         value={formData.countryCode}
//                         onChange={handleChange}
//                         className="w-full h-full bg-transparent border-none outline-none pl-2 text-slate-800 text-sm font-bold appearance-none cursor-pointer"
//                       >
//                         <option value="+91">+91 (IN)</option>
//                         <option value="+1">+1 (US)</option>
//                         <option value="+44">+44 (UK)</option>
//                         <option value="+61">+61 (AU)</option>
//                       </select>
//                       <ChevronDown size={14} className="text-slate-400 pointer-events-none" />
//                     </div>
                    
//                     {/* Phone Input */}
//                     <div className={`form-field-group relative flex items-center bg-white border ${errors.contactNumber ? 'border-red-300' : 'border-[#DCE5F2] focus-within:border-[#0057FF] focus-within:ring-4 focus-within:ring-[#0057FF]/10'} rounded-xl h-[52px] px-4 transition-all duration-250 group w-full`}>
//                       <input 
//                         type="tel" 
//                         name="contactNumber"
//                         value={formData.contactNumber}
//                         onChange={handleChange}
//                         placeholder="98765 43210"
//                         className="w-full h-full bg-transparent border-none outline-none text-slate-800 placeholder:text-slate-400 text-sm font-medium"
//                       />
//                     </div>
//                   </div>
//                   {errors.contactNumber && <span className="text-red-500 text-[10px] font-semibold ml-2">{errors.contactNumber}</span>}
//                 </div>

//                 {/* Submit Button */}
//                 <div className="pt-2 animate-fade-up stagger-6">
//                   <button 
//                     type="submit"
//                     disabled={isSubmitting}
//                     className="relative w-full h-[56px] bg-gradient-to-r from-[#0057FF] to-cyan-500 hover:from-[#0A2FFF] hover:to-cyan-400 rounded-xl flex items-center justify-center gap-2 text-white font-extrabold text-base shadow-[0_8px_20px_-8px_rgba(0,87,255,0.4)] hover:shadow-[0_12px_25px_-8px_rgba(0,87,255,0.5)] hover:-translate-y-1 transition-all duration-300 overflow-hidden group btn-sweep disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
//                   >
//                     {isSubmitting ? (
//                       <span className="flex items-center gap-2">
//                         <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                           <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                           <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                         </svg>
//                         Scheduling...
//                       </span>
//                     ) : (
//                       <>
//                         <span>Schedule Free Consultation</span>
//                         <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1 relative z-10" />
//                       </>
//                     )}
//                   </button>
                  
//                   <div className="flex items-center justify-center gap-2 mt-4 text-slate-400">
//                     <ShieldCheck size={12} className="text-blue-500" />
//                     <span className="text-[10px] font-medium tracking-wide">We respect your privacy. No spam, ever.</span>
//                   </div>
//                 </div>

//               </form>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

export default function LeadFormModal() {
  return null;
}

