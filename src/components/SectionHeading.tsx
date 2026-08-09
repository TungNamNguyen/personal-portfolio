import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

/**
 * One heading style for every top-level section.
 *
 * Deliberately heading-only. A lead-in paragraph used to be supported, but just
 * one of the five sections ever carried one, which made that section read as
 * the important one rather than simply the first.
 */
export default function SectionHeading({ children }: Props) {
  return (
    <div className="flex items-center gap-4">
      <h2 className="text-3xl font-semibold tracking-tight shrink-0">{children}</h2>
      <div className="h-px bg-slate-200 dark:bg-slate-700 flex-1"></div>
    </div>
  );
}
