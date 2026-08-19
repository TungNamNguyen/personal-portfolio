import { motion, useReducedMotion } from "motion/react";
import { Quote, ExternalLink } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { RECOMMENDATIONS } from "../constants";
import { useLang } from "../i18n";

export default function Recommendations() {
  const reduceMotion = useReducedMotion();
  const { t, ui } = useLang();

  if (RECOMMENDATIONS.length === 0) return null;

  return (
    <section id="recommendations" className="space-y-8 sm:space-y-10">
      <SectionHeading>{ui.recommendations}</SectionHeading>

      <div className="space-y-6">
        {RECOMMENDATIONS.map((rec, i) => (
          // figure/blockquote/figcaption is the semantic pairing for a quotation
          // with its attribution.
          <motion.figure
            key={i}
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={reduceMotion ? undefined : { y: -4, transition: { type: "spring", stiffness: 300, damping: 20 } }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: reduceMotion ? 0 : 0.4 }}
            className="relative rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm transition-all duration-200 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 dark:border-slate-700 dark:bg-slate-800 dark:shadow-none dark:hover:border-blue-900/50"
          >
            {/*
              Two columns from `sm` up. Held to a readable measure the quote
              used about two thirds of the card, leaving a dead gutter down the
              right with nothing but the decorative glyph in it. The attribution
              moves into that gutter as a rail, so the card is filled by its own
              content instead of padded out — and the quote still lands near 70
              characters a line. Stacked below `sm`, where there is no gutter.
            */}
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-10">
              <blockquote
                lang="en"
                className="relative space-y-4 text-base sm:text-lg leading-relaxed text-slate-600 sm:flex-1 dark:text-slate-300"
              >
                {rec.paragraphs.map((paragraph, j) => (
                  <p key={j}>{paragraph}</p>
                ))}
              </blockquote>

              <figcaption className="flex items-center gap-4 border-t border-slate-200 pt-5 sm:w-52 sm:shrink-0 sm:flex-col sm:items-start sm:gap-3 sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0 dark:border-slate-700">
                {/* Heads the rail on wide screens; stacked, it would only sit
                    in the way of the name. */}
                <Quote
                  aria-hidden="true"
                  size={28}
                  className="hidden text-blue-100 sm:block dark:text-blue-900/40"
                />

                {rec.photo ? (
                  <img
                    src={rec.photo}
                    alt=""
                    width={48}
                    height={48}
                    loading="lazy"
                    className="h-12 w-12 shrink-0 rounded-full object-cover ring-1 ring-slate-900/10 dark:ring-white/15"
                  />
                ) : (
                  // Initials keep the caption aligned when no portrait is supplied.
                  <span
                    aria-hidden="true"
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-50 font-semibold text-blue-700 dark:bg-blue-900/25 dark:text-blue-300"
                  >
                    {rec.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")
                      .slice(0, 2)}
                  </span>
                )}

                <div className="min-w-0">
                  {rec.url ? (
                    <a
                      href={rec.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 rounded-sm font-semibold text-slate-900 hover:text-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:text-white dark:hover:text-blue-400 dark:focus-visible:ring-offset-slate-800"
                    >
                      {rec.name}
                      <ExternalLink size={13} aria-hidden="true" className="shrink-0 opacity-70" />
                    </a>
                  ) : (
                    <span className="font-semibold text-slate-900 dark:text-white">{rec.name}</span>
                  )}

                  <p className="mt-0.5 text-sm text-slate-600 dark:text-slate-400">
                    {t(rec.title)} {ui.at} {rec.company}
                  </p>

                  {/* Only the Vietnamese view says this — in English there is
                      nothing to point out. */}
                  {ui.originalEnglish && (
                    <p className="mt-1.5 text-xs text-slate-500 dark:text-slate-500">
                      {ui.originalEnglish}
                    </p>
                  )}
                </div>
              </figcaption>
            </div>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
