"use client"

import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"

export function Footer() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <footer className="relative border-t border-ember/25 backdrop-blur-xl bg-gradient-to-b from-white/50 to-white/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-4 gap-12 mb-5">
          {/* Brand */}
          <div>
            <img src="/images/hookon-logo.png" alt="hookon" className="h-25 mb-0" />
            <p className="text-gray-900 text-sm">{t.footer.tagline}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#about" className="hover:text-orange-500 transition">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-orange-500 transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-orange-500 transition">
                  Portfolio
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-orange-500 transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition">
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-orange-500 mb-4">{t.footer.contact}</h4>
            <p className="text-sm text-white-100">
              <a href="mailto:hello@hookon.io" className="hover:text-white/20 transition">
                {t.footer.email}
              </a>
            </p>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-sm text-gray-650">
          <p>{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
