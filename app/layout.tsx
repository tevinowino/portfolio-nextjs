import type React from "react"
import type { Metadata } from "next"
import { Inter, Saira } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const saira = Saira({
  subsets: ["latin"],
  variable: "--font-saira",
})

export const metadata: Metadata = {
  title: "Velion Labs - Secure, Scalable Digital Solutions",
  description:
    "Technology consulting and innovation company helping businesses grow through secure, scalable, and reliable digital solutions.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${saira.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <FloatingWhatsApp />
        <Analytics />
      </body>
    </html>
  )
}
