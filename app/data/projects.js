// Edit this list with your real projects.
//
// Structure per project (mirrors the reference detail page):
//   slug        → URL: /work/[slug]
//   category    → badge on the home card
//   title       → card + detail headline
//   year        → range shown on card and under the title ("2024—2026")
//   published   → post date shown under the title and in Metadata ("MAY 31, 2026")
//   paragraphs  → body of the detail page, one string per paragraph
//   link        → optional CTA pill ({ label, href }) or null
//   image       → home card media ("/projects/name.png" once you add real shots)
//   ratio/hue/layout → card look & position on the 12-col grid
//   gallery     → media stack on the detail page; `dimensions` of the first
//                 block feeds the Metadata panel
// The "Characters" metadata field is computed automatically from paragraphs.
export const projects = [
  {
    slug: "project-one",
    category: "CODING PROJECT",
    title: "PROJECT ONE™",
    year: "2024—2026",
    published: "JUN 12, 2026",
    paragraphs: [
      "Project One™ is a placeholder for your flagship project. Open with what it is and who it is for — one sentence that could stand alone.",
      "Use this second paragraph for the problem it solves and the approach you took: the stack, the constraints, the decisions that shaped it.",
      "Close with where it stands today — shipped, in progress, open source — and what you'd explore next.",
    ],
    link: { label: "VISIT PROJECT ↗", href: "#" },
    image: null,
    ratio: "aspect-[16/10]",
    layout: "lg:col-start-5 lg:col-span-8",
    hue: 232,
    gallery: [
      { image: null, ratio: "aspect-[16/10]", hue: 232, dimensions: "1470×798" },
      { image: null, ratio: "aspect-[16/10]", hue: 220, dimensions: "1470×798" },
      { image: null, ratio: "aspect-square", hue: 245, dimensions: "1080×1080" },
    ],
  },
  {
    slug: "project-two",
    category: "PRODUCT DESIGN",
    title: "PROJECT TWO",
    year: "2025",
    published: "NOV 03, 2025",
    paragraphs: [
      "Project Two is a product design case study placeholder. Summarize the brief, your role, and the outcome.",
      "Add a paragraph on process if it earns its place — research, iterations, the tradeoff that mattered.",
    ],
    link: null,
    image: null,
    ratio: "aspect-[4/3]",
    layout: "lg:col-start-1 lg:col-span-5",
    hue: 258,
    gallery: [
      { image: null, ratio: "aspect-[4/3]", hue: 258, dimensions: "1600×1200" },
      { image: null, ratio: "aspect-[16/10]", hue: 270, dimensions: "1470×798" },
    ],
  },
  {
    slug: "project-three",
    category: "CODING PROJECT",
    title: "PROJECT THREE",
    year: "2025",
    published: "MAY 20, 2025",
    paragraphs: [
      "Project Three is a coding experiment placeholder. Explain what you built and what you learned.",
    ],
    link: { label: "GITHUB ↗", href: "#" },
    image: null,
    ratio: "aspect-[4/3]",
    layout: "lg:col-start-7 lg:col-span-5",
    hue: 210,
    gallery: [
      { image: null, ratio: "aspect-[16/10]", hue: 210, dimensions: "1470×798" },
      { image: null, ratio: "aspect-[16/10]", hue: 200, dimensions: "1470×798" },
    ],
  },
  {
    slug: "project-four",
    category: "BRANDING",
    title: "PROJECT FOUR",
    year: "2024",
    published: "SEP 14, 2024",
    paragraphs: [
      "Project Four is a branding placeholder. Talk identity, typography and voice.",
    ],
    link: null,
    image: null,
    ratio: "aspect-square",
    layout: "lg:col-start-6 lg:col-span-3",
    hue: 280,
    gallery: [
      { image: null, ratio: "aspect-square", hue: 280, dimensions: "1080×1080" },
      { image: null, ratio: "aspect-[4/3]", hue: 290, dimensions: "1600×1200" },
    ],
  },
  {
    slug: "project-five",
    category: "EXPERIMENT",
    title: "PROJECT FIVE",
    year: "2023",
    published: "JUL 08, 2023",
    paragraphs: [
      "Project Five is an experiment placeholder. Small scope, strong idea — say it in a sentence or two.",
    ],
    link: null,
    image: null,
    ratio: "aspect-square",
    layout: "lg:col-start-10 lg:col-span-3",
    hue: 195,
    gallery: [
      { image: null, ratio: "aspect-[16/10]", hue: 195, dimensions: "1470×798" },
    ],
  },
  {
    slug: "project-six",
    category: "PRODUCT DESIGN",
    title: "PROJECT SIX",
    year: "2022",
    published: "MAR 27, 2022",
    paragraphs: [
      "Project Six is a product design placeholder from an earlier era of your work.",
    ],
    link: null,
    image: null,
    ratio: "aspect-[4/3]",
    layout: "lg:col-start-1 lg:col-span-4",
    hue: 245,
    gallery: [
      { image: null, ratio: "aspect-[4/3]", hue: 245, dimensions: "1600×1200" },
    ],
  },
];

export const socials = [
  { label: "MAJOPASKUVAN@GMAIL.COM", href: "mailto:majopaskuvan@gmail.com" },
  { label: "TWITTER/X", href: "#" },
  { label: "GITHUB", href: "#" },
  { label: "LINKEDIN", href: "#" },
];
