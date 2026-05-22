
import { Metadata } from "next"
import AboutPageContent from "@/components/pages/about-page"

export const metadata: Metadata = {
  title: "About | Human-Centric Software Agency Kenya",
  description: "Velion Consulting was founded to humanize tech. We build software that gives Kenyan business owners peace of mind. Meet the team behind the code.",
  openGraph: {
    title: "About Velion Consulting | Kenya Software Agency",
    description: "Founded in 2025 to bridge the gap between complex code and human peace of mind. Nairobi-based software agency building for Kenyan businesses.",
    url: "https://velionconsulting.com/about",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "About Velion Consulting - Born to Humanize Tech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Velion Consulting | Kenya Software Agency",
    description: "Founded in 2025 to humanize tech for Kenyan businesses. Meet the team behind the code.",
    images: ["/og-image.png"],
  },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://velionconsulting.com" },
    { "@type": "ListItem", "position": 2, "name": "About", "item": "https://velionconsulting.com/about" },
  ],
}

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <AboutPageContent />
    </>
  )
}
