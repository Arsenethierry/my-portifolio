# Arsene Thierry Komezudufashe — Portfolio

Personal portfolio at <https://arsenethierry-dev.vercel.app>. Next.js 12 (pages router), React 17, Tailwind CSS 3. The homepage is statically generated; the only client-side state is the mobile menu.

## Commands

```bash
pnpm install
pnpm dev         # local development
pnpm lint        # ESLint (next/core-web-vitals)
pnpm typecheck   # tsc --noEmit
pnpm build       # production build (also lints and type-checks)
```

## Updating content

All career, skills, and project content lives in [`shared/data/profile.ts`](shared/data/profile.ts). Components only render it.

- The resume PDF at `public/Arsene Dev Resume.pdf` is the source of truth. When it changes, update `profile.ts` to match: titles, dates, bullets, skills, education.
- Every resume link goes through `shared/components/resume-link.tsx`. To publish a new file, change `profile.resume.href` only.
- Selected work entries are in `engagements`. Set `published: false` to keep an entry without showing it.
- After adding a new page, update `public/sitemap.xml`.

## Layout

```
pages/                 index (homepage), 404, _document
components/home/       hero, strengths, selected-work, career, contact
shared/components/     navbar, footer, resume-link, icons
shared/data/profile.ts content source
shared/utils/          types, SEO tags (+ Person JSON-LD)
```
