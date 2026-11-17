import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { site } from "../../../lib/site";
import { caseStudies } from "../../../lib/content";
import CtaBand from "../../../components/CtaBand";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

function find(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}

export function generateMetadata({ params }: Props): Metadata {
  const c = find(params.slug);
  if (!c) return { title: "Case study not found" };
  return {
    title: `${c.title} | Case Study ${c.n} | Ayaz Ali`,
    description: c.summary,
    alternates: { canonical: `${site.url}/case-studies/${c.slug}` },
  };
}

export default function CaseStudyPage({ params }: Props) {
  const c = find(params.slug);
  if (!c) notFound();
  return (
    <>
      <nav aria-label="Breadcrumb" className="wrap crumbs">
        <ol>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/portfolio">Portfolio</Link></li>
          <li aria-current="page">Case study {c.n}</li>
        </ol>
      </nav>
      <section className="wrap page-head">
        <p className="eyebrow">Case study {c.n}</p>
        <h1 className="serif">{c.title}</h1>
        <p className="lead">{c.summary}</p>
        <div className="case-meta"><span>{c.client}</span><span>{c.platform}</span><span>{c.period}</span></div>
      </section>
      <section className="wrap" style={{ marginTop: 24 }}>
        <img className="case-img" src={c.screenshot} alt={c.shotAlt} />
      </section>
      <section className="wrap section narrow">
        <div className="cs-block">
          <h2 className="serif">Overview</h2>
          <p>{c.overview}</p>
        </div>
        <div className="cs-block">
          <h2 className="serif">Campaign structure</h2>
          {c.structure.map((p) => <p key={p}>{p}</p>)}
        </div>
        <div className="cs-block">
          <h2 className="serif">Results shown in the report</h2>
          <div className="metrics">
            {c.metrics.map((m) => (
              <div className="metric" key={m.label}><span>{m.label}</span><strong>{m.value}</strong></div>
            ))}
          </div>
        </div>
        <div className="cs-block">
          <h2 className="serif">What the numbers show</h2>
          {c.reading.map((p) => <p key={p}>{p}</p>)}
        </div>
      </section>
      <CtaBand title="Have a similar objective?" text="Share your goals and current setup and I will tell you honestly whether I can help." />
    </>
  );
}
