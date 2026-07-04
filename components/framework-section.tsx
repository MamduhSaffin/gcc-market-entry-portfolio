const steps = [
  {
    number: "01",
    title: "Research & Validate",
    description: "Assess category demand, competition, and regulatory fit across each GCC market.",
  },
  {
    number: "02",
    title: "Position & Localize",
    description: "Adapt brand, pricing, and messaging for Arabic-first marketplace success.",
  },
  {
    number: "03",
    title: "Launch & List",
    description: "Onboard onto eRomman's marketplace with optimized listings and logistics.",
  },
  {
    number: "04",
    title: "Scale & Optimize",
    description: "Track performance with analytics and grow through ongoing partnership support.",
  },
]

export function FrameworkSection() {
  return (
    <section id="framework" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">The framework</p>
          <h2 className="mt-3 text-balance font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
            A proven path into the Gulf
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Four deliberate stages that de-risk expansion and turn interest into sustained sales.
          </p>
        </div>

        <ol className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <li key={step.number} className="relative">
              <span className="font-serif text-5xl font-medium text-accent">{step.number}</span>
              <h3 className="mt-4 font-serif text-xl font-medium text-foreground">{step.title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
