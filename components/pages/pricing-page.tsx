"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Check, X, ArrowRight, Globe, Code, Settings, Wrench, HelpCircle, ChevronDown, Rocket } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const USD_RATE = 100;

type PriceOptions = {
  price: number;
  maxPrice?: number;
  isFrom?: boolean;
  suffix?: string;
}

const formatPrice = (opts: PriceOptions, currency: 'KES' | 'USD') => {
  const convert = (val: number) => currency === 'USD' ? Math.round(val / USD_RATE) : val;
  const symbol = currency === 'USD' ? '$' : 'KSh ';
  
  if (opts.maxPrice) {
    return `${symbol}${convert(opts.price).toLocaleString()} - ${convert(opts.maxPrice).toLocaleString()}${opts.suffix || ''}`;
  }
  
  return `${opts.isFrom ? 'From ' : ''}${symbol}${convert(opts.price).toLocaleString()}${opts.suffix || ''}`;
}

const corePackages = [
  {
    name: "The Presence",
    priceOpts: { price: 40000 },
    period: "",
    description: "Perfect for small businesses, consultants, or corporate portfolios",
    features: [
      { text: "Up to 5 pages", included: true },
      { text: "Mobile-responsive design", included: true },
      { text: "Basic SEO setup", included: true },
      { text: "Contact form integration", included: true },
      { text: "Instant credibility", included: true },
      { text: "Content Management System", included: false },
      { text: "E-commerce features", included: false },
    ],
    highlighted: false,
    cta: "Build Presence",
  },
  {
    name: "The Autonomy",
    priceOpts: { price: 55000 },
    period: "",
    description: "For businesses that need to update content, blogs, or portfolios frequently",
    features: [
      { text: "Everything in Presence", included: true },
      { text: "Admin dashboard (CMS)", included: true },
      { text: "Content management training", included: true },
      { text: "Custom dynamic sections", included: true },
      { text: "Complete digital control", included: true },
      { text: "Payment/Order tracking", included: false },
    ],
    highlighted: true,
    popular: true,
    cta: "Gain Autonomy",
  },
  {
    name: "The Transaction",
    priceOpts: { price: 80000, isFrom: true },
    period: "",
    description: "Automated e-commerce for handling payments, inventory, and online sales",
    features: [
      { text: "Full Product catalog", included: true },
      { text: "M-Pesa & Card integration", included: true },
      { text: "Order management dashboard", included: true },
      { text: "Automated receipts", included: true },
      { text: "Inventory tracking", included: true },
      { text: "24/7 automated salesperson", included: true },
    ],
    highlighted: false,
    cta: "Start Selling",
  },
]

