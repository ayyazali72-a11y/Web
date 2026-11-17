import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { site } from "../lib/site";

const serif = Playfair_Display({ subsets: ["latin"], weight: ["500", "600"], variable: "--font-serif", display: "swap" });
const sans = Inter({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-sans", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Ayaz Ali | Performance Marketing Manager | HireAyazAli", template: "%s | Ayaz Ali" },
  description: "Ayaz Ali is a Performance Marketing Manager with 7+ years of experience in Google Ads, Meta Ads, TikTok Ads and GA4. $3M+ ad spend managed, 10x average ROAS.",
  alternates: { canonical: site.url },
  openGraph: { type: "website", siteName: site.name, url: site.url, images: ["/images/1.jpg"] },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/images/1.jpg" },
  robots: { index: true, follow: true },
};

const personLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Person", "@id": `${site.url}/#person`, name: site.author, alternateName: site.name, jobTitle: site.title, url: site.url, email: `mailto:${site.email}`, sameAs: [site.linkedin, site.instagram], address: { "@type": "PostalAddress", addressLocality: "Lahore", addressCountry: "PK" } },
    { "@type": "WebSite", "@id": `${site.url}/#website`, url: site.url, name: site.name, publisher: { "@id": `${site.url}/#person` } },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600&display=swap" />
      </head>
      <body>
        <a className="skip" href="#main">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }} />
      </body>
    </html>
  );
}
