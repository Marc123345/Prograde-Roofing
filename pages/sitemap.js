import Layout from "@/components/Layout"
import Icon from "@/components/Icon"
import { breadcrumbSchema } from "@/components/Blocks"
import { groups } from "@/data/sitemap"

// Human-readable sitemap (template has one too: summitroof/sitemap.html).
export default function SitemapPage() {
    return (
        <Layout
            title="Sitemap | ProGrade Roof Coatings"
            description="Every page on the ProGrade Roof Coatings website: services, service areas, FAQ and free inspection."
            schema={breadcrumbSchema([{ name: "Sitemap", path: "/sitemap" }])}
        >
            <section className="pg-page-hero pg-page-hero--text">
                <div className="sr-container">
                    <nav aria-label="Breadcrumb"><p className="sr-caption"><a href="/">Home</a> · Sitemap</p></nav>
                    <h1 style={{ marginTop: 16 }}>Sitemap</h1>
                </div>
            </section>
            <section className="sr-section">
                <div className="sr-container">
                    <div className="sr-grid sr-cols-4">
                        {groups.map((g) => (
                            <div key={g.title}>
                                <h2 style={{ fontSize: "1.15rem", marginBottom: 14 }}>{g.title}</h2>
                                <ul className="pg-list">
                                    {g.pages.filter((p) => p.path !== "/sitemap").map((p) => (
                                        <li key={p.path} style={{ padding: "6px 0" }}>
                                            <a href={p.path} style={{ display: "inline-flex", gap: 8, alignItems: "center", fontWeight: 500 }}><Icon name="arrow" />{p.title}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    )
}
