# Project cover photos

Cropped to 1000x440 and re-encoded as WebP. The band the cards render them in
is 2.27:1; a dashboard shot fits into that almost whole, where the 3.3:1 strip
it replaced could only ever hold a corner of one.

| File | Source | Licence |
| --- | --- | --- |
| `aerostream.webp` | StockSnap.io `6FI8W1L305` — airliner wing above cloud | CC0 |
| `sparkev.webp` | Own work — the whole Performance dashboard, rendered from Tableau Public so the cover matches where the card's link goes | — |
| `databel.webp` | Own work — the Churn Analysis dashboard, rendered from Tableau Public | — |
| `refugees.webp` | Own work — the choropleth and its colour scale on the deployed site's main page, captured headless. The Sankey was tried first but it is one view of several, not the headline one | — |
| `templates.webp` | Docker's own lockup, knocked out white over its brand blue — [*Docker (container engine) logo.svg*](https://commons.wikimedia.org/wiki/File:Docker_(container_engine)_logo.svg) | Apache 2.0 |
| `gitlab.webp` | GitLab's lockup over its brand dark, wordmark lifted to white — [*GitLab logo.svg*](https://commons.wikimedia.org/wiki/File:GitLab_logo.svg) | MIT |
| `fall-detection.webp` | StockSnap.io `E8U0GNCPI8` — dome surveillance camera | CC0 |

The Docker and GitLab logos are trademarks of their owners; they are used here
to name the tools those projects are built on and read from, which is what a
trademark is for.

The CC0 files are public-domain dedications: free for commercial use with
no attribution required. They are stand-ins — a screenshot of the thing itself
beats a stock photo of what it is about, so replace them as those repos grow
their own. Drop a file in this folder and point `image` at it in
`src/constants.tsx`; removing the `image` line falls back to the drawn band in
`src/projectCovers.tsx`.
