import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-[600px] bg-gradient-to-r from-teal-600 to-blue-600 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border-4 border-yellow-400 rounded-full transform rotate-45"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-yellow-400 rounded-full opacity-50"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 border-4 border-white transform rotate-12"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              <span className="text-yellow-400">Joshika Pharma</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100 text-pretty">
              Leading Pharmaceutical Company In India!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3">
                Learn More About Us
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-teal-600 px-8 py-3 bg-transparent"
              >
                Our Products
              </Button>
            </div>
          </div>

          {/* DNA Helix Image */}
          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/dna-double-helix-structure-in-blue-with-pharmaceut.jpg"
                alt="DNA helix representing pharmaceutical innovation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
