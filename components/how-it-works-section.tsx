import { Box, PackageCheck, ShoppingCart, Store, Truck } from "lucide-react"

const steps = [
  { icon: Store, title: "Upload", description: "Provide your products and basic information." },
  { icon: Box, title: "List", description: "Products are displayed on eRomman with marketplace support." },
  { icon: ShoppingCart, title: "Order", description: "A Middle East customer places an order." },
  { icon: PackageCheck, title: "Prepare", description: "Pack the product using your normal process." },
  { icon: Truck, title: "Deliver", description: "The order is collected or shipped and delivered to the customer." },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">How it works</p>
          <h2 className="mt-3 text-balance font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
            A normal marketplace flow, focused on Middle East customers
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            You keep operating in Malaysia. eRomman adds another sales channel and supports the cross-border order journey.
          </p>
        </div>

        <ol className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map(({ icon: Icon, title, description }, index) => (
            <li key={title} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="font-serif text-3xl font-semibold text-primary/25">0{index + 1}</span>
              </div>
              <h3 className="mt-5 font-serif text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
            </li>
          ))}
        </ol>

        <div className="mt-8 rounded-2xl border border-primary/15 bg-primary/5 p-5 text-center">
          <p className="font-semibold text-primary">Seller continues running the business as usual in Malaysia.</p>
        </div>
      </div>
    </section>
  )
}
