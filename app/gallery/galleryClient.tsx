"use client"

import Image from "next/image"
import Link from "next/link"

export default function GalleryClient() {
  const galleryCategories = [
    {
      id: 1,
      title: "Manufacturing Facility",
      image: "/pharmaceutical-manufacturing.png",
      href: "/gallery/manufacturing-facility",
    },
    {
      id: 2,
      title: "Quality Control Lab",
      image: "/pharmaceutical-quality-control-laboratory.jpg",
      href: "/gallery/quality-control-lab",
    },
    {
      id: 3,
      title: "Research & Development",
      image: "/pharmaceutical-research-and-development.jpg",
      href: "/gallery/research-development",
    },
    {
      id: 4,
      title: "Storage Facility",
      image: "/pharmaceutical-storage-facility.jpg",
      href: "/gallery/storage-facility",
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Gallery</h1>
          <p className="text-blue-100 text-lg max-w-2xl">
            Explore our state-of-the-art manufacturing facilities, quality control labs, research capabilities, and
            storage infrastructure.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {galleryCategories.map((item) => (
            <Link key={item.id} href={item.href}>
              <div className="group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 h-64">
                <div className="relative w-full h-full">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300 flex items-end p-4">
                    <h3 className="text-white font-bold text-lg">{item.title}</h3>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