const serviceCategories = [
  {
    title: "Core Web Solutions",
    icon: Globe,
    services: [
      { name: "The Presence Package", priceOpts: { price: 40000 }, description: "Basic Static Website. Up to 5 pages, mobile-responsive, basic SEO, contact form." },
      { name: "The Autonomy Package", priceOpts: { price: 55000 }, description: "Website + CMS. Admin dashboard, custom dynamic sections, content training." },
      { name: "The Media Package", priceOpts: { price: 55000 }, description: "Blog/Magazine Sites. Category management, social sharing, newsletters." },
      { name: "The Transaction Package", priceOpts: { price: 80000, isFrom: true }, description: "E-commerce. Product catalog, M-Pesa/Card integration, order dashboard." },
    ],
  },
  {
    title: "Advanced Systems & Apps",
    icon: Code,
    services: [
      { name: "Custom Web Applications", priceOpts: { price: 80000, isFrom: true }, description: "Internal POS, school management, specialized portals for data automation." },
      { name: "Cross-Platform Ecosystem", priceOpts: { price: 140000, isFrom: true }, description: "Web + Mobile app with seamless user engagement via a unified backend." },
    ],
  },
  {
    title: "Startup Specialized Packages",
    icon: Rocket,
    services: [
      { name: "Startup Launchpad", priceOpts: { price: 130000, isFrom: true }, description: "Functional MVP & scalable technical foundation for rapid market entry." },
      { name: "Full Identity & Tech", priceOpts: { price: 170000, isFrom: true }, description: "World-class visual identity (logo, brand guide) + complete app development." },
    ],
  },
  {
    title: "Maintenance & Growth",
    icon: Wrench,
    services: [
      { name: "Standard Maintenance", priceOpts: { price: 5000, maxPrice: 10000, suffix: " / month" }, description: "Hosting, security audits, and minor system updates." },
      { name: "Growth Partner", priceOpts: { price: 25000, suffix: " / month" }, description: "Dedicated development hours for new features & performance optimization." },
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
    a: "We typically require a 50% deposit to start, with the remaining 50% due upon project completion. For larger projects, we can arrange milestone-based payments.",
  },
  {
    q: "What if I need changes after the project is done?",
    a: "All plans include a post-launch support period for bug fixes. After that, you can subscribe to our Maintenance or Growth packages for continuous updates.",
  },
  {
    q: "Do you provide hosting?",
    a: "Yes, our maintenance packages cover high-performance hosting, SSL certificates, and regular security updates.",
  },
  {
    q: "Can I upgrade my package later?",
    a: "Absolutely! You can always start with the Presence package and scale up to the Autonomy or Transaction packages as your business grows.",
  },
]

export default function PricingPageContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [currency, setCurrency] = useState<'KES' | 'USD'>('KES')

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
            <p className="text-text-secondary text-lg max-w-xl mx-auto mb-10">
              Transparent, outcome-focused pricing. We don't charge for "features"—we charge for the value of a smoother business.
            </p>

          </motion.div>
        </div>
      </section>

      {/* Sticky Currency Toggle */}
      <div className="sticky top-28 z-50 flex justify-center -mt-8 mb-12 pointer-events-none px-4">
        <div className="inline-flex items-center p-1.5 rounded-full bg-[#0d1117]/80 backdrop-blur-md border border-white/10 pointer-events-auto shadow-2xl">
          <button
            onClick={() => setCurrency('KES')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
              currency === 'KES' ? 'bg-white text-black shadow-sm' : 'text-text-muted hover:text-white'
            }`}
          >
            KES
          </button>
          <button
            onClick={() => setCurrency('USD')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
              currency === 'USD' ? 'bg-white text-black shadow-sm' : 'text-text-muted hover:text-white'
            }`}
          >
            USD
          </button>
        </div>
      </div>

      {/* Pricing Cards */}
      <section className="section-padding pt-0">
        <div className="container-custom max-w-6xl">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {corePackages.map((plan, index) => (
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
                        {formatPrice(plan.priceOpts, currency)}
                      </span>
                      {plan.period && (
                        <span className="text-text-muted ml-1">{plan.period}</span>
                      )}
                    </div>

                    <p className="text-text-muted text-sm mb-8">{plan.description}</p>

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
              Detailed Service Catalog
            </h2>
            <p className="text-text-muted max-w-xl mx-auto">
              From just code to complete business solutions. Transparent pricing for our entire ecosystem.
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
                  <div className="rounded-2xl bg-[#0d1117] p-6 h-full flex flex-col">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-accent-cyan" />
                      </div>
                      <h3 className="font-heading font-semibold text-white">{category.title}</h3>
                    </div>

                    <div className="space-y-4 flex-1">
                      {category.services.map((service) => (
                        <div key={service.name} className="flex flex-col sm:flex-row sm:items-start justify-between py-3 border-b border-white/5 last:border-0 gap-2 sm:gap-4">
                          <div className="flex-1">
                            <div className="text-text-primary text-sm font-medium mb-1">{service.name}</div>
                            <div className="text-text-muted text-xs leading-relaxed">{service.description}</div>
                          </div>
                          <div className="text-accent-cyan font-mono text-sm whitespace-nowrap font-medium">
                            {formatPrice(service.priceOpts, currency)}
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
