"use client"

import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { ExternalLink, Globe2, ShieldCheck } from "lucide-react"
import { EROMMAN_LINKS } from "@/lib/links"

type Lang = "en" | "bm" | "ar"

const copy = {
  en: {
    badge: "eRomman GCC Market Entry Support",
    line: "Seller outreach for Malaysian brands exploring the GCC.",
    official: "Official corporate website",
    visit: "Visit www.eromman.com",
    note: "For official company information, registration and corporate details, use eRomman’s main website.",
  },
  bm: {
    badge: "Sokongan Kemasukan Pasaran GCC eRomman",
    line: "Seller outreach untuk jenama Malaysia yang meneroka pasaran GCC.",
    official: "Laman web korporat rasmi",
    visit: "Lawati www.eromman.com",
    note: "Untuk maklumat rasmi syarikat, pendaftaran dan butiran korporat, rujuk laman utama eRomman.",
  },
  ar: {
    badge: "دعم eRomman لدخول أسواق الخليج",
    line: "دعم للبائعين والعلامات الماليزية الراغبة في دخول أسواق الخليج.",
    official: "الموقع الرسمي للشركة",
    visit: "زيارة www.eromman.com",
    note: "للمعلومات الرسمية والتسجيل وبيانات الشركة، يرجى الرجوع إلى الموقع الرئيسي لـ eRomman.",
  },
} as const

export function OfficialErommanIdentity() {
  const [host, setHost] = useState<HTMLElement | null>(null)
  const [lang, setLang] = useState<Lang>("en")

  useEffect(() => {
    const path = window.location.pathname.replace(/\/+$/, "") || "/"
    setLang(path === "/bm" ? "bm" : path === "/ar" ? "ar" : "en")

    const main = document.querySelector("main")
    if (!main) return

    let node = document.querySelector<HTMLElement>("[data-official-eromman-identity]")
    if (!node) {
      node = document.createElement("div")
      node.dataset.officialErommanIdentity = "true"
      main.insertBefore(node, main.firstChild)
    }
    setHost(node)
  }, [])

  if (!host) return null

  const t = copy[lang]
  const rtl = lang === "ar"

  return createPortal(
    <section dir={rtl ? "rtl" : "ltr"} className="border-b border-red-200 bg-[#7b0710] text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="flex min-w-0 items-start gap-3">
          <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/12 ring-1 ring-white/20">
            <ShieldCheck className="h-4 w-4 text-[#f3d28a]" />
          </span>
          <div className="min-w-0">
            <p className="text-xs font-black uppercase tracking-[0.12em] text-[#f3d28a]">{t.badge}</p>
            <p className="mt-0.5 text-sm text-white/80">{t.line}</p>
          </div>
        </div>

        <a
          href={EROMMAN_LINKS.home}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-black text-[#8a0b13] shadow-lg shadow-black/10 transition hover:-translate-y-0.5"
        >
          <Globe2 className="h-4 w-4" />
          <span className="hidden sm:inline">{t.official}: </span>www.eromman.com
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>
      <div className="border-t border-white/10 bg-black/10">
        <div className="mx-auto max-w-7xl px-4 py-2 text-center text-[11px] leading-relaxed text-white/65 sm:px-6 lg:px-8">{t.note}</div>
      </div>
    </section>,
    host,
  )
}
