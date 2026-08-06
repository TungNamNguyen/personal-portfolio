import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** Optional lead-in paragraph shown under the heading. */
  description?: string;
};

/** One heading style for every top-level section. */
export default function SectionHeading({ children, description }: Props) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <h2 className="text-3xl font-semibold tracking-tight shrink-0">{children}</h2>
        <div className="h-px bg-slate-200 dark:bg-slate-700 flex-1"></div>
      </div>
      {description && (
        // max-w-2xl keeps the measure near 65 characters; wider hurts readability.
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}
