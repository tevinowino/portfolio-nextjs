
import { Metadata } from "next"
import PortfolioPageContent from "@/components/pages/portfolio-page"

export const metadata: Metadata = {
  title: "Portfolio | Custom Software Projects Kenya",
  description: "Case studies: school management systems, NGO platforms, farm management apps, and premium websites built for Kenyan businesses. Real metrics, real clients.",
  openGraph: {
    title: "Portfolio | Custom Software Projects Kenya — Velion Consulting",
    description: "See how Velion Consulting builds for Kenya. Case studies: Learnify, Digital Moran, STTI Hub, ShambaPal, Traffic Buddy, and more.",
    url: "https://velionconsulting.com/portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Velion Consulting Portfolio — Software Projects Kenya",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Custom Software Projects Kenya",
    description: "Case studies from Kenyan software projects: schools, NGOs, farms, and more.",
    images: ["/og-image.png"],
  },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://velionconsulting.com" },
    { "@type": "ListItem", "position": 2, "name": "Portfolio", "item": "https://velionconsulting.com/portfolio" },
  ],
}

export default function PortfolioPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <PortfolioPageContent />
    </>
  )
}
