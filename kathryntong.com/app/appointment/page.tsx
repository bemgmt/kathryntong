import type { Metadata } from "next"
import AppointmentClientPage from "./AppointmentClientPage"

export const metadata: Metadata = {
  title: "Book Appointment - Kathryn's Mobile Notary",
  description:
    "Schedule your notary appointment online. Available 7 days a week from 8:30 AM to 8:30 PM. Flexible mobile service.",
  keywords: "book notary appointment, schedule notarization, mobile notary appointment, same-day appointment",
}

export default function AppointmentPage() {
  return <AppointmentClientPage />
}
