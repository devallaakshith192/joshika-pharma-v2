"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Beaker, Shield, Globe, Users } from "lucide-react"

const features = [
  {
    icon: Beaker,
    title: "Advanced Manufacturing",
    description: "State-of-the-art pharmaceutical manufacturing facilities with cutting-edge technology and equipment.",
  },
  {
    icon: Shield,
    title: "Stringent Quality Control",
    description:
      "Rigorous testing and quality assurance at every stage ensures compliance with international standards.",
  },
  {
    icon: Globe,
    title: "Global Supply Capability",
    description: "Reliable distribution network reaching customers worldwide with timely and efficient delivery.",
  },
  {
    icon: Users,
    title: "Experienced Professionals",
    description: "Expert team of scientists, pharmacists, and technicians with decades of industry experience.",
  },
]

export default function WhyJoshikaSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Why Joshika Pharma?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We are committed to delivering excellence across every aspect of our pharmaceutical operations
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card
                key={index}
                className="border-0 shadow-md hover:shadow-xl transition-shadow duration-300 bg-white hover:bg-blue-50"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <Icon className="w-6 h-6 text-blue-900" />
                    </div>
                    <h3 className="text-lg font-semibold text-blue-900">{feature.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
