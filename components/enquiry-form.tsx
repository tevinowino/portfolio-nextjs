"use client"

import { useState, useRef } from "react"
import { type ReactNode } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle, ChevronRight, ChevronLeft, Loader2, ArrowRight } from "lucide-react"

type FormData = {
  fullName: string
  email: string
  whatsapp: string
  company: string
  whatBuilt: string
  solutionType: string
  budget: string
  timeline: string
  decisionMaker: string
  previousDev: string
  anythingElse: string
}

type Errors = Partial<Record<keyof FormData, string>>

const SOLUTION_TYPES = [
  "Website (landing page or multi-page)",
  "Custom web system or platform",
  "Mobile app",
  "SaaS product",
  "System maintenance / ongoing support",
  "I'm not sure yet — I need advice",
]

const BUDGETS = [
  "Under KSh 50,000",
  "KSh 50,000 – 150,000",
  "KSh 150,000 – 500,000",
  "KSh 500,000 and above",
  "I don't have a budget in mind yet",
]

const TIMELINES = [
  "As soon as possible (within 2 weeks)",
  "Within 1 month",
  "Within 3 months",
  "I'm still in planning — no rush",
]

const DECISION_MAKERS = [
  "Yes, it's my decision entirely",
  "Yes, but I'll need sign-off from someone else",
  "No, I'm gathering information for someone else",
]

const PREVIOUS_DEV = [
  "Yes, and it went well",
  "Yes, but it didn't go as expected",
  "No, this is my first time",
]

const STEPS = [
  { n: 1, label: "About You" },
  { n: 2, label: "Your Project" },
  { n: 3, label: "Decision Making" },
]

// ─── Shared input class ──────────────────────────────────────────────────────
const inputBase =
  "w-full px-4 py-3 rounded-lg bg-bg-tertiary border text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-cyan transition-colors text-sm"

// ─── Field wrapper ───────────────────────────────────────────────────────────
function Field({ error, children }: { error?: string; children: ReactNode }) {
  return (
    <div data-error={error ? "true" : undefined}>
      {children}
      {error && (
        <p className="text-red-400 text-xs mt-1.5">{error}</p>
      )}
    </div>
  )
}

// ─── Text input ──────────────────────────────────────────────────────────────
function TextInput({
  label, type = "text", placeholder, value, onChange, error, helper,
}: {
  label: string; type?: string; placeholder?: string
  value: string; onChange: (v: string) => void; error?: string; helper?: string
}) {
  return (
    <Field error={error}>
      <label className="block text-sm font-medium text-text-secondary mb-1.5">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={e => onChange(e.target.value)}
        className={`${inputBase} ${error ? "border-red-500/50" : "border-border-subtle"}`}
      />
      {helper && !error && (
        <p className="text-text-muted text-xs mt-1.5 leading-relaxed">{helper}</p>
      )}
    </Field>
  )
}

// ─── Textarea ────────────────────────────────────────────────────────────────
function TextArea({
  label, value, onChange, error, helper, minHeight = 120, optional = false,
}: {
  label: string; value: string; onChange: (v: string) => void
  error?: string; helper?: string; minHeight?: number; optional?: boolean
}) {
  return (
    <Field error={error}>
      <div className="flex items-center gap-2 mb-1.5">
        <label className="block text-sm font-medium text-text-secondary">{label}</label>
        {optional && <span className="text-text-muted text-xs">(optional)</span>}
      </div>
      <textarea
        value={value}
        onChange={e => onChange(e.target.value)}
        style={{ minHeight }}
        className={`${inputBase} resize-none ${error ? "border-red-500/50" : "border-border-subtle"}`}
      />
      {helper && !error && (
        <p className="text-text-muted text-xs mt-1.5 leading-relaxed">{helper}</p>
      )}
    </Field>
  )
}

// ─── Radio card group ────────────────────────────────────────────────────────
function RadioCards({
  label, options, value, onChange, error, optional = false,
}: {
  label: string; options: string[]; value: string
  onChange: (v: string) => void; error?: string; optional?: boolean
}) {
  return (
    <Field error={error}>
      <div className="flex items-center gap-2 mb-3">
        <label className="block text-sm font-medium text-text-secondary">{label}</label>
        {optional && <span className="text-text-muted text-xs">(optional)</span>}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {options.map(opt => (
          <button
            key={opt}
            type="button"
            onClick={() => onChange(opt)}
            className={`p-3.5 rounded-xl border text-left text-sm transition-all ${
              value === opt
                ? "border-accent-cyan bg-accent-cyan/10 text-text-primary"
                : "border-border-subtle bg-bg-tertiary/50 text-text-secondary hover:border-border-visible hover:text-text-primary"
            }`}
          >
            <div className="flex items-start gap-2.5">
              <div className={`w-4 h-4 rounded-full border-2 flex-shrink-0 mt-0.5 transition-colors ${
                value === opt ? "border-accent-cyan bg-accent-cyan" : "border-border-visible"
              }`} />
              <span className="leading-snug">{opt}</span>
            </div>
          </button>
        ))}
      </div>
      {error && <p className="text-red-400 text-xs mt-1.5 hidden">{error}</p>}
    </Field>
  )
}

