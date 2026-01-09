"use client"

import Image from "next/image"

export default function QualityControlLabClient() {
  const images = [
    {
      id: 1,
      src: "/images/qa-201.jpeg",
      alt: "LC-2010CHT Liquid Chromatography System",
    },
    {
      id: 2,
      src: "/images/qa-202.jpeg",
      alt: "Stacked Analytical Instruments HPLC Systems",
    },
    {
      id: 3,
      src: "/images/qa-203.jpeg",
      alt: "Technician Operating LABSDA Analytical Equipment",
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <section className="bg-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold">Quality Control Lab</h1>
          <p className="text-blue-100 text-lg mt-2">
            Advanced testing and quality assurance facilities ensuring pharmaceutical excellence
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((image) => (
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
  )
}
