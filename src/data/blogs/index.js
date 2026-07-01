import scalingModernWebApplications from "./scaling-modern-web-applications.js";
import maximizingRoiDigitalMarketing from "./maximizing-roi-digital-marketing.js";
import crmSolutionsForGrowth from "./crm-solutions-for-growth.js";
import mobileAppDesignTrends from "./mobile-app-design-trends.js";

// Map of blogs keyed by their unique URL slug (id)
export const blogs = {
  "scaling-modern-web-applications": scalingModernWebApplications,
  "maximizing-roi-digital-marketing": maximizingRoiDigitalMarketing,
  "crm-solutions-for-growth": crmSolutionsForGrowth,
  "mobile-app-design-trends": mobileAppDesignTrends,
};

// Flat list of all blogs for the listing page
export const blogsList = Object.values(blogs);
