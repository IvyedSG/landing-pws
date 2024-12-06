import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import { Navigation } from "./components/navigation"
import { Footer } from "./components/footer"

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
})

export const metadata: Metadata = {
  title: "PowerSales CRM",
  description: "Transform your real estate business with PowerSales CRM. Manage leads, properties, and deals all in one place.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} antialiased min-h-screen bg-black flex flex-col`}>
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
