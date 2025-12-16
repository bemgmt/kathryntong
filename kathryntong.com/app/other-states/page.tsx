"use client"
import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Check } from "lucide-react"

const statesData = [
  {
    name: "Arizona",
    cities: ["Phoenix", "Tucson", "Mesa", "Chandler", "Glendale"],
  },
  {
    name: "Colorado",
    cities: ["Denver", "Colorado Springs", "Aurora", "Fort Collins", "Lakewood"],
  },
  {
    name: "Florida",
    cities: ["Miami", "Tampa", "Orlando", "Jacksonville", "Fort Lauderdale"],
  },
  {
    name: "Illinois",
    cities: ["Chicago", "Aurora", "Rockford", "Joliet", "Naperville"],
  },
  {
    name: "New York",
    cities: ["New York City", "Buffalo", "Rochester", "Yonkers", "Syracuse"],
  },
  {
    name: "Texas",
    cities: ["Houston", "Dallas", "Austin", "San Antonio", "Fort Worth"],
  },
  {
    name: "Washington",
    cities: ["Seattle", "Tacoma", "Vancouver", "Spokane", "Bellevue"],
  },
  {
    name: "Nevada",
    cities: ["Las Vegas", "Henderson", "Reno", "North Las Vegas", "Paradise"],
  },
  {
    name: "Oregon",
    cities: ["Portland", "Eugene", "Salem", "Gresham", "Hillsboro"],
  },
  {
    name: "Utah",
    cities: ["Salt Lake City", "Provo", "West Valley City", "Orem", "Sandy"],
  },
]

export default function OtherStatesPage() {
  const [selectedState, setSelectedState] = useState<string>(statesData[0].name)

  const currentState = statesData.find((state) => state.name === selectedState)
  const allCities = statesData.flatMap((state) => state.cities)

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Notary Services Across the United States
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We provide professional notary, apostille, and legalization services in multiple states across the nation.
            </p>
          </div>

          {/* State Selector */}
          <div className="mb-16">
            <div className="max-w-md mx-auto">
              <label className="block text-lg font-semibold text-foreground mb-4">Select a State:</label>
              <select
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground text-lg"
              >
                {statesData.map((state) => (
                  <option key={state.name} value={state.name}>
                    {state.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Cities in Selected State */}
          {currentState && (
            <div className="mb-20 bg-primary/5 border border-primary/20 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-foreground mb-6">Service Areas in {currentState.name}</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {currentState.cities.map((city) => (
                  <div key={city} className="flex items-center gap-3">
                    <Check className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-lg text-foreground">{city}</span>
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground mt-6 text-sm">
                Mobile notary services available throughout {currentState.name}. Contact us for services in additional
                cities and surrounding areas.
              </p>
            </div>
          )}

          {/* Pricing Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Multi-State Pricing</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="border border-border rounded-lg p-8 bg-card">
                <h3 className="text-xl font-bold text-foreground mb-4">Mobile Notary</h3>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-primary">$15</span>
                  <span className="text-muted-foreground ml-2">per signature</span>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">We come to your location</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Travel fee applies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Professional service</span>
                  </li>
                </ul>
              </div>

              <div className="border border-border rounded-lg p-8 bg-card">
                <h3 className="text-xl font-bold text-foreground mb-4">Apostille Service</h3>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-primary">$160</span>
                  <span className="text-muted-foreground ml-2">1st document</span>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">2-4 business days</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Valid in 190+ countries</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">$120 per additional doc</span>
                  </li>
                </ul>
              </div>

              <div className="border border-border rounded-lg p-8 bg-card">
                <h3 className="text-xl font-bold text-foreground mb-4">Legalization</h3>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-primary">Call</span>
                  <span className="text-muted-foreground ml-2">for quote</span>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Embassy coordination</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Translation services</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Full authentication</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-primary rounded-lg p-8 text-center text-primary-foreground">
            <h2 className="text-2xl font-bold mb-4">Need Notary Services in Your State?</h2>
            <p className="mb-6 max-w-2xl mx-auto">
              Contact us today to inquire about services in your state. We can help with notarization, apostille, and
              legalization services nationwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+16265903560"
                className="inline-block bg-primary-foreground text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary-foreground/90 transition"
              >
                Call (626) 590-3560
              </a>
              <a
                href="mailto:Kathryn@CAMobileApostille.com"
                className="inline-block border border-primary-foreground text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary-foreground/10 transition"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
