import Layout from "@/components/Layout"
import { CallButtons } from "@/components/Blocks"

export default function NotFound() {
    return (
        <Layout noindex title="Page not found | ProGrade Roof Coatings" description="This page doesn't exist.">
            <section className="pg-page-hero pg-page-hero--text">
                <div className="sr-container">
                    <span className="sr-eyebrow">404</span>
                    <h1 style={{ margin: "10px 0 16px" }}>That page isn't here</h1>
                    <p className="sr-lead">The link may be old. Head back to the home page, or get in touch about your roof.</p>
                    <div style={{ marginTop: 28 }}><CallButtons inspect="Book a Free Inspection" text={false} /></div>
                    <p style={{ marginTop: 20 }}><a href="/" style={{ color: "var(--gold-400)", fontWeight: 600 }}>Back to the home page</a></p>
                </div>
            </section>
        </Layout>
    )
}
