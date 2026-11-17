import Link from "next/link";
import { site } from "../lib/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <p className="serif footer-name">{site.author}</p>
          <p className="muted">{site.title}<br />{site.location} &middot; Open to UK onsite roles</p>
        </div>
        <nav aria-label="Footer">
          <Link href="/about">About</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/services">Services</Link>
          <Link href="/testimonials">Testimonials</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <ContactLinks />
      </div>
      <div className="wrap copy">&copy; {new Date().getFullYear()} {site.author}. All rights reserved.</div>
    </footer>
  );
}

export function ContactLinks() {
  return (
    <ul className="contact-list">
      <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
      <li><a href={`https://wa.me/${site.whatsappNumber}`} target="_blank" rel="noopener noreferrer">WhatsApp {site.whatsappDisplay}</a></li>
      <li><a href={site.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
      <li><a href={site.instagram} target="_blank" rel="noopener noreferrer">Instagram</a></li>
    </ul>
  );
}
