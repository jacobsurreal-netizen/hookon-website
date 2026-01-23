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
    className="relative min-h-screen flex flex-col items-center justify-center pt-10 pb-10"
     // @ts-ignore
>


      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/7 via-white/3 to-amber-80/50 -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Logo in hero */}
        <div className="mb-12 flex justify-center">
          <img src="/images/hookon_logo.png" alt="hookon" className="h-[750px] object-contain" />
        </div>
        

        
        <h1 className="glass-heading text-8xl md:text-6xl lg:text-8xl font-bold text-gray-200/15 mb-6 text-balance">
  {t.hero.title}
</h1>


        <p className="text-lg md:text-x2 text-gray-400/70 mb-10 max-w-2xl mx-auto text-balance">{t.hero.subtitle}</p>
      </div>

      {/* FeatureCardsRow component - updated features array with PNG icon paths */}
      <div className="w-full max-w-6xl mx-auto px-4">
        <FeatureCardsRow heroCta={t.hero.cta1} features={features} />
      </div>
    </section>
  )
}
