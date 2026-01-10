
import { Metadata } from "next"
import ServicesPageContent from "@/components/pages/services-page"

export const metadata: Metadata = {
  title: "Our Services | Web Design, SEO & SaaS Development",
  description: "Comprehensive digital services: Custom Website Design, School Management Systems, SEO, and 24/7 System Maintenance in Kenya.",
}

export default function ServicesPage() {
  return <ServicesPageContent />
}
