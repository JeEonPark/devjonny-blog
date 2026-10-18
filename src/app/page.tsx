import HomePage from "@/components/pages/HomePage";
import { buildPageMetadata } from "@/lib/metadata";
import { getAllPosts } from "@/lib/posts";
import { POSTS_ENABLED } from "@/lib/site";

export const metadata = buildPageMetadata({ lang: "kr", path: "/" });

export default function Home() {
  return <HomePage lang="kr" posts={POSTS_ENABLED ? getAllPosts("kr").slice(0, 3) : []} />;
}
