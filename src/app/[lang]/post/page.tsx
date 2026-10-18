import type { Metadata } from "next";
import PostPage from "@/components/pages/PostPage";
import { buildPageMetadata } from "@/lib/metadata";
import { getAllPosts } from "@/lib/posts";
import { notFound } from "next/navigation";
import { languageStaticParams, resolveLang } from "@/lib/resolve-lang";
import { POSTS_ENABLED } from "@/lib/site";
import { getTranslation } from "@/lib/translations";

interface PostPagePropsLang {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: PostPagePropsLang): Promise<Metadata> {
  if (!POSTS_ENABLED) {
    return {};
  }
  const lang = resolveLang((await params).lang, "post");
  return buildPageMetadata({
    lang,
    path: "/post",
    title: getTranslation(lang, "post.page.title"),
    description: getTranslation(lang, "post.page.subtitle"),
  });
}

export default async function PostPageLang({ params }: PostPagePropsLang) {
  if (!POSTS_ENABLED) {
    notFound();
  }
  const lang = resolveLang((await params).lang, "post");
  return <PostPage lang={lang} posts={getAllPosts(lang)} />;
}

export function generateStaticParams() {
  return POSTS_ENABLED ? languageStaticParams() : [];
}
