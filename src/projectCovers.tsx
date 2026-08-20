import type { ReactNode } from "react";

/*
  A drawn band across the top of each project card, standing in for the
  screenshot a finished product would carry. Each one diagrams what the project
  actually does rather than decorating it: a flight arc over delay bars, a stack
  of pinned services, a job graph, a tracked figure.

  Inline SVG with Tailwind classes on the elements themselves, so one piece of
  markup serves both themes. All four share a ground, a faint ruling and a single
  blue motif, which is what keeps them reading as a set.

  Two constraints shape the drawings. `meet` rather than `slice`, so nothing is
  ever cropped however the card is proportioned — the band and the artwork carry
  the same background, so the letterboxing is invisible. And the top corners are
  left empty, because the tag chips and the outbound link sit over them.
*/

const VIEW_W = 400;
const VIEW_H = 176;
/** The drawings were laid out on a 120-unit frame; this keeps them centred. */
const DRAW_OFFSET = (176 - 120) / 2;

/** The ground, shared by the artwork and the band it sits in. */
export const COVER_BG = "bg-slate-50 dark:bg-slate-900/70";

/** Faint ruling, so the four sit on the same surface. */
const Grid = ({ step = 40 }: { step?: number }) => {
  const lines: ReactNode[] = [];
  for (let x = step; x < VIEW_W; x += step) {
    lines.push(
      <line key={`v${x}`} x1={x} y1="0" x2={x} y2={VIEW_H} className="stroke-slate-200/70 dark:stroke-slate-700/40" strokeWidth="1" />
    );
  }
  for (let y = step; y < VIEW_H; y += step) {
    lines.push(
      <line key={`h${y}`} x1="0" y1={y} x2={VIEW_W} y2={y} className="stroke-slate-200/70 dark:stroke-slate-700/40" strokeWidth="1" />
    );
  }
  return <g>{lines}</g>;
};

const Frame = ({ children }: { children: ReactNode }) => (
  <svg
    viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
    preserveAspectRatio="xMidYMid meet"
    aria-hidden="true"
    className="h-full w-full"
  >
    <Grid />
    <g transform={`translate(0 ${DRAW_OFFSET})`}>{children}</g>
  </svg>
);

/** One sampled flight arc, over the delay distribution underneath it. */
const Flights = () => (
  <Frame>
    {[
      [26, 16],
      [50, 27],
      [74, 11],
      [98, 33],
      [122, 21]
    ].map(([x, h], i) => (
      <rect key={i} x={x} y={108 - h} width="12" height={h} rx="2.5" className="fill-cyan-400/45 dark:fill-cyan-500/30" />
    ))}
    <path
      d="M20 102 C 120 100, 200 82, 380 50"
      fill="none"
      strokeDasharray="7 8"
      strokeLinecap="round"
      strokeWidth="2.5"
      className="stroke-blue-400 dark:stroke-blue-500/80"
    />
    {[
      [96, 95],
      [172, 87],
      [248, 73],
      [318, 60]
    ].map(([cx, cy], i) => (
      <circle key={i} cx={cx} cy={cy} r="3.5" className="fill-blue-500 dark:fill-blue-400" />
    ))}
    <circle cx="380" cy="50" r="6" className="fill-blue-600 dark:fill-blue-400" />
    <circle cx="380" cy="50" r="12" fill="none" strokeWidth="1.5" className="stroke-blue-400/60 dark:stroke-blue-400/50" />
  </Frame>
);

/** Pinned layers that come up on one command. */
const Stack = () => (
  <Frame>
    {[
      [150, 36, "fill-blue-500/12 dark:fill-blue-400/10"],
      [166, 62, "fill-blue-500/22 dark:fill-blue-400/16"],
      [182, 88, "fill-blue-500/32 dark:fill-blue-400/24"]
    ].map(([x, y, fill], i) => (
      <rect
        key={i}
        x={x as number}
        y={y as number}
        width="166"
        height="24"
        rx="6"
        strokeWidth="1.75"
        className={`${fill} stroke-blue-500 dark:stroke-blue-400`}
      />
    ))}
    <path d="M110 48 L110 100" strokeWidth="1.75" strokeLinecap="round" strokeDasharray="4 6" className="stroke-slate-300 dark:stroke-slate-600" />
    <circle cx="110" cy="48" r="4" className="fill-slate-300 dark:fill-slate-600" />
    <circle cx="110" cy="100" r="4" className="fill-slate-300 dark:fill-slate-600" />
  </Frame>
);

