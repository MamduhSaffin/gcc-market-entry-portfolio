import {
  ArrowRight,
  CheckCircle2,
  Globe2,
  Languages,
  PackageCheck,
  Store,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { EROMMAN_LINKS } from "@/lib/links"

const markets = ["Saudi Arabia", "UAE", "Kuwait", "Qatar", "Bahrain", "Oman"]

const sellerBenefits = [
  "Keep stock in Malaysia",
  "No GCC office needed",
  "Start with only a few SKUs",
  "Arabic marketplace support",
]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 -z-10 h-96 bg-gradient-to-b from-primary/8 to-transparent" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-20 pt-12 sm:px-6 sm:pt-16 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14 lg:px-8 lg:pb-24 lg:pt-20">
        <div className="flex min-w-0 flex-col items-start">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            <Globe2 className="h-3.5 w-3.5" />
            Sell to the Middle East with eRomman
          </span>

          <h1 className="mt-6 max-w-3xl text-balance font-serif text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-[3.55rem]">
            Add the Middle East as a new sales channel — without changing how you sell in Malaysia.
          </h1>

          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            eRomman is an Arabic-language marketplace connecting Malaysian sellers with customers in the Middle East.
            If you already sell on Shopee, Lazada or your own website, the model is familiar: keep operating in Malaysia
            while eRomman helps open another market.
          </p>

          <div className="mt-7 grid w-full max-w-2xl gap-3 sm:grid-cols-2">
            {sellerBenefits.map((item) => (
              <div key={item} className="flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium shadow-sm">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button
              nativeButton={false}
              render={<a href={EROMMAN_LINKS.sellerSupportWhatsapp} target="_blank" rel="noopener noreferrer" />}
              size="lg"
              className="rounded-full px-6"
            >
              Check If My Products Fit
              <ArrowRight className="ml-1 h-4 w-4" />
            </Button>

            <Button
              nativeButton={false}
              render={<a href="#how-it-works" />}
              size="lg"
              variant="outline"
              className="rounded-full border-primary/25 px-6 text-primary"
            >
              See How It Works
            </Button>
          </div>

          <div className="mt-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">Target Middle East markets</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {markets.map((market) => (
                <span key={market} className="rounded-full border border-border bg-card px-3.5 py-1.5 text-sm font-medium">
                  {market}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="relative min-w-0">
          <div className="rounded-3xl border border-primary/15 bg-primary p-6 text-primary-foreground shadow-xl shadow-primary/10 sm:p-8">
            <div className="flex items-start justify-between gap-4 border-b border-primary-foreground/20 pb-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/70">
                  Simple marketplace model
                </p>
                <p className="mt-1 font-serif text-2xl font-semibold sm:text-3xl">Malaysia → eRomman → Middle East customer</p>
              </div>
              <Store className="h-9 w-9 shrink-0 text-accent" />
            </div>

            <ol className="mt-6 space-y-3">
              {[
                "Seller uploads products",
                "Products are displayed on eRomman",
                "Middle East customer places an order",
                "Order is picked up from the seller",
                "Product is delivered to the customer",
              ].map((step, index) => (
                <li key={step} className="flex items-center gap-3 rounded-xl bg-primary-foreground/10 px-4 py-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-xs font-bold text-primary">
                    {index + 1}
                  </span>
                  <span className="text-sm font-medium">{step}</span>
                </li>
              ))}
            </ol>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl bg-white p-4 text-foreground">
                <Languages className="h-5 w-5 text-primary" />
                <p className="mt-2 text-sm font-semibold">Arabic support</p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">Listing, localisation and Middle East-facing content support.</p>
              </div>
              <div className="rounded-2xl bg-white p-4 text-foreground">
                <PackageCheck className="h-5 w-5 text-primary" />
                <p className="mt-2 text-sm font-semibold">Start small</p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">Test a few SKUs first, then scale based on response.</p>
              </div>
            </div>
          </div>

          <div className="mt-4 rounded-2xl border border-accent/30 bg-accent/10 px-5 py-4">
            <p className="text-sm font-semibold text-foreground">Your business model stays the same.</p>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">eRomman adds exposure to a new market while you continue running your Malaysia operations.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
