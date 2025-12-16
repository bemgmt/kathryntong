"use client"
import Header from "@/components/header"
import type React from "react"

import Footer from "@/components/footer"
import { useState } from "react"
import { useTranslations } from "@/lib/use-translations"
import { Mail, Phone, Clock } from "lucide-react"

export default function ContactClientPage() {
  const t = useTranslations()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "notary",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      // Simulate form submission (replace with actual API call)
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setSubmitStatus("success")
      setFormData({
        name: "",
        email: "",
        phone: "",
        serviceType: "notary",
        message: "",
      })
      setTimeout(() => setSubmitStatus("idle"), 5000)
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Contact Us</h1>
            <p className="text-xl text-foreground/90 max-w-2xl mx-auto">
              Get in touch with Kathryn's Mobile Notary. We're here to help with all your notarization needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Contact Info Cards */}
            <div className="bg-foreground/10 rounded-lg p-8 text-center">
              <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">Phone</h3>
              <a href="tel:+16265903560" className="text-primary font-semibold hover:underline">
                626-590-3560
              </a>
              <p className="text-sm text-foreground/70 mt-2">Available 7 days a week</p>
            </div>

            <div className="bg-foreground/10 rounded-lg p-8 text-center">
              <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">Email</h3>
              <a href="mailto:Kathryn@CAMobileApostille.com" className="text-primary font-semibold hover:underline">
                Ask for Kathryn
              </a>
              <p className="text-sm text-foreground/70 mt-2">Fast response guaranteed</p>
            </div>

            <div className="bg-foreground/10 rounded-lg p-8 text-center">
              <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">Hours</h3>
              <p className="text-foreground font-semibold">8:30 AM - 8:30 PM</p>
              <p className="text-sm text-foreground/70 mt-2">7 days a week</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <div className="bg-foreground/10 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-foreground/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-foreground/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-foreground/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                    placeholder="(626) 590-3560"
                  />
                </div>

                <div>
                  <label htmlFor="serviceType" className="block text-sm font-semibold text-foreground mb-2">
                    Service Type
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-foreground/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                  >
                    <option value="notary">Notary Services</option>
                    <option value="apostille">Apostille Certification</option>
                    <option value="legalization">Legalization Services</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-foreground/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                    placeholder="Tell us about your notarization needs..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-white font-semibold py-3 rounded-lg hover:opacity-90 transition disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>

                {submitStatus === "success" && (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg">
                    Thank you! We'll get back to you soon.
                  </div>
                )}
                {submitStatus === "error" && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
                    An error occurred. Please try again or call us directly.
                  </div>
                )}
              </form>
            </div>

            {/* Additional Info */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Why Choose Us?</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 font-bold text-sm">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Mobile Service</h3>
                    <p className="text-foreground/80">We come to you at your home, office, or preferred location</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 font-bold text-sm">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Bilingual Services</h3>
                    <p className="text-foreground/80">English and Mandarin Chinese speaking services available</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 font-bold text-sm">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Fast Turnaround</h3>
                    <p className="text-foreground/80">
                      Quick processing for notarizations, apostilles, and legalization
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 font-bold text-sm">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">10+ Years Experience</h3>
                    <p className="text-foreground/80">Trusted by hundreds of satisfied clients across California</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 font-bold text-sm">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Flexible Hours</h3>
                    <p className="text-foreground/80">Available 7 days a week, 8:30 AM to 8:30 PM for your convenience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
