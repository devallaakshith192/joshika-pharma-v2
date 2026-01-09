import Header from "@/components/header"
import Footer from "@/components/footer"
import GalleryClient from "./galleryClient"

export const metadata = {
  title: "Gallery - Joshika Pharma Pvt Ltd",
  description:
    "Explore Joshika Pharma's state-of-the-art facilities including manufacturing plants, quality control labs, research departments, and storage infrastructure.",
}

export default function GalleryPage() {
  return (
    <>
      <Header />
      <GalleryClient />
      <Footer />
    </>
  )
}
