"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LANGUAGES,
  getLanguageFromPathname,
  localizePath,
  stripLanguagePrefix,
  type Language,
} from "@/lib/i18n";

const LABELS: Record<Language, string> = { kr: "KR", en: "EN", jp: "JP" };
const ARIA_LABELS: Record<Language, string> = {
  kr: "한국어",
  en: "English",
  jp: "日本語",
};

interface LanguageSelectorProps {
  align?: "center" | "start";
  // "sm" is the header variant: tighter padding, no bottom margin.
  size?: "md" | "sm";
}

export default function LanguageSelector({
  align = "center",
  size = "md",
}: LanguageSelectorProps) {
  const small = size === "sm";
  const pathname = usePathname();
  const currentLang = getLanguageFromPathname(pathname);
  const basePath = stripLanguagePrefix(pathname);

  return (
    <nav
      aria-label="Language"
      className={`language-selector flex items-center ${small ? "" : "mb-8"} ${
        align === "start" ? "justify-start" : "justify-center"
      }`}
    >
      <div
        className={`flex items-center gap-0.5 bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] rounded-full ${
          small
            ? "p-0.5"
            : "p-1 backdrop-blur-sm shadow-[0_4px_20px_rgba(0,0,0,0.1)]"
        }`}
      >
        {LANGUAGES.map((lang) => {
          const isCurrent = lang === currentLang;
          return (
            <Link
              key={lang}
              href={localizePath(basePath, lang)}
              hrefLang={lang === "kr" ? "ko" : lang === "jp" ? "ja" : "en"}
              aria-label={ARIA_LABELS[lang]}
              aria-current={isCurrent ? "true" : undefined}
              className={`lang-btn relative rounded-full font-medium tabular-nums transition-colors duration-200 ${
                small ? "px-2.5 py-1 text-[0.75rem]" : "px-4 py-2 text-sm"
              } ${
                isCurrent
                  ? "bg-[rgba(var(--primary),0.15)] text-[rgb(var(--primary))]"
                  : "text-[rgb(var(--neutral))] hover:text-[rgb(var(--white))] hover:bg-[rgba(255,255,255,0.08)]"
              }`}
            >
              {LABELS[lang]}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
