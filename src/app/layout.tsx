"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { useState } from "react";
import { Home, Info, Mail, FolderGit2, Menu, X, Download } from "lucide-react";
import Head from "next/head";
import SplashCursor from "./components/SplashCursor";

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
    { href: "/contact", icon: Mail, label: "Contact", special: true },
  ];

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <Head>
        <title>Tevin Owino </title>
        <meta
          name="description"
          content="The personal portfolio of Tevin Owino, showcasing web development projects and skills."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="Tevin Owino, portfolio, web development, React, Next.js, Developers,  JavaScript"
        />
        <meta name="author" content="Tevin Owino" />
        <meta property="og:title" content="Tevin Owino - Portfolio" />
        <meta
          property="og:description"
          content="Explore the projects and skills of Tevin Owino, a fullstack web developer."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tevinowino.vercel.app" />
        <meta property="og:image" content="/og-image.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="bg-gray-900 text-gray-100">
        <SplashCursor />
        <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] max-w-5xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl shadow-blue-500/10 z-50 transition-all duration-300 hover:shadow-blue-400/20">
          <div className="flex items-center justify-between px-8 py-5">
            {/* Logo */}
            <Link
              href="/"
              className="font-bold text-2xl text-white hover:text-blue-400 transition-all duration-500 relative group"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 animate-gradient-x font-extrabold">
                Tevin Owino
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 transition-all duration-500 group-hover:w-full"></span>
              <span className="absolute -inset-2 bg-white/5 rounded-xl blur opacity-0 group-hover:opacity-100 transition-all duration-500"></span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map(({ href, icon: Icon, label, special }) => (
                <Link
                  key={href}
                  href={href}
                  className={`flex items-center gap-2 transition-all duration-500 group relative px-4 py-2 rounded-lg ${
                    special
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold shadow-lg hover:shadow-blue-500/50"
                      : "text-gray-300 hover:text-blue-400 hover:bg-white/5"
                  }`}
                >
                  <Icon
                    size={20}
                    className="group-hover:scale-125 transition-transform duration-500"
                  />
                  <span className="font-medium">{label}</span>
                  {!special && (
                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-500 group-hover:w-full"></span>
                  )}
                </Link>
              ))}
              <a
                href="/resume.pdf"
                download
                className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-all duration-500 group relative px-4 py-2 rounded-lg hover:bg-white/5 border border-blue-400/30 hover:border-blue-400"
              >
                <Download
                  size={20}
                  className="group-hover:scale-125 transition-transform duration-500"
                />
                <span className="font-medium">Download My Resume</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-300 hover:text-blue-400 transition-all duration-500 p-2 rounded-lg hover:bg-white/5"
            >
              {isMenuOpen ? (
                <X
                  size={28}
                  className="transform hover:rotate-90 transition-transform duration-500"
                />
              ) : (
                <Menu
                  size={28}
                  className="transform hover:scale-110 transition-transform duration-500"
                />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`md:hidden absolute top-full left-0 w-full bg-blue-950/90 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl shadow-blue-500/20 transition-all duration-500 ease-in-out ${
              isMenuOpen
                ? "opacity-100 translate-y-2"
                : "opacity-0 -translate-y-4 pointer-events-none"
            }`}
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map(({ href, icon: Icon, label, special }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center gap-3 transition-all duration-500 p-4 rounded-xl group transform hover:translate-x-2 ${
                    special
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold"
                      : "text-gray-300 hover:text-blue-400 hover:bg-blue-800/30"
                  }`}
                >
                  <Icon
                    size={22}
                    className="group-hover:scale-125 transition-transform duration-500"
                  />
                  <span className="font-medium">{label}</span>
                </Link>
              ))}
              <a
                href="/resume.pdf"
                download
                className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-all duration-500 p-4 rounded-xl hover:bg-blue-800/30 group transform hover:translate-x-2 border border-blue-400/30"
              >
                <Download
                  size={22}
                  className="group-hover:scale-125 transition-transform duration-500"
                />
                <span className="font-medium">Resume</span>
              </a>
            </div>
          </div>
        </nav>

        <main className="">{children}</main>
      </body>
    </html>
  );
}
