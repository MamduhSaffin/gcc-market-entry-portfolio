import type { Metadata } from "next"
import { GccMarketEntryGuide } from "@/components/gcc-market-entry-guide"

export const metadata: Metadata = {
  title: "GCC Market Entry | Jenama Malaysia ke Timur Tengah",
  description: "Panduan praktikal kemasukan pasaran GCC untuk jenama Malaysia yang ingin meneroka Arab Saudi, UAE dan Timur Tengah bersama eRomman.",
  alternates: { canonical: "https://mamduhsaffin.github.io/sell-to-the-middle-east/bm/" },
}

export default function Page() {
  return <GccMarketEntryGuide lang="bm" />
}
