import { ExternalLink, Network } from "lucide-react"
import { EROMMAN_LINKS } from "@/lib/links"

const platforms = [
  "eRomman",
  "Amazon Saudi Arabia",
  "Amazon UAE",
  "Noon Saudi Arabia",
  "Noon UAE",
  "Carrefour Saudi Arabia",
  "Trendyol",
  "SHEIN KSA & UAE",
]

export function MarketplaceSection() {
  return (
    <section className="border-y border-border bg-card/45 py-20 lg:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
        <div>
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <Network className="h-6 w-6" />
          </div>
          <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-primary">Marketplace ecosystem</p>
          <h2 className="mt-3 text-balance font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
            One registration can open multiple marketplace opportunities
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            eRomman acts as a central gateway, reviewing suitable products for exposure across multiple Middle East marketplace environments.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Platform availability is subject to product suitability, category requirements, documentation and the relevant marketplace approval process.
          </p>
          <a
            href={EROMMAN_LINKS.sell}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary underline underline-offset-4"
          >
            Learn about selling on eRomman
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {platforms.map((platform, index) => (
            <div
              key={platform}
              className={index === 0
                ? "rounded-2xl border border-primary bg-primary p-5 text-primary-foreground shadow-md"
                : "rounded-2xl border border-border bg-card p-5 shadow-sm"}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.14em] opacity-60">
                {index === 0 ? "Core marketplace" : "Marketplace opportunity"}
              </p>
              <p className="mt-2 font-serif text-xl font-semibold">{platform}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
