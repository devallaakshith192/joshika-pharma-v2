import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata = {
  title: "Our Products - Joshika Pharma Pvt Ltd",
  description:
    "Explore Joshika Pharma's comprehensive range of Modified Release Pellets including sustained release, enteric coated, and multi-particulate pharmaceutical solutions.",
}

export default function ProductsPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-sky-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Our Products</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized pharmaceutical solutions designed to meet the highest industry standards.
            </p>
          </div>
        </div>
      </section>

      {/* Main Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Modified Release Pellets</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We specialize in customized development and manufacturing of Modified Release Pellets of various Active
              Pharmaceutical Ingredients (APIs) including different combination blends.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-sky-100 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Sustained Release Pellets</h3>
              <p className="text-gray-600 mb-4">
                Advanced pellet formulations designed for controlled drug release over extended periods.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Customized release profiles</li>
                <li>• Various API combinations</li>
                <li>• Regulatory compliant</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-sky-100 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Enteric Coated Pellets</h3>
              <p className="text-gray-600 mb-4">
                Specialized coating technology for targeted drug delivery and enhanced bioavailability.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Gastric protection</li>
                <li>• Targeted release</li>
                <li>• Improved stability</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-sky-100 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Multi-Particulate Systems</h3>
              <p className="text-gray-600 mb-4">
                Complex formulations combining multiple APIs for enhanced therapeutic outcomes.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Multiple API combinations</li>
                <li>• Synchronized release</li>
                <li>• Enhanced efficacy</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pellets Section with comprehensive product tables */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Licensed Pellet Products</h2>
          </div>

          {/* Gastrointestinal Drug Pellets */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">Gastrointestinal Drug Pellets</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-lg shadow-sm">
                <thead>
                  <tr className="bg-blue-900 text-white">
                    <th className="border border-gray-300 px-4 py-3 text-left">S.No</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Name of the Product</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Available Strength (w/w)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-blue-50">
                    <td className="border border-gray-300 px-4 py-3">1</td>
                    <td className="border border-gray-300 px-4 py-3">Omeprazole EC Pellets</td>
                    <td className="border border-gray-300 px-4 py-3">7.5%, 8.5%, 10%, 15%, 22.5% & 17%</td>
                  </tr>
                  <tr className="hover:bg-blue-50">
                    <td className="border border-gray-300 px-4 py-3">2</td>
                    <td className="border border-gray-300 px-4 py-3">Lansoprazole EC Pellets</td>
                    <td className="border border-gray-300 px-4 py-3">8.5%, 10%, 11.20%</td>
                  </tr>
                  <tr className="hover:bg-blue-50">
                    <td className="border border-gray-300 px-4 py-3">3</td>
                    <td className="border border-gray-300 px-4 py-3">Rabeprazole EC Pellets</td>
                    <td className="border border-gray-300 px-4 py-3">8.50%, 11.20% & 20%</td>
                  </tr>
                  <tr className="hover:bg-blue-50">
                    <td className="border border-gray-300 px-4 py-3">4</td>
                    <td className="border border-gray-300 px-4 py-3">Pantoprazole EC Pellets</td>
                    <td className="border border-gray-300 px-4 py-3">15%, 23.5%</td>
                  </tr>
                  <tr className="hover:bg-blue-50">
                    <td className="border border-gray-300 px-4 py-3">5</td>
                    <td className="border border-gray-300 px-4 py-3">Esomeprazole EC Pellets</td>
                    <td className="border border-gray-300 px-4 py-3">8.5%, 17%, 22.50%, 23.5% & 26.66%</td>
                  </tr>
                  <tr className="hover:bg-blue-50">
                    <td className="border border-gray-300 px-4 py-3">6</td>
                    <td className="border border-gray-300 px-4 py-3">
                      Blended pellets of Omeprazole EC + Domperidone IR
                    </td>
                    <td className="border border-gray-300 px-4 py-3">20mg + 10mg</td>
                  </tr>
                  <tr className="hover:bg-blue-50">
                    <td className="border border-gray-300 px-4 py-3">7</td>
                    <td className="border border-gray-300 px-4 py-3">
                      Blended pellets of Omeprazole EC + Domperidone SR
                    </td>
                    <td className="border border-gray-300 px-4 py-3">20mg + 30mg</td>
                  </tr>
                  <tr className="hover:bg-blue-50">
                    <td className="border border-gray-300 px-4 py-3">8</td>
                    <td className="border border-gray-300 px-4 py-3">
                      Blended pellets of Rabeprazole EC + Domperidone SR
                    </td>
                    <td className="border border-gray-300 px-4 py-3">20mg + 30mg</td>
                  </tr>
                  <tr className="hover:bg-blue-50">
                    <td className="border border-gray-300 px-4 py-3">9</td>
                    <td className="border border-gray-300 px-4 py-3">
                      Blended pellets of Pantoprazole EC + Domperidone SR
                    </td>
                    <td className="border border-gray-300 px-4 py-3">40mg + 30mg</td>
                  </tr>
                  <tr className="hover:bg-blue-50">
                    <td className="border border-gray-300 px-4 py-3">10</td>
                    <td className="border border-gray-300 px-4 py-3">
                      Blended pellets of Rabeprazole EC + Itopride SR
                    </td>
                    <td className="border border-gray-300 px-4 py-3">20mg + 150mg</td>
                  </tr>
                  <tr className="hover:bg-blue-50">
                    <td className="border border-gray-300 px-4 py-3">11</td>
                    <td className="border border-gray-300 px-4 py-3">
                      Blended pellets of Pantoprazole EC + Itopride SR
                    </td>
                    <td className="border border-gray-300 px-4 py-3">40mg + 150mg</td>
                  </tr>
                  <tr className="hover:bg-blue-50">
                    <td className="border border-gray-300 px-4 py-3">12</td>
                    <td className="border border-gray-300 px-4 py-3">
                      Blended pellets of Rabeprazole EC + Levosulpiride SR
                    </td>
                    <td className="border border-gray-300 px-4 py-3">20mg + 75mg</td>
                  </tr>
                  <tr className="hover:bg-blue-50">
                    <td className="border border-gray-300 px-4 py-3">13</td>
                    <td className="border border-gray-300 px-4 py-3">
                      Blended pellets of Esomeprazole + Domperidone SR
                    </td>
                    <td className="border border-gray-300 px-4 py-3">40mg + 30mg</td>
                  </tr>
                  <tr className="hover:bg-blue-50">
                    <td className="border border-gray-300 px-4 py-3">14</td>
                    <td className="border border-gray-300 px-4 py-3">
                      Blended pellets of Pantoprazole EC + Domperidone IR
                    </td>
                    <td className="border border-gray-300 px-4 py-3">20mg + 10mg</td>
                  </tr>
                  <tr className="hover:bg-blue-50">
                    <td className="border border-gray-300 px-4 py-3">15</td>
                    <td className="border border-gray-300 px-4 py-3">
                      Blended pellets of Pantoprazole EC + Levosulpiride SR
                    </td>
                    <td className="border border-gray-300 px-4 py-3">40mg + 75mg</td>
                  </tr>
                  <tr className="hover:bg-blue-50">
                    <td className="border border-gray-300 px-4 py-3">16</td>
                    <td className="border border-gray-300 px-4 py-3">
                      Blended pellets of Esomeprazole EC + Levosulpiride SR
                    </td>
                    <td className="border border-gray-300 px-4 py-3">40mg + 75mg</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Respiratory Drug Pellets */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">Respiratory Drug Pellets</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-lg shadow-sm">
                <thead>
                  <tr className="bg-blue-900 text-white">
                    <th className="border border-gray-300 px-4 py-3 text-left">S.No</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Name of the Product</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Available Strength (w/w)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-blue-50">
                    <td className="border border-gray-300 px-4 py-3">1</td>
                    <td className="border border-gray-300 px-4 py-3">
                      Blended pellets of Levocetirizine IR + Ambroxol SR
                    </td>
                    <td className="border border-gray-300 px-4 py-3">5mg + 75mg</td>
                  </tr>
                  <tr className="hover:bg-blue-50">
                    <td className="border border-gray-300 px-4 py-3">2</td>
                    <td className="border border-gray-300 px-4 py-3">Chlorpheniramine maleate IR Pellets</td>
                    <td className="border border-gray-300 px-4 py-3">10%</td>
                  </tr>
                  <tr className="hover:bg-blue-50">
                    <td className="border border-gray-300 px-4 py-3">3</td>
                    <td className="border border-gray-300 px-4 py-3">Ambroxol SR Pellets</td>
                    <td className="border border-gray-300 px-4 py-3">25%</td>
                  </tr>
                  <tr className="hover:bg-blue-50">
                    <td className="border border-gray-300 px-4 py-3">4</td>
                    <td className="border border-gray-300 px-4 py-3">
                      Blended pellets of Chlorpheniramine maleate IR + Phenylephrine IR
                    </td>
                    <td className="border border-gray-300 px-4 py-3">4mg + 5mg</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Urological Drug Pellets */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">Urological Drug Pellets</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-lg shadow-sm">
                <thead>
                  <tr className="bg-blue-900 text-white">
                    <th className="border border-gray-300 px-4 py-3 text-left">S.No</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Name of the Product</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Available Strength (w/w)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-blue-50">
                    <td className="border border-gray-300 px-4 py-3">1</td>
                    <td className="border border-gray-300 px-4 py-3">Tamsulosin HCl SR Pellets</td>
                    <td className="border border-gray-300 px-4 py-3">0.12%, 0.16%, 0.20%</td>
                  </tr>
                  <tr className="hover:bg-blue-50">
                    <td className="border border-gray-300 px-4 py-3">2</td>
                    <td className="border border-gray-300 px-4 py-3">
                      Blended Pellets of Tamsulosin HCl + Dutasteride
                    </td>
                    <td className="border border-gray-300 px-4 py-3">0.4mg + 0.5mg</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Anti Obesity Drug Pellets */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">Anti-Obesity Drug Pellets</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-lg shadow-sm">
                <thead>
                  <tr className="bg-blue-900 text-white">
                    <th className="border border-gray-300 px-4 py-3 text-left">S.No</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Name of the Product</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Available Strength (w/w)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-blue-50">
                    <td className="border border-gray-300 px-4 py-3">1</td>
                    <td className="border border-gray-300 px-4 py-3">Orlistat IR Pellets</td>
                    <td className="border border-gray-300 px-4 py-3">40% & 50%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Anti Depressant Drug Pellets */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">Anti-Depressant Drug Pellets</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-lg shadow-sm">
                <thead>
                  <tr className="bg-blue-900 text-white">
                    <th className="border border-gray-300 px-4 py-3 text-left">S.No</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Name of the Product</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Available Strength (w/w)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-blue-50">
                    <td className="border border-gray-300 px-4 py-3">1</td>
                    <td className="border border-gray-300 px-4 py-3">Duloxetine HCl EC Pellets</td>
                    <td className="border border-gray-300 px-4 py-3">17% & 20%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Taste Masking Drug Pellets */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">Taste Masking Drug Pellets</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-lg shadow-sm">
                <thead>
                  <tr className="bg-blue-900 text-white">
                    <th className="border border-gray-300 px-4 py-3 text-left">S.No</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Name of the Product</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Available Strength (w/w)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-blue-50">
                    <td className="border border-gray-300 px-4 py-3">1</td>
                    <td className="border border-gray-300 px-4 py-3">Ciprofloxacin HCl Taste Mask Pellets</td>
                    <td className="border border-gray-300 px-4 py-3">17% & 20%</td>
                  </tr>
                  <tr className="hover:bg-blue-50">
                    <td className="border border-gray-300 px-4 py-3">2</td>
                    <td className="border border-gray-300 px-4 py-3">Azithromycin Taste Mask Pellets</td>
                    <td className="border border-gray-300 px-4 py-3">7.5%</td>
                  </tr>
                  <tr className="hover:bg-blue-50">
                    <td className="border border-gray-300 px-4 py-3">3</td>
                    <td className="border border-gray-300 px-4 py-3">Clarithromycin Taste Mask Pellets</td>
                    <td className="border border-gray-300 px-4 py-3">7.5%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Cardiovascular Drug Pellets */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">Cardiovascular Drug Pellets</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-lg shadow-sm">
                <thead>
                  <tr className="bg-blue-900 text-white">
                    <th className="border border-gray-300 px-4 py-3 text-left">S.No</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Name of the Product</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Available Strength (w/w)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-blue-50">
                    <td className="border border-gray-300 px-4 py-3">1</td>
                    <td className="border border-gray-300 px-4 py-3">Diltiazem HCl SR Pellets</td>
                    <td className="border border-gray-300 px-4 py-3">40% & 50%</td>
                  </tr>
                  <tr className="hover:bg-blue-50">
                    <td className="border border-gray-300 px-4 py-3">2</td>
                    <td className="border border-gray-300 px-4 py-3">Propranolol SR Pellets</td>
                    <td className="border border-gray-300 px-4 py-3">15%</td>
                  </tr>
                  <tr className="hover:bg-blue-50">
                    <td className="border border-gray-300 px-4 py-3">3</td>
                    <td className="border border-gray-300 px-4 py-3">Nifedipine SR Pellets</td>
                    <td className="border border-gray-300 px-4 py-3">11%</td>
                  </tr>
                  <tr className="hover:bg-blue-50">
                    <td className="border border-gray-300 px-4 py-3">4</td>
                    <td className="border border-gray-300 px-4 py-3">Aspirin EC Pellets</td>
                    <td className="border border-gray-300 px-4 py-3">50% & 65%</td>
                  </tr>
                  <tr className="hover:bg-blue-50">
                    <td className="border border-gray-300 px-4 py-3">5</td>
                    <td className="border border-gray-300 px-4 py-3">Clopidogrel IR Pellets</td>
                    <td className="border border-gray-300 px-4 py-3">50%</td>
                  </tr>
                  <tr className="hover:bg-blue-50">
                    <td className="border border-gray-300 px-4 py-3">6</td>
                    <td className="border border-gray-300 px-4 py-3">Atorvastatin IR Pellets</td>
                    <td className="border border-gray-300 px-4 py-3">7.5% & 15%</td>
                  </tr>
                  <tr className="hover:bg-blue-50">
                    <td className="border border-gray-300 px-4 py-3">7</td>
                    <td className="border border-gray-300 px-4 py-3">Rosuvastatin IR Pellets</td>
                    <td className="border border-gray-300 px-4 py-3">7.5% & 15%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Pain Management Drug Pellets */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">Pain Management Drug Pellets</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-lg shadow-sm">
                <thead>
                  <tr className="bg-blue-900 text-white">
                    <th className="border border-gray-300 px-4 py-3 text-left">S.No</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Name of the Product</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Available Strength (w/w)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-blue-50">
                    <td className="border border-gray-300 px-4 py-3">1</td>
                    <td className="border border-gray-300 px-4 py-3">Diclofenac Sodium SR Pellets</td>
                    <td className="border border-gray-300 px-4 py-3">33% & 40%</td>
                  </tr>
                  <tr className="hover:bg-blue-50">
                    <td className="border border-gray-300 px-4 py-3">2</td>
                    <td className="border border-gray-300 px-4 py-3">Tramadol HCl IR Pellets</td>
                    <td className="border border-gray-300 px-4 py-3">60%</td>
                  </tr>
                  <tr className="hover:bg-blue-50">
                    <td className="border border-gray-300 px-4 py-3">3</td>
                    <td className="border border-gray-300 px-4 py-3">Ketoprofen SR Pellets</td>
                    <td className="border border-gray-300 px-4 py-3">65%</td>
                  </tr>
                  <tr className="hover:bg-blue-50">
                    <td className="border border-gray-300 px-4 py-3">4</td>
                    <td className="border border-gray-300 px-4 py-3">Mebeverine SR Pellets</td>
                    <td className="border border-gray-300 px-4 py-3">60%, 80%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Anti-Microbial, Anti-Infective & Adjuvant Drugs Pellets */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">
              Anti-Microbial, Anti-Infective & Adjuvant Drugs Pellets
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-lg shadow-sm">
                <thead>
                  <tr className="bg-blue-900 text-white">
                    <th className="border border-gray-300 px-4 py-3 text-left">S.No</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Name of the Product</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Available Strength (w/w)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-blue-50">
                    <td className="border border-gray-300 px-4 py-3">1</td>
                    <td className="border border-gray-300 px-4 py-3">Doxycycline Hyclate IR Pellets</td>
                    <td className="border border-gray-300 px-4 py-3">25%</td>
                  </tr>
                  <tr className="hover:bg-blue-50">
                    <td className="border border-gray-300 px-4 py-3">2</td>
                    <td className="border border-gray-300 px-4 py-3">Itraconazole IR Pellets</td>
                    <td className="border border-gray-300 px-4 py-3">20%, 22%, 40%, 44%</td>
                  </tr>
                  <tr className="hover:bg-blue-50">
                    <td className="border border-gray-300 px-4 py-3">3</td>
                    <td className="border border-gray-300 px-4 py-3">
                      Blended Pellets of Doxycycline EC and Lactic acid bacillus
                    </td>
                    <td className="border border-gray-300 px-4 py-3">100mg and 5 billion spores</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Central Nervous System Drug Pellets */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">Central Nervous System Drug Pellets</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-lg shadow-sm">
                <thead>
                  <tr className="bg-blue-900 text-white">
                    <th className="border border-gray-300 px-4 py-3 text-left">S.No</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Name of the Product</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Available Strength (w/w)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-blue-50">
                    <td className="border border-gray-300 px-4 py-3">1</td>
                    <td className="border border-gray-300 px-4 py-3">Venlafaxine HCl SR Pellets</td>
                    <td className="border border-gray-300 px-4 py-3">33% & 39%</td>
                  </tr>
                  <tr className="hover:bg-blue-50">
                    <td className="border border-gray-300 px-4 py-3">2</td>
                    <td className="border border-gray-300 px-4 py-3">Fluoxetine HCl EC Pellets</td>
                    <td className="border border-gray-300 px-4 py-3">35%</td>
                  </tr>
                  <tr className="hover:bg-blue-50">
                    <td className="border border-gray-300 px-4 py-3">3</td>
                    <td className="border border-gray-300 px-4 py-3">Sildenafil Citrate IR Pellets</td>
                    <td className="border border-gray-300 px-4 py-3">10% & 20%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Anti Cholesterol Drug Pellets */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">Anti-Cholesterol Drug Pellets</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-lg shadow-sm">
                <thead>
                  <tr className="bg-blue-900 text-white">
                    <th className="border border-gray-300 px-4 py-3 text-left">S.No</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Name of the Product</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Available Strength (w/w)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-blue-50">
                    <td className="border border-gray-300 px-4 py-3">1</td>
                    <td className="border border-gray-300 px-4 py-3">Fenofibrate SR Pellets</td>
                    <td className="border border-gray-300 px-4 py-3">60%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Anti Inflammatory Drug Pellets */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">Anti-Inflammatory Drug Pellets</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-lg shadow-sm">
                <thead>
                  <tr className="bg-blue-900 text-white">
                    <th className="border border-gray-300 px-4 py-3 text-left">S.No</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Name of the Product</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Available Strength (w/w)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-blue-50">
                    <td className="border border-gray-300 px-4 py-3">1</td>
                    <td className="border border-gray-300 px-4 py-3">Indomethanin IR Pellets</td>
                    <td className="border border-gray-300 px-4 py-3">28%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Skeletal Muscle Relaxants Drug Pellets */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">Skeletal Muscle Relaxants Drug Pellets</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-lg shadow-sm">
                <thead>
                  <tr className="bg-blue-900 text-white">
                    <th className="border border-gray-300 px-4 py-3 text-left">S.No</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Name of the Product</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Available Strength (w/w)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-blue-50">
                    <td className="border border-gray-300 px-4 py-3">1</td>
                    <td className="border border-gray-300 px-4 py-3">Eperisone SR Pellets</td>
                    <td className="border border-gray-300 px-4 py-3">60%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Nutrition and Food Supplement Drug Pellets */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">Nutrition and Food Supplement Drug Pellets</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-lg shadow-sm">
                <thead>
                  <tr className="bg-blue-900 text-white">
                    <th className="border border-gray-300 px-4 py-3 text-left">S.No</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Name of the Product</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Available Strength (w/w)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-blue-50">
                    <td className="border border-gray-300 px-4 py-3">1</td>
                    <td className="border border-gray-300 px-4 py-3">Dried Ferrous Sulphate Pellets</td>
                    <td className="border border-gray-300 px-4 py-3">75%</td>
                  </tr>
                  <tr className="hover:bg-blue-50">
                    <td className="border border-gray-300 px-4 py-3">2</td>
                    <td className="border border-gray-300 px-4 py-3">Folic Acid Pellets</td>
                    <td className="border border-gray-300 px-4 py-3">0.15%</td>
                  </tr>
                  <tr className="hover:bg-blue-50">
                    <td className="border border-gray-300 px-4 py-3">3</td>
                    <td className="border border-gray-300 px-4 py-3">
                      Blended pellets of Dried ferrous sulphate and Folic acid
                    </td>
                    <td className="border border-gray-300 px-4 py-3">150mg + 0.5mg</td>
                  </tr>
                  <tr className="hover:bg-blue-50">
                    <td className="border border-gray-300 px-4 py-3">4</td>
                    <td className="border border-gray-300 px-4 py-3">
                      Blended pellets of Carbonyl Iron, Zinc Sulphate and Folic acid
                    </td>
                    <td className="border border-gray-300 px-4 py-3">50mg + 61.8mg + 0.5mg</td>
                  </tr>
                  <tr className="hover:bg-blue-50">
                    <td className="border border-gray-300 px-4 py-3">5</td>
                    <td className="border border-gray-300 px-4 py-3">Vitamin C Pellets</td>
                    <td className="border border-gray-300 px-4 py-3">70%</td>
                  </tr>
                  <tr className="hover:bg-blue-50">
                    <td className="border border-gray-300 px-4 py-3">6</td>
                    <td className="border border-gray-300 px-4 py-3">Vitamin B12 Pellets</td>
                    <td className="border border-gray-300 px-4 py-3">0.20%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Non-Pareil Seeds / Sugar Spheres */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">Non-Pareil Seeds / Sugar Spheres</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-lg shadow-sm">
                <thead>
                  <tr className="bg-blue-900 text-white">
                    <th className="border border-gray-300 px-4 py-3 text-left">S.No</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Name of the Product</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Available Sizes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-blue-50">
                    <td className="border border-gray-300 px-4 py-3">1</td>
                    <td className="border border-gray-300 px-4 py-3">Non Pareil Seeds (Dummy Pellets)</td>
                    <td className="border border-gray-300 px-4 py-3">12#16, 12#18, 16#20</td>
                  </tr>
                  <tr className="hover:bg-blue-50">
                    <td className="border border-gray-300 px-4 py-3">2</td>
                    <td className="border border-gray-300 px-4 py-3">Sugar Spheres</td>
                    <td className="border border-gray-300 px-4 py-3">12#16, 24#30, 20#24</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Capsules Section with comprehensive product tables */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Licensed Capsule Products</h2>
          </div>

          {/* Gastrointestinal Drug Capsules */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">Gastrointestinal Drug Capsules</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-lg shadow-sm">
                <thead>
                  <tr className="bg-blue-900 text-white">
                    <th className="border border-gray-300 px-4 py-3 text-left">S.No</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Name of the Product</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Available Strength (mg)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-blue-50">
                    <td className="border border-gray-300 px-4 py-3">1</td>
                    <td className="border border-gray-300 px-4 py-3">Omeprazole EC Capsules</td>
                    <td className="border border-gray-300 px-4 py-3">20mg</td>
                  </tr>
                  <tr className="hover:bg-blue-50">
                    <td className="border border-gray-300 px-4 py-3">2</td>
                    <td className="border border-gray-300 px-4 py-3">Lansoprazole EC Capsules</td>
                    <td className="border border-gray-300 px-4 py-3">30mg</td>
                  </tr>
                  <tr className="hover:bg-blue-50">
                    <td className="border border-gray-300 px-4 py-3">3</td>
                    <td className="border border-gray-300 px-4 py-3">Rabeprazole EC + Domperidone SR Capsules</td>
                    <td className="border border-gray-300 px-4 py-3">20mg + 30mg</td>
                  </tr>
                  <tr className="hover:bg-blue-50">
                    <td className="border border-gray-300 px-4 py-3">4</td>
                    <td className="border border-gray-300 px-4 py-3">Omeprazole EC + Domperidone IR Capsules</td>
                    <td className="border border-gray-300 px-4 py-3">20mg + 10mg</td>
                  </tr>
                  <tr className="hover:bg-blue-50">
                    <td className="border border-gray-300 px-4 py-3">5</td>
                    <td className="border border-gray-300 px-4 py-3">Omeprazole EC + Domperidone SR Capsules</td>
                    <td className="border border-gray-300 px-4 py-3">20mg + 30mg</td>
                  </tr>
                  <tr className="hover:bg-blue-50">
                    <td className="border border-gray-300 px-4 py-3">6</td>
                    <td className="border border-gray-300 px-4 py-3">Pantoprazole EC + Domperidone IR Capsules</td>
                    <td className="border border-gray-300 px-4 py-3">20mg + 10mg</td>
                  </tr>
                  <tr className="hover:bg-blue-50">
                    <td className="border border-gray-300 px-4 py-3">7</td>
                    <td className="border border-gray-300 px-4 py-3">Pantoprazole EC + Domperidone SR Capsules</td>
                    <td className="border border-gray-300 px-4 py-3">40mg + 30mg</td>
                  </tr>
                  <tr className="hover:bg-blue-50">
                    <td className="border border-gray-300 px-4 py-3">8</td>
                    <td className="border border-gray-300 px-4 py-3">Rabeprazole EC + Itopride SR Capsules</td>
                    <td className="border border-gray-300 px-4 py-3">20mg + 150mg</td>
                  </tr>
                  <tr className="hover:bg-blue-50">
                    <td className="border border-gray-300 px-4 py-3">9</td>
                    <td className="border border-gray-300 px-4 py-3">Pantoprazole EC + Itopride SR Capsules</td>
                    <td className="border border-gray-300 px-4 py-3">40mg + 150mg</td>
                  </tr>
                  <tr className="hover:bg-blue-50">
                    <td className="border border-gray-300 px-4 py-3">10</td>
                    <td className="border border-gray-300 px-4 py-3">Rabeprazole EC + Levosulpiride SR Capsules</td>
                    <td className="border border-gray-300 px-4 py-3">20mg + 75mg</td>
                  </tr>
                  <tr className="hover:bg-blue-50">
                    <td className="border border-gray-300 px-4 py-3">11</td>
                    <td className="border border-gray-300 px-4 py-3">Rabeprazole EC + Aceclofenac SR</td>
                    <td className="border border-gray-300 px-4 py-3">20mg + 200mg</td>
                  </tr>
                  <tr className="hover:bg-blue-50">
                    <td className="border border-gray-300 px-4 py-3">12</td>
                    <td className="border border-gray-300 px-4 py-3">Levocetirizine IR with Ambroxol SR Capsules</td>
                    <td className="border border-gray-300 px-4 py-3">5mg + 75mg</td>
                  </tr>
                  <tr className="hover:bg-blue-50">
                    <td className="border border-gray-300 px-4 py-3">13</td>
                    <td className="border border-gray-300 px-4 py-3">Esomeprazole EC + Itopride SR Capsules</td>
                    <td className="border border-gray-300 px-4 py-3">40mg + 150mg</td>
                  </tr>
                  <tr className="hover:bg-blue-50">
                    <td className="border border-gray-300 px-4 py-3">14</td>
                    <td className="border border-gray-300 px-4 py-3">Esomeprazole EC + Domperidone SR Capsules</td>
                    <td className="border border-gray-300 px-4 py-3">20mg + 30mg</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Respiratory Drug Capsules */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">Respiratory Drug Capsules</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-lg shadow-sm">
                <thead>
                  <tr className="bg-blue-900 text-white">
                    <th className="border border-gray-300 px-4 py-3 text-left">S.No</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Name of the Product</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Available Strength (mg)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-blue-50">
                    <td className="border border-gray-300 px-4 py-3">1</td>
                    <td className="border border-gray-300 px-4 py-3">
                      Chlorpheniramine maleate IR + Phenylephrine Capsules
                    </td>
                    <td className="border border-gray-300 px-4 py-3">4mg + 5mg</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Nutrition and Food Supplement Capsules */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">Nutrition and Food Supplement Capsules</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-lg shadow-sm">
                <thead>
                  <tr className="bg-blue-900 text-white">
                    <th className="border border-gray-300 px-4 py-3 text-left">S.No</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Name of the Product</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Available Strength (w/w)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-blue-50">
                    <td className="border border-gray-300 px-4 py-3">1</td>
                    <td className="border border-gray-300 px-4 py-3">Dried ferrous sulphate and Folic acid Capsules</td>
                    <td className="border border-gray-300 px-4 py-3">150mg + 0.5mg</td>
                  </tr>
                  <tr className="hover:bg-blue-50">
                    <td className="border border-gray-300 px-4 py-3">2</td>
                    <td className="border border-gray-300 px-4 py-3">
                      Carbonyl Iron, Zinc Sulphate and Folic acid Capsules
                    </td>
                    <td className="border border-gray-300 px-4 py-3">50mg + 61.8mg + 0.5mg</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Product Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Product Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our products are designed with advanced pharmaceutical technology to ensure optimal performance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Key Advantages</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-900 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900">Customized Formulations</h4>
                    <p className="text-gray-600">Tailored to specific therapeutic requirements and patient needs.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-900 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900">Quality Assurance</h4>
                    <p className="text-gray-600">Rigorous testing and quality control at every stage of production.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-900 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900">Regulatory Compliance</h4>
                    <p className="text-gray-600">
                      All products meet international pharmaceutical standards and regulations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Technical Specifications</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Particle Size Range:</span>
                  <span className="font-medium">200-1400 μm</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Release Profile:</span>
                  <span className="font-medium">Customizable</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Coating Options:</span>
                  <span className="font-medium">Multiple</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">API Loading:</span>
                  <span className="font-medium">Up to 80%</span>
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
