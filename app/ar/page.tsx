import type { Metadata } from "next"
import { GccMarketEntryGuide } from "@/components/gcc-market-entry-guide"

export const metadata: Metadata = {
  title: "GCC Market Entry | العلامات الماليزية إلى أسواق الخليج",
  description: "دليل عملي للعلامات الماليزية الراغبة في استكشاف السعودية والإمارات وأسواق الخليج والشرق الأوسط مع eRomman.",
  alternates: { canonical: "https://gccmarketentry.me/ar/" },
}

export default function Page() {
  return <GccMarketEntryGuide lang="ar" />
}
