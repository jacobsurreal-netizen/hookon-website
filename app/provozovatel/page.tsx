"use client"

import React from "react"
import { Navigation } from "@/components/navigation"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"

export default function ProvozovatelPage() {
  const { language } = useLanguage()
  const t = translations[language].legal

  return (
    <>
      <Navigation variant="imprint" />

      <main className="max-w-3xl mx-auto px-4 pt-28 pb-16">
        <h1 className="text-3xl font-semibold mb-8">{t.title}</h1>

        <section className="space-y-2 mb-8">
          <h2 className="text-xl font-semibold">{t.heading}</h2>

          <p>
            <strong>{t.companyNameLabel}:</strong> {t.companyNameValue}
          </p>
          <p>
            <strong>{t.addressLabel}:</strong> {t.addressValue}
          </p>
          <p>
            <strong>{t.icoLabel}:</strong> {t.icoValue}
          </p>
          <p>
            <strong>{t.registerLabel}:</strong> {t.registerValue}
          </p>
          <p>
            <strong>{t.directorLabel}:</strong> {t.directorValue}
          </p>
          <p>
            <strong>{t.emailLabel}:</strong>{" "}
            <a href="mailto:info@hookon.ai">info@hookon.ai</a>
          </p>
          <p>
            <strong>{t.phoneLabel}:</strong>{" "}
            <a href="tel:+420731873842">+420 731 873 842</a>
          </p>
        </section>
      </main>
    </>
  )
}
