"use client"

import { Card } from "@/components/ui/card"
import { CheckCircle, X } from "lucide-react"

interface Service {
  name: string
  description: string
  features: {
    feature: string
    notarization: boolean
    apostille: boolean
    legalization: boolean
  }[]
  startingPrice: string
}

const services: Service[] = [
  {
    name: "Notarization",
    description: "General notary services for various documents",
    startingPrice: "$15 per signature",
    features: [
      { feature: "Identity verification", notarization: true, apostille: true, legalization: true },
      { feature: "Signature witnessing", notarization: true, apostille: true, legalization: true },
      { feature: "Document certification", notarization: true, apostille: true, legalization: true },
      { feature: "International validity", notarization: false, apostille: true, legalization: true },
      { feature: "Embassy authentication", notarization: false, apostille: false, legalization: true },
      { feature: "Same-day service available", notarization: true, apostille: true, legalization: false },
    ],
  },
]

export default function ServiceComparison() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Service Comparison</h2>
          <p className="text-lg text-muted-foreground">
            Compare our notarization, apostille, and legalization services to find the right option for your needs.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-border">
                <th className="text-left py-4 px-4 font-bold text-foreground">Feature</th>
                <th className="text-center py-4 px-4">
                  <div className="font-bold text-foreground">Notarization</div>
                  <div className="text-sm text-muted-foreground">$15+</div>
                </th>
                <th className="text-center py-4 px-4">
                  <div className="font-bold text-foreground">Apostille</div>
                  <div className="text-sm text-muted-foreground">$25+</div>
                </th>
                <th className="text-center py-4 px-4">
                  <div className="font-bold text-foreground">Legalization</div>
                  <div className="text-sm text-muted-foreground">Call for quote</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                { feature: "Identity Verification", notarization: true, apostille: true, legalization: true },
                { feature: "Signature Witnessing", notarization: true, apostille: true, legalization: true },
                { feature: "Document Certification", notarization: true, apostille: true, legalization: true },
                {
                  feature: "International Recognition (180+ countries)",
                  notarization: false,
                  apostille: true,
                  legalization: true,
                },
                { feature: "Embassy Approval", notarization: false, apostille: false, legalization: true },
                { feature: "Official Seal & Stamp", notarization: true, apostille: true, legalization: true },
                { feature: "Same-Day Service", notarization: true, apostille: true, legalization: false },
                { feature: "Mobile Service Available", notarization: true, apostille: true, legalization: true },
                {
                  feature: "Processing Time (Standard)",
                  notarization: "Same day",
                  apostille: "24-48 hours",
                  legalization: "3-5 business days",
                },
              ].map((item, index) => (
                <tr key={index} className="border-b border-border hover:bg-accent transition">
                  <td className="py-4 px-4 text-foreground font-medium">{item.feature}</td>
                  <td className="py-4 px-4 text-center">
                    {typeof item.notarization === "boolean" ? (
                      item.notarization ? (
                        <CheckCircle className="w-5 h-5 text-primary mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-muted-foreground mx-auto" />
                      )
                    ) : (
                      <span className="text-sm text-foreground">{item.notarization}</span>
                    )}
                  </td>
                  <td className="py-4 px-4 text-center">
                    {typeof item.apostille === "boolean" ? (
                      item.apostille ? (
                        <CheckCircle className="w-5 h-5 text-primary mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-muted-foreground mx-auto" />
                      )
                    ) : (
                      <span className="text-sm text-foreground">{item.apostille}</span>
                    )}
                  </td>
                  <td className="py-4 px-4 text-center">
                    {typeof item.legalization === "boolean" ? (
                      item.legalization ? (
                        <CheckCircle className="w-5 h-5 text-primary mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-muted-foreground mx-auto" />
                      )
                    ) : (
                      <span className="text-sm text-foreground">{item.legalization}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Additional Info */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Unsure Which Service You Need?",
              desc: "Contact us and our team will help you determine the right service for your documents.",
            },
            {
              title: "Bulk Discounts Available",
              desc: "If you need multiple documents processed, we offer special pricing for bulk orders.",
            },
            {
              title: "Quick Turnaround",
              desc: "We offer same-day and expedited services to meet your urgent notarization needs.",
            },
          ].map((item, index) => (
            <Card key={index} className="p-6">
              <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
