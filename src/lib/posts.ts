import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface Post {
  slug: string;
  title: string;
  description: string;
  pubDate: string;
  heroImage: string;
  content: string;
}

const postsDirectory = path.join(process.cwd(), "content/posts");

export function getAllPosts(): Post[] {
  // content/posts 폴더의 모든 .md 파일 읽기
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      // 파일명에서 날짜 부분과 .md 제거하여 slug 생성
      // 예: 2022-07-08_first-post.md -> first-post
      const slug = fileName.replace(/\.md$/, "").replace(/^\d{4}-\d{2}-\d{2}_/, "");

      // 파일 내용 읽기
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      // gray-matter로 frontmatter 파싱
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title || slug,
        description: data.description || "",
        pubDate: data.pubDate || "",
        heroImage: data.heroImage || "/images/blog-placeholder-1.jpg",
        content,
      };
    });

  // 날짜순으로 정렬 (최신순)
  return allPostsData.sort((a, b) => {
    if (a.pubDate < b.pubDate) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getPostBySlug(slug: string): Post | null {
  try {
    // 모든 파일을 읽어서 slug와 매칭되는 파일 찾기
    const fileNames = fs.readdirSync(postsDirectory);
    const matchedFile = fileNames.find((fileName) => {
      const fileSlug = fileName.replace(/\.md$/, "").replace(/^\d{4}-\d{2}-\d{2}_/, "");
      return fileSlug === slug;
    });

    if (!matchedFile) {
      return null;
    }

    const fullPath = path.join(postsDirectory, matchedFile);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || slug,
      description: data.description || "",
      pubDate: data.pubDate || "",
      heroImage: data.heroImage || "/images/blog-placeholder-1.jpg",
      content,
    };
  } catch (error) {
    return null;
  }
}
