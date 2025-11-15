import Header from "@/components/Header";
import LanguageSelector from "@/components/LanguageSelector";
import { getTranslation } from "@/lib/translations";
import Image from "next/image";
import Link from "next/link";

export default function WorkPage() {
  // 기본 언어는 한국어
  const lang = "kr" as const;

  const projects = [
    {
      id: "alpha",
      title: getTranslation(lang, "work.project.alpha.title"),
      description: getTranslation(lang, "work.project.alpha.description"),
      year: "2024",
      tags: ["React", "TypeScript", "Node.js"],
      image: "/images/blog-placeholder-1.jpg",
      link: "#",
    },
    {
      id: "design",
      title: getTranslation(lang, "work.project.design.title"),
      description: getTranslation(lang, "work.project.design.description"),
      year: "2023",
      tags: ["Figma", "CSS", "Storybook"],
      image: "/images/blog-placeholder-2.jpg",
      link: "#",
    },
    {
      id: "mobile",
      title: getTranslation(lang, "work.project.mobile.title"),
      description: getTranslation(lang, "work.project.mobile.description"),
      year: "2023",
      tags: ["React Native", "Firebase", "Redux"],
      image: "/images/blog-placeholder-3.jpg",
      link: "#",
    },
    {
      id: "api",
      title: getTranslation(lang, "work.project.api.title"),
      description: getTranslation(lang, "work.project.api.description"),
      year: "2022",
      tags: ["Go", "Docker", "Kubernetes"],
      image: "/images/blog-placeholder-4.jpg",
      link: "#",
    },
  ];

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="hero h-[260px] flex items-center justify-center relative overflow-hidden pt-[100px] before:content-[''] before:absolute before:inset-0 before:bg-[url('/images/banner.jpg')] before:bg-center before:bg-cover before:opacity-50 before:z-[1] after:content-[''] after:absolute after:inset-0 after:bg-black/20 after:z-[1]">
        <div className="hero-content flex items-center gap-8 z-[2] relative text-white -translate-y-[35px] justify-center">
          <div className="hero-text">
            <h1 className="typing-text text-[1.4rem] font-bold m-0 tracking-[-0.02em] text-shadow-[0_2px_4px_rgba(0,0,0,0.3)] flex items-center gap-[0.3rem] flex-wrap justify-center">
              <span className="text-white">{getTranslation(lang, "work.page.title")}</span>
            </h1>
          </div>
        </div>
      </section>

      <div className="max-w-[1200px] mx-auto pt-8 pb-16 px-4 md:px-6">
        {/* Language Selector */}
        <LanguageSelector />

        <div className="page-header mb-16 text-center">
          <h1 className="text-[2.8rem] font-semibold m-0 mb-4 text-[rgb(var(--white))] tracking-[-0.02em] leading-[1.1] md:text-[2.2rem] sm:text-[1.9rem]">
            {getTranslation(lang, "work.page.title")}
          </h1>
          <p className="text-[1.2rem] text-[rgb(var(--neutral))] m-0 font-normal opacity-80 md:text-[1.1rem] sm:text-base">
            {getTranslation(lang, "work.page.subtitle")}
          </p>
        </div>

        <section className="projects">
          <div className="projects-grid grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-6">
            {projects.map((project, index) => (
              <Link key={project.id} href={project.link} className="group block">
                <div className="project-card bg-[rgba(255,255,255,0.02)] backdrop-blur-[12px] border border-[rgba(255,255,255,0.05)] rounded-2xl overflow-hidden hover:bg-[rgba(255,255,255,0.04)] hover:border-[rgba(var(--primary),0.3)] transition-all duration-500 hover:translate-y-[-4px] hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] group">
                  {/* Project Image */}
                  <div className="project-image relative h-48 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 right-4">
                      <span className="project-year text-[0.9rem] text-white font-medium bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full">
                        {project.year}
                      </span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6 md:p-5">
                    <div className="project-header mb-4">
                      <h3 className="text-[1.4rem] font-semibold m-0 text-[rgb(var(--white))] tracking-[-0.01em] leading-[1.3] sm:text-[1.2rem] group-hover:text-[rgb(var(--primary))] transition-colors duration-300">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-[1rem] leading-[1.6] text-[rgba(var(--white),0.85)] m-0 mb-6">
                      {project.description}
                    </p>
                    <div className="project-tags flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="tag text-[0.8rem] py-1.5 px-3 bg-[rgba(var(--primary),0.08)] text-[rgb(var(--primary))] rounded-lg border border-[rgba(var(--primary),0.15)] font-medium transition-all duration-200 hover:bg-[rgba(var(--primary),0.12)] sm:text-[0.75rem]">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
