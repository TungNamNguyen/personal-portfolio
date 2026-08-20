import { motion, useReducedMotion } from "motion/react";
import { SKILL_CATEGORIES } from "../constants";
import { useLang } from "../i18n";
import { TechIcon } from "../techIcons";

export default function Skills() {
  const reduceMotion = useReducedMotion();
  const { t } = useLang();

  return (
    // Cards stretch to a uniform height per row. SKILL_CATEGORIES is ordered so
    // that same-height cards share a row, which keeps the stretch from showing.
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {SKILL_CATEGORIES.map((category, i) => (
        <motion.div
          key={i}
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={reduceMotion ? undefined : { y: -8, transition: { type: "spring", stiffness: 300, damping: 20 } }}
          viewport={{ once: true }}
          transition={{ delay: reduceMotion ? 0 : i * 0.1, duration: 0.3 }}
          className={`${category.wide ? "lg:col-span-3" : ""} space-y-4 bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm hover:border-blue-200 dark:hover:border-blue-900/50 hover:shadow-xl hover:shadow-blue-900/10 dark:hover:shadow-none transition-all duration-200`}
        >
          <div className="flex items-center gap-3 text-slate-900 dark:text-white">
            <div className="text-blue-600 dark:text-blue-400">{category.icon}</div>
            <h3 className="font-mono text-sm font-semibold uppercase tracking-wide">{t(category.name)}</h3>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {category.skills.map((skill, j) => (
              <span
                key={j}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm font-medium border border-slate-200 dark:border-slate-600 hover:text-blue-600 dark:hover:text-blue-300 hover:border-blue-200 dark:hover:border-blue-900/50 transition-colors"
              >
                <TechIcon name={skill} />
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
