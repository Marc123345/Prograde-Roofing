import Layout from "@/components/Layout"
import Icon from "@/components/Icon"
import { PageHero, CallButtons, FinalCta, breadcrumbSchema } from "@/components/Blocks"
import { contractorSchema } from "@/components/Layout"
import { site, states, smsHref, telHref } from "@/data/site"

export default function ServiceAreas() {
    return (
        <Layout
            title="Service Area: PA, OH, WV & VA | ProGrade Roof Coatings"
            description={`ProGrade Roof Coatings serves Western Pennsylvania, eastern Ohio, northern West Virginia and Virginia. Free roof inspections. Call ${site.phone}.`}
            schema={breadcrumbSchema([{ name: "Service Areas", path: "/service-areas" }])}
        >
            <PageHero
                crumbs={[{ label: "Service Areas" }]}
                eyebrow="Four states"
                title="Roof Coating Service Area"
                lead={`Based in ${site.base}. We coat barns, metal roofs and commercial buildings across four states.`}
            >
                <CallButtons text={false} />
            </PageHero>

            <section className="sr-section">
                <div className="sr-container">
                    <div className="sr-grid sr-cols-2">
                        {states.map((s) => (
                            <a className="sr-card pg-area-card" href={`/service-areas/${s.slug}`} key={s.slug}>
                                <div className="sr-service__icon"><Icon name="pin" /></div>
                                <h3>{s.card}</h3>
                                <p>{s.cardText}</p>
                                <span className="pg-more">Roof coating in {s.name} <Icon name="arrow" /></span>
                            </a>
                        ))}
                    </div>
                    <p className="sr-lead reveal" style={{ textAlign: "center", marginTop: 40, fontSize: "1.1rem" }}>
                        Don't see your town? <a href={telHref} style={{ fontWeight: 600 }}>Call</a> or <a href={smsHref} style={{ fontWeight: 600 }}>text</a> {site.phone} and ask. If we can get to you, we will.
                    </p>
                </div>
            </section>

            <FinalCta />
        </Layout>
    )
}
