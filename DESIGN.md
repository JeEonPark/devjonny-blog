---
name: Dev/Jonny
description: A dark, quiet personal site that reads a career record aloud in Korean, English, and Japanese.
colors:
  primary: "rgb(159, 242, 151)"
  ground: "rgb(25, 25, 25)"
  text: "rgb(220, 220, 220)"
  neutral: "rgb(180, 180, 180)"
  code-ground: "rgb(32, 32, 32)"
typography:
  display:
    fontFamily: "IBM Plex Sans, sans-serif"
    fontSize: "1.9rem"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "IBM Plex Sans, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  subhead:
    fontFamily: "IBM Plex Sans, sans-serif"
    fontSize: "1.35rem"
    fontWeight: 600
    lineHeight: 1.3
  title:
    fontFamily: "IBM Plex Sans, sans-serif"
    fontSize: "1.15rem"
    fontWeight: 600
    lineHeight: 1.375
  title-sm:
    fontFamily: "IBM Plex Sans, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 600
    lineHeight: 1.25
  body:
    fontFamily: "IBM Plex Sans, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 400
    lineHeight: 1.8
  reading:
    fontFamily: "IBM Plex Sans, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 400
    lineHeight: 1.8
  label:
    fontFamily: "IBM Plex Sans, sans-serif"
    fontSize: "0.8rem"
    fontWeight: 500
    lineHeight: 1.6
    letterSpacing: "normal"
rounded:
  sm: "4px"
  lg: "8px"
  xl: "12px"
  2xl: "16px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  section-mobile: "64px"
  section-desktop: "80px"
components:
  panel:
    backgroundColor: "rgba(255, 255, 255, 0.02)"
    textColor: "{colors.text}"
    rounded: "{rounded.2xl}"
    padding: "20px"
  panel-timeline:
    backgroundColor: "rgba(255, 255, 255, 0.02)"
    textColor: "{colors.text}"
    rounded: "{rounded.xl}"
    padding: "16px"
  post-card-title:
    textColor: "{colors.text}"
    typography: "{typography.title}"
  post-card-title-hover:
    textColor: "{colors.primary}"
    typography: "{typography.title}"
  language-pill-group:
    backgroundColor: "rgba(255, 255, 255, 0.03)"
    rounded: "{rounded.full}"
    padding: "4px"
  language-pill-current:
    backgroundColor: "rgba(159, 242, 151, 0.15)"
    textColor: "{colors.primary}"
    rounded: "{rounded.full}"
    padding: "8px 16px"
  language-pill:
    textColor: "{colors.neutral}"
    rounded: "{rounded.full}"
    padding: "8px 16px"
  nav-link:
    textColor: "{colors.text}"
    padding: "8px 12px"
  nav-link-active:
    textColor: "{colors.primary}"
    padding: "8px 12px"
  chip-draft:
    backgroundColor: "rgba(159, 242, 151, 0.15)"
    textColor: "{colors.primary}"
    rounded: "{rounded.sm}"
    padding: "2px 8px"
  code-inline:
    backgroundColor: "rgba(159, 242, 151, 0.15)"
    textColor: "{colors.primary}"
    rounded: "{rounded.sm}"
    padding: "2px 6px"
  code-block:
    backgroundColor: "{colors.code-ground}"
    rounded: "{rounded.lg}"
    padding: "16px"
---

# Design System: Dev/Jonny

## Overview

**Creative North Star: "The Lit Desk at Night"**

The whole site sits on one near-black ground, the way a desk lamp leaves the rest of the room dark. Nothing on the page competes with the text; the only colour that is allowed to glow is a single light green, and it glows on exactly the things a reader scans for: dates, the slash in the wordmark, links, the timeline rail, and the marker of the job that is still running. Everything else is grey text in three tones on a ground that barely changes.

Density is editorial rather than dashboard-like. Every page opens with the same dimmed banner band and a 720px column; on the home page the career record is paced by alternating three materials down the scroll: a translucent panel (About, Awards, timeline entries), a glowing rail (Experience), and bare hairline rows (Education, Certifications, Recent Posts). The post index and post detail pages widen the column below the banner for images and prose but keep the same ground, hairlines, and accent. The build confirmed two rejections: no typing headline or gradient text in the first viewport, and no generated or stock imagery beyond the existing banner, profile photo, and post placeholders.

