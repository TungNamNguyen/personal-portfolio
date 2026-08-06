/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useSpring, useReducedMotion } from "motion/react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import SectionHeading from "./components/SectionHeading";
import Competencies from "./components/Competencies";
import Footer from "./components/Footer";

export default function App() {
  const { scrollYProgress } = useScroll();
  const reduceMotion = useReducedMotion();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans selection:bg-blue-200 dark:selection:bg-blue-900 transition-colors duration-300">
      {!reduceMotion && (
        <motion.div
          aria-hidden="true"
          className="fixed top-0 left-0 right-0 h-1 bg-blue-600 origin-left z-[60]"
          style={{ scaleX }}
        />
      )}
      <Header />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-16 md:py-24 space-y-20 sm:space-y-24 md:space-y-32">
        <Hero />

        <section id="skills" className="space-y-8 sm:space-y-10">
          <SectionHeading description="An overview of my core technical strengths. I specialize in architecting end-to-end data solutions with a focus on scalability, reliability, and performance.">
            Technical Proficiency
          </SectionHeading>
          <Skills />
        </section>

        <Competencies />
        <Experience />
        <Education />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
