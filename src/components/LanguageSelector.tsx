"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LanguageSelector() {
  const pathname = usePathname();

  // Function to generate language-specific URLs
  function getLanguageUrls(path: string) {
    // Remove all language prefixes if they exist
    const cleanPath = path.replace(/^\/(en|jp)(\/.*)?$/, "$2") || "/";

    return {
      kr: cleanPath,
      en: cleanPath === "/" ? "/en/" : `/en${cleanPath}`,
      jp: cleanPath === "/" ? "/jp/" : `/jp${cleanPath}`,
    };
  }

  const urls = getLanguageUrls(pathname);

  // Determine current language more accurately
  const languageMatch = pathname.match(/^\/(en|jp)(\/|$)/);
  const currentLang = languageMatch ? (languageMatch[1] as "en" | "jp") : "kr";

  return (
    <div className="language-selector flex items-center justify-center mb-8">
      <div className="flex items-center gap-1 bg-[rgba(255,255,255,0.03)] backdrop-blur-sm border border-[rgba(255,255,255,0.08)] rounded-full p-1 shadow-[0_4px_20px_rgba(0,0,0,0.1)]">
        <Link
          href={urls.kr}
          className={`lang-btn group relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
            currentLang === "kr"
              ? "bg-[rgba(var(--primary),0.15)] text-[rgb(var(--primary))] opacity-100 scale-105"
              : "text-[rgb(var(--neutral))] opacity-70 hover:opacity-100 hover:text-[rgb(var(--white))] hover:bg-[rgba(255,255,255,0.08)] hover:scale-105"
          }`}>
          <span className="relative z-10">KR</span>
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(var(--primary),0.1)] to-[rgba(var(--primary),0.05)] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </Link>
        <Link
          href={urls.en}
          className={`lang-btn group relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
            currentLang === "en"
              ? "bg-[rgba(var(--primary),0.15)] text-[rgb(var(--primary))] opacity-100 scale-105"
              : "text-[rgb(var(--neutral))] opacity-70 hover:opacity-100 hover:text-[rgb(var(--white))] hover:bg-[rgba(255,255,255,0.08)] hover:scale-105"
          }`}>
          <span className="relative z-10">EN</span>
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(var(--primary),0.1)] to-[rgba(var(--primary),0.05)] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </Link>
        <Link
          href={urls.jp}
          className={`lang-btn group relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
            currentLang === "jp"
              ? "bg-[rgba(var(--primary),0.15)] text-[rgb(var(--primary))] opacity-100 scale-105"
              : "text-[rgb(var(--neutral))] opacity-70 hover:opacity-100 hover:text-[rgb(var(--white))] hover:bg-[rgba(255,255,255,0.08)] hover:scale-105"
          }`}>
          <span className="relative z-10">JP</span>
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(var(--primary),0.1)] to-[rgba(var(--primary),0.05)] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </Link>
      </div>
    </div>
  );
}
