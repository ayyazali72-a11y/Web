import type { Metadata } from "next";
import Link from "next/link";
import { site } from "../../lib/site";
import { caseStudies } from "../../lib/content";
import CtaBand from "../../components/CtaBand";

export const metadata: Metadata = {
  title: "Performance Marketing Portfolio | Ayaz Ali",
  description: "Performance marketing case studies by Ayaz Ali covering Google Ads, Meta Ads, TikTok Ads and GA4 measurement.",
  alternates: { canonical: `${site.url}/portfolio` },
};

const gallery = [1, 2, 3, 4, 5, 6, 7, 8];

export default function PortfolioPage() {
  return (
    <>
      <section className="wrap page-head">
        <p className="eyebrow">Portfolio</p>
        <h1 className="serif">Campaigns, strategy and measured results.</h1>
        <p className="lead">Each case study covers the campaign structure, the results shown in the report, and what those results indicate. Client names are anonymised.</p>
      </section>
      <section className="wrap section">
        <div className="case-grid">
          {caseStudies.map((c) => (
            <Link key={c.slug} href={`/case-studies/${c.slug}`} className="case-card">
              <img className="case-img" src={c.screenshot} alt={c.shotAlt} loading="lazy" />
              <div className="case-meta"><span>Case study {c.n}</span><span>{c.platform}</span></div>
              <h3>{c.title}</h3>
              <p className="muted">{c.summary}</p>
              <span className="link-arrow">View Case Study</span>
            </Link>
          ))}
        </div>
      </section>
      <section className="wrap section">
        <div className="section-head">
          <p className="eyebrow">Campaign dashboards</p>
          <h2 className="serif">Platform reporting</h2>
          <p className="muted">Personal contact details have been blurred.</p>
        </div>
        <div className="gallery">
          {gallery.map((n) => (
            <figure key={n} style={{ margin: 0 }}>
              <img className="case-img" src={`/screenshots/${n}.png`} alt={`Google Ads campaign report ${n}`} loading="lazy" />
            </figure>
          ))}
        </div>
      </section>
      <CtaBand title="Want the detailed version?" text="I can walk you through campaign structure, measurement and results in a direct conversation." />
    </>
  );
}
