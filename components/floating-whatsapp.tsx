"use client"

import { MessageCircle } from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

export function FloatingWhatsApp() {
  const [isHovered, setIsHovered] = useState(false)

  const phoneNumber = "+254762018994" // Replace with actual WhatsApp number
  const message = "Hi! I'm interested in learning more about Velion Labs' services."

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-[9999]"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        duration: 0.5,
        delay: 1,
        type: "spring",
        stiffness: 200,
      }}
    >
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{
          scale: 1.1,
          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        }}
        whileTap={{ scale: 0.95 }}
        animate={{
          y: [0, -5, 0],
        }}
        transition={{
          y: {
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          },
        }}
      >
        <motion.div className="p-4" animate={{ rotate: isHovered ? 360 : 0 }} transition={{ duration: 0.3 }}>
          <Image src="/whatsapp-logo.png" alt="WhatsApp" width={80} height={80} />
        </motion.div>

        <motion.div
          className="overflow-hidden transition-all duration-300"
          animate={{
            maxWidth: isHovered ? "12rem" : "0rem",
            paddingRight: isHovered ? "1rem" : "0rem",
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <span className="whitespace-nowrap font-medium">Chat with us on WhatsApp</span>
        </motion.div>
      </motion.a>

      {/* Enhanced pulse animation */}
      <motion.div
        className="absolute inset-0 rounded-full bg-green-500 z-[-1]"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  )
}
