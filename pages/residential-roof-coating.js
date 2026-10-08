import Layout from "@/components/Layout"
import { PageHero, CallButtons, TrustBar, Gallery, Split, Checks, Photo, Steps, BeforeAfter, FinalCta, serviceSchema, breadcrumbSchema } from "@/components/Blocks"
import { site, jobs } from "@/data/site"

const steps = [
    { title: "Free inspection", text: "We look at the roof with you and give you a written estimate." },
    { title: "Scheduling", text: "We book the work around your plans and the weather." },
    { title: "Wash, prep, seal and coat", text: "The roof is cleaned, rust treated, seams and screws sealed, then coated." },
    { title: "Cleanup and walkthrough", text: "We clean up and walk the finished roof with you." },
]

export default function Residential() {
    return (
        <Layout
            title="Residential Roof Coating for Homes & Garages | ProGrade"
            description="Roof coating for metal roofs on homes, garages and outbuildings. Registered PA home improvement contractor, insured. Free estimates."
            schema={[serviceSchema("Residential roof coating", "/residential-roof-coating"), breadcrumbSchema([{ name: "Residential Roof Coating", path: "/residential-roof-coating" }])]}
        >
            <PageHero
                crumbs={[{ label: "Residential Roof Coating" }]}
                eyebrow="Homes and garages"
                title="Roof Coating for Homes, Garages and Outbuildings"
                lead="Metal, rubber and flat roofs on homes, detached garages, porches, sheds and other outbuildings. Stop leaks and rust without paying for a new roof."
                img={jobs.steelAngle}
            >
                <CallButtons text={false} />
            </PageHero>
            <TrustBar items={[site.hic, "Fully insured", `${site.years} years in business`, "Free inspections", "Written contract and guarantee"]} />

            <Split eyebrow="Good fit" title="Residential roofs we coat" media={<BeforeAfter job={jobs.barn} />}>
                <Checks items={["Metal roofs on houses", "Rubber and flat roofs on garages, porches and additions", "Detached garages and workshops", "Sheds and outbuildings"]} />
            </Split>

            <Split soft flip eyebrow="Appearance" title="How it will look" media={<Photo img={jobs.steel.after} />}>
                <p>Aluminum coating leaves a clean, bright silver finish across the whole roof, so you know what to expect before we start.</p>
            </Split>

            <Split eyebrow="Peace of mind" title="Registered for home improvement work in Pennsylvania" media={<Photo img={jobs.steel.before} />}>
                <p>
                    We're registered with the Pennsylvania Attorney General as a home improvement contractor ({site.hic}) and carry insurance. Every job gets a written contract with the price, the scope of work and the guarantee before we start.
                </p>
            </Split>

            <Gallery cols={2} title="Homes we've coated" lead="Metal roofs on houses, before and after coating." items={[{ img: jobs.houseBA, title: "Ranch house", tag: "Before and after", graphic: true }, { img: jobs.houseBlueBA, title: "Blue house", tag: "Before and after", graphic: true }]} />

            <Steps eyebrow="What to expect" title="What to expect" steps={steps} />

            <FinalCta title="Get a free estimate for your home" />
        </Layout>
    )
}
