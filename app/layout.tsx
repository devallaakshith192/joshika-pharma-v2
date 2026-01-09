import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import ClientLayout from "./client-layout"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" })

export const metadata: Metadata = {
  title: "Joshika Pharma Pvt Ltd - Leading Pharmaceutical Company In India",
  description:
    "Joshika Pharma Pvt. Ltd. - One place for credibility, commitment, quality and delivery on time. Manufacturing innovative pharmaceutical products since 2016.",
  keywords: "pharmaceutical, pharma, medicine, API, Active Pharmaceutical Ingredients, manufacturing, India, Hyderabad",
  authors: [{ name: "Joshika Pharma Pvt Ltd" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Joshika Pharma Pvt Ltd - Leading Pharmaceutical Company In India",
    description:
      "Manufacturing innovative pharmaceutical products with credibility, commitment, quality and delivery on time.",
    type: "website",
    url: "https://joshikapharma.com",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        <ClientLayout>{children}</ClientLayout>
        <Analytics />
      </body>
    </html>
  )
}
