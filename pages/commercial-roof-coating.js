import Layout from "@/components/Layout"
import { PageHero, CallButtons, TrustBar, Split, Checks, Photo, BeforeAfter, Reels, FinalCta, serviceSchema, breadcrumbSchema } from "@/components/Blocks"
import { site, jobs, reels } from "@/data/site"

export default function Commercial() {
    return (
        <Layout
            title="Commercial Roof Coating in Western PA | ProGrade"
            description="Commercial roof coating for shops, garages and warehouses. Seal leaks and extend roof life without closing your business. Free inspection."
            schema={[serviceSchema("Commercial roof coating", "/commercial-roof-coating"), breadcrumbSchema([{ name: "Commercial Roof Coating", path: "/commercial-roof-coating" }])]}
        >
            <PageHero
                crumbs={[{ label: "Commercial Roof Coating" }]}
                eyebrow="Small commercial"
                title="Commercial Roof Coating for Small Businesses"
                lead="Shops, garages, warehouses and small commercial buildings. We seal leaks and extend the life of your roof while your business stays open."
                img={jobs.firehallCoating}
            >
                <CallButtons text={false} />
            </PageHero>
            <TrustBar items={[`${site.years} years coating roofs`, "Licensed and insured", site.hic, "Free inspections", "Written workmanship guarantee"]} />

            <Split eyebrow="Buildings" title="Buildings we coat" media={<Photo img={jobs.firehall} />}>
                <Checks items={["Auto shops and garages", "Small warehouses and storage buildings", "Retail and strip buildings", "Churches, fire halls and community halls", "Equipment dealers and farm supply businesses"]} />
                <p className="sr-muted" style={{ marginTop: 16, fontSize: ".95rem" }}>
                    We coat metal roofs, like the Hookstown Fire Department hall pictured, and rubber and flat roofs too. See <a href="/flat-roof-coating" style={{ fontWeight: 600 }}>flat and rubber roof coating</a>.
                </p>
            </Split>

            <Split soft flip eyebrow="Business case" title="Fix the roof without closing the doors" media={<BeforeAfter job={jobs.steel} />}>
                <p>
                    There's no tear-off, so there's no debris falling into your building and no gap in your roof overnight. We schedule around your hours and keep work areas clear for customers and staff.
                </p>
                <p style={{ marginTop: 14 }}>
                    Coating costs a fraction of replacement, and it can usually be recoated later instead of replaced. Ask your accountant how a coating is treated for your business compared to a new roof.
                </p>
            </Split>

            <Split eyebrow="What you get" title="What's included" media={<Photo img={jobs.steel.after} />}>
                <Checks items={["A written scope and price before work starts", "Written workmanship guarantee", "Manufacturer warranty paperwork", "A final walkthrough of the finished roof"]} />
            </Split>

            <Reels items={[reels.wide, reels.coating, reels.finished]} title="Commercial-grade prep, start to finish" />

            <FinalCta title="Get a free commercial roof inspection" />
        </Layout>
    )
}
