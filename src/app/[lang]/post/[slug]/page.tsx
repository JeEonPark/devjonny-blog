import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PostDetailPage from "@/components/pages/PostDetailPage";
import { PREFIXED_LANGUAGES } from "@/lib/i18n";
import { buildPageMetadata } from "@/lib/metadata";
import { getAllPosts, getAvailableLocales, getPostBySlug } from "@/lib/posts";
import { resolveLang } from "@/lib/resolve-lang";
import { POSTS_ENABLED } from "@/lib/site";

interface PostPageProps {
  params: Promise<{ lang: string; slug: string }>;
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  if (!POSTS_ENABLED) {
    return {};
  }
  const { lang: rawLang, slug } = await params;
  const lang = resolveLang(rawLang, `post/${slug}`);
  const post = getPostBySlug(slug, lang);
  if (!post) {
    return {};
  }
  return buildPageMetadata({
    lang,
    path: `/post/${slug}`,
    title: post.title,
    description: post.description,
    image: post.heroImage,
    availableLanguages: getAvailableLocales(slug),
    type: "article",
    publishedTime: post.pubDate,
  });
}

export default async function PostDetail({ params }: PostPageProps) {
  if (!POSTS_ENABLED) {
    notFound();
  }
  const { lang: rawLang, slug } = await params;
  const lang = resolveLang(rawLang, `post/${slug}`);
  const post = getPostBySlug(slug, lang);

  if (!post) {
    notFound();
  }

  return <PostDetailPage post={post} lang={lang} />;
}

export function generateStaticParams() {
  if (!POSTS_ENABLED) {
    return [];
  }
  return PREFIXED_LANGUAGES.flatMap((lang) =>
    getAllPosts(lang).map((post) => ({ lang, slug: post.slug })),
  );
}
