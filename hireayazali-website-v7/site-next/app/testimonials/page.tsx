import type { Metadata } from "next";
import { site } from "../../lib/site";
import CtaBand from "../../components/CtaBand";
import TestimonialList from "../../components/Testimonials";

export const metadata: Metadata = {
  title: "Testimonials | Ayaz Ali Performance Marketing",
  description: "Client and colleague testimonials for Ayaz Ali, Performance Marketing Manager.",
  alternates: { canonical: `${site.url}/testimonials` },
};

export default function TestimonialsPage() {
  return (
    <>
      <section className="wrap page-head">
        <p className="eyebrow">Testimonials</p>
        <h1 className="serif">What clients and colleagues say.</h1>
        <p className="lead">Recommendations from LinkedIn, shown as written.</p>
      </section>
      <section className="wrap section">
        <TestimonialList />
      </section>
      <CtaBand title="Worked together before?" text="If you are happy to share a recommendation, I would be grateful." />
    </>
  );
}