The site is trilingual by construction. Korean is the default, English and Japanese are peers at `/en` and `/jp`, and the type rules know the difference: Korean keeps words whole with `keep-all`, while English and Japanese fall back to normal breaking because Japanese has no spaces to break at.

**Key Characteristics:**
- One accent colour, used sparingly, on scan targets only.
- Translucent white-on-black surfaces at 2% to 3% with hairline borders at 5% to 8%.
- IBM Plex Sans at four self-hosted weights (400, 500, 600, 700) for everything; no second face.
- A shared 240px / 300px banner band and a 720px reading column with 64px to 80px section rhythm.
- Entrance motion limited to one short rise on the home identity block; everything else moves only on hover.

## Colors

A monochrome dark palette with one phosphor green that reads as light rather than paint.

### Primary
- **Phosphor Green** (`{colors.primary}`): dates and periods, the slash in "Dev/Jonny", inline links and their hover state, the Experience rail, the current-language pill, inline code, the draft chip, and the 404 numeral. It also tints browser chrome: selection at 28%, focus rings at 80%, the scrollbar thumb at 30% to 50%. The 12% to 20% tints are used only as fills behind green text or icons.

### Neutral
- **Lamp-Off Black** (`{colors.ground}`): the body background, the 4px ring around the profile photo, the 3px ring around timeline markers, the bottom of the banner gradient, and the scrolled header at 85% with a 12px blur.
- **Reading Grey** (`{colors.text}`): default text, including banner titles. Secondary copy reuses it at 90%, 80%, 75%, and 70% opacity rather than switching to a new grey.
- **Caption Grey** (`{colors.neutral}`): nicknames, end dates, bullet details, post metadata, footer text, and inactive language pills.
- **Code Ground** (`{colors.code-ground}`): the only lifted solid surface, used under fenced code blocks in posts.
- **White Hairlines** (inline, not tokens): `rgba(255,255,255,0.02)` panel fill, `0.03` pill-group and image placeholder fill, `0.05` panel border, `0.06` header and footer and mobile-menu borders, `0.08` list-row dividers, `0.10` code-block border and markdown rules.

### Named Rules
**The One Glow Rule.** Phosphor green is text and thin lines, never a filled block. Fills behind it stay at or below 20% alpha and always carry green text or a green icon on top.

**The Opacity Not Palette Rule.** Hierarchy inside body copy is made by lowering the opacity of Reading Grey (90, 80, 75, 70), not by introducing a new grey. The palette is exactly four custom properties plus the code ground.

## Typography

**Display Font:** IBM Plex Sans (with sans-serif fallback), self-hosted in `public/fonts/` at 400, 500, 600, and 700
**Body Font:** IBM Plex Sans (same face)
**Label/Mono Font:** the browser monospace stack for inline code; highlight.js GitHub Dark for code blocks

**Character:** One humanist grotesk for everything, set in a narrow weight band. Names, page titles, and headings are semibold with slightly tightened tracking; body is regular with generous 1.8 leading so Korean and Japanese breathe. Weight 700 survives only in the 404 numeral and markdown `strong` is semibold. Nothing is set in uppercase except the small Draft chip.

### Hierarchy
Every step is given as mobile / desktop (`md`, 768px).

