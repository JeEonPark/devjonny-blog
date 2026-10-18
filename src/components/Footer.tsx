import Link from "next/link";
import { CONTACT } from "@/content/cv";
import { LANGUAGES, localizePath, type Language } from "@/lib/i18n";
import { GITHUB_URL, SITE_NAME } from "@/lib/site";
import { getTranslation } from "@/lib/translations";

interface FooterProps {
  lang: Language;
}

const LANGUAGE_NAMES: Record<Language, string> = { kr: "한국어", en: "English", jp: "日本語" };

export default function Footer({ lang }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] mt-8">
      <div className="max-w-[720px] mx-auto px-4 md:px-6 py-10 flex flex-col gap-6 text-[0.85rem] text-[rgb(var(--neutral))]">
        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3">
          <Link href={localizePath("/", lang)} className="text-[rgb(var(--white))] font-medium no-underline">
            <span>Dev</span>
            <span className="text-[rgb(var(--primary))]">/</span>
            <span> Jonny</span>
          </Link>
          <ul className="flex items-center gap-5 list-none m-0 p-0">
            <li>
              <a href={`mailto:${CONTACT.email}`} className="hover:text-[rgb(var(--primary))] transition-colors">
                {CONTACT.email}
              </a>
            </li>
            <li>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[rgb(var(--primary))] transition-colors">
                GitHub
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 text-[0.8rem] opacity-80">
          <p className="m-0">
            © {year} JeEon Park · {SITE_NAME}. {getTranslation(lang, "footer.rights")}
          </p>
          <ul className="flex items-center gap-4 list-none m-0 p-0">
            {LANGUAGES.map((l) => (
              <li key={l}>
                <Link
                  href={localizePath("/", l)}
                  hrefLang={l === "kr" ? "ko" : l === "jp" ? "ja" : "en"}
                  aria-current={l === lang ? "true" : undefined}
                  className={`transition-colors hover:text-[rgb(var(--primary))] ${
                    l === lang ? "text-[rgb(var(--white))]" : ""
                  }`}>
                  {LANGUAGE_NAMES[l]}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
