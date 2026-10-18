"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LANGUAGES, getLanguageFromPathname, localizePath, stripLanguagePrefix, type Language } from "@/lib/i18n";

const LABELS: Record<Language, string> = { kr: "KR", en: "EN", jp: "JP" };
const ARIA_LABELS: Record<Language, string> = { kr: "한국어", en: "English", jp: "日本語" };

interface LanguageSelectorProps {
  align?: "center" | "start";
}

export default function LanguageSelector({ align = "center" }: LanguageSelectorProps) {
  const pathname = usePathname();
  const currentLang = getLanguageFromPathname(pathname);
  const basePath = stripLanguagePrefix(pathname);

  return (
    <nav
      aria-label="Language"
      className={`language-selector flex items-center mb-8 ${align === "start" ? "justify-start" : "justify-center"}`}>
      <div className="flex items-center gap-1 bg-[rgba(255,255,255,0.03)] backdrop-blur-sm border border-[rgba(255,255,255,0.08)] rounded-full p-1 shadow-[0_4px_20px_rgba(0,0,0,0.1)]">
        {LANGUAGES.map((lang) => {
          const isCurrent = lang === currentLang;
          return (
            <Link
              key={lang}
              href={localizePath(basePath, lang)}
              hrefLang={lang === "kr" ? "ko" : lang === "jp" ? "ja" : "en"}
              aria-label={ARIA_LABELS[lang]}
              aria-current={isCurrent ? "true" : undefined}
              className={`lang-btn group relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                isCurrent
                  ? "bg-[rgba(var(--primary),0.15)] text-[rgb(var(--primary))] opacity-100 scale-105"
                  : "text-[rgb(var(--neutral))] opacity-70 hover:opacity-100 hover:text-[rgb(var(--white))] hover:bg-[rgba(255,255,255,0.08)] hover:scale-105"
              }`}>
              <span className="relative z-10">{LABELS[lang]}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[rgba(var(--primary),0.1)] to-[rgba(var(--primary),0.05)] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
