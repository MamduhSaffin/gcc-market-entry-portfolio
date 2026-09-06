import type { Metadata, Viewport } from "next"
import "./globals.css"

const siteUrl = "https://mamduhsaffin.github.io/gcc-market-entry-portfolio/"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sell to the Middle East with eRomman | Seller Guide",
    template: "%s | eRomman Seller Guide",
  },
  description:
    "A simple seller guide for Malaysian brands exploring the Middle East with eRomman: how it works, Arabic support, marketplace opportunities, seller plans, fees, settlement and next steps.",
  keywords: [
    "sell to Middle East",
    "eRomman seller guide",
    "Malaysia Middle East e-commerce",
    "Saudi Arabia marketplace",
    "UAE marketplace",
    "Arabic marketplace",
    "cross-border e-commerce Malaysia",
    "GCC selling",
  ],
  authors: [{ name: "Muhammad Mamduh Bin Saffin" }],
  creator: "Muhammad Mamduh Bin Saffin",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Sell to the Middle East with eRomman",
    description:
      "See how Malaysian sellers can start small, reach Middle East customers and test demand with eRomman.",
    siteName: "eRomman Seller Guide",
  },
  twitter: {
    card: "summary",
    title: "Sell to the Middle East with eRomman",
    description:
      "A simple guide for Malaysian sellers exploring Middle East customers through eRomman.",
  },
  icons: {
    icon: "https://mamduhsaffin.github.io/gcc-market-entry-portfolio/icon.svg",
    apple: "https://mamduhsaffin.github.io/gcc-market-entry-portfolio/apple-icon.png",
  },
}

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#b3131b",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
