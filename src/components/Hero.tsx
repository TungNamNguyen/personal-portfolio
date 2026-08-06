import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Github, Linkedin, Mail, Download } from "lucide-react";

const ROLES = ["Data Analyst", "BI Analyst", "Data Engineer", "Analytics Engineer"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="pt-4 sm:pt-8 md:pt-12 flex flex-col md:flex-row items-center md:items-center justify-between gap-10 md:gap-16">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6 flex-1"
      >
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
          Hello, I am <br className="hidden sm:block" />
          <span className="text-blue-600 dark:text-blue-400">Tung Nguyen</span>
        </h1>
        <div className="h-14 sm:h-20 lg:h-24 overflow-hidden flex items-center py-2">
          <AnimatePresence mode="wait">
            <motion.h2
              key={roleIndex}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="text-2xl sm:text-3xl lg:text-5xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300 pb-2"
            >
              {ROLES[roleIndex]}
            </motion.h2>
          </AnimatePresence>
        </div>
        <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
          With years of hands-on experience in the data ecosystem, I specialize in building robust data pipelines, designing scalable data warehouses, and transforming complex datasets into actionable business insights.
        </p>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-3 sm:gap-4 pt-2"
        >
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:hello@example.com" 
            className="w-full sm:w-auto justify-center inline-flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-blue-600 text-white rounded-lg font-medium hover:bg-slate-800 dark:hover:bg-blue-500 transition-colors shadow-sm"
          >
            <Mail size={18} />
            Get in touch
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#" 
            className="w-full sm:w-auto justify-center inline-flex items-center gap-2 px-6 py-3 bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-400 rounded-lg font-medium hover:bg-blue-100 dark:hover:bg-slate-700 transition-colors shadow-sm"
          >
            <Download size={18} />
            Download CV
          </motion.a>
          <div className="flex gap-3 sm:gap-4 w-full sm:w-auto">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com" 
              target="_blank" 
              rel="noreferrer" 
              className="flex-1 sm:flex-none justify-center inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 rounded-lg font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-sm"
            >
              <Github size={18} />
              GitHub
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.linkedin.com/in/nguyennamtung2003/" 
              target="_blank" 
              rel="noreferrer" 
              className="flex-1 sm:flex-none justify-center inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 rounded-lg font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-sm"
            >
              <Linkedin size={18} />
              LinkedIn
            </motion.a>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="shrink-0 order-first md:order-last"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-blue-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
          <img
            src="/106413417.jpeg"
            alt="Profile Avatar"
            referrerPolicy="no-referrer"
            className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-white dark:border-slate-800 shadow-xl shadow-slate-200 dark:shadow-none"
          />
        </div>
      </motion.div>
    </section>
  );
}
