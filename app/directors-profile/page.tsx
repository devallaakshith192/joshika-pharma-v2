import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"

export const metadata = {
  title: "Leadership & Directors - Joshika Pharma Pvt Ltd",
  description:
    "Meet our visionary directors with decades of combined experience in pharmaceutical manufacturing, quality assurance, and regulatory affairs.",
}

export default function DirectorsProfilePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Header */}
        <section className="bg-blue-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Director's Profile</h1>
            <p className="text-blue-100 text-lg max-w-2xl">
              Meet the visionary leadership behind Joshika Pharma Pvt Ltd
            </p>
          </div>
        </section>

        {/* Directors Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Director Card 1 - Mr. Gamidi Srinivasa Rao */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="h-80 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <Image
                  src="/directors/gamidi-srinivasa-rao.png"
                  alt="Mr. Gamidi Srinivasa Rao - Director"
                  width={280}
                  height={320}
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-blue-900 mb-2">Mr. Gamidi Srinivasa Rao</h3>
                <p className="text-blue-600 font-semibold mb-4">Director</p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Mr. G. Srinivasa Rao holds a Post Graduation in Organic Chemistry and has over 20 years of experience
                  in pharmaceutical manufacturing and pelletization. He has worked across leading companies in roles
                  spanning R&D, Pilot Plant Scale-Up, and Production Management. His technical expertise and leadership
                  contribute significantly to the growth of Joshika Pharma.
                </p>
              </div>
            </div>

            {/* Director Card 2 - Mrs. Usha Devalla */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="h-80 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <Image
                  src="/directors/usha-devalla.png"
                  alt="Mrs. Usha Devalla - Director"
                  width={280}
                  height={320}
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-blue-900 mb-2">Mrs. Usha Devalla</h3>
                <p className="text-blue-600 font-semibold mb-4">Director</p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Mrs. Usha Devalla has over 17 years of experience in Quality Control, Quality Assurance, and
                  Regulatory Affairs. With a strong academic background in Organic Chemistry, she has worked with
                  multiple reputed pharma companies and handled EUGMP, WHO GMP, ISO, and major customer audits. Her
                  disciplined leadership and expertise strengthen Joshika Pharma's quality systems.
                </p>
              </div>
            </div>
          </div>

          {/* Company Vision Section */}
          <div className="mt-16 bg-white rounded-lg shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Leadership Vision</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our leadership team is committed to driving innovation, maintaining the highest quality standards, and
              ensuring sustainable growth in the pharmaceutical industry. With decades of combined experience, we guide
              Joshika Pharma Pvt Ltd towards excellence and customer satisfaction.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We believe in ethical business practices, continuous improvement, and nurturing a culture of excellence
              within our organization.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
