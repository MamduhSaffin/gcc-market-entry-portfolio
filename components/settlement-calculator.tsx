"use client"

import { useMemo, useState } from "react"
import { Calculator, Info } from "lucide-react"

type Category = { label: string; rate: number }

// Representative commission rates drawn from the eRomman Seller Fee Guide 2026.
const categories: Category[] = [
  { label: "Fashion & Accessories", rate: 20 },
  { label: "Jewelry, Watches & Bags", rate: 20 },
  { label: "Sports & Outdoor", rate: 20 },
  { label: "Electronics — Cameras & Bridge", rate: 10 },
  { label: "Electronics — Mobile, Computers & Wearables", rate: 13 },
  { label: "Electronics — Audio, Gaming & Drones", rate: 18 },
  { label: "Television", rate: 10 },
  { label: "Health & Beauty", rate: 18 },
  { label: "Personal & Skin Care", rate: 20 },
  { label: "Baby — Formula & Nursery", rate: 15 },
  { label: "Baby — Feeding & Diapering", rate: 18 },
  { label: "Home & Living", rate: 20 },
  { label: "Home Appliances — Small Kitchen", rate: 18 },
  { label: "Motors — Auto Electronics", rate: 18 },
  { label: "Motors — Tires, Parts & Care", rate: 20 },
  { label: "Books, Media & Music", rate: 20 },
  { label: "Toys & Games", rate: 20 },
]

const PICKUP_FEE = 7

const fmt = (n: number) =>
  n.toLocaleString("en-MY", { minimumFractionDigits: 2, maximumFractionDigits: 2 })

export function SettlementCalculator() {
  const [price, setPrice] = useState("100")
  const [categoryIndex, setCategoryIndex] = useState(0)
  const [waivePickup, setWaivePickup] = useState(false)

  const { sellingPrice, rate, commission, pickup, settlement } = useMemo(() => {
    const sellingPrice = Math.max(0, Number.parseFloat(price) || 0)
    const rate = categories[categoryIndex].rate
    const commission = (sellingPrice * rate) / 100
    const pickup = waivePickup ? 0 : PICKUP_FEE
    const settlement = Math.max(0, sellingPrice - commission - pickup)
    return { sellingPrice, rate, commission, pickup, settlement }
  }, [price, categoryIndex, waivePickup])

  return (
    <section id="fees" className="border-t border-border bg-card/40 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Seller Commission & Fee Guide</p>
          <h2 className="mt-3 text-balance font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
            Estimate your seller settlement
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Commission is charged only on successfully delivered orders and depends on the product category. Enter a
            price and category to see your estimated payout.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-5">
          {/* Inputs */}
          <div className="rounded-2xl border border-border bg-card p-6 lg:col-span-3 lg:p-8">
            <div className="flex items-center gap-2 text-primary">
              <Calculator className="h-5 w-5" />
              <h3 className="font-serif text-xl font-medium text-foreground">Settlement calculator</h3>
            </div>

            <div className="mt-6 space-y-6">
              <div>
                <label htmlFor="price" className="block text-sm font-medium text-foreground">
                  Product selling price (RM)
                </label>
                <div className="mt-2 flex items-center rounded-lg border border-input bg-background focus-within:ring-2 focus-within:ring-ring">
                  <span className="pl-3 text-muted-foreground">RM</span>
                  <input
                    id="price"
                    type="number"
                    min={0}
                    step="0.01"
                    inputMode="decimal"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="w-full rounded-lg bg-transparent px-2 py-2.5 text-foreground outline-none"
                    placeholder="100.00"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="category" className="block text-sm font-medium text-foreground">
                  Product category
                </label>
                <select
                  id="category"
                  value={categoryIndex}
                  onChange={(e) => setCategoryIndex(Number(e.target.value))}
                  className="mt-2 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-foreground outline-none focus:ring-2 focus:ring-ring"
                >
                  {categories.map((c, i) => (
                    <option key={c.label} value={i}>
                      {c.label} — {c.rate}%
                    </option>
                  ))}
                </select>
              </div>

              <label className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={waivePickup}
                  onChange={(e) => setWaivePickup(e.target.checked)}
                  className="mt-1 h-4 w-4 rounded border-input accent-primary"
                />
                <span className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Waive RM7 pickup fee</span> — included with Gold,
                  Platinum, and Pro Platinum plans.
                </span>
              </label>
            </div>
          </div>

          {/* Results */}
          <div className="flex flex-col rounded-2xl border border-border bg-primary p-6 text-primary-foreground lg:col-span-2 lg:p-8">
            <h3 className="font-serif text-xl font-medium">Estimated settlement</h3>
            <dl className="mt-6 space-y-4 text-sm">
              <div className="flex items-center justify-between">
                <dt className="text-primary-foreground/70">Product selling price</dt>
                <dd className="font-medium">RM {fmt(sellingPrice)}</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-primary-foreground/70">Commission ({rate}%)</dt>
                <dd className="font-medium">- RM {fmt(commission)}</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-primary-foreground/70">Pickup fee</dt>
                <dd className="font-medium">- RM {fmt(pickup)}</dd>
              </div>
            </dl>
            <div className="mt-6 border-t border-primary-foreground/20 pt-6">
              <div className="flex items-end justify-between">
                <span className="text-primary-foreground/70">You receive</span>
                <span className="font-serif text-3xl font-medium">RM {fmt(settlement)}</span>
              </div>
            </div>
            <p className="mt-6 flex items-start gap-2 text-xs leading-relaxed text-primary-foreground/70">
              <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" />
              Estimate only. Customer pays shipping. Payment gateway fees and SST may apply. Payouts are processed
              10&ndash;15 working days after successful delivery.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
