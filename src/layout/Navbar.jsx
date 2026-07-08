import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const NAV_ITEMS = [
  {
    label: "Services",
    href: "services",
    subItems: [
      {label: "Software Development", href:"services/software-development"},
      { label: "Mobile Development", href: "services/mobile-development" },
      { label: "Web Development", href: "services/web-development" },
      { label: "Digital Marketing", href: "services/digital-marketing" },
      { label: "CRM Solutions", href: "services/crm" },
      {label:"AI Solutions" ,href:"services/ai-solutions"}
      
    ],
  },
  { label: "Process", href: "process" },
  { label: "Why Us", href: "whyChooseUs" },
  { label: "Blog", href: "blog" },
  { label: "About", href: "about" },
  // { label: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Blur effect for the top gap when scrolled */}
      <div 
        className={`fixed top-0 left-0 right-0 h-4 z-40 transition-all duration-500 ease-in-out pointer-events-none
          ${isScrolled ? "bg-white/60 backdrop-blur-md opacity-100" : "bg-transparent opacity-0"}
        `}
      />

      <nav
        className={`fixed z-50 transition-all duration-500 ease-in-out left-0 right-0 mx-auto border transform-gpu
          ${
            isScrolled
              ? "top-4 w-[95%] max-w-7xl bg-white/75 backdrop-blur-xl border-white/30 rounded-2xl shadow-[0_8px_32px_rgba(31,38,135,0.15)]"
              : "top-0 w-full max-w-full bg-transparent border-transparent rounded-none"
          }
        `}
      >
        <div 
          className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 via-cyan-500/10 to-blue-500/5 pointer-events-none transition-opacity duration-500
            ${isScrolled ? "opacity-100" : "opacity-0"}
          `} 
        />

        <div className="relative container mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-[64px]">
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src="https://res.cloudinary.com/dij2x0ixo/image/upload/e_background_removal/f_png/v1782032673/SyncTechWhiteLogo_bt3s0u.webp"
                alt="SyncTechn Logo"
                className="w-15 h-15"
              />

              <span className="text-2xl font-bold tracking-tight text-blue-800">
                Sync<span className="text-cyan-400">Techn</span>
              </span>
            </Link>

            <div className="hidden lg:flex items-center h-full">
              {NAV_ITEMS.map((item) => {
                if (item.subItems) {
                  return (
                    <div
                      key={item.label}
                      className="relative h-full flex items-center group cursor-pointer"
                    >
                      <Link
                        to={isHomePage ? item.href : `/${item.href}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        
                        className="relative px-5 h-full flex items-center font-semibold transition-all duration-300 text-slate-700 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600"
                      >
                        {item.label}
                        <ChevronDown
                          size={16}
                          className="ml-1 text-slate-400 group-hover:text-blue-500 transition-transform duration-300 group-hover:rotate-180"
                        />
                        <span className="absolute bottom-0 left-1/2 h-[3px] w-0 bg-gradient-to-r from-cyan-500 to-blue-600 transition-all duration-300 group-hover:w-full group-hover:left-0" />
                      </Link>

                      <div className="absolute top-[64px] left-0 mt-0 w-64 bg-white/95 backdrop-blur-xl border border-slate-100 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 overflow-hidden">
                        <div className="py-2">
                          {item.subItems.map((subItem) => (
                            <Link
                              key={subItem.label}
                              to={`/${subItem.href}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              
                              className="block px-5 py-3 text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-blue-50/50 transition-colors"
                            >
                              {subItem.label}
                            </Link>
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
                    target="_blank"
                    rel="noopener noreferrer"
                    
                    className="relative px-5 h-full flex items-center font-semibold transition-all duration-300 text-slate-700 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 group"
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-1/2 h-[3px] w-0 bg-gradient-to-r from-cyan-500 to-blue-600 transition-all duration-300 group-hover:w-full group-hover:left-0" />
                  </Link>
                );
              })}
            </div>

            <div className="hidden lg:block">
              <Link
                to="/contact-us"
                
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>

            <button
              className="lg:hidden text-slate-900"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white/95 backdrop-blur-xl rounded-b-2xl">
            <div className="flex flex-col py-4">
              {NAV_ITEMS.map((item) => {
                if (item.subItems) {
                  return (
                    <div
                      key={item.label}
                      className="flex flex-col border-b border-slate-100"
                    >
                      <div className="px-6 py-4 flex items-center justify-between text-slate-700 font-medium hover:bg-blue-50 hover:text-blue-600 transition-all">
                        <Link
                          to={isHomePage ? item.href : `/${item.href}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setIsOpen(false)}
                          
                        >
                          {item.label}
                        </Link>
                      </div>
                      <div className="flex flex-col bg-slate-50/50 pb-2">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.label}
                            to={`/${subItem.href}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setIsOpen(false)}
                            
                            className="px-10 py-3 text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                          >
                            {subItem.label}
                          </Link>
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
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    
                    className="px-6 py-4 text-slate-700 font-medium border-b border-slate-100 hover:bg-blue-50 hover:text-blue-600 transition-all"
                  >
                    {item.label}
                  </Link>
                );
              })}
              <div className="px-6 py-4">
                <Link
                  to="/contact-us"
                  onClick={() => setIsOpen(false)}
                  
                  className="block text-center py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
      <div className="h-[90px]" />
    </>
  );
};

export default Navbar;
