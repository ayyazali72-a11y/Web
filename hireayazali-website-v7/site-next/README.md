# HireAyazAli website (hireayazali.online)

Next.js (App Router) site. Content is in one file so you can update it without touching layout code.

## Run locally

Install dependencies once, then start the dev server with `npm run dev` and open http://localhost:3000. Check a production build with `npm run build`.

## Where things are

| What to change | File |
| --- | --- |
| Contact details, stats, services, case study list, WhatsApp messages | lib/site.ts |
| Homepage | app/page.tsx |
| About page (career timeline, education) | app/about/page.tsx |
| Portfolio index and campaign screenshots | app/portfolio/page.tsx |
| Case study template (one page per study) | app/case-studies/[slug]/page.tsx |
| Services page | app/services/page.tsx |
| Testimonials | app/testimonials/page.tsx |
| Contact | app/contact/page.tsx |
| Header, footer, colours and typography | components/Header.tsx, components/Footer.tsx, app/globals.css |
| Sitemap and robots.txt | app/sitemap.ts, app/robots.ts |

Site photos and graphics go in public/images/. Campaign screenshots go in public/screenshots/.

## Placeholders still to complete

- Homepage portrait is currently public/images/1.jpg, pending your confirmation.
- Five case studies: client or campaign names, industry, platform, objectives, results and screenshots.
- Testimonials: none published until approved.
- Certificates: not yet shown on the site.

## Figures

Only these are shown: $3M+ ad spend managed, 10x average ROAS, 7+ years of experience. Highest and lowest ROAS are deliberately not shown.

## Contact

Email, WhatsApp, LinkedIn and Instagram only. There is no contact form.

## Before publishing

- Confirm you are allowed to publish the campaign screenshots. Some still show client names.
- Anonymise any client names you cannot publish.

## Deploy on Vercel

1. Push the project to a GitHub repository.
2. In Vercel, import the repository. Next.js is detected automatically.
3. Add hireayazali.online and www.hireayazali.online under Project Settings, then Domains.
4. Set the DNS records Vercel shows at your domain registrar.
5. Choose one canonical domain and redirect the other, as shown in the Vercel dashboard.

## Analytics

Not installed yet. Add GA4 or Tag Manager only after you provide the IDs and decide on consent handling.
