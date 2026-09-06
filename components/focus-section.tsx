import { BarChart3, Globe2, Languages, Megaphone, Route, Truck } from "lucide-react"

const items = [
  {
    icon: Languages,
    title: "Arabic Localisation",
    description: "Arabic-first product listing support, translation and localisation for GCC-facing marketplace content.",
  },
  {
    icon: Globe2,
    title: "Marketplace Visibility",
    description: "Improve product discoverability and brand exposure among target consumers in the Gulf.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing Support",
    description: "Campaign participation and targeted promotional support to build awareness and engagement.",
  },
  {
    icon: BarChart3,
    title: "Market Validation",
    description: "Assess demand, customer response and product performance before scaling further.",
  },
  {
    icon: Route,
    title: "Expansion Planning",
    description: "Use validated demand to decide which products and GCC markets deserve the next stage of investment.",
  },
  {
    icon: Truck,
    title: "Cross-Border Support",
    description: "Order coordination, logistics support and Fulfilled by eRomman pathways for suitable sellers.",
  },
]

export function FocusSection() {
  return (
    <section id="focus" className="border-t border-border bg-card/40 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Seller support</p>
          <h2 className="mt-3 text-balance font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            What eRomman helps sellers do
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Keep the seller focused on the product while eRomman supports the market-facing work required to reach GCC customers.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, description }) => (
            <article key={title} className="group bg-card p-8 transition-colors hover:bg-secondary">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-serif text-xl font-semibold text-foreground">{title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
