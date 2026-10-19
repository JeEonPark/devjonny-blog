import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { BCP47, formatDate, localizePath } from "@/lib/i18n";
import type { Post } from "@/lib/posts";
import { getTranslation, type Language } from "@/lib/translations";

interface PostPageProps {
  lang: Language;
  posts: Post[];
}

export default function PostPage({ lang, posts }: PostPageProps) {
  return (
    <main className="min-h-screen" lang={BCP47[lang]}>
      <Header />

      <Hero>
        <div>
          <h1 className="text-[1.9rem] md:text-[2.25rem] font-semibold m-0 mb-2 tracking-[-0.02em]">
            {getTranslation(lang, "post.page.title")}
          </h1>
          <p className="text-[0.95rem] md:text-[1.05rem] opacity-80 m-0">{getTranslation(lang, "post.page.subtitle")}</p>
        </div>
      </Hero>

      <div className="max-w-6xl mx-auto pt-8 pb-16 px-4 md:px-6">
        {posts.length === 0 ? (
          <div className="text-center text-[rgb(var(--neutral))] py-20">
            <p className="text-lg">{getTranslation(lang, "post.empty")}</p>
          </div>
        ) : (
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-16 md:gap-x-6 md:gap-y-14 list-none m-0 p-0">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link href={localizePath(`/post/${post.slug}`, lang)} className="group block h-full">
                  <article className="overflow-hidden flex flex-col h-full">
                    <div className="overflow-hidden relative aspect-[9/5] rounded-lg bg-white/[0.03]">
                      <Image
                        src={post.heroImage}
                        alt=""
                        fill
                        sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>

                    <div className="pt-6 flex flex-col flex-1">
                      {post.draft && (
                        <span className="self-start mb-2 px-2 py-0.5 rounded text-[0.7rem] font-medium uppercase tracking-wider bg-[rgba(var(--primary),0.15)] text-[rgb(var(--primary))]">
                          Draft
                        </span>
                      )}
                      <h2 className="font-semibold text-[1.15rem] md:text-[1.25rem] text-[rgb(var(--white))] mb-2 leading-snug line-clamp-2 group-hover:text-[rgb(var(--primary))] transition-colors">
                        {post.title}
                      </h2>

                      <p className="text-[0.95rem] text-[rgba(var(--white),0.75)] leading-relaxed mb-4 flex-1 line-clamp-3">
                        {post.description}
                      </p>

                      <div className="text-[0.8rem] text-[rgb(var(--neutral))] flex items-center gap-2 tabular-nums">
                        <time dateTime={post.pubDate}>{formatDate(post.pubDate, lang)}</time>
                        <span aria-hidden="true">·</span>
                        <span>{post.readingTime}</span>
                      </div>
                    </div>
                  </article>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>

      <Footer lang={lang} />
    </main>
  );
}
