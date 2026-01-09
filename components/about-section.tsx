import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-sky-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="shadow-xl border-0 bg-white">
          <CardContent className="p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="order-2 lg:order-1">
                <div className="relative">
                  <img
                    src="/pharmaceutical-scientist-in-lab-coat-working-with-.jpg"
                    alt="Pharmaceutical scientist working in laboratory"
                    className="w-full h-80 object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">About Joshika</h2>

                <blockquote className="text-lg italic text-blue-700 mb-6 border-l-4 border-blue-500 pl-4">
                  "One place for credibility, commitment, quality and delivery on time."
                </blockquote>

                <div className="prose prose-lg text-gray-700 mb-8">
                  <p className="mb-4">
                    Joshika Pharma Pvt. Ltd. has started its journey in 2016 with an objective to manufacture and market
                    innovative pharmaceutical products to the customer's satisfaction.
                  </p>
                  <p className="mb-4">
                    The company's forte is the customized development and manufacturing of Modified Release Pellets of
                    various Active Pharmaceutical Ingredients (APIs) including different combination blends in Ready -
                    To - Fill form.
                  </p>
                </div>

                <Link href="/about">
                  <Button size="lg" className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3">
                    Continue Reading →
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
