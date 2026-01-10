import { Metadata } from "next"
import BookCallPageContent from "@/components/pages/book-call-page"

export const metadata: Metadata = {
  title: "Book a Free Consultation | Schedule Your Strategy Call",
  description: "Book a free 30-minute strategy call with Velion Consulting. Let's discuss your business challenges and explore how we can help you grow.",
}

export default function BookCallPage() {
  return <BookCallPageContent />
}
