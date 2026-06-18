"use client"

import { Menu, X, ArrowRight, Home, DollarSign, Briefcase, Users, Mail } from "lucide-react"
import { useState, useEffect, useRef, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Pricing", href: "/pricing", icon: DollarSign },
  { name: "Portfolio", href: "/portfolio", icon: Briefcase },
  { name: "About", href: "/about", icon: Users },
  { name: "Contact", href: "/contact", icon: Mail },
]

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const navPillRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  // Layer 5: pointer tracking for the nav pill glow
  const handleNavPillGlow = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    const el = navPillRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty("--gx", `${((e.clientX - rect.left) / rect.width) * 100}%`)
    el.style.setProperty("--gy", `${((e.clientY - rect.top) / rect.height) * 100}%`)
  }, [])

  // Layer 5: pointer tracking for the CTA button glow
  const handleCtaBtnGlow = useCallback((e: React.PointerEvent<HTMLButtonElement>) => {
    const el = e.currentTarget
    const rect = el.getBoundingClientRect()
    el.style.setProperty("--gx", `${((e.clientX - rect.left) / rect.width) * 100}%`)
    el.style.setProperty("--gy", `${((e.clientY - rect.top) / rect.height) * 100}%`)
  }, [])

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/*
          The pill div is always `relative` so ::before / ::after pseudo-elements
          have a positioned parent. The glass-nav-pill class is applied only when
          scrolled — before that the nav is intentionally transparent over the hero.
        */}
        <div
          ref={navPillRef}
          onPointerMove={scrolled ? handleNavPillGlow : undefined}
          className={cn(
            "pointer-events-auto transition-all duration-500 ease-in-out relative",
            scrolled
              ? "mt-4 w-[90%] md:w-[80%] lg:w-[1200px] rounded-full glass-nav-pill py-3 px-6"
              : "mt-0 w-full glass-nav-pill-top pt-5 pb-20 px-12 lg:px-24"
          )}
        >
          {/*
            z-10 lifts all real content above the z-0 specular (::before) and
            z-0 glow (::after) pseudo-element layers painted by glass-nav-pill.
          */}
          <div className="flex items-center justify-between relative z-10">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <motion.div
                className="rounded-xl px-2.5 py-1.5 overflow-hidden transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src="/new-logos/full-logo-no-bg.png"
                  alt="Velion Consulting"
                  width={112}
                  height={112}
                  priority
                  className="h-18 sm:h-28 w-auto"
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation — centered, no glass-on-glass per Apple spec */}
            <nav className="hidden md:flex items-center justify-center absolute left-1/2 -translate-x-1/2">
              <div className={cn(
                "flex items-center transition-all duration-500",
                scrolled ? "gap-1" : "gap-2"
              )}>
                {navItems.map((item) => {
                  const active = isActive(item.href)
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={cn(
                        "relative px-4 py-2 text-sm font-medium transition-colors rounded-full text-text-secondary hover:text-white",
                        active && "text-white"
                      )}
                    >
                      <span className="relative z-10">{item.name}</span>
                      {active && (
                        <motion.div
                          layoutId="desktop-active"
                          className="absolute inset-x-0 -bottom-1 h-px bg-linear-to-r from-transparent via-accent-cyan to-transparent opacity-50"
                          transition={{ duration: 0.3 }}
                        />
                      )}
                      {/* Hover pill — plain fill, not glass (no glass-on-glass) */}
                      <div className="absolute inset-0 rounded-full bg-white/5 opacity-0 hover:opacity-100 transition-opacity -z-10" />
                    </Link>
                  )
                })}
              </div>
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center gap-4">
              {/* Desktop CTA — glass treatment for both scroll states */}
              <div className="hidden md:block">
                <Link href="/contact">
                  <motion.button
                    className={cn(
                      "rounded-full font-medium transition-all duration-300 group glass-cta-btn",
                      scrolled ? "px-5 py-2 text-sm" : "px-6 py-2.5"
                    )}
                    onPointerMove={handleCtaBtnGlow}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* z-3 floats text above ::before (z-1) and ::after (z-2) layers */}
                    <span className="relative z-3 flex items-center gap-2">
                      Book a Call
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </motion.button>
                </Link>
              </div>

              {/* Mobile Menu Toggle */}
              <motion.button
                className="md:hidden relative z-50 p-2 text-white hover:text-accent-cyan transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                whileTap={{ scale: 0.9 }}
              >
                {isMobileMenuOpen ? <X /> : <Menu />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Full-screen mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-bg-primary"
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.5, ease: [0.32, 0, 0.24, 1] }}
          >
            <div className="absolute inset-0 opacity-20 pointer-events-none noise-overlay" />
            <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-accent-blue/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-accent-purple/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="container-custom h-full flex flex-col pt-32 pb-8">
              <nav className="flex-1 flex flex-col justify-center gap-6">
                {navItems.map((item, index) => {
                  const active = isActive(item.href)
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ delay: 0.1 + index * 0.1, duration: 0.4 }}
                    >
                      <Link
                        href={item.href}
                        className={cn(
                          "group flex items-center justify-between text-3xl sm:text-4xl font-heading font-bold transition-colors",
                          active ? "text-white" : "text-white/40 hover:text-white"
                        )}
                      >
                        <span className="flex items-center gap-4">
                          <span className="text-sm font-mono text-accent-cyan opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0 duration-300">
                            0{index + 1}
                          </span>
                          {item.name}
                        </span>
                        <ArrowRight className={cn(
                          "w-6 h-6 sm:w-8 sm:h-8 opacity-0 -translate-x-4 transition-all duration-300",
                          "group-hover:opacity-100 group-hover:translate-x-0",
                          active && "opacity-100 translate-x-0 text-accent-cyan"
                        )} />
                      </Link>
                    </motion.div>
                  )
                })}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
