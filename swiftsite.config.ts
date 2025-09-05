// Osnovni podaci o sajtu
export const SITE = {
  title: "SwiftSite",
  tagline: "Fast, simple sites — Astro + Cloudflare",
  description:
    "Ultra-brzi sajtovi sa minimalnom konfiguracijom. Landing + mail + calendar + Zoom.",
  lang: "en",
  author: "SwiftSite",
  url: "https://example.com", // postavi kad dodaš domen
};

// Tema (boje)
export const THEME = {
  bg: "#0d1117",
  panel: "#0f1521",
  ink: "#e6e9ef",
  muted: "#aeb6c2",
  accent: "#b11c1c",
};

// Linkovi za akcije (postavi kad imaš prave adrese)
export const LINKS = {
  email: "mailto:hello@example.com",
  calendar: "https://cal.com/yourname/intro", // ili ostavi "#"
  zoom: "https://zoom.us/j/1234567890",       // ili "#"
};

// Uključene funkcionalnosti (palimo/gasimo sekcije)
export const FEATURES = {
  hero: true,
  pricing: true,
  contact: true,   // placeholder (prava forma stiže u Fazi 4)
  calendar: false, // Cal.com embed/CTA
  zoom: false,     // Zoom CTA
  gallery: false,  // stranica sa gridom slika
  blog: false      // "Insights" placeholder
};

// Paketna logika (za SwiftSite)
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
