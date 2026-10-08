import Layout from "@/components/Layout"
import Icon from "@/components/Icon"
import { PageHero, CallButtons, TrustBar, Split, Checks, Steps, Reels, Faq, FinalCta, SectionHead, faqSchema, serviceSchema, breadcrumbSchema } from "@/components/Blocks"
import { site, reels, faq } from "@/data/site"

// Added 8 Oct 2026: William coats rubber and flat roofs as well as metal.
// ⚠ No photos of his flat/rubber jobs yet, so this page is text-led and uses
// his prep reels (seam and fastener sealing is the same discipline). Add a
// before/after here as soon as he sends one.
const steps = [
    { title: "Inspect", text: "We walk the roof and check the seams, flashing, edges, drains and any spots where water sits after rain." },
    { title: "Clean", text: "Dirt, debris and loose material come off so the coating can bond to the surface." },
    { title: "Repair the weak points", text: "Open seams, lifted edges, flashing and penetrations are sealed and reinforced first, since that's where flat roofs leak." },
    { title: "Coat", text: "We coat the full roof to form one seamless layer, with no seams left for water to find." },
    { title: "Walk through it with you", text: "We look over the finished roof together and hand over your guarantee and warranty paperwork." },
]
const good = ["The roof deck underneath is solid", "Leaks are at seams, edges, flashing or penetrations", "The rubber is shrinking, chalking or cracking on the surface", "You want to keep the building in use"]
const replace = ["Insulation under the roof is soaked through", "The deck is soft, rotted or sagging", "The membrane is torn away across large areas"]
const qs = [faq.flat, faq.ponding, faq.shutdown, faq.warranty]

export default function Flat() {
    return (
        <Layout
            title="Rubber & Flat Roof Coating in Western PA | ProGrade"
            description={`Rubber (EPDM) and flat roof coating for commercial buildings, garages and homes. Seal leaking seams without a tear-off. Free inspection: ${site.phone}.`}
            schema={[serviceSchema("Flat and rubber roof coating", "/flat-roof-coating"), faqSchema(qs), breadcrumbSchema([{ name: "Flat & Rubber Roof Coating", path: "/flat-roof-coating" }])]}
        >
            <PageHero
                crumbs={[{ label: "Flat & Rubber Roof Coating" }]}
                eyebrow="Rubber, flat and low-slope roofs"
                title="Rubber and Flat Roof Coating"
                lead="Leaking seams, shrinking rubber and worn flat roofs can usually be sealed and coated instead of torn off. We coat rubber (EPDM) and other flat and low-slope roofs on commercial buildings, garages and homes."
            >
                <CallButtons />
            </PageHero>
            <TrustBar />

            <section className="sr-section">
                <div className="sr-container">
                    <SectionHead eyebrow="What we coat" title="Flat and rubber roofs we coat" lead="Flat roofs fail at the seams, edges and flashing first, and anywhere water sits after rain." />
                    <div className="sr-grid sr-cols-3">
                        {[
                            { icon: "flat", title: "Rubber (EPDM) roofs", text: "Seams lifting, edges pulling back, surface cracking and chalking." },
                            { icon: "store", title: "Commercial flat roofs", text: "Shops, warehouses, churches and offices. Your building stays open while we work." },
                            { icon: "home", title: "Garages, porches and additions", text: "Low-slope roofs on homes and outbuildings that leak at the seams." },
                        ].map((c) => (
                            <div className="sr-card sr-service" key={c.title}>
                                <div className="sr-service__icon"><Icon name={c.icon} /></div>
                                <h3>{c.title}</h3>
                                <p>{c.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Split soft eyebrow="Problems we fix" title="Flat roof problems we fix" media={<Checks items={["Leaks at seams and laps", "Rubber shrinking and pulling away at the edges and flashing", "Cracked, chalky or worn surfaces", "Leaks around vents, pipes and other penetrations", "Water sitting on the roof after rain"]} />}>
                <p>
                    A flat roof doesn't shed water the way a pitched roof does, so every seam and edge has to stay sealed. A coating goes over the whole surface as one continuous layer, after the weak points are repaired, so there are no seams left for water to find.
                </p>
                <p style={{ marginTop: 14 }}>
                    There's no tear-off, so the building stays in use and there's no gap in the roof overnight.
                </p>
            </Split>

            <Steps eyebrow="Process" title="How we coat a flat or rubber roof" steps={steps} soft={false} />

            <section className="sr-section sr-section--soft">
                <div className="sr-container" style={{ maxWidth: 980 }}>
                    <SectionHead eyebrow="Honest answer" title="Is your flat roof a good fit for coating?" />
                    <div className="pg-fit reveal">
                        <div className="pg-fit__good"><h3>Usually a good fit</h3><Checks items={good} /></div>
                        <div className="pg-fit__bad"><h3>Usually needs replacing</h3><Checks x items={replace} /></div>
                    </div>
                    <p className="sr-lead" style={{ textAlign: "center", marginTop: 28, fontSize: "1.05rem" }}>If coating isn't the right call, we'll tell you at the inspection.</p>
                </div>
            </section>

            <Reels items={[reels.seams, reels.prep, reels.coating]} eyebrow="Prep is the job" title="Every seam sealed before the coating goes on" />

            <Split soft eyebrow="Cost" title="Coating costs a fraction of a new flat roof" media={<Checks items={["No tear-off", "No disposal", "No new membrane", "Exact written price after a free inspection"]} />}>
                <p>
                    Replacing a flat roof means tearing off the old membrane, often the insulation too, and hauling it away. Coating skips all of that. You get an exact price in writing after the free inspection, before any work starts.
                </p>
                <a className="sr-btn sr-btn--dark" href="/roof-coating-vs-replacement" style={{ marginTop: 24 }}>Coating vs Replacement <Icon name="arrow" /></a>
            </Split>

            <Faq items={qs} title="Flat and rubber roof questions" more />

            <FinalCta title="Get your flat roof looked at for free" />
        </Layout>
    )
}
