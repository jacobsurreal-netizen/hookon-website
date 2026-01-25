"use client"

import type React from "react"

import { useState } from "react"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"

export function ContactCtaSection() {
  const { language } = useLanguage()
  const t = translations[language]
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("[v0] Form submitted with data:", formData)

    // Submit to dummy endpoint
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      console.log("[v0] API response:", response.status)
    } catch (error) {
      console.log("[v0] API call failed (expected for now):", error)
    }

    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" })
      setSubmitted(false)
    }, 3000)
  }

  return (
    
    <section className="py-20 sm:py-24 border-t border-white/20">
      
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-6xl font-bold text-slate-100/90 mb-4 text-balance">{t.contact.title}</h2>
          <p className="text-lg text-gray-900/70 text-pretty">{t.contact.subtitle}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Name Input */}
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={t.contact.namePlaceholder}
              required
              className="px-4 py-3 rounded-xl bg-black/60 border border-white/70 text-orange-400 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition"
            />

            {/* Email Input */}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={t.contact.emailPlaceholder}
              required
              className="px-4 py-3 rounded-xl bg-black/60 border border-white/70 text-orange-400 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition"
            />
          </div>

          {/* Message Textarea */}
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder={t.contact.messagePlaceholder}
            required
            rows={5}
            className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/70 text-orange-400 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition resize-none"
          />

          {/* Submit Button */}
          <div className="flex justify-center pt-4">
            <button
              type="submit"
              className="px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full hover:shadow-lg hover:shadow-orange-500/65 transition-all font-semibold"
            >
              {submitted ? t.contact.sending : t.contact.button}
            </button>
          </div>
          
        </form>

        {submitted && (
          <div className="mt-6 p-4 bg-green-50/50 border border-green-500/20 rounded-lg text-center text-green-700 text-sm">
            {t.contact.successMessage}
          </div>
          
        )}
      </div>
    </section>
  )
}
