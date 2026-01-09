"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CTABannerSection() {
  return (
    <section className="py-20 md:py-24 bg-gradient-to-r from-blue-900 to-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-8 text-center">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
              Looking for a reliable pharmaceutical partner?
            </h2>
            <p className="text-lg md:text-xl text-blue-100 text-pretty">
              Partner with Joshika Pharma for quality, compliance, and consistency.
            </p>
          </div>

          <Link href="/contact">
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold text-lg px-10 py-6 rounded-full transition-all duration-300 hover:shadow-xl hover:scale-105">
              Enquire Now
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
