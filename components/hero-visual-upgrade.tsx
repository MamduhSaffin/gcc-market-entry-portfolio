"use client"

import { useEffect } from "react"

export function HeroVisualUpgrade() {
  useEffect(() => {
    const makePanel = (kind: "hero" | "discovery") => {
      const panel = document.createElement("div")
      panel.dataset.erommanBrandedPanel = kind
      panel.style.width = "100%"
      panel.style.boxSizing = "border-box"
      panel.style.borderRadius = "1.5rem"
      panel.style.border = "1px solid #f2c9cb"
      panel.style.background = "linear-gradient(145deg,#fff 0%,#fff8f7 54%,#fdf1ef 100%)"
      panel.style.padding = "clamp(22px,5vw,46px)"
      panel.style.boxShadow = "0 18px 45px rgba(110,10,18,.09)"
      panel.style.color = "#2b2020"

      if (kind === "hero") {
        panel.innerHTML = `
          <div style="display:flex;justify-content:center;margin-bottom:24px">
            <img src="/images/eromman-logo.png" alt="eRomman" style="display:block;width:min(260px,72%);height:auto;object-fit:contain" />
          </div>
          <div style="text-align:center;font-size:12px;font-weight:800;letter-spacing:.18em;text-transform:uppercase;color:#b3131b">GCC Market Entry</div>
          <div style="margin:12px auto 0;max-width:620px;text-align:center;font-size:clamp(25px,5vw,42px);line-height:1.08;font-weight:900;color:#261c1b">Malaysia → eRomman → GCC</div>
          <div style="margin:16px auto 0;max-width:650px;text-align:center;font-size:clamp(14px,2vw,17px);line-height:1.6;color:#6f5e5b">A structured route for Malaysian brands to test, localise and grow across Saudi Arabia, UAE and the wider Gulf market.</div>
          <div style="display:flex;flex-wrap:wrap;justify-content:center;gap:9px;margin-top:24px">
            ${["Saudi Arabia","UAE","Kuwait","Qatar","Bahrain","Oman"].map((m)=>`<span style="border:1px solid #efc8cb;background:#fff;padding:8px 12px;border-radius:999px;font-size:12px;font-weight:800;color:#8d1118">${m}</span>`).join("")}
          </div>`
      } else {
        panel.innerHTML = `
          <div style="text-align:center;font-size:12px;font-weight:800;letter-spacing:.18em;text-transform:uppercase;color:#b3131b">How GCC customers discover brands</div>
          <div style="margin:10px auto 0;max-width:620px;text-align:center;font-size:clamp(23px,4vw,34px);line-height:1.15;font-weight:900;color:#261c1b">Visibility built around real market-entry work</div>
          <div style="display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;margin-top:24px">
            ${[
              ["Arabic Localisation","Listings adapted for Arabic-speaking customers"],
              ["Marketplace Access","Suitable channels reviewed by product fit"],
              ["Content & Campaigns","Brand visibility supported through digital activity"],
              ["Seller Support","A clear point of contact throughout the process"],
            ].map(([h,b])=>`<div style="min-width:0;border:1px solid #f0d2d3;background:#fff;border-radius:18px;padding:16px"><div style="font-size:14px;font-weight:900;color:#a81118">${h}</div><div style="margin-top:6px;font-size:12px;line-height:1.5;color:#74635f">${b}</div></div>`).join("")}
          </div>`
      }
      return panel
    }

    const replaceImage = (selector: string, kind: "hero" | "discovery") => {
      const image = document.querySelector<HTMLImageElement>(selector)
      if (!image || image.dataset.erommanHeroUpgraded === "true") return Boolean(document.querySelector(`[data-eromman-branded-panel="${kind}"]`))

      image.dataset.erommanHeroUpgraded = "true"
      const parent = image.parentElement
      const panel = makePanel(kind)

      if (kind === "hero" && parent) {
        parent.replaceChildren(panel)
        parent.style.background = "transparent"
        parent.style.height = "auto"
        parent.style.minHeight = "0"
        parent.style.overflow = "visible"
      } else {
        image.replaceWith(panel)
      }
      return true
    }

    const upgrade = () => {
      const heroDone = replaceImage('img[src*="/images/gcc-hero.png"]', "hero")
      const discoveryDone = replaceImage('img[src*="/images/gcc-cta.png"]', "discovery")
      return heroDone && discoveryDone
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
