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
          <button
            type="button"
            className="w-full cursor-pointer select-none"
            onClick={() => {
              if (!hasDetails) return
              setOpen(v => !v)
            }}
            aria-expanded={open}
            aria-controls="hero-cta-details"
          >
            <p className="text-slate-50/90 font-bold text-sm sm:text-[38px]">
              {heroCta1}
            </p>

            {hasDetails && (
              <p className="mt-1 text-[11px] text-slate-200/80 font-medium sm:hidden">
                {open ? "Tap for Collapse" : "Tap for Expand"}
              </p>
            )}
          </button>

          {hasDetails && (
            <div
              id="hero-cta-details"
              className={[
                "overflow-hidden",
                "transition-[max-height,opacity,transform] duration-500 ease-out",
                open
                  ? "max-h-64 opacity-100 translate-y-0"
                  : "max-h-0 opacity-0 -translate-y-1",
              ].join(" ")}
            >
              {details.map((line, i) => (
                <p
                  key={i}
                  className={
                    (i === 0 ? "mt-10" : "mt-7") +
                    " text-sm sm:text-lg font-bold text-slate-100/90"
                  }
                >
                  {line}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Feature cards row */}
      {/* tady si můžeš zase odkomentovat grid s kartami, až budeš ready */}
    </div>
  )
}
