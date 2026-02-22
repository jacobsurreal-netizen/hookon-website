"use client"

import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"
import { SocialLinks } from "@/components/ui/social-links"

export function Footer() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <footer className="relative border-t border-white/60 backdrop-blur-xl bg-gradient-to-b from-gray-600/70 to-blue-300/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Tři sloupce: brand, firma, kontakt */}
        <div className="grid gap-8 md:grid-cols-3 mb-6">
          {/* 1) Brand blok */}
          <div className="flex flex-col gap-2">
            <img
              src="/images/hookon-logo.png"
              alt="hookon"
              className="h-8 w-40 mb-1"
            />

            <p className="text-gray-900 text-sm">
              {t.footer.tagline}
            </p>

          </div>

          {/* 2) Firemní údaje – z translations.footer */}
          <div className="text-sm text-gray-900 whitespace-pre-line">
            <h4 className="font-semibold mb-2">
              {t.footer.companyName}
            </h4>
            <p className="text-xs leading-relaxed">
              {t.footer.companyAddress}
            </p>
          </div>

          {/* 3) Kontakt + socky */}
          <div className="flex flex-col items-start md:items-end gap-3 text-sm">
            <h4 className="font-semibold text-[#0ccdff]">
              {t.footer.contact}
            </h4>

            <p className="text-black/70">
              <a
                href={`mailto:${t.footer.email}`}
                className="hover:text-[#2660ff] transition"
              >
                {t.footer.email}
              </a>
            </p>

            <SocialLinks />
          </div>
        </div>

        {/* Spodní linka s copyrightem */}
        <div className="border-t border-white/70 pt-6 text-center text-sm text-gray-650">
          <p>{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
