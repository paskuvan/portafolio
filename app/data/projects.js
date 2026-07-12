// Edit this list with your real projects.
// `image`: put a file in /public/projects and reference it as "/projects/name.png".
// While image is null the card shows a styled placeholder.
// `layout` places each card on the 12-column editorial grid (desktop).
// `gallery` is the media stack shown on the project page (/work/[slug]);
// give each block an `image` when you have real shots.
export const projects = [
  {
    slug: "project-one",
    category: "CODING PROJECT",
    title: "PROJECT ONE™",
    year: "2024—2026",
    date: "JUN 2026",
    image: null,
    ratio: "aspect-[16/10]",
    layout: "lg:col-start-5 lg:col-span-8",
    hue: 232,
    description:
      "Project One is a placeholder for your flagship project. Describe here what it is, the problem it solves, the stack you used and the decisions that shaped it. Keep it to one or two solid paragraphs — the media below does the heavy lifting.",
    link: { label: "VISIT PROJECT ↗", href: "#" },
    gallery: [
      { image: null, ratio: "aspect-[16/10]", hue: 232 },
      { image: null, ratio: "aspect-[16/10]", hue: 220 },
      { image: null, ratio: "aspect-square", hue: 245 },
    ],
  },
  {
    slug: "project-two",
    category: "PRODUCT DESIGN",
    title: "PROJECT TWO",
    year: "2025",
    date: "NOV 2025",
    image: null,
    ratio: "aspect-[4/3]",
    layout: "lg:col-start-1 lg:col-span-5",
    hue: 258,
    description:
      "Project Two is a product design case study placeholder. Summarize the brief, your role, and the outcome.",
    link: null,
    gallery: [
      { image: null, ratio: "aspect-[4/3]", hue: 258 },
      { image: null, ratio: "aspect-[16/10]", hue: 270 },
    ],
  },
  {
    slug: "project-three",
    category: "CODING PROJECT",
    title: "PROJECT THREE",
    year: "2025",
    date: "MAY 2025",
    image: null,
    ratio: "aspect-[4/3]",
    layout: "lg:col-start-7 lg:col-span-5",
    hue: 210,
    description:
      "Project Three is a coding experiment placeholder. Explain what you built and what you learned.",
    link: { label: "GITHUB ↗", href: "#" },
    gallery: [
      { image: null, ratio: "aspect-[16/10]", hue: 210 },
      { image: null, ratio: "aspect-[16/10]", hue: 200 },
    ],
  },
  {
    slug: "project-four",
    category: "BRANDING",
    title: "PROJECT FOUR",
    year: "2024",
    date: "SEP 2024",
    image: null,
    ratio: "aspect-square",
    layout: "lg:col-start-6 lg:col-span-3",
    hue: 280,
    description:
      "Project Four is a branding placeholder. Talk identity, typography and voice.",
    link: null,
    gallery: [
      { image: null, ratio: "aspect-square", hue: 280 },
      { image: null, ratio: "aspect-[4/3]", hue: 290 },
    ],
  },
  {
    slug: "project-five",
    category: "EXPERIMENT",
    title: "PROJECT FIVE",
    year: "2023",
    date: "JUL 2023",
    image: null,
    ratio: "aspect-square",
    layout: "lg:col-start-10 lg:col-span-3",
    hue: 195,
    description:
      "Project Five is an experiment placeholder. Small scope, strong idea — say it in a sentence or two.",
    link: null,
    gallery: [{ image: null, ratio: "aspect-[16/10]", hue: 195 }],
  },
  {
    slug: "project-six",
    category: "PRODUCT DESIGN",
    title: "PROJECT SIX",
    year: "2022",
    date: "MAR 2022",
    image: null,
    ratio: "aspect-[4/3]",
    layout: "lg:col-start-1 lg:col-span-4",
    hue: 245,
    description:
      "Project Six is a product design placeholder from an earlier era of your work.",
    link: null,
    gallery: [{ image: null, ratio: "aspect-[4/3]", hue: 245 }],
  },
];

export const socials = [
  { label: "MAJOPASKUVAN@GMAIL.COM", href: "mailto:majopaskuvan@gmail.com" },
  { label: "TWITTER/X", href: "#" },
  { label: "GITHUB", href: "#" },
  { label: "LINKEDIN", href: "#" },
];
