import type { Metadata } from "next"
import ContactClientPage from "./contact-client-page"

export const metadata: Metadata = {
  title: "Contact Us | Kathryn's Mobile Notary",
  description:
    "Get in touch with Kathryn's Mobile Notary for notary services, apostille, and legalization. Fast response times and flexible scheduling.",
  keywords: "contact notary, get in touch, notary services near me, schedule appointment",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function ContactPage() {
  return <ContactClientPage />
}
