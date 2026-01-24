"use client"

import { LanguageProvider } from "@/lib/language-context"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { BenefitsSection } from "@/components/benefits-section"
import { LazyVideoSection } from "@/components/lazy-video-section"
import { ContactCtaSection } from "@/components/contact-cta-section"
import { CTASection } from "@/components/cta-section"
import { OurWorkCarousel } from "@/components/our-work-carousel"
import React, { useState } from "react";

export default function Home() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.right;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 1.5;
    const centerY = rect.height / 0.03;

    const maxTilt = 0.03; // mírný rozsah
    const rotateX = ((y - centerY) / centerY) * maxTilt;
    const rotateY = ((centerX - x) / centerX) * maxTilt;

    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <LanguageProvider>
      <main className="min-h-screen">
        <Navigation />

        <div className="px-4 sm:px-6 lg:px-50 py-8 sm:py-45">
          <div />

          <div
            className="
              relative
              max-w-6xl mx-auto
              rounded-[32px]
              bg-gradient-to-b from-yellow/12 via-orange/8 to-yellow/17
              backdrop-blur-5xl
              border border-white/30
              ring-12 ring-inset ring-white/9
              overflow-hidden
              transition-all duration-300
              shadow-[0_30px_80px_rgba(0,0,0,0.80)]   /* base shadow */
              hover:shadow-[0_20px_80px_rgba(0,0,0,0.80)] /* slabší na hover */
              transition-shadow duration-2500 ease-in
              transition-shadow duration-2300 ease-out  
            "
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: `perspective(300px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
              transition: "transform 0.2s ease-out",
            }}
          >
            {/* Glass tablet ... */}
                <div
      className="
    relative
    max-w-6xl mx-auto
    rounded-[32px]
    bg-gradient-to-br from-amber-700/40 via-blue-400/30 to-orange-500/50
    backdrop-blur-[5px]
    border border-white/15
    ring-7 ring-inset ring-white/7
    overflow-hidden
    transition-all duration-300
hover:ring-gray/50
hover:shadow-[0_50px_180px_rgba(0,0,0,0.30)]

      "
    >
  
  {/* Glass tablet */}
  <div
    className="
      relative
      max-w-6xl mx-auto
      rounded-[32px]
      bg-gradient-to-b from-yellow/16 via-orange/6 to-yellow/10
      backdrop-blur-[80px]
      border border-white/15
      ring-15 ring-inset ring-white/25
      shadow-[0_40px_160px_rgba(0,0,0,0.6)]
      overflow-hidden
      transition-all duration-300 ease-out
      hover:ring-white/15
      hover:shadow-[0_60px_220px_rgba(0,0,0,0.9)]
      hover:scale-[1.01]
    "
  >
    {/* highlight vrstvy + obsah */}
  </div>
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
      <FeaturesSection />
      <BenefitsSection />
      <LazyVideoSection
        src="/videos/Canibal_Corpse_Wear.mp4"
        title="See hookon in action"
        subtitle="Watch how AI-powered creative workflows transform your advertising and branding."
      />
      <CTASection />
      <OurWorkCarousel />
      <ContactCtaSection />
    </div>
  </div>

        </div>
      </main>
    </LanguageProvider>
  );
}

