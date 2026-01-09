import Header from "@/components/header"
import Footer from "@/components/footer"
import ManufacturingFacilityClient from "./client"

export const metadata = {
  title: "Manufacturing Facility Gallery - Joshika Pharma Pvt Ltd",
  description:
    "View photos of Joshika Pharma's advanced manufacturing equipment including dryers, mixers, coating systems, and fluid bed processors.",
}

export default function ManufacturingFacilityPage() {
  return (
    <>
      <Header />
      <ManufacturingFacilityClient />
      <Footer />
    </>
  )
}
