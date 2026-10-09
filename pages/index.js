import Layout from "@/components/Layout"
import Icon from "@/components/Icon"
import InspectionForm from "@/components/InspectionForm"
import { TrustBar, SectionHead, Steps, Values, BeforeAfter, Gallery, Reels, Faq, FinalCta, Img, HeroBg, faqSchema } from "@/components/Blocks"
import { site, services, jobSteps, whyUs, jobs, reels, faq, states, smsHref, telHref } from "@/data/site"

const homeFaq = [faq.rusty, faq.cost, faq.life, faq.shutdown]

export default function Home() {
    return (
        <Layout
            title="Barn & Metal Roof Coating in Western PA | ProGrade"
            description={`Licensed, insured roof coating for barns, metal, commercial and home roofs in Western PA, eastern Ohio and northern WV. Free inspections. Call ${site.phone}.`}
            schema={[{ "@context": "https://schema.org", "@type": "WebSite", name: site.name, url: site.url }, faqSchema(homeFaq)]}
        >
            {/* Hero: template Home 01 (full photo + inline form) */}
            <section className="sr-hero sr-hero--full sr-hero--split">
                <div className="sr-hero__bg">
                    <HeroBg img={jobs.steel.after} />
                </div>
                <div className="sr-container">
                    <div className="sr-hero__content">
                        <span className="sr-eyebrow pg-hero-eyebrow">Locally owned · {site.years} years in business</span>
                        <h1 style={{ marginTop: 16 }}>Barn and Metal Roof Coating in Western Pennsylvania</h1>
                        <p className="sr-lead" style={{ marginTop: 20 }}>
                            We seal leaks, stop rust and add years to farm, commercial and residential roofs for a fraction of what a new roof costs. Locally owned, licensed and insured, {site.years} years in business.
                        </p>
                        <div className="sr-hero__ctas" style={{ marginTop: 28 }}>
                            <a className="sr-btn sr-btn--accent sr-btn--lg" href="/free-inspection">Book a Free Inspection</a>
                            <a className="sr-btn sr-btn--outline sr-btn--lg" href={telHref}><Icon name="phone" />Call {site.phone}</a>
                            <a className="sr-btn sr-btn--outline sr-btn--lg" href={smsHref}><Icon name="sms" />Text Us a Photo</a>
                        </div>
                    </div>
                    <div className="sr-hero__form">
                        <InspectionForm id="qf-hero" short title="Get your free roof inspection" button="Book My Free Inspection" />
                    </div>
                </div>
            </section>

            <TrustBar />

            {/* What we coat: template photo service cards */}
            <section className="sr-section">
                <div className="sr-container">
                    <SectionHead eyebrow="What we coat" title="Roofs we work on" lead="Most of our work is on farm buildings, and we coat metal, rubber and flat roofs on commercial buildings and homes too." />
                    <div className="sr-grid sr-cols-3">
                        {[...services, { href: "/roof-coating-vs-replacement", icon: "dollar", title: "Coating vs replacement", text: "Not sure which your roof needs? A straight comparison of cost, time and lifespan." }].map((s) => (
                            <a className="sr-card sr-service sr-service--photo" href={s.href} key={s.href}>
                                <div className="sr-service__media">{s.img ? <Img img={{ ...s.img, alt: "" }} sizes="(max-width: 600px) 112px, (max-width: 900px) 50vw, 400px" /> : <div className="pg-card-panel"><Icon name={s.icon} /></div>}</div>
                                <div className="sr-service__body">
                                    <div className="sr-service__icon"><Icon name={s.icon} /></div>
                                    <h3 style={{ fontSize: "1.2rem" }}>{s.title}</h3>
                                    <p>{s.text}</p>
                                    <span style={{ fontWeight: 600, fontSize: ".9rem", display: "inline-flex", gap: 6, alignItems: "center", color: "var(--gold-ink)" }}>Learn more <Icon name="arrow" /></span>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Cost */}
            <section className="sr-section sr-section--soft">
                <div className="sr-container sr-split" style={{ alignItems: "center" }}>
                    <div className="reveal">
                        <span className="sr-eyebrow">Coating vs. a new roof</span>
                        <h2 style={{ margin: "10px 0 16px" }}>Keep the roof you have and spend a lot less</h2>
                        <p>
                            A new metal roof means paying for tear-off, disposal, new panels and trim, and the building is often out of use during the work. Coating skips all of that. We clean the roof you already have, treat the rust, seal the seams and screws, and coat the whole surface.
                        </p>
                        <p style={{ marginTop: 14 }}>
                            Nationally, replacing a metal roof commonly runs about $8 to $25 per square foot. Coating costs a fraction of that. You get an exact written price after the free inspection, before any work starts.
                        </p>
                        <a className="sr-btn sr-btn--dark" href="/roof-coating-vs-replacement" style={{ marginTop: 24 }}>See Coating vs Replacement <Icon name="arrow" /></a>
                    </div>
                    <div className="reveal"><BeforeAfter job={jobs.steel} /></div>
                </div>
            </section>

            <Steps eyebrow="The process" title="How a ProGrade coating job works" steps={jobSteps} soft={false} />

            {/* Proof: his own jobs */}
            <Gallery soft title="Recent work" lead="Drag the slider on each photo to compare the roof before and after coating." items={[jobs.barn, jobs.longBarn, jobs.quonset, jobs.steel, jobs.smallBarn, jobs.lowBarn]} />

            <Reels items={[reels.rust, reels.seams, reels.coating, reels.spray]} />

            <Values eyebrow="Why ProGrade" title="Why property owners call us" items={[whyUs[0], whyUs[1], whyUs[3], whyUs[4]]} img={jobs.barn.after} />

            {/* Service area: template areas block */}
            <section className="sr-section sr-areas">
                <div className="sr-container">
                    <div className="sr-areas__map"><Img img={jobs.firehall} /></div>
                    <div>
                        <span className="sr-eyebrow">Service area</span>
                        <h2 style={{ margin: "10px 0 20px" }}>Where we work</h2>
                        <p>We're based in {site.base}, and coat roofs across {site.region}.</p>
                        <div className="sr-areas__chips">
                            {states.map((s) => <a className="sr-chip" key={s.slug} href={`/service-areas/${s.slug}`}><Icon name="pin" />&nbsp;{s.card}</a>)}
                        </div>
                        <a className="sr-btn sr-btn--outline" href="/service-areas">See Our Service Area</a>
                    </div>
                </div>
            </section>

            <Faq items={homeFaq} soft more />

            <FinalCta />
        </Layout>
    )
}
