// Every public, indexable page: the single list behind /sitemap.xml and the
// human /sitemap page. Left out on purpose (plan, section 5): the Facebook ad
// page /barn-roof-coating, /thank-you, and noindex state pages (Virginia).
import { states, jobs, stock } from "./site"

// Bump when page content changes meaningfully; Google uses it as a recrawl hint.
export const UPDATED = "2026-10-08"

const img = (i, title) => ({ src: i.src, title: title || i.alt })

export const groups = [
    {
        title: "Main pages",
        pages: [
            { path: "/", title: "Home", priority: 1.0, images: [img(jobs.barn.after), img(jobs.longBarn.after), img(jobs.quonset.after)] },
            { path: "/free-inspection", title: "Book a Free Roof Inspection", priority: 0.9 },
            { path: "/about", title: "About ProGrade Roof Coatings", priority: 0.6, images: [img(jobs.firehallCoating)] },
            { path: "/faq", title: "Roof Coating FAQ", priority: 0.6 },
        ],
    },
    {
        title: "Services",
        pages: [
            { path: "/agricultural-roof-coating", title: "Barn & Farm Roof Coating", priority: 0.9, images: [img(jobs.barn.after), img(jobs.grayBarn.after), img(jobs.smallBarn.after)] },
            { path: "/metal-roof-coating", title: "Metal Roof Coating & Rust Repair", priority: 0.9, images: [img(jobs.steel.after), img(jobs.quonset.after), img(jobs.lowBarn.after)] },
            { path: "/flat-roof-coating", title: "Rubber & Flat Roof Coating", priority: 0.8, images: [img(stock.epdmFinished)] },
            { path: "/commercial-roof-coating", title: "Commercial Roof Coating", priority: 0.8, images: [img(jobs.firehallCoating)] },
            { path: "/residential-roof-coating", title: "Residential Roof Coating", priority: 0.8, images: [img(jobs.houseBA), img(jobs.houseBlueBA)] },
            { path: "/roof-coating-vs-replacement", title: "Roof Coating vs. Replacement", priority: 0.7 },
        ],
    },
    {
        title: "Service areas",
        pages: [
            { path: "/service-areas", title: "Service Area: PA, OH, WV & VA", priority: 0.7 },
            ...states.filter((s) => !s.noindex).map((s) => ({ path: `/service-areas/${s.slug}`, title: s.h1, priority: 0.7 })),
        ],
    },
    {
        title: "Other",
        pages: [
            { path: "/privacy-policy", title: "Privacy Policy", priority: 0.2 },
            { path: "/sitemap", title: "Sitemap", priority: 0.2 },
        ],
    },
]

export const pages = groups.flatMap((g) => g.pages)
