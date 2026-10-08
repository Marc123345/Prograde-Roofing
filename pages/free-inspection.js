import Layout from "@/components/Layout"
import Icon from "@/components/Icon"
import InspectionForm from "@/components/InspectionForm"
import { Checks, breadcrumbSchema } from "@/components/Blocks"
import { site, telHref, smsHref } from "@/data/site"

export default function FreeInspection() {
    return (
        <Layout
            title="Book a Free Roof Inspection | ProGrade Roof Coatings"
            description={`Book a free in-person roof inspection and written estimate for your barn, metal, commercial or home roof. Call or text ${site.phone}.`}
            schema={[
                { "@context": "https://schema.org", "@type": "ContactPage", name: "Book a Free Roof Inspection", about: { "@id": `${site.url}/#business` } },
                breadcrumbSchema([{ name: "Free Inspection", path: "/free-inspection" }]),
            ]}
        >
            <section className="pg-page-hero" style={{ paddingBottom: 48 }}>
                <div className="sr-container">
                    <nav aria-label="Breadcrumb"><p className="sr-caption"><a href="/">Home</a> · Free Inspection</p></nav>
                    <span className="sr-eyebrow" style={{ display: "block", marginTop: 16 }}>No cost, no obligation</span>
                    <h1 style={{ margin: "10px 0 12px" }}>Book a Free Roof Inspection</h1>
                    <p className="sr-lead" style={{ maxWidth: 720 }}>Tell us a little about your building and we'll set up a time to come out. No cost and no obligation.</p>
                </div>
            </section>

            {/* Form first on mobile, above the fold on desktop (plan 4.14). */}
            <section className="sr-section" style={{ paddingTop: 48 }}>
                <div className="sr-container sr-split" style={{ alignItems: "start" }}>
                    <div><InspectionForm id="qf-page" /></div>
                    <div>
                        <h2 style={{ marginBottom: 12 }}>Prefer to talk?</h2>
                        <p>
                            Call or text <a href={telHref} style={{ fontWeight: 600 }}>{site.phone}</a>. Email <a href={`mailto:${site.email}`} style={{ fontWeight: 600 }}>{site.email}</a>. Texting a photo of your roof is the fastest way to get a rough idea before we visit.
                        </p>
                        <div className="pg-hero-ctas" style={{ marginTop: 20 }}>
                            <a className="sr-btn sr-btn--dark" href={telHref}><Icon name="phone" />Call</a>
                            <a className="sr-btn sr-btn--outline" href={smsHref}><Icon name="sms" />Text a photo</a>
                            <a className="sr-btn sr-btn--outline" href={`mailto:${site.email}`}><Icon name="mail" />Email</a>
                        </div>

                        <h2 style={{ margin: "40px 0 12px" }}>What happens next</h2>
                        <Checks items={["We call or text you to set up a time.", "We come out, walk the roof and talk through what we see.", "You get a written estimate. Nothing happens until you approve it."]} />

                        <p className="sr-muted" style={{ marginTop: 24, fontSize: ".9rem" }}>{site.hic} · Fully insured · Serving {site.regionShort}</p>
                        <p style={{ marginTop: 12 }}>
                            <a href="/faq" style={{ fontWeight: 600 }}>Read the FAQ</a> · <a href="/roof-coating-vs-replacement" style={{ fontWeight: 600 }}>Coating vs replacement</a>
                        </p>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
