import { motion } from "motion/react";
import { Database, ExternalLink } from "lucide-react";
import { PROJECTS } from "../constants";

export default function Projects() {
  return (
    <section id="projects" className="space-y-8 sm:space-y-10">
      <div className="flex items-center gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Featured Projects</h2>
        <div className="h-px bg-slate-200 dark:bg-slate-800 flex-1"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROJECTS.map((project, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -8, transition: { type: "spring", stiffness: 300, damping: 20 } }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.3 }}
            className="group flex flex-col bg-white dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 rounded-2xl p-6 hover:shadow-2xl hover:shadow-blue-900/10 dark:hover:shadow-none hover:border-blue-300 dark:hover:border-blue-900/50 transition-all duration-200"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-xl group-hover:bg-blue-600 dark:group-hover:bg-blue-500 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                <Database size={24} />
              </div>
              <motion.a 
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                href={project.link} 
                className="text-slate-400 dark:text-slate-600 hover:text-blue-600 dark:hover:text-blue-400 transition-colors p-2 -mr-2 -mt-2" 
                aria-label={`View ${project.title}`}
              >
                <ExternalLink size={20} />
              </motion.a>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{project.title}</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-8 text-sm leading-relaxed flex-1">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tech.map((t, j) => (
                <span key={j} className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-mono rounded-md group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
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
