import BookingSystemDevelopment from "@/views/services/BookingSystemDevelopment";

export const metadata = {
  title:
    "Appointment Booking System Development Company | Online Appointment Booking Software | SyncTechn",

  description:
    "SyncTechn develops custom booking and appointment management systems for healthcare, salons, clinics, education, fitness, hospitality, professional",

  keywords: [
    "booking system development",
    "appointment system development",
    "online appointment booking system",
    "appointment scheduling software",
    "booking custom software development",
    "custom booking software",
    "online booking platform",
    "appointment management system",
    "reservation system development",
    "online reservation software",
    "calendar booking system",
    "medical appointment software",
    "doctor appointment booking",
    "salon booking software",
    "spa booking system",
    "fitness booking software",
    "hotel booking system",
    "event booking software",
    "service booking platform",
    "customer appointment software",
    "booking portal development",
    "scheduling custom software development",
    "enterprise booking solution",
    "appointment management software",
    "online scheduling platform"
  ],

  alternates: {
    canonical:
      "https://synctechn.com/services/appointment-booking-software-development-services/",
  },

  openGraph: {
    title:
      "Appointment Booking System Development Services | SyncTechn",

    description:
    "Develop secure online appointment booking system development with calendar management, automated reminders, online payments, customer portals, and",

    url:
      "https://synctechn.com/services/appointment-booking-software-development-services/",

    siteName: "SyncTechn",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/images/services/booking-system-development-og.webp",
        width: 1200,
        height: 630,
        alt: "Appointment Booking System Development"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Appointment Booking System Development Company | SyncTechn",

    description:
    "Custom online booking systems, appointment scheduling software, reservation platforms, customer portals, payment integration, and automated scheduling",

    images: [
      "/images/services/booking-system-development-og.webp"
    ]
  },

  robots: {
    index: true,
    follow: true,
  },

  metadataBase: new URL("https://synctechn.com"),
};

export default function Page(props) {
  return <BookingSystemDevelopment {...props} />;
}
