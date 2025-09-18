"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-[#bad0ff] to-[#ffffff] text-white py-12 px-4 md:px-6 lg:px-8 pt-32">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="rounded-2xl text-gray-900"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance font-saira"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              >
                Custom {" "}<span className="text-[#2563EB]">Web & Software Solutions</span> That Drive Business Growth.{" "}
              </motion.h1>

              <motion.p
                className="text-md text-gray-600 leading-relaxed text-pretty font-saira"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              >
                From websites to SaaS platforms, we create digital solutions that help you win more customers and scale with confidence.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 items-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    className="bg-[#03102b] hover:bg-[#03102b]/90 text-white px-8 py-4 transition-all rounded-none duration-300 font-saira"
                  >
                    View Our Work
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    className="bg-[#2563EB] hover:bg-[#2563EB]/90 text-white px-9 py-5 rounded-full transition-all duration-300 font-saira"
                  >
                    BOOK A CALL
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50, rotate: -10 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            >
              <motion.img
                src="/blue-crystal.png"
                alt="3D crystal representing innovation and strategic thinking"
                className="w-full max-w-md mx-auto h-auto"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 2, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
