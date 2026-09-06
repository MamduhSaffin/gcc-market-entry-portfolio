"use client"

import { useEffect, useMemo, useState } from "react"
import { Calculator, CheckCircle2, Info } from "lucide-react"

type Category = {
  label: string
  min: number
  max: number
}

const categories: Category[] = [
  { label: "Fashion & Accessories", min: 20, max: 20 },
  { label: "Health & Beauty", min: 18, max: 20 },
  { label: "Electronics", min: 10, max: 20 },
  { label: "Mobile Phones", min: 13, max: 13 },
  { label: "Computers & Laptops", min: 13, max: 13 },
  { label: "Home Appliances", min: 15, max: 20 },
  { label: "Books & Media", min: 20, max: 20 },
  { label: "Automotive", min: 18, max: 20 },
]

const PICKUP_FEE = 7

const fmt = (value: number) =>
  value.toLocaleString("en-MY", { minimumFractionDigits: 2, maximumFractionDigits: 2 })

export function SettlementCalculator() {
  const [price, setPrice] = useState("100")
  const [categoryIndex, setCategoryIndex] = useState(0)
  const [rateInput, setRateInput] = useState("20")
  const [shippingMethod, setShippingMethod] = useState<"pickup" | "self">("pickup")

  const category = categories[categoryIndex]

  useEffect(() => {
    setRateInput(String(category.min))
  }, [categoryIndex, category.min])

  const { sellingPrice, rate, commission, pickup, settlement } = useMemo(() => {
    const sellingPrice = Math.max(0, Number.parseFloat(price) || 0)
    const requestedRate = Number.parseFloat(rateInput) || category.min
    const rate = Math.min(category.max, Math.max(category.min, requestedRate))
    const commission = (sellingPrice * rate) / 100
    const pickup = shippingMethod === "pickup" ? PICKUP_FEE : 0
    const settlement = Math.max(0, sellingPrice - commission - pickup)

    return { sellingPrice, rate, commission, pickup, settlement }
  }, [price, rateInput, category.min, category.max, shippingMethod])

  const rateLabel =
    category.min === category.max
      ? "Typical rate: " + category.min + "%"
      : "Typical range: " + category.min + "%–" + category.max + "%"

  return (
    <section id="fees" className="border-t border-border py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Seller Charges & Settlement Guide</p>
          <h2 className="mt-3 text-balance font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Estimate your seller settlement
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Commission is charged only when the customer successfully receives the product and the order is completed. Pickup is RM7 per order when eRomman collects, or RM0 pickup fee when the seller ships independently.
          </p>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "No registration fee",
            "No listing fee",
            "No hidden costs",
            "Commission after sale",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2 rounded-xl border border-border bg-card p-4 text-sm font-medium">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              {item}
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-5">
          <div className="rounded-2xl border border-border bg-card p-6 lg:col-span-3 lg:p-8">
            <div className="flex items-center gap-2 text-primary">
              <Calculator className="h-5 w-5" />
              <h3 className="font-serif text-xl font-semibold text-foreground">Settlement calculator</h3>
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
                    onChange={(event) => setPrice(event.target.value)}
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
                  onChange={(event) => setCategoryIndex(Number(event.target.value))}
                  className="mt-2 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-foreground outline-none focus:ring-2 focus:ring-ring"
                >
                  {categories.map((item, index) => (
                    <option key={item.label} value={index}>
                      {item.label}
                    </option>
                  ))}
                </select>
                <p className="mt-2 text-xs text-muted-foreground">{rateLabel}</p>
              </div>

              <div>
                <label htmlFor="commission-rate" className="block text-sm font-medium text-foreground">
                  Commission rate (%)
                </label>
                <input
                  id="commission-rate"
                  type="number"
                  min={category.min}
                  max={category.max}
                  step="1"
                  value={rateInput}
                  onChange={(event) => setRateInput(event.target.value)}
                  disabled={category.min === category.max}
                  className="mt-2 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-foreground outline-none focus:ring-2 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-70"
                />
              </div>

              <div>
                <label htmlFor="shipping-method" className="block text-sm font-medium text-foreground">
                  Order handover method
                </label>
                <select
                  id="shipping-method"
                  value={shippingMethod}
                  onChange={(event) => setShippingMethod(event.target.value as "pickup" | "self")}
                  className="mt-2 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-foreground outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="pickup">eRomman collects — RM7 pickup fee</option>
                  <option value="self">Seller ships independently — RM0 pickup fee</option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex flex-col rounded-2xl border border-border bg-primary p-6 text-primary-foreground lg:col-span-2 lg:p-8">
            <h3 className="font-serif text-xl font-semibold">Estimated settlement</h3>
            <dl className="mt-6 space-y-4 text-sm">
              <div className="flex items-center justify-between gap-4">
                <dt className="text-primary-foreground/70">Seller price</dt>
                <dd className="font-medium">RM {fmt(sellingPrice)}</dd>
              </div>
              <div className="flex items-center justify-between gap-4">
                <dt className="text-primary-foreground/70">Commission ({rate}%)</dt>
                <dd className="font-medium">- RM {fmt(commission)}</dd>
              </div>
              <div className="flex items-center justify-between gap-4">
                <dt className="text-primary-foreground/70">Pickup fee</dt>
                <dd className="font-medium">- RM {fmt(pickup)}</dd>
              </div>
            </dl>
            <div className="mt-6 border-t border-primary-foreground/20 pt-6">
              <div className="flex items-end justify-between gap-4">
                <span className="text-primary-foreground/70">Seller receives</span>
                <span className="font-serif text-3xl font-semibold">RM {fmt(settlement)}</span>
              </div>
            </div>
            <p className="mt-6 flex items-start gap-2 text-xs leading-relaxed text-primary-foreground/75">
              <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" />
              Estimate only. Customer pays shipping. Seller payment is processed within 10–15 working days after successful delivery.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
