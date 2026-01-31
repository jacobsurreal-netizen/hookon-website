"use client"

import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"

export function CTASection() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-amber-600/30 via-blue-400/20 to-slate-400/40 -z-10" />

      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-[#2660ff] mb-10 text-balance">{t.cta.title}</h2>
        <p className="text-xl text-white/80 mb-10 font-bold max-w-2xl mx-auto">{t.cta.subtitle}</p>
        <a
           href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0VtHq0M_viypndTNdGH0pY82c9UbVW9_K_m2aVBJhRa1ePRu1xcsKJrguC87Cp_pnjRlmS2VOj"
           target="_blank"
           rel="noopener noreferrer"
           className="px-10 py-4 bg-gradient-to-r from-[#0ccdff] to-[#2660ff] text-white rounded-full hover:shadow-xl hover:shadow-[#0ccdff]/50 transition-all font-semibold text-lg hover:scale-105 transform inline-flex items-center justify-center"
        >
          {t.cta.button}
        </a>

      </div>
    </section>
  )
}
