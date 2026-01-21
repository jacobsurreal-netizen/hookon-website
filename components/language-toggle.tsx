"use client"

import { useLanguage } from "@/lib/language-context"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex gap-3 items-center">
      <button
        onClick={() => setLanguage("en")}
        className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
          language === "en" ? "bg-orange-500 text-white" : "bg-white/20 text-gray-700 hover:bg-white/30"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage("cs")}
        className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
          language === "cs" ? "bg-orange-500 text-white" : "bg-white/20 text-gray-700 hover:bg-white/30"
        }`}
      >
        CZ
      </button>
      <button
        onClick={() => setLanguage("cs")}
        className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
          language === "cs" ? "bg-orange-500 text-white" : "bg-white/20 text-gray-700 hover:bg-white/30"
        }`}
      >
        DE
      </button>
    </div>
  )
}
