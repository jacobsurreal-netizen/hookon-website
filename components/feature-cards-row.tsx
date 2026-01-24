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
        "
      >
        <div className="text-center">
          <button className="px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 bg-gradient-to-r from-[#FF7A00] to-[#FF3300] text-white rounded-full hover:shadow-xl hover:shadow-orange-500/30 transition-all font-semibold text-sm sm:text-base hover:scale-105 transform">
            {heroCta}
          </button>
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
              {/* Inner subtle glow using ring */}
              <div className="absolute inset-0.5 rounded-2xl sm:rounded-3xl bg-gradient-to-tl from-white/50 to-transparent opacity-0 group-hover:opacity-60 transition-opacity" />

              <div className="relative">
                <div className="mb-3 sm:mb-4 w-10 h-10 sm:w-12 sm:h-12 relative">
                  <Image
                    src={feature.iconPath || "/placeholder.svg"}
                    alt={feature.iconAlt}
                    width={55}
                    height={55}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-orange-600/90 mb-3 sm:mb-4">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-gray-900 leading-relaxed">
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
