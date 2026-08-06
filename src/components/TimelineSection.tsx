import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ChevronRight, MapPin } from "lucide-react";
import SectionHeading from "./SectionHeading";

export type TimelineEntry = {
  /** Job title or degree. */
  title: string;
  /** Company or school. */
  subtitle: string;
  location: string;
  period: string;
  /** Achievements or course details. */
  points: string[];
};

type Props = {
  id: string;
  heading: string;
  /** Icon shown next to the company/school name. */
  subtitleIcon: ReactNode;
  entries: TimelineEntry[];
};

/** Shared layout for the Experience and Education sections. */
export default function TimelineSection({ id, heading, subtitleIcon, entries }: Props) {
  const reduceMotion = useReducedMotion();

  return (
    <section id={id} className="space-y-8 sm:space-y-10">
      <SectionHeading>{heading}</SectionHeading>

      <div className="space-y-6 sm:space-y-8">
        {entries.map((entry, i) => (
          <motion.div
            key={i}
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={reduceMotion ? undefined : { y: -6, transition: { type: "spring", stiffness: 300, damping: 20 } }}
            viewport={{ once: true, margin: "-100px" }}
            className="group flex flex-col md:flex-row gap-2 md:gap-8 p-5 sm:p-6 -mx-5 sm:-mx-6 rounded-2xl hover:bg-white dark:hover:bg-slate-800/50 hover:shadow-xl hover:shadow-blue-900/5 dark:hover:shadow-none border border-transparent hover:border-slate-200 dark:hover:border-slate-700 transition-all duration-200"
          >
            <div className="text-sm font-mono text-slate-500 dark:text-slate-400 md:pt-1 w-full md:w-48 shrink-0 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
              {entry.period}
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {entry.title}
                </h3>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1">
                  <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400 font-medium">
                    <span className="text-slate-500 dark:text-slate-400">{subtitleIcon}</span>
                    {entry.subtitle}
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 text-sm">
                    <MapPin size={14} />
                    <span>{entry.location}</span>
                  </div>
                </div>
              </div>
              <ul className="space-y-3">
                {entry.points.map((point, j) => (
                  <li
                    key={j}
                    className="flex gap-3 text-slate-600 dark:text-slate-400 leading-relaxed text-sm sm:text-base"
                  >
                    <ChevronRight
                      size={18}
                      aria-hidden="true"
                      className="text-blue-600 dark:text-blue-400 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform duration-300"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
