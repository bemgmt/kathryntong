"use client"
import { useTranslations } from "@/lib/use-translations"
import { Card } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function AboutClientPage() {
  const t = useTranslations()

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="min-h-screen bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Hero Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-6">{t.aboutTitle}</h1>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                {t.aboutBio1}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t.aboutBio2}
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <Image src="/images/kathryn.webp" alt="Kathryn's professional portrait" fill className="object-cover" />
            </div>
          </div>

          {/* Mission & Values */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <Card className="p-8 text-center">
              <h3 className="text-xl font-bold text-foreground mb-4">{t.about?.missionTitle || "Our Mission"}</h3>
              <p className="text-muted-foreground">
                {t.about?.missionDesc ||
                  "To provide reliable, professional notary and apostille services that meet the highest standards of accuracy and integrity."}
              </p>
            </Card>
            <Card className="p-8 text-center">
              <h3 className="text-xl font-bold text-foreground mb-4">{t.about?.valuesTitle || "Our Values"}</h3>
              <p className="text-muted-foreground">
                {t.about?.valuesDesc ||
                  "We believe in transparency, punctuality, professionalism, and going above and beyond to exceed client expectations."}
              </p>
            </Card>
            <Card className="p-8 text-center">
              <h3 className="text-xl font-bold text-foreground mb-4">{t.about?.promiseTitle || "Our Promise"}</h3>
              <p className="text-muted-foreground">
                {t.about?.promiseDesc ||
                  "Every client receives the same level of attention to detail and commitment to excellence, no matter the size or complexity of their needs."}
              </p>
            </Card>
          </div>

          {/* Why Choose Kathryn */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
              {t.about?.whyChoose || "Why Choose Kathryn's Mobile Notary?"}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: t.about?.benefit1Title || "10+ Years of Experience",
                  desc: t.about?.benefit1Desc || "Trusted by hundreds of satisfied clients across California",
                },
                {
                  title: t.about?.benefit2Title || "Mobile Service",
                  desc: t.about?.benefit2Desc || "We come to you - no need to travel to an office",
                },
                {
                  title: t.about?.benefit3Title || "Available 7 Days a Week",
                  desc: t.about?.benefit3Desc || "Flexible hours from 8:30 AM to 8:30 PM",
                },
                {
                  title: t.about?.benefit4Title || "Bilingual Services",
                  desc: t.about?.benefit4Desc || "English and Mandarin Chinese speaking services available",
                },
                {
                  title: t.about?.benefit5Title || "Apostille Expertise",
                  desc: t.about?.benefit5Desc || "Specialized knowledge in international document certification",
                },
                {
                  title: t.about?.benefit6Title || "Fast & Professional",
                  desc: t.about?.benefit6Desc || "Quick turnaround times with meticulous attention to detail",
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-accent rounded-lg p-12 mb-20">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
              {t.about?.credentials || "Professional Credentials"}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: t.about?.cred1Title || "Licensed Notary Public",
                  desc: t.about?.cred1Desc || "State of California certified",
                },
                {
                  title: t.about?.cred2Title || "Apostille Certified",
                  desc: t.about?.cred2Desc || "Authorized to issue apostille certificates",
                },
                {
                  title: t.about?.cred3Title || "Background Verified",
                  desc: t.about?.cred3Desc || "Passed thorough background check",
                },
              ].map((cred, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={32} className="text-primary-foreground" />
                  </div>
                  <h3 className="font-bold text-foreground">{cred.title}</h3>
                  <p className="text-sm text-white">{cred.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              {t.about?.readyTitle || "Ready to Work Together?"}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t.about?.readyDesc || "Contact Kathryn's Mobile Notary today to schedule your notarization appointment."}
            </p>
            <a
              href="/#contact"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition"
            >
              {t.common?.contact || "Get In Touch"}
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
