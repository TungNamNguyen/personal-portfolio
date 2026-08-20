import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ExternalLink } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { PROJECTS, PROJECT_TAGS } from "../constants";
import type { ProjectTag } from "../constants";
import { useLang } from "../i18n";
import { TechIcon } from "../techIcons";

type Filter = ProjectTag | "all";

export default function Projects() {
  const reduceMotion = useReducedMotion();
  const { t, ui } = useLang();
  const [filter, setFilter] = useState<Filter>("all");

  /*
    Counts are derived from the data rather than written down, so a chip can
    never advertise a number the grid then fails to show. A tag nothing carries
    drops out entirely instead of offering an empty result.
  */
  const chips = useMemo(() => {
    const tags = Object.keys(PROJECT_TAGS) as ProjectTag[];
    return [
      { key: "all" as Filter, label: ui.allProjects, count: PROJECTS.length },
      ...tags.map((tag) => ({
        key: tag as Filter,
        label: t(PROJECT_TAGS[tag]),
        count: PROJECTS.filter((project) => project.tags.includes(tag)).length
      }))
    ].filter((chip) => chip.count > 0);
  }, [t, ui.allProjects]);

  const visible =
    filter === "all" ? PROJECTS : PROJECTS.filter((project) => project.tags.includes(filter));

  return (
    <section id="projects" className="space-y-8 sm:space-y-10">
      <SectionHeading>{ui.projects}</SectionHeading>

      <div role="group" aria-label={ui.filterProjects} className="flex flex-wrap gap-2">
        {chips.map((chip) => {
          const active = chip.key === filter;
          return (
            <button
              key={chip.key}
              type="button"
              onClick={() => setFilter(chip.key)}
              aria-pressed={active}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900 ${
                active
                  ? "bg-blue-600 text-white"
                  : "bg-white text-slate-600 ring-1 ring-slate-200 hover:text-slate-900 hover:ring-slate-300 dark:bg-slate-800 dark:text-slate-300 dark:ring-slate-700 dark:hover:text-white dark:hover:ring-slate-600"
              }`}
            >
              {chip.label}
              <span
                className={`font-mono text-xs tabular-nums ${
                  active ? "text-blue-100" : "text-slate-400 dark:text-slate-500"
                }`}
              >
                {chip.count}
              </span>
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {visible.map((project) => (
          // Keyed by title, not index: filtering changes which project sits at
          // a given position, and an index key would swap the contents of a card
          // in place rather than replacing the card.
          <motion.div
            key={project.title}
            initial={reduceMotion ? false : { opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={reduceMotion ? undefined : { y: -8, transition: { type: "spring", stiffness: 300, damping: 20 } }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: reduceMotion ? 0 : 0.3 }}
            className="group flex flex-col bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl p-6 hover:shadow-2xl hover:shadow-blue-900/10 dark:hover:shadow-none hover:border-blue-300 dark:hover:border-blue-900/50 transition-all duration-200"
          >
            <div className="flex justify-between items-start gap-3 mb-6">
              {/* The tags ride alongside the icon rather than under the title:
                  it fills the empty middle of a row that otherwise holds two
                  marks and a gap, and it says what kind of work this is before
                  the reader commits to the description. */}
              <div className="flex min-w-0 items-start gap-3">
                <div className="shrink-0 p-3 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-xl group-hover:bg-blue-600 dark:group-hover:bg-blue-500 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                  {project.icon}
                </div>
                <div className="flex flex-wrap gap-1.5 pt-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-600 dark:bg-slate-700 dark:text-slate-300"
                    >
                      {t(PROJECT_TAGS[tag])}
                    </span>
                  ))}
                </div>
              </div>

              {/* Only rendered when there is somewhere to go. */}
              {project.link && (
                <motion.a
                  whileHover={reduceMotion ? undefined : { scale: 1.1, rotate: 5 }}
                  whileTap={reduceMotion ? undefined : { scale: 0.9 }}
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="shrink-0 text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors p-2 -mr-2 -mt-2 rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  aria-label={`${ui.open} ${project.title}`}
                >
                  <ExternalLink size={20} />
                </motion.a>
              )}
            </div>

            <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-8 text-sm sm:text-base leading-relaxed flex-1">
              {t(project.description)}
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tech.map((tech, j) => (
                <span
                  key={j}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-sm font-mono rounded-md group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors"
                >
                  <TechIcon name={tech} className="text-[14px]" />
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
