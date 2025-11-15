"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface HeaderLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function HeaderLink({ href, children, className = "" }: HeaderLinkProps) {
  const pathname = usePathname();

  // 현재 URL에서 언어 코드 감지 (Header.tsx와 동일한 로직)
  const pathSegments = pathname.split("/").filter(Boolean);
  const supportedLanguages = ["en", "jp"];
  const currentLang = pathSegments.length > 0 && supportedLanguages.includes(pathSegments[0]) ? pathSegments[0] : "";

  // 언어별 링크 생성
  const getLanguageHref = (baseHref: string) => {
    if (currentLang) {
      return `/${currentLang}${baseHref}`;
    }
    return baseHref;
  };

  const languageHref = getLanguageHref(href);

  // active 상태 체크 (언어 경로도 고려, 하위 경로 포함)
  const isActive = (() => {
    // 홈 페이지는 정확히 일치하는 경우만
    if (href === "/") {
      return pathname === languageHref || pathname === href ||
        (currentLang && pathname === `/${currentLang}`);
    }
    // 다른 페이지는 해당 경로로 시작하면 활성화
    return pathname.startsWith(languageHref) || pathname.startsWith(href);
  })();

  return (
    <Link
      href={languageHref}
      className={`inline-block no-underline py-2 px-3 text-black dark:text-white hover:text-primary transition-colors duration-200 ${
        isActive ? "active" : ""
      } ${className}`}>
      {children}
    </Link>
  );
}
