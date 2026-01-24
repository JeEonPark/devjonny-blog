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
            <h1 className="text-[2rem] font-bold m-0 tracking-[-0.02em] flex items-center gap-[0.3rem] flex-wrap justify-center md:text-[1.8rem] sm:text-[1.6rem]">
              <span className="text-white">{getTranslation(lang, "post.page.title")}</span>
            </h1>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto pt-8 pb-16 px-4 md:px-6">
        {/* Language Selector */}
        <LanguageSelector />

        {posts.length === 0 ? (
          <div className="text-center text-[rgb(var(--neutral))] py-20">
            <p className="text-lg">No posts yet. Stay tuned!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-16 md:gap-x-6 md:gap-y-14">
            {posts.map((post) => (
              <Link key={post.slug} href={getPostLink(post.slug)} className="group block">
                <article className="overflow-hidden flex flex-col h-full">
                  {/* Post Image */}
                  <div className="overflow-hidden relative aspect-[9/5]">
                    <Image
                      src={post.heroImage}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Post Content */}
                  <div className="pt-6 flex flex-col flex-1">
                    <h3 className="font-bold text-2xl text-[rgb(var(--white))] mb-2 leading-tight line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-[0.95rem] text-[rgba(var(--white),0.65)] leading-relaxed mb-4 flex-1">
                      {post.description}
                    </p>

                    {/* Date and Reading Time */}
                    <div className="text-[0.8rem] text-[rgba(var(--white),0.4)] flex items-center gap-2">
                      <span>{formatDate(post.pubDate)}</span>
                      <span>·</span>
                      <span>{post.readingTime}</span>
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
