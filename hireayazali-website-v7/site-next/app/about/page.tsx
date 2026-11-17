import type { Metadata } from "next";
import { site } from "../../lib/site";
import CtaBand from "../../components/CtaBand";

export const metadata: Metadata = {
  title: "About Ayaz Ali | Performance Marketing Manager",
  description: "About Ayaz Ali: 7+ years in performance marketing, $3M+ ad spend managed, based in Lahore and open to onsite Performance Marketing roles in the UK.",
  alternates: { canonical: `${site.url}/about` },
};

const timeline = [
  ["Innovative Labs", "Performance Marketing", "Nov 2025 to present", "Managing digital advertising campaigns with a strong focus on maximising ROAS."],
  ["Hire A Ghost", "Creative Head", "May 2024 to Nov 2025", "Led content delivery across scripts, e-books, blogs and newsletters."],
  ["Get Trip UK", "Performance Marketing Manager", "Nov 2023 to Oct 2025", "Responsible for content creation, optimisation and monitoring across digital platforms."],
  ["Cleaner 4 Hires", "Digital Marketing Manager", "Apr 2023 to Sep 2024", "Managed all digital platforms and strengthened the online presence."],
  ["GIMSCO", "Digital Marketing Executive", "Jul 2022 to Sep 2023", "Developed content across websites, blogs, social media and email campaigns."],
  ["Telenexis", "Marketing Mentor", "Aug 2022 to Mar 2023", "Ran lead generation campaigns for a UK-based B2B SaaS company, optimising cost per lead."],
  ["Vroozi", "Media Buyer Executive", "Jul 2019 to Dec 2021", "Managed content placement, social media marketing and ad creative."],
  ["Fiverr", "Script Writer", "Nov 2019 to Feb 2023", "Delivered script, copywriting and book writing services as a top-rated seller."],
  ["Dunya News", "Content Writer", "Feb 2020 to Aug 2020", "Wrote blog content informing readers across a range of topics."],
];

export default function AboutPage() {
  return (
    <>
      <section className="wrap page-head split">
        <div>
          <p className="eyebrow">About</p>
          <h1 className="serif">Performance marketing, measured by commercial outcomes.</h1>
          <p className="lead">I am Ayaz Ali, a Performance Marketing Manager with 7+ years of experience running paid advertising for businesses that need measurable returns.</p>
        </div>
        <img className="photo" src="/images/1.jpg" alt="Ayaz Ali, Performance Marketing Manager" />
      </section>

      <section className="wrap section narrow">
        <h2 className="serif">My approach</h2>
        <p>I treat advertising as an investment to be managed, not a set of platform settings. Every campaign starts with a business objective, is structured around the conversion that matters, and is measured against it.</p>
        <p>Across my career I have managed more than $3M in total ad spend, with an average ROAS of 10x.</p>
        <ul className="check-list">
          <li>Budget management focused on conversion performance</li>
          <li>Structured optimisation: testing, learning and reallocating spend</li>
          <li>Analytical measurement with GA4 and conversion tracking</li>
          <li>Multi-platform management across Google and Meta</li>
        </ul>
      </section>

      <section className="wrap section">
        <div className="section-head"><p className="eyebrow">Career timeline</p><h2 className="serif">Experience</h2></div>
        <ol style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 20 }}>
          {timeline.map(([company, role, dates, desc]) => (
            <li key={company} style={{ borderLeft: "2px solid var(--accent)", paddingLeft: 20 }}>
              <h3>{role} &middot; {company}</h3>
              <p className="muted small">{dates}</p>
              <p>{desc}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="wrap section">
        <div className="section-head"><p className="eyebrow">Education</p><h2 className="serif">Qualifications</h2></div>
        <ul className="check-list">
          <li>Bachelor&apos;s degree, English Language and Literature, Lahore Garrison University (2018 to 2022)</li>
          <li>Intermediate, English Language and Literature, Beaconhouse (2016 to 2018)</li>
        </ul>
      </section>

      <section className="wrap section split">
        <div>
          <p className="eyebrow">International positioning</p>
          <h2 className="serif">Based in Lahore, open to the United Kingdom.</h2>
          <p>I am based in Lahore, Pakistan, and open to relocating to the United Kingdom for suitable onsite Performance Marketing opportunities.</p>
          <p>Where sponsorship or work authorisation is required, I am happy to discuss this transparently with employers during the process.</p>
          <p className="muted small">Salary expectations are discussed directly and are not published on this website.</p>
        </div>
        <img className="photo" src="/images/4.png" alt="Ayaz Ali, professional photograph" />
      </section>

      <CtaBand title="Working with international teams?" text="I work with recruiters, hiring managers and business owners who want paid media managed with clear accountability." />
    </>
  );
}
