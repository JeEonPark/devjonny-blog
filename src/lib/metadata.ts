import type { Metadata } from "next";
import { LANGUAGES, OG_LOCALE, localizePath, type Language } from "./i18n";
import { DEFAULT_OG_IMAGE, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "./site";

interface PageMetadataInput {
  lang: Language;
  // Language-agnostic path, e.g. "/post" or "/post/my-slug".
  path: string;
  title?: string;
  description?: string;
  image?: string;
  // Languages the page exists in. Defaults to all languages.
  availableLanguages?: readonly Language[];
  type?: "website" | "article";
  publishedTime?: string;
}

function buildAlternates(path: string, available: readonly Language[]): Metadata["alternates"] {
  const languages: Record<string, string> = {};
  for (const lang of available) {
    languages[OG_LOCALE[lang].replace("_", "-")] = `${SITE_URL}${localizePath(path, lang)}`;
  }
  if (available.includes("kr")) {
    languages["x-default"] = `${SITE_URL}${localizePath(path, "kr")}`;
  }
  return { languages };
}

export function buildPageMetadata({
  lang,
  path,
  title,
  description,
  image = DEFAULT_OG_IMAGE,
  availableLanguages = LANGUAGES,
  type = "website",
  publishedTime,
}: PageMetadataInput): Metadata {
  const resolvedDescription = description ?? SITE_DESCRIPTION[lang];
  const canonical = `${SITE_URL}${localizePath(path, lang)}`;

  return {
    title: title ?? { absolute: SITE_NAME },
    description: resolvedDescription,
    alternates: {
      canonical,
      ...buildAlternates(path, availableLanguages),
    },
    openGraph: {
      type,
      url: canonical,
      siteName: SITE_NAME,
      title: title ?? SITE_NAME,
      description: resolvedDescription,
      locale: OG_LOCALE[lang],
      alternateLocale: availableLanguages.filter((l) => l !== lang).map((l) => OG_LOCALE[l]),
      images: [{ url: image }],
      ...(type === "article" && publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: title ?? SITE_NAME,
      description: resolvedDescription,
      images: [image],
    },
  };
}
