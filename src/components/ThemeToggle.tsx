import { Sun, Moon } from "lucide-react";
import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";

/** Reads the class the inline script in index.html already applied. */
function getInitialTheme() {
  if (typeof document === "undefined") return false;
  return document.documentElement.classList.contains("dark");
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

  return (
    <button
      onClick={toggleTheme}
      role="switch"
      aria-checked={isDark}
      aria-label="Dark mode"
      className={`relative inline-flex h-8 w-16 items-center rounded-full transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950 ${
        isDark ? "bg-blue-600" : "bg-slate-300"
      }`}
    >
      {/* Background icons — decorative; the button itself carries the label. */}
      <div
        aria-hidden="true"
        className={`absolute inset-0 flex items-center justify-between px-2 pointer-events-none ${
          isDark ? "text-white" : "text-slate-600"
        }`}
      >
        <Sun size={14} />
        <Moon size={14} />
      </div>

      {/* Sliding Circle */}
      <motion.span
        animate={{ x: isDark ? 36 : 4 }}
        transition={
          reduceMotion
            ? { duration: 0 }
            : { type: "spring", stiffness: 700, damping: 30 }
        }
        className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-md z-10"
      >
        {isDark ? (
          <Moon size={14} className="text-blue-600" />
        ) : (
          <Sun size={14} className="text-amber-500" />
        )}
      </motion.span>
    </button>
  );
}
