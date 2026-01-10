
import { Metadata } from "next"
import ContactPageContent from "@/components/pages/contact-page"

export const metadata: Metadata = {
  title: "Contact Us | Start Your Project Today",
  description: "Ready to humanize your technology? Contact Velion Consulting. Call +254 794 830 280 or email velionlabs@gmail.com for a free consultation.",
}

export default function ContactPage() {
  return <ContactPageContent />
}
