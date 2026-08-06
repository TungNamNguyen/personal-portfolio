import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="sticky top-0 z-50 bg-slate-50/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2 font-mono font-bold text-lg tracking-tighter text-slate-900 dark:text-white">
          <img 
            src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f4ca/512.gif" 
            alt="Animated Bar Chart" 
            className="w-8 h-8 object-contain"
          />
          <span>Data Portfolio</span>
        </div>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-5 text-sm font-medium text-slate-600 dark:text-slate-400">
          <a href="#about" className="hover:text-slate-900 dark:hover:text-white transition-colors">About</a>
          <a href="#skills" className="hover:text-slate-900 dark:hover:text-white transition-colors">Skills</a>
          <a href="#competencies" className="hover:text-slate-900 dark:hover:text-white transition-colors">Competencies</a>
          <a href="#experience" className="hover:text-slate-900 dark:hover:text-white transition-colors">Experience</a>
          <a href="#education" className="hover:text-slate-900 dark:hover:text-white transition-colors">Education</a>
          <a href="#projects" className="hover:text-slate-900 dark:hover:text-white transition-colors">Projects</a>
          <div className="h-4 w-px bg-slate-200 dark:bg-slate-800 mx-1"></div>
          <ThemeToggle />
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <button onClick={toggleMenu} className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white focus:outline-none" aria-label="Toggle menu">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800"
          >
            <nav className="flex flex-col px-4 sm:px-6 py-4 space-y-4 text-sm font-medium text-slate-600 dark:text-slate-400">
              <a href="#about" onClick={toggleMenu} className="hover:text-slate-900 dark:hover:text-white transition-colors">About</a>
              <a href="#skills" onClick={toggleMenu} className="hover:text-slate-900 dark:hover:text-white transition-colors">Skills</a>
              <a href="#competencies" onClick={toggleMenu} className="hover:text-slate-900 dark:hover:text-white transition-colors">Competencies</a>
              <a href="#experience" onClick={toggleMenu} className="hover:text-slate-900 dark:hover:text-white transition-colors">Experience</a>
              <a href="#education" onClick={toggleMenu} className="hover:text-slate-900 dark:hover:text-white transition-colors">Education</a>
              <a href="#projects" onClick={toggleMenu} className="hover:text-slate-900 dark:hover:text-white transition-colors">Projects</a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
