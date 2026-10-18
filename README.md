# DevJonny blog

Personal portfolio and blog at [devjonny.me](https://devjonny.me), built with Next.js (App Router), Tailwind CSS and Markdown.

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build
```

Posts marked `draft: true` are visible in `npm run dev` and hidden from production builds.

## Writing a post

Posts are currently switched off with `POSTS_ENABLED` in `src/lib/site.ts`. Set it to `true` to
show the Post menu, the `/post` routes and the Recent Posts section again.

Posts live in `content/posts/<lang>/YYYY-MM-DD_<slug>.md`, where `<lang>` is `kr`, `en` or `jp`.
The date prefix is stripped from the file name to produce the URL slug, so the same slug in
multiple language folders is treated as one post with translations.

```md
---
title: "Post title"
description: "One-line summary shown in the list and in meta tags"
pubDate: "2025-01-31"
heroImage: "/images/blog-placeholder-1.jpg"
draft: false
---

Markdown body...
```

## Routes

| Path | Language |
| --- | --- |
| `/`, `/post`, `/post/<slug>` | Korean (default) |
| `/en/...`, `/jp/...` | English, Japanese |

`/kr/...` permanently redirects to the unprefixed URL. Unknown language prefixes return 404.
`/sitemap.xml` and `/robots.txt` are generated at build time.

## Deployment

Pushing to `main` builds the site in GitHub Actions and deploys it to the server described in
[SERVER.md](./SERVER.md).
