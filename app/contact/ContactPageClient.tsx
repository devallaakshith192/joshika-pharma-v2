"use client"

import type { FormEvent } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ContactPageClient() {
  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.currentTarget
    const name = (form.elements.namedItem("name") as HTMLInputElement).value
    const email = (form.elements.namedItem("email") as HTMLInputElement).value
    const company = (form.elements.namedItem("company") as HTMLInputElement).value
    const subject = (form.elements.namedItem("subject") as HTMLSelectElement).value
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value

    const body = `Name: ${name}\nEmail: ${email}\nCompany: ${company}\n\nMessage:\n${message}`

    const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=info@joshikapharma.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    window.open(gmailURL, "_blank")
  }

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-sky-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Contact Us</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get in touch with our team to discuss your pharmaceutical needs and discover how we can help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-8">Get In Touch</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Ready to discuss your pharmaceutical needs? Our team is here to provide you with detailed information
                about our products and services. Contact us today to learn more about how Joshika Pharma can support
                your requirements.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-white">📧</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-1">Email</h3>
                    <a href="mailto:info@joshikapharma.com" className="text-gray-600 hover:text-blue-900">
                      info@joshikapharma.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-white">📱</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-1">Phone</h3>
                    <a href="tel:+918977433658" className="text-gray-600 hover:text-blue-900">
                      +91 8977433658
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-white">📍</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-1">Address</h3>
                    <p className="text-gray-600">
                      Joshika Pharma Pvt. Ltd.
                      <br />
                      Hyderabad, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-white">🕒</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-1">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday: 9:00 AM - 1:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-to-br from-blue-50 to-sky-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Send us a Message</h3>
              <form id="contactForm" onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-blue-900 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-blue-900 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-blue-900 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-blue-900 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="product-inquiry">Product Inquiry</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="technical-support">Technical Support</option>
                    <option value="general">General Information</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-blue-900 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-900 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-800 transition-colors duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Ready to Get Started?</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8">
            Contact us today to discuss your pharmaceutical needs and discover how our expertise in Modified Release
            Pellets can benefit your projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=info@joshikapharma.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors"
            >
              Email Us Now
            </a>
            <a
              href="https://maps.app.goo.gl/ipwxd7CZv9deCivA7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-blue-900 text-blue-900 font-semibold rounded-lg hover:bg-blue-900 hover:text-white transition-colors"
            >
              Get Location
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
