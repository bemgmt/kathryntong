"use client"

import { FileCheck, Copy, CheckCircle2 } from "lucide-react"
import { useTranslations } from "@/lib/use-translations"

export default function ProcessSection() {
  const t = useTranslations()

  const steps = [
    {
      number: 1,
      title: t.processStep1,
      description: t.processStep1Desc,
      icon: FileCheck,
    },
    {
      number: 2,
      title: t.processStep2,
      description: t.processStep2Desc,
      icon: Copy,
    },
    {
      number: 3,
      title: t.processStep3,
      description: t.processStep3Desc,
      icon: CheckCircle2,
    },
  ]

  return (
    <section id="process" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">{t.processTitle}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.processSubtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={step.number} className="relative">
                {/* Connector line for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-[60%] right-[-50%] h-1 bg-border"></div>
                )}

                <div className="flex flex-col items-start gap-4">
                  <div className="relative z-10 flex items-center gap-4">
                    <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl">
                      {step.number}
                    </div>
                    <Icon className="w-6 h-6 text-primary hidden sm:block" />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
