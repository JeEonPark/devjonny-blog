// Single source of truth for supported languages and URL conventions.
// "kr" is the default language and is served without a URL prefix.
export const LANGUAGES = ["kr", "en", "jp"] as const;
export type Language = (typeof LANGUAGES)[number];

export const DEFAULT_LANGUAGE: Language = "kr";

// Languages that appear as a URL prefix (e.g. /en/post).
export const PREFIXED_LANGUAGES = LANGUAGES.filter((lang) => lang !== DEFAULT_LANGUAGE);

export function isLanguage(value: string): value is Language {
  return (LANGUAGES as readonly string[]).includes(value);
}

// BCP 47 tags used for <html lang>, Intl formatting and Open Graph locale.
export const BCP47: Record<Language, string> = {
  kr: "ko-KR",
  en: "en-US",
  jp: "ja-JP",
};

export const OG_LOCALE: Record<Language, string> = {
  kr: "ko_KR",
  en: "en_US",
  jp: "ja_JP",
};

// Extracts the language from a pathname. "/en/post" -> "en", "/post" -> "kr".
export function getLanguageFromPathname(pathname: string): Language {
  const first = pathname.split("/").filter(Boolean)[0];
  if (first && isLanguage(first) && first !== DEFAULT_LANGUAGE) {
    return first;
  }
  return DEFAULT_LANGUAGE;
}

// Strips a leading language prefix. "/en/post/foo" -> "/post/foo".
export function stripLanguagePrefix(pathname: string): string {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length > 0 && isLanguage(segments[0])) {
    segments.shift();
  }
  return `/${segments.join("/")}`;
}

// Builds a language-aware path. ("post", "en") -> "/en/post", ("post", "kr") -> "/post".
export function localizePath(path: string, lang: Language): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (lang === DEFAULT_LANGUAGE) {
    return clean;
  }
  return clean === "/" ? `/${lang}` : `/${lang}${clean}`;
}

export function formatDate(
  dateString: string,
  lang: Language,
  options: Intl.DateTimeFormatOptions = { year: "numeric", month: "short", day: "2-digit" },
): string {
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) {
    return dateString;
  }
  return new Intl.DateTimeFormat(BCP47[lang], { ...options, timeZone: "UTC" }).format(date);
}
