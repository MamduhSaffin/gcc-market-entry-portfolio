const stats = [
  { value: "1,300", label: "Sellers onboarded" },
  { value: "250,000", label: "SKUs listed" },
  { value: "9M+", label: "Campaign views" },
  { value: "MATRADE", label: "Strategic partner" },
]

const offices = ["Kuala Lumpur", "Jeddah", "Dubai", "Jakarta"]

export function StatsSection() {
  return (
    <section id="ecosystem" className="bg-primary py-16 text-primary-foreground lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">eRomman ecosystem snapshot</p>
          <h2 className="mt-2 font-serif text-2xl font-semibold sm:text-3xl">
            Existing marketplace infrastructure for regional growth
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-primary-foreground/75">
            eRomman supports sellers with marketplace access, Arabic localisation, market-entry support and logistics coordination across its regional ecosystem.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/8 p-5">
              <p className="font-serif text-4xl font-semibold tracking-tight">{stat.value}</p>
              <p className="mt-2 text-sm uppercase tracking-wide text-primary-foreground/70">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-primary-foreground/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-medium">Regional presence</p>
          <div className="flex flex-wrap gap-2">
            {offices.map((office) => (
              <span key={office} className="rounded-full border border-primary-foreground/20 px-3 py-1.5 text-xs font-medium text-primary-foreground/85">
                {office}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
