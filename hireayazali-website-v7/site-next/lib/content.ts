// Case studies and testimonials. Figures are taken from the campaign screenshots supplied.
// Client names are anonymised. Edit here to update the site.

export type Metric = { label: string; value: string };

export type CaseStudy = {
  slug: string;
  n: string;
  title: string;
  summary: string;
  period: string;
  client: string;
  platform: string;
  overview: string;
  structure: string[];
  metrics: Metric[];
  reading: string[];
  screenshot: string;
  shotAlt: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "case-study-01",
    n: "01",
    title: "Full-Year Google Ads Performance, 2026",
    summary: "Account-level return on Google Ads from January to mid-November 2026, with a return on ad spend of 10.71.",
    period: "1 January to 17 November 2026",
    client: "Anonymised multi-location account",
    platform: "Google Ads (Search and Performance Max)",
    overview: "A full-year view of a multi-location Google Ads account. It shows account-level spend, revenue and return across Search and Performance Max campaigns, so that performance can be judged over time rather than month by month.",
    structure: [
      "Campaigns are organised by location and campaign type, with Search and Performance Max campaigns both in use.",
      "The campaign report lists 239 campaigns, which makes campaign-level review necessary to find where return is strongest.",
    ],
    metrics: [
      { label: "Ad spend", value: "$435,582.21" },
      { label: "Revenue", value: "$4,666,769.53" },
      { label: "Return on ad spend", value: "10.71" },
      { label: "Clicks", value: "599,581" },
      { label: "Top Performance Max campaign: spend", value: "$2,774.85" },
      { label: "Top Performance Max campaign: return", value: "108.35" },
    ],
    reading: [
      "The account-level return of 10.71 is consistent with the 10x average ROAS across my work.",
      "Individual campaigns vary widely. The top Performance Max campaign returned far more than the account average on a small share of spend, which is why campaign-level review matters.",
    ],
    screenshot: "/screenshots/3.png",
    shotAlt: "Google Ads campaign report for January to November 2026 showing ad spend, revenue and return on ad spend",
  },
  {
    slug: "case-study-02",
    n: "02",
    title: "October 2026 Campaign Review",
    summary: "A monthly review in October 2026 with revenue of about nine times ad spend and a cost per click of about five cents.",
    period: "1 to 31 October 2026",
    client: "Anonymised single-campaign account",
    platform: "Google Ads",
    overview: "A monthly review of a Google Ads account for October 2026, focused on return on ad spend and the cost of each click.",
    structure: [
      "The month's activity sat in one main campaign, reported with its key events, spend, clicks and revenue.",
    ],
    metrics: [
      { label: "Ad spend", value: "$930.95" },
      { label: "Revenue", value: "$8,982.89" },
      { label: "Return on ad spend", value: "9.65" },
      { label: "Clicks", value: "18,764" },
      { label: "Cost per click", value: "about $0.05" },
    ],
    reading: [
      "Revenue was about nine and a half times spend for the month.",
      "A cost per click of about five cents, at this volume, shows low-cost traffic reaching the account at scale.",
    ],
    screenshot: "/screenshots/2.png",
    shotAlt: "Google Ads key events report for October 2026 showing ad spend, revenue and return",
  },
  {
    slug: "case-study-03",
    n: "03",
    title: "November 2026 Search and Performance Max Account",
    summary: "A mid-November view across Search and Performance Max campaigns, with a return of 8.01 and search campaigns returning the highest ratios.",
    period: "1 to 17 November 2026",
    client: "Anonymised multi-location account",
    platform: "Google Ads (Search and Performance Max)",
    overview: "A mid-month view of a multi-location Google Ads account, covering both Search and Performance Max campaigns across 176 campaign rows.",
    structure: [
      "Search campaigns are set up by location, and Performance Max campaigns run alongside them.",
      "Return differs sharply between campaigns, so the report is used to compare them side by side.",
    ],
    metrics: [
      { label: "Ad spend", value: "$26,043.41" },
      { label: "Revenue", value: "$208,540.09" },
      { label: "Return on ad spend", value: "8.01" },
      { label: "Clicks", value: "38,862" },
      { label: "Best search campaign: return", value: "39.17 on $144.72 spend" },
      { label: "Best Performance Max campaign: return", value: "13.65 on $504.75 spend" },
    ],
    reading: [
      "Search campaigns returned the highest ratios, on smaller budgets.",
      "Larger budgets sat closer to the account average. Comparing these campaigns side by side shows where additional budget is most likely to return the most.",
    ],
    screenshot: "/screenshots/4.png",
    shotAlt: "Google Ads campaign table for November 2026 showing ad spend, revenue and return by campaign",
  },
  {
    slug: "case-study-04",
    n: "04",
    title: "Single-Campaign Return Review, November 2026",
    summary: "A single campaign in November 2026 returned 18.57 on ad spend, with revenue about nine times the spend.",
    period: "1 to 17 November 2026",
    client: "Anonymised single-campaign account",
    platform: "Google Ads",
    overview: "A focused review of one campaign in November 2026, showing how a low-spend campaign can return strongly when its conversions are tracked and reported accurately.",
    structure: [
      "One campaign carries the month's activity, with key events and revenue tracked against spend.",
    ],
    metrics: [
      { label: "Ad spend", value: "$512.32" },
      { label: "Revenue", value: "$9,513.60" },
      { label: "Return on ad spend", value: "18.57" },
      { label: "Clicks", value: "11,125" },
    ],
    reading: [
      "Revenue was about 18.6 times spend for the period.",
      "A campaign at this level of return is a candidate for more budget, provided volume holds as spend increases.",
    ],
    screenshot: "/screenshots/1.png",
    shotAlt: "Google Ads key events report for a single campaign in November 2026 showing ad spend and return",
  },
  {
    slug: "case-study-05",
    n: "05",
    title: "Account Monitoring and Optimisation Recommendations",
    summary: "A dashboard view of account health, diagnostics and optimisation recommendations used to decide what to act on next.",
    period: "9 July to 17 November 2026",
    client: "Anonymised account",
    platform: "Google Ads",
    overview: "A dashboard view of a Google Ads account, showing the overview, account diagnostics and recommendations that set the priorities for the next round of optimisation.",
    structure: [
      "The overview shows campaign performance over time, with account diagnostics and recommendations shown below it.",
    ],
    metrics: [
      { label: "Headline figures", value: "Not legible in the supplied screenshot. Verified figures to be added." },
    ],
    reading: [
      "The value of this view is the workflow: diagnostics and recommendations are reviewed first, and changes are prioritised from them.",
    ],
    screenshot: "/screenshots/5.png",
    shotAlt: "Google Ads account overview dashboard with diagnostics and recommendations",
  },
];

