import type { Metadata } from "next"
import { TrilingualSellerGuide } from "@/components/trilingual-seller-guide"

export const metadata: Metadata = {
  title: "Jual ke Timur Tengah bersama eRomman | Panduan Penjual",
  description: "Panduan mudah untuk penjual Malaysia yang ingin meneroka pasaran Timur Tengah bersama eRomman.",
  alternates: { canonical: "https://mamduhsaffin.github.io/sell-to-the-middle-east/bm/" },
}

export default function Page() {
  return <TrilingualSellerGuide lang="bm" />
}
