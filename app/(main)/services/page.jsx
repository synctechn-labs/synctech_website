import ServicesLandingPage from "@/views/ServicesLandingPage";

export const metadata = {
  title: "Custom Software & Digital Services | SyncTech Software Solutions",
  description: "Transform your business with SyncTech's professional custom software development, web app creation, mobile apps, CRM systems, and technical SEO marketing services.",
  keywords: [
    "custom software development", 
    "custom web development company india", 
    "mobile app development", 
    "CRM solutions", 
    "CRM portal development", 
    "digital marketing services", 
    "SEO friendly website", 
    "SyncTech solutions"
  ],
  alternates: {
    canonical: "https://synctechn.com/services/",
  },
  openGraph: {
    title: "Custom Software & Digital Services | SyncTech Software Solutions",
    description: "Transform your business with SyncTech's professional custom software development, web app creation, mobile apps, CRM systems, and technical SEO marketing services.",
    url: "https://synctechn.com/services/",
    type: "website"
  },
};

export default function Page(props) {
  return <ServicesLandingPage {...props} />;
}
