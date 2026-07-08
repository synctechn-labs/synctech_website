import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Layout from "./layout/Layout";
import HomePage from "./pages/home/HomePage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiesPolicy from "./pages/CookiesPolicy";
import ServicesLandingPage from "./pages/ServicesLandingPage";
import MobileDevelopment from "./pages/services/MobileDevelopment";
import WebDevelopment from "./pages/services/WebDevelopment";
import SoftwareDevelopment from "./pages/services/SoftwareDevelopment";
import AISolutions from "./pages/services/AISolutions"
import DigitalMarketing from "./pages/services/DigitalMarketing";
import CRMSolutions from "./pages/services/CRMSolutions";
import Careers from "./pages/Careers";
import ContactUs from "./pages/ContactUs";
import NotFound from "./pages/NotFound";
import BlogList from "./pages/blog/BlogList";
import BlogDetails from "./pages/blog/BlogDetails";
import ProcessPage from "./pages/ProcessPage";
import AboutPage from "./pages/AboutPage";
import WhyChooseUsPage from "./pages/WhyChooseUsPage";

function App() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      // Find element by id (removing the # character)
      const element = document.getElementById(hash.slice(1));
      if (element) {
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
        return () => clearTimeout(timer);
      }
    } else {
      // Scroll to top on page changes
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [hash, pathname]);

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-white">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-Service" element={<TermsOfService />} />
          <Route path="/cookies-policy" element={<CookiesPolicy />} />
          <Route path="/services">
            <Route index element={<ServicesLandingPage />} />
            <Route path="mobile-development" element={<MobileDevelopment />} />
            <Route path="web-development" element={<WebDevelopment />} />
            <Route path="digital-marketing" element={<DigitalMarketing />} />
            <Route path="software-development" element={<SoftwareDevelopment />} />
            <Route path="ai-solutions" element={<AISolutions />} />
            <Route path="crm" element={<CRMSolutions />} />
          </Route>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/whyChooseUs" element={<WhyChooseUsPage />} />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
