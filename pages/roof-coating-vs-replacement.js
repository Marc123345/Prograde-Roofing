import Layout from "@/components/Layout"
import { PageHero, Split, Checks, Photo, BeforeAfter, SectionHead, FinalCta, breadcrumbSchema } from "@/components/Blocks"
import { site, jobs } from "@/data/site"

// Replacement column uses the national reference range from the plan. The
// coating column states how the price is set: William's own range is not
// confirmed yet, and no number goes live until it is.
const rows = [
    ["Typical cost", "A fraction of replacement. Exact written price after a free inspection", "About $8 to $25 per sq ft nationally, including tear-off"],
    ["Tear-off and disposal", "None", "Required"],
    ["Time on site", "Usually shorter: no removal, no new panels", "Often longer, depending on size and weather"],
    ["Building use during work", "Stays in use", "Often disrupted"],
    ["Lifespan", "Years of protection, and the roof can be recoated when it wears", "Decades for new steel, depending on the panel"],
    ["Warranty", "Written workmanship guarantee plus manufacturer warranty", "Manufacturer and installer warranties"],
]

export default function VsReplacement() {
    const title = "Roof Coating vs. Roof Replacement: Which Makes Sense for Your Building"
    return (
        <Layout
            title="Roof Coating vs. Replacement: Cost & Lifespan | ProGrade"
            description="Compare roof coating and replacement on cost per square foot, time, disruption and lifespan. Learn which one your barn or metal roof needs."
            schema={[
                { "@context": "https://schema.org", "@type": "Article", headline: title, author: { "@id": `${site.url}/#business` }, publisher: { "@id": `${site.url}/#business` } },
                breadcrumbSchema([{ name: "Coating vs Replacement", path: "/roof-coating-vs-replacement" }]),
            ]}
        >
            <PageHero
                crumbs={[{ label: "Coating vs Replacement" }]}
                eyebrow="Cost, time, lifespan"
                title={title}
                lead="A straight comparison of cost, time, disruption and lifespan, plus how to tell which one your roof needs."
                img={jobs.barn.after}
            >
                <a className="sr-btn sr-btn--accent sr-btn--lg" href="/free-inspection">Get a Free Inspection</a>
            </PageHero>

            <section className="sr-section">
                <div className="sr-container" style={{ maxWidth: 1040 }}>
                    <SectionHead eyebrow="Comparison" title="Side by side" />
                    <div className="reveal" style={{ overflowX: "auto" }}>
                        <table className="pg-compare">
                            <thead>
                                <tr><th scope="col"><span className="sr-skip-text" style={{ position: "absolute", left: -9999 }}>Factor</span></th><th scope="col">Coating</th><th scope="col">Replacement (metal)</th></tr>
                            </thead>
                            <tbody>
                                {rows.map(([k, a, b]) => (
                                    <tr key={k}>
                                        <th scope="row">{k}</th>
                                        <td data-label="Coating">{a}</td>
                                        <td data-label="Replacement">{b}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <Split soft eyebrow="Coat it" title="When coating is the right call" media={<BeforeAfter job={jobs.steel} />}>
                <Checks items={["The panels and structure are still solid", "Leaks are at seams, laps and screws", "Rust is on the surface and hasn't eaten through", "You want to keep the building in use", "You'd rather spend a fraction now than the full cost of a new roof"]} />
            </Split>

            <Split flip eyebrow="Replace it" title="When you need a new roof instead" media={<Photo img={jobs.barn.before} />}>
                <Checks x items={["Panels are rusted through across large areas", "Purlins, rafters or decking are rotted", "The roof sags or moves", "Water is trapped in insulation under the panels"]} />
                <p style={{ marginTop: 16 }}>
                    We coat roofs that will hold a coating. If yours won't, we'll tell you at the inspection and you'll know before you spend anything.
                </p>
            </Split>

            <Split soft eyebrow="Long-term" title="The recoat cycle" media={<Photo img={jobs.steelAngle} />}>
                <p>
                    When a coating starts to wear, the roof can be cleaned and recoated. You keep the same roof in service for years with periodic maintenance, rather than paying for a full replacement each time.
                </p>
            </Split>

            <FinalCta title="Find out which one your roof needs" />
        </Layout>
    )
}
