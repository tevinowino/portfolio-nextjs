import dynamic from 'next/dynamic'

import { HeroSection } from "@/components/hero-section"
import { PersonalIntroSection } from "@/components/personal-intro-section"
import { ServicesSection } from "@/components/services-section"
import { LatestWorkSection } from "@/components/latest-work-section"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

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

const FinalCTASection = dynamic(
  () => import("@/components/final-cta-section").then(mod => mod.FinalCTASection),
  { ssr: true }
)

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-primary">
      <div className="noise-overlay" />

      <Header />
      <HeroSection />
      <PersonalIntroSection />
      <ServicesSection />
      <LatestWorkSection />
      <ProcessSection />
      <WhyChooseUsSection />
      <AboutSection />
      <FinalCTASection />
      <Footer />
    </main>
  )
}
