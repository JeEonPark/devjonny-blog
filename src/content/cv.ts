import type { Language } from "@/lib/i18n";

// Career facts, sourced from JeEon-Park-CV.pdf (October 2025).
// Dates are "YYYY-MM"; an undefined `end` means ongoing.

export interface Period {
  start: string;
  end?: string;
}

export interface ExperienceEntry extends Period {
  organization: string;
  role: string;
  icon: string;
  details: string[];
}

export interface EducationEntry extends Period {
  institution: string;
  program: string;
  note?: string;
}

export interface AwardEntry {
  date: string;
  organization: string;
  title: string;
  details: string[];
}

export interface CertificationEntry {
  date: string;
  name: string;
}

export interface CvData {
  name: string;
  title: string;
  affiliation: string;
  profile: string;
  experience: ExperienceEntry[];
  education: EducationEntry[];
  awards: AwardEntry[];
  certifications: CertificationEntry[];
}

export const CONTACT = {
  email: "jonny@devjonny.me",
  github: "JeEonPark",
} as const;

export const CV: Record<Language, CvData> = {
  kr: {
    name: "JeEon Park",
    title: "모바일 엔지니어",
    affiliation: "GMO Pepabo · 도쿄",
    profile:
      "안녕하세요. 도쿄의 GMO Pepabo에서 SUZURI의 iOS·Android 앱을 개발하고 있는 Jonny입니다. 모바일을 중심으로 프론트엔드와 서버 개발에도 관심이 있고, 앱 기획과 UX 디자인, 개발까지 직접 경험했습니다. 호기심과 끈기, 그리고 함께 성장하려는 마음으로 일하고 있습니다.",
    experience: [
      {
        start: "2025-04",
        organization: "GMO Pepabo, Inc.",
        role: "Mobile Engineer",
        icon: "business",
        details: ["2025년 4월 입사, 신입사원 연수 수료.", "2025년 9월부터 SUZURI iOS·Android 앱 개발."],
      },
      {
        start: "2024-03",
        end: "2024-12",
        organization: "Apple Developer Academy @ POSTECH",
        role: "Junior Learner",
        icon: "apple",
        details: ["앱 기획, 사용자 경험(UX) 디자인, 앱 개발 학습.", "Numvert, MonEasy, Reazy 개발."],
      },
      {
        start: "2023-07",
        end: "2024-02",
        organization: "Freelance",
        role: "App Development & Automation",
        icon: "code",
        details: ["클라이언트를 위한 앱과 맞춤형 자동화 프로그램 개발."],
      },
      {
        start: "2022-07",
        end: "2024-06",
        organization: "Google Developer Student Clubs Sangmyung",
        role: "Lead",
        icon: "groups",
        details: ["2년간 대학 챕터를 이끌며 스터디와 기술 세션 운영.", "교내 해커톤 기획 및 개최."],
      },
      {
        start: "2019-08",
        end: "2021-03",
        organization: "대한민국 육군",
        role: "IT Specialist",
        icon: "shield",
        details: [],
      },
    ],
    education: [
      {
        start: "2018-03",
        end: "2024-02",
        institution: "상명대학교",
        program: "스마트정보통신공학과",
        note: "GPA 3.94 / 4.5",
      },
      {
        start: "2022-09",
        end: "2023-03",
        institution: "가고시마대학",
        program: "교환학생 · 정보생체시스템공학",
      },
    ],
    awards: [
      {
        date: "2025-10",
        organization: "NASA Space Apps Challenge",
        title: "President's Award (사이타마공업대학)",
        details: ["Galactic Problem Solver (Participant Certificate)"],
      },
      {
        date: "2024-03",
        organization: "Apple",
        title: "Swift Student Challenge — Winner",
        details: ["전 세계 350명의 수상자 중 한 명으로 선정."],
      },
    ],
    certifications: [
      { date: "2024-06", name: "정보처리기사" },
      { date: "2023-12", name: "리눅스마스터 2급" },
      { date: "2021-08", name: "일본어능력시험 (JLPT) N2" },
    ],
  },

  en: {
    name: "JeEon Park",
    title: "Mobile Engineer",
    affiliation: "GMO Pepabo · Tokyo",
    profile:
      "Hello, I'm Jonny. I develop the SUZURI iOS and Android apps at GMO Pepabo in Tokyo. Mobile is my home ground, but I'm also interested in front-end and server development, and I've taken apps from planning and UX design through to shipping. I'm driven by curiosity, persistence, and a commitment to growing together with the people I work with.",
    experience: [
      {
        start: "2025-04",
        organization: "GMO Pepabo, Inc.",
        role: "Mobile Engineer",
        icon: "business",
        details: [
          "Joined in April 2025 and completed new employee training.",
          "Developing the SUZURI iOS and Android apps since September 2025.",
        ],
      },
      {
        start: "2024-03",
        end: "2024-12",
        organization: "Apple Developer Academy @ POSTECH",
        role: "Junior Learner",
        icon: "apple",
        details: [
          "Studied app planning, user experience (UX) design, and app development.",
          "Developed Numvert, MonEasy, and Reazy.",
        ],
      },
      {
        start: "2023-07",
        end: "2024-02",
        organization: "Freelance",
        role: "App Development & Automation",
        icon: "code",
        details: ["Developed apps and custom automation programs for clients."],
      },
      {
        start: "2022-07",
        end: "2024-06",
        organization: "Google Developer Student Clubs Sangmyung",
        role: "Lead",
        icon: "groups",
        details: [
          "Led the university chapter for two years, organizing study groups and technical sessions.",
          "Organized and hosted hackathons on campus.",
        ],
      },
      {
        start: "2019-08",
        end: "2021-03",
        organization: "Republic of Korea Army",
        role: "IT Specialist",
        icon: "shield",
        details: [],
      },
    ],
    education: [
      {
        start: "2018-03",
        end: "2024-02",
        institution: "Sangmyung University",
        program: "Smart Information Communication Engineering",
        note: "GPA 3.94 / 4.5",
      },
      {
        start: "2022-09",
        end: "2023-03",
        institution: "Kagoshima University",
        program: "Exchange Student · Information Science and Biomedical Engineering",
      },
    ],
    awards: [
      {
        date: "2025-10",
        organization: "NASA Space Apps Challenge",
        title: "President's Award (Saitama Institute of Technology)",
        details: ["Galactic Problem Solver (Participant Certificate)"],
      },
      {
        date: "2024-03",
        organization: "Apple",
        title: "Swift Student Challenge — Winner",
        details: ["Selected as one of 350 winners worldwide."],
      },
    ],
    certifications: [
      { date: "2024-06", name: "Engineer Information Processing (South Korea)" },
      { date: "2023-12", name: "Linux Master Level 2 (South Korea)" },
      { date: "2021-08", name: "Japanese-Language Proficiency Test (JLPT) N2" },
    ],
  },

  jp: {
    name: "JeEon Park",
    title: "モバイルエンジニア",
    affiliation: "GMOペパボ · 東京",
    profile:
      "こんにちは。東京のGMOペパボでSUZURIのiOS・Androidアプリを開発しているJonnyです。モバイルを軸にフロントエンドやサーバー開発にも関心があり、アプリの企画・UXデザインから開発まで一通り経験してきました。好奇心と粘り強さ、そして一緒に成長していく姿勢を大切にしています。",
    experience: [
      {
        start: "2025-04",
        organization: "GMOペパボ株式会社",
        role: "Mobile Engineer",
        icon: "business",
        details: ["2025年4月入社、新卒研修を修了。", "2025年9月よりSUZURIのiOS・Androidアプリを開発。"],
      },
      {
        start: "2024-03",
        end: "2024-12",
        organization: "Apple Developer Academy @ POSTECH",
        role: "Junior Learner",
        icon: "apple",
        details: ["アプリ企画、ユーザー体験（UX）デザイン、アプリ開発を学習。", "Numvert、MonEasy、Reazyを開発。"],
      },
      {
        start: "2023-07",
        end: "2024-02",
        organization: "Freelance",
        role: "App Development & Automation",
        icon: "code",
        details: ["クライアント向けのアプリやカスタム自動化プログラムを開発。"],
      },
      {
        start: "2022-07",
        end: "2024-06",
        organization: "Google Developer Student Clubs Sangmyung",
        role: "Lead",
        icon: "groups",
        details: ["2年間大学チャプターを率い、勉強会や技術セッションを運営。", "学内ハッカソンを企画・開催。"],
      },
      {
        start: "2019-08",
        end: "2021-03",
        organization: "大韓民国陸軍",
        role: "IT Specialist",
        icon: "shield",
        details: [],
      },
    ],
    education: [
      {
        start: "2018-03",
        end: "2024-02",
        institution: "祥明大学校",
        program: "スマート情報通信工学科",
        note: "GPA 3.94 / 4.5",
      },
      {
        start: "2022-09",
        end: "2023-03",
        institution: "鹿児島大学",
        program: "交換留学 · 情報生体システム工学",
      },
    ],
    awards: [
      {
        date: "2025-10",
        organization: "NASA Space Apps Challenge",
        title: "President's Award（埼玉工業大学）",
        details: ["Galactic Problem Solver (Participant Certificate)"],
      },
      {
        date: "2024-03",
        organization: "Apple",
        title: "Swift Student Challenge — Winner",
        details: ["世界350名の受賞者の一人に選出。"],
      },
    ],
    certifications: [
      { date: "2024-06", name: "情報処理技士（韓国）" },
      { date: "2023-12", name: "Linuxマスター2級（韓国）" },
      { date: "2021-08", name: "日本語能力試験 (JLPT) N2" },
    ],
  },
};

const MONTHS_EN = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const PRESENT: Record<Language, string> = { kr: "현재", en: "Present", jp: "現在" };

// "2025-04" -> "Apr 2025" (en) or "2025.04" (kr, jp)
export function formatMonth(value: string, lang: Language): string {
  const [year, month] = value.split("-");
  if (lang === "en") {
    return `${MONTHS_EN[Number(month) - 1]} ${year}`;
  }
  return `${year}.${month}`;
}

export function formatPeriod(period: Period, lang: Language): { start: string; end: string } {
  return {
    start: formatMonth(period.start, lang),
    end: period.end ? formatMonth(period.end, lang) : PRESENT[lang],
  };
}
