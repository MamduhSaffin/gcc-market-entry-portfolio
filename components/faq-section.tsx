const faqs = [
  {
    question: "What is eRomman?",
    answer:
      "eRomman is an Arabic-language marketplace connecting sellers from Malaysia with customers in the Middle East. The model is similar to a normal marketplace: you keep selling as usual while adding another sales channel.",
  },
  {
    question: "Do I need to move my stock or open an office in the Middle East?",
    answer:
      "No. Sellers can keep stock in Malaysia and continue their normal operations. You do not need to open a Middle East office just to start exploring the market.",
  },
  {
    question: "Do I need to list all my products?",
    answer:
      "No. You can start with only a few suitable SKUs, test customer response first and add more products if the market shows potential.",
  },
  {
    question: "When is commission charged?",
    answer:
      "Commission is charged only after a successful sale — when the customer receives the product and the order is completed. Typical rates depend on product category.",
  },
  {
    question: "When do sellers get paid?",
    answer:
      "Seller payment is processed within 10–15 working days after successful delivery.",
  },
  {
    question: "How does pickup work?",
    answer:
      "If eRomman collects the order, the pickup fee is RM7 per order. If the seller ships independently, there is no pickup fee.",
  },
  {
    question: "What happens if a customer returns an item?",
    answer:
      "Return handling depends on the cause. Customer change-of-mind items may be kept within the GCC market for remarketing; seller/product issues are the seller's responsibility; confirmed logistics issues are handled through the applicable logistics and insurance claim process.",
  },
  {
    question: "Can payment arrangements for the subscription be discussed?",
    answer:
      "Yes. The seller presentation states that if one-shot payment is difficult, installment or payment arrangements can be discussed with the team.",
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="border-t border-border bg-card/45 py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Seller FAQ</p>
          <h2 className="mt-3 text-balance font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
            The practical questions sellers usually ask
          </h2>
        </div>

        <div className="mt-10 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
          {faqs.map((faq) => (
            <details key={faq.question} className="group p-6 open:bg-secondary/40">
              <summary className="cursor-pointer list-none pr-8 font-semibold text-foreground marker:hidden">
                {faq.question}
              </summary>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