- **Display** (600, 1.9rem / 2.25rem, 1.15, -0.02em): the owner's name on the home page and the "Posts" title in the post index banner.
- **Headline** (600, 1.5rem / 1.8rem, 1.3, -0.01em): home section headings, and the first-level heading inside post markdown. The post detail banner title sits between Display and Headline at 1.6rem / 2rem, 1.2 leading, -0.02em.
- **Subhead** (600, 1.35rem / 1.6rem): second-level headings inside post markdown; third-level headings step to 1.15rem / 1.3rem.
- **Title** (600, 1.15rem / 1.25rem, 1.375): post card titles in the index and award titles (1.05rem / 1.15rem) on the home page.
- **Title small** (600, 0.95rem to 1.1rem, 1.25): organisation, institution, and recent-post titles inside panels and rows. The nickname beside the name drops to 400 and Caption Grey.
- **Body** (400, 0.9rem / 1rem, 1.75 to 1.85): About paragraphs and the profile line, capped at 64ch. The first About paragraph is semibold as a lede. Post card descriptions use 0.95rem at 75%.
- **Reading** (400, 1.05rem / 1.1rem, 1.8): post prose, lists, and blockquotes inside the markdown column.
- **Label** (500, 0.75rem to 0.9rem, tabular numerals): dates, periods, and month labels in Phosphor Green; end dates and post metadata in Caption Grey at 400.

### Named Rules
**The Keep-All Rule.** Korean text carries `word-break: keep-all` (`break-keep`) so words never split mid-syllable. The same class under an `en` or `ja` `lang` attribute resolves to normal breaking with `overflow-wrap: anywhere`, because Japanese has no spaces and would otherwise refuse to wrap.

**The Tabular Date Rule.** Every date, period, GPA, reading time, and month label is set with tabular numerals so the left column of the timeline and hairline rows stays aligned.

**The Banner Leads Rule.** Inside a post, no markdown heading may exceed the banner title. Markdown steps down from 1.8rem so the title the reader arrived under stays the largest text on the page.

## Layout

Every page opens with the same full-bleed banner band, 240px tall on mobile and 300px on desktop: the banner photo at 40% opacity under a gradient from black at 30% through 10% to the ground colour. On the home page the profile photo (88px / 112px) is pulled up by 48px / 56px so it straddles the band's bottom edge. On post pages the band holds the page title and a subtitle line, bottom-aligned and left-aligned inside the 720px column with 40px / 48px of bottom padding.

Below the band, the home page and 404 use a single centred column of 720px with 16px side padding on mobile and 24px from `md`. The post index widens to Tailwind's `max-w-6xl` (1152px) for a one, two, three column card grid at `sm` and `md`; the post detail uses `max-w-4xl` (896px) for the hero image and prose. These widths are inline utilities, not named tokens.

Section rhythm on the home page is 64px on mobile and 80px on desktop between sections, with 24px / 32px between a heading and its content. Inside panels the padding is 20px on mobile and 24px to 32px on desktop. Timeline entries stack at 20px / 24px; award cards sit in a two-column grid at `md` with 16px / 20px gaps. Hairline rows use a two-column grid with a fixed 96px (mobile) or 180px (desktop) date column and 16px / 32px gap, 20px to 24px of vertical padding per row. Post cards sit in a grid with 32px / 24px column gaps and 64px / 56px row gaps. Inside markdown, headings carry 40px above (32px for third level) and 16px below; paragraphs carry 24px below.

The header is fixed, 75px tall, transparent over the banner, and gains the 85% ground with blur once the page has scrolled 20px. Desktop navigation is centred absolutely; on mobile it collapses into a hamburger that opens a full-width dropdown.

## Elevation & Depth

Depth is tonal, not lifted. Surfaces are white at 2% to 3% over the ground with a 12px backdrop blur and a 5% to 8% hairline; the resulting edge is what separates a card from the page. Shadows exist but are soft and barely visible: a `0 4px 20px rgba(0,0,0,0.08)` wash under panels, `0 4px 20px rgba(0,0,0,0.10)` under the language pill group, and a deeper `0 12px 32px rgba(0,0,0,0.35)` under the profile photo, which is the one element meant to sit forward of the banner.

### Shadow Vocabulary
- **Panel wash** (`box-shadow: 0 4px 20px rgba(0,0,0,0.08)`): every translucent panel on the home page.
- **Pill wash** (`box-shadow: 0 4px 20px rgba(0,0,0,0.10)`): the language selector group.
- **Portrait lift** (`box-shadow: 0 12px 32px rgba(0,0,0,0.35)`): the profile photo only.
- **Marker ring** (`box-shadow: 0 0 0 2px rgba(159,242,151,0.3)`): finished timeline entries.
- **Ongoing halo** (`box-shadow: 0 0 0 3px rgba(159,242,151,0.6), 0 0 18px 4px rgba(159,242,151,0.25)`): the one timeline entry with no end date.
- **Header settle** (`box-shadow: 0 1px 3px rgba(0,0,0,0.1), 0 4px 12px rgba(0,0,0,0.08)`): the fixed header after scroll.

