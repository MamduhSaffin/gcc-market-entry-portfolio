"use client"

import { useEffect } from "react"

export function HeroVisualUpgrade() {
  useEffect(() => {
    const upgrade = () => {
      const image = document.querySelector<HTMLImageElement>('img[src*="/images/gcc-hero.png"]')
      if (!image || image.dataset.erommanHeroUpgraded === "true") return Boolean(image)

      image.dataset.erommanHeroUpgraded = "true"

      // Keep the original GCC hero artwork. The previous version replaced it
      // with a separate WEBP asset that could render as an empty/partial card.
      image.alt = "eRomman GCC Market Entry — bridging Malaysian brands to Middle East consumers"
      image.className = "block h-auto w-full object-contain"
      image.style.width = "100%"
      image.style.height = "auto"
      image.style.objectFit = "contain"
      image.style.objectPosition = "center"

      const frame = image.parentElement
      if (frame) {
        frame.style.background = "#fffaf7"
        frame.style.height = "auto"
        frame.style.minHeight = "0"

        // Keep the visual clean so no overlay covers any part of the artwork.
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
