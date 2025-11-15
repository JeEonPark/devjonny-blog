import PostPage from "@/components/pages/PostPage";
import { getAllPosts } from "@/lib/posts";

export default function Post() {
  const posts = getAllPosts();

  return <PostPage lang="kr" posts={posts} />;
}
