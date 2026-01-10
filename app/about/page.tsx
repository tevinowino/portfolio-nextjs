
import { Metadata } from "next"
import AboutPageContent from "@/components/pages/about-page"

export const metadata: Metadata = {
  title: "About Us | Human-Centric Software Development Kenya",
  description: "Velion Consulting was found to humanize tech. We build software that gives Kenyan business owners peace of mind. Meet the team behind the code.",
}

export default function AboutPage() {
  return <AboutPageContent />
}
