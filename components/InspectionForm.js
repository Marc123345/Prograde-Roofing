import { useRef, useState } from "react"
import { site, consentText, formPrivacyText } from "@/data/site"

// The standard inspection form from the plan (section 3), plus the 4-field
// short version used on the Facebook landing page.
//
// It posts straight into the Jotform (site.jotformId) as a normal form
// submission (so photo uploads work and no API key is needed), aimed at a
// hidden iframe. When Jotform's response loads in that frame, the visitor is
// sent to /thank-you, where the Meta Lead / GA4 events fire, so the site
// never depends on Jotform's own thank-you/redirect settings. Field names
// below are the Jotform's own: change a field there and change it here too.
const F = {
    name: "q2_q2_textbox0",
    phone: "q3_q3_textbox1",
    email: "q4_q4_email2",
    zip: "q5_q5_textbox3",
    type: "q6_q6_dropdown4",
    size: "q7_q7_dropdown5",
    contact: "q8_q8_radio6",
    photo: "q9_q9_fileupload7[]",
    notes: "q10_q10_textarea8",
    consent: "q11_q11_checkbox9[]",
}
const buildingTypes = ["Barn or farm building", "Commercial", "Home or garage", "Other"]
const roofSizes = ["Under 2,000 sq ft", "2,000 to 5,000", "5,000 to 10,000", "Over 10,000", "Not sure"]

export default function InspectionForm({ id = "qf", short = false, title = "Book your free inspection", button = "Book My Free Inspection" }) {
    const [state, setState] = useState("idle") // idle | sending | error
    const timer = useRef(null)
    const sending = state === "sending"
    const f = (n) => `${id}-${n}`
    const sink = `jf-sink-${id}`
    const onFrameLoad = () => {
        if (state !== "sending") return // the blank frame's first load
        clearTimeout(timer.current)
        const form = document.getElementById(`${id}-form`)
        const q = new URLSearchParams({ type: form?.elements["q6_q6_dropdown4"]?.value || "", zip: form?.elements["q5_q5_textbox3"]?.value || "" })
        window.location.href = `/thank-you?${q}`
    }
    return (
        <form
            className="sr-form-card"
            id={`${id}-form`}
            action={`https://submit.jotform.com/submit/${site.jotformId}`}
            method="post"
            encType="multipart/form-data"
            acceptCharset="utf-8"
            target={sink}
            onSubmit={() => {
                setState("sending")
                timer.current = setTimeout(() => setState("error"), 25000)
            }}
        >
            <iframe name={sink} title="Form submission" className="pg-sink" onLoad={onFrameLoad} />
            <h3>{title}</h3>
            <p className="sr-muted" style={{ fontSize: ".9rem" }}>No cost and no obligation.</p>
            {state === "error" && (
                <div className="sr-form-status is-error" role="alert">
                    <span className="sr-form-status__icon" aria-hidden="true">!</span>
                    <span>That's taking longer than it should. Please call or text <a href={`tel:${site.tel}`}>{site.phone}</a> so we don't miss you.</span>
                </div>
            )}
            <input type="hidden" name="formID" value={site.jotformId} />
            <input type="hidden" name="simple_spc" value={`${site.jotformId}-${site.jotformId}`} />
            <div className="pg-hp" aria-hidden="true">
                <label htmlFor={f("website")}>Leave this empty</label>
                <input id={f("website")} name="website" type="text" tabIndex={-1} autoComplete="off" />
            </div>
            <div className="sr-field-row">
                <div className="sr-field">
                    <label htmlFor={f("name")}>Name</label>
                    <input id={f("name")} name={F.name} autoComplete="name" type="text" required />
                </div>
                <div className="sr-field">
                    <label htmlFor={f("phone")}>Best number to call or text</label>
                    <input id={f("phone")} name={F.phone} autoComplete="tel" type="tel" inputMode="tel" required />
                </div>
            </div>
            <div className="sr-field-row">
                {!short && (
                    <div className="sr-field">
                        <label htmlFor={f("email")}>Email <span className="pg-opt">(optional)</span></label>
                        <input id={f("email")} name={F.email} autoComplete="email" type="email" />
                    </div>
                )}
                <div className="sr-field">
                    <label htmlFor={f("zip")}>Property ZIP code</label>
                    <input id={f("zip")} name={F.zip} autoComplete="postal-code" type="text" inputMode="numeric" pattern="[0-9]{5}" maxLength={5} required />
                </div>
                {short && (
                    <div className="sr-field">
                        <label htmlFor={f("type")}>Building type</label>
                        <select id={f("type")} name={F.type} required defaultValue="">
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
                            <select id={f("type")} name={F.type} required defaultValue="">
                                <option value="" disabled>Choose one</option>
                                {buildingTypes.map((t) => <option key={t}>{t}</option>)}
                            </select>
                        </div>
                        <div className="sr-field">
                            <label htmlFor={f("size")}>Rough roof size <span className="pg-opt">(optional)</span></label>
                            <select id={f("size")} name={F.size} defaultValue="">
                                <option value="">Choose one</option>
                                {roofSizes.map((t) => <option key={t}>{t}</option>)}
                            </select>
                        </div>
                    </div>
                    <fieldset className="sr-field" style={{ border: 0, padding: 0 }}>
                        <legend style={{ fontSize: ".875rem", fontWeight: 500, marginBottom: 6 }}>How should we reach you? <span className="pg-opt">(optional)</span></legend>
                        <div className="pg-radio-row">
                            {["Call", "Text", "Email"].map((c) => (
                                <label key={c}><input type="radio" name={F.contact} value={c} />{c}</label>
                            ))}
                        </div>
                    </fieldset>
                    <div className="sr-field">
                        <label htmlFor={f("photo")}>Photo of the roof <span className="pg-opt">(optional, helps us pre-check it)</span></label>
                        <input id={f("photo")} name={F.photo} type="file" accept="image/jpeg,image/png,image/gif" />
                    </div>
                    <div className="sr-field">
                        <label htmlFor={f("notes")}>Anything else? <span className="pg-opt">(optional)</span></label>
                        <textarea id={f("notes")} name={F.notes} rows={3} />
                    </div>
                </>
            )}
            <fieldset className="pg-consent">
                <legend>Consent to contact<span aria-hidden="true">*</span></legend>
                <label className="pg-consent__box">
                    <input type="checkbox" name={F.consent} value={consentText} required />
                    <span>{consentText}</span>
                </label>
                <p className="pg-consent__privacy">{formPrivacyText} See our <a href="/privacy-policy">privacy policy</a>.</p>
            </fieldset>
            <button className="sr-btn sr-btn--accent sr-btn--block sr-btn--lg" type="submit" style={{ marginTop: 20 }} disabled={sending}>
                {sending ? "Sending..." : button}
            </button>
            <p className="sr-form-note">
                {short ? "No cost, no obligation. We'll call or text to set a time." : "No cost and no obligation. We'll call or text to set up a time."}
            </p>
        </form>
    )
}
