
import { Metadata } from "next"
import PricingPageContent from "@/components/pages/pricing-page"

export const metadata: Metadata = {
  title: "Pricing | Web Design & Software Packages Kenya",
  description: "Transparent pricing for websites and custom software in Kenya. Landing pages from KSh 25,000. Business websites, e-commerce, school systems, and mobile apps. No hidden fees.",
  openGraph: {
    title: "Pricing | Web Design & Software Packages Kenya",
    description: "Transparent, KSh-priced packages for websites and custom software. From KSh 25,000 for landing pages to enterprise SaaS. No hidden fees.",
    url: "https://velionconsulting.com/pricing",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Velion Consulting Pricing — Transparent Software Packages Kenya",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing | Web Design & Software Packages Kenya",
    description: "Transparent KSh pricing for websites and custom software in Kenya. No hidden fees.",
    images: ["/og-image.png"],
  },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://velionconsulting.com" },
    { "@type": "ListItem", "position": 2, "name": "Pricing", "item": "https://velionconsulting.com/pricing" },
  ],
}

const pricingFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is included in the project price?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Every project includes discovery, design, development, testing, deployment, and a post-launch support period. No hidden charges — what we quote is what you pay."
      }
    },
    {
      "@type": "Question",
      "name": "How do payments work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We require a 50% deposit before work begins. The remaining balance is paid in milestones tied to project delivery. We accept M-PESA and bank transfer."
      }
    },
    {
      "@type": "Question",
      "name": "What if I need changes after the project is done?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Minor revisions within the agreed scope are handled at no extra cost during the support period. For new features or major changes after launch, we provide a separate quote."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide hosting?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We can recommend and set up hosting for your project. Hosting costs are separate and depend on your traffic and infrastructure needs. We will advise you on the best option for your budget."
      }
    },
    {
      "@type": "Question",
      "name": "Can I upgrade my plan later?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. Many clients start with a landing page and grow into a full system over time. We make it easy to scale your solution without rebuilding from scratch."
      }
    }
  ]
}

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingFaqSchema) }}
      />
      <PricingPageContent />
    </>
  )
}
