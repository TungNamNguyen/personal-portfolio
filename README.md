# Personal Portfolio

Portfolio site for a Data / Analytics Engineer — single-page, responsive, with a dark/light theme toggle.

Built with React 19, Vite 6, Tailwind CSS v4, Motion for animations, and lucide-react for icons.

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
  App.tsx          Page layout and section order
  constants.tsx    All content: skills, experience, education, projects
  components/      Header, Hero, Skills, Competencies, Experience,
                   Education, Projects, Footer, ThemeToggle
```

Edit `src/constants.tsx` to change the content — the components render from it.

## Notes

No API keys or environment variables are needed; the site is fully static. `.env.example` and the
`GEMINI_API_KEY` wiring in `vite.config.ts` are leftovers from the project scaffold and are unused.
