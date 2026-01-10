"use client"

import { MessageCircle } from "lucide-react"
import { motion } from "framer-motion"

export function FloatingWhatsApp() {
  const phoneNumber = "+254794830280"
  const message = "Hello! I'm interested in learning more about Velion Consulting services."
  
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\+/g, "")}?text=${encodeURIComponent(message)}`

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-accent-green flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3, delay: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 text-white" />
      
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-accent-green animate-ping opacity-25" />
    </motion.a>
  )
}
