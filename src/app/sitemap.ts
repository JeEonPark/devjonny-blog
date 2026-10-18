import type { MetadataRoute } from "next";
import { LANGUAGES, localizePath } from "@/lib/i18n";
import { getAllPosts } from "@/lib/posts";
import { POSTS_ENABLED, SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages = LANGUAGES.flatMap((lang) => [
    { url: `${SITE_URL}${localizePath("/", lang)}`, lastModified: now, priority: 1 },
    ...(POSTS_ENABLED
      ? [{ url: `${SITE_URL}${localizePath("/post", lang)}`, lastModified: now, priority: 0.8 }]
      : []),
  ]);

  const postPages = (POSTS_ENABLED ? getAllPosts() : []).map((post) => ({
    url: `${SITE_URL}${localizePath(`/post/${post.slug}`, post.locale)}`,
    lastModified: post.pubDate ? new Date(post.pubDate) : now,
    priority: 0.6,
  }));

  return [...staticPages, ...postPages];
}
