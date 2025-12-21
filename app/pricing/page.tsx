"use client"
import React from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Check } from "lucide-react"
import { useTranslations } from "@/lib/use-translations"

export default function PricingPage() {
  const t = useTranslations()

  const pricingPlans = [
    {
      name: t.notaryAtOffice,
      description: t.atOurMontereyPark,
      price: "$15",
      period: t.perSignature2,
      features: ["$15 per Signature", t.fastAndAffordable, t.appointmentsRequired],
    },
    {
      name: "Mobile Notary",
      description: t.weComeTo,
      price: "$15",
      period: t.perSignature2 + " + " + t.travelFeeApplies.toLowerCase(),
      features: ["$15 per Signature", t.travelFeeApplies, t.upTo30Miles, t.homeOfficeHospital, t.appointmentsRequired],
    },
    {
      name: t.estateEscrow,
      description: t.complexDocuments,
      price: "Varies",
      period: "depending on package",
      features: [
        t.priceVaries,
        t.includesPrintScan,
        t.multipleSigningLocations,
        t.lawOfficesVenue,
        t.appointmentsRequired,
      ],
    },
  ]

  const apostillePricing = [
    {
      name: t.standardApostille,
      description: t.twoToFourDays,
      services: [
        { label: t.firstApostille, price: t.firstApostillePrice },
        { label: t.secondApostille, price: t.secondApostillePrice },
      ],
      note: t.notaryTravelFeeApplies,
    },
    {
      name: t.sameDayApostille,
      description: t.withinTwentyFourHours,
      services: [{ label: t.sameDayService, price: t.sameDayServicePrice }],
      note: t.notaryTravelFeeApplies,
    },
    {
      name: t.federalApostille2,
      description: t.fourToEightWeeks,
      services: [{ label: t.federalDocuments2, price: t.federalDocumentsPrice }],
      note: t.notaryTravelFeeApplies,
    },
    {
      name: t.embassyLegalization,
      description: t.customQuotes,
      services: [
        { label: t.embassyLegalizationLabel, price: t.embassyLegalizationPrice },
        { label: t.bulkApostille, price: t.bulkApostillePrice },
      ],
      note: t.priceDeliveryDepends,
    },
  ]

  // Opens Square Payment Links in a centered popup (matches the original script behavior)
  function showCheckoutWindow(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault()

    const el = e.currentTarget as HTMLAnchorElement
    const url = el.getAttribute("data-url") || el.href || ""
    const title = "Square Payment Links"

    const topWindow = window.top ?? window

    const dualScreenLeft =
      (topWindow as any).screenLeft !== undefined ? (topWindow as any).screenLeft : (topWindow as any).screenX
    const dualScreenTop =
      (topWindow as any).screenTop !== undefined ? (topWindow as any).screenTop : (topWindow as any).screenY

    const width = topWindow.innerWidth ?? document.documentElement.clientWidth ?? screen.width
    const height = topWindow.innerHeight ?? document.documentElement.clientHeight ?? screen.height

    const h = height * 0.75
    const w = 500

    const systemZoom = width / (topWindow as any).screen.availWidth
    const left = (width - w) / 2 / systemZoom + dualScreenLeft
    const top = (height - h) / 2 / systemZoom + dualScreenTop
    const newWindow = window.open(
      url,
      title,
      `scrollbars=yes, width=${w / systemZoom}, height=${h / systemZoom}, top=${top}, left=${left}`
    )

    if (newWindow && newWindow.focus) newWindow.focus()
  }

  return (
    <div className="min-h-screen bg-white text-foreground">
      <Header />
      <main className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{t.pricingTitle}</h1>
            <p className="text-xl text-foreground/90 max-w-2xl mx-auto">{t.affordableTransparent}</p>
          </div>

          {/* Notary Services Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-foreground mb-8">Notary Services</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan) => (
                <div
                  key={plan.name}
                  className="rounded-lg border border-foreground/30 bg-foreground/10 p-8 flex flex-col hover:bg-foreground/20 transition"
                >
                  <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-sm text-foreground/80 mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-sm text-foreground/80 ml-2">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 flex-1">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-foreground flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Apostille & Legalization Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">{t.apostilleAndLegalization}</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {apostillePricing.map((category) => (
                <div key={category.name} className="rounded-lg border border-foreground/30 bg-foreground/10 p-8">
                  <h3 className="text-xl font-bold text-foreground mb-2">{category.name}</h3>
                  <p className="text-sm text-foreground/80 mb-6">{category.description}</p>
                  <div className="space-y-4 mb-6">
                    {category.services.map((service) => (
                      <div
                        key={service.label}
                        className="flex justify-between items-center pb-4 border-b border-foreground/30 last:border-b-0"
                      >
                        <span className="text-foreground">{service.label}</span>
                        <span className="text-lg font-bold text-foreground">{service.price}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-foreground/70 italic">{category.note}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-foreground/20 border border-foreground/30 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">{t.readyToGetStarted}</h2>
            <p className="text-foreground/90 mb-6 max-w-2xl mx-auto">{t.contactToSchedule}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+16265903560"
                className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
              >
                {t.callNumber}
              </a>
              <a
                href="mailto:Kathryn@CAMobileApostille.com"
                className="inline-block border border-foreground text-foreground px-6 py-3 rounded-lg font-medium hover:bg-foreground/20 transition"
              >
                {t.emailUs}
              </a>

              {/* Square purchase button — includes data-url and onClick handler that opens a centered popup */}
              <a
                id="embedded-checkout-modal-checkout-button"
                data-url="https://square.link/u/FO8x6wPE?src=embd"
                href="https://square.link/u/FO8x6wPE?src=embed"
                onClick={showCheckoutWindow}
                className="inline-block bg-[#006aff] text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
              >
                Pay now
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
