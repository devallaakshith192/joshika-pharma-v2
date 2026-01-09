import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"

export const metadata = {
  title: "Sustainability — Joshika Pharma",
  description:
    "Joshika Pharma's commitment to environmental responsibility, ethical practices, and sustainable pharmaceutical manufacturing.",
}

export default function SustainabilityPage() {
  return (
    <>
      <Header />
      <main>
        <section
          className="relative bg-cover bg-center text-white py-16 md:py-24"
          style={{
            backgroundImage: "url('/images/sustainability.jpg')",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 to-blue-800/80"></div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4 text-balance">
              Sustainability at Joshika Pharma
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 font-light mb-6 text-balance">
              Caring for Health — Caring for Our Planet
            </p>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto">
              At Joshika Pharma, we believe true healthcare goes hand in hand with environmental stewardship. Every
              tablet we manufacture, every process we optimize, and every partnership we build is guided by a single
              purpose: safeguarding human health while protecting our planet for generations to come.
            </p>
          </div>
        </section>

        {/* Core Commitment Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-blue-900 mb-8 text-center">
              Our Core Commitment
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-blue-600 mb-4">👥</div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">People</h3>
                <p className="text-gray-700">
                  Fostering ethical working conditions, employee welfare, and equal opportunities across all levels of
                  our organization.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-green-600 mb-4">🌍</div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Planet</h3>
                <p className="text-gray-700">
                  Minimizing environmental impact through responsible manufacturing, waste reduction, and conservation
                  of natural resources.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-blue-600 mb-4">📈</div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Progress</h3>
                <p className="text-gray-700">
                  Driving sustainable growth through innovation, continuous improvement, and alignment with global
                  sustainability goals.
                </p>
              </div>
            </div>
            <p className="text-lg text-gray-700 mt-12 text-center">
              Our commitment spans three pillars: <strong>People, Planet and Progress</strong>. We strive to deliver
              medicines that are affordable and safe — while ensuring our manufacturing practices uphold the highest
              environmental and ethical standards.
            </p>
          </div>
        </section>

        {/* Environmental Responsibility Section */}
        <section className="py-16 md:py-24 bg-blue-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-blue-900 mb-12 text-center">
              Environmental Responsibility
            </h2>

            {/* Eco-friendly Manufacturing */}
            <div className="mb-12 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Eco-Friendly Manufacturing</h3>
                <p className="text-gray-700 mb-4">
                  We employ advanced green chemistry techniques to minimize hazardous waste generation and reduce
                  emissions throughout our manufacturing processes. Our commitment to eco-conscious production ensures
                  that every pharmaceutical product meets the highest environmental standards.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Advanced waste minimization protocols</li>
                  <li>✓ Reduced chemical emissions and by-products</li>
                  <li>✓ Continuous process optimization</li>
                  <li>✓ Green chemistry implementation</li>
                </ul>
              </div>
              <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/eco-friendly-20manufacturing.jpg"
                  alt="Eco-friendly manufacturing with green field and house"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Water & Effluent Management */}
            <div className="mb-12 grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg order-2 md:order-1">
                <Image
                  src="/images/water-20-26-20effluent-20management.jpg"
                  alt="Water and effluent management with water splash"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Water & Effluent Management</h3>
                <p className="text-gray-700 mb-4">
                  Water conservation and proper effluent treatment are fundamental to our sustainability strategy. We
                  implement advanced treatment systems to recycle and reuse wastewater, working toward Zero Liquid
                  Discharge across all our facilities.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Advanced wastewater treatment systems</li>
                  <li>✓ Water recycling and reuse programs</li>
                  <li>✓ Zero Liquid Discharge initiatives</li>
                  <li>✓ Groundwater conservation efforts</li>
                </ul>
              </div>
            </div>

            {/* Energy & Carbon Footprint */}
            <div className="mb-12 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Energy Efficiency & Clean Energy</h3>
                <p className="text-gray-700 mb-4">
                  We are committed to reducing our carbon footprint through continuous energy optimization and exploring
                  renewable energy sources. Our facilities incorporate energy-efficient technologies and we are
                  progressively transitioning toward sustainable power generation.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Energy-efficient equipment and processes</li>
                  <li>✓ Renewable energy exploration</li>
                  <li>✓ Carbon footprint monitoring and reduction</li>
                  <li>✓ Green building practices</li>
                </ul>
              </div>
              <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/energy-20efficiency-20-26-20clean-20energy.png"
                  alt="Energy efficiency and clean energy with green earth"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Sustainable Packaging */}
            <div className="mb-12 grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg order-2 md:order-1">
                <Image
                  src="/images/sustainable-20packaging-20-26-20materials.jpg"
                  alt="Sustainable packaging with recycling symbol and green moss"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Sustainable Packaging & Materials</h3>
                <p className="text-gray-700 mb-4">
                  We are actively reducing plastic consumption and optimizing our packaging to minimize environmental
                  impact. Our focus is on recyclable, eco-friendly materials and responsible sourcing from sustainable
                  suppliers.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Plastic reduction initiatives</li>
                  <li>✓ 100% recyclable packaging materials</li>
                  <li>✓ Eco-friendly material selection</li>
                  <li>✓ Responsible supplier partnerships</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Social & Corporate Responsibility Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-blue-900 mb-12 text-center">
              Social & Corporate Responsibility
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Healthcare Access & Affordability</h3>
                <p className="text-gray-700">
                  We are committed to making quality medicines accessible to underserved communities. Our pricing
                  strategies and distribution channels are designed to ensure affordable healthcare reaches those who
                  need it most.
                </p>
              </div>
              <div className="bg-blue-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Ethical Practices & Compliance</h3>
                <p className="text-gray-700">
                  We adhere to the highest ethical standards and regulatory compliance across all operations. Our
                  commitment includes transparent business practices, anti-corruption measures, and full adherence to
                  international pharmaceutical regulations.
                </p>
              </div>
              <div className="bg-blue-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Employee Wellness & Development</h3>
                <p className="text-gray-700">
                  Our employees are our greatest asset. We provide safe working conditions, professional development
                  opportunities, fair compensation, and comprehensive welfare programs to support their growth and
                  well-being.
                </p>
              </div>
              <div className="bg-blue-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Community Engagement</h3>
                <p className="text-gray-700">
                  Through various outreach programs, we support community health initiatives, health awareness
                  campaigns, and educational partnerships to create positive social impact in the communities we serve.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Future Goals & Pledge Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-8">Our Sustainability Pledge</h2>
            <p className="text-lg text-blue-100 mb-8 text-balance">By 2030, Joshika Pharma commits to:</p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur p-6 rounded-lg">
                <div className="text-4xl font-bold text-blue-200 mb-3">50%</div>
                <p className="font-semibold mb-2">Carbon Footprint Reduction</p>
                <p className="text-blue-100 text-sm">
                  Minimize our environmental impact through energy efficiency and renewable resources
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur p-6 rounded-lg">
                <div className="text-4xl font-bold text-blue-200 mb-3">100%</div>
                <p className="font-semibold mb-2">Recyclable Packaging</p>
                <p className="text-blue-100 text-sm">
                  Transition all finished product packaging to fully recyclable materials
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur p-6 rounded-lg">
                <div className="text-4xl font-bold text-blue-200 mb-3">Zero</div>
                <p className="font-semibold mb-2">Waste Production</p>
                <p className="text-blue-100 text-sm">
                  Achieve zero-waste manufacturing across all production facilities
                </p>
              </div>
            </div>
            <p className="text-blue-100 mt-10 text-lg">
              We believe sustainability is not a destination but a continuous journey. Through transparency,
              accountability, and collaborative efforts, Joshika Pharma is dedicated to building a healthier, more
              sustainable future for all.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
