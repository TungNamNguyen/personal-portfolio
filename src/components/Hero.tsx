import { motion, useReducedMotion } from "motion/react";
import { Mail, Download } from "lucide-react";
// Monochrome marks so they inherit the link's text colour in both themes.
import SiGithub from "~icons/simple-icons/github";
import FaLinkedin from "~icons/simple-icons/linkedin";
import SiTableau from "~icons/simple-icons/tableau";
import { SITE } from "../constants";
import { useLang } from "../i18n";

const buttonBase =
  "inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium shadow-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900";

// Shared by the two shapes the resume button takes — a real <a download> once
// SITE.resumeUrl is set, an inert <button> until then. Kept in one place so the
// pair can never drift apart visually.
const resumeClass = `${buttonBase} border border-slate-300 text-slate-700 hover:bg-slate-100 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800`;

const resumeLabel = (label: string) => (
  <>
    <Download size={18} aria-hidden="true" />
    {label}
  </>
);

// Profiles, not calls to action. An empty value in constants.tsx drops the
// link rather than rendering a dead one.
const SOCIALS = [
  { label: "GitHub", href: SITE.github, Icon: SiGithub },
  { label: "LinkedIn", href: SITE.linkedin, Icon: FaLinkedin },
  { label: "Tableau Public", href: SITE.tableau, Icon: SiTableau }
].filter((social) => social.href);

/*
  Boxed rather than bare glyphs. The three marks carry very different amounts of
  ink — LinkedIn is a filled square, Tableau a scatter of thin crosses — so set
  loose on the page they read as a ragged row rather than one set. An identical
  40px field around each one normalises that, takes the tap target off 36px, and
  says plainly that they are links. Same shape as the header's controls, scaled
  up: a 20px mark in a 40px box holds the header's 16-in-32 ratio.
*/
const socialLink =
  "flex h-10 w-10 items-center justify-center rounded-lg text-slate-500 ring-1 ring-slate-900/10 transition-colors hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:text-slate-400 dark:ring-white/15 dark:hover:bg-slate-800 dark:hover:text-white dark:focus-visible:ring-offset-slate-900";

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const { t, ui } = useLang();
  // Resolved up front: the badge hides on an empty string, and an unresolved
  // { en: "", vi: "" } pair is an object, which is always truthy.
  const openTo = t(SITE.openTo);

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
          <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-blue-600 dark:text-blue-400">
            {t(SITE.role)} @ {SITE.company}
          </p>

          {openTo && (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-400">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              {openTo}
            </span>
          )}
        </div>

        <p className="max-w-2xl text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-400">
          {t(SITE.bio)}
        </p>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: reduceMotion ? 0 : 0.2 }}
          className="flex flex-wrap items-center gap-x-6 gap-y-4 pt-2"
        >
          {/*
            One filled call to action, one outlined. Both sized to their own
            label rather than stretched to share a row, so the pair reads as
            primary and secondary instead of two equal choices.
          */}
          <div className="flex flex-wrap items-center gap-3">
            <motion.a
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
              href={`mailto:${SITE.email}`}
              className={`${buttonBase} bg-slate-900 dark:bg-blue-600 text-white hover:bg-slate-800 dark:hover:bg-blue-500`}
            >
              <Mail size={18} aria-hidden="true" />
              {ui.getInTouch}
            </motion.a>

            {SITE.resumeUrl ? (
              <motion.a
                whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                href={SITE.resumeUrl}
                download
                className={resumeClass}
              >
                {resumeLabel(ui.downloadResume)}
              </motion.a>
            ) : (
              <motion.button
                type="button"
                whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                className={resumeClass}
              >
                {resumeLabel(ui.downloadResume)}
              </motion.button>
            )}
          </div>

          {/*
            Icon-only, carrying just an accessible name: a profile is worth
            reaching, not worth a labelled button the width of the two above it.
          */}
          <div className="flex items-center gap-2">
            {SOCIALS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                title={label}
                className={socialLink}
              >
                <Icon width={20} height={20} aria-hidden="true" />
              </a>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: reduceMotion ? 0 : 0.5, ease: "easeOut" }}
        className="shrink-0 order-first md:order-last"
      >
        {/*
          The border was white, which is invisible here: the photo's own ground
          is near-white and so is the page, so the circle lost its edge and the
          head read as a floating cut-out. A pale slate ring closes the shape
          without drawing attention to itself.
        */}
        {/* Matches the preload in index.html — never lazy, and high priority so
            it is not queued behind the lazy images further down the page. */}
        <img
          src="/106413417.jpeg"
          alt={SITE.name}
          width={400}
          height={400}
          fetchPriority="high"
          decoding="async"
          className="w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-slate-200 dark:border-slate-700 shadow-xl shadow-slate-200 dark:shadow-none"
        />
      </motion.div>
    </section>
  );
}
