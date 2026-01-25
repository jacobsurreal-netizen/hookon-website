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
      title: language === "en" ? "AI-Driven Ads" : "AI-Řízená Reklama",
      description:
        language === "en"
          ? "Drive engagement with smart, targeted AI-driven ads."
          : "Zvyšte engagement s chytrými, cílenými AI-řízenými reklamami.",
    },
    {
      iconPath: "/icons/creative-flow.png",
      iconAlt: "Creative Flow icon",
      title: language === "en" ? "Creative Flow" : "Kreativní Tok",
      description:
        language === "en"
          ? "Streamline your campaign creation process easily."
          : "Zjednodušte proces vytváření kampaně.",
    },
    {
      iconPath: "/icons/hook.png",
      iconAlt: "Hook icon",
      title: language === "en" ? "Brand Building" : "Budování Značky",
      description:
        language === "en"
          ? "Cultivate strong and memorable brand identities."
          : "Vytvářejte silné a nezapomenutelné identity značky.",
    },
  ]

  return (
    <section 
      className="relative min-h-screen flex flex-col items-center justify-center py-8 sm:py-12 md:py-16 lg:py-20"
      // @ts-ignore
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/7 via-white/3 to-amber-80/50 -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-30 text-center flex flex-col items-center w-full">
        {/* Logo in hero - responsive heights */}
        <div className="mb-6 sm:mb-8 md:mb-10 lg:mb-12 flex justify-center">
          <img 
            src="/images/hookon_logo.png" 
            alt="hookon" 
            className="h-40 sm:h-40 md:h-60 lg:h-80 object-contain" 
          />
        </div>

        {/* H1 - mobile-first responsive sizing */}
        <h1 className="glass-heading text-4xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-gray-800/15 mb-4 sm:mb-5 md:mb-6 lg:mb-8 text-balance">
          {t.hero.title}
        </h1>

        {/* Subtitle - responsive text size and margin */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-slate-900/70 mb-8 sm:mb-10 md:mb-12 lg:mb-16 max-w-2xl mx-auto text-balance">
          {t.hero.subtitle}
        </p>
      </div>

      {/* FeatureCardsRow component */}
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FeatureCardsRow heroCta={t.hero.cta1} features={features} />
      </div>
    </section>
  )
}
