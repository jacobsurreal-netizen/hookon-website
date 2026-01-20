"use client"

import Image from "next/image"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"
import { useRef, useState, useEffect } from "react"

interface CarouselCard {
  id: number
}

export function OurWorkCarousel() {
  const { language } = useLanguage()
  const t = translations[language]
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cardRotations, setCardRotations] = useState<number[]>([0, 0, 0])

  const cards: CarouselCard[] = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }]
  const visibleCards = [
    cards[currentIndex % cards.length],
    cards[(currentIndex + 1) % cards.length],
    cards[(currentIndex + 2) % cards.length],
  ]

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2

      // Calculate rotation based on mouse position relative to center
      const rotations = [Math.atan2(y, x - 200) * 5, Math.atan2(y, x) * 5, Math.atan2(y, x + 200) * 5]
      setCardRotations(rotations)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % cards.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length)
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length)
  }

  return (
    <section id="work" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-balance">{t.caseStudies.title}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t.caseStudies.subtitle}</p>
        </div>

        <div ref={containerRef} className="relative flex items-center justify-center min-h-96 perspective">
          {/* Carousel cards */}
          <div className="flex gap-8 justify-center items-center w-full px-4">
            {visibleCards.map((card, idx) => {
              const isCenter = idx === 1
              const scale = isCenter ? 1 : 0.85
              const opacity = isCenter ? 1 : 0.6

              return (
                <div
                  key={card.id}
                  className="relative transition-all duration-500 ease-out"
                  style={{
                    transform: `scale(${scale}) rotateY(${cardRotations[idx]}deg)`,
                    opacity: opacity,
                  }}
                >
                  <div
                    className={`relative h-80 w-64 rounded-3xl backdrop-blur-xl bg-gradient-to-br from-white/50 to-white/30 border-[3px] ${
                      isCenter
                        ? "border-orange-400/80 shadow-2xl shadow-orange-500/30"
                        : "border-white/40 hover:border-orange-200/60"
                    } flex flex-col items-center justify-center overflow-hidden group transition-all duration-300`}
                  >
                    {/* Card gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                    {/* Card content */}
                    <div className="text-center z-10 px-6">
                      <div className="w-16 h-16 mb-4 flex items-center justify-center">
                        <Image
                          src="/icons/hookon-chain.png"
                          alt="hookon logo icon"
                          width={64}
                          height={64}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <p className="text-lg font-semibold text-gray-900 mb-4">
                        {t.caseStudies.project} {card.id}
                      </p>
                      <button className="px-6 py-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300">
                        {t.caseStudies.comingSoon}
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Navigation buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/40 backdrop-blur-md border border-white/60 hover:bg-white/60 transition-all duration-300 group"
          >
            <svg
              className="w-6 h-6 text-gray-800 group-hover:text-orange-600 transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/40 backdrop-blur-md border border-white/60 hover:bg-white/60 transition-all duration-300 group"
          >
            <svg
              className="w-6 h-6 text-gray-800 group-hover:text-orange-600 transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots indicator */}
          <div className="absolute bottom-0 flex gap-2 justify-center">
            {cards.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? "bg-orange-500 w-8" : "bg-white/40 w-2 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
