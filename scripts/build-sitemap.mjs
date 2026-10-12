// Writes public/sitemap.xml, a static XML file Next serves as-is at /sitemap.xml.
// Runs before `next build` (see package.json), from the same page list as the human /sitemap
// page (data/sitemap.js), with Google's image extension so the job photos are discoverable.
import { writeFileSync } from "node:fs"
import { site } from "../data/site.js"
import { pages, UPDATED } from "../data/sitemap.js"

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
const abs = (p) => `${site.url}${p === "/" ? "/" : p}`

const urls = pages.map((p) => {
    const imgs = (p.images || []).map((i) => `    <image:image>\n      <image:loc>${esc(site.url + i.src)}</image:loc>\n    </image:image>`)
    return ["  <url>", `    <loc>${esc(abs(p.path))}</loc>`, `    <lastmod>${UPDATED}</lastmod>`, `    <priority>${p.priority.toFixed(1)}</priority>`, ...imgs, "  </url>"].join("\n")
})

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls.join("\n")}
</urlset>
`
writeFileSync(new URL("../public/sitemap.xml", import.meta.url), xml)
console.log(`sitemap.xml: ${pages.length} URLs, lastmod ${UPDATED}`)
