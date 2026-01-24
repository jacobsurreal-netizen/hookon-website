"use client"

import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"

export function CaseStudiesSection() {
  const { language } = useLanguage()
  const t = translations[language]

  const placeholderCards = [{ id: 1 }, { id: 2 }, { id: 3 }]

  return (
    <section id="work" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-green-50/30 to-white -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-balance">{t.caseStudies.title}</h2>
          <p className="text-lg text-gray-800 max-w-2xl mx-auto">{t.caseStudies.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {placeholderCards.map((card) => (
            <div
              key={card.id}
              className="relative h-96 rounded-3xl backdrop-blur-xl bg-gradient-to-br from-white/50 to-white/30 border border-white/40 flex items-center justify-center overflow-hidden group hover:border-orange-200/60 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="text-center z-10">
                <div className="text-5xl mb-3">🎯</div>
                <p className="text-lg font-semibold text-gray-900">{t.caseStudies.comingSoon}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
