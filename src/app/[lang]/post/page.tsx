import PostPage from "@/components/pages/PostPage";
import { getAllPosts } from "@/lib/posts";
import { type Language } from "@/lib/translations";

interface PostPagePropsLang {
  params: Promise<{
    lang: Language;
  }>;
}

export default async function PostPageLang({ params }: PostPagePropsLang) {
  const { lang } = await params;
  // 현재 언어에 맞는 포스트만 가져오기
  const posts = getAllPosts(lang);

  return <PostPage lang={lang} posts={posts} />;
}
