"use client"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import ProcessSection from "@/components/process-section"
import ServicesGrid from "@/components/services-grid"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import Chatbot from "@/components/chatbot"
import FAQSection from "@/components/faq-section"
import ServiceComparison from "@/components/service-comparison"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ProcessSection />
      <ServicesGrid />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <FAQSection />
      </div>
      <ServiceComparison />
      <ContactSection />
      <Footer />
      <Chatbot />
    </div>
  )
}
