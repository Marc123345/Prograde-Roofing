import Layout from "@/components/Layout"
import Icon from "@/components/Icon"
import { PageHero, CallButtons, TrustBar, Gallery, Split, Checks, Photo, Steps, Values, BeforeAfter, Reels, Faq, FinalCta, SectionHead, faqSchema, serviceSchema, breadcrumbSchema } from "@/components/Blocks"
import { site, whyUs, jobs, reels, faq, trust, smsHref } from "@/data/site"

const steps = [
    { title: "Inspect", text: "We walk the roof and check the panels, screws, laps and flashing. If panels are rusted through or the structure is failing, we'll say so." },
    { title: "Power wash", text: "Dirt, chalky paint and loose rust come off so the coating can bond to the metal." },
    { title: "Treat rust", text: "Rusted areas are treated before anything goes over them, so the rust stops spreading under the coating." },
    { title: "Seal the weak points", text: "Seams, laps, screw heads and penetrations get sealed first, since that's where barn roofs leak." },
    { title: "Coat", text: "We apply an industrial-grade aluminum roof coating across the full roof." },
    { title: "Walk through it with you", text: "We look over the finished roof together and hand over your guarantee and warranty paperwork." },
]
const qs = [faq.rusty, faq.animals, faq.duration, faq.season]
const farmWhy = [
    { icon: "calendar", title: "Ten years coating roofs", text: "Agricultural buildings are our main work." },
    whyUs[1],
    whyUs[2],
    whyUs[3],
    { icon: "eye", title: "Owner-run", text: `You talk to William, the person responsible for the work.` },
    whyUs[4],
]

export default function Agricultural() {
    return (
        <Layout
            title="Barn Roof Coating for Farm Buildings | ProGrade"
            description="Stop barn roof leaks and rust without a new roof. Coating for pole barns, livestock barns and farm sheds in Western PA, OH and WV. Free inspection."
            schema={[serviceSchema("Agricultural roof coating", "/agricultural-roof-coating"), faqSchema(qs), breadcrumbSchema([{ name: "Agricultural Roof Coating", path: "/agricultural-roof-coating" }])]}
        >
            <PageHero
                crumbs={[{ label: "Agricultural Roof Coating" }]}
                eyebrow="Barns, pole buildings, farm sheds"
                title="Agricultural Roof Coating for Barns, Pole Buildings and Farm Sheds"
                lead="A rusty or leaking barn roof can usually be saved. We clean it, treat the rust, seal every seam and screw, and coat it so it keeps your hay, equipment and livestock dry for years."
                img={jobs.barn.after}
            >
                <div className="pg-hero-ctas">
                    <a className="sr-btn sr-btn--accent sr-btn--lg" href="/free-inspection">Book a Free Barn Roof Inspection</a>
                    <a className="sr-btn sr-btn--outline sr-btn--lg" href={smsHref}><Icon name="sms" />Text Us a Photo</a>
                </div>
            </PageHero>
            <TrustBar items={[`${site.years} years coating farm roofs`, ...trust.slice(1)]} />

            <Split eyebrow="Farm buildings" title="Built for the buildings on your farm" media={<Checks items={["Bank barns and hay barns", "Pole barns and machine sheds", "Dairy, hog and poultry barns", "Equipment and grain storage", "Run-in sheds and outbuildings"]} />}>
                <p>
                    Farm roofs are big, they're often old, and most are corrugated or ribbed steel. They rust first at the screws and where panels overlap, then they start to leak. Coating them is one of the cheapest ways to keep a building working.
                </p>
            </Split>

            <Split soft flip eyebrow="What you get" title="What a coating does for a farm roof" media={<BeforeAfter job={jobs.barn} />}>
                <Checks items={["Stops leaks at seams, laps and screw heads", "Seals over surface rust so it stops spreading", "Adds years before replacement is on the table", "No tear-off, so the building stays in use while we work"]} />
            </Split>

            <Split eyebrow="Cost" title="What it costs compared to a new roof" media={<Photo img={jobs.steelAngle} />}>
                <p>
                    Tearing off a large barn roof and putting on new steel means paying for removal, disposal, new panels, trim and labor. Nationally, metal roof replacement commonly runs about $8 to $25 per square foot. On a 5,000 square foot barn, that adds up fast.
                </p>
                <p style={{ marginTop: 14 }}>
                    Coating costs a fraction of that. The price depends on the size and pitch of the roof, how much rust there is and which coating fits. After the free inspection you get an exact price in writing before any work starts.
                </p>
                <a className="sr-btn sr-btn--dark" href="/roof-coating-vs-replacement" style={{ marginTop: 24 }}>Coating vs Replacement <Icon name="arrow" /></a>
            </Split>

            <Gallery soft title="Farm roofs we've coated" lead="Bank barns, pole sheds, run-ins and Quonsets. Drag the sliders to compare." items={[jobs.grayBarn, jobs.smallBarn, jobs.longBarn, { img: jobs.gambrelBA, title: "Gambrel barn", tag: "Before and after", graphic: true }, { img: jobs.poleShedBA, title: "Pole shed", tag: "Before and after", graphic: true }, { img: jobs.redBarnCoated, title: "Red bank barn", tag: "Coated roof", graphic: true }]} />

            <Steps eyebrow="Prep is the job" title="How we make sure the coating holds" lead="A coating is only as good as the prep under it. Most of the job happens before any coating goes on." steps={steps} />

            <Reels items={[reels.spray, reels.fasteners, reels.seams]} title="The prep, on a real roof" />

            <Split soft eyebrow="Your operation" title="We work around your operation" media={<Photo img={jobs.barn.before} />}>
                <p>
                    A farm doesn't stop for a roofing crew. We schedule around your work, keep our equipment out of your way, and talk with you before we wash or spray near livestock or stored feed.
                </p>
            </Split>

            <Values eyebrow="Why ProGrade" title="Why farmers hire ProGrade" items={farmWhy} img={jobs.steel.after} />

            <Faq items={qs} title="Barn roof coating questions" more />

            <FinalCta title="Get your barn roof looked at for free" />
        </Layout>
    )
}
