"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getLanguageFromPathname, localizePath, stripLanguagePrefix } from "@/lib/i18n";

interface HeaderLinkProps {
  // Language-agnostic path such as "/" or "/post".
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function HeaderLink({ href, children, className = "" }: HeaderLinkProps) {
  const pathname = usePathname();
  const lang = getLanguageFromPathname(pathname);
  const languageHref = localizePath(href, lang);

  // Compare against the unprefixed path so "/en/post/foo" still highlights "Post".
  const basePath = stripLanguagePrefix(pathname);
  const isActive = href === "/" ? basePath === "/" : basePath === href || basePath.startsWith(`${href}/`);

  return (
    <Link
      href={languageHref}
      aria-current={isActive ? "page" : undefined}
      className={`inline-block no-underline py-2 px-3 text-[rgb(var(--white))] hover:text-[rgb(var(--primary))] transition-colors duration-200 ${
        isActive ? "active" : ""
      } ${className}`}>
      {children}
    </Link>
  );
}
