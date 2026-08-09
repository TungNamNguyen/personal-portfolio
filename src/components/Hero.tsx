import { motion, useReducedMotion } from "motion/react";
import { Mail, Download, MapPin } from "lucide-react";
// Monochrome marks so they inherit the button's text colour in both themes.
import SiGithub from "~icons/simple-icons/github";
import FaLinkedin from "~icons/simple-icons/linkedin";
import { SITE } from "../constants";

const buttonBase =
  "justify-center inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium shadow-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    // The hero doubles as the About section, so it owns the #about anchor.
    <section
      id="about"
      className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16"
    >
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6 flex-1"
      >
        {/*
          The name opens the page on its own line. Nothing sits above it: a
          greeting would only delay the one word a visitor came for, and the
          role, location and bio below already carry everything else. Colour
          accent lives on the role, so there is one blue focal point.
        */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.05]">
          {SITE.name}
        </h1>

        <div className="space-y-3">
          <p className="text-xl sm:text-2xl lg:text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300 pb-1">
            {SITE.role} @ {SITE.company}
          </p>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <p className="flex items-center gap-2 text-base sm:text-lg text-slate-600 dark:text-slate-400">
              <MapPin size={18} aria-hidden="true" className="shrink-0" />
              {SITE.location}
            </p>

            {SITE.openTo && (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-400">
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                {SITE.openTo}
              </span>
            )}
          </div>
        </div>

        <p className="max-w-2xl text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-400">
          {SITE.bio}
        </p>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: reduceMotion ? 0 : 0.2 }}
          className="flex flex-wrap gap-3 sm:gap-4 pt-2"
        >
          <motion.a
            whileHover={reduceMotion ? undefined : { scale: 1.05 }}
            whileTap={reduceMotion ? undefined : { scale: 0.95 }}
            href={`mailto:${SITE.email}`}
            className={`w-full sm:w-auto ${buttonBase} bg-slate-900 dark:bg-blue-600 text-white hover:bg-slate-800 dark:hover:bg-blue-500`}
          >
            <Mail size={18} />
            Get in touch
          </motion.a>

          {SITE.cvUrl && (
            <motion.a
              whileHover={reduceMotion ? undefined : { scale: 1.05 }}
              whileTap={reduceMotion ? undefined : { scale: 0.95 }}
              href={SITE.cvUrl}
              download
              className={`w-full sm:w-auto ${buttonBase} bg-blue-50 dark:bg-slate-700 text-blue-700 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-slate-600`}
            >
              <Download size={18} />
              Download CV
            </motion.a>
          )}

          <div className="flex gap-3 sm:gap-4 w-full sm:w-auto">
            <motion.a
              whileHover={reduceMotion ? undefined : { scale: 1.05 }}
              whileTap={reduceMotion ? undefined : { scale: 0.95 }}
              href={SITE.github}
              target="_blank"
              rel="noreferrer"
              className={`flex-1 sm:flex-none ${buttonBase} bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700`}
            >
              <SiGithub width={18} height={18} />
              GitHub
            </motion.a>
            <motion.a
              whileHover={reduceMotion ? undefined : { scale: 1.05 }}
              whileTap={reduceMotion ? undefined : { scale: 0.95 }}
              href={SITE.linkedin}
              target="_blank"
              rel="noreferrer"
              className={`flex-1 sm:flex-none ${buttonBase} bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700`}
            >
              <FaLinkedin width={18} height={18} />
              LinkedIn
            </motion.a>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: reduceMotion ? 0 : 0.5, ease: "easeOut" }}
        className="shrink-0 order-first md:order-last"
      >
        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-blue-400 rounded-full blur-3xl opacity-20 animate-pulse"
          ></div>
          <img
            src="/106413417.jpeg"
            alt={SITE.name}
            width={256}
            height={256}
            className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-white dark:border-slate-700 shadow-xl shadow-slate-200 dark:shadow-none"
          />
        </div>
      </motion.div>
    </section>
  );
}
