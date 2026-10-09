import { useEffect } from "react"
import { Inter, Sora } from "next/font/google"
// Template CSS, bundled and minified by Next into one stylesheet (was five
// separate render-blocking requests from /public). Order matters.
import "@/styles/motion-tokens.css"
import "@/styles/style.css"
import "@/styles/animations.css"
import "@/styles/premium.css"
import "@/styles/prograde.css"

// Self-hosted fonts (next/font): no request to Google at runtime, preloaded,
// with size-adjusted fallbacks so the swap doesn't shift the layout.
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"], display: "swap" })
const sora = Sora({ subsets: ["latin"], weight: ["600", "700"], display: "swap" })

// The SummitRoof motion bundle runs once per page load, after React has
// hydrated, so its DOM changes (word-split headings, reveal attributes)
// never collide with hydration. Site links are plain <a>, so every page
// is a full load and the bundle starts fresh each time.
export default function App({ Component, pageProps }) {
    useEffect(() => {
        if (document.getElementById("pg-motion")) return
        const s = document.createElement("script")
        s.id = "pg-motion"
        s.src = "/assets/js/motion.js"
        document.body.appendChild(s)
    }, [])
    return (
        <>
            <style jsx global>{`
                html:root {
                    --font-body: ${inter.style.fontFamily}, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
                    --font-display: ${sora.style.fontFamily}, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
                }
            `}</style>
            <Component {...pageProps} />
        </>
    )
}
