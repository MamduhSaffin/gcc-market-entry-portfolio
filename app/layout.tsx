import type { Metadata, Viewport } from "next"
import "./globals.css"

const siteUrl = "https://mamduhsaffin.github.io/sell-to-the-middle-east/"
const socialImage = siteUrl + "og-eromman.png?v=20260908"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sell to the Middle East with eRomman | Seller Guide",
    template: "%s | eRomman Seller Guide",
  },
  description:
    "A trilingual seller guide for Malaysian brands exploring the Middle East with eRomman: English, Bahasa Melayu and Arabic.",
  keywords: [
    "sell to Middle East",
    "eRomman seller guide",
    "Malaysia Middle East e-commerce",
    "Saudi Arabia marketplace",
    "UAE marketplace",
    "Arabic marketplace",
    "cross-border e-commerce Malaysia",
  ],
  authors: [{ name: "Muhammad Mamduh Bin Saffin" }],
  creator: "Muhammad Mamduh Bin Saffin",
  alternates: {
    canonical: siteUrl,
    languages: {
      en: siteUrl + "en/",
      ms: siteUrl + "bm/",
      ar: siteUrl + "ar/",
    },
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Sell to the Middle East with eRomman",
    description:
      "A simple seller guide for Malaysian brands exploring Middle East customers with eRomman.",
    siteName: "eRomman Seller Guide",
    images: [
      {
        url: socialImage,
        width: 512,
        height: 512,
        alt: "eRomman crowned O — Seller Guide",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Sell to the Middle East with eRomman",
    description: "A simple trilingual seller guide for Malaysian brands.",
    images: [socialImage],
  },
  icons: {
    icon: siteUrl + "icon.svg?v=20260908",
    apple: siteUrl + "apple-icon.png",
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
