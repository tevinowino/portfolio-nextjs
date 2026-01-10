
import { Metadata } from "next"
import PortfolioPageContent from "@/components/pages/portfolio-page"

export const metadata: Metadata = {
  title: "Our Portfolio | School Management & Corporate Systems",
  description: "See how Velion Consulting transforms businesses. Case studies on Learnify (EdTech), Retail POS systems, and corporate web portals.",
}

export default function PortfolioPage() {
  return <PortfolioPageContent />
}
