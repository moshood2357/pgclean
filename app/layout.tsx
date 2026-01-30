import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pgcleanltd.co.uk"),

  title: {
    default:
      "PG Clean Ltd | Professional Carpet & Upholstery Cleaning in Gloucestershire",
    template: "%s | PG Clean Ltd",
  },

  description:
    "PG Clean Ltd provides professional carpet, upholstery, rug, domestic and commercial cleaning services across Gloucestershire and Cheltenham. Reliable service, advanced equipment, and guaranteed satisfaction.",

  applicationName: "PG Clean Ltd",

  keywords: [
    "Carpet Cleaning Gloucestershire",
    "Upholstery Cleaning Cheltenham",
    "Rug Cleaning UK",
    "Domestic Cleaning Gloucestershire",
    "Commercial Cleaning Cheltenham",
    "Professional Carpet Cleaners UK",
    "PG Clean Ltd",
  ],

  authors: [{ name: "PG Clean Ltd" }],
  creator: "PG Clean Ltd",
  publisher: "PG Clean Ltd",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://pgcleanltd.co.uk",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title:
      "PG Clean Ltd | Professional Carpet & Upholstery Cleaning in Gloucestershire",
    description:
      "Reliable carpet, upholstery, rug, domestic and commercial cleaning services across Gloucestershire. Professional equipment. Guaranteed results.",
    url: "https://pgcleanltd.co.uk",
    siteName: "PG Clean Ltd",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PG Clean Ltd Carpet Cleaning Services",
      },
    ],
    locale: "en_GB",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Professional Carpet & Upholstery Cleaning | PG Clean Ltd",
    description:
      "Trusted carpet and upholstery cleaning services across Gloucestershire and Cheltenham.",
    images: ["/og-image.jpg"],
  },

  category: "Cleaning Services",

  verification: {
    google: "ADD_YOUR_GOOGLE_VERIFICATION_CODE_HERE",
  },

  other: {
    "theme-color": "#4CD1FE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://pgcleanltd.co.uk/#business",
    name: "PG Clean Ltd",
    image: "https://pgcleanltd.co.uk/og-image.jpg",
    url: "https://pgcleanltd.co.uk",
    telephone: "+47926961792",
    priceRange: "££",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Princess Elizabeth Way",
      addressLocality: "Cheltenham",
      postalCode: "GL51 7BT",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "51.8994",
      longitude: "-2.0783",
    },
    areaServed: "Gloucestershire",
    openingHours: "Mo-Sa 08:00-18:00",
    sameAs: ["https://facebook.com/", "https://instagram.com/"],
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Carpet Cleaning",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Upholstery Cleaning",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Rug Cleaning",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Domestic Cleaning",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Commercial Cleaning",
        },
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
