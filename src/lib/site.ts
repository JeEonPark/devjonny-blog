import type { Language } from "./i18n";

export const SITE_URL = "https://devjonny.me";
export const SITE_NAME = "Dev/Jonny";
export const AUTHOR_NAME = "Jonny (JeEon Park)";
export const GITHUB_URL = "https://github.com/JeEonPark";
export const DEFAULT_OG_IMAGE = "/images/banner.jpg";

// Posts are hidden until there is something published: the nav item disappears,
// /post routes return 404, and the home page and sitemap skip them.
export const POSTS_ENABLED = false;

export const SITE_DESCRIPTION: Record<Language, string> = {
  kr: "도쿄에서 SUZURI의 iOS, Android 앱을 만드는 모바일 개발자 Jonny의 포트폴리오와 블로그",
  en: "Portfolio and blog of Jonny, a mobile developer building the SUZURI iOS and Android apps in Tokyo",
  jp: "東京でSUZURIのiOS・Androidアプリを開発しているモバイル開発者Jonnyのポートフォリオとブログ",
};
