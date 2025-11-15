"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import HeaderLink from "./HeaderLink";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // 현재 URL에서 언어 코드 감지
  const pathSegments = pathname.split("/").filter(Boolean);
  const supportedLanguages = ["en", "jp"];

  // 현재 언어 감지
  let currentLang = "";
  if (pathSegments.length > 0 && supportedLanguages.includes(pathSegments[0])) {
    currentLang = pathSegments[0];
  }

  // 언어별 링크 생성 함수
  function createLink(path: string) {
    if (currentLang) {
      return `/${currentLang}${path}`;
    }
    return path;
  }

  // 스크롤에 따른 헤더 스타일 변경
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // 초기 상태 설정

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 모바일 메뉴 제어
  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };

  // ESC 키로 메뉴 닫기
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMenuOpen) {
        closeMobileMenu();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  // 외부 클릭시 메뉴 닫기
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Element;
      const mobileMenu = document.getElementById("mobile-menu");
      const mobileMenuButton = document.getElementById("mobile-menu-button");

      if (isMenuOpen && !mobileMenu?.contains(target) && !mobileMenuButton?.contains(target)) {
        closeMobileMenu();
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMenuOpen]);

  return (
    <header
      id="header"
      className={`fixed top-0 left-0 right-0 z-[1000] flex h-[75px] items-center bg-transparent border-b border-transparent transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
        isScrolled ? "scrolled" : ""
      } ${isMenuOpen ? "menu-open" : ""}`}>
      <nav className="h-full mx-auto max-w-[720px] w-full px-6 flex items-center justify-between relative">
        {/* Logo */}
        <h2 className="m-0 text-[20px] font-['IBM_Plex_Sans'] font-medium opacity-90">
          <Link
            href={createLink("/")}
            className="no-underline text-black dark:text-white py-2 px-1 transition-colors duration-200">
            <span>Dev</span>
            <span className="text-[rgb(var(--primary))]">/</span>
            <span> Jonny</span>
          </Link>
        </h2>

        {/* Desktop Navigation - Centered */}
        <div className="internal-links hidden md:flex gap-1 absolute left-1/2 transform -translate-x-1/2">
          <HeaderLink href="/">Home</HeaderLink>
          <HeaderLink href="/work">Work</HeaderLink>
          <HeaderLink href="/post">Post</HeaderLink>
        </div>

        {/* Desktop Social Links */}
        <div className="social-links hidden md:flex gap-4">
          <a
            href="https://github.com"
            target="_blank"
            className="flex text-black dark:text-white p-2 rounded-lg transition-all duration-200 hover:bg-white/5">
            <span className="sr-only">Go to GitHub</span>
            <svg viewBox="0 0 16 16" aria-hidden="true" width="28" height="28">
              <path
                fill="currentColor"
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
              />
            </svg>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          id="mobile-menu-button"
          onClick={toggleMobileMenu}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg transition-all duration-200 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-[rgb(var(--primary))]/50 z-[1001]">
          <span
            className={`hamburger-line w-5 h-0.5 bg-black dark:bg-white transition-all duration-300 transform origin-center ${
              isMenuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}></span>
          <span
            className={`hamburger-line w-5 h-0.5 bg-black dark:bg-white transition-all duration-300 transform origin-center mt-1 ${
              isMenuOpen ? "opacity-0 scale-0" : ""
            }`}></span>
          <span
            className={`hamburger-line w-5 h-0.5 bg-black dark:bg-white transition-all duration-300 transform origin-center mt-1 ${
              isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}></span>
        </button>
      </nav>

      {/* Apple-style Dropdown Mobile Menu */}
      <div
        id="mobile-menu"
        className={`absolute top-full left-0 right-0 bg-white/98 dark:bg-[rgba(25,25,25,0.98)] backdrop-blur-xl transition-all duration-300 ease-[cubic-bezier(0.165,0.84,0.44,1)] md:hidden ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}>
        <div className="mobile-menu-content max-w-[720px] mx-auto px-6 py-4">
          {/* Mobile Navigation Links */}
          <div className="mobile-nav-links space-y-0 mb-4">
            <Link
              href={createLink("/")}
              onClick={closeMobileMenu}
              className="mobile-nav-link flex items-center justify-between py-2.5 px-3 text-black dark:text-white hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-all duration-150 group">
              <span className="text-[1rem] font-normal tracking-[-0.005em]">Home</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-black/20 dark:text-white/20 group-hover:text-black/40 dark:group-hover:text-white/40 group-hover:translate-x-0.5 transition-all duration-150">
                <polyline points="9,18 15,12 9,6"></polyline>
              </svg>
            </Link>
            <Link
              href={createLink("/work")}
              onClick={closeMobileMenu}
              className="mobile-nav-link flex items-center justify-between py-2.5 px-3 text-black dark:text-white hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-all duration-150 group">
              <span className="text-[1rem] font-normal tracking-[-0.005em]">Work</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-black/20 dark:text-white/20 group-hover:text-black/40 dark:group-hover:text-white/40 group-hover:translate-x-0.5 transition-all duration-150">
                <polyline points="9,18 15,12 9,6"></polyline>
              </svg>
            </Link>
            <Link
              href={createLink("/post")}
              onClick={closeMobileMenu}
              className="mobile-nav-link flex items-center justify-between py-2.5 px-3 text-black dark:text-white hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-all duration-150 group">
              <span className="text-[1rem] font-normal tracking-[-0.005em]">Post</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-black/20 dark:text-white/20 group-hover:text-black/40 dark:group-hover:text-white/40 group-hover:translate-x-0.5 transition-all duration-150">
                <polyline points="9,18 15,12 9,6"></polyline>
              </svg>
            </Link>
          </div>

          {/* Mobile Social Links */}
          <div className="mobile-social-section transition-all duration-200 pt-3">
            <div className="text-black/40 dark:text-white/40 text-[0.7rem] font-medium mb-2 tracking-wider uppercase">
              Connect
            </div>
            <div className="flex gap-2">
              <a
                href="https://github.com"
                target="_blank"
                className="flex items-center justify-center w-8 h-8 bg-black/[0.02] dark:bg-white/[0.02] text-black dark:text-white hover:bg-black/[0.04] dark:hover:bg-white/[0.04] hover:scale-105 transition-all duration-150 hover:text-[rgb(var(--primary))]">
                <svg viewBox="0 0 16 16" aria-hidden="true" width="16" height="16">
                  <path
                    fill="currentColor"
                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
