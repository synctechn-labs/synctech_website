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
import ERPSolutions from "./pages/services/ERPSolutions";
import SaaSSolutions from "./pages/services/SaaSSolutions";
import LegacyModernization from "./pages/services/LegacyModernization";
import WhiteLabelDevelopment from "./pages/services/WhiteLabelDevelopment";
import WebApplicationDevelopment from "./pages/services/WebApplicationDevelopment";
import AdminDashboardDevelopment from "./pages/services/AdminDashboardDevelopment";
import CustomerPortalDevelopment from "./pages/services/CustomerPortalDevelopment";
import BookingSystemDevelopment from "./pages/services/BookingSystemDevelopment";
import MobileApplicationDevelopment from "./pages/services/MobileApplicationDevelopment";
import HumanApprovalAutomation from "./pages/services/HumanApprovalAutomation";
import RoleBasedWorkspace from "./pages/services/RoleBasedWorkspace";
import OperationsExceptionManagement from "./pages/services/OperationsExceptionManagement";
import CustomCRMDevelopment from "./pages/services/CustomCRMDevelopment";
import BusinessProcessAutomation from "./pages/services/BusinessProcessAutomation";
import BusinessSystemIntegration from "./pages/services/BusinessSystemIntegration";
import APIDevelopmentIntegration from "./pages/services/APIDevelopmentIntegration";
import AIIntegrationServices from "./pages/services/AIIntegrationServices";
import AIWorkflowAgentDevelopment from "./pages/services/AIWorkflowAgentDevelopment";
import AIEmailOperations from "./pages/services/AIEmailOperations";
import AIDocumentVerification from "./pages/services/AIDocumentVerification";
import DocumentProcessingAutomation from "./pages/services/DocumentProcessingAutomation";
import SoftwareUsageIntelligence from "./pages/services/SoftwareUsageIntelligence";
import AIQualityControl from "./pages/services/AIQualityControl";
import MicroSaaSDevelopment from "./pages/services/MicroSaaSDevelopment";
import Careers from "./pages/Careers";
import ContactUs from "./pages/ContactUs";
import NotFound from "./pages/NotFound";
import BlogList from "./pages/blog/BlogList";
import BlogDetails from "./pages/blog/BlogDetails";
import ProcessPage from "./pages/ProcessPage";
import AboutPage from "./pages/AboutPage";
import WhyChooseUsPage from "./pages/WhyChooseUsPage";
import DemoPage from "./pages/DemoPage";
import DesignProHero from "./components/DesignProHero";
import DalaLandingPage from "./pages/DalaLandingPage";

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
            <Route path="mobile-app-development" element={<MobileDevelopment />} />
            <Route path="web-development" element={<WebDevelopment />} />
            <Route path="digital-marketing" element={<DigitalMarketing />} />
            <Route path="software-development" element={<SoftwareDevelopment />} />
            <Route path="ai-solutions" element={<AISolutions />} />
            <Route path="crm" element={<CRMSolutions />} />
            <Route path="custom-erp-development" element={<ERPSolutions />} />
            <Route path="saas-product-development" element={<SaaSSolutions />} />
            <Route path="legacy-software-modernization" element={<LegacyModernization />} />
            <Route path="white-label-software-development" element={<WhiteLabelDevelopment />} />
            <Route path="custom-web-application-development" element={<WebApplicationDevelopment />} />
            <Route path="admin-dashboard-development" element={<AdminDashboardDevelopment />} />
            <Route path="client-customer-portal-development" element={<CustomerPortalDevelopment />} />
            <Route path="booking-appointment-system-development" element={<BookingSystemDevelopment />} />
            <Route path="mobile-application-development" element={<MobileApplicationDevelopment />} />
            <Route path="human-approval-automation-systems" element={<HumanApprovalAutomation />} />
            <Route path="role-based-business-workspace-development" element={<RoleBasedWorkspace />} />
            <Route path="operations-exception-management-systems" element={<OperationsExceptionManagement />} />
            <Route path="custom-crm-development" element={<CustomCRMDevelopment />} />
            <Route path="business-process-automation" element={<BusinessProcessAutomation />} />
            <Route path="business-system-integration-hub" element={<BusinessSystemIntegration />} />
            <Route path="api-development-integration" element={<APIDevelopmentIntegration />} />
            <Route path="ai-integration-services" element={<AIIntegrationServices />} />
            <Route path="ai-workflow-agent-development" element={<AIWorkflowAgentDevelopment />} />
            <Route path="ai-email-operations-automation" element={<AIEmailOperations />} />
            <Route path="ai-document-verification-systems" element={<AIDocumentVerification />} />
            <Route path="document-processing-automation" element={<DocumentProcessingAutomation />} />
            <Route path="software-usage-intelligence-systems" element={<SoftwareUsageIntelligence />} />
            <Route path="ai-assisted-quality-control" element={<AIQualityControl />} />
            <Route path="micro-saas-development" element={<MicroSaaSDevelopment />} />
          </Route>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/whyChooseUs" element={<WhyChooseUsPage />} />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
        </Route>
        <Route path="/demo" element={<DemoPage />} />
        <Route path="/designpro" element={<DesignProHero />} />
        <Route path="/dala" element={<DalaLandingPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
