"use client"

import Image from "next/image"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"
import { useRef, useState, useEffect } from "react"

interface CarouselCard {
  id: number
  title: string
  description: string
  image: string
}

export function OurWorkCarousel() {
  const { language } = useLanguage()
  const t = translations[language]
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cardRotations, setCardRotations] = useState<number[]>([0, 0, 0])
  const [selectedCard, setSelectedCard] = useState<CarouselCard | null>(null)

  const cards: CarouselCard[] = [
    {
      id: 1,
      title: "Brand Mockup",
      description: "AI‑enhanced brand merchandise mockup.",
      image: "/projects/mockup.png",
    },
    {
      id: 2,
      title: "Luxury present",
      description: "Best HQ renders for commerce.",
      image: "/projects/gift.png",
    },
    {
      id: 3,
      title: "Logo variation",
      description: "Illustrate your logo in any situation.",
      image: "/projects/logo.png",
    },
    {
      id: 4,
      title: "Product with logo",
      description: "Place your logo on any product in studio quality.",
      image: "/projects/product.png",
    },
    {
      id: 5,
      title: "Mood & environment",
      description: "Use your product in moody environment.",
      image: "/projects/render.png",
    },
  ]

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

      const rotations = [
        Math.atan2(y, x - 200) * 5,
        Math.atan2(y, x) * 5,
        Math.atan2(y, x + 200) * 5,
      ]
      setCardRotations(rotations)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % cards.length)
    }, 15000)
    return () => clearInterval(timer)
  }, [cards.length])

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length)
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length)
  }

  return (
    <section id="work" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 border border-white/10 bg-black/40 bg-gradient-to-br from-orange-70/60 via-black/50 to-gray/70 backdrop-blur-2xl shadow-[0_0_60px_rgba(0,0,0,1.5)] ring-1 ring-white/20" />
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="behold-our-creation text-5xl md:text-6xl lg:text-9xl font-bold text-white-900/50 mb-6 text-balance">
            {t.caseStudies.title}
          </h2>
          <p className="text-lg font-bold text-black max-w-2xl mx-auto">
            {t.caseStudies.subtitle}
          </p>
        </div>

        <div
          ref={containerRef}
          className="relative flex items-center justify-center min-h-96 perspective"
        >
          {/* Carousel cards */}
          <div className="flex gap-8 justify-center items-center w-full px-4">
            {visibleCards.map((card, idx) => {
              const isCenter = idx === 1
              const scale = isCenter ? 1 : 0.75
              const opacity = isCenter ? 1 : 0.5

              return (
                <div
                  key={card.id}
                  className="relative transition-all duration-2500 ease-out"
                  style={{
                    transform: `scale(${scale}) rotateY(${cardRotations[idx]}deg)`,
                    opacity: opacity,
                  }}
                >
                  <div
                    onClick={() => setSelectedCard(card)}
                    className={`relative h-80 w-64 rounded-3xl cursor-pointer
                                backdrop-blur-x4 bg-gradient-to-br from-white/5 to-white/10
                                border-[3px] ${
                                  isCenter
                                    ? "border-orange-400/40 shadow-2xl shadow-orange-500/30"
                                    : "border-white/40 hover:border-orange-200/60"
                                }
                                flex flex-col items-center justify-center overflow-hidden
                                group transition-all duration-300`}
                  >
                    {/* Card gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                    {/* Card content */}
                    <div className="text-center z-10 px-6">
                      <div className="w-full h-40 mb-4 rounded-2xl overflow-hidden">
                        <Image
                          src={card.image}
                          alt={card.title}
                          width={400}
                          height={240}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <p className="text-base font-semibold text-white/90 mb-1">
                        {card.title}
                      </p>
                      <p className="text-sm text-gray-300/80 mb-4">
                        {card.description}
                      </p>

                      <button className="px-6 py-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-800 text-white font-medium hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300">
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
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/30 backdrop-blur-md border border-white/50 hover:bg-white/15 transition-all duration-300 group"
          >
            <svg
              className="w-6 h-6 text-gray-900 group-hover:text-orange-600 transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/30 backdrop-blur-md border border-white/50 hover:bg-white/15 transition-all duration-300 group"
          >
            <svg
              className="w-6 h-6 text-gray-900 group-hover:text-orange-600 transition-colors"
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

      {/* Overlay s velkým náhledem */}
      {selectedCard && (
        <div
        className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-md
               flex items-start justify-center px-4
               pt-1100 sm:pt-1100 md:pt-1200 lg:pt-937"

          onClick={() => setSelectedCard(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] rounded-3xl overflow-hidden border border-white/20 bg-black/40"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedCard.image}
              alt={selectedCard.title}
              width={1600}
              height={900}
              className="w-full h-full object-contain bg-black"
            />

            <button
              onClick={() => setSelectedCard(null)}
              className="absolute top-3 right-3 rounded-full bg-black/60 border border-white/40
                         w-9 h-9 flex items-center justify-center text-white hover:bg-black/80 transition"
            >
              ✕
            </button>

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <p className="text-sm sm:text-base font-semibold text-white">
                {selectedCard.title}
              </p>
              <p className="text-xs sm:text-sm text-gray-200/80">
                {selectedCard.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
