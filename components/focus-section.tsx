import { BarChart3, Target, CheckCircle2, Rocket, LineChart, Handshake } from "lucide-react"

const items = [
  {
    icon: BarChart3,
    title: "Market Research & Analysis",
    description: "Deep analysis of the GCC wellness market, consumer trends, and category opportunities.",
  },
  {
    icon: Target,
    title: "Strategic Seller Identification",
    description: "Identify Malaysian brands with strong product-market fit for GCC expansion.",
  },
  {
    icon: CheckCircle2,
    title: "Market Entry Framework",
    description: "A proven methodology for validating and entering GCC markets with confidence.",
  },
  {
    icon: Rocket,
    title: "Marketplace Access",
    description: "Direct access to eRomman's Arabic marketplace and 50M+ Gulf consumers.",
  },
  {
    icon: LineChart,
    title: "Growth Tools & Analytics",
    description: "ROI calculator, metrics dashboard, and end-to-end performance tracking.",
  },
  {
    icon: Handshake,
    title: "Partnership Support",
    description: "Dedicated business development support and ongoing partnership management.",
  },
]

export function FocusSection() {
  return (
    <section id="focus" className="border-t border-border bg-card/40 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">What we do</p>
          <h2 className="mt-3 text-balance font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
            Our business development focus
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            An integrated approach that takes brands from research to shelf across the Gulf&apos;s
            fastest-growing wellness categories.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, description }) => (
            <article key={title} className="group bg-card p-8 transition-colors hover:bg-secondary">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-serif text-xl font-medium text-foreground">{title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
