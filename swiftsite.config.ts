// Osnovni podaci o sajtu
export const SITE = {
  title: "SwiftSite",
  tagline: "Fast, simple sites — Astro + Cloudflare",
  description:
    "Ultra-brzi sajtovi sa minimalnom konfiguracijom. Landing + mail + calendar + Zoom.",
  lang: "en",
  author: "SwiftSite",
  url: "https://example.com" // postavi kad dodaš domen
};

// Tema (LIGHT default)
export const THEME = {
  bg: "#ffffff",
  panel: "#f8f9fb",
  ink: "#111111",
  muted: "#666a73",
  accent: "#b11c1c"
};

// Linkovi za akcije (postavi prave adrese po potrebi)
export const LINKS = {
  email: "mailto:hello@example.com",
  calendar: "#",
  zoom: "#"
};

// Uključene funkcionalnosti
export const FEATURES = {
  hero: true,
  pricing: true,
  contact: true,
  calendar: false,
  zoom: false,
  gallery: false,
  blog: false
};

// Paketi
export const PACKAGES = [
  {
    slug: "basic",
    name: "Basic",
    price: "€99 setup",
    desc: "Landing + contact email",
    features: ["Landing page", "Contact form (email)", "SEO basics", "Fast hosting"]
  },
  {
    slug: "plus",
    name: "Plus",
    price: "€149 setup",
    desc: "Basic + 1 dodatni servis",
    features: ["Sve iz Basic", "Calendar OR Zoom integracija"]
  },
  {
    slug: "pro",
    name: "Pro",
    price: "€199 setup",
    desc: "Basic + 2 dodatna servisa",
    features: ["Sve iz Basic", "Calendar AND Zoom integracija"]
  }
];

// Brend asseti (ovdje samo navodimo putanje iz /public)
export const ASSETS = {
  logoLight: "/brand/swiftsite-logo.png", // ova koju si dodao
  logoDark: "/brand/swiftsite-logo.png",  // može ista; kasnije možemo dodati tamnu varijantu
  og: "/brand/swiftsite-logo.png",        // privremeni OG (1200x630 može kasnije)
  favicon: "/favicon.svg"                 // zamijeni kad spremiš novi favicon
};
