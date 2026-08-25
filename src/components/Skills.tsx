import { Fragment } from "react";
import { motion, useReducedMotion } from "motion/react";
import { SKILL_CATEGORIES } from "../constants";
import { useLang } from "../i18n";
import { TechIcon, TECH_URLS } from "../techIcons";

/**
 * One card, holding a definition list.
 *
 * The card is the page's unit — Experience, Education, Projects, Certifications
 * and Recommendations are all built from the same white, `rounded-2xl`,
 * hairline-bordered panel, and Skills sitting bare on the page background was
 * the one section that did not belong to that family.
 *
 * Inside it stays a list rather than a grid of seven smaller cards. Those
 * boxes-within-boxes are what the section used to be, and they cost two
 * workarounds that only existed to keep the grid tidy: a full-width flag on the
 * last category, and an ordering picked so that same-height cards shared a row.
 * A list needs neither, and the category names line up in a column the eye can
 * run straight down instead of zigzagging.
 *
 * The card takes the same hover as the ones in Experience, Education and the
 * rest — the lift, the blue hairline and the raised shadow, from the same
 * spring — so the section behaves like the family it belongs to rather than
 * being the one panel on the page that stays inert under the cursor.
 */
export default function Skills() {
  const reduceMotion = useReducedMotion();
  const { t } = useLang();
  const last = SKILL_CATEGORIES.length - 1;

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      whileHover={reduceMotion ? undefined : { y: -4, transition: { type: "spring", stiffness: 300, damping: 20 } }}
      transition={{ duration: reduceMotion ? 0 : 0.3 }}
      // Copied verbatim from the timeline card so the two cannot drift.
      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-[color,background-color,border-color,box-shadow] duration-200 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 sm:p-6 dark:border-slate-700 dark:bg-slate-800 dark:shadow-none dark:hover:border-blue-900/50"
    >
      {/*
        One grid for the whole list, with `dt`/`dd` as its own children, rather
        than a grid per row. It has to be: a row-level grid measures only its
        own contents, so seven of them agree on nothing and the label column has
        to be guessed at a fixed width. Guessing costs both ways — too narrow
        and the two longest labels wrap, too wide and every short one trails
        dead space before its pills — and the figure that balances those is
        different in English than in Vietnamese.

        `max-content` measures instead: the column comes out exactly as wide as
        the longest label in whichever language is on screen, so nothing wraps
        and the gutter is the narrowest it can be without one.
      */}
      <dl className="grid sm:grid-cols-[max-content_1fr]">
        {SKILL_CATEGORIES.map((category, i) => {
          /*
            The rule between rows is drawn by the two cells themselves rather
            than by a column gap, so it runs unbroken across the gutter — which
            is why the label's right-hand space is padding, not `gap-x`.
            Stacked on a narrow screen only the label carries it: on `dd` it
            would cut a category away from its own pills.
          */
          const openRow = i === 0
            ? ""
            : "pt-5 border-t border-slate-200 dark:border-slate-700";
          const openPills = i === 0
            ? ""
            : "sm:pt-5 sm:border-t sm:border-slate-200 sm:dark:border-slate-700";

          return (
            <Fragment key={i}>
              <dt
                className={`flex items-center gap-2.5 pb-2 text-slate-900 sm:pr-8 sm:pb-5 dark:text-white ${openRow}`}
              >
                <span className="shrink-0 text-blue-600 dark:text-blue-400">{category.icon}</span>
                <span className="font-mono text-sm font-semibold uppercase tracking-wide">
                  {t(category.name)}
                </span>
              </dt>

              <dd
                className={`flex flex-wrap gap-2.5 ${i === last ? "" : "pb-5"} ${openPills}`}
              >
                {category.skills.map((skill, j) => {
                  const url = TECH_URLS[skill];
                  // Slate on the card's white, the inverse of the flat layout
                  // this replaced: there the pills sat on the page ground and
                  // had to be white to stand off it.
                  const cls = "flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm font-medium border border-slate-200 dark:border-slate-600 hover:text-blue-600 dark:hover:text-blue-300 hover:border-blue-200 dark:hover:border-blue-900/50 transition-colors";
                  return url ? (
                    <a key={j} href={url} target="_blank" rel="noreferrer" className={cls}>
                      <TechIcon name={skill} />
                      {skill}
                    </a>
                  ) : (
                    <span key={j} className={cls}>
                      <TechIcon name={skill} />
                      {skill}
                    </span>
                  );
                })}
              </dd>
            </Fragment>
          );
        })}
      </dl>
    </motion.div>
  );
}
