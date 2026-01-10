"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Check, X, ArrowRight, Globe, Code, Settings, Wrench, HelpCircle, ChevronDown } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const pricingPlans = [
  {
    name: "The Foundation",
    price: "KSh 25K",
    period: "/project",
    description: "Perfect for small businesses and startups getting their first website",
    features: [
      { text: "Single landing page", included: true },
      { text: "Mobile responsive design", included: true },
      { text: "Basic SEO setup", included: true },
      { text: "Contact form integration", included: true },
      { text: "Social media links", included: true },
      { text: "1 month support", included: true },
      { text: "2 revision rounds", included: true },
      { text: "Custom domain setup", included: true },
      { text: "Multi-page website", included: false },
      { text: "CMS integration", included: false },
      { text: "E-commerce features", included: false },
      { text: "Custom functionality", included: false },
    ],
    highlighted: false,
    cta: "Get Started",
    delivery: "1-2 weeks",
  },
  {
    name: "The Engine",
    price: "KSh 75K",
    period: "/project",
    description: "Ideal for growing businesses that need a professional multi-page presence",
    features: [
      { text: "Up to 8 custom pages", included: true },
      { text: "Advanced responsive design", included: true },
      { text: "Full SEO optimization", included: true },
      { text: "Contact & lead forms", included: true },
      { text: "Blog/CMS integration", included: true },
      { text: "3 months support", included: true },
      { text: "Unlimited revisions", included: true },
      { text: "Google Analytics setup", included: true },
      { text: "Performance optimization", included: true },
      { text: "Social media integration", included: true },
      { text: "Email marketing setup", included: true },
      { text: "Custom animations", included: true },
    ],
    highlighted: true,
    cta: "Get Started",
    popular: true,
    delivery: "2-4 weeks",
  },
  {
    name: "The Transformation",
    price: "KSh 150K+",
    period: "/project",
    description: "For businesses requiring complex functionality and custom solutions",
    features: [
      { text: "Unlimited pages", included: true },
      { text: "E-commerce platform", included: true },
      { text: "User authentication", included: true },
      { text: "Database integration", included: true },
      { text: "Payment gateway setup", included: true },
      { text: "Admin dashboard", included: true },
      { text: "6 months support", included: true },
      { text: "API integrations", included: true },
      { text: "Custom functionality", included: true },
      { text: "Dedicated project manager", included: true },
      { text: "Priority support", included: true },
      { text: "SLA guarantee", included: true },
    ],
    highlighted: false,
    cta: "Contact Us",
    delivery: "4-8 weeks",
  },
]

const serviceCategories = [
  {
    title: "Website Development",
    icon: Globe,
    services: [
      { name: "Landing Pages", price: "KSh 15,000 - 35,000", description: "Single page website with all essentials" },
      { name: "Business Websites", price: "KSh 40,000 - 80,000", description: "Multi-page site with CMS" },
      { name: "E-commerce Sites", price: "KSh 80,000 - 200,000", description: "Full online store with payments" },
      { name: "Portfolio Sites", price: "KSh 25,000 - 50,000", description: "Showcase your work beautifully" },
    ],
  },
  {
    title: "SaaS Development",
    icon: Code,
    services: [
      { name: "MVP Development", price: "KSh 200,000 - 500,000", description: "Minimum viable product to test your idea" },
      { name: "Full Platform", price: "KSh 500,000 - 1,500,000", description: "Complete SaaS with all features" },
      { name: "API Development", price: "KSh 100,000 - 300,000", description: "Custom API endpoints" },
    ],
  },
  {
    title: "Internal Systems",
    icon: Settings,
    services: [
      { name: "CRM Systems", price: "KSh 150,000 - 400,000", description: "Customer relationship management" },
      { name: "Inventory Management", price: "KSh 100,000 - 300,000", description: "Stock and order tracking" },
      { name: "HR Management", price: "KSh 120,000 - 350,000", description: "Employee and payroll systems" },
    ],
  },
  {
    title: "Maintenance Plans",
    icon: Wrench,
    services: [
      { name: "Basic", price: "KSh 5,000/month", description: "Security updates & backups" },
      { name: "Standard", price: "KSh 10,000/month", description: "Content updates & monitoring" },
      { name: "Premium", price: "KSh 20,000/month", description: "24/7 support & feature updates" },
    ],
  },
]

const faqs = [
  {
    q: "What's included in the project price?",
    a: "All prices include design, development, testing, and deployment. We also provide documentation and training for any CMS or admin features.",
  },
  {
    q: "How do payments work?",
    a: "We typically require 50% deposit to start, with the remaining 50% due upon project completion. For larger projects, we can arrange milestone-based payments.",
  },
  {
    q: "What if I need changes after the project is done?",
    a: "All plans include a support period for bug fixes and minor tweaks. After that, you can purchase a maintenance plan or request changes at our hourly rate.",
  },
  {
    q: "Do you provide hosting?",
    a: "We help you set up hosting on platforms like Vercel, Netlify, or your preferred provider. Hosting costs are separate and typically range from free to KSh 2,000/month.",
  },
  {
    q: "Can I upgrade my plan later?",
    a: "Absolutely! You can always add features or upgrade your site. We'll quote the additional work based on your requirements.",
  },
]

