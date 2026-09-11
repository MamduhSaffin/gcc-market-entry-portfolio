"use client"

import Script from "next/script"
import { useEffect } from "react"

export function Analytics() {
  const measurementId = process.env.NEXT_PUBLIC_GA_ID

  useEffect(() => {
    if (!measurementId) return

    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null
      const anchor = target?.closest("a") as HTMLAnchorElement | null
      if (!anchor) return

      const href = anchor.getAttribute("href") || ""
      const explicit = anchor.dataset.track
      const eventName = explicit || (href.includes("wa.me/") ? "whatsapp_click" : href.startsWith("mailto:") ? "email_click" : href.startsWith("http") && !href.includes("gccmarketentry.me") ? "outbound_click" : null)
      if (!eventName) return

      const gtag = (window as typeof window & { gtag?: (...args: unknown[]) => void }).gtag
      gtag?.("event", eventName, {
        link_url: anchor.href,
        link_text: anchor.textContent?.trim().slice(0, 120) || undefined,
        page_path: window.location.pathname,
      })
    }

    document.addEventListener("click", handleClick)
    return () => document.removeEventListener("click", handleClick)
  }, [measurementId])

  if (!measurementId) return null

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`} strategy="afterInteractive" />
      <Script id="gcc-market-entry-ga" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${measurementId}', { anonymize_ip: true });`}
      </Script>
    </>
  )
}
