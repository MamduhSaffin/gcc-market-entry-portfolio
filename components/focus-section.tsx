import { BarChart3, Globe2, Headphones, Languages, Megaphone, Truck } from "lucide-react"

const items = [
  {
    icon: Languages,
    title: "Arabic Marketplace & Localisation",
    description: "Arabic-first marketplace presentation, product listing support, translation and localisation.",
  },
  {
    icon: Globe2,
    title: "Middle East Customer Exposure",
    description: "Create another route for your products to be discovered by customers across target GCC markets.",
  },
  {
    icon: Megaphone,
    title: "Marketing & Promotion",
    description: "Support may include Arabic SEO, social campaigns, email, content, display advertising and seasonal promotions.",
  },
  {
    icon: BarChart3,
    title: "Market Validation",
    description: "Start with suitable SKUs, observe response and use market evidence before expanding further.",
  },
  {
    icon: Headphones,
    title: "Customer & Seller Support",
    description: "Support for marketplace coordination, customer-facing communication and seller guidance.",
  },
  {
    icon: Truck,
    title: "Order & Logistics Coordination",
    description: "Cross-border order coordination, pickup options and fulfilment support for suitable sellers.",
  },
]

export function FocusSection() {
  return (
    <section id="support" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">How eRomman helps</p>
          <h2 className="mt-3 text-balance font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
            You focus on your products. eRomman helps open the market.
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            The seller journey combines marketplace access, Arabic support, visibility, promotion, customer support and cross-border coordination.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, description }) => (
            <article key={title} className="group rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-lg hover:shadow-primary/5">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-serif text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
