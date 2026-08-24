import "./globals.css";
import Script from "next/script";

export const metadata = {
  metadataBase: new URL("https://synctechn.com"),
  title: "Custom Software Development Company | SyncTechn",
  description: "SyncTechn is a custom software development company delivering web applications, mobile apps, AI solutions, and enterprise software tailored to your business goals.",
  alternates: {
    canonical: "https://synctechn.com/",
    types: {
      "text/plain": [{ url: "/llms.txt", title: "LLM Summary" }]
    }
  },
  openGraph: {
    title: "Custom Software Development Company | SyncTechn",
    description: "Build scalable web applications, mobile apps, enterprise software, and AI-powered solutions with SyncTechn's custom software development services.",
    url: "https://synctechn.com/",
    type: "website"
  },
  verification: {
    other: {
      "msvalidate.01": "13C5FDB31652194374095BAE65FD1014",
    }
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favIcon.png", sizes: "64x64", type: "image/png" }
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" }
    ]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "@id": "https://synctechn.com/#organization",
                "name": "SyncTechn",
                "url": "https://synctechn.com",
                "logo": "https://res.cloudinary.com/dij2x0ixo/image/upload/e_background_removal/f_png/v1782032673/SyncTechWhiteLogo_bt3s0u.webp",
                "description": "SyncTechn is a custom software development and AI development company building web, mobile, and AI-powered business solutions.",
                "sameAs": [
                  "https://www.linkedin.com/company/synctechn/",
                  "https://www.instagram.com/synctechn/"
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "@id": "https://synctechn.com/#website",
                "url": "https://synctechn.com",
                "name": "SyncTechn",
                "description": "Custom Software Development Company | SyncTechn",
                "publisher": {
                  "@id": "https://synctechn.com/#organization"
                }
              }
            ])
          }}
        />


      </head>
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-TXPBJ7M2RG"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-TXPBJ7M2RG');
          `}
        </Script>
        <Script id="clarity-script" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "xcm1gmjb1p");
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
