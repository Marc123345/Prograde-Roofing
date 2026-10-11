import Layout from "@/components/Layout"
import Icon from "@/components/Icon"
import { PageHero, CallButtons, FinalCta, Img, breadcrumbSchema } from "@/components/Blocks"
import { contractorSchema } from "@/components/Layout"
import { site, states, jobs, smsHref, telHref } from "@/data/site"

const areaPhotos = {
    pennsylvania: jobs.firehallCoating,
    ohio: jobs.grayBarn.after,
    "west-virginia": jobs.smallBarn.after,
    virginia: jobs.quonset.after,
}

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
                    {/* Bento: Western PA (home base) is the lead tile on a real PA job
                        (Hookstown, Beaver County). The other photos are background only,
                        with no caption, so they don't claim a job in that state. */}
                    <div className="sr-grid pg-bento pg-bento--areas">
                        {states.map((s, i) => (
                            <a
                                className={`sr-card pg-bento__item${i === 0 ? " pg-bento__item--lead" : i === 1 ? " pg-bento__item--wide" : ""}`}
                                href={`/service-areas/${s.slug}`}
                                key={s.slug}
                            >
                                <div className="pg-bento__media">
                                    <Img
                                        img={{ ...areaPhotos[s.slug], alt: "" }}
                                        sizes={i === 0 ? "(max-width: 600px) calc(100vw - 32px), (max-width: 1100px) 100vw, 620px" : i === 1 ? "(max-width: 600px) calc(100vw - 32px), (max-width: 1100px) 50vw, 620px" : "(max-width: 600px) calc(100vw - 32px), (max-width: 1100px) 50vw, 300px"}
                                    />
                                </div>
                                <div className="pg-bento__body">
                                    <span className="pg-bento__num"><Icon name="pin" /></span>
                                    <h3>{s.card}</h3>
                                    <p>{s.cardText}</p>
                                    <span className="pg-bento__more">Roof coating in {s.name} <Icon name="arrow" /></span>
                                </div>
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
