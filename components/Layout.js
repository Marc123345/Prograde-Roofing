import Head from "next/head"
import { useRouter } from "next/router"
import Icon from "./Icon"
import { site, nav, states, smsHref, telHref } from "@/data/site"

// Plain <a> links on purpose: the SummitRoof motion scripts initialise once
// per page load, exactly as the template was built to run.

const services = nav.slice(0, 5)

export const contractorSchema = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    "@id": `${site.url}/#business`,
    name: site.name,
    url: site.url,
    telephone: site.tel,
    email: site.email,
    logo: `${site.url}/media/logo.png`,
    image: `${site.url}/media/jobs/barn-red-after-1600.jpg`,
    founder: { "@type": "Person", name: site.owner },
    areaServed: [
        { "@type": "State", name: "Pennsylvania" },
        { "@type": "State", name: "Ohio" },
        { "@type": "State", name: "West Virginia" },
        { "@type": "State", name: "Virginia" },
    ],
    sameAs: [site.facebook],
}

function Seo({ title, description, noindex, schema, path }) {
    const url = `${site.url}${path === "/" ? "" : path}`
    const blocks = [contractorSchema, ...(schema ? [].concat(schema) : [])]
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={url} />
            {noindex && <meta name="robots" content="noindex, nofollow" />}
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content={site.name} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={url} />
            <meta property="og:image" content={`${site.url}/media/jobs/barn-red-after-1600.jpg`} />
            {blocks.map((b, i) => (
                <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(b) }} />
            ))}
        </Head>
    )
}

function Header({ path }) {
    const inServices = services.some((s) => s.href === path)
    const inAreas = path.startsWith("/service-areas")
    return (
        <>
            <div className="sr-topbar">
                <div className="sr-container">
                    <a href={telHref}><Icon name="phone" />{site.phone}</a>
                    <span className="sr-tb-mute">{site.hic}</span>
                    <span className="sr-tb-mute">Licensed &amp; insured</span>
                    <span className="sr-tb-spacer" />
                    <a href="/free-inspection">Free inspection</a>
                </div>
            </div>
            <header className="sr-nav">
                <div className="sr-container">
                    <a className="sr-logo" href="/" aria-label={`${site.name}, home`}>
                        <img src="/media/logo-160.png" alt="" width="188" height="160" />
                    </a>
                    <nav className="sr-nav-links" aria-label="Primary">
                        <div className={`sr-drop${inServices ? " is-active" : ""}`}>
                            <a href="#" className="sr-drop-toggle" aria-expanded="false">Services <Icon name="chevron" /></a>
                            <div className="sr-drop-menu">
                                {services.map((s) => (
                                    <a key={s.href} href={s.href} className={s.href === path ? "is-active" : undefined}>{s.label}</a>
                                ))}
                            </div>
                        </div>
                        <div className={`sr-drop${inAreas ? " is-active" : ""}`}>
                            <a href="/service-areas" className="sr-drop-toggle" aria-expanded="false">Service Areas <Icon name="chevron" /></a>
                            <div className="sr-drop-menu">
                                <a href="/service-areas" className={path === "/service-areas" ? "is-active" : undefined}>All service areas</a>
                                {states.map((s) => (
                                    <a key={s.slug} href={`/service-areas/${s.slug}`} className={path === `/service-areas/${s.slug}` ? "is-active" : undefined}>{s.card}</a>
                                ))}
                            </div>
                        </div>
                        <a href="/about" className={path === "/about" ? "is-active" : undefined}>About</a>
                        <a href="/faq" className={path === "/faq" ? "is-active" : undefined}>FAQ</a>
                    </nav>
                    <div className="sr-nav-right">
                        <a className="sr-nav-phone" href={telHref}><Icon name="phone" />{site.phone}</a>
                        <a className="sr-btn sr-btn--accent sr-btn--sm" href="/free-inspection">Free Inspection</a>
                        <button className="sr-burger" data-burger aria-label="Menu" aria-expanded="false"><span /><span /><span /></button>
                    </div>
                </div>
            </header>
        </>
    )
}

function Footer() {
    return (
        <footer className="sr-footer">
            <div className="sr-container">
                <div className="sr-footer__top">
                    <div>
                        <a className="sr-logo" href="/" aria-label={`${site.name}, home`}>
                            <img src="/media/logo-160.png" alt="" width="188" height="160" />
                        </a>
                        <p className="sr-small">Barn, metal, commercial and home roof coating across {site.region}.</p>
                        <p className="sr-small" style={{ marginTop: 12 }}>{site.hic} · Licensed and insured</p>
                        <a className="sr-footer__social" href={site.facebook} target="_blank" rel="noopener"><Icon name="facebook" />ProGrade on Facebook</a>
                    </div>
                    <div>
                        <h4>Services</h4>
                        <ul>{services.map((s) => <li key={s.href}><a href={s.href}>{s.label}</a></li>)}</ul>
                    </div>
                    <div>
                        <h4>Service areas</h4>
                        <ul>{states.map((s) => <li key={s.slug}><a href={`/service-areas/${s.slug}`}>{s.card}</a></li>)}</ul>
                    </div>
                    <div>
                        <h4>Contact</h4>
                        <ul>
                            <li><a href={telHref}><Icon name="phone" />{site.phone}</a></li>
                            <li><a href={smsHref}><Icon name="sms" />Text us a photo</a></li>
                            <li><a href={`mailto:${site.email}`}><Icon name="mail" />{site.email}</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/faq">FAQ</a></li>
                            <li><a href="/free-inspection">Free Inspection</a></li>
                        </ul>
                    </div>
                </div>
                <div className="sr-footer__bottom">
                    <span>© {new Date().getFullYear()} {site.name} · {site.hic}</span>
                    <span><a href="/privacy-policy">Privacy Policy</a></span>
                </div>
            </div>
        </footer>
    )
}

export function MobileBar() {
    return (
        <nav className="pg-mobile-bar" aria-label="Quick contact">
            <a href={telHref}><Icon name="phone" />Call</a>
            <a href={smsHref}><Icon name="sms" />Text</a>
            <a href="/free-inspection" className="is-primary"><Icon name="clipboard" />Free Inspection</a>
        </nav>
    )
}

export default function Layout({ title, description, noindex, schema, landing, children }) {
    const { asPath } = useRouter()
    const path = asPath.split(/[?#]/)[0]
    return (
        <>
            <Seo title={title} description={description} noindex={noindex} schema={schema} path={path} />
            <div className="sr-progress" />
            <a className="sr-skip" href="#main">Skip to content</a>
            {landing ? (
                <div className="pg-lp-bar">
                    <div className="sr-container">
                        <img src="/media/logo-160.png" alt={site.name} width="188" height="160" />
                        <a className="sr-btn sr-btn--accent sr-btn--sm" href={telHref}><Icon name="phone" />{site.phone}</a>
                    </div>
                </div>
            ) : (
                <Header path={path} />
            )}
            <main id="main">{children}</main>
            {landing ? (
                <footer className="sr-footer" style={{ paddingBlock: "32px" }}>
                    <div className="sr-container">
                        <div className="sr-footer__bottom" style={{ marginTop: 0, borderTop: 0, paddingTop: 0 }}>
                            <span>{site.name} · <a href={telHref}>{site.phone}</a> · {site.hic}</span>
                            <span><a href="/privacy-policy">Privacy Policy</a></span>
                        </div>
                    </div>
                </footer>
            ) : (
                <Footer />
            )}
            <MobileBar />
            <button className="sr-top" aria-label="Back to top"><Icon name="arrowUp" /></button>
        </>
    )
}
