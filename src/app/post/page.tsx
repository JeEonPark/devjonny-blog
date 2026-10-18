import PostPage from "@/components/pages/PostPage";
import { buildPageMetadata } from "@/lib/metadata";
import { getAllPosts } from "@/lib/posts";
import { notFound } from "next/navigation";
import { POSTS_ENABLED } from "@/lib/site";
import { getTranslation } from "@/lib/translations";

export const metadata = buildPageMetadata({
  lang: "kr",
  path: "/post",
  title: getTranslation("kr", "post.page.title"),
  description: getTranslation("kr", "post.page.subtitle"),
});

export default function Post() {
  if (!POSTS_ENABLED) {
    notFound();
  }
  return <PostPage lang="kr" posts={getAllPosts("kr")} />;
}
