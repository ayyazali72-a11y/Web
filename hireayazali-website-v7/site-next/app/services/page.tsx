import type { Metadata } from "next";
import { site, services } from "../../lib/site";
import CtaBand from "../../components/CtaBand";

export const metadata: Metadata = {
  title: "Performance Marketing Services | Google, Meta, TikTok, GA4 | Ayaz Ali",
  description: "Google Ads, Meta Ads, TikTok Ads, ChatGPT Ads strategy and GA4 measurement services by Ayaz Ali.",
  alternates: { canonical: `${site.url}/services` },
};

export default function ServicesPage() {
  return (
    <>
      <section className="wrap page-head">
        <p className="eyebrow">Services</p>
        <h1 className="serif">Paid media, managed for measurable outcomes.</h1>
        <p className="lead">Five areas of expertise, each focused on conversion performance and reliable measurement.</p>
      </section>
      <section className="wrap section services-list">
        {services.map((s) => (
          <section key={s.id} id={s.id} className="svc-detail" aria-labelledby={`${s.id}-h`}>
            <div>
              <h2 id={`${s.id}-h`} className="serif">{s.name}</h2>
              <p>{s.short}</p>
            </div>
            <ul className="check-list">
              {s.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </section>
        ))}
      </section>
      <CtaBand title="Ready to discuss a project?" text="Tell me about your goals, budget and current setup." />
    </>
  );
}
