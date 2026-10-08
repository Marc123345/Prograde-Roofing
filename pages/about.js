import Layout from "@/components/Layout"
import { contractorSchema } from "@/components/Layout"
import { PageHero, TrustBar, Split, Checks, Photo, BeforeAfter, Reels, FinalCta, breadcrumbSchema } from "@/components/Blocks"
import { site, jobs, reels } from "@/data/site"

export default function About() {
    return (
        <Layout
            title="About ProGrade Roof Coatings | William Gorman"
            description={`ProGrade Roof Coatings is owned and run by William Gorman. ${site.years} years coating barns and metal roofs in Western PA. Licensed and insured.`}
            schema={[
                { "@context": "https://schema.org", "@type": "AboutPage", name: `About ${site.name}`, about: { "@id": `${site.url}/#business` } },
                breadcrumbSchema([{ name: "About", path: "/about" }]),
            ]}
        >
            <PageHero
                crumbs={[{ label: "About" }]}
                eyebrow="Owner-run"
                title="About ProGrade Roof Coatings"
                lead={`Owner-run, locally based and focused on farm roofs for the last ${site.years} years.`}
                img={jobs.firehallCoating}
            >
                <a className="sr-btn sr-btn--accent sr-btn--lg" href="/free-inspection">Book a Free Inspection</a>
            </PageHero>
            <TrustBar />

            <Split eyebrow="Who we are" title="Who we are" media={<BeforeAfter job={jobs.barn} />}>
                <p>
                    {site.name} is owned and run by {site.owner}. We've been coating roofs across Western Pennsylvania and the neighboring states for {site.years} years, and most of our work is on farm buildings: barns, pole buildings and equipment sheds.
                </p>
                <p style={{ marginTop: 14 }}>
                    When you call, you talk to William, the person responsible for the work.
                </p>
            </Split>

            <Split soft flip eyebrow="How we work" title="How we work" media={<Photo img={jobs.steel.after} />}>
                <Checks items={["We show up when we say we will", "We tell you if a roof should be replaced instead of coated", "You get a written price and scope before any work starts", "We clean up and walk the finished roof with you"]} />
            </Split>

            <Split eyebrow="Credentials" title="Credentials" media={<Photo img={jobs.firehall} />}>
                <Checks items={[`Pennsylvania Home Improvement Contractor, ${site.hic}`, "Fully insured", "Written workmanship guarantee on every job", "Manufacturer warranty on the coating"]} />
            </Split>

            <Reels items={[reels.rust, reels.seams, reels.coating, reels.prep]} eyebrow="Our work" title="From our jobs" />

            <FinalCta title="Talk to William about your roof" />
        </Layout>
    )
}
