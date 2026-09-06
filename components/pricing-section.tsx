import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { EROMMAN_LINKS } from "@/lib/links"

type Plan = {
  name: string
  tier: string
  blurb: string
  price: string
  normalPrice: string
  features: string[]
  featured?: boolean
}

const plans: Plan[] = [
  {
    name: "Silver",
    tier: "Starter Package",
    blurb: "Best for new sellers starting their GCC journey.",
    price: "RM645",
    normalPrice: "RM1,290",
    features: [
      "Seller onboarding",
      "Middle East marketplace access",
      "Product listing",
      "Marketplace opportunity review",
      "Product exposure",
    ],
  },
  {
    name: "Gold",
    tier: "Growth Package",
    blurb: "Best for growing brands and SMEs.",
    price: "RM1,645",
    normalPrice: "RM3,290",
    features: [
      "Everything in Silver",
      "Arabic localisation",
      "Arabic SEO support",
      "Monthly campaign participation",
      "Enhanced seller support",
    ],
    featured: true,
  },
  {
    name: "Platinum",
    tier: "Visibility Growth Package",
    blurb: "Best for established brands seeking regional expansion.",
    price: "RM5,000",
    normalPrice: "RM10,000",
    features: [
      "Everything in Gold",
      "Marketing campaign inclusion",
      "Dedicated seller support",
      "Premium seller features",
      "Visibility growth support",
    ],
  },
  {
    name: "Pro Platinum",
    tier: "Corporate / Enterprise",
    blurb: "Best for large-scale operations requiring a tailored package.",
    price: "Custom package",
    normalPrice: "Contact us",
    features: [
      "Everything in Platinum",
      "Priority marketing opportunities",
      "Arab brand manager",
      "AI+ content guidance",
      "Multi-platform support",
    ],
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="border-t border-border bg-card/40 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Hari Malaysia Special — September 2026</p>
          <h2 className="mt-3 text-balance font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Current eRomman annual subscription plans
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            The September promotion offers 50% off the listed packages plus 8 extra months of membership, giving a total of 20 months. Valid until 30 September 2026.
          </p>
        </div>

        <div className="mt-8 rounded-2xl border border-primary/20 bg-primary p-5 text-primary-foreground sm:flex sm:items-center sm:justify-between sm:gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">September promotion</p>
            <p className="mt-1 font-serif text-2xl font-semibold">50% off + 8 months extra membership</p>
          </div>
          <p className="mt-3 text-sm text-primary-foreground/75 sm:mt-0">Total membership: 20 months</p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-4">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={
                "relative flex flex-col rounded-2xl border p-6 " +
                (plan.featured
                  ? "border-primary bg-card shadow-lg shadow-primary/10 ring-1 ring-primary"
                  : "border-border bg-card")
              }
            >
              {plan.featured && (
                <span className="absolute -top-3 left-6 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  Most popular
                </span>
              )}
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">{plan.tier}</p>
              <h3 className="mt-1 font-serif text-2xl font-semibold text-foreground">{plan.name}</h3>
              <p className="mt-3 min-h-[3rem] text-sm leading-relaxed text-muted-foreground">{plan.blurb}</p>

              <div className="mt-5">
                <p className="font-serif text-3xl font-semibold text-foreground">{plan.price}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Normal: <span className={plan.normalPrice.startsWith("RM") ? "line-through" : ""}>{plan.normalPrice}</span>
                </p>
              </div>

              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                nativeButton={false}
                render={<a href={EROMMAN_LINKS.pricing} target="_blank" rel="noopener noreferrer" />}
                variant={plan.featured ? "default" : "outline"}
                className="mt-7 w-full rounded-full"
              >
                View Pricing
              </Button>
            </article>
          ))}
        </div>

        <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
          Commission is separate from the subscription plan and is charged only after a successful sale. Typical rates depend on product category; use the calculator below for an estimate.
        </p>
      </div>
    </section>
  )
}
