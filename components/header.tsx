"use client";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={clsx(
        "py-4 px-4 md:px-6 lg:px-8 fixed top-2 left-2 right-2 z-50 rounded-4xl border transition-all duration-300",
        scrolled
          ? "bg-white/80 backdrop-blur-md border-gray-200 shadow-md"
          : "bg-transparent border-transparent"
      )}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div
          className="flex items-center space-x-3"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.img
            src="/full-logo-no-bg.png"
            alt="Velion Labs Logo"
            className="h-10 w-auto"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          />
        </motion.div>

        <motion.nav
          className="hidden md:flex items-center space-x-8 font-saira"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {["Home", "Services", "Portfolio", "About", "Contact"].map(
            (item, index) => (
              <motion.a
                key={item}
                href={
                  item === "Home"
                    ? "/"
                    : item === "Portfolio"
                    ? "/portfolio"
                    : `#${item.toLowerCase()}`
                }
                className="text-navy hover:text-teal hover:underline transition-all relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-teal after:transition-all after:duration-300 hover:after:w-full"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                {item}
              </motion.a>
            )
          )}
        </motion.nav>

        <motion.div
          className="flex items-center space-x-4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="hidden md:flex bg-teal hover:bg-teal/90 text-white">
              Book Consultation
            </Button>
          </motion.div>

          <motion.button
            className="md:hidden p-2 text-navy hover:text-teal transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 right-0 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <motion.nav
              className="flex flex-col py-4 font-saira"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, delay: 0.1 }}
            >
              {[
                { name: "Services", href: "#services" },
                { name: "Portfolio", href: "/portfolio" },
                { name: "About", href: "#about" },
                { name: "Contact", href: "#contact" },
              ].map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="px-6 py-3 text-navy hover:text-teal hover:bg-gray-50 transition-colors relative after:absolute after:left-6 after:bottom-1 after:h-[2px] after:w-0 after:bg-teal after:transition-all after:duration-300 hover:after:w-[calc(100%-3rem)]"
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.div
                className="px-6 py-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <Button
                  className="w-full bg-teal hover:bg-teal/90 text-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Book Consultation
                </Button>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