export default function PricingPageContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <main className="min-h-screen bg-bg-primary">
      <div className="noise-overlay" />
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-8 section-padding relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent-purple/5 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block font-mono text-xs uppercase tracking-widest text-accent-cyan mb-4">
              Investment
            </span>
            <h1 className="text-display mb-6">
              Investment in Your{" "}
              <span className="bg-gradient-to-b from-white/90 via-white/50 to-white/10 bg-clip-text text-transparent">
                Peace of Mind
              </span>
            </h1>
            <p className="text-text-secondary text-lg max-w-xl mx-auto">
              Transparent, outcome-focused pricing. We don't charge for "features"—we charge for the value of a smoother business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding pt-12">
        <div className="container-custom max-w-6xl">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                    <span className="px-4 py-1 rounded-full bg-white text-black text-xs font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div
                  className={`relative h-full rounded-2xl p-px overflow-hidden ${
                    plan.highlighted
                      ? "bg-gradient-to-b from-white/20 via-white/5 to-transparent"
                      : "bg-gradient-to-b from-white/10 via-white/5 to-transparent"
                  }`}
                >
                  <div className="relative h-full rounded-2xl bg-[#0d1117] p-6 lg:p-8 flex flex-col">
                    <div className="mb-4">
                      <span
                        className={`inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wide uppercase ${
                          plan.highlighted
                            ? "bg-white/10 text-white border border-white/20"
                            : "bg-white/5 text-text-muted border border-white/10"
                        }`}
                      >
                        {plan.name}
                      </span>
                    </div>

                    <div className="mb-1">
                      <span className="text-4xl lg:text-5xl font-heading font-bold text-white">
                        {plan.price}
                      </span>
                      {plan.period && (
                        <span className="text-text-muted ml-1">{plan.period}</span>
                      )}
                    </div>

                    <p className="text-text-muted text-sm mb-4">{plan.description}</p>

                    <div className="text-xs text-accent-cyan mb-6">
                      Delivery: {plan.delivery}
                    </div>

                    <ul className="space-y-2.5 mb-8 flex-1">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm">
                          {feature.included ? (
                            <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                              plan.highlighted ? "text-white" : "text-accent-green"
                            }`} />
                          ) : (
                            <X className="w-4 h-4 mt-0.5 flex-shrink-0 text-text-muted/50" />
                          )}
                          <span className={feature.included ? "text-text-secondary" : "text-text-muted/50"}>
                            {feature.text}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <Link href="/contact" className="block mt-auto">
                      <motion.button
                        className={`w-full py-3 px-6 rounded-lg font-medium text-sm transition-all flex items-center justify-center gap-2 ${
                          plan.highlighted
                            ? "bg-white text-black hover:bg-white/90"
                            : "bg-white/5 text-white border border-white/10 hover:bg-white/10"
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {plan.cta}
                        <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="section-padding">
        <div className="container-custom max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-heading font-bold text-white mb-4">
              Detailed Service Pricing
            </h2>
            <p className="text-text-muted max-w-xl mx-auto">
              Browse our complete service catalog with transparent pricing for each type of project.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {serviceCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="rounded-2xl p-px bg-gradient-to-b from-white/10 via-white/5 to-transparent"
                >
                  <div className="rounded-2xl bg-[#0d1117] p-6">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-accent-cyan" />
                      </div>
                      <h3 className="font-heading font-semibold text-white">{category.title}</h3>
                    </div>

                    <div className="space-y-3">
                      {category.services.map((service) => (
                        <div key={service.name} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                          <div>
                            <div className="text-text-primary text-sm font-medium">{service.name}</div>
                            <div className="text-text-muted text-xs">{service.description}</div>
                          </div>
                          <div className="text-accent-cyan font-mono text-sm whitespace-nowrap ml-4">
                            {service.price}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container-custom max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-heading font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-text-muted">
              Everything you need to know about our pricing and process.
            </p>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="rounded-xl p-px bg-gradient-to-b from-white/10 via-white/5 to-transparent"
              >
                <div className="rounded-xl bg-[#0d1117]">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-5 text-left"
                  >
                    <div className="flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-accent-cyan flex-shrink-0" />
                      <span className="text-text-primary font-medium">{faq.q}</span>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-text-muted transition-transform ${
                      openFaq === index ? "rotate-180" : ""
                    }`} />
                  </button>
                  {openFaq === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="px-5 pb-5"
                    >
                      <p className="text-text-secondary text-sm pl-8">{faq.a}</p>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Quote CTA */}
      <section className="section-padding pb-20">
        <div className="container-custom max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative rounded-2xl p-px bg-gradient-to-b from-white/10 via-white/5 to-transparent"
          >
            <div className="rounded-2xl bg-[#0d1117] p-8 lg:p-10 text-center">
              <h2 className="text-2xl font-heading font-semibold text-white mb-3">
                Need a custom solution?
              </h2>
              <p className="text-text-muted mb-6 max-w-md mx-auto">
                Every business is unique. Let's discuss your specific requirements and create a tailored solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <motion.button
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-black font-medium text-sm hover:bg-white/90 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get Custom Quote
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </Link>
                <Link href="/portfolio">
                  <motion.button
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/5 text-white border border-white/10 font-medium text-sm hover:bg-white/10 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View Our Work
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
