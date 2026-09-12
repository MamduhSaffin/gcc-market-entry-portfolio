"use client"

import { useEffect } from "react"

export function OfficialVisualPlacement() {
  useEffect(() => {
    const arrange = () => {
      const main = document.querySelector("main")
      const showcase = document.querySelector<HTMLElement>("#official-eromman-materials")
      if (!main || !showcase) return false

      const sections = Array.from(main.children).filter((node): node is HTMLElement => node instanceof HTMLElement && node.tagName === "SECTION")
      const trustSection = sections[1]
      if (trustSection && showcase.previousElementSibling !== trustSection) {
        trustSection.insertAdjacentElement("afterend", showcase)
      }

      showcase.querySelectorAll<HTMLImageElement>("img").forEach((image, index) => {
        image.decoding = "async"
        image.loading = index === 0 ? "eager" : "lazy"
        image.sizes = index === 1 ? "(max-width: 1024px) 92vw, 34vw" : "(max-width: 1024px) 92vw, 70vw"
        image.style.maxWidth = "100%"
        image.style.height = "auto"
      })

      return true
    }

    if (arrange()) return
    const observer = new MutationObserver(() => {
      if (arrange()) observer.disconnect()
    })
    observer.observe(document.body, { childList: true, subtree: true })
    return () => observer.disconnect()
  }, [])

  return null
}
