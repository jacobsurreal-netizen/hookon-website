"use client"

import { LanguageProvider } from "@/lib/language-context"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { BenefitsSection } from "@/components/benefits-section"
import { LazyVideoSection } from "@/components/lazy-video-section"
import { ContactCtaSection } from "@/components/contact-cta-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { OurWorkCarousel } from "@/components/our-work-carousel"
import React, { useState } from "react";

export default function Home() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 8;
    const centerY = rect.height / 8;

    const rotateX = (y - centerY) / 700;
    const rotateY = (centerX - x) / 700;

    

    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (

    <LanguageProvider>
      {/* PŮVODNÍ background z layoutu – použij třídu, kterou jsi měl dřív */}
      <main className="min-h-screen">
  <Navigation />
  
  <div className="px-4 sm:px-6 lg:px-10 py-8 sm:py-45">
    <div>

          </div>

    <div
      className="
    relative
    max-w-6xl mx-auto
    rounded-[32px]
    bg-gradient-to-b from-white/16 via-white/6 to-ember/10
    backdrop-blur-5xl
    border border-white/15
    ring-7 ring-inset ring-white/7
    shadow-[0_40px_250px_rgba(0,0,0,0.25)]
    overflow-hidden
    transition-all duration-300
hover:ring-white/10
hover:shadow-[0_50px_180px_rgba(0,0,0,0.30)]

      "
       onMouseMove={handleMouseMove}
  onMouseLeave={handleMouseLeave}
  style={{
    transform: `perspective(7000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
    transition: "transform 0.25s ease-out",
  }}
    >
      {/* Vnější glow */}
  <div
    aria-hidden="true"
    className="
      pointer-events-none
      absolute -inset-10
      rounded-[25px]
      bg-gradient-radial from-[#FF7A00]/80 via-[#FFD84D]/35 to-transparent
      blur-[35px]
      opacity-80
      animate-[pulseGlow_4s_ease-in-out_infinite]
      transition-opacity duration-300
      hover:opacity-70
    "
  />
  
  {/* Glass tablet */}
  <div
    className="
      relative
      max-w-6xl mx-auto
      rounded-[32px]
      bg-gradient-to-b from-white/16 via-white/6 to-ember/10
      backdrop-blur-[60px]
      border border-white/15
      ring-15 ring-inset ring-white/25
      shadow-[0_40px_160px_rgba(0,0,0,0.6)]
      overflow-hidden
      transition-all duration-300 ease-out
      hover:ring-white/75
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
    opacity-25
  "
/>

      <div
    aria-hidden="true"
    className="
      pointer-events-none
      absolute inset-x-[-10%] -top-[40%] h-[60%]
      bg-gradient-to-b from-white/70 via-white/10 to-transparent
      opacity-30
      "
  />
  <div
  aria-hidden="true"
  className="
    pointer-events-none
    absolute bottom-[-45%] left-1/5 w-1/2 h-1/3
    bg-gradient-radial from-white/75 via-transparent to-transparent
    opacity-75
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

  <Footer />
</main>
    </LanguageProvider>
  )
}

