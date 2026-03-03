"use client"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"
import { FeatureCardsRow } from "@/components/feature-cards-row"

export function HeroSection() {
  const { language } = useLanguage()
  const t = translations[language]

  const features = [
    {
      iconPath: "/icons/ai-driven-ads.png",
      iconAlt: "AI-Driven Ads icon",
      title: t.heroFeatures.auditTitle,
    description: t.heroFeatures.auditDesc,
    },
    {
      iconPath: "/icons/creative-flow.png",
      iconAlt: "Creative Flow icon",
      title: t.heroFeatures.systemTitle,
    description: t.heroFeatures.systemDesc,
    },
    {
      iconPath: "/icons/hook.png",
      iconAlt: "Hook icon",
      title: t.heroFeatures.execTitle,
    description: t.heroFeatures.execDesc,
    },
  ]

  return (
    <section
     id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center py-8 sm:py-12 md:py-16 lg:py-20"
    >
      {/* Background overlay nad tím, co dělá body::before */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-800/40 via-blue-300/30 to-white/20 -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center w-full">
        

        <h1
  className="relative text-center font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl mt-32 mx-auto"
>
  {/* spodní vrstva – čistý text kvůli diakritice */}
  <span className="absolute inset-0 text-white">
    {t.hero.title}
  </span>

  {/* horní vrstva – glass efekt */}
  <span className="glass-heading relative">
    {t.hero.title}
  </span>
</h1>


        {/* Logo */}
        <div className="mb-6 sm:mb-8 md:mb-10 lg:mb-12 mt-32 flex justify-center">
          <img
            src="/images/hookon_logo.png"
            alt="hookon"
            className="h-12 sm:h-12 md:h-18 lg:h-26 object-contain"
          />
        </div>

        {/* Subtitle 1 */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-slate-50/90 mb-4 sm:mb-6 md:mb-8 lg:mb-40 max-w-2xl mt-16 mx-auto text-balance">
          {t.hero.subtitle}
        </p>

        {/* Subtitle 2 */}
        <p className="text-base sm:text-lg md:text-xl lg:text-4xl font-bold text-[#0ccdff] mb-8 sm:mb-10 md:mb-12 lg:mb-16 max-w-2xl mx-auto text-balance">
          {t.hero.subtitle2}
        </p>
      </div>

      {/* FeatureCardsRow */}
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FeatureCardsRow
          heroCta1={t.hero.cta1}
          heroCta2={t.hero.cta2}
          heroCta3={t.hero.cta3}
          heroCta4={t.hero.cta4}
          //heroCta5={t.hero.cta5}
          features={features}
        />
      </div>
    </section>
  )
}
