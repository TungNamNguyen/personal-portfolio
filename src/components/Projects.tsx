import { motion, useReducedMotion } from "motion/react";
import { ExternalLink } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { PROJECTS } from "../constants";
import { useLang } from "../i18n";

export default function Projects() {
  const reduceMotion = useReducedMotion();
  const { t, ui } = useLang();

  return (
    <section id="projects" className="space-y-8 sm:space-y-10">
      <SectionHeading>{ui.projects}</SectionHeading>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROJECTS.map((project, i) => (
          <motion.div
            key={i}
            initial={reduceMotion ? false : { opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={reduceMotion ? undefined : { y: -8, transition: { type: "spring", stiffness: 300, damping: 20 } }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: reduceMotion ? 0 : 0.3 }}
            className="group flex flex-col bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl p-6 hover:shadow-2xl hover:shadow-blue-900/10 dark:hover:shadow-none hover:border-blue-300 dark:hover:border-blue-900/50 transition-all duration-200"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-xl group-hover:bg-blue-600 dark:group-hover:bg-blue-500 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                {project.icon}
              </div>
              {/* Only rendered when there is somewhere to go. */}
              {project.link && (
                <motion.a
                  whileHover={reduceMotion ? undefined : { scale: 1.1, rotate: 5 }}
                  whileTap={reduceMotion ? undefined : { scale: 0.9 }}
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors p-2 -mr-2 -mt-2 rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
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
              {project.tech.map((t, j) => (
                <span
                  key={j}
                  className="px-2.5 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-sm font-mono rounded-md group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
