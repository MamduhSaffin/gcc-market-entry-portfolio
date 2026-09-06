import { ArrowRight, CheckCircle2, Globe2, Languages, Megaphone, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { EROMMAN_LINKS } from "@/lib/links"

const markets = ["Saudi Arabia", "UAE", "Kuwait", "Qatar", "Bahrain", "Oman"]

const capabilities = [
  { icon: Languages, label: "Arabic localisation" },
  { icon: Globe2, label: "Marketplace visibility" },
  { icon: Megaphone, label: "Digital marketing support" },
  { icon: Truck, label: "Cross-border coordination" },
]

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 -z-10 h-80 bg-gradient-to-b from-primary/8 to-transparent" />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-20 pt-14 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:pb-28 lg:pt-24">
        <div className="flex flex-col items-start">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Professional GCC Market Entry Portfolio
          </span>

          <h1 className="mt-6 text-balance font-serif text-4xl font-semibold leading-[1.04] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            From Malaysia to the GCC: build visibility, validate demand, scale strategically.
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            A practical portfolio of eRomman seller support for Malaysian brands, covering Arabic localisation,
            marketplace exposure, digital marketing, market validation, order coordination and GCC expansion planning.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {markets.map((market) => (
              <span
                key={market}
                className="rounded-full border border-border bg-card px-3.5 py-1.5 text-sm font-medium text-foreground shadow-sm"
              >
                {market}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button
              nativeButton={false}
              render={<a href="#framework" />}
              size="lg"
              className="rounded-full px-6"
            >
              Explore the Framework
              <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
            <Button
              nativeButton={false}
              render={
                <a href={EROMMAN_LINKS.sellerSupportWhatsapp} target="_blank" rel="noopener noreferrer" />
              }
              size="lg"
              variant="outline"
              className="rounded-full border-primary/25 px-6 text-primary"
            >
              Talk to Seller Support
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-3xl border border-primary/15 bg-primary p-6 text-primary-foreground shadow-xl shadow-primary/10 sm:p-8">
            <div className="flex items-center justify-between gap-4 border-b border-primary-foreground/20 pb-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/70">
                  Market route
                </p>
                <p className="mt-1 font-serif text-3xl font-semibold">Malaysia → GCC</p>
              </div>
              <Globe2 className="h-10 w-10 text-accent" />
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {capabilities.map(({ icon: Icon, label }) => (
                <div key={label} className="rounded-2xl bg-primary-foreground/10 p-4">
                  <Icon className="h-5 w-5 text-accent" />
                  <p className="mt-3 text-sm font-medium">{label}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl bg-white p-5 text-foreground">
              <p className="flex items-start gap-2 text-sm leading-relaxed">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                Start with a few SKUs, test customer response, then expand based on validated demand.
              </p>
            </div>
          </div>
          <div className="absolute -bottom-5 -left-3 rounded-xl border border-border bg-card px-5 py-4 shadow-lg sm:-left-6">
            <p className="font-serif text-2xl font-semibold text-primary">6 GCC markets</p>
            <p className="text-xs uppercase tracking-wide text-muted-foreground">Target expansion coverage</p>
          </div>
        </div>
      </div>
    </section>
  )
}