### Named Rules
**The Halo Is State Rule.** Green glow appears only on the ongoing timeline marker. It signals "still happening"; it is never decoration on cards, buttons, or headings.

**The Hover Is a Border Rule.** Panels respond to hover by warming their border to green at 30% over 300ms. They do not lift, scale, or change fill. Post card images are the one exception: they zoom 3% over 500ms inside their clipped 8px frame.

## Shapes

Corners are soft and sized to the element. Large panels (About, Awards) are 16px; timeline entry panels are 12px; images, icon tiles, code blocks, and header buttons are 8px; chips and inline code are 4px, which is also the focus-ring radius. The profile photo, timeline markers, language pills, and scrollbar thumb are fully round. Borders are 1px hairlines everywhere except the 4px ground-coloured ring on the portrait and the 3px ring on timeline markers. The Experience rail is a 2px vertical gradient from green at 70% to 5%, and blockquotes carry a 1px left rule in green at 70%. Post images are clipped at 9:5 in the index and 16:9 in the detail, both with an 8px radius over a 3% white placeholder.

## Components

### Banner Band
- **Shape:** full-bleed, 240px / 300px tall, image at 40% under the black-to-ground gradient, content column 720px.
- **Home:** empty band; the identity block below overlaps its bottom edge.
- **Post pages:** title in Reading Grey (Display on the index, 1.6rem / 2rem on the detail) with a subtitle or date line at 80%, left-aligned and bottom-aligned. The draft chip may sit inline after the date.

### Navigation
- **Header:** fixed 75px bar, transparent over the banner, then `rgba(25,25,25,0.85)` with 12px blur, a 6% hairline, and the header-settle shadow after 20px of scroll. Wordmark "Dev/Jonny" at 20px medium, slash in Phosphor Green.
- **Links:** Reading Grey, 8px by 12px padding, hover and active in Phosphor Green over 200ms; active is also `aria-current="page"`. No underline.
- **Mobile:** 40px hamburger with three 2px lines that fold into an X; dropdown at `rgba(25,25,25,0.98)` with a 6% bottom hairline, rows of 1rem text with a faint chevron that nudges right on hover.
- **Footer:** 6% top hairline, 0.85rem Caption Grey, wordmark left, email and GitHub right, then copyright and the three language names with the current one in Reading Grey.

### Language Selector
- **Shape:** a fully round pill group, 4px padding, `rgba(255,255,255,0.03)` fill, 8% hairline, pill wash shadow.
- **Current:** green at 15% fill, Phosphor Green text, scaled 105%.
- **Others:** Caption Grey at 70% opacity; hover lifts to Reading Grey over an 8% white fill and a faint green gradient, 300ms.
- **Placement:** left-aligned under the contact row on home; centred under the banner on post pages. Each link carries `hrefLang` and an `aria-label` in the language's own name.

### Panels (Cards / Containers)
- **Corner Style:** 16px for About and Awards, 12px for timeline entries.
- **Background:** `rgba(255,255,255,0.02)` with 12px backdrop blur.
- **Shadow Strategy:** panel wash only; see Elevation.
- **Border:** 1px at `rgba(255,255,255,0.05)`; hover shifts to green at 30%.
- **Internal Padding:** 20px mobile, 24px to 32px desktop.

### Post Cards
- **Style:** no panel; a clipped 9:5 image at 8px radius, then 24px of space, an optional draft chip, a Title (1.15rem / 1.25rem semibold, clamped to two lines), a description at 0.95rem and 75% clamped to three lines, and a metadata line of date and reading time in Caption Grey at 0.8rem with tabular numerals.
- **Hover:** the whole card is the link; the title turns green and the image zooms 3%.

