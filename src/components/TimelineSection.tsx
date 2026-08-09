import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Award, Calendar, ExternalLink, MapPin } from "lucide-react";
import SectionHeading from "./SectionHeading";

/** Shared by the stat labels and the grades heading so the two align in weight. */
const statLabelClass =
  "text-[11px] font-medium uppercase tracking-[0.08em] text-slate-500 dark:text-slate-400";

export type TimelineEntry = {
  /** Job title or degree. */
  title: string;
  /** Company or school. */
  subtitle: string;
  /** Company/school homepage. Omit to render the name as plain text. */
  url?: string;
  /** Path under public/icons. Falls back to the section's generic icon. */
  logo?: string;
  /**
   * True when the artwork is an opaque tile rather than a mark on transparency.
   * Those bleed to the tile edge; padding them inside a white square would read
   * as a box inside a box.
   */
  logoFill?: boolean;
  /**
   * True for brands whose only mark is a wide wordmark. Squaring those crushes
   * the lettering, so the tile keeps its natural ratio and grows sideways
   * instead — the artwork must already carry its own ground.
   */
  logoWide?: boolean;
  location: string;
  /**
   * One line on what the employer does. Carried only for companies a reader is
   * unlikely to recognise — it frames the achievements without competing with
   * them, so it stays muted and rides the location line rather than taking one
   * of its own.
   */
  companyNote?: string;
  period: string;
  /** Marks the ongoing role so it reads at a glance. */
  current?: boolean;
  /** What the role actually produced, one achievement per line. */
  points?: string[];
  /*
    Study entries carry facts of three different kinds, and flattening all of
    them into one bullet list makes the reader parse every line to find the one
    they wanted. Each kind gets its own shape instead: figures to compare,
    honours to notice, subject results to scan.
  */
  /** Headline figures — the label is the question, the value is the answer. */
  stats?: { label: string; value: string }[];
  /**
   * Scholarships and honours, lifted out so they are not buried in a list.
   * `title` names the award, `value` says what it was actually worth — the
   * second is what the card leads with visually.
   */
  awards?: { title: string; value?: string }[];
  /** Per-subject results, as badges rather than a comma-separated sentence. */
  grades?: { heading: string; items: { subject: string; grade: string }[] };
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
                    Transparent marks are drawn for light backgrounds and would
                    vanish on the dark card, so they keep a white ground in both
                    themes. Opaque tiles already carry their own.
                  */}
                  {entry.logo ? (
                    <img
                      src={entry.logo}
                      alt=""
                      width={entry.logoWide ? 118 : 44}
                      height={44}
                      loading="lazy"
                      className={`h-11 shrink-0 rounded-lg ring-1 ring-slate-900/10 dark:ring-white/15 ${
                        entry.logoWide
                          ? "w-auto object-contain"
                          : entry.logoFill
                            ? "w-11 object-cover"
                            : "w-11 bg-white object-contain p-1.5"
                      }`}
                    />
                  ) : (
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-900/25 dark:text-blue-400">
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

                  {/*
                    Hidden on the narrowest screens: once the school name and the
                    degree wrap onto separate lines the dot lands at the start of
                    the second one, where it reads as a stray list marker rather
                    than a separator. Stacked, the two need no divider anyway.
                  */}
                  <span aria-hidden="true" className="hidden text-slate-300 sm:inline dark:text-slate-600">
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
                  <span className="inline-flex items-center gap-1">
                    <MapPin size={14} aria-hidden="true" className="shrink-0" />
                    {entry.location}
                  </span>
                  {entry.companyNote && (
                    <>
                      {/* Hidden once the note wraps below the location, where the
                          dot would strand at the end of the line above. */}
                      <span aria-hidden="true" className="hidden text-slate-300 sm:inline dark:text-slate-600">
                        •
                      </span>
                      <span>{entry.companyNote}</span>
                    </>
                  )}
                </p>
              </div>

              <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 font-mono text-xs text-slate-600 dark:bg-slate-700 dark:text-slate-300">
                <Calendar size={13} aria-hidden="true" className="shrink-0" />
                {entry.period}
              </span>
            </div>

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

            {/*
              Figures first: a label-over-value row is scannable in a way a
              sentence is not, and it lets two cards be compared down a column.
            */}
            {entry.stats && entry.stats.length > 0 && (
              <dl className="mt-5 flex flex-wrap items-start gap-x-10 gap-y-4">
                {entry.stats.map((stat) => (
                  <div key={stat.label}>
                    <dt className={statLabelClass}>{stat.label}</dt>
                    <dd className="mt-1 text-lg font-semibold leading-none tabular-nums text-slate-900 dark:text-white">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            )}

            {entry.awards && entry.awards.length > 0 && (
              <ul className="mt-5 space-y-2">
                {entry.awards.map((award) => (
                  <li
                    key={award.title}
                    className="flex items-start gap-3 rounded-xl border border-amber-200/80 bg-amber-50/70 px-4 py-3 dark:border-amber-500/25 dark:bg-amber-500/[0.06]"
                  >
                    <Award
                      size={17}
                      aria-hidden="true"
                      className="mt-0.5 shrink-0 text-amber-600 dark:text-amber-400"
                    />
                    {/*
                      Same label-over-value shape as the stats row above: the
                      award's name is context, the thing it was worth is the
                      news. Bolding the name instead buries the number in muted
                      text at the end of a long proper noun, where a skimming
                      reader never reaches it.
                    */}
                    <div className="min-w-0">
                      <p className="text-sm leading-snug text-slate-600 dark:text-slate-400">
                        {award.title}
                      </p>
                      {award.value && (
                        <p className="mt-0.5 text-base font-semibold leading-snug text-slate-900 dark:text-white">
                          {award.value}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            )}

            {entry.grades && entry.grades.items.length > 0 && (
              <div className="mt-5">
                <p className={statLabelClass}>{entry.grades.heading}</p>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {entry.grades.items.map((item) => (
                    <li
                      key={item.subject}
                      className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 py-1 pl-3 pr-1.5 text-sm text-slate-700 dark:border-slate-600/70 dark:bg-slate-700/40 dark:text-slate-300"
                    >
                      {item.subject}
                      <span className="rounded-md bg-white px-1.5 py-0.5 font-mono text-xs font-semibold text-slate-900 ring-1 ring-slate-900/10 dark:bg-slate-800 dark:text-white dark:ring-white/10">
                        {item.grade}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.article>
        ))}
      </div>
    </section>
  );
}
