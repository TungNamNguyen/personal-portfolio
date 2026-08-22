import { motion, useReducedMotion } from "motion/react";
import { ExternalLink } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Logo from "./Logo";
import { CERTIFICATIONS } from "../constants";
import { useLang } from "../i18n";
import { TechIcon, TECH_URLS } from "../techIcons";

/**
 * Same card shape as Experience — a rounded border, a logo, the cert name,
 * tech pills, and a small "Verify" link. Nothing more.
 */
export default function Certifications() {
  const reduceMotion = useReducedMotion();
  const { ui } = useLang();

  return (
    <section id="certifications" className="space-y-8 sm:space-y-10">
      <SectionHeading>{ui.certifications}</SectionHeading>

      <div className="space-y-4">
        {CERTIFICATIONS.map((cert, i) => (
          <motion.div
            key={i}
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={reduceMotion ? undefined : { y: -4, transition: { type: "spring", stiffness: 300, damping: 20 } }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: reduceMotion ? 0 : i * 0.05, duration: 0.3 }}
            className="group rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm transition-[color,background-color,border-color,box-shadow] duration-200 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 dark:border-slate-700 dark:bg-slate-800 dark:shadow-none dark:hover:border-blue-900/50"
          >
            <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-3">
              <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
                <Logo
                  source={cert.logo}
                  width={44}
                  height={44}
                  className="h-11 w-11 shrink-0 rounded-lg bg-slate-900 p-2 ring-1 ring-slate-900/10 dark:bg-slate-700 dark:ring-white/15"
                />

                <span className="font-semibold text-slate-900 dark:text-white">
                  {cert.issuer}
                </span>

                <span aria-hidden="true" className="hidden text-slate-300 sm:inline dark:text-slate-600">
                  •
                </span>

                <h3 className="font-semibold text-slate-900 dark:text-white">{cert.name}</h3>
              </div>

              {cert.url && (
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 transition-colors hover:bg-emerald-100 hover:border-emerald-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-400 dark:hover:bg-emerald-500/20"
                >
                  Verify
                  <ExternalLink size={12} aria-hidden="true" />
                </a>
              )}
            </div>

            {cert.skills && cert.skills.length > 0 && (
              <ul className="mt-5 flex flex-wrap gap-2">
                {cert.skills.map((skill, k) => {
                  const url = TECH_URLS[skill];
                  const cls = "inline-flex items-center gap-1.5 rounded-md bg-slate-100 px-2.5 py-1 font-mono text-xs text-slate-600 transition-colors group-hover:bg-blue-50 group-hover:text-blue-700 dark:bg-slate-700 dark:text-slate-300 dark:group-hover:bg-blue-900/30 dark:group-hover:text-blue-300";
                  return (
                    <li key={k}>
                      {url ? (
                        <a href={url} target="_blank" rel="noreferrer" className={cls}>
                          <TechIcon name={skill} className="text-[13px]" />
                          {skill}
                        </a>
                      ) : (
                        <span className={cls}>
                          <TechIcon name={skill} className="text-[13px]" />
                          {skill}
                        </span>
                      )}
                    </li>
                  );
                })}
              </ul>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
