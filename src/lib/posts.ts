import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { LANGUAGES, type Language } from "./i18n";

export interface Post {
  slug: string;
  title: string;
  description: string;
  pubDate: string;
  heroImage: string;
  content: string;
  readingTime: string;
  locale: Language;
  draft: boolean;
}

const POSTS_DIRECTORY = path.join(process.cwd(), "content/posts");
const DEFAULT_HERO_IMAGE = "/images/blog-placeholder-1.jpg";

// Drafts are visible while developing so they can be previewed,
// and hidden from every production build.
const INCLUDE_DRAFTS = process.env.NODE_ENV === "development";

// Reading speed assumptions. CJK text has no word boundaries,
// so it is measured per character instead of per whitespace-separated word.
const WORDS_PER_MINUTE = 200;
const CJK_CHARS_PER_MINUTE = 500;
const CJK_PATTERN = /[぀-ヿ㐀-䶿一-鿿가-힯豈-﫿]/g;

function calculateReadingTime(content: string): string {
  const cjkCount = (content.match(CJK_PATTERN) ?? []).length;
  const nonCjk = content.replace(CJK_PATTERN, " ").trim();
  const wordCount = nonCjk ? nonCjk.split(/\s+/).length : 0;
  const minutes = Math.max(1, Math.ceil(wordCount / WORDS_PER_MINUTE + cjkCount / CJK_CHARS_PER_MINUTE));
  return `${minutes} min read`;
}

// "2022-07-08_first-post.md" -> "first-post"
function fileNameToSlug(fileName: string): string {
  return fileName.replace(/\.md$/, "").replace(/^\d{4}-\d{2}-\d{2}_/, "");
}

function listMarkdownFiles(locale: Language): string[] {
  const localeDir = path.join(POSTS_DIRECTORY, locale);
  if (!fs.existsSync(localeDir)) {
    return [];
  }
  return fs.readdirSync(localeDir).filter((fileName) => fileName.endsWith(".md"));
}

function readPost(locale: Language, fileName: string): Post {
  const fullPath = path.join(POSTS_DIRECTORY, locale, fileName);
  const { data, content } = matter(fs.readFileSync(fullPath, "utf8"));
  const slug = fileNameToSlug(fileName);

  return {
    slug,
    title: data.title || slug,
    description: data.description || "",
    pubDate: data.pubDate ? String(data.pubDate) : "",
    heroImage: data.heroImage || DEFAULT_HERO_IMAGE,
    content,
    readingTime: calculateReadingTime(content),
    locale,
    draft: Boolean(data.draft),
  };
}

function isVisible(post: Post): boolean {
  return INCLUDE_DRAFTS || !post.draft;
}

export function getAllPosts(locale?: Language): Post[] {
  const locales = locale ? [locale] : LANGUAGES;

  return locales
    .flatMap((loc) => listMarkdownFiles(loc).map((fileName) => readPost(loc, fileName)))
    .filter(isVisible)
    .sort((a, b) => b.pubDate.localeCompare(a.pubDate));
}

export function getPostBySlug(slug: string, locale: Language): Post | null {
  const fileName = listMarkdownFiles(locale).find((name) => fileNameToSlug(name) === slug);
  if (!fileName) {
    return null;
  }

  const post = readPost(locale, fileName);
  return isVisible(post) ? post : null;
}

// Languages in which a given slug exists. Used for hreflang alternates.
export function getAvailableLocales(slug: string): Language[] {
  return LANGUAGES.filter((loc) => getPostBySlug(slug, loc) !== null);
}
