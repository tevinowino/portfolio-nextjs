"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { useState } from "react";
import { Home, Info, Mail, FolderGit2, Menu, X, Download } from "lucide-react";
import Head from "next/head";
import Image from "next/image";
import { ThemeProvider } from "./components/ThemeProvider";
import { ThemeToggle } from "./components/ThemeToggle";

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
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
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
      <body className="bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <nav className="fixed top-2 sm:top-4 left-1/2 transform -translate-x-1/2 w-[95%] sm:w-[90%] max-w-6xl bg-background/50 backdrop-blur-xl border border-border rounded-2xl sm:rounded-full shadow-2xl shadow-primary/10 z-50 transition-all duration-300 hover:shadow-primary/20">
            <div className="flex items-center justify-between px-4 sm:px-6 py-2 sm:py-3">
              {/* Logo */}
              <Link
                href="/"
                className="font-bold text-2xl text-foreground hover:text-primary transition-all duration-500 relative group"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent animate-gradient-x font-extrabold">
                  <Image src="/images/logo.png" alt="Logo" width={40} height={40} priority className="w-8 h-8 sm:w-10 sm:h-10"></Image>
                </span>
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-primary via-accent to-secondary transition-all duration-500 group-hover:w-full"></span>
                <span className="absolute -inset-2 bg-foreground/5 rounded-xl blur opacity-0 group-hover:opacity-100 transition-all duration-500"></span>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center gap-6">
                {navLinks.map(({ href, icon: Icon, label, special }) => (
                  <Link
                    key={href}
                    href={href}
                    className={`flex items-center gap-2 transition-all duration-500 group relative px-3 py-2 rounded-lg text-sm ${
                      special
                        ? "bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-semibold shadow-lg hover:shadow-primary/50"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                    }`}
                  >
                    <Icon
                      size={18}
                      className="group-hover:scale-125 transition-transform duration-500"
                    />
                    <span className="font-medium">{label}</span>
                    {!special && (
                      <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-primary to-accent transition-all duration-500 group-hover:w-full"></span>
                    )}
                  </Link>
                ))}
                <a
                  href="/resume.pdf"
                  download
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-all duration-500 group relative px-3 py-2 rounded-lg hover:bg-accent/50 border border-border hover:border-primary text-sm"
                >
                  <Download
                    size={18}
                    className="group-hover:scale-125 transition-transform duration-500"
                  />
                  <span className="font-medium">Resume</span>
                </a>
                <ThemeToggle />
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden text-muted-foreground hover:text-foreground transition-all duration-500 p-2 rounded-lg hover:bg-accent/50"
              >
                {isMenuOpen ? (
                  <X
                    size={24}
                    className="transform hover:rotate-90 transition-transform duration-500"
                  />
                ) : (
                  <Menu
                    size={24}
                    className="transform hover:scale-110 transition-transform duration-500"
                  />
                )}
              </button>
            </div>

            {/* Mobile Navigation */}
            <div
              className={`lg:hidden absolute top-full left-0 w-full mt-2 bg-background/90 backdrop-blur-xl border border-border rounded-2xl shadow-2xl shadow-primary/20 transition-all duration-500 ease-in-out ${
                isMenuOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-4 pointer-events-none"
              }`}
            >
              <div className="px-4 py-4 flex flex-col gap-2">
                {navLinks.map(({ href, icon: Icon, label, special }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center gap-3 transition-all duration-500 p-3 rounded-xl group transform hover:translate-x-1 ${
                      special
                        ? "bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent/30"
                    }`}
                  >
                    <Icon
                      size={20}
                      className="group-hover:scale-125 transition-transform duration-500"
                    />
                    <span className="font-medium">{label}</span>
                  </Link>
                ))}
                <a
                  href="/resume.pdf"
                  download
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-all duration-500 p-3 rounded-xl hover:bg-accent/30 group transform hover:translate-x-1 border border-border"
                >
                  <Download
                    size={20}
                    className="group-hover:scale-125 transition-transform duration-500"
                  />
                  <span className="font-medium">Resume</span>
                </a>
                <ThemeToggle />
              </div>
            </div>
          </nav>

          <main className="">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}