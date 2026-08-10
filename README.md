# Personal Portfolio

Personal portfolio site for Tung Nguyen, a Data / Analytics Engineer.

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

## Structure

```
index.html               Inline theme bootstrap, runs before first paint
src/
  main.tsx               React entry point
  index.css              Tailwind import and base styles
  constants.tsx          All page content: profile, skills, experience,
                         education, projects, recommendations
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
    BackToTop.tsx        Scroll-to-top button
public/
  icons/                 Self-hosted company, school and technology logos
```
