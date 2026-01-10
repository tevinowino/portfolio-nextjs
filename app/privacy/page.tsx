"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GradientText } from "@/components/ui/gradient-text"
import { Shield, Lock, Eye, Database, UserCheck, Cookie } from "lucide-react"

const sections = [
  {
    icon: Database,
    title: "Information We Collect",
    items: [
      "Contact details when you fill out forms or request quotes",
      "Subscription information for newsletters",
      "Communication records via email or phone",
      "Usage data from our website and services",
    ],
  },
  {
    icon: Eye,
    title: "How We Use Your Information",
    items: [
      "Provide, maintain, and improve our services",
      "Respond to inquiries and provide support",
      "Send technical notices and marketing updates",
      "Analyze usage patterns to improve our website",
    ],
  },
  {
    icon: Shield,
    title: "Information Sharing",
    items: [
      "Only with your explicit consent",
      "With trusted service providers under strict agreements",
      "When required by law or to protect our rights",
      "In connection with business transfers",
    ],
  },
  {
    icon: Lock,
    title: "Data Security",
    items: [
      "Encryption of sensitive data in transit and at rest",
      "Regular security assessments and audits",
      "Strict access controls and authentication",
      "Secure data storage on trusted platforms",
    ],
  },
  {
    icon: UserCheck,
    title: "Your Rights",
    items: [
      "Access, update, or delete your personal information",
      "Opt-out of marketing communications anytime",
      "Request data portability in standard formats",
      "Lodge complaints with supervisory authorities",
    ],
  },
  {
    icon: Cookie,
    title: "Cookies and Tracking",
    items: [
      "Remember your preferences across sessions",
      "Analyze website traffic and usage patterns",
      "Improve user experience based on behavior",
      "Provide personalized content recommendations",
    ],
  },
]

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-bg-primary">
      <div className="noise-overlay" />
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 section-padding relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-blue/10 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="inline-block font-mono text-xs uppercase tracking-widest text-accent-cyan mb-4">
              Legal
            </span>
            <h1 className="text-display mb-6">
              Privacy <GradientText variant="blue">Policy</GradientText>
            </h1>
            <p className="text-body-lg mb-4">
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
            </p>
            <p className="font-mono text-sm text-text-muted">Last updated: January 2024</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-bg-secondary">
        <div className="container-custom max-w-3xl">
          <div className="space-y-6">
            {sections.map((section, index) => {
              const Icon = section.icon
              return (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-bg-primary rounded-xl border border-border-subtle p-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-accent-cyan/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-accent-cyan" />
                    </div>
                    <h2 className="font-heading font-semibold text-xl text-text-primary">
                      {section.title}
                    </h2>
                  </div>
                  <ul className="space-y-2">
                    {section.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-text-secondary text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section-padding bg-bg-primary">
        <div className="container-custom max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-bg-secondary rounded-2xl border border-border-subtle p-8 text-center"
          >
            <h2 className="font-heading font-semibold text-xl text-text-primary mb-4">
              Questions About Privacy?
            </h2>
            <p className="text-text-secondary mb-6">
              Contact us at{" "}
              <a href="mailto:velionlabs@gmail.com" className="text-accent-cyan hover:underline">
                velionlabs@gmail.com
              </a>
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
