"use client"

import { useEffect } from "react"
import { SITE_BASE_PATH } from "@/lib/site"

export function HeroVisualUpgrade() {
  useEffect(() => {
    const requestedHero = `${SITE_BASE_PATH}/images/official/eromman-gcc-bridge-hero.webp`
    const requestedDiscovery = `${SITE_BASE_PATH}/images/official/eromman-consumer-discovery-hq.webp`

    const upgrade = () => {
      let found = false

      document.querySelectorAll<HTMLImageElement>('img[src*="/images/gcc-hero.png"]').forEach((image) => {
        found = true
        if (image.dataset.erommanRequestedVisual === "hero") return
        image.dataset.erommanRequestedVisual = "hero"
        image.src = requestedHero
        image.style.objectFit = "contain"
        image.style.background = "#ffffff"
      })

      document.querySelectorAll<HTMLImageElement>('img[src*="/images/gcc-cta.png"]').forEach((image) => {
        found = true
        if (image.dataset.erommanRequestedVisual === "discovery") return
        image.dataset.erommanRequestedVisual = "discovery"
        image.src = requestedDiscovery
        image.style.objectFit = "contain"
        image.style.background = "#ffffff"
      })

      return found
    }

    upgrade()

    const observer = new MutationObserver(() => upgrade())
    observer.observe(document.body, { childList: true, subtree: true })

    return () => observer.disconnect()
  }, [])

  return null
}
