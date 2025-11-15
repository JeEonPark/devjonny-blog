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
  const posts = getAllPosts();

  return <PostPage lang={lang} posts={posts} />;
}