// ─── Section heading ─────────────────────────────────────────────────────────
function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <div className="mb-5">
      <span className="font-mono text-xs uppercase tracking-widest text-accent-cyan">
        {children}
      </span>
      <div className="mt-2 h-px bg-border-subtle" />
    </div>
  )
}

// ─── Main component ──────────────────────────────────────────────────────────
export function EnquiryForm() {
  const [step, setStep] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState(false)
  const [errors, setErrors] = useState<Errors>({})
  const wrapperRef = useRef<HTMLDivElement>(null)

  const [data, setData] = useState<FormData>({
    fullName: "", email: "", whatsapp: "", company: "",
    whatBuilt: "", solutionType: "", budget: "", timeline: "",
    decisionMaker: "", previousDev: "", anythingElse: "",
  })

  const set = (field: keyof FormData) => (value: string) => {
    setData(prev => ({ ...prev, [field]: value }))
    setErrors(prev => ({ ...prev, [field]: undefined }))
  }

  const scrollToFirstError = () => {
    setTimeout(() => {
      const el = wrapperRef.current?.querySelector('[data-error="true"]')
      el?.scrollIntoView({ behavior: "smooth", block: "center" })
    }, 60)
  }

  const validate = (s: number): boolean => {
    const e: Errors = {}
    if (s === 1) {
      if (!data.fullName.trim()) e.fullName = "This field is required."
      if (!data.email.trim()) e.email = "This field is required."
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
        e.email = "Please enter a valid email address."
      if (!data.whatsapp.trim()) e.whatsapp = "This field is required."
      if (!data.company.trim()) e.company = "This field is required."
    }
    if (s === 2) {
      if (!data.whatBuilt.trim()) e.whatBuilt = "This field is required."
      if (!data.solutionType) e.solutionType = "This field is required."
      if (!data.budget) e.budget = "This field is required."
      if (!data.timeline) e.timeline = "This field is required."
    }
    if (s === 3) {
      if (!data.decisionMaker) e.decisionMaker = "This field is required."
    }
    setErrors(e)
    if (Object.keys(e).length > 0) { scrollToFirstError(); return false }
    return true
  }

  const handleNext = () => { if (validate(step)) setStep(s => s + 1) }
  const handleBack = () => { setStep(s => s - 1) }

  const handleSubmit = async () => {
    if (!validate(3)) return
    setIsLoading(true)
    setSubmitError(false)
    try {
      const res = await fetch("https://formspree.io/f/xgoowvvv", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          "Full Name": data.fullName,
          "Email": data.email,
          "WhatsApp Number": data.whatsapp,
          "Company / Business": data.company,
          "What Needs Building": data.whatBuilt,
          "Solution Type": data.solutionType,
          "Budget Range": data.budget,
          "Timeline": data.timeline,
          "Decision Maker": data.decisionMaker,
          "Previous Developer Experience": data.previousDev || "Not answered",
          "Anything Else": data.anythingElse || "—",
          _subject: "New Project Enquiry — Velion Consulting",
        }),
      })
      if (res.ok) setIsSubmitted(true)
      else setSubmitError(true)
    } catch {
      setSubmitError(true)
    } finally {
      setIsLoading(false)
    }
  }

  // ── Success state ──────────────────────────────────────────────────────────
  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center py-14 px-4"
      >
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-accent-green/20 border border-accent-green/30 flex items-center justify-center">
          <CheckCircle className="w-10 h-10 text-accent-green" />
        </div>
        <h3 className="font-heading font-bold text-2xl text-text-primary mb-4">
          We've received your project details.
        </h3>
        <p className="text-text-secondary max-w-sm mx-auto mb-6 leading-relaxed text-sm">
          Tevin will review your submission and reach out within 24 hours via WhatsApp
          or email to confirm next steps. If your project is a good fit, you'll receive
          a link to book a 30-minute discovery call.
        </p>
        <p className="text-text-muted text-xs font-mono">— Velion Consulting</p>
      </motion.div>
    )
  }

  // ── Form ───────────────────────────────────────────────────────────────────
  return (
    <div ref={wrapperRef}>
      {/* Header */}
      <div className="mb-6">
        <h2 className="font-heading font-bold text-xl text-text-primary">
          Work With Velion Consulting
        </h2>
        <p className="text-text-muted text-sm mt-1.5 leading-relaxed">
          Tell us about your project. This takes 3 minutes and helps us come prepared
          so we don't waste your time on a call.
        </p>
      </div>

      {/* Progress indicator */}
      <div className="flex items-center mb-8">
        {STEPS.map((s, i) => (
          <div key={s.n} className={`flex items-center ${i < STEPS.length - 1 ? "flex-1" : ""}`}>
            <div className="flex items-center gap-2 flex-shrink-0">
              <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                step > s.n
                  ? "bg-accent-cyan text-white"
                  : step === s.n
                  ? "bg-accent-cyan/15 border-2 border-accent-cyan text-accent-cyan"
                  : "bg-bg-tertiary border border-border-subtle text-text-muted"
              }`}>
                {step > s.n ? "✓" : s.n}
              </div>
              <span className={`text-xs font-medium hidden sm:block whitespace-nowrap transition-colors duration-300 ${
                step === s.n ? "text-text-primary" : "text-text-muted"
              }`}>
                {s.label}
              </span>
            </div>
            {i < STEPS.length - 1 && (
              <div className={`flex-1 h-px mx-3 transition-all duration-300 ${
                step > s.n ? "bg-accent-cyan" : "bg-border-subtle"
              }`} />
            )}
          </div>
        ))}
      </div>

      {/* Step content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 14 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -14 }}
          transition={{ duration: 0.2 }}
          className="space-y-5"
        >
          {/* ── Step 1: About You ────────────────────────────────────────── */}
          {step === 1 && (
            <>
              <SectionHeading>About You</SectionHeading>
              <TextInput
                label="Your Full Name *"
                value={data.fullName}
                onChange={set("fullName")}
                error={errors.fullName}
              />
              <TextInput
                label="Your Email Address *"
                type="email"
                value={data.email}
                onChange={set("email")}
                error={errors.email}
              />
              <TextInput
                label="Your WhatsApp Number *"
                type="tel"
                placeholder="+254..."
                value={data.whatsapp}
                onChange={set("whatsapp")}
                error={errors.whatsapp}
              />
              <TextInput
                label="Your Company or Business Name *"
                value={data.company}
                onChange={set("company")}
                error={errors.company}
                helper="If you're a solo founder, just write your name."
              />
            </>
          )}

          {/* ── Step 2: About Your Project ───────────────────────────────── */}
          {step === 2 && (
            <>
              <SectionHeading>About Your Project</SectionHeading>
              <TextArea
                label="What do you need built? *"
                value={data.whatBuilt}
                onChange={set("whatBuilt")}
                error={errors.whatBuilt}
                helper="Describe the problem you're trying to solve — not just the solution. What's broken or missing right now?"
                minHeight={120}
              />
              <RadioCards
                label="What type of solution are you looking for? *"
                options={SOLUTION_TYPES}
                value={data.solutionType}
                onChange={set("solutionType")}
                error={errors.solutionType}
              />
              <RadioCards
                label="What is your approximate budget? *"
                options={BUDGETS}
                value={data.budget}
                onChange={set("budget")}
                error={errors.budget}
              />
              <RadioCards
                label="What is your timeline? *"
                options={TIMELINES}
                value={data.timeline}
                onChange={set("timeline")}
                error={errors.timeline}
              />
            </>
          )}

          {/* ── Step 3: Decision Making ──────────────────────────────────── */}
          {step === 3 && (
            <>
              <SectionHeading>Decision Making</SectionHeading>
              <RadioCards
                label="Are you the main decision-maker for this project? *"
                options={DECISION_MAKERS}
                value={data.decisionMaker}
                onChange={set("decisionMaker")}
                error={errors.decisionMaker}
              />
              <RadioCards
                label="Have you worked with a developer or agency before?"
                options={PREVIOUS_DEV}
                value={data.previousDev}
                onChange={set("previousDev")}
                optional
              />
              <TextArea
                label="Anything else we should know?"
                value={data.anythingElse}
                onChange={set("anythingElse")}
                helper="Previous projects, specific concerns, links to reference sites — anything relevant."
                minHeight={100}
                optional
              />

              {submitError && (
                <p className="text-red-400 text-sm leading-relaxed">
                  Something went wrong. Please try again or reach out directly on{" "}
                  <a
                    href="https://wa.me/254794830280"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2 hover:text-red-300 transition-colors"
                  >
                    WhatsApp
                  </a>
                  .
                </p>
              )}
            </>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Navigation buttons */}
      <div className={`flex gap-3 mt-8 ${step > 1 ? "justify-between" : "justify-end"}`}>
        {step > 1 && (
          <button
            type="button"
            onClick={handleBack}
            disabled={isLoading}
            className="flex items-center gap-2 px-5 py-3 rounded-lg border border-border-subtle text-text-secondary hover:border-border-visible hover:text-text-primary transition-colors text-sm font-medium disabled:opacity-50"
          >
            <ChevronLeft className="w-4 h-4" />
            Back
          </button>
        )}

        {step < 3 ? (
          <motion.button
            type="button"
            onClick={handleNext}
            className="btn-primary"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Continue
            <ChevronRight className="w-4 h-4" />
          </motion.button>
        ) : (
          <motion.button
            type="button"
            onClick={handleSubmit}
            disabled={isLoading}
            className="btn-primary flex-1 justify-center disabled:opacity-70 disabled:cursor-not-allowed"
            whileHover={isLoading ? {} : { scale: 1.01 }}
            whileTap={isLoading ? {} : { scale: 0.99 }}
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                Submit Project Details
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </motion.button>
        )}
      </div>
    </div>
  )
}
