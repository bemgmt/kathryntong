import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LanguageProvider } from "@/lib/language-context"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Kathryn's Mobile Notary - Apostille & Legalization Services",
  description:
    "Professional mobile notary, apostille, and legalization services in California and across the United States. Available 7 days a week. Serving: Phoenix, Tucson, Denver, Miami, Tampa, Chicago, New York City, Houston, Dallas, Seattle, Las Vegas, Portland, Salt Lake City and more.",
  keywords: [
    "mobile notary",
    "apostille services",
    "legalization services",
    "California notary",
    "Phoenix notary",
    "Tucson notary",
    "Denver notary",
    "Miami notary",
    "Tampa notary",
    "Chicago notary",
    "New York notary",
    "Houston notary",
    "Dallas notary",
    "Seattle notary",
    "Las Vegas notary",
    "Portland notary",
    "Salt Lake City notary",
  ].join(", "),
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
