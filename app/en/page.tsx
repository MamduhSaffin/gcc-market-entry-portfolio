import type { Metadata } from "next"
import { GccMarketEntryGuide } from "@/components/gcc-market-entry-guide"

export const metadata: Metadata = {
  title: "GCC Market Entry | Malaysian Brands to the Middle East",
  description: "A practical GCC market-entry guide for Malaysian brands exploring Saudi Arabia, UAE and the wider Middle East with eRomman.",
  alternates: { canonical: "https://mamduhsaffin.github.io/sell-to-the-middle-east/en/" },
}

export default function Page() {
  return <GccMarketEntryGuide lang="en" />
}
