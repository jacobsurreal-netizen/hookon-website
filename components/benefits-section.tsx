"use client"

import Image from "next/image"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"

export function BenefitsSection() {
  const { language } = useLanguage()
  const t = translations[language]

  const benefits = [
    {
      name: t.benefits.benefit1.name,
      description: t.benefits.benefit1.description,
      iconPath: "/icons/speed.png",
      iconAlt: "Speed icon",
    },
    {
      name: t.benefits.benefit2.name,
      description: t.benefits.benefit2.description,
      iconPath: "/icons/performance.png",
      iconAlt: "Performance icon",
    },
    {
      name: t.benefits.benefit3.name,
      description: t.benefits.benefit3.description,
      iconPath: "/icons/performance-analytics.png",
      iconAlt: "Scalability icon",
    },
  ]

  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      <div className="absolute inset-2 bg-gradient-to-tr from-slate-800/30 via-slate-400/40 to-slate-600/20 -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-slate-50/90 mb-4 text-balance">{t.benefits.title}</h2>
          <p className="mt-10 text-lg font-bold text-orange-600/80 max-w-2xl mx-auto">{t.benefits.subtitle1}</p>
          <p className="mt-5 text-lg font-bold text-slate-800/80 max-w-2xl mx-auto">{t.benefits.subtitle2}</p>
          <h3 className="mt-12 text-4xl md:text-4xl font-bold text-slate-50/90 mb-4 text-balance">{t.benefits.title1}</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          
          {benefits.map((benefit, idx) => (
            
            <div
              key={idx}
              className="
              relative
    rounded-[24px]
    bg-gradient-to-b from-white/12 via-white/1 to-white/8
    backdrop-blur-3xl
    border border-white/12
    ring-1 ring-inset ring-white/20
    shadow-[0_7px_12px_rgba(0,0,0,0.2)]
    p-6
    transition-all duration-300 ease-out
    group-hover:shadow-[0_28px_120px_rgba(0,0,0,0.8)]
    group-hover:-translate-y-1"
            >
              <div className="w-full max-w-md mx-auto px-20 sm:px-22 lg:px-24">
                <Image
                  src={benefit.iconPath || "/placeholder.svg"}
                  alt={benefit.iconAlt}
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
                
              </div>
              <h3 className="text-xl font-bold text-white/90 mb-5 mx-auto text-center flex flex-col items-center w-full">{benefit.name}</h3>
              <p className="font-bold text-slate-800/80 text-center leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
