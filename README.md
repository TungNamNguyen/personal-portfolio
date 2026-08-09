# Personal Portfolio

Personal portfolio site for Tung Nguyen, a Data / Analytics Engineer.

A single static page that collects the things a recruiter or hiring manager
usually has to hunt for across several tabs: a short intro, technical skills,
work experience, education, side projects, and a recommendation. It is
responsive down to mobile and ships a dark/light theme toggle that remembers
the choice between visits.

All page content is data, not markup — it lives in
[`src/constants.tsx`](src/constants.tsx), so updating the site means editing an
array rather than touching a component.

## Stack

| | |
| --- | --- |
| React 19 | UI |
| Vite 6 | Dev server and build |
| TypeScript 5.8 | Type checking (`tsc --noEmit`, no emit — Vite compiles) |
| Tailwind CSS v4 | Styling, via `@tailwindcss/vite` |
| Motion 12 | Entrance and hover animations |
| lucide-react + unplugin-icons | Icons, all self-hosted at build time |

No backend, no environment variables, no runtime data fetching — the build
output is plain static files.

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
