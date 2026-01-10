"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GradientText } from "@/components/ui/gradient-text"
import { GlowCard } from "@/components/ui/glow-card"
import { 
  Calendar, 
  Clock, 
  Phone, 
  Send, 
  CheckCircle, 
  User,
  Mail,
  MessageSquare,
  Sparkles
} from "lucide-react"

const timeSlots = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
]

const consultationTopics = [
  "Website Development",
  "SaaS / Custom Software",
  "E-commerce Platform",
  "School Management System",
  "Internal Business Tools",
  "Website Maintenance",
  "Not Sure Yet",
]

const benefits = [
  "Free 30-minute strategy session",
  "Personalized technology roadmap",
  "Honest assessment of your needs",
  "No sales pressure, just advice",
]

export default function BookCallPageContent() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")

  // Generate next 14 days for date selection
  const getAvailableDates = () => {
    const dates = []
    const today = new Date()
    for (let i = 1; i <= 14; i++) {
      const date = new Date(today)
      date.setDate(today.getDate() + i)
      // Skip weekends
      if (date.getDay() !== 0 && date.getDay() !== 6) {
        dates.push({
          value: date.toISOString().split("T")[0],
          label: date.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })
        })
      }
    }
    return dates
  }

  const availableDates = getAvailableDates()

  return (
    <main className="min-h-screen bg-bg-primary">
      <div className="noise-overlay" />
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-8 section-padding relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-blue/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-purple/10 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block font-mono text-xs uppercase tracking-widest text-accent-cyan mb-4">
              Free Consultation
            </span>
            <h1 className="text-display mb-6">
              Let's Talk About Your{" "}
              <GradientText variant="animated">Vision</GradientText>
            </h1>
            <p className="text-body-lg">
              Schedule a free 30-minute call with our team. We'll discuss your challenges 
              and explore how technology can transform your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="section-padding pt-8">
        <div className="container-custom max-w-5xl">
          <div className="grid lg:grid-cols-5 gap-8">
            
            {/* Benefits Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="sticky top-32">
                <div className="bg-bg-secondary rounded-2xl border border-border-subtle p-6 mb-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-accent-cyan/20 flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-accent-cyan" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-white">What You'll Get</h3>
                    </div>
                  </div>
                  
                  <ul className="space-y-3">
                    {benefits.map((benefit, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle className="w-5 h-5 text-accent-green flex-shrink-0 mt-0.5" />
                        <span className="text-text-secondary text-sm">{benefit}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Quick Contact */}
                <div className="bg-gradient-to-br from-accent-cyan/10 to-accent-blue/10 rounded-2xl border border-accent-cyan/20 p-6">
                  <h3 className="font-heading font-semibold text-white mb-4">Prefer to Call?</h3>
                  <a 
                    href="tel:+254794830280"
                    className="flex items-center gap-3 text-accent-cyan hover:underline"
                  >
                    <Phone className="w-5 h-5" />
                    <span className="font-mono">+254 794 830 280</span>
                  </a>
                  <p className="text-text-muted text-xs mt-3">
                    Available Mon-Fri, 9AM - 6PM EAT
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Booking Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-3"
            >
              <GlowCard hover={false}>
                <div className="p-6 lg:p-8">
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-accent-green/20 flex items-center justify-center">
                        <CheckCircle className="w-10 h-10 text-accent-green" />
                      </div>
                      <h3 className="font-heading font-bold text-2xl text-white mb-3">
                        You're All Set!
                      </h3>
                      <p className="text-text-secondary mb-2">
                        We've received your booking request.
                      </p>
                      <p className="text-text-muted text-sm mb-6">
                        We'll call you at the scheduled time. Check your email for confirmation.
                      </p>
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-bg-secondary border border-border-subtle">
                        <Calendar className="w-4 h-4 text-accent-cyan" />
                        <span className="text-text-secondary text-sm">
                          {selectedDate && new Date(selectedDate).toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}
                          {selectedTime && ` at ${selectedTime}`}
                        </span>
                      </div>
                    </motion.div>
                  ) : (
                    <>
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-lg bg-accent-cyan/10 flex items-center justify-center">
                          <Calendar className="w-5 h-5 text-accent-cyan" />
                        </div>
                        <div>
                          <h2 className="font-heading font-semibold text-xl text-white">Book Your Call</h2>
                          <p className="text-text-muted text-sm">Pick a date and time that works for you</p>
                        </div>
                      </div>

                      <form 
                        action="https://formspree.io/f/xgoowvvv"
                        method="POST"
                        className="space-y-6"
                        onSubmit={() => {
                          setTimeout(() => setIsSubmitted(true), 100)
                        }}
                      >
                        {/* Contact Info */}
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-text-secondary mb-2">
                              <User className="w-4 h-4 inline mr-2" />
                              Your Name *
                            </label>
                            <input
                              type="text"
                              name="Name"
                              placeholder="John Doe"
                              required
                              className="w-full px-4 py-3 rounded-lg bg-bg-tertiary border border-border-subtle text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-cyan transition-colors"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-text-secondary mb-2">
                              <Phone className="w-4 h-4 inline mr-2" />
                              Phone Number *
                            </label>
                            <input
                              type="tel"
                              name="Phone"
                              placeholder="+254 7XX XXX XXX"
                              required
                              className="w-full px-4 py-3 rounded-lg bg-bg-tertiary border border-border-subtle text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-cyan transition-colors"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-text-secondary mb-2">
                            <Mail className="w-4 h-4 inline mr-2" />
                            Email Address *
                          </label>
                          <input
                            type="email"
                            name="Email"
                            placeholder="john@company.com"
                            required
                            className="w-full px-4 py-3 rounded-lg bg-bg-tertiary border border-border-subtle text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-cyan transition-colors"
                          />
                        </div>

                        {/* Date Selection */}
                        <div>
                          <label className="block text-sm font-medium text-text-secondary mb-3">
                            <Calendar className="w-4 h-4 inline mr-2" />
                            Preferred Date *
                          </label>
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                            {availableDates.slice(0, 6).map((date) => (
                              <button
                                key={date.value}
                                type="button"
                                onClick={() => setSelectedDate(date.value)}
                                className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                                  selectedDate === date.value
                                    ? "bg-accent-cyan text-white border-accent-cyan"
                                    : "bg-bg-tertiary border border-border-subtle text-text-secondary hover:border-accent-cyan/50"
                                }`}
                              >
                                {date.label}
                              </button>
                            ))}
                          </div>
                          <input type="hidden" name="Preferred Date" value={selectedDate} />
                        </div>

                        {/* Time Selection */}
                        <div>
                          <label className="block text-sm font-medium text-text-secondary mb-3">
                            <Clock className="w-4 h-4 inline mr-2" />
                            Preferred Time (EAT) *
                          </label>
                          <div className="flex flex-wrap gap-2">
                            {timeSlots.map((time) => (
                              <button
                                key={time}
                                type="button"
                                onClick={() => setSelectedTime(time)}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                                  selectedTime === time
                                    ? "bg-accent-cyan text-white"
                                    : "bg-bg-tertiary border border-border-subtle text-text-secondary hover:border-accent-cyan/50"
                                }`}
                              >
                                {time}
                              </button>
                            ))}
                          </div>
                          <input type="hidden" name="Preferred Time" value={selectedTime} />
                        </div>

                        {/* Topic */}
                        <div>
                          <label className="block text-sm font-medium text-text-secondary mb-2">
                            What would you like to discuss?
                          </label>
                          <select
                            name="Topic"
                            className="w-full px-4 py-3 rounded-lg bg-bg-tertiary border border-border-subtle text-text-primary focus:outline-none focus:border-accent-cyan transition-colors appearance-none cursor-pointer"
                          >
                            <option value="">Select a topic</option>
                            {consultationTopics.map((topic) => (
                              <option key={topic} value={topic}>{topic}</option>
                            ))}
                          </select>
                        </div>

                        {/* Additional Notes */}
                        <div>
                          <label className="block text-sm font-medium text-text-secondary mb-2">
                            <MessageSquare className="w-4 h-4 inline mr-2" />
                            Anything else we should know?
                          </label>
                          <textarea
                            name="Notes"
                            placeholder="Tell us briefly about your project or challenges..."
                            rows={3}
                            className="w-full px-4 py-3 rounded-lg bg-bg-tertiary border border-border-subtle text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-cyan transition-colors resize-none"
                          />
                        </div>

                        {/* Hidden fields */}
                        <input type="hidden" name="_subject" value="New Call Booking - Velion Consulting" />
                        <input type="hidden" name="Form Type" value="Call Booking" />

                        {/* Submit */}
                        <motion.button
                          type="submit"
                          disabled={!selectedDate || !selectedTime}
                          className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                          whileHover={{ scale: 1.01 }}
                          whileTap={{ scale: 0.99 }}
                        >
                          <Send className="w-4 h-4" />
                          Confirm Booking
                        </motion.button>

                        <p className="text-center text-text-muted text-xs">
                          We'll call you at the scheduled time. No spam, ever.
                        </p>
                      </form>
                    </>
                  )}
                </div>
              </GlowCard>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
