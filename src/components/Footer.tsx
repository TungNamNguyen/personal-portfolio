import { ExternalLink } from "lucide-react";
import { SITE } from "../constants";
import { useLang } from "../i18n";

export default function Footer() {
  const { t, ui } = useLang();

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 py-8 sm:py-10 mt-20 sm:mt-24 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-2.5 gap-y-1 text-center sm:text-left">
          <span className="font-mono font-bold text-base tracking-tighter text-slate-900 dark:text-white">
            {SITE.name}
          </span>
          <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">
            ·
          </span>
          <span className="text-sm text-slate-600 dark:text-slate-400">
            {t(SITE.role)} @ {SITE.company}
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-center sm:justify-end gap-x-3 gap-y-1 font-mono text-xs text-slate-500 dark:text-slate-500">
          <span>© {new Date().getFullYear()} {SITE.name}</span>
          {SITE.repoUrl && (
            <>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">
                ·
              </span>
              <a
                href={SITE.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 rounded-sm text-slate-600 hover:text-blue-600 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:text-slate-400 dark:hover:text-blue-400 transition-colors"
              >
                {ui.sourceOnGithub}
                <ExternalLink size={11} aria-hidden="true" />
              </a>
            </>
          )}
        </div>
      </div>
    </footer>
  );
}
