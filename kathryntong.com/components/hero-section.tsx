"use client"

import { Button } from "@/components/ui/button"
import { Phone, ArrowRight } from "lucide-react"
import { useTranslations } from "@/lib/use-translations"

export default function HeroSection() {
  const t = useTranslations()

  return (
    <section className="relative overflow-hidden bg-white text-foreground">
      <div className="absolute inset-0 opacity-3">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 grid lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-6">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-4 text-foreground">{t.heroTitle}</h2>
            <p className="text-lg text-foreground/70 leading-relaxed">{t.heroSubtitle}</p>
          </div>

          <div className="space-y-3">
            <p className="text-foreground font-semibold">✓ {t.heroBullet1}</p>
            <p className="text-foreground font-semibold">✓ {t.heroBullet2}</p>
            <p className="text-foreground font-semibold">✓ {t.heroBullet3}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
              onClick={() => (window.location.href = "tel:626.590.3560")}
            >
              <Phone className="w-5 h-5 mr-2" />
              {t.scheduleNow}
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5 bg-white">
              {t.learnMore}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>

        <div className="hidden lg:flex items-center justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/5 rounded-2xl blur-2xl"></div>
            <div className="relative bg-primary/2 backdrop-blur-sm rounded-2xl p-4 border border-border w-80">
              <img src="/images/kathryn.webp" alt="Professional notary services" className="w-full h-auto rounded-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
