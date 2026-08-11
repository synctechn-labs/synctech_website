import AdminDashboardDevelopment from "@/views/services/AdminDashboardDevelopment";

export const metadata = {
  title:
    "Admin Dashboard Development Company | Custom Admin Dashboard Development Services | SyncTechn",

  description:
    "SyncTechn provides custom admin dashboard development services for businesses, SaaS platforms, CRM, ERP, healthcare, finance, logistics, and enterprise.",

  keywords: [
    "admin dashboard development",
    "admin dashboard development company",
    "custom admin dashboard",
    "dashboard development services",
    "business dashboard development",
    "enterprise dashboard development",
    "analytics dashboard development",
    "admin panel development",
    "crm dashboard development",
    "erp dashboard development",
    "saas dashboard development",
    "executive dashboard",
    "real time dashboard",
    "data visualization dashboard",
    "reporting dashboard",
    "business intelligence dashboard",
    "dashboard ui development",
    "workflow dashboard",
    "monitoring dashboard",
    "react dashboard development",
    "next js dashboard",
    "custom reporting software",
    "management dashboard",
    "cloud dashboard development",
    "enterprise custom software development"
  ],

  alternates: {
    canonical:
      "https://synctechn.com/services/admin-dashboard-development-services/",
  },

  openGraph: {
    title:
      "Admin Dashboard Development Services | SyncTechn",

    description:
      "Develop secure, scalable, and modern admin dashboards with analytics, reporting, user management, workflow automation, and real-time business insights.",

    url:
      "https://synctechn.com/services/admin-dashboard-development-services/",

    siteName: "SyncTechn",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/images/services/admin-dashboard-development-services-og.webp",
        width: 1200,
        height: 630,
        alt: "Admin Dashboard Development"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Admin Dashboard Development Company | SyncTechn",

    description:
      "Custom admin dashboards, analytics, reporting, user management, SaaS dashboards, enterprise dashboards, and business intelligence solutions.",

    images: [
      "/images/services/admin-dashboard-development-services-og.webp"
    ]
  },

  robots: {
    index: true,
    follow: true,
  },

  metadataBase: new URL("https://synctechn.com"),
};

export default function Page(props) {
  return <AdminDashboardDevelopment {...props} />;
}
