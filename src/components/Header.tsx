import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import { NAV_ITEMS } from "../constants";
import { useLang } from "../i18n";

const linkClass =
  "rounded-sm transition-colors hover:text-slate-900 dark:hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900";

/** Highlights whichever section currently occupies the top of the viewport. */
function useActiveSection() {
  const [active, setActive] = useState(NAV_ITEMS[0].id);

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(
      (el): el is HTMLElement => el !== null
    );
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) setActive(visible[0].target.id);
      },
      // Trims the sticky header off the top and most of the viewport off the
      // bottom, so "active" means "just below the header".
      { rootMargin: "-80px 0px -70% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return active;
}

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activeSection = useActiveSection();
  const reduceMotion = useReducedMotion();
  const { t, ui } = useLang();
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);

  const closeMenu = () => setIsMobileMenuOpen(false);

  // Escape to close, and return focus to the button that opened the menu.
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
        toggleButtonRef.current?.focus();
      }
    };

    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      if (
        !menuRef.current?.contains(target) &&
        !toggleButtonRef.current?.contains(target)
      ) {
        closeMenu();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 bg-slate-50/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 transition-colors duration-300">
      {/*
        Three zones on one grid rather than two on a flex row. The outer columns
        are equal, so the nav sits on the page's centre line instead of being
        shoved against the controls with a void where the short logo leaves off.
        With the nav hidden its column collapses and the same grid still holds
        the logo left and the controls right — provided each zone names its own
        column, since auto-placement would otherwise slide the controls into the
        middle track the moment the nav stops rendering.
      */}
      <div className="max-w-5xl mx-auto grid grid-cols-[1fr_auto_1fr] items-center gap-4 px-4 sm:px-6 py-4">
        <a
          href="#about"
          className={`col-start-1 justify-self-start flex items-center gap-2 font-mono font-bold text-lg tracking-tighter text-slate-900 dark:text-white ${linkClass}`}
        >
          <span>TN.</span>
        </a>

        {/*
          Held back to `lg`. At `md` the six links, the language control and the
          theme control together overrun the container: in English the theme
          switch was clipped by the right edge, and in Vietnamese every label
          broke onto a second line.
        */}
        <nav className="col-start-2 hidden lg:flex items-center gap-5 text-sm font-medium text-slate-600 dark:text-slate-400">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={activeSection === item.id ? "true" : undefined}
              className={`${linkClass} ${
                activeSection === item.id
                  ? "text-blue-600 dark:text-blue-400"
                  : ""
              }`}
            >
              {t(item.label)}
            </a>
          ))}
        </nav>

        {/* One cluster for both breakpoints — only the menu button comes and goes. */}
        <div className="col-start-3 justify-self-end flex items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
          <button
            ref={toggleButtonRef}
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            className={`lg:hidden flex h-8 w-8 items-center justify-center text-slate-600 dark:text-slate-400 ${linkClass}`}
            aria-label={isMobileMenuOpen ? ui.closeMenu : ui.openMenu}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-nav"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-nav"
            ref={menuRef}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={reduceMotion ? { duration: 0 } : undefined}
            className="lg:hidden overflow-hidden bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700"
          >
            <nav className="flex flex-col px-4 sm:px-6 py-4 space-y-4 text-sm font-medium text-slate-600 dark:text-slate-400">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={closeMenu}
                  aria-current={activeSection === item.id ? "true" : undefined}
                  className={`${linkClass} ${
                    activeSection === item.id
                      ? "text-blue-600 dark:text-blue-400"
                      : ""
                  }`}
                >
                  {t(item.label)}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
