"use client"

import { FileText, Home, Briefcase, Heart, Scale, Clock } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useTranslations } from "@/lib/use-translations"

export default function ServicesGrid() {
  const t = useTranslations()

  const services = [
    {
      title: t.mobileNotaryTitle,
      description: t.mobileNotaryDesc,
      icon: FileText,
    },
    {
      title: t.realEstateTitle,
      description: t.realEstateDesc,
      icon: Home,
    },
    {
      title: t.commercialTitle,
      description: t.commercialDesc,
      icon: Briefcase,
    },
    {
      title: t.powerOfAttorneyTitle,
      description: t.powerOfAttorneyDesc,
      icon: Heart,
    },
    {
      title: t.apostilleServicesTitle,
      description: t.apostilleServicesDesc,
      icon: Scale,
    },
    {
      title: t.flexibleAppointmentsTitle,
      description: t.flexibleAppointmentsDesc,
      icon: Clock,
    },
  ]

  return (
    <section id="services" className="py-20 bg-muted/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">{t.servicesTitle}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.servicesSubtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="border border-border hover:shadow-lg hover:border-primary/50 transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
