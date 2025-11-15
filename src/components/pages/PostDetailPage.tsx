import Header from "@/components/Header";
import type { Post } from "@/lib/posts";
import ReactMarkdown from "react-markdown";
import type { Language } from "@/lib/translations";

interface PostDetailPageProps {
  post: Post;
  lang: Language;
}

export default function PostDetailPage({ post, lang }: PostDetailPageProps) {
  // 날짜 포맷팅
  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
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
          <div className="hero-text text-center">
            <h1 className="text-[1.4rem] font-bold m-0 mb-2 tracking-[-0.02em]">
              <span className="text-white">{post.title}</span>
            </h1>
            <p className="text-[0.9rem] opacity-80">
              {formatDate(post.pubDate)}
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto pt-8 pb-16 px-4 md:px-6">
        {/* Post Content */}
        <article className="prose prose-invert prose-lg max-w-none">
          <div className="markdown-content">
            <ReactMarkdown
              components={{
                h1: ({ children }) => (
                  <h1 className="text-[2.5rem] font-bold mt-8 mb-4 text-[rgb(var(--white))]">
                    {children}
                  </h1>
                ),
                h2: ({ children }) => (
                  <h2 className="text-[2rem] font-semibold mt-8 mb-4 text-[rgb(var(--white))]">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-[1.5rem] font-semibold mt-6 mb-3 text-[rgb(var(--white))]">
                    {children}
                  </h3>
                ),
                p: ({ children }) => (
                  <p className="text-[1.1rem] leading-[1.8] mb-6 text-[rgba(var(--white),0.9)]">
                    {children}
                  </p>
                ),
                ul: ({ children }) => (
                  <ul className="list-disc list-inside mb-6 space-y-2 text-[rgba(var(--white),0.9)]">
                    {children}
                  </ul>
                ),
                ol: ({ children }) => (
                  <ol className="list-decimal list-inside mb-6 space-y-2 text-[rgba(var(--white),0.9)]">
                    {children}
                  </ol>
                ),
                li: ({ children }) => (
                  <li className="text-[1.1rem] leading-[1.8]">{children}</li>
                ),
                code: ({ children, className }) => {
                  const isInline = !className;
                  return isInline ? (
                    <code className="bg-[rgba(var(--primary),0.15)] text-[rgb(var(--primary))] px-2 py-1 rounded text-[0.9em] font-mono">
                      {children}
                    </code>
                  ) : (
                    <code className="block bg-[rgba(255,255,255,0.05)] p-4 rounded-lg overflow-x-auto text-[0.95rem] font-mono text-[rgba(var(--white),0.95)]">
                      {children}
                    </code>
                  );
                },
                pre: ({ children }) => (
                  <pre className="bg-[rgba(255,255,255,0.05)] p-4 rounded-lg overflow-x-auto mb-6 border border-[rgba(255,255,255,0.1)]">
                    {children}
                  </pre>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-[rgb(var(--primary))] pl-4 italic my-6 text-[rgba(var(--white),0.8)]">
                    {children}
                  </blockquote>
                ),
                a: ({ children, href }) => (
                  <a
                    href={href}
                    className="text-[rgb(var(--primary))] hover:underline"
                    target="_blank"
                    rel="noopener noreferrer">
                    {children}
                  </a>
                ),
                strong: ({ children }) => (
                  <strong className="font-semibold text-[rgb(var(--white))]">
                    {children}
                  </strong>
                ),
                em: ({ children }) => (
                  <em className="italic text-[rgba(var(--white),0.9)]">{children}</em>
                ),
              }}>
              {post.content}
            </ReactMarkdown>
          </div>
        </article>
      </div>
    </main>
  );
}
