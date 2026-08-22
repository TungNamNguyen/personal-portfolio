/**
 * Hands the reader the PDF without an `application/pdf` response ever crossing
 * the network.
 *
 * The bytes arrive as base64 inside a JS chunk — a content type the site cannot
 * function without, so anything permissive enough to load the page is
 * permissive enough to load this — and are reassembled into a `blob:` URL here.
 * A blob URL is local to the document, so the save goes straight to disk with
 * no request for a filter to inspect, block, or answer with an HTML notice.
 *
 * The chunk is imported on click rather than up front: it is roughly the weight
 * of the résumé itself, and most readers never ask for it.
 */
export async function downloadResume(filename: string) {
  const { default: base64 } = await import("virtual:resume-payload");

  const bytes = Uint8Array.from(atob(base64), (char) => char.charCodeAt(0));
  const url = URL.createObjectURL(new Blob([bytes], { type: "application/pdf" }));

  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();

  // Revoking synchronously can cut the save off before it has started, since
  // the click only queues the download. A minute is far longer than that takes
  // and still bounds how long the blob sits in memory.
  setTimeout(() => URL.revokeObjectURL(url), 60_000);
}
