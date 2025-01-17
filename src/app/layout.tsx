'use client';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { useState } from "react";
import { Home, Info, Mail, FolderGit2, Menu, X } from "lucide-react";
import Head from "next/head";

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
}: Readonly<{ children: React.ReactNode }>) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", icon: Home, label: "Home" },
    { href: "/projects", icon: FolderGit2, label: "Projects" },
    { href: "/about", icon: Info, label: "About" },
    { href: "/contact", icon: Mail, label: "Contact" },
  ];

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <Head>
        <title>Tevin Owino - Portfolio</title>
        <meta name="description" content="The personal portfolio of Tevin Owino, showcasing web development projects and skills." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="Tevin Owino, portfolio, web development, React, Next.js, JavaScript" />
        <meta name="author" content="Tevin Owino" />
        <meta property="og:title" content="Tevin Owino - Portfolio" />
        <meta property="og:description" content="Explore the projects and skills of Tevin Owino, a fullstack web developer." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta property="og:image" content="/og-image.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="bg-gray-900 text-gray-100">
        <nav className="fixed top-0 left-0 right-0 bg-gray-900/90 backdrop-blur-lg border-b border-blue-800/40 z-50 shadow-md">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center justify-between h-16">
              <Link 
                href="/" 
                className="font-bold text-2xl text-white hover:text-blue-400 transition-colors duration-300"
              >
                Tevin Owino
              </Link>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-6">
                {navLinks.map(({ href, icon: Icon, label }) => (
                  <Link 
                    key={href}
                    href={href}
                    className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors duration-300 group relative"
                  >
                    <Icon 
                      size={18} 
                      className="group-hover:scale-110 transition-transform duration-200"
                    />
                    <span>{label}</span>
                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden text-gray-300 hover:text-blue-400 transition-colors duration-300"
              >
                {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div 
            className={`fixed top-16 left-0 right-0 bg-gray-900/95 backdrop-blur-lg border-b border-blue-800/40 shadow-lg transition-all duration-500 ease-in-out ${
              isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0 pointer-events-none'
            }`}
          >
            <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col gap-4">
              {navLinks.map(({ href, icon: Icon, label }) => (
                <Link 
                  key={href}
                  href={href}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors duration-300 p-3 rounded-lg hover:bg-blue-800/20 group"
                >
                  <Icon size={20} className="group-hover:scale-110 transition-transform duration-200" />
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
