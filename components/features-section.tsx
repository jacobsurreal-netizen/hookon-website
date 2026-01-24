"use client"

import Image from "next/image"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"

export function FeaturesSection() {
  const { language } = useLanguage()
  const t = translations[language]

  const features = [
    {
      iconPath: "/icons/ai-powered-advertising.png",
      iconAlt: "AI-Powered Advertising icon",
      name: t.features.feature1.name,
      description: t.features.feature1.description,
    },
    {
      iconPath: "/icons/brand-strategy.png",
      iconAlt: "Brand Strategy icon",
      name: t.features.feature2.name,
      description: t.features.feature2.description,
    },
    {
      iconPath: "/icons/creative-flow.png",
      iconAlt: "Creative Flow icon",
      name: t.features.feature3.name,
      description: t.features.feature3.description,
    },
  ]

  return (
    <section
      id="services"
      className="relative py-10 sm:py-14 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-green-70/30 to-white/10 -z-70" />

      <div className="max-w-6xl mx-auto">
        {/* Nadpis + podnadpis */}
        <div className="text-center mb-10 sm:mb-14 md:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-slate-50/70 mb-4 sm:mb-6 md:mb-8 text-balance">
            {t.features.title}
          </h2>
          <p className="text-sm sm:text-base md:text-lg font-bold text-orange-600/80 max-w-2xl md:max-w-3xl mx-auto">
            {t.features.subtitle}
          </p>
        </div>

        {/* Karty – 1 sloupec na mobilu, 3 na desktopu */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group relative p-4 sm:p-5 md:p-6 rounded-3xl backdrop-blur-xl
                         bg-gradient-to-br from-black/40 via-white/5 to-black/10
                         border border-white/25 hover:border-orange-200/60
                         transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10"
            >
              {/* Ikona – menší na mobilu */}
              <div
                className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mb-4 sm:mb-5
                           rounded-2xl transition-all duration-300 ease-out
                           group-hover:scale-110 group-hover:rotate-3"
              >
                <Image
                  src={feature.iconPath || "/placeholder.svg"}
                  alt={feature.iconAlt}
                  width={64}
                  height={64}
                  className="w-full h-full object-contain"
                />
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                {feature.name}
              </h3>
              <p className="text-sm sm:text-base text-white font-bold leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
