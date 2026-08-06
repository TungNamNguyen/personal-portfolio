import { motion } from "motion/react";
import { COMPETENCIES } from "../constants";

export default function Competencies() {
  return (
    <section id="competencies" className="space-y-8 sm:space-y-10">
      <div className="flex items-center gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Core Competencies</h2>
        <div className="h-px bg-slate-200 dark:bg-slate-800 flex-1"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {COMPETENCIES.map((comp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8, transition: { type: "spring", stiffness: 300, damping: 20 } }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="group p-6 bg-white dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 rounded-2xl hover:border-blue-200 dark:hover:border-blue-900/50 hover:shadow-xl hover:shadow-blue-900/10 dark:hover:shadow-none transition-all duration-200"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 mb-4 group-hover:scale-110 group-hover:bg-blue-600 dark:group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
              {comp.icon}
            </div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">{comp.title}</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {comp.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
