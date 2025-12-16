"use client"

import { Phone, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import EmailRequestForm from "@/components/email-request-form"
import { useTranslations } from "@/lib/use-translations"

export default function ContactSection() {
  const t = useTranslations()

  const benefits = [
    t.experience,
    t.comeToYou,
    t.available7Days,
    t.flexibleHours,
    t.fastService,
    t.apostilleExpertise,
    t.bilingualServices,
    t.outOfTownTravel,
  ]

  return (
    <section id="contact" className="py-20 bg-white text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground">{t.readyToStart}</h2>
            <p className="text-lg text-foreground/90 mb-8 leading-relaxed">{t.contactUs}</p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-foreground/20 rounded-lg">
                  <Phone className="w-6 h-6 text-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 text-foreground">{t.callOrTextLabel}</h3>
                  <p className="text-foreground/90">
                    <a href="tel:626.590.3560" className="font-semibold text-foreground hover:underline">
                      626.590.3560
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-foreground/20 rounded-lg">
                  <Clock className="w-6 h-6 text-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 text-foreground">{t.hoursLabel}</h3>
                  <p className="text-foreground/90">{t.hoursValue}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-foreground/20 rounded-lg">
                  <MapPin className="w-6 h-6 text-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 text-foreground">{t.serviceAreaLabel}</h3>
                  <p className="text-foreground/90">{t.serviceAreaValue}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-foreground text-primary hover:bg-foreground/90">
                <Phone className="w-5 h-5 mr-2" />
                {t.callNow}
              </Button>
              <EmailRequestForm />
            </div>
          </div>

          <div className="bg-foreground/15 rounded-2xl p-8 lg:p-12 border border-foreground/30">
            <h3 className="text-2xl font-bold mb-6 text-foreground">{t.whyChooseUs}</h3>
            <ul className="space-y-4">
              {benefits.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-foreground text-primary flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
