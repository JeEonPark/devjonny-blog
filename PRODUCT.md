# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- The owner, JeEon Park ("Jonny"), a mobile engineer at GMO Pepabo in Tokyo. The site is their own home on the web.
- Recruiters and hiring managers who receive the URL alongside a CV and want to understand who this person is within a minute.
- Colleagues and friends who drop by to read posts or see what Jonny is up to.

## Product Purpose

A personal site that introduces Jonny as an engineer and holds their writing. Success means a visitor can read the career story (current role, experience, education, awards, certifications) without opening the PDF CV, and can find posts in their own language.

## Positioning

A first-person portfolio written in three languages (Korean default, English, Japanese) by someone who actually works across Korea and Japan. The content is the owner's real career record, not a template.

## Operating Context

- Content lives in the repository: CV facts in code, posts as Markdown under `content/posts/<lang>/`.
- Deployed from `main` to a self-hosted server behind Cloudflare at https://devjonny.me.
- The CV PDF (`JeEon-Park-CV.pdf`, October 2025) is the source of truth for career facts. Its phone number is not published on the site.

## Capabilities and Constraints

- Routes: `/`, `/post`, `/post/<slug>` for Korean; `/en/...` and `/jp/...` for English and Japanese.
- Stack: Next.js 15 App Router, React 19, Tailwind CSS 3, Markdown via react-markdown.
- No project showcase section: no screenshots, app-store links, or case studies exist, and the owner asked not to design around future assets (confirmed October 2026).
- No image generation or stock imagery in the redesign (confirmed October 2026).
- Drafts are visible in development only.

## Brand Commitments

- Name: "Dev/Jonny" wordmark in the header, with the slash in the accent color.
- Accent color: the existing light green (`rgb(159, 242, 151)`) on the dark `rgb(25, 25, 25)` ground stays (confirmed October 2026).
- Overall concept stays: dark theme, banner image at the top, translucent cards, timeline for career history. The owner asked for a restructure that keeps the look, not a bold new identity (confirmed October 2026).
- Typeface: IBM Plex Sans, self-hosted in `public/fonts/`.
- Voice: first person, reflective, modest. The existing intro paragraphs about "what it means to keep growing" are the owner's own words.

## Evidence on Hand

- CV facts (October 2025): profile line; experience at GMO Pepabo (Apr 2025–), Apple Developer Academy @ POSTECH (Mar–Dec 2024), freelance app development (Jul 2023–Feb 2024), GDSC Sangmyung lead (Jul 2022–Jun 2024), Republic of Korea Army IT specialist (Aug 2019–Mar 2021); education at Sangmyung University (GPA 3.94/4.5) and Kagoshima University exchange; awards NASA Space Apps Challenge 2025 President's Award and Apple Swift Student Challenge 2024 winner; certifications Engineer Information Processing, Linux Master Level 2, JLPT N2.
- Assets: `public/images/profile.jpg`, `public/images/banner.jpg`, placeholder hero images for posts.
- Absent: project screenshots, testimonials, press. Do not fabricate.

## Product Principles

1. The career record is read, not sold: structure first, decoration second.
2. Every fact on the site traces to the CV or the owner's own words.
3. All three languages are first-class; nothing is "English only".
4. Keep the owner's voice in the intro; the CV supplies facts, not tone.
5. Changes are refinements inside the existing look, not a new identity.
