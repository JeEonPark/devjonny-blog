import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PostDetailPage from "@/components/pages/PostDetailPage";
import { buildPageMetadata } from "@/lib/metadata";
import { getAllPosts, getAvailableLocales, getPostBySlug } from "@/lib/posts";
import { POSTS_ENABLED } from "@/lib/site";

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  if (!POSTS_ENABLED) {
    return {};
  }
  const { slug } = await params;
  const post = getPostBySlug(slug, "kr");
  if (!post) {
    return {};
  }
  return buildPageMetadata({
    lang: "kr",
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
  const { slug } = await params;
  const post = getPostBySlug(slug, "kr");

  if (!post) {
    notFound();
  }

  return <PostDetailPage post={post} lang="kr" />;
}

export function generateStaticParams() {
  if (!POSTS_ENABLED) {
    return [];
  }
  return getAllPosts("kr").map((post) => ({ slug: post.slug }));
}
