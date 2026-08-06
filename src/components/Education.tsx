import { motion } from "motion/react";
import { ChevronRight, GraduationCap, MapPin } from "lucide-react";
import { EDUCATION } from "../constants";

export default function Education() {
  return (
    <section id="education" className="space-y-8 sm:space-y-10">
      <div className="flex items-center gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Education</h2>
        <div className="h-px bg-slate-200 dark:bg-slate-800 flex-1"></div>
      </div>
      
      <div className="space-y-6 sm:space-y-8">
        {EDUCATION.map((edu, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 20 } }}
            viewport={{ once: true, margin: "-100px" }}
            className="group flex flex-col md:flex-row gap-2 md:gap-8 p-5 sm:p-6 -mx-5 sm:-mx-6 rounded-2xl hover:bg-white dark:hover:bg-slate-900/50 hover:shadow-xl hover:shadow-blue-900/5 dark:hover:shadow-none border border-transparent hover:border-slate-200 dark:hover:border-slate-800 transition-all duration-200"
          >
            <div className="text-sm font-mono text-slate-500 dark:text-slate-500 md:pt-1 w-full md:w-48 shrink-0 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
              {edu.period}
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {edu.degree}
                </h3>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1">
                  <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400 font-medium">
                    <GraduationCap size={16} className="text-slate-400 dark:text-slate-500" />
                    {edu.school}
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-400 dark:text-slate-600 text-sm">
                    <MapPin size={14} />
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>
              <ul className="space-y-3">
                {edu.details.map((detail, j) => (
                  <li key={j} className="flex gap-3 text-slate-600 dark:text-slate-400 leading-relaxed text-sm sm:text-base">
                    <ChevronRight size={18} className="text-blue-500 dark:text-blue-400 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform duration-300" />
                    <span>{detail}</span>
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
