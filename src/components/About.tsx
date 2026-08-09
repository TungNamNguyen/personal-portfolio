import { motion, useReducedMotion } from "motion/react";
import SectionHeading from "./SectionHeading";
import { ABOUT } from "../constants";

export default function About() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="about" className="space-y-8 sm:space-y-10">
      <SectionHeading>About</SectionHeading>

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: reduceMotion ? 0 : 0.4 }}
        className="max-w-2xl space-y-5 text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-400"
      >
        {ABOUT.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </motion.div>
    </section>
  );
}
