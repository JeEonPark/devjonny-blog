import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { LANGUAGES, localizePath } from "@/lib/i18n";
import { getTranslation } from "@/lib/translations";

// The root not-found boundary has no route params, so every language is shown.
export default function NotFound() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="max-w-[720px] mx-auto px-6 pt-[160px] pb-24 text-center">
        <p className="text-[5rem] font-bold leading-none text-[rgb(var(--primary))] mb-6">404</p>
        <div className="space-y-8">
          {LANGUAGES.map((lang) => (
            <section key={lang} lang={lang === "kr" ? "ko" : lang === "jp" ? "ja" : "en"}>
              <h1 className="text-[1.25rem] font-semibold text-[rgb(var(--white))] mb-1">
                {getTranslation(lang, "notfound.title")}
              </h1>
              <p className="text-[0.95rem] text-[rgb(var(--neutral))] mb-3">
                {getTranslation(lang, "notfound.description")}
              </p>
              <Link
                href={localizePath("/", lang)}
                className="inline-block text-[rgb(var(--primary))] hover:underline text-[0.95rem]">
                {getTranslation(lang, "notfound.home")}
              </Link>
            </section>
          ))}
        </div>
      </div>

      <Footer lang={"kr"} />
    </main>
  );
}
