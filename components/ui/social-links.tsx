"use client"

import Link from "next/link"
import {
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6"

export function SocialLinks() {
  return (
    <div className="flex items-center gap-3">
      <Link
        href="https://instagram.com/hookon.ai/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-slate-800 hover:text-[#0ccdff] transition"
        aria-label="Instagram"
      >
        <FaInstagram className="h-5 w-5" />
      </Link>

      <Link
        href="https://x.com/HookonAI"
        target="_blank"
        rel="noopener noreferrer"
        className="text-slate-800 hover:text-[#0ccdff] transition"
        aria-label="X (Twitter)"
      >
        <FaXTwitter className="h-5 w-5" />
      </Link>

      <Link
        href="https://www.linkedin.com/company/hookon-ai/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-slate-800 hover:text-[#0ccdff] transition"
        aria-label="LinkedIn"
      >
        <FaLinkedinIn className="h-5 w-5" />
      </Link>

      <Link
        href="https://www.youtube.com/@hookonai"
        target="_blank"
        rel="noopener noreferrer"
        className="text-slate-800 hover:text-[#0ccdff] transition"
        aria-label="YouTube"
      >
        <FaYoutube className="h-5 w-5" />
      </Link>
    </div>
  )
}
