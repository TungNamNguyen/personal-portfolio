# Personal Portfolio

Personal portfolio site for Tung Nguyen, a Data / Analytics Engineer.
Bilingual: English and Vietnamese, switchable from the header.

## Stack

| | |
| --- | --- |
| React 19 | UI |
| Vite 6 | Dev server and build |
| TypeScript 5.8 | Type checking (`tsc --noEmit`, no emit — Vite compiles) |
| Tailwind CSS v4 | Styling, via `@tailwindcss/vite` |
| Motion 12 | Entrance and hover animations |
| lucide-react + unplugin-icons | Icons, all self-hosted at build time |

## Run locally

Requires Node.js 20 or newer.

```bash
npm install
npm run dev
```

Opens at <http://localhost:3000>.

| Command | Description |
| --- | --- |
| `npm run dev` | Dev server on port 3000 |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Serve the production build |
| `npm run lint` | Type-check with `tsc --noEmit` |
| `npm run clean` | Remove `dist/` |

## Content in two languages

Anything a reader sees is a `Text` (see `src/i18n.tsx`): either a plain string,
when both languages say the same thing — names, brands, product names, figures —
or an `{ en, vi }` pair when it has to be translated.

```ts
subtitle: "VPBank",
title: { en: "Data Engineer", vi: "Kỹ sư Dữ liệu" },
```

TypeScript rejects a pair that is missing a language, so a new entry cannot ship
half-translated. Section names live in the `UI` dictionary in `src/i18n.tsx`,
which both the nav and the headings read from.

The Vietnamese side is written as Vietnamese, not mapped word for word off the
English — vocabulary the field actually uses in English (pipeline, dashboard,
schema) stays in English.

The LinkedIn recommendation is quoted verbatim in English and translated for the
Vietnamese view, which labels itself as a translation.

## Structure

```
index.html               Inline theme bootstrap, runs before first paint
src/
  main.tsx               React entry point
  index.css              Tailwind import and base styles
  constants.tsx          All page content: profile, skills, experience,
                         education, projects, recommendations
  i18n.tsx               Language context, interface strings and the `Text`
                         type that page content is written in
  App.tsx                Page layout and section order
  components/
    Header.tsx           Sticky nav with active-section highlighting
    Hero.tsx             Intro, contact and resume buttons
    Skills.tsx           Skill categories and the technology icon map
    TimelineSection.tsx  Shared layout for Experience and Education
    Experience.tsx       Timeline data binding
    Education.tsx        Timeline data binding
    Projects.tsx         Project cards
    Recommendations.tsx  Quoted LinkedIn recommendations
    SectionHeading.tsx   One heading style for every section
    Footer.tsx           Contact and social links
    ThemeToggle.tsx      Dark/light switch
    LanguageToggle.tsx   English/Vietnamese switch
    BackToTop.tsx        Scroll-to-top button
public/
  icons/                 Self-hosted company, school and technology logos
```
