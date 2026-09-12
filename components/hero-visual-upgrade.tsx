"use client"

import { useEffect } from "react"
import { SITE_BASE_PATH } from "@/lib/site"

export function HeroVisualUpgrade() {
  useEffect(() => {
    const requestedHero = `${SITE_BASE_PATH}/images/official/eromman-gcc-bridge-hero.webp`
    const requestedDiscovery = `${SITE_BASE_PATH}/images/official/eromman-consumer-discovery-hq.webp`

    const upgradeHero = (image: HTMLImageElement) => {
      if (image.dataset.erommanRequestedVisual === "hero") return
      image.dataset.erommanRequestedVisual = "hero"
      image.src = requestedHero
      image.alt = "eRomman GCC market entry — bridging Malaysian brands to Middle East customers"
      image.decoding = "async"
      image.fetchPriority = "high"
      image.style.width = "100%"
      image.style.height = "auto"
      image.style.display = "block"
      image.style.objectFit = "contain"
      image.style.background = "#ffffff"

      const frame = image.parentElement
      if (!frame) return
      frame.style.background = "#ffffff"

      Array.from(frame.children).forEach((child) => {
        if (child !== image && child instanceof HTMLElement && child.className.includes("absolute")) {
          child.style.display = "none"
        }
      })
    }

    const upgradeDiscovery = (image: HTMLImageElement) => {
      if (image.dataset.erommanRequestedVisual === "discovery") return
      image.dataset.erommanRequestedVisual = "discovery"
      image.src = requestedDiscovery
      image.alt = "How GCC consumers discover products through eRomman market-entry support"
      image.loading = "lazy"
      image.decoding = "async"
      image.style.width = "100%"
      image.style.height = "auto"
      image.style.display = "block"
      image.style.objectFit = "contain"
      image.style.background = "#ffffff"
    }

    const upgrade = () => {
      document.querySelectorAll<HTMLImageElement>('img[src*="/images/gcc-hero.png"], img[src*="/images/official/eromman-gcc-bridge-hero.webp"]').forEach(upgradeHero)
      document.querySelectorAll<HTMLImageElement>('img[src*="/images/gcc-cta.png"], img[src*="/images/official/eromman-consumer-discovery-hq.webp"]').forEach(upgradeDiscovery)
    }

    upgrade()
    const observer = new MutationObserver(upgrade)
    observer.observe(document.body, { childList: true, subtree: true })
    return () => observer.disconnect()
  }, [])

  return null
}
