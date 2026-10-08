import Layout from "@/components/Layout"
import Icon from "@/components/Icon"
import { PageHero, CallButtons, TrustBar, Split, Checks, Photo, Steps, BeforeAfter, Reels, Faq, FinalCta, SectionHead, faqSchema, serviceSchema, breadcrumbSchema } from "@/components/Blocks"
import { site, jobs, reels, faq, fitTable } from "@/data/site"

const steps = [
    { title: "Inspect", text: "We check every panel, seam and fastener, and point out anything that's stripped, backed out or rusted through." },
    { title: "Power wash", text: "Dirt, chalk and loose rust come off so the coating bonds to the metal." },
    { title: "Prime rusted areas", text: "Rust is treated before anything goes over it." },
    { title: "Seal seams and screws", text: "Seams, laps and every exposed screw head are sealed with a commercial-grade sealant." },
    { title: "Coat the full roof", text: "An industrial-grade aluminum coating goes on across the whole roof." },
]
const qs = [faq.painted, faq.color, faq.rusty, faq.leaks]

export default function Metal() {
    return (
        <Layout
            title="Metal Roof Coating & Rust Repair | ProGrade Roof Coatings"
            description="Seal leaking screws, stop rust and protect your metal roof for far less than replacement. Licensed and insured. Free inspections in Western PA."
            schema={[serviceSchema("Metal roof coating", "/metal-roof-coating"), faqSchema(qs), breadcrumbSchema([{ name: "Metal Roof Coating", path: "/metal-roof-coating" }])]}
        >
            <PageHero
                crumbs={[{ label: "Metal Roof Coating" }]}
                eyebrow="Metal roofs"
                title="Metal Roof Coating and Rust Repair"
                lead="Leaking screws, rusted laps and faded panels can be sealed and protected without replacing the roof. We coat metal roofs on barns, shops, commercial buildings and homes."
                img={jobs.steel.after}
            >
                <CallButtons text={false} />
            </PageHero>
            <TrustBar />

            <Split eyebrow="Problems we fix" title="Metal roof problems we fix" media={<BeforeAfter job={jobs.steel} />}>
                <Checks items={["Leaks around screws as the rubber washers dry out and crack", "Rust along laps, seams and panel edges", "Chalky, faded paint", "Pinholes and small spots of corrosion", "Loose or backed-out fasteners"]} />
            </Split>

            <Split soft flip eyebrow="The coating" title="The coating we use" media={<Photo img={jobs.firehallCoating} />}>
                <p>
                    Most of our metal roof work uses an industrial-grade aluminum roof coating. It bonds well to steel, slows rust and leaves a bright silver finish. We'll explain which system fits your roof, and why, at the inspection.
                </p>
            </Split>

            <Steps eyebrow="Process" title="How we coat a metal roof" steps={steps} soft={false} />

            <Reels items={[reels.prep, reels.coating, reels.rust]} title="Seams, screws, then coating" />

            <section className="sr-section sr-section--soft">
                <div className="sr-container" style={{ maxWidth: 980 }}>
                    <SectionHead eyebrow="Honest answer" title="Is your roof a good fit for coating?" />
                    <div className="pg-fit reveal">
                        <div className="pg-fit__good"><h3>Usually a good fit</h3><Checks items={fitTable.good} /></div>
                        <div className="pg-fit__bad"><h3>Usually needs replacing</h3><Checks x items={fitTable.replace} /></div>
                    </div>
                    <p className="sr-lead" style={{ textAlign: "center", marginTop: 28, fontSize: "1.05rem" }}>If coating isn't the right call, we'll tell you at the inspection.</p>
                </div>
            </section>

            <Split eyebrow="Cost" title="Coating costs a fraction of a new metal roof" media={<Photo img={jobs.steelAngle} />}>
                <p>
                    Replacing a metal roof commonly runs about $8 to $25 per square foot nationally once tear-off and disposal are counted. Coating skips the tear-off, the disposal and the new steel, and you get an exact written price after the free inspection.
                </p>
                <a className="sr-btn sr-btn--dark" href="/roof-coating-vs-replacement" style={{ marginTop: 24 }}>Compare Coating and Replacement <Icon name="arrow" /></a>
            </Split>

            <Faq items={qs} title="Metal roof coating questions" soft more />

            <FinalCta title="Find out if your metal roof can be saved" />
        </Layout>
    )
}
