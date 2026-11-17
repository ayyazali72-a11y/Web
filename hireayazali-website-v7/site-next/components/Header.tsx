import Link from "next/link";
import { site, whatsappBusiness } from "../lib/site";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/services", label: "Services" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="site-header">
      <div className="wrap nav-row">
        <Link href="/" className="brand" aria-label={`${site.name} home`}>
          <span className="mark" aria-hidden="true"><svg viewBox="0 0 40 40"><path d="M4 34 L16 8 L22 8 L36 34 L29 34 L19 14 L11 34 Z" fill="#6d28d9"/><path d="M14 22 L20 22 L17 28 Z" fill="#a78bfa"/></svg></span>
          <span>HireAyaz<em>Ali</em></span>
        </Link>
        <nav className="nav-links" aria-label="Primary">
          {nav.map((n) => (
            <Link key={n.href} href={n.href}>{n.label}</Link>
          ))}
        </nav>
        <Link href="/contact" className="btn btn-primary btn-sm">Let&apos;s Talk</Link>
        <details className="mobile-menu">
          <summary aria-label="Open menu">Menu</summary>
          <nav aria-label="Mobile">
            {nav.map((n) => (
              <Link key={n.href} href={n.href}>{n.label}</Link>
            ))}
            <a href={whatsappBusiness} target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </nav>
        </details>
      </div>
    </header>
  );
}
