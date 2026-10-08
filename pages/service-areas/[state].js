import Layout from "@/components/Layout"
import { PageHero, CallButtons, TrustBar, Split, Checks, Photo, BeforeAfter, PhotoCard, FinalCta, breadcrumbSchema } from "@/components/Blocks"
import { contractorSchema } from "@/components/Layout"
import { site, states, jobs } from "@/data/site"

export async function getStaticPaths() {
    return { paths: states.map((s) => ({ params: { state: s.slug } })), fallback: false }
}
export async function getStaticProps({ params }) {
    return { props: { slug: params.state } }
}

export default function StatePage({ slug }) {
    const s = states.find((x) => x.slug === slug)
    const path = `/service-areas/${s.slug}`
    const pa = s.slug === "pennsylvania"
    return (
        <Layout
            title={s.title}
            description={s.description}
            noindex={s.noindex}
            schema={[
                { ...contractorSchema, "@id": undefined, areaServed: { "@type": "State", name: s.name } },
                breadcrumbSchema([{ name: "Service Areas", path: "/service-areas" }, { name: s.name, path }]),
            ]}
        >
            <PageHero
                crumbs={[{ label: "Service Areas", href: "/service-areas" }, { label: s.name }]}
                eyebrow={s.card}
                title={s.h1}
                lead={s.sub}
                img={pa ? jobs.firehallCoating : jobs.steel.after}
            >
                <CallButtons text={false} />
            </PageHero>
            {pa && <TrustBar />}

            <Split eyebrow="What we coat" title="Roofs we coat here" media={<BeforeAfter job={pa ? jobs.steel : jobs.barn} />}>
                <Checks items={["Barns, pole buildings and farm sheds", "Metal roofs on shops and commercial buildings", "Rubber and flat roofs", "Homes, garages and outbuildings"]} />
                <p style={{ marginTop: 16 }}>
                    Not sure if we cover your county? Call or text <a href={`tel:${site.tel}`} style={{ fontWeight: 600 }}>{site.phone}</a> with your town.
                </p>
            </Split>

            <Split soft flip eyebrow={s.card} title={s.angleTitle} media={pa ? <PhotoCard img={jobs.firehall} title="Hookstown Fire Department" tag="Beaver County, PA" /> : <Photo img={jobs.steelAngle} />}>
                <p>{s.angle}</p>
                <p style={{ marginTop: 14 }}>
                    <a href="/agricultural-roof-coating" style={{ fontWeight: 600 }}>Barn roof coating</a> · <a href="/metal-roof-coating" style={{ fontWeight: 600 }}>Metal roof coating</a>
                </p>
            </Split>

            <FinalCta title={`Get a free roof inspection in ${s.name}`} />
        </Layout>
    )
}