export type Testimonial = {
  name: string;
  headline: string;
  relation: string;
  quote: string[];
  source: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Asad Ali",
    headline: "IT Support Specialist ensuring optimal performance and compliance monitoring.",
    relation: "Reported to Ayaz directly, October 16, 2025",
    quote: ["Ayyaz is an incredible person. He is one of the most talented and hard working person out, truly a jack of all trades in Digital Marketing"],
    source: "LinkedIn",
  },
  {
    name: "Ticharwa Gwanzura PMP PSM ACP",
    headline: "Homecare Service Provider",
    relation: "Client of Ayaz, February 16, 2024",
    quote: [
      "In the realm of effective communication, Ayyaz Aly emerges as a luminary, showcasing remarkable prowess in the art of newsletter writing. As a recipient of his newsletters, I am compelled to offer my glowing review of his exceptional talent and dedication to the craft.",
      "Ayyaz Aly is undeniably a standout talent in the realm of newsletter writing. His ability to inform, inspire, and entertain through his writing is nothing short of extraordinary.",
    ],
    source: "LinkedIn",
  },
  {
    name: "Johnson Benjamin",
    headline: "Electrical Engineer | Software & Web Development | AI Training & Data Annotation | Technical Problem Solving",
    relation: "Client of Ayaz, November 6, 2023",
    quote: ["I highly recommend ayyaz for his exceptional teamwork skills. He was always willing to collaborate and support, fostering a positive and collaborative work environment. Working with ayyaz was a pleasure due to his exceptional problem-solving abilities."],
    source: "LinkedIn",
  },
  {
    name: "Anthony Surkhosh",
    headline: "20+ years experience | Mall Manager | Shopping Mall Management | Leasing | Consultant | Commercial | Administration | Operations | Customer and Tenant Relations",
    relation: "Managed Ayaz directly, November 6, 2023",
    quote: ["I found him as a person with great expertise and deep knowledge of content writing. Ayyaz ali possesses a winning combination of digital marketing skills and writing the best content. Certainly worth recommending."],
    source: "LinkedIn",
  },
  {
    name: "Andrew Reed",
    headline: "Fleet Compliance & Back-Office Support for New Motor Carriers | DOT | ELD | IFTA | UCR | Alys Logistics",
    relation: "Client of Ayaz, November 6, 2023",
    quote: ["I received three outstanding scripts from Ayyaz Aly; his talent as a writer is truly remarkable."],
    source: "LinkedIn",
  },
];
