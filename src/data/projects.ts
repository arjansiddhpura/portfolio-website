export type Project = {
  slug: string;
  number: string;
  title: string;
  oneLiner: string;
  role: string;
  type: string;
  meta: string;
  image: string;
  gallery?: string[];
  liveUrl?: string;
  whatItIs: string;
  whatIMade: string;
  steps?: { title: string; body: string }[];
  cards?: { title: string; body: string }[];
};

export const projects: Project[] = [
  {
    slug: "blume-search",
    number: "01",
    title: "Blume Search",
    oneLiner:
      "AI search for any video library. Find the exact clip in seconds.",
    role: "Entire product",
    type: "AI video search",
    meta: "search.buildwithblume.com",
    image: "/images/blume-search.webp",
    liveUrl: "https://search.buildwithblume.com",
    whatItIs:
      "Paste a Google Drive video folder. Ask for a clip in Telegram by visuals, spoken words, or topic. Get the exact video and timestamp.",
    whatIMade:
      "The full product: how it works, features, credit packs, and the website. I made everything myself.",
    steps: [
      {
        title: "Connect Google Drive",
        body: "Paste the folder link with your video assets into Telegram.",
      },
      {
        title: "Ask anything",
        body: "Search by objects, scenes, spoken words, or topics.",
      },
      {
        title: "Get the exact clip",
        body: "Receive the timestamp and video, ready to use.",
      },
    ],
  },
  {
    slug: "blumecolor",
    number: "02",
    title: "BlumeColor",
    oneLiner:
      "Color grade a video in 5 clicks, with the look you intended.",
    role: "Product design",
    type: "Color grading app",
    meta: "Product",
    image: "/images/blumecolor.webp",
    whatItIs:
      "A color grading app for people who want their video graded quickly, matching the vision they have in mind.",
    whatIMade:
      "Five clicks. No long grading setup. The user gets the intended look without learning a complex tool.",
  },
  {
    slug: "rira",
    number: "03",
    title: "RIRA",
    oneLiner:
      "Product website for welding-free stainless steel railing systems.",
    role: "Entire website",
    type: "Product website",
    meta: "rirabyriga.com",
    image: "/images/rira.webp",
    liveUrl: "https://www.rirabyriga.com",
    whatItIs:
      "RIRA by Riga Industries sells premium welding-free railing systems, glass partitions, shower cubicles, and skylights. The site must make the product clear in seconds.",
    whatIMade:
      "The full website: Home, About, Products, Gallery, and Contact. I made everything myself.",
    cards: [
      { title: "Railing System", body: "Knock-down, no on-site welding." },
      { title: "Glass Partition", body: "For offices and interiors." },
      { title: "Shower Cubicle", body: "For hotels and homes." },
      { title: "Skylights", body: "For modern architecture." },
    ],
  },
  {
    slug: "firetruck-visualizer",
    number: "04",
    title: "FireTruck Visualizer",
    oneLiner: "Marketing site for custom fire engines.",
    role: "Team project",
    type: "Marketing site",
    meta: "Three directions",
    image: "/images/firetruck-visualizer.webp",
    gallery: ["/images/firetruck-visualizer-2.webp"],
    whatItIs:
      "A marketing site for Wadia, a company that builds custom fire engines. We explored three visual directions so the client can compare and choose.",
    whatIMade:
      "Option A is the main one: a dark, cinematic experience. You scroll and the fire truck turns as if you are walking around it. Then models, story, and contact. Option B is a clean product brochure. Option C is bold and poster-like.",
    cards: [
      {
        title: "Option A",
        body: "Dark, cinematic. The truck turns as you scroll.",
      },
      {
        title: "Option B",
        body: "A clean product brochure.",
      },
      {
        title: "Option C",
        body: "Bold and poster-like.",
      },
    ],
  },
  {
    slug: "rira-operations",
    number: "05",
    title: "Rira Operations",
    oneLiner:
      "Desktop app that tracks materials from factory to installation site.",
    role: "Product design",
    type: "Desktop app",
    meta: "Riga Industries",
    image: "/images/rira-operations.webp",
    whatItIs:
      "Rira Operations helps the company track materials from the factory to the installation site — stock, vendors, dispatch, installers, progress, billing, and daily site expenses.",
    whatIMade:
      "The software design for Rira: one place to see what arrived, what was processed, what went to site, what can be billed, and what has been paid.",
    cards: [
      { title: "Factory stock", body: "What arrived at the factory." },
      { title: "Vendors", body: "What was sent out and what came back." },
      { title: "Site store", body: "What was dispatched to the site." },
      { title: "Installation", body: "What was given to agencies, and progress." },
      { title: "Billing", body: "What can be billed and what has been paid." },
      { title: "Expenses", body: "Daily site expenses in one record." },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getNextProject(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index === -1) return undefined;
  return projects[(index + 1) % projects.length];
}
