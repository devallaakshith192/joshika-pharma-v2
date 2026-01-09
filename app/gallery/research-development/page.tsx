"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"

export default function ResearchDevelopmentPage() {
  // Images with R prefix will be loaded here
  const images = [
    {
      id: 1,
      src: "/images/r1.jpg",
      alt: "Research & Development 1",
    },
    {
      id: 2,
      src: "/images/r2.jpg",
      alt: "Research & Development 2",
    },
    {
      id: 3,
      src: "/images/r3.jpg",
      alt: "Research & Development 3",
    },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <section className="bg-blue-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold">Research & Development</h1>
            <p className="text-blue-100 text-lg mt-2">
              Innovation and development facilities for pharmaceutical research and formulation
            </p>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {images
              .filter((img) => img.src !== "/images/r1.jpg" || img.id === 1)
              .map((image) => (
                <div
                  key={image.id}
                  className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-64"
                >
                  <div className="relative w-full h-full">
                    <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
                  </div>
                </div>
              ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
