"use client"
import { useState } from "react"
import { CheckCircle, Circle } from "lucide-react"
import { Card } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useTranslations } from "@/lib/use-translations"

interface ChecklistItem {
  id: string
  text: string
  category: string
}

const checklist: ChecklistItem[] = [
  {
    id: "1",
    text: "Valid government-issued photo ID (Driver's License, Passport, etc.)",
    category: "Required Documents",
  },
  { id: "2", text: "Original documents to be notarized (not copies)", category: "Required Documents" },
  { id: "3", text: "Know the purpose of the notarization", category: "Required Documents" },
  { id: "4", text: "Bring all required signers (notary cannot sign for you)", category: "Required Documents" },

  { id: "5", text: "Verify the document is complete and error-free", category: "Before Appointment" },
  { id: "6", text: "Fill in all blank spaces (notary cannot advise on content)", category: "Before Appointment" },
  { id: "7", text: "Prepare any notarization statements in advance", category: "Before Appointment" },
  { id: "8", text: "Ensure you understand what you're signing", category: "Before Appointment" },

  { id: "9", text: "Be prepared to pay the notary fee in cash or check", category: "Payment" },
  { id: "10", text: "Ask about accepted payment methods if unsure", category: "Payment" },

  { id: "11", text: "Notary cannot provide legal advice", category: "Important to Know" },
  { id: "12", text: "Notary cannot modify documents or fill in blanks", category: "Important to Know" },
  { id: "13", text: "Multiple copies may require separate notarization fees", category: "Important to Know" },
  { id: "14", text: "Some documents (birth/death certificates) cannot be notarized", category: "Important to Know" },
]

const categories = Array.from(new Set(checklist.map((item) => item.category)))

export default function DocumentChecklistClient() {
  const t = useTranslations()
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set())

  const toggleCheck = (id: string) => {
    const newSet = new Set(checkedItems)
    if (newSet.has(id)) {
      newSet.delete(id)
    } else {
      newSet.add(id)
    }
    setCheckedItems(newSet)
  }

  const progress = (checkedItems.size / checklist.length) * 100

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              {t.checklist?.title || "Document Notarization Checklist"}
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              {t.checklist?.subtitle ||
                "Use this checklist to prepare for your notarization appointment. Making sure you have everything ready will ensure a smooth and efficient process."}
            </p>

            {/* Progress Bar */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-foreground">
                  {t.checklist?.progress || "Preparation Progress"}
                </span>
                <span className="text-sm font-bold text-primary">{Math.round(progress)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-primary h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>

          {/* Checklist by Category */}
          <div className="space-y-8">
            {categories.map((category) => (
              <div key={category}>
                <h2 className="text-2xl font-bold text-foreground mb-4">{category}</h2>
                <div className="space-y-3">
                  {checklist
                    .filter((item) => item.category === category)
                    .map((item) => (
                      <Card
                        key={item.id}
                        className="p-4 cursor-pointer hover:shadow-md transition"
                        onClick={() => toggleCheck(item.id)}
                      >
                        <div className="flex items-start gap-3">
                          <button
                            onClick={(e) => {
                              e.stopPropagation()
                              toggleCheck(item.id)
                            }}
                            className="mt-1 flex-shrink-0"
                          >
                            {checkedItems.has(item.id) ? (
                              <CheckCircle size={24} className="text-primary" />
                            ) : (
                              <Circle size={24} className="text-border" />
                            )}
                          </button>
                          <span
                            className={`flex-1 leading-relaxed ${
                              checkedItems.has(item.id) ? "line-through text-muted-foreground" : "text-foreground"
                            }`}
                          >
                            {item.text}
                          </span>
                        </div>
                      </Card>
                    ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 bg-accent rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">{t.checklist?.ready || "Ready to Schedule?"}</h2>
            <p className="text-muted-foreground mb-6">
              {t.checklist?.readyDesc ||
                "Once you've checked everything off, you're ready to schedule your appointment!"}
            </p>
            <a
              href="/appointment"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition"
            >
              {t.appointment?.title || "Schedule Appointment"}
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
