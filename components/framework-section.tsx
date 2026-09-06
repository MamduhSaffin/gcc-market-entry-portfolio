const steps = [
  {
    number: "01",
    title: "Visibility",
    description: "Establish marketplace presence and improve product discoverability among target GCC consumers.",
  },
  {
    number: "02",
    title: "Awareness",
    description: "Build brand awareness through marketplace exposure, digital campaigns and targeted consumer outreach.",
  },
  {
    number: "03",
    title: "Engagement",
    description: "Strengthen purchase consideration through continuous engagement and marketplace activity.",
  },
  {
    number: "04",
    title: "Market Validation",
    description: "Evaluate market demand, consumer response and product performance to identify scalable opportunities.",
  },
  {
    number: "05",
    title: "Expansion",
    description: "Scale validated products across GCC markets through a structured, sustainable growth strategy.",
  },
]

export function FrameworkSection() {
  return (
    <section id="framework" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">The eRomman approach</p>
          <h2 className="mt-3 text-balance font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            A structured GCC market-entry framework
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Move from initial marketplace presence to validated expansion rather than treating cross-border growth as a one-step listing exercise.
          </p>
        </div>

        <ol className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step) => (
            <li key={step.number} className="relative rounded-2xl border border-border bg-card p-6">
              <span className="font-serif text-4xl font-semibold text-primary/35">{step.number}</span>
              <h3 className="mt-4 font-serif text-xl font-semibold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
            </li>
          ))}
        </ol>

        <div className="mt-10 rounded-2xl border border-primary/15 bg-primary/5 p-6">
          <p className="font-semibold text-primary">Start small → test the market → build orders → scale up</p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Sellers do not need to list every product at once. A few suitable SKUs can be used to test customer response before expanding the range.
          </p>
        </div>
      </div>
    </section>
  )
}
