import type { Metadata } from "next"
import ApostilleClientPage from "./apostille-client-page"

export const metadata: Metadata = {
  title: "Apostille & Legalization Services | Kathryn's Mobile Notary",
  description:
    "Professional apostille and legalization services for international document authentication. Fast turnaround times, expert guidance, and certified services.",
  keywords:
    "apostille services, legalization services, international documents, authentication, notary, California apostille",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function ApostillePage() {
  return <ApostilleClientPage />
}
