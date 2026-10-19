import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { BCP47, formatDate, localizePath } from "@/lib/i18n";
import type { Post } from "@/lib/posts";
import { getTranslation, type Language } from "@/lib/translations";
import "highlight.js/styles/github-dark.css";

interface PostDetailPageProps {
  post: Post;
  lang: Language;
}

function isExternalHref(href?: string): boolean {
  return Boolean(href && /^(https?:)?\/\//.test(href));
}

export default function PostDetailPage({ post, lang }: PostDetailPageProps) {
  const dateLabel = formatDate(post.pubDate, lang, { year: "numeric", month: "long", day: "numeric" });

  return (
    <main className="min-h-screen" lang={BCP47[lang]}>
      <Header />

      <Hero>
        <div>
          <h1 className="text-[1.6rem] md:text-[2rem] font-semibold m-0 mb-2 tracking-[-0.02em] leading-[1.2] break-keep">
            {post.title}
          </h1>
          <p className="text-[0.9rem] opacity-80 m-0">
            <time dateTime={post.pubDate}>{dateLabel}</time> · {post.readingTime}
            {post.draft && (
              <span className="ml-2 px-2 py-0.5 rounded text-[0.7rem] font-medium uppercase tracking-wider bg-[rgba(var(--primary),0.2)] text-[rgb(var(--primary))] align-middle">
                Draft
              </span>
            )}
          </p>
        </div>
      </Hero>

      <div className="max-w-4xl mx-auto pt-8 pb-16 px-4 md:px-6">
        {post.heroImage && (
          <div className="mb-8 overflow-hidden rounded-lg relative aspect-[16/9] bg-white/[0.03]">
            <Image
              src={post.heroImage}
              alt=""
              fill
              priority
              sizes="(min-width: 896px) 896px, 100vw"
              className="object-cover"
            />
          </div>
        )}

        <article className="markdown-content">
          <ReactMarkdown
            rehypePlugins={[rehypeHighlight]}
            components={{
              h1: ({ children }) => (
                <h2 className="text-[1.5rem] md:text-[1.8rem] font-semibold mt-10 mb-4 text-[rgb(var(--white))] break-keep">
                  {children}
                </h2>
              ),
              h2: ({ children }) => (
                <h2 className="text-[1.35rem] md:text-[1.6rem] font-semibold mt-10 mb-4 text-[rgb(var(--white))] break-keep">
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-[1.15rem] md:text-[1.3rem] font-semibold mt-8 mb-3 text-[rgb(var(--white))] break-keep">
                  {children}
                </h3>
              ),
              p: ({ children }) => (
                <p className="text-[1.05rem] md:text-[1.1rem] leading-[1.8] mb-6 text-[rgba(var(--white),0.9)] break-words">
                  {children}
                </p>
              ),
              ul: ({ children }) => (
                <ul className="list-disc pl-6 mb-6 space-y-2 text-[rgba(var(--white),0.9)]">{children}</ul>
              ),
              ol: ({ children }) => (
                <ol className="list-decimal pl-6 mb-6 space-y-2 text-[rgba(var(--white),0.9)]">{children}</ol>
              ),
              li: ({ children }) => <li className="text-[1.05rem] md:text-[1.1rem] leading-[1.8]">{children}</li>,
              code: ({ children, className }) => {
                const isInline = !className;
                return isInline ? (
                  <code className="bg-[rgba(var(--primary),0.15)] text-[rgb(var(--primary))] px-1.5 py-0.5 rounded text-[0.9em] font-mono">
                    {children}
                  </code>
                ) : (
                  <code className={className}>{children}</code>
                );
              },
              pre: ({ children }) => (
                <pre className="!bg-[rgb(32,32,32)] p-4 rounded-lg overflow-x-auto mb-6 border border-[rgba(255,255,255,0.1)] text-[0.9rem]">
                  {children}
                </pre>
              ),
              blockquote: ({ children }) => (
                <blockquote className="border-l border-[rgba(var(--primary),0.7)] pl-5 italic my-6 text-[rgba(var(--white),0.8)]">
                  {children}
                </blockquote>
              ),
              a: ({ children, href }) => {
                const external = isExternalHref(href);
                return (
                  <a
                    href={href}
                    className="text-[rgb(var(--primary))] hover:underline break-all"
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                    {children}
                  </a>
                );
              },
              img: ({ src, alt }) => (
                // Markdown images come from arbitrary sources, so a plain <img> is used here.
                // eslint-disable-next-line @next/next/no-img-element
                <img src={typeof src === "string" ? src : undefined} alt={alt ?? ""} loading="lazy" className="rounded-lg my-6 max-w-full h-auto" />
              ),
              hr: () => <hr className="my-10 border-white/10" />,
              table: ({ children }) => (
                <div className="overflow-x-auto mb-6">
                  <table className="w-full text-left text-[0.95rem] border-collapse">{children}</table>
                </div>
              ),
              th: ({ children }) => (
                <th className="border-b border-white/20 px-3 py-2 font-semibold text-[rgb(var(--white))]">{children}</th>
              ),
              td: ({ children }) => (
                <td className="border-b border-white/10 px-3 py-2 text-[rgba(var(--white),0.9)]">{children}</td>
              ),
              strong: ({ children }) => <strong className="font-semibold text-[rgb(var(--white))]">{children}</strong>,
              em: ({ children }) => <em className="italic text-[rgba(var(--white),0.9)]">{children}</em>,
            }}>
            {post.content}
          </ReactMarkdown>
        </article>

        <nav className="mt-16 pt-8 border-t border-white/10">
          <Link
            href={localizePath("/post", lang)}
            className="inline-flex items-center gap-2 text-[rgb(var(--primary))] hover:underline">
            <span aria-hidden="true">←</span>
            {getTranslation(lang, "post.page.title")}
          </Link>
        </nav>
      </div>

      <Footer lang={lang} />
    </main>
  );
}
