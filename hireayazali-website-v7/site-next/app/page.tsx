import Link from "next/link";
import type { Metadata } from "next";
import { site, services } from "../lib/site";
import { caseStudies } from "../lib/content";
import CtaBand from "../components/CtaBand";

export const metadata: Metadata = {
  title: "Ayaz Ali | Performance Marketing Manager | HireAyazAli",
  description: "Ayaz Ali is a Performance Marketing Manager with 7+ years of experience in Google Ads, Meta Ads, TikTok Ads and GA4. $3M+ ad spend managed, 10x average ROAS.",
  alternates: { canonical: site.url },
};

const heroStats = [
  { value: "$3M+", label: "Ad Spend Managed" },
  { value: "10x", label: "Average ROAS" },
  { value: "7+", label: "Years Experience" },
];

function Logo({ id }: { id: string }) {
  switch (id) {
    case "google-ads":
      return (
        <svg viewBox="0 0 48 44" aria-hidden="true">
          <path d="M18 3 L30 25 L24 36 L12 14 Z" fill="#4285F4" />
          <path d="M30 25 L42 33 L36 42 L24 36 Z" fill="#FBBC04" />
          <circle cx="11" cy="36" r="8" fill="#34A853" />
        </svg>
      );
    case "meta-ads":
      return (
        <svg viewBox="0 0 64 40" aria-hidden="true">
          <path d="M10 20c0-7 3-13 7-13 4 0 7 6 9 11l3 6 3-6c2-5 5-11 9-11 4 0 7 6 7 13s-3 13-7 13c-4 0-7-6-9-11l-3-6-3 6c-2 5-5 11-9 11-4 0-7-6-7-13z" fill="none" stroke="#0866FF" strokeWidth="5" strokeLinejoin="round" />
        </svg>
      );
    case "chatgpt-ads":
      return (
        <svg viewBox="0 0 48 48" aria-hidden="true">
          <circle cx="24" cy="24" r="23" fill="#10A37F" />
          <g fill="none" stroke="#fff" strokeWidth="2.6" strokeLinecap="round">
            <ellipse cx="24" cy="15" rx="5.5" ry="9" />
            <ellipse cx="24" cy="15" rx="5.5" ry="9" transform="rotate(120 24 24)" />
            <ellipse cx="24" cy="15" rx="5.5" ry="9" transform="rotate(240 24 24)" />
          </g>
        </svg>
      );
    case "tiktok-ads":
      return (
        <svg viewBox="0 0 44 48" aria-hidden="true">
          <path d="M30 2h7c.5 6 4 10 9 11v8c-4 0-7-1-10-3v14c0 8-6 13-13 13S0 39 0 32s6-13 13-13c1 0 2 0 3 .2v8.2c-1-.4-2-.6-3-.6-3 0-5 2.3-5 5.5S10 43 13 43s5-2.3 5-5.5V2z" fill="#111" />
          <path d="M30 2h7c.5 6 4 10 9 11v8c-4 0-7-1-10-3v14" fill="none" stroke="#25F4EE" strokeWidth="1.2" transform="translate(-1.2,-1)" opacity=".9" />
          <path d="M30 2h7c.5 6 4 10 9 11v8c-4 0-7-1-10-3v14" fill="none" stroke="#FE2C55" strokeWidth="1.2" transform="translate(1.2,1)" opacity=".9" />
        </svg>
      );
    case "ga4":
      return (
        <svg viewBox="0 0 48 48" aria-hidden="true">
          <rect x="30" y="2" width="12" height="44" rx="6" fill="#F9AB00" />
          <rect x="16" y="18" width="12" height="28" rx="6" fill="#E37400" />
          <circle cx="9" cy="38" r="7" fill="#E37400" />
        </svg>
      );
    default:
      return null;
  }
}

export default function HomePage() {
  return (
    <>
      <section className="home-hero">
        <div className="wrap">
          <div>
            <span className="pill">7+ Years of Performance Marketing Experience</span>
            <h1 className="serif">Meet The<br />Performance Marketer<span className="dot">.</span></h1>
            <p className="sub">I help ambitious businesses grow through result-driven digital marketing, from Google &amp; Meta Ads to advanced analytics.</p>
            <div className="hero-btns">
              <Link href="/portfolio" className="btn btn-primary btn-lg">View My Portfolio &rarr;</Link>
              <Link href="/contact" className="btn btn-outline btn-lg">Get in Touch</Link>
            </div>
            <div className="hero-stats" aria-label="Key results">
              {heroStats.map((s) => (
                <div key={s.label}><strong>{s.value}</strong><span>{s.label}</span></div>
              ))}
            </div>
          </div>
          <div className="hero-photo-wrap">
            <span className="signature" aria-hidden="true">Ayaz Ali</span>
            <img src="/images/1.jpg" alt="Ayaz Ali, Performance Marketing Manager" width={1080} height={1080} />
          </div>
        </div>
      </section>

      <section className="services-band" aria-labelledby="what-i-do">
        <div className="wrap">
          <div className="services-head">
            <h2 id="what-i-do" className="serif">What I Do</h2>
            <p>Performance Marketing Services to Grow Your Business</p>
          </div>
          <div className="svc-logo-grid">
            {services.map((s) => (
              <Link key={s.id} href={`/services#${s.id}`} className="svc-logo-card">
                <div className="logo"><Logo id={s.id} /></div>
                <h3>{s.name}</h3>
                <p>{s.shortHome}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="wrap section" aria-labelledby="featured">
        <div className="section-head">
          <p className="eyebrow">Featured work</p>
          <h2 id="featured" className="serif">Selected case studies</h2>
        </div>
        <div className="case-grid">
          {caseStudies.slice(0, 3).map((c) => (
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

      <CtaBand title="Let's build something measurable." text="Whether you are a recruiter with a Performance Marketing role to fill, or a business that needs better paid media results, I would welcome the conversation." />
    </>
  );
}
