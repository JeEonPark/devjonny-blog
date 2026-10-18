"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import HeaderLink from "./HeaderLink";
import { getLanguageFromPathname, localizePath } from "@/lib/i18n";
import { GITHUB_URL, POSTS_ENABLED } from "@/lib/site";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  ...(POSTS_ENABLED ? [{ href: "/post", label: "Post" }] : []),
];

function GitHubIcon({ size }: { size: number }) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" width={size} height={size}>
      <path
        fill="currentColor"
        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
      />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="text-white/20 group-hover:text-white/40 group-hover:translate-x-0.5 transition-all duration-150"
    >
      <polyline points="9,18 15,12 9,6"></polyline>
    </svg>
  );
}

export default function Header() {
  const pathname = usePathname();
  const lang = getLanguageFromPathname(pathname);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const closeMobileMenu = useCallback(() => setIsMenuOpen(false), []);
  // With Home as the only item there is nothing to put in a drawer,
  // so the GitHub link shows inline on every width and the menu button is gone.
  const hasMenu = NAV_ITEMS.length > 1;

  // Solid header background once the page is scrolled.
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close the mobile menu on Escape or on a click outside of it.
  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeMobileMenu();
      }
    };
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        !menuRef.current?.contains(target) &&
        !buttonRef.current?.contains(target)
      ) {
        closeMobileMenu();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMenuOpen, closeMobileMenu]);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    closeMobileMenu();
  }, [pathname, closeMobileMenu]);

  return (
    <header
      id="header"
      className={`fixed top-0 left-0 right-0 z-[1000] flex h-[75px] items-center bg-transparent border-b border-transparent transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
        isScrolled ? "scrolled" : ""
      } ${isMenuOpen ? "menu-open" : ""}`}
    >
      <nav className="h-full mx-auto max-w-[720px] w-full px-6 flex items-center justify-between relative">
        {/* Logo */}
        <div className="m-0 text-[20px] font-medium opacity-90">
          <Link
            href={localizePath("/", lang)}
            className="no-underline text-[rgb(var(--white))] py-2 px-1 transition-colors duration-200"
          >
            <span>Dev</span>
            <span className="text-[rgb(var(--primary))]">/</span>
            <span> Jonny</span>
          </Link>
        </div>

        {/* Desktop Navigation - Centered; hidden while Home is the only item */}
        {NAV_ITEMS.length > 1 && (
          <div className="internal-links hidden md:flex gap-1 absolute left-1/2 transform -translate-x-1/2">
            {NAV_ITEMS.map((item) => (
              <HeaderLink key={item.href} href={item.href}>
                {item.label}
              </HeaderLink>
            ))}
          </div>
        )}

        {/* Social Links */}
        <div
          className={`social-links gap-4 ${hasMenu ? "hidden md:flex" : "flex"}`}
        >
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex text-[rgb(var(--white))] p-2 rounded-lg transition-all duration-200 hover:bg-white/5"
          >
            <span className="sr-only">Go to GitHub</span>
            <GitHubIcon size={28} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        {hasMenu && (
          <button
            ref={buttonRef}
            id="mobile-menu-button"
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg transition-all duration-200 hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--primary))]/50 z-[1001]"
          >
            <span
              className={`hamburger-line w-5 h-0.5 bg-[rgb(var(--white))] transition-all duration-300 transform origin-center ${
                isMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`hamburger-line w-5 h-0.5 bg-[rgb(var(--white))] transition-all duration-300 transform origin-center mt-1 ${
                isMenuOpen ? "opacity-0 scale-0" : ""
              }`}
            ></span>
            <span
              className={`hamburger-line w-5 h-0.5 bg-[rgb(var(--white))] transition-all duration-300 transform origin-center mt-1 ${
                isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </button>
        )}
      </nav>

      {/* Dropdown Mobile Menu */}
      {hasMenu && (
        <div
          ref={menuRef}
          id="mobile-menu"
          aria-hidden={!isMenuOpen}
          className={`absolute top-full left-0 right-0 bg-[rgba(25,25,25,0.98)] backdrop-blur-xl border-b border-white/[0.06] transition-all duration-300 ease-[cubic-bezier(0.165,0.84,0.44,1)] md:hidden ${
            isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <div className="mobile-menu-content max-w-[720px] mx-auto px-6 py-4">
            <div
              className={`mobile-nav-links space-y-0 ${NAV_ITEMS.length > 1 ? "mb-4" : "hidden"}`}
            >
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={localizePath(item.href, lang)}
                  onClick={closeMobileMenu}
                  tabIndex={isMenuOpen ? 0 : -1}
                  className="mobile-nav-link flex items-center justify-between py-2.5 px-3 text-[rgb(var(--white))] hover:bg-white/[0.02] transition-all duration-150 group"
                >
                  <span className="text-[1rem] font-normal tracking-[-0.005em]">
                    {item.label}
                  </span>
                  <ChevronIcon />
                </Link>
              ))}
            </div>

            <div className="mobile-social-section transition-all duration-200 pt-3">
              <div className="flex gap-2">
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  tabIndex={isMenuOpen ? 0 : -1}
                  className="flex items-center justify-center w-8 h-8 bg-white/[0.02] text-[rgb(var(--white))] hover:bg-white/[0.04] hover:scale-105 transition-all duration-150 hover:text-[rgb(var(--primary))]"
                >
                  <span className="sr-only">GitHub</span>
                  <GitHubIcon size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
