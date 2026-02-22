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
        {/* Horní část: brand + kontakt vedle sebe, centrované na větších displejích */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-6">
          {/* Brand blok */}
          <div className="flex flex-col items-start md:items-start gap-1">
            <img
              src="/images/hookon-logo.png"
              alt="hookon"
              className="h-8 mb-2"
            />

            <p className="text-gray-900 text-sm">{t.footer.tagline}</p>
            <h4 className="font-semibold text-gray-900">
              Hookon, s.r.o.
            </h4>
            <p className="text-xs text-gray-900">
              <a
                href="/provozovatel"
                className="hover:text-[#0ccdff] transition"
              >
                IČO: 24506087
              </a>
            </p>
          </div>

          {/* Kontakt + socials */}
          <div className="flex flex-col items-start md:items-end gap-3">
            <h4 className="font-semibold text-[#0ccdff]">
              {t.footer.contact}
            </h4>
            <p className="text-sm text-black/70">
              <a
                href="mailto:info@hookon.ai"
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
