import type { Metadata } from "next"
import { TrilingualSellerGuide } from "@/components/trilingual-seller-guide"

export const metadata: Metadata = {
  title: "Sell to the Middle East with eRomman | Seller Guide",
  description: "A simple seller guide for Malaysian brands exploring Middle East customers with eRomman.",
  alternates: { canonical: "https://mamduhsaffin.github.io/sell-to-the-middle-east/en/" },
}

export default function Page() {
  return <TrilingualSellerGuide lang="en" />
}
