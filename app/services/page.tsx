
import { Metadata } from "next"
import ServicesPageContent from "@/components/pages/services-page"

export const metadata: Metadata = {
  title: "Services | Web Design & Software Kenya",
  description: "Web design, custom software, school management systems, mobile apps, and SEO in Kenya. Velion Consulting builds digital solutions tailored to Kenyan businesses.",
  openGraph: {
    title: "Services | Web Design & Software Kenya — Velion Consulting",
    description: "Websites from KSh 25,000. Custom software, school systems, SaaS, and mobile apps built for Kenyan businesses by Nairobi's leading software agency.",
    url: "https://velionconsulting.com/services",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Velion Consulting Services — Web Design & Software Kenya",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | Web Design & Software Kenya",
    description: "Websites, custom software, school systems, mobile apps built for Kenyan businesses.",
    images: ["/og-image.png"],
  },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://velionconsulting.com" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://velionconsulting.com/services" },
  ],
}

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ServicesPageContent />
    </>
  )
}
