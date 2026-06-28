import type React from "react"
import type { Metadata } from "next"
import { Sora, Poppins, Space_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"
import "./globals.css"

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["500", "600", "700"],
})

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500"],
})

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400"],
})


const SITE_URL = "https://www.tevinowino.co.ke"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Tevin Owino | Full-Stack Software Engineer | Nairobi, Kenya",
    template: "%s | Tevin Owino",
  },
  description:
    "Tevin Owino is a full-stack software engineer with 3+ years shipping production software — available for engineering roles and technical partnerships. Based in Nairobi, Kenya.",
  keywords: [
    "full-stack software engineer Kenya",
    "software developer Nairobi",
    "Next.js developer Kenya",
    "React developer Kenya",
    "TypeScript developer Africa",
    "hire software engineer Kenya",
    "Tevin Owino",
    "Velion Consulting",
    "software engineer available for hire",
  ],
  authors: [{ name: "Tevin Owino", url: SITE_URL }],
  creator: "Tevin Owino",
  publisher: "Tevin Owino",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: SITE_URL,
    title: "Tevin Owino — Full-Stack Software Engineer",
    description: "Full-stack software engineer with 3+ years shipping production software for African startups and institutions. Open to engineering roles. Nairobi, Kenya.",
    siteName: "Tevin Owino",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Tevin Owino — Full-Stack Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tevin Owino | Full-Stack Software Engineer",
    description: "3+ years shipping production software. Open to engineering roles. Building for African startups and institutions. Nairobi, Kenya.",
    images: ["/opengraph-image"],
    creator: "@tevinowino",
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
    icon: "/icon.png",
    apple: "/icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Tevin Owino",
    "jobTitle": "Full-Stack Software Engineer",
    "url": "https://www.tevinowino.co.ke",
    "image": "https://www.tevinowino.co.ke/founder.jpeg",
    "description": "Full-stack software engineer with 3+ years shipping production-grade software across EdTech, AgriTech, FinTech, and Mental Health. Open to engineering roles.",
    "email": "tevinowino65@gmail.com",
    "telephone": "+254794830280",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Nairobi",
      "addressCountry": "KE",
      "addressRegion": "Nairobi County"
    },
    "sameAs": [
      "https://github.com/tevinowino",
      "https://linkedin.com/in/tevin-owino",
      "https://tiktok.com/@tevinowino",
      "https://instagram.com/tevinowino"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Velion Consulting",
      "url": "https://velionconsulting.com"
    },
    "knowsAbout": [
      "React", "Next.js", "TypeScript", "Node.js", "Firebase", "Supabase",
      "React Native", "Full-Stack Development", "Software Architecture",
      "EdTech", "AgriTech", "FinTech", "AI Applications"
    ]
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
        className={`${sora.variable} ${poppins.variable} ${spaceMono.variable} font-body antialiased bg-bg-primary text-text-primary`}
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
