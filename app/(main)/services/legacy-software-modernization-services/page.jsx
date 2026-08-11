import LegacyModernization from "@/views/services/LegacyModernization";

export const metadata = {
  title:
    "Legacy Software Modernization Services | Legacy Application Modernization Company | SyncTechn",

  description:
    "SyncTechn provides legacy software modernization services including application modernization, legacy system migration, cloud migration, software",

  keywords: [
    "legacy software modernization",
    "legacy application modernization",
    "legacy system modernization",
    "application modernization services",
    "software modernization company",
    "legacy software migration",
    "legacy application migration",
    "legacy system migration",
    "application reengineering",
    "software reengineering",
    "legacy software upgrade",
    "application modernization company",
    "cloud migration services",
    "legacy software transformation",
    "application refactoring",
    "legacy application support",
    "digital transformation services",
    "enterprise application modernization",
    "software migration services",
    "legacy database modernization",
    "api integration services",
    "cloud application modernization",
    "technology modernization",
    "enterprise software modernization",
    "legacy software consulting"
  ],

  alternates: {
    canonical:
      "https://synctechn.com/services/legacy-software-modernization-services/",
  },

  openGraph: {
    title:
      "Legacy Software Modernization Services | SyncTechn",

    description:
    "Modernize legacy software, migrate enterprise applications to the cloud, improve performance, enhance security, and extend software lifespan with",

    url:
      "https://synctechn.com/services/legacy-software-modernization-services/",

    siteName: "SyncTechn",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/images/services/legacy-modernization-og.webp",
        width: 1200,
        height: 630,
        alt: "Legacy Software Modernization Services"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Legacy Software Modernization Company | SyncTechn",

    description:
      "Modernize legacy applications through cloud migration, software reengineering, API integration, database modernization, and digital transformation.",

    images: [
      "/images/services/legacy-modernization-og.webp"
    ]
  },

  robots: {
    index: true,
    follow: true,
  },

  metadataBase: new URL("https://synctechn.com"),
};

export default function Page(props) {
  return <LegacyModernization {...props} />;
}
