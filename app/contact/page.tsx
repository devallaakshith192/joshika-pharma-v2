import type { Metadata } from "next"
import ContactPageClient from "./ContactPageClient"

export const metadata: Metadata = {
  title: "Contact Us - Joshika Pharma Pvt Ltd",
  description:
    "Get in touch with Joshika Pharma. Contact us for pharmaceutical inquiries, partnerships, and technical support. We're here to help!",
}

export default function ContactPage() {
  return <ContactPageClient />
}
