"use client"

import { useState } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { EROMMAN_LINKS } from "@/lib/links"

const links = [
  { label: "Focus", href: "#focus" },
  { label: "Framework", href: "#framework" },
  { label: "Plans", href: "#pricing" },
  { label: "Seller Fees", href: "#fees" },
  { label: "Contact", href: "#contact" },
]

export function SiteNavbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <a
          href={EROMMAN_LINKS.home}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
          aria-label="eRomman home"
        >
          <Image
            src="/images/eromman-logo.png"
            alt="eRomman"
            width={1157}
            height={238}
            priority
            className="h-8 w-auto sm:h-9"
          />
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
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
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Seller Login
          </a>
          <Button
            nativeButton={false}
            render={<a href={EROMMAN_LINKS.sell} target="_blank" rel="noopener noreferrer" />}
            className="rounded-full px-5"
          >
            Sell on eRomman
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border/60 bg-background md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 sm:px-6">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={EROMMAN_LINKS.sellerLogin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                Seller Login
              </a>
            </li>
            <li className="pt-2">
              <Button
                nativeButton={false}
                render={
                  <a
                    href={EROMMAN_LINKS.sell}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                  />
                }
                className="w-full rounded-full"
              >
                Sell on eRomman
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
