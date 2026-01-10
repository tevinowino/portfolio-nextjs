"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, Home, Compass } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function NotFound() {
  const router = useRouter()
  const [countdown, setCountdown] = useState(10)

  // Auto-redirect after countdown
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          router.push("/")
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [router])

  return (
    <main className="min-h-screen bg-bg-primary flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent-blue/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent-purple/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-cyan/5 rounded-full blur-3xl" />
      </div>

      {/* Noise Overlay */}
      <div className="noise-overlay" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
        {/* Animated 404 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <motion.span
              className="text-[150px] md:text-[200px] font-heading font-bold leading-none bg-gradient-to-b from-white via-white/60 to-white/10 bg-clip-text text-transparent"
              animate={{ 
                textShadow: [
                  "0 0 20px rgba(0, 212, 255, 0)",
                  "0 0 40px rgba(0, 212, 255, 0.3)",
                  "0 0 20px rgba(0, 212, 255, 0)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              404
            </motion.span>
            
            {/* Floating compass icon */}
            <motion.div
              className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-accent-cyan/20 backdrop-blur-sm border border-accent-cyan/30 flex items-center justify-center"
              animate={{ 
                y: [-5, 5, -5],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Compass className="w-8 h-8 text-accent-cyan" />
            </motion.div>
          </div>
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Lost in the Digital Void
          </h1>
          <p className="text-text-secondary text-lg mb-2">
            The page you're looking for has wandered off into the ether.
          </p>
          <p className="text-text-muted text-sm mb-8">
            Don't worry, we'll guide you back home.
          </p>
        </motion.div>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-bg-secondary border border-border-subtle">
            <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
            <span className="text-text-muted text-sm">
              Redirecting in <span className="text-accent-cyan font-mono font-bold">{countdown}</span> seconds
            </span>
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/">
            <motion.button
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-black font-medium text-sm hover:bg-white/90 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Home className="w-4 h-4" />
              Go to Homepage
            </motion.button>
          </Link>
          
          <motion.button
            onClick={() => router.back()}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/5 text-white border border-white/10 font-medium text-sm hover:bg-white/10 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </motion.button>
        </motion.div>

        {/* Decorative Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 h-px bg-gradient-to-r from-transparent via-border-subtle to-transparent"
        />

        {/* Footer hint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-6 text-text-muted text-xs"
        >
          Need help? <Link href="/contact" className="text-accent-cyan hover:underline">Contact us</Link>
        </motion.p>
      </div>
    </main>
  )
}
