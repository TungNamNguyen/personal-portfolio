import { useLang } from "../i18n";
import type { Lang } from "../i18n";

/*
  A segmented pair rather than a single button that swaps its own label. With
  two languages a swap-button is ambiguous — "VI" could mean the current state
  or the thing it would switch to — and one of the two readings is always wrong.
  Showing both, with one clearly selected, has no such reading.
*/
const OPTIONS: { code: Lang; short: string; name: string }[] = [
  { code: "en", short: "EN", name: "English" },
  { code: "vi", short: "VI", name: "Tiếng Việt" }
];

export default function LanguageToggle() {
  const { lang, setLang, ui } = useLang();

  return (
    <div
      role="group"
      aria-label={ui.language}
      // Same 32px height as the theme switch beside it, and the same hairline
      // ring, so the two read as one cluster of controls.
      className="flex h-8 shrink-0 items-center gap-0.5 rounded-full p-0.5 ring-1 ring-slate-900/10 dark:ring-white/15"
    >
      {OPTIONS.map((option) => {
        const selected = option.code === lang;
        return (
          <button
            key={option.code}
            type="button"
            lang={option.code}
            onClick={() => setLang(option.code)}
            aria-pressed={selected}
            title={option.name}
            className={`h-7 rounded-full px-2.5 font-mono text-xs font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900 ${
              selected
                ? "bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900"
                : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
            }`}
          >
            {option.short}
          </button>
        );
      })}
    </div>
  );
}
