import Header from "@/components/header"
import HeroSlider from "@/components/hero-slider"
import AboutSection from "@/components/about-section"
import WhyJoshikaSection from "@/components/why-joshika-section"
import StatsSection from "@/components/stats-section"
import CTABannerSection from "@/components/cta-banner-section"
import Footer from "@/components/footer"

export const metadata = {
  title: "Home - Joshika Pharma Pvt Ltd",
  description:
    "Welcome to Joshika Pharma - Leading pharmaceutical manufacturer specializing in Modified Release Pellets with state-of-the-art facilities and quality-assured products.",
}

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSlider />
      <AboutSection />
      <WhyJoshikaSection />
      <StatsSection />
      <CTABannerSection />
      <Footer />
    </main>
  )
}
