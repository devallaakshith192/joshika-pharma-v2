import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata = {
  title: "About Us - Joshika Pharma Pvt Ltd",
  description:
    "Learn about Joshika Pharma's journey since 2016, our core values of credibility, commitment, quality and delivery, and our commitment to pharmaceutical excellence.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-sky-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">About Joshika Pharma</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leading pharmaceutical company committed to innovation, quality, and excellence in healthcare solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Established in 2016, Joshika Pharma Pvt. Ltd. has emerged as a trusted name in the pharmaceutical
                industry. We specialize in the development and manufacturing of high-quality pharmaceutical products
                with a focus on Modified Release Pellets of various Active Pharmaceutical Ingredients (APIs).
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our commitment to excellence, innovation, and regulatory compliance has positioned us as a reliable
                partner for healthcare providers and pharmaceutical companies worldwide.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-sky-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Key Highlights</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Established in 2016
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Specialized in Modified Release Pellets
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  State-of-the-art manufacturing facilities
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Regulatory compliance focused
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide our operations and define our commitment to excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Credibility</h3>
              <p className="text-gray-600">Building trust through transparency and reliable business practices.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Commitment</h3>
              <p className="text-gray-600">Dedicated to delivering on our promises and exceeding expectations.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">Q</span>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Quality</h3>
              <p className="text-gray-600">Maintaining the highest standards in all our products and processes.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">D</span>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Delivery</h3>
              <p className="text-gray-600">Ensuring timely delivery and efficient service to our clients.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
