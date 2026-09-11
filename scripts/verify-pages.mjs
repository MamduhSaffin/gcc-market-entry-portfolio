import assert from "node:assert/strict"
import { createHash } from "node:crypto"
import { readFile, writeFile } from "node:fs/promises"
import { resolve, sep } from "node:path"
import { setTimeout as delay } from "node:timers/promises"

const digest = (bytes) => createHash("sha256").update(bytes).digest("hex")
const routes = ["", "en/", "bm/", "ar/"]
const headlines = ["Expand Your Brand", "Expand Your Brand", "Kembangkan Jenama Anda", "وسّع علامتك التجارية"]
const sections = ["fit-check", "opportunities", "how-it-works", "marketplaces", "company-profile-video", "seller-success-stories", "pricing", "cost-estimator", "faq", "contact"]
const requiredVideoIds = ["SNpyhzCsYHs", "a-ak5h5d3jo", "I7GU3g0i7Bg"]

export async function stamp(directory, commit, basePath) {
  assert.match(commit, /^[0-9a-f]{40}$/, "A full source commit SHA is required")
  assert.equal(basePath, "/sell-to-the-middle-east", "Unexpected GitHub Pages base path")
  const root = resolve(directory)
  const files = new Map()
  async function record(path, url) {
    const absolute = resolve(root, path)
    assert.ok(absolute.startsWith(root + sep), "Asset must stay inside the export")
    const bytes = await readFile(absolute)
    files.set(url, { path: url, sha256: digest(bytes) })
    return bytes.toString("utf8")
  }
  for (const [index, route] of routes.entries()) {
    const html = await record(route + "index.html", route)
    assert.ok(html.includes(headlines[index]), "GCC Market Entry redesign missing from " + (route || "/"))
    for (const id of sections) assert.ok(html.includes('id="' + id + '"'), "Missing seller section: " + id)
    for (const videoId of requiredVideoIds) assert.ok(html.includes(videoId), "Missing required video: " + videoId)
    for (const language of routes.slice(1)) {
      assert.ok(html.includes(basePath + "/" + language), "Missing language route: " + language)
    }
    if (route === "ar/") assert.ok(html.includes('dir="rtl"'), "Arabic RTL missing")
    assert.ok(html.includes(basePath + "/_next/static/"), "Compiled assets missing")
    for (const tag of html.match(/<(?:script|link|img)\b[^>]*>/g) || []) {
      const match = tag.match(/(?:src|href)="([^"]+)"/)
      if (!match) continue
      const asset = match[1].replaceAll("&amp;", "&")
      if (/^(?:https?:|data:|\/\/)/.test(asset)) continue
      assert.ok(asset.startsWith(basePath + "/"), "Asset has wrong base path: " + asset)
      const path = decodeURIComponent(asset.split(/[?#]/)[0].slice(basePath.length + 1))
      await record(path, asset.slice(basePath.length + 1))
    }
  }
  const manifest = { commit, basePath, files: [...files.values()] }
  await writeFile(resolve(root, "deployment.json"), JSON.stringify(manifest, null, 2) + "\n")
  await writeFile(resolve(root, ".nojekyll"), "")
  console.log("Validated all GCC Market Entry language routes, video sections and " + files.size + " exported pages/assets for " + commit)
  return manifest
}

async function get(url) {
  const response = await fetch(url, {
    headers: { "Cache-Control": "no-cache" },
    cache: "no-store",
    signal: AbortSignal.timeout(20000),
  })
  assert.equal(response.status, 200, url + " returned HTTP " + response.status)
  return Buffer.from(await response.arrayBuffer())
}

export async function verify(siteUrl, commit) {
  const base = new URL(siteUrl.endsWith("/") ? siteUrl : siteUrl + "/")
  const manifestUrl = new URL("deployment.json", base)
  manifestUrl.searchParams.set("release", commit)
  const manifest = JSON.parse((await get(manifestUrl)).toString("utf8"))
  assert.equal(manifest.commit, commit, "Pages is serving another release")
  assert.equal(base.pathname, manifest.basePath + "/", "Deployment URL has the wrong base path")
  for (const route of routes) assert.ok(manifest.files.some((file) => file.path === route), "Missing route " + route)
  for (let offset = 0; offset < manifest.files.length; offset += 6) {
    await Promise.all(manifest.files.slice(offset, offset + 6).map(async (file) => {
      const url = new URL(file.path, base)
      assert.ok(url.origin === base.origin && url.pathname.startsWith(base.pathname), "Unexpected asset URL")
      assert.equal(digest(await get(url)), file.sha256, "Stale or incorrect published file: " + url.href)
    }))
  }
  console.log("LIVE VERIFIED: " + commit + " at " + base.href + " — all routes, video sections and " + manifest.files.length + " pages/assets match the build.")
}

if (process.argv[2] === "stamp") {
  await stamp(process.argv[3], process.argv[4], process.argv[5])
} else if (process.argv[2] === "live") {
  const attempts = Number(process.env.PAGES_VERIFY_ATTEMPTS || 31)
  for (let attempt = 1; attempt <= attempts; attempt++) {
    try {
      await verify(process.argv[3], process.argv[4])
      break
    } catch (error) {
      if (attempt === attempts) throw error
      console.log("Waiting for Pages/cache propagation (" + attempt + "/" + attempts + "): " + error.message)
      await delay(20000)
    }
  }
}
