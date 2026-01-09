import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata = {
  title: "Mission & Vision - Joshika Pharma Pvt Ltd",
  description:
    "Discover Joshika Pharma's mission to provide innovative pharmaceutical solutions and our vision to be a globally recognized leader in quality and excellence.",
}

export default function MissionVisionPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-sky-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Mission & Vision</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence drives us to provide innovative pharmaceutical solutions for better
              healthcare.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Mission */}
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">M</span>
              </div>
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                To provide innovative pharmaceutical solutions with credibility, commitment, quality and delivery on
                time, contributing to better healthcare worldwide through our specialized expertise in Modified Release
                Pellets and pharmaceutical manufacturing.
              </p>
            </div>

            {/* Vision */}
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">V</span>
              </div>
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                To be a globally recognized pharmaceutical company, leading in innovation and quality, while maintaining
                our core values of integrity, excellence, and customer satisfaction. We aspire to make healthcare
                accessible and effective for all.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Core Principles</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The fundamental principles that guide our operations and shape our company culture.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Credibility</h3>
              <p className="text-gray-600">
                Building lasting relationships through transparency, honesty, and reliable business practices that earn
                trust.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Commitment</h3>
              <p className="text-gray-600">
                Dedicated to delivering on our promises and exceeding expectations in every aspect of our business.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">Q</span>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Quality</h3>
              <p className="text-gray-600">
                Maintaining the highest standards in all our products, processes, and services without compromise.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">D</span>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Delivery</h3>
              <p className="text-gray-600">
                Ensuring timely delivery and efficient service while maintaining quality and customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Goals */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Goals</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Strategic objectives that drive our growth and commitment to pharmaceutical excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Innovation Excellence</h3>
              <p className="text-gray-600">
                Continuously advancing our research and development capabilities to create innovative pharmaceutical
                solutions.
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Global Expansion</h3>
              <p className="text-gray-600">
                Expanding our reach to serve healthcare providers and patients worldwide with our quality products.
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Sustainable Growth</h3>
              <p className="text-gray-600">
                Building a sustainable business model that benefits all stakeholders while contributing to better
                healthcare.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
