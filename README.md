# Personal Portfolio

Portfolio site for a Data / Analytics Engineer — single-page, responsive, with a dark/light theme toggle.

Built with React 19, Vite 6, Tailwind CSS v4, Motion for animations, and lucide-react / react-icons for icons.

## Run locally

Requires Node.js 20+.

```bash
npm install
npm run dev
```

Opens at http://localhost:3000.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Dev server on port 3000 |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Serve the production build |
| `npm run lint` | Type-check with `tsc --noEmit` |
| `npm run clean` | Remove `dist/` |

## Structure

```
src/
  App.tsx                Page layout and section order
  constants.tsx          All content: profile links, skills, experience, education, projects
  components/
    Header.tsx           Sticky nav with active-section highlighting
    Hero.tsx             Intro, rotating role, contact buttons
    Skills.tsx           Skill categories and the technology icon map
    Competencies.tsx     Core competency cards
    TimelineSection.tsx  Shared layout for Experience and Education
    Experience.tsx       Timeline data binding
    Education.tsx        Timeline data binding
    Projects.tsx         Project cards
    SectionHeading.tsx   One heading style for every section
    Footer.tsx           Social links
    ThemeToggle.tsx      Dark/light switch
public/
  icons/                 Self-hosted technology logos
```

### Editing content

Everything you'd normally want to change lives in [`src/constants.tsx`](src/constants.tsx):

- `SITE` — name, email, GitHub, LinkedIn, and CV link. **Set a field to `""` to hide the
  corresponding button.** `cvUrl` starts empty; drop a PDF at `public/cv.pdf` and set it to
  `"/cv.pdf"` to show the download button.
- `NAV_ITEMS` — nav entries. Each `id` must match a section `id` in the markup.
- `SKILL_CATEGORIES`, `COMPETENCIES`, `EXPERIENCE`, `EDUCATION`, `PROJECTS` — page content.

To give a skill an icon, add an entry to `SKILL_ICON_MAP` in
[`src/components/Skills.tsx`](src/components/Skills.tsx) keyed by the exact skill string.
Icons scale off `1em`, so use `size="1em"` rather than a pixel size.

## Deployment

Pushes to `main` deploy automatically to Vercel; pull requests get their own preview URL.

**Theme colours** are Tailwind utilities applied inline. The accent is `blue-600` (light) /
`blue-400` (dark) — search and replace those to re-theme.

### CI

[`.github/workflows/ci.yml`](.github/workflows/ci.yml) runs `npm ci`, `npm run lint`, and
`npm run build` on every push and pull request to `main`, and uploads `dist/` as an artifact.

### First-time Vercel setup

1. Go to [vercel.com/new](https://vercel.com/new) and sign in with GitHub.
2. Import `TungNamNguyen/personal-portfolio` (grant repo access if prompted).
3. Vercel reads [`vercel.json`](vercel.json) — leave the detected settings alone and deploy.
4. Optional: add a custom domain under **Settings → Domains**.

No environment variables are required; the site is fully static.
