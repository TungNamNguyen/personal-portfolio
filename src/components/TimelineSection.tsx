import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Calendar, ExternalLink, MapPin } from "lucide-react";
import SectionHeading from "./SectionHeading";

export type TimelineEntry = {
  /** Job title or degree. */
  title: string;
  /** Company or school. */
  subtitle: string;
  /** Company/school homepage. Omit to render the name as plain text. */
  url?: string;
  /** Path under public/icons. Falls back to the section's generic icon. */
  logo?: string;
  /** Employment type and work mode, e.g. "Full-time · On-site". */
  meta?: string;
  location: string;
  period: string;
  /** Marks the ongoing role so it reads at a glance. */
  current?: boolean;
  /** One short line. Prefer this over `points` for roles. */
  description?: string;
  /** Bullet list, used for study details. */
  points?: string[];
};

type Props = {
  id: string;
  heading: string;
  /** Small icon standing in for a company/school logo. */
  subtitleIcon: ReactNode;
  entries: TimelineEntry[];
};

/** Shared card layout for the Experience and Education sections. */
export default function TimelineSection({ id, heading, subtitleIcon, entries }: Props) {
  const reduceMotion = useReducedMotion();

  return (
    <section id={id} className="space-y-8 sm:space-y-10">
      <SectionHeading>{heading}</SectionHeading>

      <div className="space-y-4">
        {entries.map((entry, i) => (
          <motion.article
            key={i}
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={reduceMotion ? undefined : { y: -4, transition: { type: "spring", stiffness: 300, damping: 20 } }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: reduceMotion ? 0 : i * 0.05, duration: 0.3 }}
            className="group rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm transition-all duration-200 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 dark:border-slate-700 dark:bg-slate-800 dark:shadow-none dark:hover:border-blue-900/50"
          >
            <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-3">
              <div className="min-w-0 space-y-1.5">
                <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
                  {/*
                    Logos keep a white ground in both themes — brand marks are
                    drawn for light backgrounds and several would vanish on the
                    dark card otherwise.
                  */}
                  {entry.logo ? (
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-slate-200 bg-white dark:border-slate-600">
                      <img
                        src={entry.logo}
                        alt=""
                        width={24}
                        height={24}
                        loading="lazy"
                        className="h-6 w-6 object-contain"
                      />
                    </span>
                  ) : (
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-900/25 dark:text-blue-400">
                      {subtitleIcon}
                    </span>
                  )}

                  {entry.url ? (
                    <a
                      href={entry.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 rounded-sm font-semibold text-blue-600 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:text-blue-400 dark:focus-visible:ring-offset-slate-800"
                    >
                      {entry.subtitle}
                      <ExternalLink size={13} aria-hidden="true" className="shrink-0 opacity-70" />
                    </a>
                  ) : (
                    <span className="font-semibold text-blue-600 dark:text-blue-400">
                      {entry.subtitle}
                    </span>
                  )}

                  <span aria-hidden="true" className="text-slate-300 dark:text-slate-600">
                    •
                  </span>

                  <h3 className="font-semibold text-slate-900 dark:text-white">{entry.title}</h3>

                  {entry.current && (
                    <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-emerald-700 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-400">
                      Current
                    </span>
                  )}
                </div>

                <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-slate-500 dark:text-slate-400">
                  {entry.meta && (
                    <>
                      <span>{entry.meta}</span>
                      <span aria-hidden="true" className="text-slate-300 dark:text-slate-600">•</span>
                    </>
                  )}
                  <span className="inline-flex items-center gap-1">
                    <MapPin size={14} aria-hidden="true" className="shrink-0" />
                    {entry.location}
                  </span>
                </p>
              </div>

              <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 font-mono text-xs text-slate-600 dark:bg-slate-700 dark:text-slate-300">
                <Calendar size={13} aria-hidden="true" className="shrink-0" />
                {entry.period}
              </span>
            </div>

            {entry.description && (
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-400">
                {entry.description}
              </p>
            )}

            {entry.points && entry.points.length > 0 && (
              <ul className="mt-4 space-y-2">
                {entry.points.map((point, j) => (
                  <li
                    key={j}
                    className="flex gap-2.5 text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-400"
                  >
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500/70" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            )}
          </motion.article>
        ))}
      </div>
    </section>
  );
}
