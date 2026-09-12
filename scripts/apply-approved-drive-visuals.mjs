import { readFile, writeFile } from "node:fs/promises"

const heroSrc = 'src={SITE_BASE_PATH + "/images/approved/03-eRomman-GCC-Landing-Page-Hero.png"}'
const erommanLink = '<a href="https://www.eromman.com/" target="_blank" rel="noopener noreferrer" aria-label="Visit eRomman official website" className="block">$1</a>'

const files = [
  "components/gcc-market-entry-guide.tsx",
  "components/trilingual-seller-guide.tsx",
]

for (const file of files) {
  let source = await readFile(file, "utf8")

  source = source.replaceAll(
    'src={SITE_BASE_PATH + "/images/official/eromman-gcc-bridge-hero.webp"}',
    heroSrc,
  )

  source = source
    .replaceAll('className="h-[470px] w-full object-cover sm:h-[560px]"', 'className="block h-auto w-full object-contain"')
    .replaceAll('className="h-[430px] w-full object-cover sm:h-[520px]"', 'className="block h-auto w-full object-contain"')
    .replaceAll('className="absolute inset-0 bg-gradient-to-t from-[#6d0710]/85 via-transparent to-white/5"', 'className="hidden"')
    .replaceAll('className="absolute inset-0 bg-gradient-to-t from-[#6d0710]/80 via-transparent to-white/5"', 'className="hidden"')
    .replaceAll('className="absolute left-5 top-5 rounded-xl border border-white/50 bg-white/92 px-4 py-3 shadow-lg backdrop-blur-md"', 'className="hidden"')
    .replaceAll('className="absolute bottom-5 left-5 right-5 grid gap-2 rounded-2xl border border-white/30 bg-white/95 p-4 shadow-2xl backdrop-blur-xl sm:grid-cols-3"', 'className="hidden"')
    .replaceAll('className="absolute left-5 top-5 rounded-xl border border-white/50 bg-white/90 px-4 py-3 shadow-lg backdrop-blur-md"', 'className="hidden"')
    .replaceAll('className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/30 bg-white/95 p-5 shadow-2xl backdrop-blur-xl"', 'className="hidden"')

  source = source.replace(
    /(<img\b[^>]*src=\{SITE_BASE_PATH \+ "\/images\/approved\/03-eRomman-GCC-Landing-Page-Hero\.png"\}[^>]*\/>)/g,
    erommanLink,
  )

  await writeFile(file, source)
}

console.log("Applied approved local landing hero visual and eRomman website link to seller-facing routes")
