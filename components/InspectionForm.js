import { useState } from "react"
import Icon from "./Icon"
import { site, smsHref, telHref } from "@/data/site"

// The standard inspection form from the plan (section 3), plus the 4-field
// short version used on the Facebook landing page.
//
// It never fakes a send. With no endpoint configured it shows a call/text
// panel; with one, it POSTs and moves to /thank-you, where the Meta Lead and
// GA4 generate_lead events fire.
const buildingTypes = ["Barn or farm building", "Commercial", "Home or garage", "Other"]
const roofSizes = ["Under 2,000 sq ft", "2,000 to 5,000", "5,000 to 10,000", "Over 10,000", "Not sure"]

export default function InspectionForm({ id = "qf", short = false, title = "Book your free inspection", button = "Book My Free Inspection" }) {
    const [state, setState] = useState("idle") // idle | sending | error | offline

    async function onSubmit(e) {
        e.preventDefault()
        const form = e.currentTarget
        const data = new FormData(form)
        if (!site.leadEndpoint) {
            setState("offline")
            return
        }
        setState("sending")
        try {
            const r = await fetch(site.leadEndpoint, { method: "POST", body: data, headers: { Accept: "application/json" } })
            if (!r.ok) throw new Error(String(r.status))
            const q = new URLSearchParams({ type: data.get("building_type") || "", zip: data.get("zip") || "" })
            window.location.href = `/thank-you?${q}`
        } catch {
            setState("error")
        }
    }

    if (state === "offline") {
        return (
            <div className="sr-form-card pg-form-fallback" role="status" aria-live="polite">
                <div className="sr-form-status__icon" aria-hidden="true"><Icon name="phone" /></div>
                <h3 className="sr-form-status__title">Please call or text us</h3>
                <p className="sr-form-status__msg">
                    Our online form isn't connected yet, so nothing was sent. Call or text {site.phone} and we'll set up your free inspection.
                </p>
                <div className="pg-hero-ctas">
                    <a className="sr-btn sr-btn--accent" href={telHref}><Icon name="phone" />Call {site.phone}</a>
                    <a className="sr-btn sr-btn--outline" href={smsHref}><Icon name="sms" />Text a photo</a>
                </div>
            </div>
        )
    }

    const f = (n) => `${id}-${n}`
    return (
        <form className="sr-form-card" onSubmit={onSubmit} encType="multipart/form-data" noValidate={false}>
            <h3>{title}</h3>
            <p className="sr-muted" style={{ fontSize: ".9rem" }}>No cost and no obligation.</p>
            {state === "error" && (
                <div className="sr-form-status is-error" role="alert">
                    <span className="sr-form-status__icon" aria-hidden="true">!</span>
                    <span>Sorry, that didn't go through. Please try again, or call or text <a href={telHref}>{site.phone}</a>.</span>
                </div>
            )}
            <input type="hidden" name="form" value={short ? "barn-landing" : "inspection"} />
            <div className="sr-field-row">
                <div className="sr-field">
                    <label htmlFor={f("name")}>Name</label>
                    <input id={f("name")} name="name" autoComplete="name" type="text" required />
                </div>
                <div className="sr-field">
                    <label htmlFor={f("phone")}>Best number to call or text</label>
                    <input id={f("phone")} name="phone" autoComplete="tel" type="tel" inputMode="tel" required />
                </div>
            </div>
            <div className="sr-field-row">
                {!short && (
                    <div className="sr-field">
                        <label htmlFor={f("email")}>Email <span className="pg-opt">(optional)</span></label>
                        <input id={f("email")} name="email" autoComplete="email" type="email" />
                    </div>
                )}
                <div className="sr-field">
                    <label htmlFor={f("zip")}>Property ZIP code</label>
                    <input id={f("zip")} name="zip" autoComplete="postal-code" type="text" inputMode="numeric" pattern="[0-9]{5}" maxLength={5} required />
                </div>
                {short && (
                    <div className="sr-field">
                        <label htmlFor={f("type")}>Building type</label>
                        <select id={f("type")} name="building_type" required defaultValue="">
                            <option value="" disabled>Choose one</option>
                            {buildingTypes.slice(0, 3).map((t) => <option key={t}>{t}</option>)}
                        </select>
                    </div>
                )}
            </div>
            {!short && (
                <>
                    <div className="sr-field-row">
                        <div className="sr-field">
                            <label htmlFor={f("type")}>Building type</label>
                            <select id={f("type")} name="building_type" required defaultValue="">
                                <option value="" disabled>Choose one</option>
                                {buildingTypes.map((t) => <option key={t}>{t}</option>)}
                            </select>
                        </div>
                        <div className="sr-field">
                            <label htmlFor={f("size")}>Rough roof size <span className="pg-opt">(optional)</span></label>
                            <select id={f("size")} name="roof_size" defaultValue="">
                                <option value="">Choose one</option>
                                {roofSizes.map((t) => <option key={t}>{t}</option>)}
                            </select>
                        </div>
                    </div>
                    <fieldset className="sr-field" style={{ border: 0, padding: 0 }}>
                        <legend style={{ fontSize: ".875rem", fontWeight: 500, marginBottom: 6 }}>How should we reach you? <span className="pg-opt">(optional)</span></legend>
                        <div className="pg-radio-row">
                            {["Call", "Text", "Email"].map((c) => (
                                <label key={c}><input type="radio" name="contact_preference" value={c} />{c}</label>
                            ))}
                        </div>
                    </fieldset>
                    <div className="sr-field">
                        <label htmlFor={f("photo")}>Photo of the roof <span className="pg-opt">(optional, helps us pre-check it)</span></label>
                        <input id={f("photo")} name="photo" type="file" accept="image/*" />
                    </div>
                    <div className="sr-field">
                        <label htmlFor={f("notes")}>Anything else? <span className="pg-opt">(optional)</span></label>
                        <textarea id={f("notes")} name="notes" rows={3} />
                    </div>
                </>
            )}
            <button className="sr-btn sr-btn--accent sr-btn--block sr-btn--lg" type="submit" style={{ marginTop: 20 }} disabled={state === "sending"}>
                {state === "sending" ? "Sending..." : button}
            </button>
            <p className="sr-form-note">
                {short ? "No cost, no obligation. We'll call or text to set a time." : "No cost and no obligation. We'll call or text to set up a time."}{" "}
                See our <a href="/privacy-policy">privacy policy</a>.
            </p>
        </form>
    )
}
