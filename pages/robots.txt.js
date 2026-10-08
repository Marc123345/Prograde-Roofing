import { site } from "@/data/site"

export async function getServerSideProps({ res }) {
    res.setHeader("Content-Type", "text/plain")
    res.write(`User-agent: *\nDisallow: /barn-roof-coating\nDisallow: /thank-you\nAllow: /\n\nSitemap: ${site.url}/sitemap.xml\n`)
    res.end()
    return { props: {} }
}
export default function Robots() { return null }
