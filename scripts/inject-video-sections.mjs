import { readFile, writeFile } from "node:fs/promises"

const path = "components/trilingual-seller-guide.tsx"
let source = await readFile(path, "utf8")

const imports = [
  'import { CompanyProfileVideo } from "@/components/company-profile-video"\n',
  'import { SellerSuccessStories } from "@/components/seller-success-stories"\n',
]

const importMarker = 'import { EROMMAN_LINKS, SELLER_SUPPORT } from "@/lib/links"\n'
if (!source.includes(importMarker)) throw new Error("Could not find import insertion marker")
for (const importLine of imports) {
  if (!source.includes(importLine.trim())) source = source.replace(importMarker, importMarker + importLine)
}

const sectionMarker = '        <section id="how-it-works"'
if (!source.includes(sectionMarker)) throw new Error("Could not find video insertion marker")

if (!source.includes("<CompanyProfileVideo lang={lang} />")) {
  source = source.replace(sectionMarker, '        <CompanyProfileVideo lang={lang} />\n\n' + sectionMarker)
}

if (!source.includes("<SellerSuccessStories lang={lang} />")) {
  const companyBlock = '        <CompanyProfileVideo lang={lang} />\n\n'
  if (source.includes(companyBlock)) {
    source = source.replace(companyBlock, companyBlock + '        <SellerSuccessStories lang={lang} />\n\n')
  } else {
    source = source.replace(sectionMarker, '        <SellerSuccessStories lang={lang} />\n\n' + sectionMarker)
  }
}

const navMarker = '              [t.nav.support, "#support"],\n'
if (!source.includes(navMarker)) throw new Error("Could not find navigation insertion marker")

const videoNav = '              [lang === "en" ? "Company Video" : lang === "bm" ? "Video Syarikat" : "فيديو الشركة", "#company-profile-video"],\n'
const storyNav = '              [lang === "en" ? "Success Stories" : lang === "bm" ? "Kisah Penjual" : "قصص النجاح", "#seller-success-stories"],\n'

for (const navLine of [videoNav, storyNav]) {
  if (!source.includes(navLine.trim())) source = source.replaceAll(navMarker, navMarker + navLine)
}

await writeFile(path, source)
console.log("Injected eRomman company profile and seller success-story videos into the seller guide build.")
