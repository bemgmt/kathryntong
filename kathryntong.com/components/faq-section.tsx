"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Card } from "@/components/ui/card"
import { useTranslations } from "@/lib/use-translations"

interface FAQItem {
  question: string
  answer: string
}

export default function FAQSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
  const t = useTranslations()

  const faqs: FAQItem[] = [
    {
      question: t.faqQ1,
      answer: t.faqA1,
    },
    {
      question: t.faqQ2,
      answer: t.faqA2,
    },
    {
      question: t.faqQ3,
      answer: t.faqA3,
    },
    {
      question: t.faqQ4,
      answer: t.faqA4,
    },
    {
      question: t.faqQ5,
      answer: t.faqA5,
    },
    {
      question: t.faqQ6,
      answer: t.faqA6,
    },
    {
      question: t.faqQ7,
      answer: t.faqA7,
    },
    {
      question: t.faqQ8,
      answer: t.faqA8,
    },
  ]

  return (
    <section className="py-16 bg-accent rounded-lg">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">{t.faqTitle}</h2>
          <p className="text-white">{t.faqSubtitle}</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="overflow-hidden">
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="w-full p-6 flex items-center justify-between hover:bg-accent transition"
              >
                <h3 className="text-left font-semibold text-foreground">{faq.question}</h3>
                <ChevronDown
                  size={20}
                  className={`text-primary flex-shrink-0 transition-transform ${
                    expandedIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {expandedIndex === index && (
                <div className="px-6 pb-6 border-t border-border">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </Card>
          ))}
        </div>

        <div className="mt-12 p-6 bg-background rounded-lg text-center">
          <p className="text-muted-foreground mb-4">{t.faqStillHaveQuestions}</p>
          <a href="/#contact" className="inline-block text-primary font-semibold hover:underline">
            {t.faqContactUs}
          </a>
        </div>
      </div>
    </section>
  )
}
