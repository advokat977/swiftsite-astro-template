/**
 * SwiftSite – strongly-typed configuration
 * ------------------------------------------------------------
 * Drop this file in the project root as: swiftsite.config.ts
 * Import pieces where needed, e.g.:
 *   import { SITE, THEME, FEATURES, PRICING_TIERS } from "../swiftsite.config";
 */

/* =========================
   Types
   ========================= */

export type SiteConfig = {
  title: string;
  tagline: string;
  description: string;
  lang: string; // "en", "de", etc.
  author: string;
  url: string; // set your production url
};

export type Theme = {
  /** Page background */
  bg: string;
  /** Panels / cards background */
  panel: string;
  /** Primary text color */
  ink: string;
  /** Secondary text color */
  muted: string;
  /** Accent color (buttons, highlights) */
  accent: string;
};

export type Links = {
  /** Public contact mailto: or route anchor to #contact */
  contactHref: string;
  /** Optional: external calendar booking link or route section */
  calendar?: string;
  /** Optional: Zoom or other meeting link */
  zoom?: string;
};

export type FeatureToggles = {
  /** Sections */
  hero: boolean;
  pricing: boolean;
  faq: boolean;
  contact: boolean;

  /** Optional service blocks */
  calendar: boolean;
  zoom: boolean;

  /** Optional pages you may add later */
  gallery: boolean;
  blog: boolean;
};

export type Price = {
  currency: "€" | "$" | "£";
  /** Numeric amount only, e.g. 99 */
  amount: number;
  /** Free text suffix shown next to amount, e.g. "setup" */
  suffix?: string;
};

export type PricingTier = {
  slug: "basic" | "plus" | "pro" | (string & {});
  name: string;
  /** Rendered label like "€99 setup" AND a structured price object for logic */
  label: string;
  price: Price;
  description: string;
  features: string[];
  mostPopular?: boolean;
  /** Where the CTA points to (usually #contact) */
  ctaHref: string;
  /** CTA button label */
  ctaLabel: string;
};

export type Assets = {
  /** Paths relative to /public */
  logoLight: string;
  logoDark: string;
  og: string;
  favicon: string;
};

/* =========================
   Site meta
   ========================= */

export const SITE: SiteConfig = {
  title: "SwiftSite",
  tagline: "Launch in 72h — Astro + Cloudflare",
  description:
    "Premium, fast landing sites with minimal setup. Launch in 72 hours with mail, calendar or Zoom, and polished UX.",
  lang: "en",
  author: "SwiftSite",
  url: "https://example.com", // TODO: set when you add the real domain
};

/* =========================
   Theme (LIGHT by default)
   ========================= */

export const THEME: Theme = {
  bg: "#ffffff",
  panel: "#f6f7f9",
  ink: "#121417",
  muted: "#6b7280",
  accent: "#C7A874", // champagne/gold vibe
};

/* =========================
   Links (actions)
   ========================= */

export const LINKS: Links = {
  contactHref: "#contact",
  calendar: "#pricing", // swap with external booking later if desired
  zoom: "#pricing",
};

/* =========================
   Feature flags
   ========================= */

export const FEATURES: FeatureToggles = {
  hero: true,
  pricing: true,
  faq: true,
  contact: true,

  calendar: false,
  zoom: false,

  gallery: false,
  blog: false,
};

/* =========================
   Prices (base numbers)
   ========================= */

export const PRICES = {
  setupEUR: {
    basic: 99,
    plus: 149,
    pro: 199,
  },
} as const;

/* =========================
   Pricing tiers (render-ready)
   ========================= */

export const PRICING_TIERS: PricingTier[] = [
  {
    slug: "basic",
    name: "Basic",
    label: `€${PRICES.setupEUR.basic} setup`,
    price: { currency: "€", amount: PRICES.setupEUR.basic, suffix: "setup" },
    description: "Ideal for a quick, effective online debut.",
    features: [
      "Custom Landing Page",
      "Professional Contact Form",
      "SEO Optimisation Basics",
      "Cloudflare hosting",
    ],
    ctaHref: "#contact",
    ctaLabel: "Choose Basic",
  },
  {
    slug: "plus",
    name: "Plus",
    label: `€${PRICES.setupEUR.plus} setup`,
    price: { currency: "€", amount: PRICES.setupEUR.plus, suffix: "setup" },
    description: "Most popular. Built for dynamic client engagement.",
    features: [
      "Everything in Basic",
      "Calendar OR Zoom integration",
      "Enhanced Analytics",
      "Cloudflare hosting",
    ],
    mostPopular: true,
    ctaHref: "#contact",
    ctaLabel: "Choose Plus",
  },
  {
    slug: "pro",
    name: "Pro",
    label: `€${PRICES.setupEUR.pro} setup`,
    price: { currency: "€", amount: PRICES.setupEUR.pro, suffix: "setup" },
    description: "Full-spectrum solution for growing teams.",
    features: [
      "Everything in Plus",
      "Full Multi-Page Website",
      "Custom Functionality (on request)",
      "Cloudflare hosting",
    ],
    ctaHref: "#contact",
    ctaLabel: "Choose Pro",
  },
];

/* =========================
   Brand assets (public/)
   ========================= */

export const ASSETS: Assets = {
  logoLight: "/brand/swiftsite-logo.png",
  logoDark: "/brand/swiftsite-logo.png",
  og: "/brand/swiftsite-logo.png",
  favicon: "/favicon.svg",
};
