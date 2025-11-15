import PostDetailPage from "@/components/pages/PostDetailPage";
import { getPostBySlug, getAllPosts } from "@/lib/posts";
import { notFound } from "next/navigation";

interface PostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function PostDetail({ params }: PostPageProps) {
  const { slug } = await params;
  // 기본 언어(kr)의 포스트만 가져오기
  const post = getPostBySlug(slug, "kr");

  if (!post) {
    notFound();
  }

  return <PostDetailPage post={post} lang="kr" />;
}

// generateStaticParams로 모든 포스트 페이지를 사전 생성
export async function generateStaticParams() {
  const posts = getAllPosts("kr");
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
