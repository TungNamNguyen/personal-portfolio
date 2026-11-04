import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Download, LoaderCircle, Mail } from "lucide-react";
import SiGithub from "~icons/simple-icons/github";
import FaLinkedin from "~icons/simple-icons/linkedin";
import SiTableau from "~icons/simple-icons/tableau";
import { SITE } from "../constants";
import { downloadResume } from "../resumeDownload";
import { useLang } from "../i18n";

const resumeFilename = SITE.resumeUrl.split("/").pop() || "resume.pdf";

export default function Connect() {
  const reduceMotion = useReducedMotion();
  const { ui } = useLang();
  const [preparing, setPreparing] = useState(false);

  const onResumeClick = async (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    if (preparing) return;

    setPreparing(true);
    try {
      await downloadResume(resumeFilename);
    } catch {
      window.location.href = SITE.resumeUrl;
    } finally {
      setPreparing(false);
    }
  };

  const channels = [
    {
      label: "LinkedIn",
      href: SITE.linkedin,
      external: true,
      icon: <FaLinkedin width={20} height={20} aria-hidden="true" />
    },
    {
      label: "GitHub",
      href: SITE.github,
      external: true,
      icon: <SiGithub width={20} height={20} aria-hidden="true" />
    },
    ...(SITE.tableau
      ? [
          {
            label: "Tableau",
            href: SITE.tableau,
            external: true,
            icon: <SiTableau width={20} height={20} aria-hidden="true" />
          }
        ]
      : []),
    ...(SITE.email
      ? [
          {
            label: ui.email,
            href: `mailto:${SITE.email}`,
            external: false,
            icon: <Mail size={20} aria-hidden="true" />
          }
        ]
      : [])
  ].filter((item) => item.href);

  return (
    <motion.section
      id="connect"
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: reduceMotion ? 0 : 0.4 }}
      className="pt-4 sm:pt-8 text-center"
    >
      <div className="max-w-2xl mx-auto space-y-6 sm:space-y-8">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
          {ui.connectPrefix}
          <span className="text-blue-600 dark:text-blue-400">{ui.connectHighlight}</span>
        </h2>

        <p className="max-w-xl mx-auto text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-400">
          {ui.connectBody}
        </p>

        {SITE.resumeUrl && (
          <div className="pt-1">
            <motion.a
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
              href={SITE.resumeUrl}
              download={resumeFilename}
              type="application/pdf"
              onClick={onResumeClick}
              aria-busy={preparing}
              aria-label={preparing ? ui.preparingResume : undefined}
              className={`inline-flex items-center gap-2.5 rounded-full bg-blue-600 px-8 py-3.5 text-base font-medium text-white shadow-lg shadow-blue-600/20 transition-colors hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:bg-blue-600 dark:hover:bg-blue-500 dark:focus-visible:ring-offset-slate-900 ${
                preparing ? "cursor-wait" : ""
              }`}
            >
              {preparing ? (
                <LoaderCircle size={18} aria-hidden="true" className="animate-spin" />
              ) : (
                <Download size={18} aria-hidden="true" />
              )}
              {ui.downloadResume}
            </motion.a>
          </div>
        )}

        <div className="pt-2 space-y-5">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
            {ui.orConnectVia}
          </p>

          <div className="mx-auto max-w-md rounded-2xl border border-slate-200/90 bg-white px-6 py-6 sm:px-10 sm:py-7 shadow-sm dark:border-slate-700/80 dark:bg-slate-800/60">
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-9">
              {channels.map(({ label, href, external, icon }) => (
                <a
                  key={label}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noreferrer" : undefined}
                  className="group flex flex-col items-center gap-2.5 focus:outline-none"
                >
                  <span className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-600 transition-all duration-200 group-hover:-translate-y-1 group-hover:border-blue-300 group-hover:bg-blue-50 group-hover:text-blue-600 group-focus-visible:ring-2 group-focus-visible:ring-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:group-hover:border-blue-500/50 dark:group-hover:bg-blue-950/60 dark:group-hover:text-blue-400">
                    {icon}
                  </span>
                  <span className="text-xs font-medium text-slate-500 transition-colors group-hover:text-slate-900 dark:text-slate-400 dark:group-hover:text-white">
                    {label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
