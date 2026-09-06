const steps = [
  { number: "01", title: "Start", description: "Select a manageable number of suitable products." },
  { number: "02", title: "Test", description: "Introduce the products to Middle East customers and marketplace activity." },
  { number: "03", title: "Learn", description: "Observe customer response, demand signals and consumer behaviour." },
  { number: "04", title: "Validate", description: "Use evidence to identify products with stronger market potential." },
  { number: "05", title: "Scale", description: "Expand the range and market activity based on validated opportunity." },
]

export function FrameworkSection() {
  return (
    <section id="framework" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Evidence before expansion</p>
          <h2 className="mt-3 text-balance font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
            Start small. Test the market. Scale what works.
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            You do not need to list every product from day one. eRomman's market-validation framework is designed to reduce the commitment of testing a new region.
          </p>
        </div>

        <ol className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step) => (
            <li key={step.number} className="relative rounded-2xl border border-border bg-card p-6">
              <span className="font-serif text-4xl font-semibold text-primary/30">{step.number}</span>
              <h3 className="mt-4 font-serif text-xl font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
            </li>
          ))}
        </ol>

        <div className="mt-10 rounded-2xl border border-primary/15 bg-primary/5 p-6">
          <p className="font-semibold text-primary">How customers move toward purchase</p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Arabic content → awareness → engagement → marketplace discovery → purchase → repeat purchase.
          </p>
        </div>
      </div>
    </section>
  )
}
