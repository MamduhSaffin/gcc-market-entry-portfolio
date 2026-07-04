const stats = [
  { value: "50M+", label: "GCC population reach" },
  { value: "9", label: "Brands in pipeline" },
  { value: "High", label: "Market opportunity" },
  { value: "Growing", label: "Wellness demand" },
]

export function StatsSection() {
  return (
    <section id="insights" className="bg-primary py-16 text-primary-foreground lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center sm:text-left">
              <p className="font-serif text-4xl font-medium tracking-tight lg:text-5xl">{stat.value}</p>
              <p className="mt-2 text-sm uppercase tracking-wide text-primary-foreground/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
