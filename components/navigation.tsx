"use client"

import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"
import { LanguageToggle } from "./language-toggle"

export function Navigation() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-gradient-to-br from-white/80 via-white/70 to-green-50/50 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-8">
            {/* Logo */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <img src="/images/4da105cc-84a7-4475-9f42-0b138a0b04ff.jpg" alt="hookon logo" className="h-8" />
            </div>

            {/* Nav Links */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-gray-700 hover:text-orange-500 transition text-sm font-medium">
                {t.nav.about}
              </a>
              <a href="#services" className="text-gray-700 hover:text-orange-500 transition text-sm font-medium">
                {t.nav.services}
              </a>
              <a href="#work" className="text-gray-700 hover:text-orange-500 transition text-sm font-medium">
                {t.nav.work}
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <LanguageToggle />
            <button className="hidden sm:block px-6 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full hover:shadow-lg hover:shadow-orange-500/25 transition-all font-medium text-sm">
              {t.nav.contact}
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
