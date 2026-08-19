import SiGithub from "~icons/simple-icons/github";
import FaLinkedin from "~icons/simple-icons/linkedin";
import SiTableau from "~icons/simple-icons/tableau";
import { SITE } from "../constants";
import { useLang } from "../i18n";

const iconLink =
  "rounded-sm hover:text-slate-900 dark:hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900";

export default function Footer() {
  const { t } = useLang();
  // Same reason as the hero: an { en: "", vi: "" } pair is truthy until resolved.
  const openTo = t(SITE.openTo);

  return (
    <footer className="border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 py-10 sm:py-12 mt-20 sm:mt-24 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <div className="font-mono font-bold text-lg tracking-tighter text-slate-900 dark:text-white">
              {SITE.name}
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">{t(SITE.role)}</p>
          </div>

          {/*
            The closing call to action. `openTo` is a claim about Tung's own
            availability, so it stays opt-in — the line simply does not render
            until constants.tsx carries a string. The address is spelled out
            rather than hidden behind an icon so it can be copied at a glance.
          */}
          <div className="flex flex-col items-center gap-1 text-center">
            {openTo && (
              <p className="text-sm font-medium text-slate-900 dark:text-white">{openTo}</p>
            )}
            <a
              href={`mailto:${SITE.email}`}
              className="rounded-sm font-mono text-sm text-blue-600 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:text-blue-400 dark:focus-visible:ring-offset-slate-900"
            >
              {SITE.email}
            </a>
          </div>

          <div className="flex gap-5 text-slate-600 dark:text-slate-400">
            <a
              href={SITE.github}
              target="_blank"
              rel="noopener noreferrer"
              className={iconLink}
              aria-label="GitHub"
            >
              <SiGithub width={20} height={20} />
            </a>
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={iconLink}
              aria-label="LinkedIn"
            >
              <FaLinkedin width={20} height={20} />
            </a>
            <a
              href={SITE.tableau}
              target="_blank"
              rel="noopener noreferrer"
              className={iconLink}
              aria-label="Tableau Public"
            >
              <SiTableau width={20} height={20} />
            </a>
          </div>
        </div>

        <p className="mt-8 text-center font-mono text-xs text-slate-500 dark:text-slate-500">
          © {new Date().getFullYear()} {SITE.name}
        </p>
      </div>
    </footer>
  );
}