### Hairline Rows
- **Style:** a list bounded above and below by an 8% hairline, rows divided by the same line, no fill and no radius.
- **Grid:** date column of 96px / 180px in Label green (Caption Grey for post dates), content column with a Title small and one or two lines of secondary copy at 80% and 70%.
- **Hover:** on post rows the whole row is the link and the title turns green.

### Chips
- **Draft chip:** 0.7rem, medium, uppercase, wide tracking, green at 15% fill (20% inside the banner), 4px radius. The only uppercase text on the site.
- **Inline code:** 0.9em monospace, green at 15% fill, green text, 4px radius.

### Buttons
The site has no filled buttons. Every action is a text link in Phosphor Green with underline on hover, or a nav link that turns green. Icon-only targets (GitHub, hamburger) are 32px to 40px squares with an 8px radius and a 5% white hover fill.

### Inputs / Fields
None exist. If one is added, the focus treatment is already global: a 2px Phosphor Green outline at 80%, offset 3px, 4px radius.

### Markdown Prose
Reading-size paragraphs and lists at 90%, headings in the Headline, Subhead, and third-level steps, 1px green blockquote rule, code blocks on Code Ground with a 10% hairline and 8px radius, tables with 20% header rules and 10% row rules, images at 8px radius, and a 10% horizontal rule. Links are Phosphor Green with underline on hover; external links open in a new tab.

### Experience Timeline (signature)
A 2px gradient rail runs down the left, from green at 70% to 5% so it fades out at the oldest entry. Each entry has a right-aligned period column (start in green, end in Caption Grey, tabular, stacked on mobile and inline on desktop), a 12px / 14px round marker filled green with a 3px ground ring, and a 12px panel. Finished entries wear the 2px marker ring; the ongoing entry wears the halo. Inside the panel, a 32px icon tile at green 12% holds a Material Icons glyph in green, followed by the organisation title, the role at 80%, and bullet details in Caption Grey with green markers at 60%.

### Identity Block (signature)
The portrait straddles the banner edge, followed by the name with a lighter nickname, a green role line, the profile paragraph at 64ch, and a contact row of email and GitHub as plain icon-and-text links. The three parts enter with the `rise` animation (14px up, 0.7s, `cubic-bezier(0.16,1,0.3,1)`) staggered by 80ms, and the animation is removed under `prefers-reduced-motion`.

## Do's and Don'ts

### Do:
- **Do** keep every new surface on the `rgb(25,25,25)` ground and build hierarchy with Reading Grey opacity steps (90, 80, 75, 70) and Caption Grey.
- **Do** open every page with the shared banner band: 240px / 300px, image at 40%, black-to-ground gradient, content inside the 720px column.
- **Do** make panels from `rgba(255,255,255,0.02)` fill, 12px blur, a 5% hairline, and the panel wash shadow; hover warms the border to green at 30%.
- **Do** set dates, periods, and reading times in tabular numerals; dates and periods in Phosphor Green at weight 500, metadata in Caption Grey.
- **Do** keep `break-keep` on Korean-facing headings and copy, and rely on the `lang` attribute to relax it for English and Japanese.
- **Do** ship every text in all three languages; the language selector and footer always list KR, EN, and JP.
- **Do** respect `prefers-reduced-motion`: any new entrance animation must switch off the way `rise` does.

### Don't:
- **Don't** fill a block with Phosphor Green or put dark text on it; green is for text, hairlines, and tints at 20% or below.
- **Don't** add a gradient headline, typing effect, or splash hero; the first viewport is the banner band with the portrait, name, role, and contact row, or the page title on post pages.
- **Don't** introduce a second typeface or a weight outside 400 to 700; only those four Plex files ship.
- **Don't** let a markdown heading outgrow the banner title; the ramp inside a post starts at 1.8rem.
- **Don't** add generated, stock, or placeholder imagery beyond the existing banner, portrait, and post hero images.
- **Don't** lift cards with heavy or offset shadows; depth on this site is a hairline and a faint wash.
- **Don't** add a new custom property for a grey; reuse Reading Grey at an opacity step or Caption Grey.
