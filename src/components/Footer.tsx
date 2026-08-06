import { Mail } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { SITE } from "../constants";

const iconLink =
  "rounded-sm hover:text-slate-900 dark:hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 py-10 sm:py-12 mt-20 sm:mt-24 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2 font-mono font-bold text-lg tracking-tighter text-slate-900 dark:text-white">
          <img src="/icons/logo.gif" alt="" className="w-8 h-8 object-contain" />
          <span>Data Portfolio</span>
        </div>
        <div className="font-mono text-xs sm:text-sm text-slate-600 dark:text-slate-400 text-center md:text-left">
          © {new Date().getFullYear()} Built with React &amp; Tailwind CSS.
        </div>
        <div className="flex gap-5 text-slate-600 dark:text-slate-400">
          <a
            href={SITE.github}
            target="_blank"
            rel="noopener noreferrer"
            className={iconLink}
            aria-label="GitHub"
          >
            <SiGithub size={20} />
          </a>
          <a
            href={SITE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={iconLink}
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
          <a href={`mailto:${SITE.email}`} className={iconLink} aria-label="Email">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
