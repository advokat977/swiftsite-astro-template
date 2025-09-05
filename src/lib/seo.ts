import { SITE } from "../../swiftsite.config";

export function metaDefaults(pageTitle?: string, pageDescription?: string) {
  const title = pageTitle ? `${pageTitle}` : SITE.title;
  const description = pageDescription || SITE.description;
  const og = "/og.png"; // placeholder; dodaćemo sliku odmah
  return { title, description, og };
}
