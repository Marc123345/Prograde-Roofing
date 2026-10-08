import Layout from "@/components/Layout"
import Icon from "@/components/Icon"
import InspectionForm from "@/components/InspectionForm"
import { SectionHead, BeforeAfter, Img } from "@/components/Blocks"
import { site, jobs, faq } from "@/data/site"

// Facebook ad landing page (plan 4.15). No navigation, no exits besides
// call, text and the form. noindex and kept out of the sitemap.
const reasons = [
    { icon: "dollar", title: "A fraction of a new roof", text: "No tear-off, no disposal, no new steel. You get an exact written price after the free inspection." },
    { icon: "shield", title: "Prep that makes it last", text: "We wash, treat rust and seal every seam and screw before coating, so it holds." },
    { icon: "barn", title: "Your barn stays in use", text: "We work around your operation and your animals." },
]
const steps = [
    { title: "Fill out the form or text us a photo", text: "" },
    { title: "We inspect your roof for free and give you a written price", text: "" },
    { title: "We coat it and walk the finished roof with you", text: "" },
]
const mini = [faq.rusty, { q: "How long does it last?", a: faq.life.a }, faq.free]

export default function BarnLanding() {
    return (
        <Layout
            landing
            noindex
            title="Free Barn Roof Inspection | ProGrade Roof Coatings"
            description="Stop barn roof leaks and rust without a new roof. Free inspection in Western PA, OH and WV."
        >
            <section className="sr-hero sr-hero--full sr-hero--split">
                <div className="sr-hero__bg"><Img img={{ ...jobs.barn.after, alt: "" }} sizes="100vw" priority /></div>
                <div className="sr-container">
                    <div className="sr-hero__content">
                        <span className="sr-eyebrow pg-hero-eyebrow">Barns and pole buildings</span>
                        <h1 style={{ marginTop: 16 }}>Stop Barn Roof Leaks and Rust Without Replacing the Roof</h1>
                        <p className="sr-lead" style={{ marginTop: 20 }}>
                            Free in-person inspection for barns and pole buildings in Western PA, eastern Ohio and northern West Virginia. Licensed, insured and coating farm roofs for {site.years} years.
                        </p>
                    </div>
                    <div className="sr-hero__form">
                        <InspectionForm id="lp-top" short title="Get your free barn roof inspection" button="Get My Free Inspection" />
                    </div>
                </div>
            </section>

            <div className="sr-cert">
                <div className="sr-container">
                    {[site.hic, "Fully insured", `${site.years} years in business`, "Written workmanship guarantee", `Owner-run by ${site.owner}`].map((t) => <span key={t}><Icon name="check" />{t}</span>)}
                </div>
            </div>

            <section className="sr-section">
                <div className="sr-container">
                    <SectionHead eyebrow="Why ProGrade" title="Why farmers call ProGrade" />
                    <div className="sr-grid sr-cols-3">
                        {reasons.map((r) => (
                            <div className="sr-card sr-service" key={r.title}>
                                <div className="sr-service__icon"><Icon name={r.icon} /></div>
                                <h3>{r.title}</h3>
                                <p>{r.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="sr-section sr-section--soft">
                <div className="sr-container">
                    <SectionHead eyebrow="Real jobs" title="Before and after" lead="Drag the slider to compare." />
                    <div className="sr-grid sr-cols-2" style={{ maxWidth: 1040, marginInline: "auto" }}>
                        <BeforeAfter job={jobs.barn} />
                        <BeforeAfter job={jobs.steel} />
                    </div>
                </div>
            </section>

            <section className="sr-section">
                <div className="sr-container">
                    <SectionHead eyebrow="How it works" title="Three simple steps" />
                    <div className="sr-grid sr-cols-3">
                        {steps.map((s, i) => (
                            <div className="sr-card sr-step" key={s.title}><div className="sr-step__num">{i + 1}</div><h4>{s.title}</h4></div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="sr-section sr-section--soft">
                <div className="sr-container" style={{ maxWidth: 820 }}>
                    <SectionHead eyebrow="Questions" title="Quick answers" />
                    <div className="reveal">
                        {mini.map((f, i) => (
                            <div className={`sr-acc${i === 0 ? " is-open" : ""}`} key={f.q}>
                                <button className="sr-acc__head" aria-expanded={i === 0 ? "true" : "false"}>{f.q}<span className="sr-acc__icon"><Icon name="plus" /></span></button>
                                <div className="sr-acc__body"><div><p>{f.a}</p></div></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="sr-section" id="quote">
                <div className="sr-container" style={{ maxWidth: 640 }}>
                    <InspectionForm id="lp-bottom" short title="Get your free barn roof inspection" button="Get My Free Inspection" />
                </div>
            </section>
        </Layout>
    )
}
