"use client"

import { useLanguage, LanguageProvider } from "@/lib/language-context"
import { translations } from "@/lib/translations"
import { FeatureCardsRow } from "@/components/feature-cards-row"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { BenefitsSection } from "@/components/benefits-section"
import { LazyVideoSection } from "@/components/lazy-video-section"
import { ContactCtaSection } from "@/components/contact-cta-section"
import { CTASection } from "@/components/cta-section"
import { OurWorkCarousel } from "@/components/our-work-carousel"
import React from "react"

function HomeInner() {
  const { language } = useLanguage() // "en" | "cs" | "de"
  const t = translations[language]

  const features = [
    {
      iconPath: "/icons/time.svg",
      iconAlt: t.features.feature1.name,
      title: t.features.feature1.name,
      description: t.features.feature1.description,
    },
    {
      iconPath: "/icons/expensive.svg",
      iconAlt: t.features.feature2.name,
      title: t.features.feature2.name,
      description: t.features.feature2.description,
    },
    {
      iconPath: "/icons/target.svg",
      iconAlt: t.features.feature3.name,
      title: t.features.feature3.name,
      description: t.features.feature3.description,
    },
  ]



  return (
    <main className="min-h-screen">
      <Navigation />

      <div className="px-4 sm:px-6 lg:px-50 pt-22 sm:pt-48 pb-10 sm:pb-20">
        <div
          className="
            relative
            max-w-6xl mx-auto
            rounded-[32px]
            bg-gradient-to-b from-yellow/12 via-orange/8 to-yellow/17
            backdrop-blur-5xl
            border border-white/30
            ring-1 ring-inset ring-white/9
            overflow-hidden
            shadow-[0_30px_80px_rgba(0,0,0,0.80)]
            hover:shadow-[0_20px_80px_rgba(0,0,0,0.80)]
            transition-shadow duration-2500 ease-in-out
          "
        >
          <div
            className="
              relative
              max-w-6xl mx-auto
              rounded-[32px]
              bg-gradient-to-br from-blue-600/50 via-[#0ccdff]/20 to-[#2660ff]/40
              backdrop-blur-[5px]
              border border-white/15
              ring-0.5 ring-inset ring-white/7
              overflow-hidden
              transition-all duration-300
              hover:ring-gray/50
              hover:shadow-[0_50px_180px_rgba(0,0,0,0.30)]
            "
          >
            <div
              className="
                relative
                max-w-6xl mx-auto
                rounded-[32px]
                bg-gradient-to-b from-yellow/16 via-orange/6 to-yellow/10
                backdrop-blur-[80px]
                border border-white/15
                ring-2 ring-inset ring-white/25
                shadow-[0_40px_160px_rgba(0,0,0,0.6)]
                overflow-hidden
                transition-all duration-300 ease-out
                hover:ring-white/15
                hover:shadow-[0_60px_220px_rgba(0,0,0,0.9)]
              "
            >
              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute -top-1/3 left-[-10%] w-[120%] h-1/2
                  bg-gradient-to-b from-white/80 via-white/10 to-transparent
                  opacity-12
                "
              />
              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute inset-x-[-10%] -top-[40%] h-[90%]
                  bg-gradient-to-b from-white/70 via-white/10 to-transparent
                  opacity-15
                "
              />
              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute bottom-[-75%] left-1/5 w-1/2 h-1/3
                  bg-gradient-radial from-white/75 via-transparent to-transparent
                  opacity-30
                "
              />

              <HeroSection />
              <CTASection />

              <section className="mt-32">
                <FeatureCardsRow
                  heroCta1={t.hero.cta1}
                  heroCta2={t.hero.cta2}
                  heroCta3={t.hero.cta3}
                  heroCta4={t.hero.cta4}
                  // heroCta5={t.hero.cta5}
                  features={features}
                />
              </section>

              <FeaturesSection />

              <LazyVideoSection src="/videos/Canibal_Corpse_Wear.mp4" />

              <BenefitsSection />
              <OurWorkCarousel />
              <ContactCtaSection />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default function Home() {
  return (
    <LanguageProvider>
      <HomeInner />
    </LanguageProvider>
  )
}
