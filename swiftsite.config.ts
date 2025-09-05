// ---------------------------------------------
// SwiftSite – Site Config (current live design)
// ---------------------------------------------

// Basic site info
export const SITE = {
  title: "SwiftSite",
  tagline: "Your vision, live in 72 hours.",
  description:
    "Streamlined web development with uncompromised quality. Landing + mail + calendar or Zoom. Launch in 72 hours on Cloudflare hosting.",
  lang: "en",
  author: "SwiftSite",
  url: "https://example.com", // set when domain is connected
};

// Theme (single light theme; dark mode removed)
export const THEME = {
  // Premium light palette (champagne & navy)
  bg: "#F7F7F7",          // page background
  panel: "#FFFFFF",       // cards / panels
  ink: "#0E1420",         // primary text
  muted: "#6B7280",       // secondary text
  accent: "#B99B6B",      // champagne / gold accent
  accentDeep: "#0A192F",  // deep navy for contrasts if needed
  radius: 14,             // default border radius for cards
};

// Anchor links / CTAs used in components
export const LINKS = {
  contact: "#contact",
  pricing: "#pricing",
  // leave these as external service links if you ever enable them
  calendar: "#", // e.g. Cal.com link
  zoom: "#",     // e.g. Zoom room link
};

// Feature toggles (only what we actually render)
export const FEATURES = {
  hero: true,
  pricing: true,
  faq: true,
  contact: true,

  // currently unused, kept for template parity
  calendar: false,
  zoom: false,
  gallery: false,
  blog: false,

  // explicit: no dark mode / auto-switch
  darkMode: false,
};

// Pricing (copy aligned with current English site)
export const PACKAGES = [
  {
    slug: "basic",
    name: "Basic",
    price: "€99 setup",
    desc: "Ideal for a quick and effective online debut.",
    features: [
      "Custom Landing Page",
      "Professional Contact Form",
      "SEO Optimisation Basics",
      "Cloudflare hosting",
    ],
  },
  {
    slug: "plus",
    name: "Plus",
    price: "€149 setup",
    desc: "Most popular. Built for dynamic client engagement.",
    features: [
      "Everything in Basic",
      "Calendar OR Zoom integration",
      "Advanced analytics",
      "Cloudflare hosting",
    ],
    mostPopular: true,
  },
  {
    slug: "pro",
    name: "Pro",
    price: "€199 setup",
    desc: "Full-spectrum solution for growing teams.",
    features: [
      "Everything in Plus",
      "Full multi-page website",
      "Custom functionality (on request)",
      "Cloudflare hosting",
    ],
  },
];

// Pricing table helper (footnote under table)
export const PRICING_META = {
  footnote:
    "Plus includes Calendar OR Zoom (one add-on). Pro includes both. No hidden fees. Upgrade anytime.",
};

// Brand assets (served from /public)
export const ASSETS = {
  logoLight: "/brand/swiftsite-logo.png",
  logoDark: "/brand/swiftsite-logo.png",
  og: "/brand/swiftsite-logo.png",
  favicon: "/favicon.svg",
};
