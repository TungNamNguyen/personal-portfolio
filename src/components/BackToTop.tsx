import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { useLang } from "../i18n";

/** Distance scrolled before the button is worth showing (~one viewport). */
const SHOW_AFTER = 600;

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const reduceMotion = useReducedMotion();
  const { ui } = useLang();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SHOW_AFTER);
    onScroll(); // Covers a reload that restores a scrolled position.
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    // index.css turns off smooth scrolling under prefers-reduced-motion, but
    // scrollTo's own behaviour would override that, so pass it explicitly.
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          aria-label={ui.backToTop}
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
          whileHover={reduceMotion ? undefined : { y: -3 }}
          whileTap={reduceMotion ? undefined : { scale: 0.92 }}
          transition={{ duration: reduceMotion ? 0 : 0.2 }}
          className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-lg transition-colors hover:border-blue-200 hover:text-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:shadow-none dark:hover:border-blue-900/50 dark:hover:text-blue-400 dark:focus-visible:ring-offset-slate-900"
        >
          <ArrowUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
