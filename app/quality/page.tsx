import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata = {
  title: "Quality Assurance - Joshika Pharma Pvt Ltd",
  description:
    "Discover Joshika Pharma's comprehensive quality assurance program including ISO certification, cGMP compliance, and ICH guidelines adherence.",
}

export default function QualityPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-sky-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Quality Assurance</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Committed to maintaining the highest quality standards through rigorous testing and quality control
              processes.
            </p>
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Quality Standards</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our quality assurance program ensures that every product meets the highest pharmaceutical standards.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-sky-100 p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">ISO</span>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">ISO Certification</h3>
              <p className="text-gray-600">
                Certified quality management systems ensuring consistent product quality and continuous improvement.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-sky-100 p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">GMP</span>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">cGMP Compliance</h3>
              <p className="text-gray-600">
                Current Good Manufacturing Practices compliance ensuring product safety and efficacy.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-sky-100 p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">ICH</span>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">ICH Guidelines</h3>
              <p className="text-gray-600">
                Adherence to International Council for Harmonisation guidelines for pharmaceutical development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Control Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Quality Control Process</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our comprehensive quality control process ensures that every batch meets stringent quality standards
                before release. We employ advanced analytical techniques and maintain detailed documentation throughout
                the manufacturing process.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Raw Material Testing</h3>
                  <p className="text-gray-600">
                    Complete analysis of all incoming materials including identity, purity, and potency testing.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">In-Process Controls</h3>
                  <p className="text-gray-600">
                    Continuous monitoring during manufacturing to ensure process consistency and product quality.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Finished Product Testing</h3>
                  <p className="text-gray-600">
                    Comprehensive testing of final products including dissolution, assay, and stability studies.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-blue-900 mb-6">Testing Parameters</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-600">Identity Testing</span>
                  <span className="text-green-600 font-medium">✓ Verified</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-600">Purity Analysis</span>
                  <span className="text-green-600 font-medium">✓ Verified</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-600">Potency Testing</span>
                  <span className="text-green-600 font-medium">✓ Verified</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-600">Dissolution Studies</span>
                  <span className="text-green-600 font-medium">✓ Verified</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-600">Stability Testing</span>
                  <span className="text-green-600 font-medium">✓ Verified</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600">Microbiological Testing</span>
                  <span className="text-green-600 font-medium">✓ Verified</span>
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
