
import { Metadata } from "next"
import PortfolioPageContent from "@/components/pages/portfolio-page"

export const metadata: Metadata = {
  title: "Projects | Tevin Owino — Full-Stack Software Engineer, Nairobi Kenya",
  description: "Explore Tevin Owino's portfolio of shipped software — EdTech SaaS, AI wellness tools, climate platforms, agritech apps, and fintech systems built for real users.",
  alternates: {
    canonical: "/portfolio",
  },
  openGraph: {
    title: "Projects | Tevin Owino — Full-Stack Software Engineer",
    description: "Real software, shipped for real users. Learnify, ThoughtReflex, We Are Tell, ShambaPal, Digital Moran, STTI Hub — and more.",
    url: "https://www.tevinowino.co.ke/portfolio",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Tevin Owino — Projects Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Tevin Owino — Full-Stack Software Engineer",
    description: "Explore shipped software from Tevin Owino: EdTech, AI wellness, AgriTech, climate platforms, and more.",
    images: ["/opengraph-image"],
  },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tevinowino.co.ke" },
    { "@type": "ListItem", "position": 2, "name": "Projects", "item": "https://www.tevinowino.co.ke/portfolio" },
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
