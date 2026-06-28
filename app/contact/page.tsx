
import { Metadata } from "next"
import ContactPageContent from "@/components/pages/contact-page"

export const metadata: Metadata = {
  title: "Contact Tevin Owino | Hire a Full-Stack Software Engineer in Nairobi",
  description: "Get in touch with Tevin Owino — full-stack software engineer based in Nairobi, Kenya. Available for engineering roles, client projects, and technical collaborations.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Tevin Owino | Full-Stack Software Engineer, Nairobi",
    description: "Available for engineering roles, client projects, technical mentorship, and collaborations across EdTech, AgriTech, FinTech, and Mental Health.",
    url: "https://www.tevinowino.co.ke/contact",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Contact Tevin Owino — Full-Stack Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Tevin Owino | Full-Stack Software Engineer, Nairobi",
    description: "Available for engineering roles, client projects, and collaborations. Get in touch.",
    images: ["/opengraph-image"],
  },
}

export default function ContactPage() {
  return <ContactPageContent />
}
