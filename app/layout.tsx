import type React from "react"
import type { Metadata } from "next"
import { Plus_Jakarta_Sans, Inter, Space_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"
import "./globals.css"

// Primary heading font - only load weights we use
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["500", "600", "700"],
})

// Body font - only load weights we use
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500"],
})

// Accent/mono font - minimal weights
const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400"],
})


export const metadata: Metadata = {
  metadataBase: new URL("https://velionconsulting.com"),
  title: {
    default: "Velion Consulting | Kenya's Top Software Development Agency",
    template: "%s | Velion Consulting",
  },
  description:
    "We build high-performance websites and custom software systems for Kenyan businesses. From school management to corporate portals, we humanize technology for growth.",
  keywords: [
    "Software Development Kenya",
    "Web Design Nairobi",
    "School Management Systems Kenya",
    "Custom Software Agency",
    "Velion Consulting",
    "Mobile App Development",
    "SEO Services Kenya"
  ],
  authors: [{ name: "Velion Consulting Team" }],
  creator: "Velion Consulting",
  publisher: "Velion Consulting",
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: "https://velionconsulting.com",
    title: "Velion Consulting | Software That Solves Life",
    description: "Kenya's leading agency for human-centric digital solutions. We build systems that give you your time back.",
    siteName: "Velion Consulting",
    images: [
      {
        url: "/og-image.png", // We will create this later
        width: 1200,
        height: 630,
        alt: "Velion Consulting - Humanizing Tech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Velion Consulting | Top Kenya Software Agency",
    description: "Building high-performance digital systems for schools, manufacturers, and retailers.",
    images: ["/og-image.png"],
    creator: "@VelionConsulting", // Placeholder, update if real handle exists
  },
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
  icons: {
    icon: "/favicon.png",
    apple: "/new-logos/logo-icon-no-bg.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    "name": "Velion Consulting",
    "alternateName": "Velion Labs",
    "url": "https://velionconsulting.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://velionconsulting.com/new-logos/full-logo-no-bg.png",
      "width": 4501,
      "height": 4501
    },
    "image": "https://velionconsulting.com/og-image.png",
    "description": "Kenya's leading human-centric software agency. We build high-performance websites, school management systems, SaaS platforms, and custom software for Kenyan businesses.",
    "foundingDate": "2025",
    "telephone": "+254794830280",
    "email": "velionconsulting@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Nairobi",
      "addressCountry": "KE",
      "addressRegion": "Nairobi County"
    },
    "areaServed": [
      { "@type": "Country", "name": "Kenya" },
      { "@type": "City", "name": "Nairobi" }
    ],
    "serviceType": [
      "Web Design",
      "Custom Software Development",
      "School Management Systems",
      "SaaS Development",
      "Mobile App Development",
      "SEO Services"
    ],
    "priceRange": "KSh 25,000 – KSh 500,000+",
    "currenciesAccepted": "KES",
    "paymentAccepted": "M-PESA, Bank Transfer",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+254794830280",
      "contactType": "customer service",
      "areaServed": "KE",
      "availableLanguage": ["en", "sw"]
    },
    "sameAs": [
      "https://www.linkedin.com/company/velion-consulting-ltd",
      "https://twitter.com/VelionConsulting"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Software Development Services Kenya",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Website Development Kenya",
            "description": "Professional website design and development for Kenyan businesses starting from KSh 25,000."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "School Management System Kenya",
            "description": "Custom school management systems for Kenyan schools — attendance, grades, parent portals."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Software Development Nairobi",
            "description": "Bespoke SaaS and business software built for Kenyan enterprises."
          }
        }
      ]
    }
  }

  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://plus.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://plus.unsplash.com" />
      </head>
      <body
        className={`${plusJakarta.variable} ${inter.variable} ${spaceMono.variable} font-body antialiased bg-bg-primary text-text-primary`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Suspense fallback={null}>{children}</Suspense>
        <FloatingWhatsApp />
        <Analytics />
      </body>
    </html>
  )
}

