import Link from "next/link";
import { whatsappBusiness } from "../lib/site";

export default function CtaBand({ title, text }: { title: string; text: string }) {
  return (
    <section className="cta-band">
      <div className="wrap">
        <h2 className="serif">{title}</h2>
        <p>{text}</p>
        <div className="btn-row">
          <Link href="/contact" className="btn btn-primary">Get in Touch</Link>
          <a href={whatsappBusiness} className="btn btn-ghost-light" target="_blank" rel="noopener noreferrer">WhatsApp</a>
        </div>
      </div>
    </section>
  );
}
