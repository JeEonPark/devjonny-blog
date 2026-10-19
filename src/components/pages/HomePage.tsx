import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { CONTACT, CV, formatMonth, formatPeriod, type Period } from "@/content/cv";
import { BCP47, formatDate, localizePath, type Language } from "@/lib/i18n";
import type { Post } from "@/lib/posts";
import { GITHUB_URL } from "@/lib/site";
import { getTranslation } from "@/lib/translations";

interface HomePageProps {
  lang: Language;
  posts: Post[];
}

const PANEL_CLASS =
  "bg-[rgba(255,255,255,0.02)] backdrop-blur-[12px] border border-[rgba(255,255,255,0.05)] shadow-[0_4px_20px_rgba(0,0,0,0.08)]";

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      className="text-[1.5rem] md:text-[1.8rem] mb-6 md:mb-8 text-[rgb(var(--white))] font-semibold tracking-[-0.01em] leading-[1.3]">
      {children}
    </h2>
  );
}

function PeriodLabel({ period, lang }: { period: Period; lang: Language }) {
  const { start, end } = formatPeriod(period, lang);
  return (
    <span className="tabular-nums">
      <span>{start}</span>
      <span className="block md:inline md:before:content-['_–_']">
        <span className="md:hidden">– </span>
        {end}
      </span>
    </span>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" width="16" height="16" className="flex-shrink-0">
      <path
        fill="currentColor"
        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" width="16" height="16" className="flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3.5 7l8.5 6 8.5-6" />
    </svg>
  );
}

