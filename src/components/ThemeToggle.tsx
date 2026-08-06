import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const theme = localStorage.getItem("theme");
    const isDarkMode = theme === "dark" || (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches);
    setIsDark(isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    if (newDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  if (!mounted) {
    return <div className="w-16 h-8" />; // Placeholder to prevent layout shift
  }

  return (
    <button
      onClick={toggleTheme}
      className={`relative inline-flex h-8 w-16 items-center rounded-full transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950 ${
        isDark ? "bg-blue-600" : "bg-slate-200"
      }`}
      aria-label="Toggle theme"
    >
      <span className="sr-only">Toggle theme</span>
      
      {/* Background Icons */}
      <div className="absolute inset-0 flex items-center justify-between px-2 pointer-events-none">
        <Sun size={14} className="text-white" />
        <Moon size={14} className="text-slate-500" />
      </div>

      {/* Sliding Circle */}
      <motion.span
        layout
        transition={{ type: "spring", stiffness: 700, damping: 30 }}
        className={`inline-flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-md z-10 ${
          isDark ? "translate-x-9" : "translate-x-1"
        }`}
      >
        <motion.div
          initial={{ rotate: isDark ? -90 : 90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 0.2 }}
          key={isDark ? "dark" : "light"}
        >
          {isDark ? (
            <Moon size={14} className="text-blue-600" />
          ) : (
            <Sun size={14} className="text-amber-500" />
          )}
        </motion.div>
      </motion.span>
    </button>
  );
}

