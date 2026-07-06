import scalingModernWebApplications from "./scaling-modern-web-applications.js";
import maximizingRoiDigitalMarketing from "./maximizing-roi-digital-marketing.js";
import crmSolutionsForGrowth from "./crm-solutions-for-growth.js";
import mobileAppDesignTrends from "./mobile-app-design-trends.js";
import prepareDataML from "./prepare-data-for-ml-apis-google-cloud-challenge-lab-gsp323-solution.js";
import webDevelopmentRoadmap2026 from "./modern-web-development-roadmap-2026.js";
import customSoftwareEngineeringAssociateGuide2026 from "./custom-software-engineering-associate-guide-2026.js";

// Map of blogs keyed by their unique URL slug (id)
export const blogs = {
  "scaling-modern-web-applications": scalingModernWebApplications,
  "maximizing-roi-digital-marketing": maximizingRoiDigitalMarketing,
  "crm-solutions-for-growth": crmSolutionsForGrowth,
  "mobile-app-design-trends": mobileAppDesignTrends,
  "prepare-data-for-ml-apis-google-cloud-challenge-lab-gsp323-solution": prepareDataML,
  "web-development-roadmap-2026": webDevelopmentRoadmap2026,
  "custom-software-engineering-associate-guide-2026": customSoftwareEngineeringAssociateGuide2026,
};

// Flat list of all blogs for the listing page
export const blogsList = Object.values(blogs);
