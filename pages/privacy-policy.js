import Layout from "@/components/Layout"
import { site, privacyNotice } from "@/data/site"

// ⚠ Plain-language draft. Have William confirm it before launch, and update
// the Meta paragraph once the Pixel / Conversions API are actually installed.
export default function Privacy() {
    return (
        <Layout title="Privacy Policy | ProGrade Roof Coatings" description={`How ${site.name} collects and uses the information you send us.`}>
            <section className="pg-page-hero pg-page-hero--text">
                <div className="sr-container">
                    <nav aria-label="Breadcrumb"><p className="sr-caption"><a href="/">Home</a> · Privacy Policy</p></nav>
                    <h1 style={{ marginTop: 16 }}>Privacy Policy</h1>
                </div>
            </section>
            <section className="sr-section">
                <div className="sr-container pg-prose">
                    <p>{privacyNotice}</p>
                    <h2>What we collect</h2>
                    <ul>
                        <li>Your name, phone number and, if you give it, your email address</li>
                        <li>Your property ZIP code, building type and rough roof size</li>
                        <li>Any photo or notes you choose to send</li>
                    </ul>
                    <h2>How we use it</h2>
                    <p>To contact you about your free inspection and estimate, and to carry out the work if you hire us. We may call, text or email you about your request. Reply STOP to any text to opt out.</p>
                    <h2>Sharing</h2>
                    <p>We do not sell or rent your information. It is shared only with the service providers that run our website and forms, and only so they can deliver your request to us.</p>
                    <h2>Advertising and analytics</h2>
                    <p>We may use Meta (Facebook) and Google tools to measure how our ads and website perform, including whether a visit led to an inspection request. These tools may use cookies.</p>
                    <h2>Contact</h2>
                    <p>Questions about your information, or want it deleted? Call {site.phone} or email <a href={`mailto:${site.email}`}>{site.email}</a>.</p>
                </div>
            </section>
        </Layout>
    )
}
