"use client"

import { Star } from "lucide-react"
import { useTranslations } from "@/lib/use-translations"
import { Card } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"

interface Testimonial {
  name: string
  role: string
  content: string
  rating: number
  initials: string
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    role: "Real Estate Agent",
    content:
      "Kathryn was extremely professional and efficient. She notarized our loan documents within 24 hours and even came to our client's home. Highly recommend!",
    rating: 5,
    initials: "SJ",
  },
  {
    name: "Michael Chen",
    role: "Business Owner",
    content:
      "As someone who needed multiple apostilles for international contracts, Kathryn's expertise was invaluable. She made the entire process seamless and stress-free.",
    rating: 5,
    initials: "MC",
  },
  {
    name: "Jennifer Rodriguez",
    role: "Estate Planning Attorney",
    content:
      "I've referred many clients to Kathryn's Mobile Notary. She consistently delivers professional, thorough notarization services. My clients always express their satisfaction.",
    rating: 5,
    initials: "JR",
  },
  {
    name: "David Thompson",
    role: "Corporate Manager",
    content:
      "We needed notarization for 50+ documents for our company expansion. Kathryn handled the bulk order efficiently and provided competitive pricing. Outstanding service!",
    rating: 5,
    initials: "DT",
  },
  {
    name: "Maria Lopez",
    role: "Healthcare Professional",
    content:
      "Kathryn helped me notarize my healthcare directives. She was knowledgeable, patient, and very accommodating with my schedule. Thank you!",
    rating: 5,
    initials: "ML",
  },
  {
    name: "Robert Martinez",
    role: "Immigration Consultant",
    content:
      "For apostille services, Kathryn is the best in the area. Fast turnaround, accurate processing, and excellent customer service. She's my go-to notary.",
    rating: 5,
    initials: "RM",
  },
]

export default function TestimonialsClient() {
  const t = useTranslations()

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="min-h-screen bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              {t.testimonials?.title || "What Our Clients Say"}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.testimonials?.subtitle ||
                "Don't just take our word for it. See why hundreds of clients trust Kathryn's Mobile Notary for their notarization and apostille needs."}
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} size={16} className="fill-primary text-primary" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-foreground mb-6 leading-relaxed">"{testimonial.content}"</p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-sm">{testimonial.initials}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Trust Section */}
          <div className="mt-20 bg-accent rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {t.testimonials?.cta || "Join Hundreds of Satisfied Clients"}
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              {t.testimonials?.ctaDesc ||
                "We're committed to providing professional, reliable notary and apostille services you can trust."}
            </p>
            <a
              href="/#contact"
              className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition"
            >
              {t.common?.getStarted || "Get Started Today"}
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
