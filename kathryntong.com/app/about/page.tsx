import type { Metadata } from "next"
import AboutClientPage from "./about-client-page"

export const metadata: Metadata = {
  title: "About Kathryn - Mobile Notary Professional",
  description:
    "Learn about Kathryn's 10+ years of notary experience, credentials, and commitment to professional service excellence.",
  keywords: "about notary, notary experience, professional credentials, notary public california",
}

export default function AboutPage() {
  return <AboutClientPage />
}
