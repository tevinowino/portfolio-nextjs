'use client';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { useState } from "react";
import { Home, Info, Mail, FolderGit2, Menu, X } from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", icon: Home, label: "Home" },
    { href: "/projects", icon: FolderGit2, label: "Projects" },
    { href: "/about", icon: Info, label: "About" },
    { href: "/contact", icon: Mail, label: "Contact" },
  ];

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-gray-900">
        <nav className="fixed top-0 left-0 right-0 bg-gray-900/80 backdrop-blur-md border-b border-blue-900/30 z-50">
          <div className="max-w-5xl mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <Link 
                href="/" 
                className="font-bold text-xl text-white hover:text-blue-400 transition-colors"
              >
                Portfolio
              </Link>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-6">
                {navLinks.map(({ href, icon: Icon, label }) => (
                  <Link 
                    key={href}
                    href={href}
                    className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors group"
                  >
                    <Icon size={18} className="group-hover:scale-110 transition-transform" />
                    <span>{label}</span>
                  </Link>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden text-gray-300 hover:text-blue-400 transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div 
            className={`
              md:hidden 
              absolute 
              top-16 
              left-0 
              right-0 
              bg-gray-900/95 
              backdrop-blur-md 
              border-b 
              border-blue-900/30
              transition-all 
              duration-300 
              ease-in-out
              ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}
            `}
          >
            <div className="max-w-5xl mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map(({ href, icon: Icon, label }) => (
                <Link 
                  key={href}
                  href={href}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors p-2 rounded-lg hover:bg-blue-900/20 group"
                >
                  <Icon size={20} className="group-hover:scale-110 transition-transform" />
                  <span>{label}</span>
                </Link>
              ))}
            </div>
          </div>
        </nav>
        
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}