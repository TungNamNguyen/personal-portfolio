import { useState } from "react";
import { Moon, Sun } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { useLang } from "../i18n";

/** Reads the class the inline script in index.html already applied. */
function getInitialTheme() {
  if (typeof document === "undefined") return false;
  return document.documentElement.classList.contains("dark");
}

/*
  This used to be a 64x32 pill holding a small day/night landscape — sky, ground
  and a sun that slid across to a moon. It was the only illustration on the page,
  and it sat in the sticky header next to the language control, so the two read
  as mismatched: one utility drawn as a picture, one drawn as a control. Colour
  in the header now belongs to the active nav link alone.

  What replaced it borrows the language control's shape exactly — same height,
  same corner, same hairline ring, same hover — so the pair reads as one set. The
  icon names the mode you are one click away from, which is the convention an
  icon button carries; the switch role and aria-checked state the mode you are
  actually in, so nothing is left to inference.
*/
export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(getInitialTheme);
  const reduceMotion = useReducedMotion();
  const { ui } = useLang();

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    document.documentElement.classList.toggle("dark", newDark);
    localStorage.setItem("theme", newDark ? "dark" : "light");
  };

  const Icon = isDark ? Sun : Moon;

  return (
    <button
      onClick={toggleTheme}
      role="switch"
      aria-checked={isDark}
      aria-label={ui.darkMode}
      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-slate-600 ring-1 ring-slate-900/10 transition-colors hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:text-slate-300 dark:ring-white/15 dark:hover:bg-slate-800 dark:hover:text-white dark:focus-visible:ring-offset-slate-900"
    >
      {/*
        Keyed on the mode, so React swaps the element and the entrance replays.
        No exit half is wanted here — one icon leaving as another arrives reads
        as a stutter on a control this small.
      */}
      <motion.span
        key={isDark ? "sun" : "moon"}
        initial={reduceMotion ? false : { opacity: 0, rotate: -90, scale: 0.5 }}
        animate={{ opacity: 1, rotate: 0, scale: 1 }}
        transition={{ duration: reduceMotion ? 0 : 0.2, ease: "easeOut" }}
        className="flex"
      >
        <Icon size={16} aria-hidden="true" />
      </motion.span>
    </button>
  );
}
