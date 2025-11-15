import PostPage from "@/components/pages/PostPage";
import { getAllPosts } from "@/lib/posts";

export default function Post() {
  // 기본 언어(kr)의 포스트만 가져오기
  const posts = getAllPosts("kr");

  return <PostPage lang="kr" posts={posts} />;
}
