
import { Metadata } from "next"
import PricingPageContent from "@/components/pages/pricing-page"

export const metadata: Metadata = {
  title: "Pricing | Affordable Web Design & System Packages Kenya",
  description: "Transparent pricing for websites and custom software. From Sh. 25k for websites to custom SaaS development. No hidden fees.",
}

export default function PricingPage() {
  return <PricingPageContent />
}
