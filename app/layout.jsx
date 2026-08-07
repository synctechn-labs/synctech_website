import "./globals.css";
import Script from "next/script";

export const metadata = {
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
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is custom software development?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Custom software development is the process of designing, developing, and maintaining software built specifically for your business needs. Unlike off-the-shelf software, custom solutions are tailored to your workflows, business goals, and future growth."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Why should I choose custom software instead of off-the-shelf software?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Custom software is designed around your business requirements, offering greater flexibility, seamless integrations, enhanced security, and long-term scalability compared to off-the-shelf software."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What custom software development services does SyncTechn offer?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "SyncTechn provides custom software development services including web application development, mobile app development, enterprise custom software development, AI solutions, SaaS product development, ERP and CRM development, workflow automation, API integrations, and cloud-based software solutions."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How much does custom software development cost?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The cost depends on your project scope, required features, integrations, technology stack, and timeline. After understanding your requirements, we provide a transparent proposal with a detailed estimate."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How long does it take to develop custom software?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Development timelines vary depending on project complexity. Small applications can often be delivered within a few weeks, while enterprise software projects may take several months."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can SyncTechn integrate custom software with our existing systems?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. We integrate custom software with ERP systems, CRM platforms, payment gateways, cloud services, third-party APIs, and internal business systems to create a connected ecosystem."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you provide post-launch support and maintenance?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. We provide ongoing maintenance, security updates, performance monitoring, feature enhancements, bug fixes, and technical support to ensure your software continues to perform reliably."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Why choose SyncTechn as your custom software development company?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "SyncTechn combines business strategy, modern engineering, and agile development to deliver secure, scalable, and future-ready software solutions. We partner with businesses from discovery to long-term support, helping them innovate, automate, and grow."
                  }
                }
              ]
            })
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
