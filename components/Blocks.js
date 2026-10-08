// Page sections, built from SummitRoof template markup (class names and
// structure kept so its CSS and motion scripts apply unchanged).
import Icon from "./Icon"
import InspectionForm from "./InspectionForm"
import { site, trust, smsHref, telHref } from "@/data/site"

export function Img({ img, sizes = "(max-width: 900px) 100vw, 50vw", priority, ...rest }) {
    return (
        <img
            src={img.src}
            srcSet={img.srcSet}
            sizes={sizes}
            alt={img.alt}
            loading={priority ? undefined : "lazy"}
            fetchpriority={priority ? "high" : undefined}
            decoding="async"
            {...rest}
        />
    )
}

export function CallButtons({ inspect = "Book a Free Inspection", text = "Text Us a Photo", call = true, dark }) {
    return (
        <div className="pg-hero-ctas">
            <a className={`sr-btn ${dark ? "sr-btn--dark" : "sr-btn--accent"} sr-btn--lg`} href="/free-inspection">{inspect}</a>
            {call && <a className="sr-btn sr-btn--outline sr-btn--lg" href={telHref}><Icon name="phone" />Call {site.phone}</a>}
            {text && <a className="sr-btn sr-btn--outline sr-btn--lg" href={smsHref}><Icon name="sms" />{text}</a>}
        </div>
    )
}

export function TrustBar({ items = trust }) {
    return (
        <div className="sr-cert" role="list" aria-label="Why you can trust us">
            <div className="sr-container">
                {items.map((t) => <span key={t} role="listitem"><Icon name="check" />{t}</span>)}
            </div>
        </div>
    )
}

export function PageHero({ crumbs, eyebrow, title, lead, img, children }) {
    return (
        <section className={`pg-page-hero${img ? "" : " pg-page-hero--text"}`}>
            <div className="sr-container">
                {crumbs && (
                    <nav aria-label="Breadcrumb">
                        <p className="sr-caption">
                            <a href="/">Home</a>
                            {crumbs.map((c) => <span key={c.label}> · {c.href ? <a href={c.href}>{c.label}</a> : c.label}</span>)}
                        </p>
                    </nav>
                )}
                <div className="sr-split">
                    <div className="reveal">
                        {eyebrow && <span className="sr-eyebrow">{eyebrow}</span>}
                        <h1 style={{ margin: "10px 0 16px" }}>{title}</h1>
                        {lead && <p className="sr-lead">{lead}</p>}
                        <div style={{ marginTop: 28 }}>{children}</div>
                    </div>
                    {img && <div className="pg-page-hero__media reveal"><Img img={img} priority /></div>}
                </div>
            </div>
        </section>
    )
}

export function SectionHead({ eyebrow, title, lead }) {
    return (
        <div className="sr-section-head reveal">
            {eyebrow && <span className="sr-eyebrow">{eyebrow}</span>}
            <h2>{title}</h2>
            {lead && <p className="sr-lead">{lead}</p>}
        </div>
    )
}

export function Checks({ items, x }) {
    return (
        <div className={`sr-pricing pg-checks${x ? " pg-list--x" : ""}`}>
            <ul>{items.map((i) => <li key={i}>{i}</li>)}</ul>
        </div>
    )
}

// Text one side, a photo or checklist the other (template's split section).
export function Split({ eyebrow, title, children, media, soft, flip }) {
    return (
        <section className={`sr-section${soft ? " sr-section--soft" : ""}`}>
            <div className="sr-container sr-split" style={{ alignItems: "center" }}>
                {flip && <div className="reveal">{media}</div>}
                <div className="reveal">
                    {eyebrow && <span className="sr-eyebrow">{eyebrow}</span>}
                    <h2 style={{ margin: "10px 0 16px" }}>{title}</h2>
                    {children}
                </div>
                {!flip && <div className="reveal">{media}</div>}
            </div>
        </section>
    )
}

export function Photo({ img, ratio = "4/3" }) {
    return (
        <div style={{ borderRadius: "var(--radius-xl)", overflow: "hidden", boxShadow: "var(--shadow-lg)", aspectRatio: ratio }}>
            <Img img={img} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
    )
}

