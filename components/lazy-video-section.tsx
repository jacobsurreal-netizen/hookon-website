"use client"

import { useEffect, useRef, useState } from "react"

type LazyVideoSectionProps = {
  title?: string
  subtitle?: string
  /** Cesta k videu v /public, např. "/videos/Canibal_Corpse_Wear.mp4" */
  src: string
  /** Volitelný poster obrázek v /public (lepší first paint) */
  poster?: string
}

export function LazyVideoSection({
  title = "See hookon in action",
  subtitle = "Watch how AI-powered creative workflows transform your advertising.",
  src = "/videos/Canibal_Corpse_Wear.mp4",
  poster,
}: LazyVideoSectionProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [shouldLoad, setShouldLoad] = useState(false)
  const [hasPlayed, setHasPlayed] = useState(false)

  useEffect(() => {
    if (!containerRef.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true)
          observer.disconnect()
        }
      },
      {
        root: null,
        rootMargin: "200px", // načti ~200px před vstupem do viewportu
        threshold: 0.1,
      }
    )

    observer.observe(containerRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="absolute inset-0 border border-white/60 bg-black/40 bg-gradient-to-br from-orange-70/60 via-black/70 to-gray/90 backdrop-blur-2xl shadow-[0_0_60px_rgba(0,0,0,0.9)] ring-1 ring-white/8" />
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h2 className="behold-our-creation text-3xl md:text-4xl lg:text-8xl font-bold text-white mb-8 text-balance">
          {title}
        </h2>

      </div>

      <div className="aspect-video max-w-5xl mx-auto rounded-3xl overflow-hidden backdrop-blur-xl bg-black/70 border border-white/20 shadow-[0_24px_80px_rgba(0,0,0,0.65)]">
        <div
          className={[
            "w-full h-full transform transition-all duration-700 ease-out",
            shouldLoad ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
          ].join(" ")}
        >
          {shouldLoad ? (
            <video
              className="w-full h-full object-cover"
              controls
              playsInline
              muted
              loop
              onPlay={() => setHasPlayed(true)}
              poster={!hasPlayed && poster ? poster : undefined}
            >
              <source src={src ?? "/videos/Canibal_Corpse_Wear.mp4"}
  type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <div className="w-full h-full flex items-center justify-center text-white text-sm">
              Loading preview…
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
