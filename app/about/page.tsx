
import { Metadata } from "next"
import AboutPageContent from "@/components/pages/about-page"

export const metadata: Metadata = {
  title: "About Tevin Owino | Full-Stack Software Engineer & Founder, Nairobi",
  description: "Learn about Tevin Owino — full-stack software engineer, founder of Velion Consulting, and tech instructor based in Nairobi, Kenya. 3+ years building for Africa.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Tevin Owino | Full-Stack Software Engineer & Founder, Nairobi",
    description: "Full-stack software engineer, founder of Velion Consulting, and tech instructor based in Nairobi, Kenya. 3+ years building scalable products across Africa.",
    url: "https://www.tevinowino.co.ke/about",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Tevin Owino — Full-Stack Software Engineer & Founder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Tevin Owino | Full-Stack Software Engineer & Founder",
    description: "3+ years building for Africa. Founder of Velion Consulting, tech instructor at Starehe Boys' Centre.",
    images: ["/opengraph-image"],
  },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tevinowino.co.ke" },
    { "@type": "ListItem", "position": 2, "name": "About", "item": "https://www.tevinowino.co.ke/about" },
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
