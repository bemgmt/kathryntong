"use client"

import { Menu, X, Globe } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { useTranslations } from "@/lib/use-translations"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { language, setLanguage } = useLanguage()
  const t = useTranslations()

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border">
      <div className="bg-primary text-primary-foreground py-2 px-4 text-center text-sm font-medium">
        {t.phone} <span className="font-bold">626-590-3560</span> | {t.email}{" "}
        <span className="font-bold">Kathryn@KathrynTong.com</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">KN</span>
            </div>
            <h1 className="text-xl font-bold text-foreground">Kathryn's Mobile Notary</h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/about" className="text-foreground hover:text-primary transition">
              {t.aboutMe}
            </Link>
            <Link href="/services" className="text-foreground hover:text-primary transition">
              {t.mobileNotary}
            </Link>
            <Link href="/apostille" className="text-foreground hover:text-primary transition">
              {t.apostilleLegalization}
            </Link>
            <Link href="/pricing" className="text-foreground hover:text-primary transition">
              {t.pricing}
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition">
              {t.contact}
            </Link>
            <button
              onClick={() => setLanguage(language === "en" ? "zh" : "en")}
              className="flex items-center gap-2 px-3 py-2 rounded-lg border border-border hover:bg-accent transition"
              aria-label="Toggle language"
            >
              <Globe size={18} />
              <span className="text-sm font-medium">{language === "en" ? "中文" : "EN"}</span>
            </button>
          </nav>

          {/* Mobile Menu & Language Toggle */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={() => setLanguage(language === "en" ? "zh" : "en")}
              className="flex items-center gap-1 px-2 py-2 rounded-lg border border-border hover:bg-accent transition"
              aria-label="Toggle language"
            >
              <Globe size={18} />
              <span className="text-xs font-medium">{language === "en" ? "中文" : "EN"}</span>
            </button>
            <button className="p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-3">
            <Link
              href="/about"
              className="block text-foreground hover:text-primary transition"
              onClick={() => setIsOpen(false)}
            >
              {t.aboutMe}
            </Link>
            <Link
              href="/services"
              className="block text-foreground hover:text-primary transition"
              onClick={() => setIsOpen(false)}
            >
              {t.mobileNotary}
            </Link>
            <Link
              href="/apostille"
              className="block text-foreground hover:text-primary transition"
              onClick={() => setIsOpen(false)}
            >
              {t.apostilleLegalization}
            </Link>
            <Link
              href="/pricing"
              className="block text-foreground hover:text-primary transition"
              onClick={() => setIsOpen(false)}
            >
              {t.pricing}
            </Link>
            <Link
              href="/contact"
              className="block text-foreground hover:text-primary transition"
              onClick={() => setIsOpen(false)}
            >
              {t.contact}
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
