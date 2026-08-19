import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown, Globe } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useLang } from "../i18n";
import type { Lang } from "../i18n";

/** Each language names itself, which is the one label its own speakers can read. */
const OPTIONS: { code: Lang; name: string }[] = [
  { code: "en", name: "English" },
  { code: "vi", name: "Tiếng Việt" }
];

export default function LanguageToggle() {
  const { lang, setLang, ui } = useLang();
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const current = OPTIONS.find((option) => option.code === lang) ?? OPTIONS[0];

  // Escape to close and pointer-down outside to dismiss — the same pair the
  // mobile nav in Header.tsx uses, so the two menus behave identically.
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      triggerRef.current?.focus();
    };

    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  // Without this the panel is unreachable by keyboard: Tab from the trigger
  // would skip it and land on the next header control instead.
  useEffect(() => {
    if (!open) return;
    menuRef.current?.querySelector<HTMLButtonElement>('[aria-checked="true"]')?.focus();
  }, [open]);

  const choose = (code: Lang) => {
    setLang(code);
    setOpen(false);
    triggerRef.current?.focus();
  };

  return (
    <div ref={rootRef} className="relative shrink-0">
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen((isOpen) => !isOpen)}
        aria-haspopup="true"
        aria-expanded={open}
        /*
          Names the control and states what it currently reads, which is what
          the label beside the globe says — and that label is hidden on narrow
          screens, where otherwise nothing would announce the current language.
        */
        aria-label={`${ui.language}: ${current.name}`}
        className="flex h-8 items-center gap-1.5 rounded-lg px-2 text-sm font-medium text-slate-600 ring-1 ring-slate-900/10 transition-colors hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:text-slate-300 dark:ring-white/15 dark:hover:bg-slate-800 dark:hover:text-white dark:focus-visible:ring-offset-slate-900"
      >
        <Globe size={16} aria-hidden="true" className="shrink-0" />
        {/* Dropped below `sm`, where the header already carries three controls. */}
        <span className="hidden sm:inline">{current.name}</span>
        <ChevronDown
          size={14}
          aria-hidden="true"
          className={`shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            ref={menuRef}
            role="menu"
            aria-label={ui.language}
            initial={reduceMotion ? false : { opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -4 }}
            transition={{ duration: reduceMotion ? 0 : 0.15 }}
            className="absolute right-0 top-full z-50 mt-2 min-w-44 rounded-xl border border-slate-200 bg-white p-1 shadow-lg dark:border-slate-700 dark:bg-slate-800 dark:shadow-black/40"
          >
            {OPTIONS.map((option) => {
              const selected = option.code === lang;
              return (
                <button
                  key={option.code}
                  type="button"
                  // So a screen reader pronounces "Tiếng Việt" as Vietnamese
                  // even while the page around it is in English.
                  lang={option.code}
                  role="menuitemradio"
                  aria-checked={selected}
                  onClick={() => choose(option.code)}
                  className={`flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2 text-left text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                    selected
                      ? "bg-slate-100 font-semibold text-slate-900 dark:bg-slate-700 dark:text-white"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-700/50 dark:hover:text-white"
                  }`}
                >
                  {option.name}
                  {selected && (
                    <Check
                      size={15}
                      aria-hidden="true"
                      className="shrink-0 text-blue-600 dark:text-blue-400"
                    />
                  )}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
