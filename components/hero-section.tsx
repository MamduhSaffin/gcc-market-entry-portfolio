import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { EROMMAN_LINKS } from "@/lib/links"

const markets = ["UAE", "Saudi Arabia", "Kuwait", "Qatar"]

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-20 pt-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:pb-28 lg:pt-24">
        <div className="flex flex-col items-start">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            GCC Business Development Hub
          </span>

          <h1 className="mt-6 text-balance font-serif text-4xl font-medium leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            GCC market entry for Malaysian brands
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Research-driven market expansion, marketplace validation, and business development
            strategy that connects Malaysian wellness brands with 50M+ consumers across the Gulf.
          </p>

          <ul className="mt-8 flex flex-wrap gap-2">
            {markets.map((m) => (
              <li
                key={m}
                className="rounded-full border border-border bg-card px-3.5 py-1.5 text-sm font-medium text-foreground"
              >
                {m}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button
              nativeButton={false}
              render={<a href="#focus" />}
              size="lg"
              className="rounded-full px-6"
            >
              Explore Opportunities
              <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
            <Button
              nativeButton={false}
              render={<a href="#contact" />}
              size="lg"
              variant="outline"
              className="rounded-full border-border px-6"
            >
              Get in Touch
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border shadow-sm sm:aspect-square lg:aspect-[4/5]">
            <Image
              src="/images/gcc-hero.png"
              alt="Modern Gulf cityscape at golden hour representing GCC market opportunity"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -left-3 rounded-xl border border-border bg-card px-5 py-4 shadow-md sm:-left-6">
            <p className="font-serif text-2xl font-medium text-foreground">50M+</p>
            <p className="text-xs uppercase tracking-wide text-muted-foreground">GCC consumers</p>
          </div>
        </div>
      </div>
    </section>
  )
}
