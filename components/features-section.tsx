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
    <section id="services" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-green-50/30 to-white -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-balance">{t.features.title}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t.features.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group relative p-4 rounded-3xl backdrop-blur-xl bg-gradient-to-br from-white/50 to-white/30 border border-white/80 hover:border-orange-200/60 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10"
            >
              
              <div className="w-75 h-16 flex items-center justify-center mb-6
    rounded-2xl
    transition-all duration-300 ease-out
    group-hover:scale-150
    group-hover:rotate-5">
                <Image
                  src={feature.iconPath || "/placeholder.svg"}
                  alt={feature.iconAlt}
                  width={64}
                  height={64}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.name}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