export default function HomePage({ lang, posts }: HomePageProps) {
  const cv = CV[lang];
  const intro = ["intro.title", "intro.paragraph1", "intro.paragraph2", "intro.paragraph3"] as const;

  return (
    <main className="min-h-screen" lang={BCP47[lang]}>
      <Header />

      {/* Banner band; the page content starts over its bottom edge. */}
      <div className="relative h-[240px] md:h-[300px] overflow-hidden" aria-hidden="true">
        <Image
          src="/images/banner.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-[rgb(var(--bg))]" />
      </div>

      <div className="max-w-[720px] mx-auto px-4 md:px-6 pb-16">
        {/* Identity */}
        <section aria-labelledby="name" className="relative">
          <div className="rise -mt-12 md:-mt-14">
            <Image
              src="/images/profile.jpg"
              alt="JeEon Park"
              width={112}
              height={112}
              priority
              className="w-[88px] h-[88px] md:w-[112px] md:h-[112px] rounded-full object-cover border-4 border-[rgb(var(--bg))] shadow-[0_12px_32px_rgba(0,0,0,0.35)]"
            />
          </div>

          <div className="rise rise-delay-1 mt-5 md:mt-6">
            <h1
              id="name"
              className="text-[1.9rem] md:text-[2.25rem] font-semibold text-[rgb(var(--white))] tracking-[-0.02em] leading-[1.15] m-0">
              {cv.name}
              <span className="ml-3 text-[1rem] md:text-[1.1rem] font-normal text-[rgb(var(--neutral))] tracking-normal">
                Jonny
              </span>
            </h1>
            <p className="mt-2 text-[0.95rem] md:text-[1.05rem] font-medium text-[rgb(var(--primary))] m-0">
              {cv.title} · {cv.affiliation}
            </p>
            <p className="mt-5 text-[0.95rem] md:text-[1.05rem] leading-[1.8] text-[rgb(var(--white))] opacity-90 max-w-[64ch] break-keep m-0">
              {cv.profile}
            </p>

            <ul className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 list-none m-0 p-0 text-[0.9rem]">
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="inline-flex items-center gap-2 text-[rgb(var(--white))] hover:text-[rgb(var(--primary))] transition-colors">
                  <MailIcon />
                  <span>{CONTACT.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[rgb(var(--white))] hover:text-[rgb(var(--primary))] transition-colors">
                  <GitHubIcon />
                  <span>@{CONTACT.github}</span>
                </a>
              </li>
            </ul>
          </div>

        </section>

        {/* About: the owner's own words */}
        <section aria-labelledby="about" className="mt-14 md:mt-16">
          <SectionHeading id="about">{getTranslation(lang, "home.about")}</SectionHeading>
          <div className={`${PANEL_CLASS} rounded-2xl p-5 md:p-8 space-y-4 md:space-y-5`}>
            {intro.map((key, index) => {
              const className =
                "text-[0.9rem] md:text-[1rem] leading-[1.75] md:leading-[1.85] text-[rgb(var(--white))] break-keep break-words m-0 " +
                (index === 0 ? "font-semibold" : "opacity-90");
              // Paragraphs 2 and 3 carry trusted inline markup (<br>, <strong>) from translations.ts.
              return index >= 2 ? (
                <p key={key} className={className} dangerouslySetInnerHTML={{ __html: getTranslation(lang, key) }} />
              ) : (
                <p key={key} className={className}>
                  {getTranslation(lang, key)}
                </p>
              );
            })}
          </div>
        </section>

        {/* Experience */}
        <section aria-labelledby="experience" className="mt-16 md:mt-20">
          <SectionHeading id="experience">{getTranslation(lang, "home.experience")}</SectionHeading>
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute left-[81px] md:left-[109px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-[rgba(var(--primary),0.7)] via-[rgba(var(--primary),0.5)] to-[rgba(var(--primary),0.05)]"
            />
            <ol className="space-y-5 md:space-y-6 list-none m-0 p-0">
              {cv.experience.map((entry) => {
                const period = formatPeriod(entry, lang);
                return (
                  <li key={`${entry.organization}-${entry.start}`} className="relative flex gap-4 md:gap-6">
                    <div className="flex-shrink-0 w-[68px] md:w-[88px] pr-2 md:pr-4 text-right pt-[18px] md:pt-[22px]">
                      <div className="text-[0.75rem] md:text-[0.9rem] font-medium text-[rgb(var(--primary))] tabular-nums leading-tight">
                        {period.start}
                      </div>
                      <div className="text-[0.75rem] text-[rgb(var(--neutral))] tabular-nums mt-1 whitespace-nowrap">
                        <span className="hidden md:inline">– </span>
                        {period.end}
                      </div>
                    </div>
                    <div
                      aria-hidden="true"
                      className={`absolute left-[76px] md:left-[103px] top-[22px] md:top-[26px] w-[12px] h-[12px] md:w-[14px] md:h-[14px] rounded-full bg-[rgb(var(--primary))] border-[3px] border-[rgb(var(--bg))] ${
                        entry.end
                          ? "shadow-[0_0_0_2px_rgba(var(--primary),0.3)]"
                          : "shadow-[0_0_0_3px_rgba(var(--primary),0.6),0_0_18px_4px_rgba(var(--primary),0.25)]"
                      }`}
                    />
                    <div
                      className={`${PANEL_CLASS} flex-grow rounded-xl p-4 md:p-5 ml-3 md:ml-5 transition-colors duration-300 hover:border-[rgba(var(--primary),0.3)]`}>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[rgba(var(--primary),0.12)] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="material-icons text-[rgb(var(--primary))] text-[18px]" aria-hidden="true">
                            {entry.icon}
                          </span>
                        </div>
                        <div className="min-w-0 flex-grow">
                          <h3 className="text-[0.95rem] md:text-[1.1rem] font-semibold text-[rgb(var(--white))] leading-tight m-0 break-keep">
                            {entry.organization}
                          </h3>
                          <p className="text-[0.8rem] md:text-[0.9rem] text-[rgb(var(--white))] opacity-80 mt-1 m-0">
                            {entry.role}
                          </p>
                          {entry.details.length > 0 && (
                            <ul className="mt-3 space-y-1.5 list-disc pl-4 marker:text-[rgba(var(--primary),0.6)] text-[0.8rem] md:text-[0.875rem] leading-[1.7] text-[rgb(var(--neutral))] break-keep">
                              {entry.details.map((detail) => (
                                <li key={detail}>{detail}</li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </section>

        {/* Education */}
        <section aria-labelledby="education" className="mt-16 md:mt-20">
          <SectionHeading id="education">{getTranslation(lang, "home.education")}</SectionHeading>
          <ol className="list-none m-0 p-0 border-y border-white/[0.08] divide-y divide-white/[0.08]">
            {cv.education.map((entry) => (
              <li
                key={`${entry.institution}-${entry.start}`}
                className="grid grid-cols-[96px_1fr] md:grid-cols-[180px_1fr] gap-4 md:gap-8 py-5 md:py-6">
                <div className="text-[0.8rem] md:text-[0.9rem] font-medium text-[rgb(var(--primary))] leading-[1.6]">
                  <PeriodLabel period={entry} lang={lang} />
                </div>
                <div className="min-w-0">
                  <h3 className="text-[0.95rem] md:text-[1.05rem] font-semibold text-[rgb(var(--white))] leading-tight m-0 break-keep">
                    {entry.institution}
                  </h3>
                  <p className="text-[0.85rem] md:text-[0.9rem] text-[rgb(var(--white))] opacity-80 mt-1.5 m-0 break-keep">
                    {entry.program}
                  </p>
                  {entry.note && (
                    <p className="text-[0.8rem] md:text-[0.85rem] text-[rgb(var(--neutral))] mt-1 m-0 tabular-nums">
                      {entry.note}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Awards */}
        <section aria-labelledby="awards" className="mt-16 md:mt-20">
          <SectionHeading id="awards">{getTranslation(lang, "home.awards")}</SectionHeading>
          <ol className="list-none m-0 p-0 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {cv.awards.map((award) => (
              <li
                key={`${award.organization}-${award.date}`}
                className={`${PANEL_CLASS} rounded-2xl p-5 md:p-6 flex flex-col gap-3 transition-colors duration-300 hover:border-[rgba(var(--primary),0.3)]`}>
                <h3 className="text-[1.05rem] md:text-[1.15rem] font-semibold text-[rgb(var(--white))] leading-snug m-0 break-keep">
                  {award.title}
                </h3>
                <p className="text-[0.85rem] md:text-[0.9rem] text-[rgb(var(--neutral))] m-0 break-keep flex flex-wrap items-baseline gap-x-2">
                  <span>{award.organization}</span>
                  <span aria-hidden="true">·</span>
                  <time dateTime={award.date} className="font-medium text-[rgb(var(--primary))] tabular-nums">
                    {formatMonth(award.date, lang)}
                  </time>
                </p>
                {award.details.map((detail) => (
                  <p
                    key={detail}
                    className="text-[0.85rem] md:text-[0.9rem] leading-[1.7] text-[rgb(var(--white))] opacity-80 m-0 break-keep">
                    {detail}
                  </p>
                ))}
              </li>
            ))}
          </ol>
        </section>

        {/* Certifications */}
        <section aria-labelledby="certifications" className="mt-16 md:mt-20">
          <SectionHeading id="certifications">{getTranslation(lang, "home.certifications")}</SectionHeading>
          <ol className="list-none m-0 p-0 border-y border-white/[0.08] divide-y divide-white/[0.08]">
            {cv.certifications.map((cert) => (
              <li
                key={cert.name}
                className="grid grid-cols-[96px_1fr] md:grid-cols-[180px_1fr] gap-4 md:gap-8 py-4 md:py-5 items-baseline">
                <time
                  dateTime={cert.date}
                  className="text-[0.8rem] md:text-[0.9rem] font-medium text-[rgb(var(--primary))] tabular-nums">
                  {formatMonth(cert.date, lang)}
                </time>
                <p className="text-[0.95rem] md:text-[1rem] text-[rgb(var(--white))] m-0 break-keep">{cert.name}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Recent posts, only when there is something to read */}
        {posts.length > 0 && (
          <section aria-labelledby="recent-posts" className="mt-16 md:mt-20">
            <div className="flex items-baseline justify-between gap-4 mb-6 md:mb-8">
              <h2
                id="recent-posts"
                className="text-[1.5rem] md:text-[1.8rem] text-[rgb(var(--white))] font-semibold tracking-[-0.01em] leading-[1.3] m-0">
                {getTranslation(lang, "home.recentPosts")}
              </h2>
              <Link
                href={localizePath("/post", lang)}
                className="text-[0.85rem] md:text-[0.9rem] text-[rgb(var(--primary))] hover:underline flex-shrink-0">
                {getTranslation(lang, "home.viewAllPosts")} →
              </Link>
            </div>
            <ol className="list-none m-0 p-0 border-y border-white/[0.08] divide-y divide-white/[0.08]">
              {posts.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={localizePath(`/post/${post.slug}`, lang)}
                    className="group grid grid-cols-1 md:grid-cols-[180px_1fr] gap-1 md:gap-8 py-5 md:py-6 no-underline">
                    <time
                      dateTime={post.pubDate}
                      className="text-[0.8rem] md:text-[0.9rem] text-[rgb(var(--neutral))] tabular-nums">
                      {formatDate(post.pubDate, lang)}
                    </time>
                    <div className="min-w-0">
                      <h3 className="text-[1rem] md:text-[1.1rem] font-semibold text-[rgb(var(--white))] group-hover:text-[rgb(var(--primary))] transition-colors leading-snug m-0 break-keep">
                        {post.title}
                      </h3>
                      {post.description && (
                        <p className="text-[0.85rem] md:text-[0.9rem] text-[rgb(var(--white))] opacity-70 mt-1.5 m-0 line-clamp-2 break-keep">
                          {post.description}
                        </p>
                      )}
                    </div>
                  </Link>
                </li>
              ))}
            </ol>
          </section>
        )}
      </div>

      <Footer lang={lang} />
    </main>
  );
}
