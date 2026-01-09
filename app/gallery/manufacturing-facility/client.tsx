"use client"

import Image from "next/image"

export default function ManufacturingFacilityClient() {
  const images = [
    {
      id: 1,
      src: "/images/m-201.jpg",
      alt: "Manufacturing Facility - Drum Dryer Equipment 1",
    },
    {
      id: 2,
      src: "/images/m-202.jpg",
      alt: "Manufacturing Facility - Pulverizer Room",
    },
    {
      id: 3,
      src: "/images/m-203.jpg",
      alt: "Manufacturing Facility - Drying Chamber",
    },
    {
      id: 4,
      src: "/images/m-204.jpg",
      alt: "Manufacturing Facility - Coating Equipment",
    },
    {
      id: 5,
      src: "/images/m-205.jpg",
      alt: "Manufacturing Facility - Dryer Chamber",
    },
    {
      id: 6,
      src: "/images/m-206.jpg",
      alt: "Manufacturing Facility - Tilting Mixer",
    },
    {
      id: 7,
      src: "/images/m-207.jpg",
      alt: "Manufacturing Facility - Fluid Bed Dryer",
    },
    {
      id: 8,
      src: "/images/m-208.jpg",
      alt: "Manufacturing Facility - Conical Mixer Equipment",
    },
    {
      id: 9,
      src: "/images/m-209.jpg",
      alt: "Manufacturing Facility - Fluid Bed Processor",
    },
    {
      id: 10,
      src: "/images/m-2010.jpg",
      alt: "Manufacturing Facility - Rotary Dryer",
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <section className="bg-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold">Manufacturing Facility</h1>
          <p className="text-blue-100 text-lg mt-2">
            State-of-the-art pharmaceutical manufacturing equipment and infrastructure
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
