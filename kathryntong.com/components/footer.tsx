"use client"

import { useTranslations } from "@/lib/use-translations"

export default function Footer() {
  const t = useTranslations()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground border-t border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">
              {/* Use translation for company name */}
              {t.footerCompany}
            </h3>
            <p className="text-primary-foreground/80 text-sm">{t.footerAbout}</p>
          </div>

          <div>
            <h4 className="font-bold mb-4">
              {/* Use translation for services section */}
              {t.footerServices}
            </h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  {t.footerMobileNotary}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  {t.footerApostille}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  {t.footerRealEstate}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  {t.footerCommercialServices}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">{/* Use translation for contact section */}Contact</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a href="tel:626.590.3560" className="hover:text-primary-foreground transition">
                  626.590.3560
                </a>
              </li>
              <li>Available 7 days a week</li>
              <li>8:30 AM - 8:30 PM</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">
              {/* Use translation for hours section */}
              {t.footerHours}
            </h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                {/* Use translation for days */}
                {t.footerMonday}
              </li>
              <li>
                {/* Use translation for time */}
                {t.footerTime}
              </li>
              <li>
                {/* Use translation for same day */}
                {t.footerSameDay}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 text-center text-sm text-primary-foreground/70">
          <p>
            &copy; {currentYear} {/* Use translation for copyright */}
            {t.footerCopyright}
          </p>
        </div>
      </div>
    </footer>
  )
}
