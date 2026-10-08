import { useEffect } from "react"

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
    return <Component {...pageProps} />
}
