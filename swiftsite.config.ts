// Osnovna podešavanja brenda + koje “kockice” su uključene
export const SITE = {
  title: "SwiftSite",
  tagline: "Fast, simple sites — Astro + Cloudflare",
  description:
    "Ultra-brzi sajtovi sa minimalnom konfiguracijom. Landing + mail + calendar + Zoom.",
  lang: "en",
  author: "SwiftSite",
  url: "https://example.com", // kasnije promijeni na pravi domen
};

export const THEME = {
  // Možeš promijeniti boje po projektu
  bg: "#0d1117",
  panel: "#0f1521",
  ink: "#e6e9ef",
  muted: "#aeb6c2",
  accent: "#b11c1c",
};

export const FEATURES = {
  // U sljedećim fazama palimo/gasimo prave sekcije i rute
  contactForm: true,  // (placeholder sada; prava forma stiže u Fazi 4)
  calendar: false,    // Cal.com embed
  zoom: false,        // Zoom CTA
  blog: false,        // MDX/Insights
  gallery: false      // Galerija
};
