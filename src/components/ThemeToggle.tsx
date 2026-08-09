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

  Both scenes are drawn on the same 72x36 grid and cross-faded, which keeps the
  horizon from jumping as they swap. Scenery sits on the side the knob is not
  occupying — trees to the right under the morning sun, to the left under the
  moon — so the knob never buries the detail. Ground line is y=30 for both.
*/
const GROUND = 30;

/** One conifer, drawn up from the shared ground line. */
function Tree({ x, h, w, fill }: { x: number; h: number; w: number; fill: string }) {
  return <path d={`M${x} ${GROUND - h}L${x + w} ${GROUND + 0.5}H${x - w}Z`} fill={fill} />;
}

function Star({ x, y, r, o }: { x: number; y: number; r: number; o: number }) {
  return <circle cx={x} cy={y} r={r} fill="#F8FAFC" opacity={o} />;
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
      className="relative h-9 w-[72px] shrink-0 overflow-hidden rounded-full ring-1 ring-slate-900/10 transition-shadow hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:ring-white/15 dark:focus-visible:ring-offset-slate-900"
    >
      {/* Daytime */}
      <motion.svg
        aria-hidden="true"
        viewBox="0 0 72 36"
        animate={{ opacity: isDark ? 0 : 1 }}
        transition={fade}
        className="absolute inset-0 h-full w-full"
      >
        <defs>
          <linearGradient id="tt-sky-day" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#7DD3FC" />
            <stop offset="1" stopColor="#E0F2FE" />
          </linearGradient>
        </defs>
        <rect width="72" height="36" fill="url(#tt-sky-day)" />

        <g fill="#FFFFFF" opacity="0.9">
          <ellipse cx="44" cy="11" rx="6" ry="3" />
          <ellipse cx="48" cy="9.5" rx="4.5" ry="2.6" />
          <ellipse cx="60" cy="7" rx="4.5" ry="2.2" />
        </g>

        {/* Two ridges: the paler one behind reads as distance. */}
        <path d="M0 27C10 22 20 25 31 26.5 43 28 53 22 63 25c4 1 7 2 9 2v9H0Z" fill="#6EE7B7" />
        <path d="M0 31.5C12 27.5 24 30.5 36 30.5s24-3 36 0V36H0Z" fill="#34D399" />

        <Tree x={47} h={6} w={2.4} fill="#047857" />
        <Tree x={54} h={8.5} w={3} fill="#065F46" />
        <Tree x={61} h={6.5} w={2.5} fill="#047857" />
        <Tree x={67.5} h={5} w={2} fill="#065F46" />
      </motion.svg>

      {/* Night */}
      <motion.svg
        aria-hidden="true"
        viewBox="0 0 72 36"
        animate={{ opacity: isDark ? 1 : 0 }}
        transition={fade}
        className="absolute inset-0 h-full w-full"
      >
        <defs>
          {/*
            Violet is kept low, near the horizon, so it reads as afterglow and
            the top of the pill stays close to the page's own slate-900.
          */}
          <linearGradient id="tt-sky-night" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#0B1120" />
            <stop offset="0.6" stopColor="#312E81" />
            <stop offset="1" stopColor="#6D28D9" />
          </linearGradient>
        </defs>
        <rect width="72" height="36" fill="url(#tt-sky-night)" />

        <Star x={7} y={8} r={0.7} o={0.95} />
        <Star x={14} y={5} r={0.5} o={0.7} />
        <Star x={21} y={10} r={0.6} o={0.85} />
        <Star x={28} y={6} r={0.45} o={0.6} />
        <Star x={33} y={13} r={0.55} o={0.75} />
        <Star x={17} y={16} r={0.4} o={0.55} />

        <path d="M0 27C10 22 20 25 31 26.5 43 28 53 22 63 25c4 1 7 2 9 2v9H0Z" fill="#1E1B4B" />
        <path d="M0 31.5C12 27.5 24 30.5 36 30.5s24-3 36 0V36H0Z" fill="#0B1120" />

        <Tree x={5} h={6.5} w={2.4} fill="#020617" />
        <Tree x={12} h={9} w={3} fill="#020617" />
        <Tree x={19} h={6} w={2.4} fill="#020617" />
        <Tree x={25.5} h={7.5} w={2.7} fill="#020617" />
      </motion.svg>

      {/* Sun / moon. Travels 4 -> 40 across the 72px pill. */}
      <motion.span
        aria-hidden="true"
        animate={{ x: isDark ? 40 : 4 }}
        transition={slide}
        className="absolute left-0 top-1 h-7 w-7"
      >
        <motion.span
          animate={{ opacity: isDark ? 0 : 1 }}
          transition={fade}
          className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-200 to-amber-400 shadow-[0_0_9px_2px_rgba(251,191,36,0.65)]"
        />
        <motion.span
          animate={{ opacity: isDark ? 1 : 0 }}
          transition={fade}
          className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-100 to-violet-300 shadow-[0_0_9px_2px_rgba(196,181,253,0.5)]"
        >
          <span className="absolute left-1.5 top-2.5 h-1.5 w-1.5 rounded-full bg-violet-400/45" />
          <span className="absolute right-1.5 top-1.5 h-1 w-1 rounded-full bg-violet-400/35" />
          <span className="absolute bottom-1.5 left-3.5 h-1 w-1 rounded-full bg-violet-400/35" />
        </motion.span>
      </motion.span>
    </button>
  );
}
