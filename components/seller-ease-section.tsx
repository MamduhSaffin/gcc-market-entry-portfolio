import { BadgeCheck, Boxes, Building2, Package, ShieldCheck } from "lucide-react"

const easy = [
  { icon: BadgeCheck, title: "Continue selling as usual", description: "No need to redesign your current Malaysia business model." },
  { icon: Boxes, title: "Keep stock in Malaysia", description: "You do not need to relocate inventory just to test the market." },
  { icon: Package, title: "Use your normal packing process", description: "Prepare orders using your existing operational routine." },
  { icon: Building2, title: "No Middle East office required", description: "Explore the market without opening your own regional office first." },
]

const control = ["Products", "Pricing", "Inventory", "Documentation", "Brand positioning"]

export function SellerEaseSection() {
  return (
    <section className="border-y border-border bg-card/45 py-20 lg:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Minimal change for the seller</p>
          <h2 className="mt-3 text-balance font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
            Try a new market without disrupting your current business
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            eRomman is designed to let sellers explore Middle East demand while keeping their core operations in Malaysia.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {easy.map(({ icon: Icon, title, description }) => (
              <article key={title} className="rounded-2xl border border-border bg-card p-5">
                <Icon className="h-5 w-5 text-primary" />
                <h3 className="mt-3 font-semibold">{title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{description}</p>
              </article>
            ))}
          </div>
        </div>

        <aside className="rounded-3xl border border-primary/15 bg-primary p-6 text-primary-foreground sm:p-8">
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-7 w-7 text-accent" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground/70">Seller control & brand ownership</p>
              <h3 className="mt-1 font-serif text-2xl font-semibold">You stay in control of your brand.</h3>
            </div>
          </div>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {control.map((item) => (
              <div key={item} className="rounded-xl border border-primary-foreground/15 bg-primary-foreground/10 px-4 py-3 text-sm font-medium">
                {item}
              </div>
            ))}
          </div>

          <div className="mt-7 rounded-2xl bg-white p-5 text-foreground">
            <p className="text-sm font-semibold text-primary">eRomman supports the market-facing work</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Marketplace access, consumer exposure, Arabic localisation, market validation and operational workflow support.
            </p>
          </div>
        </aside>
      </div>
    </section>
  )
}
