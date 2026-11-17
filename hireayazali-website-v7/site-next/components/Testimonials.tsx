import { testimonials } from "../lib/content";

export default function TestimonialList({ items = testimonials }: { items?: typeof testimonials }) {
  return (
    <div className="testi-grid">
      {items.map((t) => (
        <figure className="testi" key={t.name}>
          <blockquote>
            {t.quote.map((p, i) => (<p key={i}>&ldquo;{p}&rdquo;</p>))}
          </blockquote>
          <figcaption>
            <strong>{t.name}</strong>
            <span className="small muted">{t.headline}</span>
            <span className="small muted">{t.relation}</span>
            <span className="small muted">Source: {t.source}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
