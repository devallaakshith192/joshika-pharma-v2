"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"

export default function StorageFacilityPage() {
  // Images with S prefix will be loaded here
  const images = [
    {
      id: 1,
      src: "/images/s1.jpg",
      alt: "Storage Facility 1",
    },
    {
      id: 2,
      src: "/images/s2.jpg",
      alt: "Storage Facility 2",
    },
    {
      id: 3,
      src: "/images/s3.jpg",
      alt: "Storage Facility 3",
    },
    {
      id: 4,
      src: "/images/s4.jpg",
      alt: "Storage Facility 4",
    },
    {
      id: 5,
      src: "/images/s5.jpg",
      alt: "Storage Facility 5",
    },
    {
      id: 6,
      src: "/images/s6.jpg",
      alt: "Storage Facility 6",
    },
    {
      id: 7,
      src: "/images/s7.jpg",
      alt: "Storage Facility 7",
    },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <section className="bg-blue-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold">Storage Facility</h1>
            <p className="text-blue-100 text-lg mt-2">
              Climate-controlled storage infrastructure ensuring pharmaceutical product integrity
            </p>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {images
              .filter((img) => img.src !== "/images/s1.jpg" || img.id === 1)
              .map((image) => (
                <div
                  key={image.id}
                  className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-48"
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
