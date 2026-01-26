"use client"

import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"

export function CTASection() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange/60 via-white/15 to-green/40 -z-10" />

      {/* Animated blobs */}
      <div className="absolute top-30 right-0 w-96 h-96 bg-gradient-to-bl from-orange-500/40 to-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob -z-10" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-bl from-orange-600/60 to-yellow-200/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob -z-10" />

      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-orange-500/80 mb-10 text-balance">{t.cta.title}</h2>
        <p className="text-xl text-white/80 mb-10 font-bold max-w-2xl mx-auto">{t.cta.subtitle}</p>
        <button className="px-10 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full hover:shadow-xl hover:shadow-orange-500/30 transition-all font-semibold text-lg hover:scale-105 transform">
          {t.cta.button}
        </button>
      </div>
    </section>
  )
}
