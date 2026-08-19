/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useSpring, useReducedMotion } from "motion/react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Recommendations from "./components/Recommendations";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import SectionHeading from "./components/SectionHeading";
import BackToTop from "./components/BackToTop";
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
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-sans selection:bg-blue-200 dark:selection:bg-blue-900 transition-colors duration-300">
      {!reduceMotion && (
        <motion.div
          aria-hidden="true"
          className="fixed top-0 left-0 right-0 h-1 bg-blue-600 origin-left z-[60]"
          style={{ scaleX }}
        />
      )}
      <Header />
      {/* Lighter padding at the top so the hero is not pushed below the fold. */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-6 sm:pt-10 md:pt-14 pb-10 sm:pb-16 md:pb-24 space-y-20 sm:space-y-24 md:space-y-32">
        <Hero />

        <section id="skills" className="space-y-8 sm:space-y-10">
          <SectionHeading>Skills</SectionHeading>
          <Skills />
        </section>

        <Experience />
        <Education />
        <Projects />
        <Recommendations />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
