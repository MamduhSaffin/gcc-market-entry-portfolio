"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { EROMMAN_LINKS } from "@/lib/links"
import { SITE_BASE_PATH } from "@/lib/site"

const links = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Seller Support", href: "#support" },
  { label: "Plans", href: "#pricing" },
  { label: "Seller Fees", href: "#fees" },
  { label: "FAQ", href: "#faq" },
]

export function SiteNavbar() {
  const [open, setOpen] = useState(false)
  const homeHref = (SITE_BASE_PATH || "") + "/"

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a href={homeHref} className="flex shrink-0 items-center" aria-label="eRomman seller guide home">
          <img
            src={SITE_BASE_PATH + "/images/eromman-logo.png"}
            alt="eRomman"
            width={1157}
            height={238}
            className="h-8 w-auto sm:h-9"
          />
        </a>

        <ul className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={EROMMAN_LINKS.sellerLogin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Seller Login
          </a>
          <Button
            nativeButton={false}
            render={<a href={EROMMAN_LINKS.sellerSupportWhatsapp} target="_blank" rel="noopener noreferrer" />}
            className="rounded-full px-5"
          >
            Check My Products
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border/70 bg-background md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 sm:px-6">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <Button
                nativeButton={false}
                render={
                  <a
                    href={EROMMAN_LINKS.sellerSupportWhatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                  />
                }
                className="w-full rounded-full"
              >
                Check My Products
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
