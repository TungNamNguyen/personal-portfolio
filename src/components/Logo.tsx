import type {ComponentType, SVGProps} from "react";

/**
 * A logo is either a raster file served from public/ (a path) or an SVG that
 * `?react` has inlined into the bundle (a component). SVG marks are inlined
 * deliberately: served as files they are `image/svg+xml`, which some proxies
 * and content blockers drop outright, taking the mark with them.
 */
export type LogoSource = string | ComponentType<SVGProps<SVGSVGElement>>;

/**
 * `fill` is the inline-SVG counterpart of `object-cover` — `slice` crops to the
 * box the way cover does, where the default `meet` letterboxes like contain.
 * The raster branch keeps `object-*` in the caller's className, so both shapes
 * respond to the same class.
 */
export default function Logo({
  source,
  className,
  width,
  height,
  fill = false,
}: {
  source: LogoSource;
  className?: string;
  width?: number;
  height?: number;
  fill?: boolean;
}) {
  if (typeof source !== "string") {
    const Mark = source;
    return (
      <Mark
        aria-hidden="true"
        preserveAspectRatio={fill ? "xMidYMid slice" : "xMidYMid meet"}
        className={className}
      />
    );
  }

  return (
    <img src={source} alt="" width={width} height={height} loading="lazy" className={className} />
  );
}
