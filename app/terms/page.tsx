"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GradientText } from "@/components/ui/gradient-text"
import { FileText, Users, CreditCard, Shield, Lock, AlertTriangle, Clock, XCircle } from "lucide-react"

const sections = [
  {
    icon: FileText,
    title: "Acceptance of Terms",
    items: [
      "By using our services, you agree to these terms",
      "If you disagree, please refrain from using our services",
      "Terms may be updated periodically",
    ],
  },
  {
    icon: Users,
    title: "Services We Provide",
    items: [
      "Website Development & Design",
      "SaaS and Custom Software Development",
      "Internal Systems (CRM, Inventory, HR)",
      "Website Maintenance & Support",
    ],
  },
  {
    icon: Shield,
    title: "Client Responsibilities",
    items: [
      "Provide accurate information for service delivery",
      "Respond promptly to requests and feedback",
      "Make timely payments per agreed terms",
      "Respect intellectual property rights",
    ],
  },
  {
    icon: CreditCard,
    title: "Payment Terms",
    items: [
      "50% deposit required to begin projects",
      "Remaining 50% due upon completion",
      "Monthly retainers for ongoing services",
      "All prices quoted in KSh unless specified",
    ],
  },
  {
    icon: Lock,
    title: "Intellectual Property",
    items: [
      "Custom work becomes client property upon payment",
      "Pre-existing Velion Consulting IP remains ours",
      "Third-party components maintain their licenses",
      "Portfolio usage rights granted to us",
    ],
  },
  {
    icon: AlertTriangle,
    title: "Limitation of Liability",
    items: [
      "Total liability limited to amount paid for services",
      "Not liable for indirect or consequential damages",
      "Force majeure excuses performance delays",
      "Clients responsible for their data backups",
    ],
  },
  {
    icon: XCircle,
    title: "Termination",
    items: [
      "Either party may terminate with 30 days notice",
      "Immediate termination for material breach",
      "Accrued rights survive termination",
      "Refunds handled case-by-case",
    ],
  },
]

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-bg-primary">
      <div className="noise-overlay" />
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 section-padding relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl" />
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
              Terms of <GradientText variant="blue">Service</GradientText>
            </h1>
            <p className="text-body-lg mb-4">
              These terms govern your use of our services and establish the framework for our professional relationship.
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
              Questions About These Terms?
            </h2>
            <p className="text-text-secondary mb-6">
              Contact us at{" "}
              <a href="mailto:velionconsulting@gmail.com" className="text-accent-cyan hover:underline">
                velionconsulting@gmail.com
              </a>
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
