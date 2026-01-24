"use client"

import Image from "next/image"

interface Feature {
  iconPath: string
  iconAlt: string
  title: string
  description: string
}

interface FeatureCardsRowProps {
  heroCta: string
  heroCta2?: string
  features: Feature[]
}

export function FeatureCardsRow({ heroCta, heroCta2, features }: FeatureCardsRowProps) {
  return (
    <div className="relative w-full max-w-6xl mx-auto px-15">
      {/* Hero glass panel with CTA */}
      <div
  className="
    relative
    rounded-[28px]
    bg-gradient-to-b from-white/3 via-white/1 to-white/5
    backdrop-blur-3xl
    border border-white/40
    ring-1.5 ring-inset ring-white/150
    p-30 md:p-12
    shadow-[0_40px_160px_rgba(0,0,0,0.25)]
    mb-8
    overflow-hidden
  "
   >
        <div className="text-center">
          <button className="px-15 py-3 bg-gradient-to-r from-[#FF7A00] to-[#FF3300] text-white rounded-full hover:shadow-xl hover:shadow-orange-500/30 transition-all font-semibold text-base hover:scale-105 transform">
            {heroCta}
          </button>
        </div>
      </div>

      {/* Feature cards row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 -mt-2 relative z-20">
        {features.map((feature, index) => (
          <div key={index} className="relative group">
            {/* Bottom glow effect */}
            <div className="absolute inset-x-4 -bottom-3 h-4 bg-gradient-to-t from-[#FFD84D]/15 to-transparent blur-lg" />

       {/* Card */}
<div
  className="
    relative
    rounded-[24px]
    bg-gradient-to-b from-white/8 via-white/3 to-white/10
    backdrop-blur-2xl
    border border-white/12
    ring-1 ring-inset ring-white/10
    shadow-[0_4px_25px_rgba(0,0,0,0.2)]
    p-12
    transition-all duration-300 ease-out
    group-hover:shadow-[0_10px_40px_rgba(0,0,0,0.4)]
    group-hover:-translate-y-1
  "
>

              {/* Inner subtle glow using ring */}
              <div className="absolute inset-0.5 rounded-3xl bg-gradient-to-tl from-white/50 to-transparent opacity-0 group-hover:opacity-60 transition-opacity" />

              <div className="relative">
                <div className="mb-4 w-12 h-12 relative">
                  <Image
                    src={feature.iconPath || "/placeholder.svg"}
                    alt={feature.iconAlt}
                    width={55}
                    height={55}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-orange-600/90 mb-8">{feature.title}</h3>

                {/* Description */}
                <p className="text-sm text-gray-900 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
