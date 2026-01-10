import dynamic from 'next/dynamic'

// Critical components - loaded instantly
import { HeroSection } from "@/components/hero-section"
import { SolutionSection } from "@/components/solution-section"
import { ServicesSection } from "@/components/services-section"
// Process section is lazy loaded below
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

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

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-primary">
      {/* Noise Overlay for texture */}
      <div className="noise-overlay" />
      
      <Header />
      <HeroSection />
      <SolutionSection />
      <ServicesSection />
      <ProcessSection />
      <WhyChooseUsSection />
      <AboutSection />
      {/* <TestimonialsSection /> */}
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </main>
  )
}

