import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 py-10 sm:py-12 mt-20 sm:mt-24 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2 font-mono font-bold text-lg tracking-tighter text-slate-900 dark:text-white">
          <img 
            src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f4ca/512.gif" 
            alt="Animated Bar Chart" 
            className="w-8 h-8 object-contain"
          />
          <span>Data Portfolio</span>
        </div>
        <div className="font-mono text-xs sm:text-sm text-slate-500 dark:text-slate-500 text-center md:text-left">
          © {new Date().getFullYear()} Built with React & Tailwind CSS.
        </div>
        <div className="flex gap-5 text-slate-400 dark:text-slate-600">
          <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors" aria-label="GitHub"><Github size={20} /></a>
          <a href="https://www.linkedin.com/in/nguyennamtung2003/" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 dark:hover:text-white transition-colors" aria-label="LinkedIn"><Linkedin size={20} /></a>
          <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors" aria-label="Email"><Mail size={20} /></a>
        </div>
      </div>
    </footer>
  );
}
