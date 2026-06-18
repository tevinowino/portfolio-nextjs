import dynamic from 'next/dynamic'

// Critical components - loaded instantly
import { HeroSection } from "@/components/hero-section"
import { SolutionSection } from "@/components/solution-section"
import { ServicesSection } from "@/components/services-section"
import { LatestWorkSection } from "@/components/latest-work-section"
// Process section is lazy loaded below
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What services does Velion Consulting offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We build custom software systems, websites, SaaS platforms, school management systems, and internal business tools. We also offer ongoing maintenance and support retainers."
      }
    },
    {
      "@type": "Question",
      "name": "How long does a typical project take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It depends on scope. A landing page takes 1–2 weeks. A multi-page business website takes 2–4 weeks. Custom software systems typically take 4–8 weeks from discovery to launch."
      }
    },
    {
      "@type": "Question",
      "name": "What is your development process?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We follow a 5-step process: Discovery, Design, Develop, Deploy, and Support. Every project starts with a discovery call where we understand your goals before writing a single line of code."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide ongoing support?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. All projects come with a support period after launch. We also offer monthly maintenance retainers starting from KSh 5,000/month for ongoing peace of mind."
      }
    },
    {
      "@type": "Question",
      "name": "What makes Velion Consulting different from other software agencies in Kenya?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We don't hand off projects to junior developers or disappear after launch. Tevin personally oversees every project from discovery to delivery. You get a senior engineer who treats your business like his own."
      }
    },
    {
      "@type": "Question",
      "name": "How do you handle payments?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We work on a milestone-based payment structure. A deposit is required to begin, with subsequent payments tied to project milestones. We accept M-PESA and bank transfer."
      }
    },
    {
      "@type": "Question",
      "name": "How much does a school management system cost in Kenya?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A custom school management system in Kenya starts from KSh 100,000 depending on the number of modules required — such as attendance tracking, grade management, parent portals, and reporting dashboards. Contact us for a tailored quote."
      }
    },
    {
      "@type": "Question",
      "name": "How much does a website cost in Kenya?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Website development in Kenya starts from KSh 25,000 for a landing page, KSh 40,000 for a portfolio or business site, and KSh 80,000+ for an e-commerce site with M-Pesa integration. All prices include design, development, and deployment."
      }
    },
    {
      "@type": "Question",
      "name": "Do you work with businesses outside Nairobi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We work with clients across Kenya and remotely with businesses worldwide. Our entire process — from discovery to delivery — can be completed online via calls, emails, and collaborative tools."
      }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How Velion Consulting Builds Your Software Project",
  "description": "Our proven 5-step process for delivering high-performance websites and custom software systems in Kenya.",
  "totalTime": "PT4W",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Discovery",
      "text": "We meet to understand your business, goals, and user needs — defining the scope and vision of your project."
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Design",
      "text": "Our team creates wireframes, prototypes, and a clear visual roadmap aligned to your brand and user expectations."
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Develop",
      "text": "We build with clean, scalable code — integrating features and testing rigorously at every stage."
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Deploy",
      "text": "Your product goes live with thorough QA, performance optimization, and uptime monitoring."
    },
    {
      "@type": "HowToStep",
      "position": 5,
      "name": "Support",
      "text": "Ongoing maintenance, feature updates, and strategic guidance to help your business grow after launch."
    }
  ]
}

// Lazy loaded components - loaded when needed
const ProcessSection = dynamic(
  () => import("@/components/process-section").then(mod => mod.ProcessSection),
  { ssr: true }
)

const WhyChooseUsSection = dynamic(
  () => import("@/components/why-choose-us-section").then(mod => mod.WhyChooseUsSection),
  { ssr: true }
)

const AboutSection = dynamic(
  () => import("@/components/about-section").then(mod => mod.AboutSection),
  { ssr: true }
)

const FAQSection = dynamic(
  () => import("@/components/faq-section").then(mod => mod.FAQSection),
  { ssr: true }
)

const FinalCTASection = dynamic(
  () => import("@/components/final-cta-section").then(mod => mod.FinalCTASection),
  { ssr: true }
)

const TestimonialsSection = dynamic(
  () => import("@/components/testimonials-section").then(mod => mod.TestimonialsSection),
  { ssr: true }
)

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-primary">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      {/* Noise Overlay for texture */}
      <div className="noise-overlay" />
      
      <Header />
      <HeroSection />
      <SolutionSection />
      <ServicesSection />
      <LatestWorkSection />
      <ProcessSection />
      <WhyChooseUsSection />
      <AboutSection />
      <FAQSection />
      <TestimonialsSection />
      <FinalCTASection />
      <Footer />
    </main>
  )
}

