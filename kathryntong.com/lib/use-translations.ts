"use client"

import { useLanguage } from "./language-context"
import { translations } from "./translations"

export function useTranslations() {
  const { language } = useLanguage()
  return translations[language]
}
