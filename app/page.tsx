import { HeroSection } from "@/components/hero-section"
import { ProblemSection } from "@/components/problem-section"
import { SolutionSection } from "@/components/solution-section"
import { ProcessSection } from "@/components/process-section"
import { WhyChooseUsSection } from "@/components/why-choose-us-section"
import { MidPageCTA } from "@/components/mid-page-cta"
import { AboutSection } from "@/components/about-section"
import { FinalCTASection } from "@/components/final-cta-section"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-400 to-blue-950">
      <Header />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ProcessSection />
      <WhyChooseUsSection />
      <MidPageCTA />
      <AboutSection />
      <FinalCTASection />
      <Footer />
    </main>
  )
}
