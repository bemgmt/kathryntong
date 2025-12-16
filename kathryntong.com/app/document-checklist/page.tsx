import type { Metadata } from "next"
import DocumentChecklistClient from "./DocumentChecklistClient"

export const metadata: Metadata = {
  title: "Document Notarization Checklist - Kathryn's Mobile Notary",
  description:
    "Prepare for your notarization appointment with our helpful checklist. Ensure you have all required documents and information.",
  keywords: "notarization checklist, document preparation, what to bring notary appointment",
}

export default function DocumentChecklistPage() {
  return <DocumentChecklistClient />
}
