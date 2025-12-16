import type { Metadata } from "next"
import TestimonialsClient from "./TestimonialsClient"

export const metadata: Metadata = {
  title: "Testimonials - Kathryn's Mobile Notary",
  description: "See what our satisfied clients say about our professional notary and apostille services.",
  keywords: "notary testimonials, reviews, mobile notary reviews, apostille services reviews, customer feedback",
}

export default function TestimonialsPage() {
  return <TestimonialsClient />
}
