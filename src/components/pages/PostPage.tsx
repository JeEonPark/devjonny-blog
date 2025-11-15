import Header from "@/components/Header";
import LanguageSelector from "@/components/LanguageSelector";
import { getTranslation, type Language } from "@/lib/translations";
import type { Post } from "@/lib/posts";
import Image from "next/image";
import Link from "next/link";

interface PostPageProps {
  lang: Language;
  posts: Post[];
}

export default function PostPage({ lang, posts }: PostPageProps) {
  // 언어에 따라 링크 경로 생성
  const getPostLink = (slug: string) => {
    return lang === "kr" ? `/post/${slug}` : `/${lang}/post/${slug}`;
  };

  // 날짜 포맷팅 (YYYY-MM-DD -> MMM DD YYYY)
  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "2-digit",
      });
    } catch {
      return dateString;
    }
  };

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="hero h-[320px] flex items-center justify-center relative overflow-hidden pt-[100px] before:content-[''] before:absolute before:inset-0 before:bg-[url('/images/banner.jpg')] before:bg-center before:bg-cover before:opacity-50 before:z-[1] after:content-[''] after:absolute after:inset-0 after:bg-black/20 after:z-[1]">
        <div className="hero-content flex items-center gap-8 z-[2] relative text-white -translate-y-[35px] justify-center">
          <div className="hero-text">
            <h1 className="text-[1.4rem] font-bold m-0 tracking-[-0.02em] flex items-center gap-[0.3rem] flex-wrap justify-center">
              <span className="text-white">{getTranslation(lang, "post.page.title")}</span>
            </h1>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto pt-8 pb-16 px-4 md:px-6">
        {/* Language Selector */}
        <LanguageSelector />

        <div className="page-header mb-16 text-center">
          <h1 className="text-[2.8rem] font-semibold m-0 mb-4 text-[rgb(var(--white))] tracking-[-0.02em] leading-[1.1] md:text-[2.2rem] sm:text-[1.9rem]">
            {getTranslation(lang, "post.page.title")}
          </h1>
          <p className="text-[1.2rem] text-[rgb(var(--neutral))] m-0 font-normal opacity-80 md:text-[1.1rem] sm:text-base">
            {getTranslation(lang, "post.page.subtitle")}
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="text-center text-[rgb(var(--neutral))] py-20">
            <p className="text-lg">No posts yet. Stay tuned!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-6">
            {posts.map((post) => (
              <Link key={post.slug} href={getPostLink(post.slug)} className="group block">
                <article className="bg-[rgba(255,255,255,0.02)] backdrop-blur-[12px] border border-[rgba(255,255,255,0.05)] rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col h-full hover:bg-[rgba(255,255,255,0.04)] hover:border-[rgba(var(--primary),0.3)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-500 hover:translate-y-[-4px] group">
                  {/* Post Image */}
                  <div className="overflow-hidden relative h-48">
                    <Image
                      src={post.heroImage}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Post Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="text-xs text-[rgb(var(--neutral))] mb-3 font-medium">
                      {formatDate(post.pubDate)}
                    </div>
                    <h3 className="font-semibold text-lg text-[rgb(var(--white))] mb-2 leading-snug line-clamp-3 group-hover:text-[rgb(var(--primary))] transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="text-sm text-[rgba(var(--white),0.7)] leading-relaxed line-clamp-2 flex-1">
                      {post.description}
                    </p>
                    <div className="mt-4 flex items-center text-[rgb(var(--primary))] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Read more
                      <svg
                        className="w-4 h-4 ml-1 transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