/** Sources fanning through one transform into a single store. */
const Graph = () => (
  <Frame>
    {[
      "M58 42 L152 70",
      "M58 72 L152 70",
      "M58 102 L152 70",
      "M152 70 L250 48",
      "M152 70 L250 92",
      "M250 48 L330 70",
      "M250 92 L330 70"
    ].map((d, i) => (
      <path key={i} d={d} fill="none" strokeWidth="1.75" className="stroke-blue-300 dark:stroke-blue-500/60" />
    ))}
    {[
      [58, 42],
      [58, 72],
      [58, 102],
      [250, 48],
      [250, 92]
    ].map(([cx, cy], i) => (
      <circle key={i} cx={cx} cy={cy} r="6" strokeWidth="2" className="fill-white stroke-blue-400 dark:fill-slate-800 dark:stroke-blue-400" />
    ))}
    <rect x="140" y="58" width="24" height="24" rx="6" className="fill-blue-500" />
    <circle cx="330" cy="70" r="12" className="fill-blue-600 dark:fill-blue-400" />
  </Frame>
);

/** Keypoints inside the tracked box, at the moment the model calls a fall. */
const Pose = () => (
  <Frame>
    <rect
      x="150"
      y="26"
      width="110"
      height="86"
      rx="8"
      fill="none"
      strokeWidth="2"
      strokeDasharray="8 6"
      className="stroke-blue-400 dark:stroke-blue-500"
    />
    {[
      "M205 49 L205 88",
      "M188 62 L222 62",
      "M188 62 L172 78",
      "M222 62 L238 78",
      "M196 88 L216 88",
      "M196 88 L186 106",
      "M216 88 L228 106"
    ].map((d, i) => (
      <path key={i} d={d} fill="none" strokeWidth="2.5" strokeLinecap="round" className="stroke-blue-400 dark:stroke-blue-500/80" />
    ))}
    {[
      [205, 49],
      [188, 62],
      [222, 62],
      [172, 78],
      [238, 78],
      [196, 88],
      [216, 88],
      [186, 106],
      [228, 106]
    ].map(([cx, cy], i) => (
      <circle key={i} cx={cx} cy={cy} r="3.5" className="fill-blue-600 dark:fill-blue-400" />
    ))}
    <circle cx="205" cy="40" r="9" fill="none" strokeWidth="2.5" className="stroke-blue-500 dark:stroke-blue-400" />
  </Frame>
);

/** Two sides compared row by row, and only the differences moving between them. */
const Sync = () => (
  <Frame>
    {[46, 238].map((x) => (
      <rect key={x} x={x} y="30" width="116" height="76" rx="8" strokeWidth="1.75"
        className="fill-white stroke-blue-300 dark:fill-slate-800 dark:stroke-blue-500/60" />
    ))}
    {/* File rows. The third pair is the one that differs, so it is the pair the
        arrows are drawn between. */}
    {[44, 60, 76, 92].map((y, row) => (
      [58, 250].map((x) => (
        <rect key={`${x}-${y}`} x={x} y={y} width={row === 3 ? 60 : 92} height="8" rx="4"
          className={row === 2
            ? "fill-blue-500 dark:fill-blue-400"
            : "fill-slate-200 dark:fill-slate-600"} />
      ))
    ))}
    <path d="M172 68 L228 68" strokeWidth="2" strokeLinecap="round"
      className="stroke-blue-500 dark:stroke-blue-400" />
    <path d="M220 62 L228 68 L220 74" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className="stroke-blue-500 dark:stroke-blue-400" />
    <path d="M228 88 L172 88" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 5"
      className="stroke-slate-300 dark:stroke-slate-600" />
    <path d="M180 82 L172 88 L180 94" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className="stroke-slate-300 dark:stroke-slate-600" />
  </Frame>
);

const COVERS = {
  flights: Flights,
  sync: Sync,
  stack: Stack,
  graph: Graph,
  pose: Pose
};

export type CoverName = keyof typeof COVERS;

export function ProjectCover({ name }: { name: CoverName }) {
  const Cover = COVERS[name];
  return <Cover />;
}
