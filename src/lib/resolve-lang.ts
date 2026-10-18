import { notFound, permanentRedirect } from "next/navigation";
import { DEFAULT_LANGUAGE, PREFIXED_LANGUAGES, isLanguage, type Language } from "./i18n";

// Validates the [lang] route segment.
// - "en" / "jp" are returned as-is.
// - "kr" is redirected to the unprefixed URL so each page has one canonical address.
// - Anything else (typos, stray asset requests) becomes a 404 instead of a server error.
export function resolveLang(lang: string, restPath = ""): Language {
  if (!isLanguage(lang)) {
    notFound();
  }
  if (lang === DEFAULT_LANGUAGE) {
    permanentRedirect(restPath ? `/${restPath}` : "/");
  }
  return lang;
}

export function languageStaticParams() {
  return PREFIXED_LANGUAGES.map((lang) => ({ lang }));
}
