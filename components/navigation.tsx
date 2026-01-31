"use client"

import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"
import { LanguageToggle } from "./language-toggle"

export function Navigation() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md
                    bg-gradient-to-br from-ember/30 via-orange/15 to-yellow-50/30
                    border-b border-white/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-5 lg:px-6">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
          {/* Logo + desktop odkazy */}
          <div className="flex items-center gap-4 sm:gap-6 md:gap-10">
            {/* Logo */}
            <div className="flex items-center flex-shrink-0">
              <img
                src="/images/hookon-logo.png"
                alt="hookon logo"
                className="h-7 sm:h-8 md:h-9"
              />
            </div>

            {/* Nav Links – skryté na mobilu, viditelné od md */}
            <div className="hidden md:flex items-center gap-8">
              <a
                href="#about"
                className="text-xs sm:text-sm text-gray-700 hover:text-orange-500 transition font-medium"
              >
                {t.nav.about}
              </a>
              <a
                href="#services"
                className="text-xs sm:text-sm text-gray-700 hover:text-orange-500 transition font-medium"
              >
                {t.nav.services}
              </a>
              <a
                href="#work"
                className="text-xs sm:text-sm text-gray-700 hover:text-orange-500 transition font-medium"
              >
                {t.nav.work}
              </a>
            </div>
          </div>

          {/* Pravá strana: přepínač jazyka + CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            <LanguageToggle />
            <button className="hidden sm:inline-flex px-4 sm:px-5 py-1.5 sm:py-2
                               bg-gradient-to-r from-[#0ccdff] to-[#2660ff]
                               text-white rounded-full
                               hover:shadow-lg hover:shadow-[#0ccdff]/70
                               transition-all font-medium text-xs sm:text-sm">
              {t.nav.contact}
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
