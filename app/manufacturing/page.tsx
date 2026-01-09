import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata = {
  title: "Manufacturing Excellence - Joshika Pharma Pvt Ltd",
  description:
    "Explore Joshika Pharma's state-of-the-art manufacturing facilities featuring advanced equipment, GMP-compliant processes, and world-class production capabilities.",
}

export default function ManufacturingPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-sky-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Manufacturing Excellence</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              State-of-the-art facilities ensuring the highest quality standards in pharmaceutical production.
            </p>
          </div>
        </div>
      </section>

      {/* Manufacturing Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Manufacturing Process</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Advanced manufacturing processes designed to ensure consistent quality and regulatory compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">Raw Material Testing</h3>
              <p className="text-gray-600">
                Comprehensive testing of all incoming raw materials to ensure quality standards.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">Pellet Formation</h3>
              <p className="text-gray-600">Advanced pelletization techniques using state-of-the-art equipment.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">Coating Process</h3>
              <p className="text-gray-600">Precision coating application for controlled release characteristics.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">Quality Control</h3>
              <p className="text-gray-600">Final testing and quality assurance before product release.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-6">World-Class Facilities</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our manufacturing facilities are equipped with the latest technology and adhere to international
                pharmaceutical manufacturing standards. We maintain controlled environments to ensure product integrity
                and consistency.
              </p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-600">cGMP compliant facilities</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-600">Advanced automation systems</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-600">Environmental monitoring</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-600">Cleanroom technology</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-blue-900 mb-6">Facility Specifications</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-blue-900 mb-2">Production Capacity</h4>
                  <p className="text-gray-600 text-sm">High-volume production capabilities with flexible batch sizes</p>
                </div>

                <div>
                  <h4 className="font-semibold text-blue-900 mb-2">Quality Systems</h4>
                  <p className="text-gray-600 text-sm">ISO certified quality management systems</p>
                </div>

                <div>
                  <h4 className="font-semibold text-blue-900 mb-2">Equipment</h4>
                  <p className="text-gray-600 text-sm">Latest pharmaceutical manufacturing equipment</p>
                </div>

                <div>
                  <h4 className="font-semibold text-blue-900 mb-2">Testing Labs</h4>
                  <p className="text-gray-600 text-sm">Fully equipped analytical and microbiological laboratories</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
