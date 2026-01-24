import Header from "@/components/Header";
import LanguageSelector from "@/components/LanguageSelector";
import { getTranslation, type Language } from "@/lib/translations";
import Image from "next/image";

interface HomePageProps {
  lang: Language;
}

export default function HomePage({ lang }: HomePageProps) {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="hero h-[320px] flex items-center justify-center relative overflow-hidden pt-[100px] before:content-[''] before:absolute before:inset-0 before:bg-[url('/images/banner.jpg')] before:bg-center before:bg-cover before:opacity-50 before:z-[1] after:content-[''] after:absolute after:inset-0 after:bg-black/20 after:z-[1]">
        <div className="hero-content flex items-center gap-8 z-[2] relative text-white -translate-y-[35px] justify-center">
          <div className="hero-text">
            <h1 className="typing-text text-[1.4rem] font-bold m-0 tracking-[-0.02em] text-shadow-[0_2px_4px_rgba(0,0,0,0.3)] flex items-center gap-[0.3rem] flex-wrap justify-center">
              <span className="typing-content bg-gradient-to-r from-white via-[#e8f4fd] to-white bg-clip-text text-transparent">
                Welcome to{" "}
              </span>
              <span className="dev-jonny bg-gradient-to-r from-[rgb(var(--primary))] via-[rgba(var(--primary),0.8)] to-[rgba(var(--primary),0.8)] bg-clip-text text-transparent font-bold">
                DevJonny
              </span>
              <span className="typing-content bg-gradient-to-r from-white via-[#e8f4fd] to-white bg-clip-text text-transparent">
                &apos;s space
              </span>
            </h1>
          </div>
        </div>
      </section>

      <div className="pt-8 pb-16 px-4 md:px-6 max-w-full md:max-w-[720px] mx-auto">
        {/* Language Selector */}
        <LanguageSelector />

        <section className="intro text-left bg-[rgba(255,255,255,0.02)] backdrop-blur-[12px] border border-[rgba(255,255,255,0.05)] shadow-[0_4px_20px_rgba(0,0,0,0.08)] rounded-2xl p-4 md:p-8 mb-12">
          <div className="intro-header text-left mb-6 md:mb-8">
            <div className="intro-profile flex items-center gap-4 md:gap-8">
              <Image
                src="/images/profile.jpg"
                alt="Jonny Profile"
                width={96}
                height={96}
                className="intro-profile-image w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-[3px] border-[rgba(var(--primary),0.2)] shadow-[0_8px_24px_rgba(0,0,0,0.15)] transition-all duration-300 flex-shrink-0 hover:scale-105 hover:border-[rgba(var(--primary),0.4)]"
              />
              <div className="intro-text flex-grow">
                <h1 className="name text-[1.5rem] md:text-[2rem] font-semibold text-[rgb(var(--white))] m-0 mb-3 tracking-[-0.02em] leading-[1.2]">
                  Jonny (JeEon Park)
                </h1>
                <div className="job-info flex items-center justify-between gap-1 md:gap-6 flex-wrap">
                  <p className="job-title text-sm md:text-lg text-[rgb(var(--primary))] m-0 font-medium opacity-90">
                    Mobile Developer
                  </p>
                  <p className="email text-[0.75rem] md:text-[0.9rem] text-[rgb(var(--neutral))] m-0 font-normal opacity-75">
                    jonny@devjonny.me
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="intro-content space-y-4 md:space-y-5">
            <p className="text-[0.85rem] md:text-[1rem] leading-[1.7] md:leading-[1.8] text-[rgb(var(--white))] opacity-95 break-keep mb-5">
              {getTranslation(lang, "intro.company")}
            </p>
            <p className="text-[0.85rem] md:text-[1rem] leading-[1.7] md:leading-[1.8] text-[rgb(var(--white))] opacity-95 break-keep mb-5">
              <strong className="font-semibold">{getTranslation(lang, "intro.title")}</strong>
            </p>
            <p className="text-[0.85rem] md:text-[1rem] leading-[1.7] md:leading-[1.8] text-[rgb(var(--white))] opacity-90 break-keep mb-5">
              {getTranslation(lang, "intro.paragraph1")}
            </p>
            <p
              className="text-[0.85rem] md:text-[1rem] leading-[1.7] md:leading-[1.8] text-[rgb(var(--white))] opacity-90 break-keep mb-5"
              dangerouslySetInnerHTML={{ __html: getTranslation(lang, "intro.paragraph2") }}
            />
            <p
              className="text-[0.85rem] md:text-[1rem] leading-[1.7] md:leading-[1.8] text-[rgb(var(--white))] opacity-90 mb-0 break-keep"
              dangerouslySetInnerHTML={{ __html: getTranslation(lang, "intro.paragraph3") }}
            />
          </div>
        </section>

        <section className="timeline-section select-none">
          <h2 className="text-[1.5rem] md:text-[1.8rem] mb-8 md:mb-10 text-[rgb(var(--white))] font-semibold tracking-[-0.01em] leading-[1.3]">
            Archives
          </h2>
          <div className="timeline-container max-w-full md:max-w-[800px] mx-auto relative px-0 md:px-0">
            {/* Timeline Line */}
            <div className="timeline-line absolute left-[60px] md:left-[76px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-[rgba(var(--primary),0.7)] via-[rgba(var(--primary),0.6)] to-[rgba(var(--primary),0.05)]"></div>

            <div className="timeline-items space-y-6">
              {/* GMO Pepabo Inc. */}
              <div className="timeline-item flex gap-4 md:gap-6 relative">
                <div className="timeline-date flex-shrink-0 text-right mt-[22px] w-auto md:w-auto">
                  <div className="date-main text-[0.7rem] md:text-[0.9rem] font-medium text-[rgb(var(--primary))] opacity-90">
                    2025.04
                  </div>
                  <div className="date-sub text-[0.6rem] md:text-[0.75rem] text-[rgb(var(--neutral))] opacity-70">
                    - Now
                  </div>
                </div>
                <div className="timeline-dot absolute left-[56px] md:left-[70px] top-[26px] md:top-[28px] w-[10px] h-[10px] md:w-[14px] md:h-[14px] rounded-full bg-[rgb(var(--primary))] border-[3px] border-[rgba(var(--bg),1)] shadow-[0_0_0_2px_rgba(var(--primary),0.3)]"></div>
                <div className="timeline-content flex-grow bg-[rgba(255,255,255,0.02)] backdrop-blur-[12px] border border-[rgba(255,255,255,0.05)] shadow-[0_4px_20px_rgba(0,0,0,0.08)] rounded-xl p-3 md:p-5 ml-4 md:ml-6 hover:scale-[1.01] transition-all duration-300 hover:border-[rgba(var(--primary),0.3)]">
                  <div className="content-header flex items-start gap-2 md:gap-3 mb-2 md:mb-3">
                    <div className="content-icon w-7 h-7 md:w-8 md:h-8 rounded-lg bg-gradient-to-br from-[rgba(var(--primary),0.2)] to-[rgba(var(--primary),0.1)] flex items-center justify-center mt-0.5">
                      <span className="material-icons text-[rgb(var(--primary))] text-sm">business</span>
                    </div>
                    <div className="content-info flex-grow">
                      <h3 className="content-title text-[0.9rem] md:text-[1.1rem] font-semibold text-[rgb(var(--white))] mb-1 leading-tight">
                        GMO Pepabo Inc.
                      </h3>
                      <p className="content-role text-[0.75rem] md:text-[0.9rem] text-[rgb(var(--white))] opacity-80">
                        Software Engineer
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Apple Developer Academy */}
              <div className="timeline-item flex gap-4 md:gap-6 relative">
                <div className="timeline-date flex-shrink-0 text-right mt-[22px] w-auto md:w-auto">
                  <div className="date-main text-[0.7rem] md:text-[0.9rem] font-medium text-[rgb(var(--primary))] opacity-90">
                    2024.03
                  </div>
                  <div className="date-sub text-[0.6rem] md:text-[0.75rem] text-[rgb(var(--neutral))] opacity-70">
                    - 2024.12
                  </div>
                </div>
                <div className="timeline-dot absolute left-[56px] md:left-[70px] top-[26px] md:top-[28px] w-[10px] h-[10px] md:w-[14px] md:h-[14px] rounded-full bg-[rgb(var(--primary))] border-[3px] border-[rgba(var(--bg),1)] shadow-[0_0_0_2px_rgba(var(--primary),0.3)]"></div>
                <div className="timeline-content flex-grow bg-[rgba(255,255,255,0.02)] backdrop-blur-[12px] border border-[rgba(255,255,255,0.05)] shadow-[0_4px_20px_rgba(0,0,0,0.08)] rounded-xl p-3 md:p-5 ml-4 md:ml-6 hover:scale-[1.01] transition-all duration-300 hover:border-[rgba(var(--primary),0.3)]">
                  <div className="content-header flex items-start gap-2 md:gap-3 mb-2 md:mb-3">
                    <div className="content-icon w-7 h-7 md:w-8 md:h-8 rounded-lg bg-gradient-to-br from-[rgba(var(--primary),0.2)] to-[rgba(var(--primary),0.1)] flex items-center justify-center mt-0.5">
                      <span className="material-icons text-[rgb(var(--primary))] text-sm">apple</span>
                    </div>
                    <div className="content-info flex-grow">
                      <h3 className="content-title text-[0.9rem] md:text-[1.1rem] font-semibold text-[rgb(var(--white))] mb-1 leading-tight">
                        Apple Developer Academy
                      </h3>
                      <p className="content-role text-[0.75rem] md:text-[0.9rem] text-[rgb(var(--white))] opacity-80">
                        Junior Learner in Tech @ POSTECH
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Kagoshima University Exchange */}
              <div className="timeline-item flex gap-4 md:gap-6 relative">
                <div className="timeline-date flex-shrink-0 text-right mt-[22px] w-auto md:w-auto">
                  <div className="date-main text-[0.7rem] md:text-[0.9rem] font-medium text-[rgb(var(--primary))] opacity-90">
                    2022.09
                  </div>
                  <div className="date-sub text-[0.6rem] md:text-[0.75rem] text-[rgb(var(--neutral))] opacity-70">
                    - 2023.02
                  </div>
                </div>
                <div className="timeline-dot absolute left-[56px] md:left-[70px] top-[26px] md:top-[28px] w-[10px] h-[10px] md:w-[14px] md:h-[14px] rounded-full bg-[rgb(var(--primary))] border-[3px] border-[rgba(var(--bg),1)] shadow-[0_0_0_2px_rgba(var(--primary),0.3)]"></div>
                <div className="timeline-content flex-grow bg-[rgba(255,255,255,0.02)] backdrop-blur-[12px] border border-[rgba(255,255,255,0.05)] shadow-[0_4px_20px_rgba(0,0,0,0.08)] rounded-xl p-3 md:p-5 ml-4 md:ml-6 hover:scale-[1.01] transition-all duration-300 hover:border-[rgba(var(--primary),0.3)]">
                  <div className="content-header flex items-start gap-2 md:gap-3 mb-2 md:mb-3">
                    <div className="content-icon w-7 h-7 md:w-8 md:h-8 rounded-lg bg-gradient-to-br from-[rgba(var(--primary),0.2)] to-[rgba(var(--primary),0.1)] flex items-center justify-center mt-0.5">
                      <span className="material-icons text-[rgb(var(--primary))] text-sm">flight_takeoff</span>
                    </div>
                    <div className="content-info flex-grow">
                      <h3 className="content-title text-[0.9rem] md:text-[1.1rem] font-semibold text-[rgb(var(--white))] mb-1 leading-tight">
                        Kagoshima University
                      </h3>
                      <p className="content-role text-[0.75rem] md:text-[0.9rem] text-[rgb(var(--white))] opacity-80">
                        Information Science and Biomedical Engineering
                      </p>
                      <p className="content-detail text-[0.7rem] md:text-[0.8rem] text-[rgb(var(--neutral))] opacity-70 mt-1">
                        Exchange Program
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Developer Student Clubs */}
              <div className="timeline-item flex gap-4 md:gap-6 relative">
                <div className="timeline-date flex-shrink-0 text-right mt-[22px] w-auto md:w-auto">
                  <div className="date-main text-[0.7rem] md:text-[0.9rem] font-medium text-[rgb(var(--primary))] opacity-90">
                    2021.09
                  </div>
                  <div className="date-sub text-[0.6rem] md:text-[0.75rem] text-[rgb(var(--neutral))] opacity-70">
                    - 2024.07
                  </div>
                </div>
                <div className="timeline-dot absolute left-[56px] md:left-[70px] top-[26px] md:top-[28px] w-[10px] h-[10px] md:w-[14px] md:h-[14px] rounded-full bg-[rgb(var(--primary))] border-[3px] border-[rgba(var(--bg),1)] shadow-[0_0_0_2px_rgba(var(--primary),0.3)]"></div>
                <div className="timeline-content flex-grow bg-[rgba(255,255,255,0.02)] backdrop-blur-[12px] border border-[rgba(255,255,255,0.05)] shadow-[0_4px_20px_rgba(0,0,0,0.08)] rounded-xl p-3 md:p-5 ml-4 md:ml-6 hover:scale-[1.01] transition-all duration-300 hover:border-[rgba(var(--primary),0.3)]">
                  <div className="content-header flex items-start gap-2 md:gap-3 mb-2 md:mb-3">
                    <div className="content-icon w-7 h-7 md:w-8 md:h-8 rounded-lg bg-gradient-to-br from-[rgba(var(--primary),0.2)] to-[rgba(var(--primary),0.1)] flex items-center justify-center mt-0.5">
                      <span className="material-icons text-[rgb(var(--primary))] text-sm">groups</span>
                    </div>
                    <div className="content-info flex-grow">
                      <h3 className="content-title text-[0.9rem] md:text-[1.1rem] font-semibold text-[rgb(var(--white))] mb-1 leading-tight">
                        Google Developer Student Clubs
                      </h3>
                      <p className="content-role text-[0.75rem] md:text-[0.9rem] text-[rgb(var(--white))] opacity-80">
                        Sangmyung University
                      </p>
                      <p className="content-detail text-[0.7rem] md:text-[0.8rem] text-[rgb(var(--neutral))] opacity-70 mt-1">
                        Member (2021-2022), Lead (2022-2024)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sangmyung University */}
              <div className="timeline-item flex gap-4 md:gap-6 relative">
                <div className="timeline-date flex-shrink-0 text-right mt-[22px] w-auto md:w-auto">
                  <div className="date-main text-[0.7rem] md:text-[0.9rem] font-medium text-[rgb(var(--primary))] opacity-90">
                    2018.03
                  </div>
                  <div className="date-sub text-[0.6rem] md:text-[0.75rem] text-[rgb(var(--neutral))] opacity-70">
                    - 2024.02
                  </div>
                </div>
                <div className="timeline-dot absolute left-[56px] md:left-[70px] top-[26px] md:top-[28px] w-[10px] h-[10px] md:w-[14px] md:h-[14px] rounded-full bg-[rgb(var(--primary))] border-[3px] border-[rgba(var(--bg),1)] shadow-[0_0_0_2px_rgba(var(--primary),0.3)]"></div>
                <div className="timeline-content flex-grow bg-[rgba(255,255,255,0.02)] backdrop-blur-[12px] border border-[rgba(255,255,255,0.05)] shadow-[0_4px_20px_rgba(0,0,0,0.08)] rounded-xl p-3 md:p-5 ml-4 md:ml-6 hover:scale-[1.01] transition-all duration-300 hover:border-[rgba(var(--primary),0.3)]">
                  <div className="content-header flex items-start gap-2 md:gap-3 mb-2 md:mb-3">
                    <div className="content-icon w-7 h-7 md:w-8 md:h-8 rounded-lg bg-gradient-to-br from-[rgba(var(--primary),0.2)] to-[rgba(var(--primary),0.1)] flex items-center justify-center mt-0.5">
                      <span className="material-icons text-[rgb(var(--primary))] text-sm">school</span>
                    </div>
                    <div className="content-info flex-grow">
                      <h3 className="content-title text-[0.9rem] md:text-[1.1rem] font-semibold text-[rgb(var(--white))] mb-1 leading-tight">
                        Sangmyung University
                      </h3>
                      <p className="content-role text-[0.75rem] md:text-[0.9rem] text-[rgb(var(--white))] opacity-80">
                        Engineering of Information and Communication
                      </p>
                      <p className="content-detail text-[0.7rem] md:text-[0.8rem] text-[rgb(var(--neutral))] opacity-70 mt-1">
                        GPA: 3.94
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
