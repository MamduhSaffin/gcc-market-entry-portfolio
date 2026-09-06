import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { EROMMAN_LINKS } from "@/lib/links"

type Plan = {
  name: string
  tier: string
  blurb: string
  price: string
  normalPrice: string
  monthly?: string
  features: string[]
  featured?: boolean
}

const plans: Plan[] = [
  {
    name: "Silver",
    tier: "Starter Package",
    blurb: "Best for new sellers starting their Middle East journey.",
    price: "RM645",
    normalPrice: "RM1,290",
    monthly: "≈ RM54/month",
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
    blurb: "Best for growing brands and SMEs that want more localisation and campaign support.",
    price: "RM1,645",
    normalPrice: "RM3,290",
    monthly: "≈ RM137/month",
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
    blurb: "Best for established brands seeking stronger regional expansion support.",
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
    blurb: "Best for larger operations requiring a tailored regional package.",
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
          <h2 className="mt-3 text-balance font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
            A lighter way to start exploring the Middle East market
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            The September offer provides 50% off the published package prices plus 8 extra months of membership, giving a total membership period of 20 months. Valid until 30 September 2026.
          </p>
        </div>

        <div className="mt-8 rounded-2xl border border-primary/20 bg-primary p-5 text-primary-foreground sm:flex sm:items-center sm:justify-between sm:gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">September promotion</p>
            <p className="mt-1 font-serif text-2xl font-semibold">50% off + 8 extra months</p>
          </div>
          <div className="mt-3 sm:mt-0 sm:text-right">
            <p className="font-semibold">Total membership: 20 months</p>
            <p className="text-sm text-primary-foreground/70">Valid until 30 September 2026</p>
          </div>
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
              <h3 className="mt-1 font-serif text-2xl font-semibold">{plan.name}</h3>
              <p className="mt-3 min-h-[4.5rem] text-sm leading-relaxed text-muted-foreground">{plan.blurb}</p>

              <div className="mt-5">
                <p className="font-serif text-3xl font-semibold">{plan.price}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Normal: <span className={plan.normalPrice.startsWith("RM") ? "line-through" : ""}>{plan.normalPrice}</span>
                </p>
                {plan.monthly && (
                  <p className="mt-2 text-sm font-semibold text-primary">{plan.monthly}</p>
                )}
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
                render={<a href={EROMMAN_LINKS.sellerSupportWhatsapp} target="_blank" rel="noopener noreferrer" />}
                variant={plan.featured ? "default" : "outline"}
                className="mt-7 w-full rounded-full"
              >
                Ask About This Plan
              </Button>
            </article>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-border bg-card p-5 text-sm leading-relaxed text-muted-foreground">
          <strong className="text-foreground">Annual subscription applies.</strong> The monthly figures shown for Silver and Gold are simple annual-cost equivalents. If one-shot payment is difficult, payment arrangements can be discussed with the seller support team.
        </div>
      </div>
    </section>
  )
}
