import { Check, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"

type Plan = {
  name: string
  tier: string
  blurb: string
  price: string
  priceNote?: string
  featured?: boolean
}

const plans: Plan[] = [
  {
    name: "Silver",
    tier: "Starter",
    blurb: "Sellers preparing their store for the Middle East market.",
    price: "RM1,290",
    priceNote: "Promo: RM645 / yr",
  },
  {
    name: "Gold",
    tier: "Growth",
    blurb: "Sellers ready for regular campaigns and localized content.",
    price: "RM3,290",
    priceNote: "per year",
    featured: true,
  },
  {
    name: "Platinum",
    tier: "Marketplace",
    blurb: "Brands expanding directly to Amazon and Noon platforms.",
    price: "RM5,000",
    priceNote: "per year",
  },
  {
    name: "Pro Platinum",
    tier: "Fully Managed",
    blurb: "Brands needing premium, dedicated regional support.",
    price: "RM10,000",
    priceNote: "per year or custom",
  },
]

type FeatureValue = string | boolean

const features: { label: string; values: [FeatureValue, FeatureValue, FeatureValue, FeatureValue] }[] = [
  { label: "Product upload limit", values: ["100 products", "1,000 products", "1,000 products", "Unlimited"] },
  { label: "Arabic localization & SEO", values: ["Basic", true, true, "Premium"] },
  { label: "Storefront setup", values: ["Basic", true, "Enhanced", "Premium"] },
  { label: "Monthly sales campaigns", values: [false, true, true, true] },
  { label: "Organic social content", values: [false, true, true, true] },
  { label: "Arab KOL support", values: [false, false, true, true] },
  { label: "Amazon & Noon support", values: [false, false, true, "Advanced"] },
  { label: "Pickup fee waiver", values: [false, true, true, true] },
  { label: "Dedicated brand manager", values: [false, false, false, true] },
]

function Cell({ value }: { value: FeatureValue }) {
  if (value === true) {
    return <Check className="mx-auto h-4 w-4 text-primary" aria-label="Included" />
  }
  if (value === false) {
    return <Minus className="mx-auto h-4 w-4 text-muted-foreground/40" aria-label="Not included" />
  }
  return <span className="text-sm text-foreground">{value}</span>
}

export function PricingSection() {
  return (
    <section id="pricing" className="border-t border-border py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Annual Subscription Plans 2026</p>
          <h2 className="mt-3 text-balance font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
            Choose your level of managed support
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Flexible managed service plans designed to scale your business across GCC marketplaces &mdash; from initial
            setup to fully managed, multi-channel expansion.
          </p>
        </div>

        {/* Plan cards */}
        <div className="mt-14 grid gap-6 lg:grid-cols-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border p-6 ${
                plan.featured
                  ? "border-primary bg-card shadow-lg shadow-primary/5 ring-1 ring-primary"
                  : "border-border bg-card"
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-6 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  Most popular
                </span>
              )}
              <p className="text-xs font-semibold uppercase tracking-wider text-accent-foreground">{plan.tier}</p>
              <h3 className="mt-1 font-serif text-2xl font-medium text-foreground">{plan.name}</h3>
              <p className="mt-3 min-h-[3rem] text-sm leading-relaxed text-muted-foreground">{plan.blurb}</p>
              <div className="mt-5">
                <span className="font-serif text-3xl font-medium text-foreground">{plan.price}</span>
                {plan.priceNote && <p className="mt-1 text-sm text-muted-foreground">{plan.priceNote}</p>}
              </div>
              <Button
                nativeButton={false}
                render={<a href="#contact" />}
                variant={plan.featured ? "default" : "outline"}
                className="mt-6 w-full rounded-full"
              >
                Get started
              </Button>
            </div>
          ))}
        </div>

        {/* Feature comparison table */}
        <div className="mt-12 overflow-x-auto rounded-2xl border border-border bg-card">
          <table className="w-full min-w-[720px] border-collapse text-left">
            <caption className="sr-only">Plan feature comparison</caption>
            <thead>
              <tr className="border-b border-border">
                <th scope="col" className="px-6 py-4 text-sm font-semibold text-foreground">
                  Features
                </th>
                {plans.map((plan) => (
                  <th key={plan.name} scope="col" className="px-4 py-4 text-center text-sm font-semibold text-foreground">
                    {plan.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feature, i) => (
                <tr key={feature.label} className={i % 2 === 1 ? "bg-secondary/40" : ""}>
                  <th scope="row" className="px-6 py-3 text-sm font-medium text-muted-foreground">
                    {feature.label}
                  </th>
                  {feature.values.map((value, idx) => (
                    <td key={idx} className="px-4 py-3 text-center">
                      <Cell value={value} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-6 text-sm text-muted-foreground">
          All plans include store setup, order pickup coordination, and regional support. Prices exclude SST where
          applicable. Not sure which plan fits? <a href="#contact" className="font-medium text-primary underline underline-offset-4">Speak with our team</a> to assess your GCC market readiness.
        </p>
      </div>
    </section>
  )
}
