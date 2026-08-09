import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";

/** Reads the class the inline script in index.html already applied. */
function getInitialTheme() {
  if (typeof document === "undefined") return false;
  return document.documentElement.classList.contains("dark");
}

/*
  The switch holds a landscape rather than a pair of icons, so the two states
  read as times of day instead of as an abstract on/off.

  It is deliberately quiet. This is the only illustration on an otherwise flat,
  slate-and-blue page, and it lives in a sticky header — a loud version wins a
  competition for attention that a utility control should not enter. So: no
  clouds, no trees, no saturated greens. Just sky, ground and the one body of
  light, in hues taken from the page's own palette.

  Both scenes are drawn on the same 72x36 grid and cross-faded, which keeps the
  horizon from jumping as they swap.
*/
function Star({ x, y, r, o }: { x: number; y: number; r: number; o: number }) {
  return <circle cx={x} cy={y} r={r} fill="#E2E8F0" opacity={o} />;
}

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(getInitialTheme);
  const reduceMotion = useReducedMotion();

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    document.documentElement.classList.toggle("dark", newDark);
    localStorage.setItem("theme", newDark ? "dark" : "light");
  };

  const slide = reduceMotion
    ? { duration: 0 }
    : { type: "spring" as const, stiffness: 420, damping: 34 };
  const fade = { duration: reduceMotion ? 0 : 0.35 };

  return (
    <button
      onClick={toggleTheme}
      role="switch"
      aria-checked={isDark}
      aria-label="Dark mode"
      className="relative h-8 w-16 shrink-0 overflow-hidden rounded-full ring-1 ring-slate-900/10 transition-shadow hover:shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:ring-white/15 dark:focus-visible:ring-offset-slate-900"
    >
      {/* Daytime: a pale sky over a soft rise, both drawn from the site's blues. */}
      <motion.svg
        aria-hidden="true"
        viewBox="0 0 64 32"
        animate={{ opacity: isDark ? 0 : 1 }}
        transition={fade}
        className="absolute inset-0 h-full w-full"
      >
        <defs>
          <linearGradient id="tt-sky-day" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#BFDBFE" />
            <stop offset="1" stopColor="#E8F1FB" />
          </linearGradient>
        </defs>
        <rect width="64" height="32" fill="url(#tt-sky-day)" />
        <path d="M0 25c11-5 22 1 32 1s21-6 32-1v7H0Z" fill="#CBD9EA" />
      </motion.svg>

      {/* Night: the same rise, with the page's slate on top and a low afterglow. */}
      <motion.svg
        aria-hidden="true"
        viewBox="0 0 64 32"
        animate={{ opacity: isDark ? 1 : 0 }}
        transition={fade}
        className="absolute inset-0 h-full w-full"
      >
        <defs>
          <linearGradient id="tt-sky-night" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#0B1120" />
            <stop offset="1" stopColor="#2A3357" />
          </linearGradient>
        </defs>
        <rect width="64" height="32" fill="url(#tt-sky-night)" />

        <Star x={8} y={8} r={0.6} o={0.8} />
        <Star x={16} y={5} r={0.45} o={0.55} />
        <Star x={13} y={14} r={0.4} o={0.45} />
        <Star x={23} y={9} r={0.5} o={0.65} />

        <path d="M0 25c11-5 22 1 32 1s21-6 32-1v7H0Z" fill="#111A2E" />
      </motion.svg>

      {/* Sun / moon. Travels 4 -> 36 across the 64px pill. */}
      <motion.span
        aria-hidden="true"
        animate={{ x: isDark ? 36 : 4 }}
        transition={slide}
        className="absolute left-0 top-1 h-6 w-6"
      >
        <motion.span
          animate={{ opacity: isDark ? 0 : 1 }}
          transition={fade}
          className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-100 to-amber-300 shadow-[0_0_6px_1px_rgba(252,211,77,0.45)]"
        />
        <motion.span
          animate={{ opacity: isDark ? 1 : 0 }}
          transition={fade}
          className="absolute inset-0 rounded-full bg-gradient-to-br from-slate-100 to-slate-300 shadow-[0_0_6px_1px_rgba(203,213,225,0.35)]"
        >
          {/* Offset and unequal on purpose: a symmetric pair reads as eyes. */}
          <span className="absolute left-1.5 top-1.5 h-[5px] w-[5px] rounded-full bg-slate-400/40" />
          <span className="absolute bottom-1.5 right-2 h-[3px] w-[3px] rounded-full bg-slate-400/30" />
        </motion.span>
      </motion.span>
    </button>
  );
}
