import { site } from "@/data/site"
import { pages, UPDATED } from "@/data/sitemap"

// XML sitemap with Google's image extension, so his job photos can be
// discovered through Google Images as well as the pages themselves.
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
const abs = (p) => `${site.url}${p === "/" ? "/" : p}`

export function buildSitemap() {
    const urls = pages.map((p) => {
        const imgs = (p.images || [])
            .map((i) => `    <image:image><image:loc>${esc(site.url + i.src)}</image:loc></image:image>`)
            .join("\n")
        return [
            "  <url>",
            `    <loc>${esc(abs(p.path))}</loc>`,
            `    <lastmod>${UPDATED}</lastmod>`,
            `    <priority>${p.priority.toFixed(1)}</priority>`,
            imgs,
            "  </url>",
        ].filter(Boolean).join("\n")
    })
    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls.join("\n")}
</urlset>
`
}

export async function getServerSideProps({ res }) {
    res.setHeader("Content-Type", "application/xml; charset=utf-8")
    res.setHeader("Cache-Control", "public, s-maxage=3600, stale-while-revalidate=86400")
    res.write(buildSitemap())
    res.end()
    return { props: {} }
}
export default function Sitemap() { return null }
