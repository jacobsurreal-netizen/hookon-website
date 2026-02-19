import React from "react"
import { Navigation } from "@/components/navigation"

export const metadata = {
  title: "Impressum | Hookon, s. r. o.",
  description:
    "Gesetzliche Anbieterkennzeichnung der Hookon, s. r. o. mit Sitz in Stod, einschließlich IČO, Handelsregistereintrag und Kontaktdaten des Geschäftsführers.",
}

export default function ProvozovatelDePage() {
  return (
    <>
      <Navigation variant="imprint" />

      <main className="max-w-3xl mx-auto px-4 pt-28 pb-16">
        <h1 className="text-3xl font-semibold mb-8">Impressum</h1>

        <section className="space-y-2 mb-8">
          <h2 className="text-xl font-semibold">Angaben gemäß § 5 TMG</h2>
          <p>
            <strong>Unternehmensname:</strong> Hookon, s. r. o.
          </p>
          <p>
            <strong>Sitz der Gesellschaft:</strong> Baarova 552, 333 01 Stod,
            Tschechische Republik
          </p>
          <p>
            <strong>Identifikationsnummer (IČO):</strong> 24506087
          </p>
          <p>
            <strong>Registereintrag:</strong> Eingetragen im Handelsregister
            des Krajský soud v Plzni (Regionalgericht in Pilsen), Abteilung C,
            Einlage 48080 (eingetragen am 13. Februar 2026).
          </p>
          <p>
            <strong>Vertreten durch (Geschäftsführer):</strong> Ondřej Pech
          </p>
          <p>
            <strong>E-Mail:</strong>{" "}
            <a href="mailto:info@hookon.ai">info@hookon.ai</a>
          </p>
          <p>
            <strong>Telefon:</strong>{" "}
            <a href="tel:+420731873842">+420 731 873 842</a>
          </p>
        </section>
      </main>
    </>
  )
}
