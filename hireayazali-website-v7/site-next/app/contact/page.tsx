import type { Metadata } from "next";
import { site, whatsappRecruiter, whatsappBusiness } from "../../lib/site";
import { ContactLinks } from "../../components/Footer";

export const metadata: Metadata = {
  title: "Contact Ayaz Ali | Performance Marketing Manager",
  description: "Contact Ayaz Ali by email, WhatsApp, LinkedIn or Instagram to discuss a Performance Marketing opportunity or project.",
  alternates: { canonical: `${site.url}/contact` },
};

export default function ContactPage() {
  return (
    <>
      <section className="wrap page-head split">
        <div>
          <p className="eyebrow">Contact</p>
          <h1 className="serif">Let&apos;s talk.</h1>
          <p className="lead">Choose the route that fits your situation. Every channel reaches me directly.</p>
        </div>
        <div className="contact-paths">
          <div className="path-card">
            <h2 className="serif" style={{ fontSize: "1.6rem" }}>Discuss an Opportunity</h2>
            <p>For recruiters and hiring managers.</p>
            <a className="btn btn-primary" href={whatsappRecruiter} target="_blank" rel="noopener noreferrer">WhatsApp about a role</a>
          </div>
          <div className="path-card">
            <h2 className="serif" style={{ fontSize: "1.6rem" }}>Discuss a Project</h2>
            <p>For businesses seeking performance marketing support.</p>
            <a className="btn btn-primary" href={whatsappBusiness} target="_blank" rel="noopener noreferrer">WhatsApp about a project</a>
          </div>
        </div>
      </section>
      <section className="wrap section">
        <h2 className="serif">Direct contact</h2>
        <ul className="direct-list" style={{ maxWidth: 560 }}>
          <li><span>Email</span><a href={`mailto:${site.email}`}>{site.email}</a></li>
          <li><span>WhatsApp</span><a href={`https://wa.me/${site.whatsappNumber}`} target="_blank" rel="noopener noreferrer">{site.whatsappDisplay}</a></li>
          <li><span>LinkedIn</span><a href={site.linkedin} target="_blank" rel="noopener noreferrer">linkedin.com/in/ayyazaly</a></li>
          <li><span>Instagram</span><a href={site.instagram} target="_blank" rel="noopener noreferrer">@hireme_ayazali</a></li>
        </ul>
        <p className="muted small" style={{ marginTop: 16 }}>Based in Lahore, Pakistan (GMT+5).</p>
      </section>
    </>
  );
}
