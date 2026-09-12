"use client"

import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { ImageIcon, ShieldCheck } from "lucide-react"

const driveView = (id: string) => `https://drive.google.com/uc?export=view&id=${id}`
const driveThumb = (id: string) => `https://drive.google.com/thumbnail?id=${id}&sz=w2400`

const approved = {
  rollup: {
    id: "19fFneYa9XuEMYwIf_lE5ewyPc9ZSMmpi",
    name: "eRomman GCC Roll-Up Banner",
    alt: "eRomman GCC roll-up banner — Your Gateway to the Middle East",
    width: 793,
    height: 1983,
  },
  discovery: {
    id: "1ZZLEzUISf81Av0s8ei-dYIr-z0FZNHXB",
    name: "GCC Consumer Discovery",
    alt: "How GCC consumers discover products through eRomman",
    width: 1672,
    height: 941,
  },
  landingHero: {
    id: "1oMVCO_eK9yA0ITfxPsYhMttnz9cm34QI",
    name: "GCC Landing Page Hero",
    alt: "Bridging Malaysian Brands to Millions in the Middle East",
    width: 1672,
    height: 941,
  },
  discoveryInfographic: {
    id: "18VeQbB_dpM7vJS_4WxhclxIfunxO4p6M",
    name: "GCC Consumer Discovery Infographic",
    alt: "GCC consumer discovery infographic for Malaysian brands",
    width: 1672,
    height: 941,
  },
  brochure: {
    id: "1zeA__K9ym1J9X6QdDhvXbj0kHv6xOas9",
    name: "GCC Website Brochure",
    alt: "eRomman sell to the Middle East website brochure",
    width: 1672,
    height: 941,
  },
  officialHero: {
    id: "1Ae2FhKHrRMS2z37iNa2xLB15GiiihfXs",
    name: "Official GCC Market Entry Hero",
    alt: "Official eRomman GCC market entry hero",
    width: 1672,
    height: 941,
  },
} as const

type ApprovedImage = (typeof approved)[keyof typeof approved]

function DriveImage({ image, priority = false, className = "" }: { image: ApprovedImage; priority?: boolean; className?: string }) {
  const [src, setSrc] = useState(driveView(image.id))
  return (
    <img
      src={src}
      alt={image.alt}
      width={image.width}
      height={image.height}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      decoding="async"
      referrerPolicy="no-referrer"
      onError={() => {
        const fallback = driveThumb(image.id)
        if (src !== fallback) setSrc(fallback)
      }}
      className={className}
    />
  )
}

export function ApprovedDriveVisuals() {
  const [target, setTarget] = useState<HTMLElement | null>(null)

  useEffect(() => {
    setTarget(document.querySelector("main"))
  }, [])

  if (!target) return null

  return createPortal(
    <section id="approved-eromman-visuals" className="border-y border-red-100 bg-[#fffaf7] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-red-100 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-primary shadow-sm">
            <ShieldCheck className="h-4 w-4" />
            Official eRomman GCC materials
          </span>
          <h2 className="mt-5 text-3xl font-black tracking-tight text-[#211916] sm:text-4xl lg:text-5xl">See the official GCC market-entry materials</h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            These visuals are the approved eRomman materials supplied for seller outreach and GCC market-entry communication.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-[2rem] border border-red-100 bg-white p-2 shadow-[0_28px_80px_rgba(93,13,18,0.12)] sm:p-4">
          <DriveImage image={approved.officialHero} priority className="block h-auto w-full rounded-[1.5rem] object-contain" />
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <article className="overflow-hidden rounded-[2rem] border border-red-100 bg-white shadow-[0_20px_55px_rgba(93,13,18,0.08)]">
            <div className="flex items-center gap-2 border-b border-red-100 px-5 py-4 text-sm font-black text-[#2c2421]"><ImageIcon className="h-4 w-4 text-primary" />{approved.landingHero.name}</div>
            <div className="bg-[#fffaf7] p-3 sm:p-4"><DriveImage image={approved.landingHero} className="block h-auto w-full rounded-xl object-contain" /></div>
          </article>
          <article className="overflow-hidden rounded-[2rem] border border-red-100 bg-white shadow-[0_20px_55px_rgba(93,13,18,0.08)]">
            <div className="flex items-center gap-2 border-b border-red-100 px-5 py-4 text-sm font-black text-[#2c2421]"><ImageIcon className="h-4 w-4 text-primary" />{approved.discovery.name}</div>
            <div className="bg-[#fffaf7] p-3 sm:p-4"><DriveImage image={approved.discovery} className="block h-auto w-full rounded-xl object-contain" /></div>
          </article>
          <article className="overflow-hidden rounded-[2rem] border border-red-100 bg-white shadow-[0_20px_55px_rgba(93,13,18,0.08)]">
            <div className="flex items-center gap-2 border-b border-red-100 px-5 py-4 text-sm font-black text-[#2c2421]"><ImageIcon className="h-4 w-4 text-primary" />{approved.discoveryInfographic.name}</div>
            <div className="bg-[#fffaf7] p-3 sm:p-4"><DriveImage image={approved.discoveryInfographic} className="block h-auto w-full rounded-xl object-contain" /></div>
          </article>
          <article className="overflow-hidden rounded-[2rem] border border-red-100 bg-white shadow-[0_20px_55px_rgba(93,13,18,0.08)]">
            <div className="flex items-center gap-2 border-b border-red-100 px-5 py-4 text-sm font-black text-[#2c2421]"><ImageIcon className="h-4 w-4 text-primary" />{approved.brochure.name}</div>
            <div className="bg-[#fffaf7] p-3 sm:p-4"><DriveImage image={approved.brochure} className="block h-auto w-full rounded-xl object-contain" /></div>
          </article>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[0.45fr_1.55fr] lg:items-start">
          <article className="overflow-hidden rounded-[2rem] border border-red-100 bg-white shadow-[0_20px_55px_rgba(93,13,18,0.08)]">
            <div className="flex items-center gap-2 border-b border-red-100 px-5 py-4 text-sm font-black text-[#2c2421]"><ImageIcon className="h-4 w-4 text-primary" />{approved.rollup.name}</div>
            <div className="flex justify-center bg-[#f7f1ed] p-5"><DriveImage image={approved.rollup} className="block h-auto max-h-[900px] w-auto max-w-full rounded-xl object-contain shadow-lg" /></div>
          </article>
          <article className="overflow-hidden rounded-[2rem] border border-red-100 bg-white shadow-[0_20px_55px_rgba(93,13,18,0.08)]">
            <div className="flex items-center gap-2 border-b border-red-100 px-5 py-4 text-sm font-black text-[#2c2421]"><ImageIcon className="h-4 w-4 text-primary" />{approved.officialHero.name}</div>
            <div className="bg-[#fffaf7] p-3 sm:p-4"><DriveImage image={approved.officialHero} className="block h-auto w-full rounded-xl object-contain" /></div>
          </article>
        </div>
      </div>
    </section>,
    target,
  )
}
