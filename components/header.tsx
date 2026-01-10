"use client"

import { Menu, X, ArrowRight, Home, DollarSign, Briefcase, Users, Mail, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import Link from "next/link"
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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div 
          className={cn(
            "pointer-events-auto transition-all duration-500 ease-in-out",
            scrolled 
              ? "mt-4 w-[90%] md:w-[80%] lg:w-[1200px] rounded-full bg-bg-primary/80 backdrop-blur-xl border border-white/10 shadow-lg shadow-black/10 py-3 px-6"
              : "mt-0 w-full bg-transparent border-b border-transparent py-5 px-6 lg:px-12"
          )}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group relative z-50">
               {/* 
                 For 'sleekness', we can just use the text logo or keeps the image but cleaner. 
                 Assuming the image exists, we'll keep it but ensure it scales nicely.
               */}
              <motion.img
                src="/full-logo-no-bg.png"
                alt="Velion Consulting"
                className={cn(
                  "brightness-2 invert transition-all duration-500",
                  scrolled ? "h-24 md:h-24 w-auto" : "h-24 md:h-24 w-auto"
                )}
                whileHover={{ scale: 1.05 }}
              />
            </Link>

            {/* Desktop Navigation - Centered and Minimal */}
            <nav className="hidden md:flex items-center justify-center absolute left-1/2 -translate-x-1/2">
               <div className={cn(
                 "flex items-center gap-1 transition-all duration-500",
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
                           className="absolute inset-x-0 -bottom-1 h-px bg-gradient-to-r from-transparent via-accent-cyan to-transparent opacity-50"
                           transition={{ duration: 0.3 }}
                         />
                       )}
                       {/* Hover effect pill */}
                       <div className="absolute inset-0 rounded-full bg-white/5 opacity-0 hover:opacity-100 transition-opacity -z-10" />
                     </Link>
                   )
                 })}
               </div>
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center gap-4">
               {/* Desktop CTA */}
               <div className="hidden md:block">
                 <Link href="/contact">
                   <motion.button
                     className={cn(
                       "relative overflow-hidden rounded-full font-medium transition-all duration-300 group",
                       scrolled 
                         ? "bg-white text-bg-primary px-5 py-2 text-sm hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                         : "bg-white/10 text-white backdrop-blur-sm border border-white/20 px-6 py-2.5 hover:bg-white/20"
                     )}
                     whileTap={{ scale: 0.98 }}
                   >
                     <span className="relative z-10 flex items-center gap-2">
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

      {/* Modern Full Screen Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-bg-primary"
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.5, ease: [0.32, 0, 0.24, 1] }} // smooth ease
          >
            {/* Noise Texture */}
            <div className="absolute inset-0 opacity-20 pointer-events-none noise-overlay" />
            
            {/* Background Gradient Orbs */}
            <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-accent-blue/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-accent-purple/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="container-custom h-full flex flex-col pt-32 pb-8">
               <nav className="flex-1 flex flex-col justify-center gap-6">
                 {navItems.map((item, index) => {
                   const active = isActive(item.href)
                   const Icon = item.icon
                   
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


               {/* Footer removed as requested */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
