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

  // Determine current language from pathname
  const currentLang = pathname.startsWith("/en/") ? "en" : pathname.startsWith("/jp/") ? "jp" : "kr";

  // Generate language-specific href
  const getLanguageHref = (baseHref: string) => {
    if (currentLang === "kr") {
      return baseHref;
    }
    return `/${currentLang}${baseHref}`;
  };

  const languageHref = getLanguageHref(href);
  const isActive = pathname === languageHref || pathname === href;

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
