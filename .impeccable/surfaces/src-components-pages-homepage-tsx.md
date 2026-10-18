---
version: 1
slug: "src-components-pages-homepage-tsx"
primary_target: "src/components/pages/HomePage.tsx"
related_targets: ["src/app/page.tsx","src/app/[lang]/page.tsx"]
---

# Surface: Home (`/`, `/en`, `/jp`)

Scope: the home page in all three languages. Visitor mode: Read. The recruiter, colleague, or friend wants to understand who Jonny is and what they have done; the page is read, not sold.

Audience and job: recruiters receiving the URL next to the CV; colleagues and friends dropping by. Content: the CV (October 2025) plus the owner's existing first-person intro. Constraints: keep the dark ground, green accent, banner image, translucent cards, and timeline; no imagery beyond the existing profile photo and banner; no project section; phone number never shown.

## Direction contract

THESIS: The home page is the CV made readable: one scroll tells the career story in the owner's own voice. It refuses the "welcome to my space" splash hero and the single undifferentiated timeline that mixes jobs, schools, and clubs.

OWN-WORLD: Inherited. Ground rgb(25,25,25); text rgb(220,220,220); accent rgb(159,242,151) used for dates, the wordmark slash, links, and the timeline rail; translucent white-2% cards with 5% hairline borders; IBM Plex Sans throughout; Material Icons for timeline markers. Section rhythm alternates card, rail, and bare hairline rows so the scroll is paced, not stacked.

STORY: The visitor learns in the first viewport who this is, what they do now, and how to reach them; then reads why they write (About), what they have done (Experience), where they studied (Education), what they were recognized for (Awards), and what they hold (Certifications); and, when posts exist, finds the latest writing.

FIRST VIEWPORT: The banner stays as the top band, darker than before. The profile photo (112px desktop, 88px mobile) straddles the banner's bottom edge. Below it, left-aligned within the 720px column: name in 2.25rem semibold, "Mobile Engineer · GMO Pepabo" line in accent, the CV profile paragraph, and a contact row of email and GitHub as plain text links. The language selector sits under that row. No typing headline, no gradient text.

FORM: Extension of the established surface; no concept tournament and no seed key (user pinned the existing concept and color, October 2026). Code-led; no comps.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.
