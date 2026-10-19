import type { Language } from "./i18n";

export type { Language } from "./i18n";

export const translations = {
  kr: {
    "work.page.title": "Work",
    "work.page.subtitle": "프로젝트와 실험들의 모음",
    "work.project.alpha.title": "프로젝트 알파",
    "work.project.alpha.description":
      "최신 기술로 구축된 현대적인 웹 애플리케이션으로 원활한 사용자 경험을 제공합니다.",
    "work.project.design.title": "디자인 시스템",
    "work.project.design.description": "모든 플랫폼에서 일관된 사용자 경험을 위한 포괄적인 디자인 시스템입니다.",
    "work.project.mobile.title": "모바일 앱",
    "work.project.mobile.description":
      "네이티브 성능과 직관적인 디자인을 갖춘 크로스 플랫폼 모바일 애플리케이션입니다.",
    "work.project.api.title": "API 게이트웨이",
    "work.project.api.description": "견고한 API 관리 및 모니터링을 갖춘 확장 가능한 마이크로서비스 아키텍처입니다.",
    "post.page.title": "Posts",
    "post.page.subtitle": "생각과 과정을 기록하는 공간",
    "post.empty": "아직 포스트가 없습니다. 조금만 기다려 주세요!",
    "notfound.title": "페이지를 찾을 수 없습니다",
    "notfound.description": "요청하신 페이지가 존재하지 않거나 이동되었습니다.",
    "notfound.home": "홈으로 돌아가기",
    "home.experience": "Experience",
    "home.education": "Education",
    "home.awards": "Awards",
    "home.certifications": "Certifications",
    "home.recentPosts": "Recent Posts",
    "home.viewAllPosts": "모든 글 보기",
    "home.contact.email": "이메일",
    "home.contact.github": "GitHub",
    "footer.rights": "All rights reserved.",
  },
  en: {
    "work.page.title": "Work",
    "work.page.subtitle": "A collection of my projects and experiments",
    "work.project.alpha.title": "Project Alpha",
    "work.project.alpha.description":
      "A modern web application built with cutting-edge technologies for seamless user experiences.",
    "work.project.design.title": "Design System",
    "work.project.design.description":
      "Comprehensive design system for consistent user experiences across all platforms.",
    "work.project.mobile.title": "Mobile App",
    "work.project.mobile.description":
      "Cross-platform mobile application with native performance and intuitive design.",
    "work.project.api.title": "API Gateway",
    "work.project.api.description": "Scalable microservices architecture with robust API management and monitoring.",
    "post.page.title": "Posts",
    "post.page.subtitle": "A space to record thoughts and processes",
    "post.empty": "No posts yet. Stay tuned!",
    "notfound.title": "Page not found",
    "notfound.description": "The page you are looking for does not exist or has been moved.",
    "notfound.home": "Back to home",
    "home.experience": "Experience",
    "home.education": "Education",
    "home.awards": "Awards",
    "home.certifications": "Certifications",
    "home.recentPosts": "Recent Posts",
    "home.viewAllPosts": "View all posts",
    "home.contact.email": "Email",
    "home.contact.github": "GitHub",
    "footer.rights": "All rights reserved.",
  },
  jp: {
    "work.page.title": "Work",
    "work.page.subtitle": "プロジェクトと実験のコレクション",
    "work.project.alpha.title": "プロジェクトアルファ",
    "work.project.alpha.description":
      "最新技術で構築された現代的なウェブアプリケーションで、シームレスなユーザー体験を提供します。",
    "work.project.design.title": "デザインシステム",
    "work.project.design.description":
      "すべてのプラットフォームで一貫したユーザー体験のための包括的なデザインシステムです。",
    "work.project.mobile.title": "モバイルアプリ",
    "work.project.mobile.description":
      "ネイティブパフォーマンスと直感的なデザインを備えたクロスプラットフォームモバイルアプリケーションです。",
    "work.project.api.title": "APIゲートウェイ",
    "work.project.api.description":
      "堅牢なAPI管理とモニタリングを備えたスケーラブルなマイクロサービスアーキテクチャです。",
    "post.page.title": "Posts",
    "post.page.subtitle": "思考と過程を記録する空間",
    "post.empty": "まだ投稿がありません。もうしばらくお待ちください！",
    "notfound.title": "ページが見つかりません",
    "notfound.description": "お探しのページは存在しないか、移動されました。",
    "notfound.home": "ホームに戻る",
    "home.experience": "Experience",
    "home.education": "Education",
    "home.awards": "Awards",
    "home.certifications": "Certifications",
    "home.recentPosts": "Recent Posts",
    "home.viewAllPosts": "すべての記事を見る",
    "home.contact.email": "メール",
    "home.contact.github": "GitHub",
    "footer.rights": "All rights reserved.",
  },
};

export type TranslationKey = keyof (typeof translations)["kr"];

export function getTranslation(lang: Language, key: TranslationKey | string): string {
  const langTranslations: Record<string, string> = translations[lang] ?? translations.kr;
  return langTranslations[key] || key;
}
