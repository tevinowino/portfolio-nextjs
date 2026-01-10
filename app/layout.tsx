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
    creator: "@velionlabs", // Placeholder, update if real handle exists
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
    icon: "/favicon.ico",
    apple: "/logo-symbol-white-no-bg.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // JSON-LD for Organization
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Velion Consulting",
    "url": "https://velionconsulting.com",
    "logo": "https://velionconsulting.com/full-logo-no-bg.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+254794830280",
      "contactType": "customer service",
      "areaServed": "KE",
      "availableLanguage": ["en", "sw"]
    },
    "sameAs": [
      "https://twitter.com/velionlabs",
      "https://linkedin.com/company/velion-consulting",
      "https://github.com/velion-labs"
    ]
  }

  return (
    <html lang="en" className="dark">
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

