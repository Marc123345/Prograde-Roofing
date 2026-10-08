import { site, states } from "@/data/site"

// /barn-roof-coating, /thank-you and noindex state pages are left out (plan 5).
const paths = [
    "/", "/agricultural-roof-coating", "/metal-roof-coating", "/commercial-roof-coating", "/residential-roof-coating",
    "/roof-coating-vs-replacement", "/service-areas",
    ...states.filter((s) => !s.noindex).map((s) => `/service-areas/${s.slug}`),
    "/about", "/faq", "/free-inspection", "/privacy-policy",
]

export async function getServerSideProps({ res }) {
    const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${paths
        .map((p) => `  <url><loc>${site.url}${p === "/" ? "/" : p}</loc></url>`)
        .join("\n")}\n</urlset>\n`
    res.setHeader("Content-Type", "application/xml")
    res.setHeader("Cache-Control", "public, max-age=3600")
    res.write(body)
    res.end()
    return { props: {} }
}
export default function Sitemap() { return null }
