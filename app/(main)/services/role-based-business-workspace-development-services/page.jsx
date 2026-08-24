import RoleBasedWorkspace from "@/views/services/RoleBasedWorkspace";

export const metadata = {
  title:
    "Role-Based Business Workspace Development Company | Secure Workspace Management Solutions | SyncTechn",

  description:
    "SyncTechn develops custom role-based business workspace solutions that provide secure access management, employee portals, department workspaces,",

  keywords: [
    "role based business workspace",
    "business workspace development",
    "workspace management system",
    "employee workspace software",
    "role based access system",
    "enterprise workspace development",
    "digital workplace solutions",
    "business collaboration platform",
    "employee portal development",
    "workspace automation",
    "department management software",
    "role based dashboard",
    "enterprise portal development",
    "document collaboration platform",
    "workflow management system",
    "workspace software",
    "business productivity platform",
    "team collaboration software",
    "secure workspace platform",
    "workspace application development",
    "business operations platform",
    "custom business portal",
    "enterprise collaboration software",
    "role based access control",
    "digital workspace development"
  ],

  alternates: {
    canonical:
      "https://synctechn.com/services/role-based-business-workspace-development-services/",
  },

  openGraph: {
    title:
      "Role-Based Business Workspace Development Services | SyncTechn",

    description:
    "Develop secure role-based business workspaces with employee portals, department dashboards, workflow automation, collaboration tools, access control,",

    url:
      "https://synctechn.com/services/role-based-business-workspace-development-services/",

    siteName: "SyncTechn Software Solutions",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/images/services/role-based-business-workspace-development-services-og.webp",
        width: 1200,
        height: 630,
        alt: "Role-Based Business Workspace Development"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Role-Based Business Workspace Development | SyncTechn",

    description:
      "Build secure digital business workspaces with role-based access, workflow automation, employee collaboration, dashboards, and enterprise management.",

    images: [
      "/images/services/role-based-business-workspace-development-services-og.webp"
    ]
  },

  robots: {
    index: true,
    follow: true,
  },

  metadataBase: new URL("https://synctechn.com"),
};

export default function Page(props) {
  return <RoleBasedWorkspace {...props} />;
}
