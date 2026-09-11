"use client"

import { useEffect } from "react"
import { SITE_BASE_PATH } from "@/lib/site"

export function HeroVisualUpgrade() {
  useEffect(() => {
    const upgrade = () => {
      const image = document.querySelector<HTMLImageElement>('img[src*="/images/gcc-hero.png"]')
      if (!image || image.dataset.erommanHeroUpgraded === "true") return Boolean(image)

      image.dataset.erommanHeroUpgraded = "true"
      image.src = `${SITE_BASE_PATH}/images/official/eromman-gcc-bridge-hero.webp`
      image.alt = "eRomman GCC Market Entry — bridging Malaysian brands to Middle East consumers"
      image.className = "block h-auto w-full object-contain"

      const frame = image.parentElement
      if (frame) {
        frame.style.background = "#fffaf7"
        frame.querySelectorAll<HTMLElement>(":scope > div").forEach((element) => {
          element.style.display = "none"
        })
      }
      return true
    }

    if (upgrade()) return

    const observer = new MutationObserver(() => {
      if (upgrade()) observer.disconnect()
    })
    observer.observe(document.body, { childList: true, subtree: true })

    return () => observer.disconnect()
  }, [])

  return null
}
