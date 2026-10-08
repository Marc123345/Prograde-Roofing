import { useEffect } from "react"
import Layout from "@/components/Layout"
import Icon from "@/components/Icon"
import { site, smsHref, telHref } from "@/data/site"

// Plan 4.16: fire Meta Lead + GA4 generate_lead with building type and ZIP.
// Both calls are guarded, so nothing breaks before the Pixel / GA4 are added.
export default function ThankYou() {
    useEffect(() => {
        const q = new URLSearchParams(window.location.search)
        const params = { building_type: q.get("type") || undefined, zip: q.get("zip") || undefined }
        if (typeof window.fbq === "function") window.fbq("track", "Lead", params)
        if (typeof window.gtag === "function") window.gtag("event", "generate_lead", params)
    }, [])
    return (
        <Layout noindex title="Thanks, we got your request | ProGrade Roof Coatings" description="Your free roof inspection request was received.">
            <section className="sr-section">
                <div className="sr-container" style={{ maxWidth: 720, textAlign: "center" }}>
                    <div className="sr-form-status__icon" aria-hidden="true" style={{ margin: "0 auto 16px" }}><Icon name="check" /></div>
                    <h1 style={{ marginBottom: 16 }}>Thanks, we got your request</h1>
                    <p className="sr-lead">
                        William or someone from our crew will call or text you soon to set up your free inspection. Want to speed things up? Text a photo of your roof to {site.phone}.
                    </p>
                    <div className="pg-hero-ctas" style={{ justifyContent: "center", marginTop: 28 }}>
                        <a className="sr-btn sr-btn--accent sr-btn--lg" href={smsHref}><Icon name="sms" />Text a Photo Now</a>
                        <a className="sr-btn sr-btn--outline sr-btn--lg" href={telHref}><Icon name="phone" />Call {site.phone}</a>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
