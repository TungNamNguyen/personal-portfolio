# Project cover photos

Cropped to 1000x380 and re-encoded as WebP.

| File | Source | Licence |
| --- | --- | --- |
| `aerostream.webp` | Own work — `docs/images/chart-route-map.png` from [aerostream-flight-analytics](https://github.com/TungNamNguyen/aerostream-flight-analytics), cropped to the mainland | — |
| `templates.webp` | Docker's own lockup, knocked out white over its brand blue — [*Docker (container engine) logo.svg*](https://commons.wikimedia.org/wiki/File:Docker_(container_engine)_logo.svg) | Apache 2.0 |
| `gitlab.webp` | StockSnap.io `1STVFMTBJY` — syntax-highlighted source | CC0 |
| `fall-detection.webp` | StockSnap.io `E8U0GNCPI8` — dome surveillance camera | CC0 |

Docker's logo is a trademark of Docker, Inc.; it is used here to name the
tool this project is built on, which is what a trademark is for.

The two CC0 files are public-domain dedications: free for commercial use with
no attribution required. They are stand-ins — a screenshot of the thing itself
beats a stock photo of what it is about, so replace them as those repos grow
their own. Drop a file in this folder and point `image` at it in
`src/constants.tsx`; removing the `image` line falls back to the drawn band in
`src/projectCovers.tsx`.
