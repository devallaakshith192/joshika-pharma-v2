import Header from "@/components/header"
import Footer from "@/components/footer"
import QualityControlLabClient from "./client"

export const metadata = {
  title: "Quality Control Lab Gallery - Joshika Pharma Pvt Ltd",
  description:
    "Explore Joshika Pharma's advanced quality control laboratory featuring LC chromatography systems, HPLC equipment, and analytical instruments for comprehensive pharmaceutical testing.",
}

export default function QualityControlLabPage() {
  return (
    <>
      <Header />
      <QualityControlLabClient />
      <Footer />
    </>
  )
}
