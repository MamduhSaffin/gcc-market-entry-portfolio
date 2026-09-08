import type { Metadata } from "next"
import { TrilingualSellerGuide } from "@/components/trilingual-seller-guide"

export const metadata: Metadata = {
  title: "بِع إلى الشرق الأوسط مع eRomman | دليل البائع",
  description: "دليل مبسط للبائعين في ماليزيا الراغبين في استكشاف سوق الشرق الأوسط مع eRomman.",
  alternates: { canonical: "https://mamduhsaffin.github.io/sell-to-the-middle-east/ar/" },
}

export default function Page() {
  return <TrilingualSellerGuide lang="ar" />
}
