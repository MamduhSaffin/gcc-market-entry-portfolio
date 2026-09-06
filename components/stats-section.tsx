const stats = [
  { value: "1,300+", label: "Sellers" },
  { value: "250,000+", label: "SKUs" },
  { value: "9M+", label: "Campaign views" },
  { value: "MATRADE", label: "Strategic partner" },
]

export function StatsSection() {
  return (
    <section id="ecosystem" className="bg-primary py-16 text-primary-foreground lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">eRomman ecosystem snapshot</p>
          <h2 className="mt-2 font-serif text-2xl font-semibold sm:text-3xl">
            Existing marketplace infrastructure for regional growth
          </h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/8 p-5">
              <p className="font-serif text-4xl font-semibold tracking-tight lg:text-5xl">{stat.value}</p>
              <p className="mt-2 text-sm uppercase tracking-wide text-primary-foreground/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
