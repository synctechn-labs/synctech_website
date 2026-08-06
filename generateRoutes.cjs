const fs = require('fs');
const path = require('path');

const routes = [
  { path: 'app/(main)/page.jsx', component: 'HomePage', importPath: '@/pages/home/HomePage' },
  { path: 'app/(main)/privacy-policy/page.jsx', component: 'PrivacyPolicy', importPath: '@/pages/PrivacyPolicy' },
  { path: 'app/(main)/terms-of-Service/page.jsx', component: 'TermsOfService', importPath: '@/pages/TermsOfService' },
  { path: 'app/(main)/cookies-policy/page.jsx', component: 'CookiesPolicy', importPath: '@/pages/CookiesPolicy' },
  { path: 'app/(main)/services/page.jsx', component: 'ServicesLandingPage', importPath: '@/pages/ServicesLandingPage' },
  { path: 'app/(main)/services/mobile-app-development/page.jsx', component: 'MobileDevelopment', importPath: '@/pages/services/MobileDevelopment' },
  { path: 'app/(main)/services/web-development/page.jsx', component: 'WebDevelopment', importPath: '@/pages/services/WebDevelopment' },
  { path: 'app/(main)/services/digital-marketing/page.jsx', component: 'DigitalMarketing', importPath: '@/pages/services/DigitalMarketing' },
  { path: 'app/(main)/services/software-development/page.jsx', component: 'SoftwareDevelopment', importPath: '@/pages/services/SoftwareDevelopment' },
  { path: 'app/(main)/services/ai-solutions/page.jsx', component: 'AISolutions', importPath: '@/pages/services/AISolutions' },
  { path: 'app/(main)/services/crm/page.jsx', component: 'CRMSolutions', importPath: '@/pages/services/CRMSolutions' },
  { path: 'app/(main)/services/custom-erp-development/page.jsx', component: 'ERPSolutions', importPath: '@/pages/services/ERPSolutions' },
  { path: 'app/(main)/services/saas-product-development/page.jsx', component: 'SaaSSolutions', importPath: '@/pages/services/SaaSSolutions' },
  { path: 'app/(main)/services/legacy-software-modernization/page.jsx', component: 'LegacyModernization', importPath: '@/pages/services/LegacyModernization' },
  { path: 'app/(main)/services/white-label-software-development/page.jsx', component: 'WhiteLabelDevelopment', importPath: '@/pages/services/WhiteLabelDevelopment' },
  { path: 'app/(main)/services/custom-web-application-development/page.jsx', component: 'WebApplicationDevelopment', importPath: '@/pages/services/WebApplicationDevelopment' },
  { path: 'app/(main)/services/admin-dashboard-development/page.jsx', component: 'AdminDashboardDevelopment', importPath: '@/pages/services/AdminDashboardDevelopment' },
  { path: 'app/(main)/services/client-customer-portal-development/page.jsx', component: 'CustomerPortalDevelopment', importPath: '@/pages/services/CustomerPortalDevelopment' },
  { path: 'app/(main)/services/booking-appointment-system-development/page.jsx', component: 'BookingSystemDevelopment', importPath: '@/pages/services/BookingSystemDevelopment' },
  { path: 'app/(main)/services/mobile-application-development/page.jsx', component: 'MobileApplicationDevelopment', importPath: '@/pages/services/MobileApplicationDevelopment' },
  { path: 'app/(main)/services/human-approval-automation-systems/page.jsx', component: 'HumanApprovalAutomation', importPath: '@/pages/services/HumanApprovalAutomation' },
  { path: 'app/(main)/services/role-based-business-workspace-development/page.jsx', component: 'RoleBasedWorkspace', importPath: '@/pages/services/RoleBasedWorkspace' },
  { path: 'app/(main)/services/operations-exception-management-systems/page.jsx', component: 'OperationsExceptionManagement', importPath: '@/pages/services/OperationsExceptionManagement' },
  { path: 'app/(main)/services/custom-crm-development/page.jsx', component: 'CustomCRMDevelopment', importPath: '@/pages/services/CustomCRMDevelopment' },
  { path: 'app/(main)/services/business-process-automation/page.jsx', component: 'BusinessProcessAutomation', importPath: '@/pages/services/BusinessProcessAutomation' },
  { path: 'app/(main)/services/business-system-integration-hub/page.jsx', component: 'BusinessSystemIntegration', importPath: '@/pages/services/BusinessSystemIntegration' },
  { path: 'app/(main)/services/api-development-integration/page.jsx', component: 'APIDevelopmentIntegration', importPath: '@/pages/services/APIDevelopmentIntegration' },
  { path: 'app/(main)/services/ai-integration-services/page.jsx', component: 'AIIntegrationServices', importPath: '@/pages/services/AIIntegrationServices' },
  { path: 'app/(main)/services/ai-workflow-agent-development/page.jsx', component: 'AIWorkflowAgentDevelopment', importPath: '@/pages/services/AIWorkflowAgentDevelopment' },
  { path: 'app/(main)/services/ai-email-operations-automation/page.jsx', component: 'AIEmailOperations', importPath: '@/pages/services/AIEmailOperations' },
  { path: 'app/(main)/services/ai-document-verification-systems/page.jsx', component: 'AIDocumentVerification', importPath: '@/pages/services/AIDocumentVerification' },
  { path: 'app/(main)/services/document-processing-automation/page.jsx', component: 'DocumentProcessingAutomation', importPath: '@/pages/services/DocumentProcessingAutomation' },
  { path: 'app/(main)/services/software-usage-intelligence-systems/page.jsx', component: 'SoftwareUsageIntelligence', importPath: '@/pages/services/SoftwareUsageIntelligence' },
  { path: 'app/(main)/services/ai-assisted-quality-control/page.jsx', component: 'AIQualityControl', importPath: '@/pages/services/AIQualityControl' },
  { path: 'app/(main)/services/micro-saas-development/page.jsx', component: 'MicroSaaSDevelopment', importPath: '@/pages/services/MicroSaaSDevelopment' },
  { path: 'app/(main)/about/page.jsx', component: 'AboutPage', importPath: '@/pages/AboutPage' },
  { path: 'app/(main)/whyChooseUs/page.jsx', component: 'WhyChooseUsPage', importPath: '@/pages/WhyChooseUsPage' },
  { path: 'app/(main)/process/page.jsx', component: 'ProcessPage', importPath: '@/pages/ProcessPage' },
  { path: 'app/(main)/careers/page.jsx', component: 'Careers', importPath: '@/pages/Careers' },
  { path: 'app/(main)/contact-us/page.jsx', component: 'ContactUs', importPath: '@/pages/ContactUs' },
  { path: 'app/(main)/blog/page.jsx', component: 'BlogList', importPath: '@/pages/blog/BlogList' },
  { path: 'app/(main)/blog/[id]/page.jsx', component: 'BlogDetails', importPath: '@/pages/blog/BlogDetails' },
  { path: 'app/demo/page.jsx', component: 'DemoPage', importPath: '@/pages/DemoPage' },
  { path: 'app/designpro/page.jsx', component: 'DesignProHero', importPath: '@/components/DesignProHero' },
  { path: 'app/dala/page.jsx', component: 'DalaLandingPage', importPath: '@/pages/DalaLandingPage' },
  { path: 'app/[...not_found]/page.jsx', component: 'NotFound', importPath: '@/pages/NotFound' }
];

routes.forEach(route => {
  const fullPath = path.join(__dirname, route.path);
  const dir = path.dirname(fullPath);
  
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  const content = `import ${route.component} from "${route.importPath}";

export default function Page(props) {
  return <${route.component} {...props} />;
}
`;
  
  fs.writeFileSync(fullPath, content);
  console.log(`Created ${route.path}`);
});
