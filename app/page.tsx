import { HeroSection } from "@/components/hero-section"
import { SolutionSection } from "@/components/solution-section"
import { ServicesSection } from "@/components/services-section"
import { ProcessSection } from "@/components/process-section"
import { WhyChooseUsSection } from "@/components/why-choose-us-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FinalCTASection } from "@/components/final-cta-section"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FAQSection } from "@/components/faq-section"
import { AboutSection } from "@/components/about-section"

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