export function Steps({ eyebrow = "How it works", title, lead, steps, soft = true }) {
    const cols = steps.length >= 5 ? "sr-cols-3" : steps.length === 4 ? "sr-cols-4" : "sr-cols-3"
    return (
        <section className={`sr-section${soft ? " sr-section--soft" : ""}`}>
            <div className="sr-container">
                <SectionHead eyebrow={eyebrow} title={title} lead={lead} />
                <div className={`sr-grid ${cols}`}>
                    {steps.map((s, i) => (
                        <div className="sr-card sr-step" key={s.title}>
                            <div className="sr-step__num">{i + 1}</div>
                            <h4>{s.title}</h4>
                            <p>{s.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export function Values({ eyebrow, title, items, img }) {
    return (
        <section className="sr-section sr-section--soft sr-whyus">
            <div className="sr-container">
                <div className="sr-whyus__media"><Img img={img} /></div>
                <div>
                    {eyebrow && <span className="sr-eyebrow">{eyebrow}</span>}
                    <h2 style={{ margin: "10px 0 24px" }}>{title}</h2>
                    <div className="sr-grid sr-cols-2">
                        {items.map((v) => (
                            <div className="sr-value" style={{ padding: 0 }} key={v.title}>
                                <div className="sr-service__icon"><Icon name={v.icon} /></div>
                                <div><h4>{v.title}</h4><p>{v.text}</p></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export function BeforeAfter({ job, place }) {
    return (
        <div className="sr-gallery-item">
            <div className="sr-ba">
                <button className="sr-lb-btn" data-lb={job.after.src} data-lb-cap={`${job.title}, after coating`} data-lb-group="work" aria-label="View the finished roof larger"><Icon name="expand" /></button>
                <Img img={job.before} sizes="(max-width: 900px) 100vw, 640px" />
                <Img img={job.after} className="sr-ba__after" sizes="(max-width: 900px) 100vw, 640px" />
                <span className="sr-ba__handle" />
                <span className="sr-ba__tag sr-ba__tag--b">Before</span>
                <span className="sr-ba__tag sr-ba__tag--a">After</span>
            </div>
            <div className="sr-gallery-item__cap"><strong>{job.title}</strong><span>{place || job.tag}</span></div>
        </div>
    )
}

export function PhotoCard({ img, title, tag, graphic }) {
    return (
        <div className={`sr-gallery-item${graphic ? " pg-graphic" : ""}`}>
            <div className="sr-ba" style={{ cursor: "default" }}>
                <button className="sr-lb-btn" data-lb={img.src} data-lb-cap={title} data-lb-group="work" aria-label="View photo larger"><Icon name="expand" /></button>
                <Img img={img} sizes="(max-width: 900px) 100vw, 640px" />
            </div>
            <div className="sr-gallery-item__cap"><strong>{title}</strong><span>{tag}</span></div>
        </div>
    )
}

export function Reels({ items, eyebrow = "On the roof", title = "Watch the prep and the coating go on", lead }) {
    return (
        <section className="sr-section">
            <div className="sr-container">
                <SectionHead eyebrow={eyebrow} title={title} lead={lead} />
                <div className={`pg-reels${items.length === 3 ? " pg-reels--3" : ""}`}>
                    {items.map((r) => (
                        <figure className="pg-reel reveal" key={r.src}>
                            <video controls muted playsInline preload="none" poster={r.poster} aria-label={r.title}>
                                <source src={r.src} type="video/mp4" />
                            </video>
                            <figcaption>{r.title}</figcaption>
                        </figure>
                    ))}
                </div>
                <p className="sr-muted" style={{ textAlign: "center", marginTop: 20, fontSize: ".9rem" }}>
                    More jobs on <a href={site.facebook} target="_blank" rel="noopener" style={{ fontWeight: 600 }}>our Facebook page</a>.
                </p>
            </div>
        </section>
    )
}

export function Faq({ items, title = "Common questions", eyebrow = "Questions", more, soft }) {
    return (
        <section className={`sr-section${soft ? " sr-section--soft" : ""}`}>
            <div className="sr-container" style={{ maxWidth: 820 }}>
                <SectionHead eyebrow={eyebrow} title={title} />
                <div className="reveal">
                    {items.map((f, i) => (
                        <div className={`sr-acc${i === 0 ? " is-open" : ""}`} key={f.q}>
                            <button className="sr-acc__head" aria-expanded={i === 0 ? "true" : "false"}>
                                {f.q}<span className="sr-acc__icon"><Icon name="plus" /></span>
                            </button>
                            <div className="sr-acc__body"><div><p>{f.a}</p></div></div>
                        </div>
                    ))}
                </div>
                {more && <p style={{ textAlign: "center", marginTop: 24 }}><a className="sr-btn sr-btn--outline" href="/faq">See All FAQs</a></p>}
            </div>
        </section>
    )
}

export function faqSchema(items) {
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    }
}

export function serviceSchema(serviceType, path) {
    return {
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType,
        url: `${site.url}${path}`,
        provider: { "@id": `${site.url}/#business` },
        areaServed: ["Pennsylvania", "Ohio", "West Virginia", "Virginia"],
    }
}

export function breadcrumbSchema(crumbs) {
    const list = [{ name: "Home", path: "/" }, ...crumbs]
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: list.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.name, item: `${site.url}${c.path === "/" ? "" : c.path}` })),
    }
}

export function CtaBand({ title, text, button = "Book a Free Inspection" }) {
    return (
        <section className="sr-cta-band">
            <div className="sr-container">
                <div><h2>{title}</h2>{text && <p>{text}</p>}</div>
                <a className="sr-btn sr-btn--dark sr-btn--lg" href="/free-inspection">{button}</a>
            </div>
        </section>
    )
}

// Closing section on every page: copy and buttons left, the form right.
export function FinalCta({ title = "Get your roof looked at for free", id = "qf-end" }) {
    return (
        <section className="sr-section sr-section--soft" id="quote">
            <div className="sr-container sr-split" style={{ alignItems: "start" }}>
                <div className="reveal">
                    <span className="sr-eyebrow">Free inspection</span>
                    <h2 style={{ margin: "10px 0 16px" }}>{title}</h2>
                    <p className="sr-lead">
                        Call or text {site.phone}, or fill out the short form and we'll set up a time to come look at your roof. The inspection and written estimate are free.
                    </p>
                    <div style={{ marginTop: 28 }}>
                        <div className="pg-hero-ctas">
                            <a className="sr-btn sr-btn--dark sr-btn--lg" href={telHref}><Icon name="phone" />Call {site.phone}</a>
                            <a className="sr-btn sr-btn--outline sr-btn--lg" href={smsHref}><Icon name="sms" />Text Us a Photo</a>
                        </div>
                    </div>
                    <p className="sr-muted" style={{ marginTop: 24, fontSize: ".9rem" }}>{site.hic} · Fully insured · Serving {site.regionShort}</p>
                </div>
                <div className="reveal"><InspectionForm id={id} /></div>
            </div>
        </section>
    )
}

// Stock photo with its licence credit. Used only where William has no photo of
// his own yet, and never captioned as a ProGrade job (see `stock` in site.js).
export function StockPhoto({ img, caption, ratio = "4/3" }) {
    const c = img.credit
    return (
        <figure className="pg-stock" style={{ margin: 0 }}>
            <div style={{ borderRadius: "var(--radius-xl)", overflow: "hidden", boxShadow: "var(--shadow-lg)", aspectRatio: ratio }}>
                <Img img={img} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <figcaption className="pg-stock__cap">
                {caption}
                {c && (
                    <> Photo: <a href={c.src} target="_blank" rel="noopener">{c.by}</a>, <a href={c.licUrl} target="_blank" rel="noopener">{c.lic}</a>.</>
                )}
            </figcaption>
        </figure>
    )
}

// Grid of his jobs: before/after sliders and single photos.
export function Gallery({ eyebrow = "Our work", title, lead, items, soft, cols = 3 }) {
    return (
        <section className={`sr-section${soft ? " sr-section--soft" : ""}`}>
            <div className="sr-container" style={cols === 2 ? { maxWidth: 900 } : undefined}>
                <SectionHead eyebrow={eyebrow} title={title} lead={lead} />
                <div className={`sr-grid sr-cols-${cols}`}>
                    {items.map((it, i) =>
                        it.before ? <BeforeAfter key={i} job={it} /> : <PhotoCard key={i} img={it.img} title={it.title} tag={it.tag} graphic={it.graphic} />
                    )}
                </div>
            </div>
        </section>
    )
}
