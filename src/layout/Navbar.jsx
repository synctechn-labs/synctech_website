import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const NAV_ITEMS = [
  { label: "Services", href: "services" },
  { label: "Process", href: "process" },
  { label: "Why Us", href: "whyChooseUs" },
  { label: "Blog", href: "blog" },
  { label: "About", href: "about" },
];

const SERVICES_MENU = [
  {
    category: "Software Development",
    href: "services/software-development",
    items: [
      { label: "Custom ERP Development", href: "services/custom-erp-development" },
      { label: "SaaS Product Development", href: "services/saas-product-development" },
      { label: "Legacy Software Modernization", href: "services/legacy-software-modernization" },
      { label: "White-Label Software Development", href: "services/white-label-software-development" },
    ]
  },
  {
    category: "Web Development",
    href: "services/web-development",
    items: [
      { label: "Custom Web Application Development", href: "services/custom-web-application-development" },
      { label: "Client & Customer Portal Development", href: "services/client-customer-portal-development" },
      { label: "Admin Dashboard Development", href: "services/admin-dashboard-development" },
      { label: "Booking & Appointment Systems", href: "services/booking-appointment-system-development" },
    ]
  },
  {
    category: "Mobile App Development",
    href: "services/mobile-app-development",
    items: [
      { label: "Mobile Application Development", href: "services/mobile-application-development" },
      { label: "Human Approval Automation Systems", href: "services/human-approval-automation-systems" },
      { label: "Role-Based Business Workspace Development", href: "services/role-based-business-workspace-development" },
      { label: "Operations Exception Management Systems", href: "services/operations-exception-management-systems" },
    ]
  },
  {
    category: "CRM Solutions",
    href: "services/crm",
    items: [
      { label: "Custom CRM Development", href: "services/custom-crm-development" },
      { label: "Business Process Automation", href: "services/business-process-automation" },
      { label: "Business System Integration Hub", href: "services/business-system-integration-hub" },
      { label: "API Development & Integration", href: "services/api-development-integration" },
    ]
  },
  {
    category: "AI Solutions",
    href: "services/ai-solutions",
    items: [
      { label: "AI Integration Services", href: "services/ai-integration-services" },
      { label: "AI Workflow Agent Development", href: "services/ai-workflow-agent-development" },
      { label: "AI Email Operations Automation", href: "services/ai-email-operations-automation" },
      { label: "AI Document Verification Systems", href: "services/ai-document-verification-systems" },
    ]
  },
  {
    category: "Digital Marketing",
    href: "services/digital-marketing",
    items: [
      { label: "Document Processing Automation", href: "services/document-processing-automation" },
      { label: "Software Usage Intelligence Systems", href: "services/software-usage-intelligence-systems" },
      { label: "AI-Assisted Quality Control Platforms", href: "services/ai-assisted-quality-control" },
      { label: "Micro-SaaS Development for Businesses", href: "services/micro-saas-development" },
    ]
  }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ---- Main Navbar ---- */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#060910]/30 backdrop-blur-xl border-b border-white/[0.04]"
            : "bg-[#060910] border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

          {/* Logo — existing content preserved */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="https://res.cloudinary.com/dij2x0ixo/image/upload/e_background_removal/f_png/v1782032673/SyncTechWhiteLogo_bt3s0u.webp"
              alt="SyncTech Logo"
              className="w-15 h-15"
            />
            <span className="text-2xl font-bold tracking-tight text-white">
              Sync<span className="text-blue-400">Techn</span>
            </span>
          </Link>

          {/* Desktop Nav — existing links preserved, dark theme applied */}
          <div className="hidden lg:flex items-center h-full">
            {NAV_ITEMS.map((item) => {
              if (item.label === "Services") {
                return (
                  <div
                    key={item.label}
                    className="relative h-full flex items-center group cursor-pointer"
                  >
                    <Link
                      to={isHomePage ? item.href : `/${item.href}`}
                      className="relative px-5 h-full flex items-center text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors duration-200"
                    >
                      {item.label}
                      <ChevronDown
                        size={15}
                        className="ml-1 text-slate-500 group-hover:text-blue-400 transition-transform duration-300 group-hover:rotate-180"
                      />
                    </Link>

                    {/* Mega Dropdown Panel — spans container width */}
                    <div className="absolute top-[80px] -left-[200px] xl:-left-[350px] w-[90vw] max-w-6xl bg-[#0d1117]/95 backdrop-blur-xl border border-white/[0.08] rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 overflow-hidden p-8 z-50">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
                        {SERVICES_MENU.map((cat) => (
                          <div key={cat.category} className="flex flex-col gap-3">
                            <Link
                              to={`/${cat.href}`}
                              className="font-bold text-slate-200 hover:text-blue-400 text-sm border-b border-white/[0.06] pb-2 mb-1 block transition-colors"
                            >
                              {cat.category}
                            </Link>
                            <div className="flex flex-col gap-2">
                              {cat.items.map((subItem) => (
                                <Link
                                  key={subItem.label}
                                  to={`/${subItem.href}`}
                                  className="text-xs text-slate-400 hover:text-cyan-400 hover:translate-x-1 transition-all duration-200 leading-snug"
                                >
                                  {subItem.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              const targetPath = isHomePage ? item.href : `/${item.href}`;
              return (
                <Link
                  key={item.label}
                  to={targetPath}
                  className="relative px-5 h-full flex items-center text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors duration-200"
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              to="/contact-us"
              className="glass-button-glow px-5 py-2.5 text-white text-sm font-semibold flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.3)]"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden p-2 text-slate-400 hover:text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer — dark glass style */}
        {isOpen && (
          <div className="lg:hidden absolute top-20 left-0 w-full bg-[#060910]/95 backdrop-blur-xl border-b border-white/[0.04] px-6 py-8 flex flex-col gap-6 max-h-[85vh] overflow-y-auto">
            <nav className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) => {
                if (item.label === "Services") {
                  return (
                    <div key={item.label} className="flex flex-col border-b border-white/[0.06]">
                      <div className="px-2 py-4 flex items-center justify-between text-slate-300 font-medium">
                        <Link
                          to={isHomePage ? item.href : `/${item.href}`}
                          onClick={() => setIsOpen(false)}
                        >
                          {item.label}
                        </Link>
                        <ChevronDown size={15} className="text-slate-500" />
                      </div>
                      <div className="flex flex-col pb-3 pl-4 gap-4">
                        {SERVICES_MENU.map((cat) => (
                          <div key={cat.category} className="flex flex-col gap-1.5">
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                              {cat.category}
                            </span>
                            <div className="flex flex-col pl-2 gap-1">
                              {cat.items.map((subItem) => (
                                <Link
                                  key={subItem.label}
                                  to={`/${subItem.href}`}
                                  onClick={() => setIsOpen(false)}
                                  className="py-1 text-sm font-medium text-slate-500 hover:text-blue-400 transition-colors"
                                >
                                  {subItem.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                }

                const targetPath = isHomePage ? item.href : `/${item.href}`;
                return (
                  <Link
                    key={item.label}
                    to={targetPath}
                    onClick={() => setIsOpen(false)}
                    className="px-2 py-4 text-slate-300 font-medium border-b border-white/[0.06] hover:text-blue-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            <div className="h-px bg-white/[0.06]" />
            <div className="flex flex-col gap-4">
              <Link
                to="/contact-us"
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-sm shadow-[0_0_20px_rgba(59,130,246,0.3)]"
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Spacer */}
      <div className="h-20" />
    </>
  );
};

export default Navbar;
