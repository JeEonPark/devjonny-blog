import PostDetailPage from "@/components/pages/PostDetailPage";
import { getPostBySlug, getAllPosts } from "@/lib/posts";
import { type Language } from "@/lib/translations";
import { notFound } from "next/navigation";

interface PostPageProps {
  params: Promise<{
    lang: Language;
    slug: string;
  }>;
}

export default async function PostDetail({ params }: PostPageProps) {
  const { lang, slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return <PostDetailPage post={post} lang={lang} />;
}

// generateStaticParams로 모든 포스트 페이지를 사전 생성
export async function generateStaticParams() {
  const posts = getAllPosts();
  const languages: Language[] = ["en", "jp"];

  return languages.flatMap((lang) =>
    posts.map((post) => ({
      lang,
      slug: post.slug,
    }))
  );
}
