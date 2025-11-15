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
  readingTime: string;
  locale: string;
}

// 읽기 시간 계산 함수 (평균 200 단어/분)
function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

const postsDirectory = path.join(process.cwd(), "content/posts");

// 지원하는 언어 목록
export const SUPPORTED_LOCALES = ["kr", "en", "jp"] as const;
export type Locale = (typeof SUPPORTED_LOCALES)[number];

export function getAllPosts(locale?: Locale): Post[] {
  const locales = locale ? [locale] : SUPPORTED_LOCALES;
  const allPostsData: Post[] = [];

  // 각 언어 폴더를 순회
  locales.forEach((loc) => {
    const localeDir = path.join(postsDirectory, loc);

    // 폴더가 존재하지 않으면 스킵
    if (!fs.existsSync(localeDir)) {
      return;
    }

    const fileNames = fs.readdirSync(localeDir);
    const posts = fileNames
      .filter((fileName) => fileName.endsWith(".md"))
      .map((fileName) => {
        // 파일명에서 날짜 부분과 .md 제거하여 slug 생성
        // 예: 2022-07-08_first-post.md -> first-post
        const slug = fileName.replace(/\.md$/, "").replace(/^\d{4}-\d{2}-\d{2}_/, "");

        // 파일 내용 읽기
        const fullPath = path.join(localeDir, fileName);
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
          readingTime: calculateReadingTime(content),
          locale: loc,
        };
      });

    allPostsData.push(...posts);
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

export function getPostBySlug(slug: string, locale?: Locale): Post | null {
  try {
    const locales = locale ? [locale] : SUPPORTED_LOCALES;

    // 각 언어 폴더에서 slug와 매칭되는 파일 찾기
    for (const loc of locales) {
      const localeDir = path.join(postsDirectory, loc);

      // 폴더가 존재하지 않으면 스킵
      if (!fs.existsSync(localeDir)) {
        continue;
      }

      const fileNames = fs.readdirSync(localeDir);
      const matchedFile = fileNames.find((fileName) => {
        const fileSlug = fileName.replace(/\.md$/, "").replace(/^\d{4}-\d{2}-\d{2}_/, "");
        return fileSlug === slug;
      });

      if (matchedFile) {
        const fullPath = path.join(localeDir, matchedFile);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data, content } = matter(fileContents);

        return {
          slug,
          title: data.title || slug,
          description: data.description || "",
          pubDate: data.pubDate || "",
          heroImage: data.heroImage || "/images/blog-placeholder-1.jpg",
          content,
          readingTime: calculateReadingTime(content),
          locale: loc,
        };
      }
    }

    return null;
  } catch (error) {
    return null;
  }
}
