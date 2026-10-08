import Layout from "@/components/Layout"
import Icon from "@/components/Icon"
import { PageHero, SectionHead, FinalCta, faqSchema, breadcrumbSchema } from "@/components/Blocks"
import { site, faq, telHref, smsHref } from "@/data/site"

// Each group links on to the page that covers it in depth (plan: "Each answer
// links to its matching service page").
const groups = [
    { title: "Cost", link: { href: "/roof-coating-vs-replacement", label: "Coating vs replacement" }, items: [faq.cost, faq.cheaper, { q: "Do you offer financing?", a: "Not at this time." }] },
    { title: "Will it work", link: { href: "/metal-roof-coating", label: "Metal roof coating" }, items: [faq.life, faq.leaks, faq.rusty, faq.flat, faq.warranty] },
    { title: "The job itself", link: { href: "/agricultural-roof-coating", label: "Barn roof coating" }, items: [faq.duration, faq.home, faq.season, faq.areas, faq.licensed] },
]
const all = groups.flatMap((g) => g.items)

export default function FaqPage() {
    return (
        <Layout
            title="Roof Coating FAQ: Cost, Lifespan & Warranty | ProGrade"
            description="Answers on roof coating cost, how long it lasts, coating rusty roofs, warranties and scheduling. Free inspections in Western PA, OH and WV."
            schema={[faqSchema(all), breadcrumbSchema([{ name: "FAQ", path: "/faq" }])]}
        >
            <PageHero
                crumbs={[{ label: "FAQ" }]}
                eyebrow="Questions"
                title="Roof Coating Questions"
                lead={`Straight answers to the things people ask us most. Don't see yours? Call or text ${site.phone}.`}
            >
                <div className="pg-hero-ctas">
                    <a className="sr-btn sr-btn--accent sr-btn--lg" href={telHref}><Icon name="phone" />Call {site.phone}</a>
                    <a className="sr-btn sr-btn--outline sr-btn--lg" href={smsHref}><Icon name="sms" />Text us</a>
                </div>
            </PageHero>

            {groups.map((g, gi) => (
                <section className={`sr-section${gi % 2 ? " sr-section--soft" : ""}`} key={g.title}>
                    <div className="sr-container" style={{ maxWidth: 820 }}>
                        <SectionHead eyebrow="FAQ" title={g.title} />
                        <div className="reveal">
                            {g.items.map((f, i) => (
                                <div className={`sr-acc${i === 0 ? " is-open" : ""}`} key={f.q}>
                                    <button className="sr-acc__head" aria-expanded={i === 0 ? "true" : "false"}>
                                        {f.q}<span className="sr-acc__icon"><Icon name="plus" /></span>
                                    </button>
                                    <div className="sr-acc__body"><div><p>{f.a}</p></div></div>
                                </div>
                            ))}
                        </div>
                        <p style={{ marginTop: 8 }}>
                            <a href={g.link.href} style={{ fontWeight: 600, color: "var(--gold-ink)", display: "inline-flex", gap: 6, alignItems: "center" }}>More on {g.link.label.toLowerCase()} <Icon name="arrow" /></a>
                        </p>
                    </div>
                </section>
            ))}

            <FinalCta />
        </Layout>
    )
}
