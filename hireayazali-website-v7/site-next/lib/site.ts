// All website content lives here. Edit this file to update the site.

export const site = {
  name: "HireAyazAli",
  url: "https://hireayazali.online",
  author: "Ayaz Ali",
  title: "Performance Marketing Manager",
  location: "Lahore, Pakistan",
  email: "connect@hireayazali.online",
  whatsappNumber: "923254733663",
  whatsappDisplay: "+92-325-4733663",
  linkedin: "https://www.linkedin.com/in/ayyazaly/",
  instagram: "https://www.instagram.com/hireme_ayazali",
  // Figures as supplied by the site owner. Do not change without confirmation.
  stats: [
    { value: "$3M+", label: "Ad Spend Managed" },
    { value: "10x", label: "Average ROAS" },
    { value: "7+", label: "Years of Performance Marketing Experience" },
  ],
};

export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${site.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const whatsappRecruiter = whatsappLink(
  "Hello Ayaz, I am a recruiter or hiring manager and would like to discuss a Performance Marketing opportunity."
);
export const whatsappBusiness = whatsappLink(
  "Hello Ayaz, I would like to discuss a performance marketing project for my business."
);

export const services = [
  { id: "google-ads", shortHome: "Drive high-quality traffic and maximise ROI.", name: "Google Ads", short: "Search, Display, Shopping and Performance Max campaigns built around conversion value.", items: ["Search, Display, Shopping and Performance Max", "Campaign optimisation and bid strategy", "Conversion tracking setup and validation", "Paid search strategy and keyword architecture"] },
  { id: "meta-ads", shortHome: "Grow your brand with powerful campaigns.", name: "Meta Ads", short: "Facebook and Instagram campaigns driven by audience strategy and creative testing.", items: ["Facebook and Instagram campaign management", "Audience strategy and segmentation", "Structured creative testing", "Conversion-focused campaign optimisation"] },
  { id: "chatgpt-ads", shortHome: "Exploring emerging AI-powered advertising.", name: "ChatGPT Ads", short: "Exploring emerging conversational advertising as it opens up.", items: ["Emerging AI advertising opportunities", "Advertising strategy for conversational channels", "Evaluation of new channel fit within a performance mix", "No verified ChatGPT Ads campaign results are claimed on this site"] },
  { id: "tiktok-ads", shortHome: "Turn attention into real business growth.", name: "TikTok Ads", short: "Audience acquisition and performance measurement on short-form video.", items: ["TikTok advertising strategy", "Audience acquisition", "Campaign optimisation", "Performance measurement"] },
  { id: "ga4", shortHome: "Track, analyse and optimise performance.", name: "GA4", short: "Analytics, event tracking and reporting so spend decisions rest on reliable data.", items: ["Google Analytics 4 setup and conversion measurement", "Event tracking design", "Performance reporting", "Performance analysis and insight"] },
];

export const cases = [
  { slug: "case-study-01", n: "01" },
  { slug: "case-study-02", n: "02" },
  { slug: "case-study-03", n: "03" },
  { slug: "case-study-04", n: "04" },
  { slug: "case-study-05", n: "05" },
];

export const caseSections = [
  "Project overview", "Industry", "Business objective", "Initial challenges", "Marketing strategy",
  "Advertising platform", "Campaign structure", "Optimisation approach", "Tracking and measurement",
  "Campaign screenshots", "Actual results", "Key learnings",
];
