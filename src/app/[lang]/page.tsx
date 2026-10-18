import type { Metadata } from "next";
import HomePage from "@/components/pages/HomePage";
import { buildPageMetadata } from "@/lib/metadata";
import { getAllPosts } from "@/lib/posts";
import { POSTS_ENABLED } from "@/lib/site";
import { languageStaticParams, resolveLang } from "@/lib/resolve-lang";

interface HomePagePropsLang {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: HomePagePropsLang): Promise<Metadata> {
  const { lang } = await params;
  return buildPageMetadata({ lang: resolveLang(lang), path: "/" });
}

export default async function HomePageLang({ params }: HomePagePropsLang) {
  const lang = resolveLang((await params).lang);
  return <HomePage lang={lang} posts={POSTS_ENABLED ? getAllPosts(lang).slice(0, 3) : []} />;
}

export function generateStaticParams() {
  return languageStaticParams();
}
