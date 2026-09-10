import { readFile, writeFile } from "node:fs/promises"

const path = "components/trilingual-seller-guide.tsx"
let source = await readFile(path, "utf8")

const importLine = 'import { SellerSuccessStories } from "@/components/seller-success-stories"\n'
if (!source.includes(importLine.trim())) {
  const marker = 'import { EROMMAN_LINKS, SELLER_SUPPORT } from "@/lib/links"\n'
  if (!source.includes(marker)) throw new Error("Could not find import insertion marker")
  source = source.replace(marker, marker + importLine)
}

const sectionMarker = '        <section id="how-it-works"'
if (!source.includes("<SellerSuccessStories lang={lang} />")) {
  if (!source.includes(sectionMarker)) throw new Error("Could not find seller story insertion marker")
  source = source.replace(sectionMarker, '        <SellerSuccessStories lang={lang} />\n\n' + sectionMarker)
}

const navMarker = '              [t.nav.support, "#support"],\n'
const storyNav = '              [lang === "en" ? "Success Stories" : lang === "bm" ? "Kisah Penjual" : "قصص النجاح", "#seller-success-stories"],\n'
if (!source.includes(storyNav.trim())) {
  if (!source.includes(navMarker)) throw new Error("Could not find navigation insertion marker")
  source = source.replaceAll(navMarker, navMarker + storyNav)
}

await writeFile(path, source)
console.log("Injected seller success-story videos into the seller guide build.")
