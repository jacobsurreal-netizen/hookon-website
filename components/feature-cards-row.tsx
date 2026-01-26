"use client"

import { useMemo, useState } from "react"
import Image from "next/image"

interface Feature {
  iconPath: string
  iconAlt: string
  title: string
  description: string
}

interface FeatureCardsRowProps {
  heroCta1: string
  heroCta2?: string
  heroCta3?: string
  heroCta4?: string
  heroCta5?: string
  features: Feature[]
}

export function FeatureCardsRow({
  heroCta1,
  heroCta2,
  heroCta3,
  heroCta4,
  heroCta5,
  features,
}: FeatureCardsRowProps) {
  const [open, setOpen] = useState(false)

  const details = useMemo(
    () => [heroCta2, heroCta3, heroCta4, heroCta5].filter(Boolean) as string[],
    [heroCta2, heroCta3, heroCta4, heroCta5]
  )

  const hasDetails = details.length > 0

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Hero glass panel with CTA */}
      <div
        className="
          relative
          rounded-[24px] sm:rounded-[28px]
          bg-gradient-to-b from-white/5 via-white/2 to-white/8
          backdrop-blur-3xl
          border border-white/30
          ring-1 ring-inset ring-white/10
          p-5 sm:p-7 md:p-10 lg:p-12
          shadow-[0_24px_80px_rgba(0,0,0,0.25)]
          mb-6 sm:mb-8
          overflow-hidden
          group
        "
      >
        <div className="text-center">
          {/* hlavní CTA (klikatelné na mobile) */}
          <button
            type="button"
            className="w-full cursor-pointer select-none"
            onClick={() => {
              if (!hasDetails) return
              setOpen((v) => !v)
            }}
            aria-expanded={open}
            aria-controls="hero-cta-details"
          >
            <p className="text-orange-600/90 font-bold text-sm sm:text-[38px]">
              {heroCta1}
            </p>

             {/* hint jen pro mobily */}
  {hasDetails && (
    <p className="mt-1 text-[11px] text-slate-200/80 font-medium sm:hidden">
      {open ? "Tap for Collapse" : "Tap for Expand"}
    </p>
  )}
          </button>

          {/* detaily: mobil = klik (open), desktop = hover */}
          {hasDetails && (

            <div
              id="hero-cta-details"
              className={[
                "overflow-hidden",
                "transition-[max-height,opacity,transform] duration-500 ease-out",
                // mobile / default (click)
                open ? "max-h-64 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-1",
                // desktop hover (funguje i bez kliku)
                "md:group-hover:max-h-64 md:group-hover:opacity-100 md:group-hover:translate-y-0",
              ].join(" ")}
            >
              {details.map((line, i) => (
                <p key={i} className={(i === 0 ? "mt-2" : "mt-1") + " text-sm sm:text-lg font-bold text-slate-100/90"}>
                  {line}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Feature cards row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 -mt-1 sm:-mt-2 relative z-20">
        {features.map((feature, index) => (
          <div key={index} className="relative group">
            {/* Bottom glow effect */}
            <div className="hidden md:block absolute inset-x-4 -bottom-3 h-4 bg-gradient-to-t from-[#FFD84D]/15 to-transparent blur-lg" />

            {/* Card */}
            <div
              className="
                relative
                rounded-2xl sm:rounded-[24px]
                bg-gradient-to-b from-white/10 via-white/4 to-white/12
                backdrop-blur-2xl
                border border-white/15
                ring-1 ring-inset ring-white/10
                shadow-[0_4px_20px_rgba(0,0,0,0.18)]
                p-5 sm:p-6 md:p-8
                transition-all duration-300 ease-out
                group-hover:shadow-[0_10px_40px_rgba(0,0,0,0.4)]
                group-hover:-translate-y-1
              "
            >
              <div className="absolute inset-0.5 rounded-2xl sm:rounded-3xl bg-gradient-to-tl from-white/50 to-transparent opacity-0 group-hover:opacity-60 transition-opacity" />

              <div className="relative">
                <div className="mb-3 sm:mb-4 w-16 h-16 sm:w-20 sm:h-20 mx-auto relative">
                  <Image
                    src={feature.iconPath || "/placeholder.svg"}
                    alt={feature.iconAlt}
                    fill
                    className="object-contain"
                  />
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-orange-600/90 mb-3 sm:mb-4 text-center">
                  {feature.title}
                </h3>

                <p className="text-sm sm:text-base text-gray-900 leading-relaxed text-center">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
