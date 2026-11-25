/**
 * Makes media feel instant on slow connections by downloading it in the
 * background once the page itself has finished loading, so by the time a
 * visitor scrolls or opens a project, the files are already in the cache.
 *
 * Nothing here blocks first paint: everything starts after `load` + idle.
 */

// Every image used by the case-study pages and the home page (all small WebP).
const IMAGES = [
  "/C1new.webp", "/C2new.webp", "/C3.webp", "/c3-hero.webp", "/Case_hero.webp",
  "/c2-s1-1.webp", "/c2-s2-1.webp", "/c2-s3-1.webp", "/c2-s3-2.webp",
  "/c3-s1-1.webp", "/c3-s1-2.webp", "/c3-report-builder.webp", "/c3-fragmented-ui.webp", "/c3-dashboard-customization.webp",
  "/Soundar1.webp", "/other_projects_bg.webp", "/Footer_bg.webp",
  "/testimonial_bg.webp", "/work_exp.webp", "/hi-hand.webp", "/star.webp",
  "/cloud.avif",
];

// Video poster frames (~13 KB each) so every video area shows a picture instantly.
const POSTERS = [
  "/c1_p1_1-poster.webp", "/c1-s1-poster.webp", "/c1-s2-poster.webp",
  "/c1-s3-poster.webp", "/C3-poster.webp", "/c3-s3-poster.webp",
];

const PROJECT_CHUNKS = [
  () => import("@/pages/ProjectDetail1"),
  () => import("@/pages/ProjectDetail2"),
  () => import("@/pages/ProjectDetail3"),
  () => import("@/pages/ProjectDetail4"),
];

export function whenIdle(fn: () => void, timeout = 2000) {
  const ric = (window as any).requestIdleCallback as
    | ((cb: () => void, o?: { timeout: number }) => void)
    | undefined;
  if (ric) ric(fn, { timeout });
  else setTimeout(fn, 300);
}

export function afterLoad(fn: () => void) {
  if (document.readyState === "complete") fn();
  else window.addEventListener("load", fn, { once: true });
}

/** True when the visitor has asked the browser to save data. */
export function saveDataOn(): boolean {
  return Boolean((navigator as any).connection?.saveData);
}

function preloadImage(src: string) {
  const img = new Image();
  img.decoding = "async";
  img.src = src;
}

/** Download the small stuff (images, posters, project page code) in the background. */
export function warmSiteMedia() {
  if (saveDataOn()) return;
  afterLoad(() =>
    whenIdle(() => {
      POSTERS.forEach(preloadImage);
      IMAGES.forEach(preloadImage);
      // Fetch the code for the project pages so opening one doesn't wait on JS.
      PROJECT_CHUNKS.forEach((load) => load().catch(() => {}));
    }),
  );
}

/**
 * Native `loading="lazy"` waits until an image is near the screen, which on a
 * bad connection means a visible blank gap while you scroll. Once the page has
 * loaded, flip every lazy image to eager so it downloads right away
 * (they're all small WebP files).
 */
export function eagerLoadLazyImages() {
  if (saveDataOn()) return;
  const flip = () =>
    document.querySelectorAll<HTMLImageElement>('img[loading="lazy"]').forEach((img) => {
      img.loading = "eager";
    });

  afterLoad(() =>
    whenIdle(() => {
      flip();
      // Pages/sections that mount later (route changes, Suspense) get the same treatment.
      let t: number | undefined;
      new MutationObserver(() => {
        window.clearTimeout(t);
        t = window.setTimeout(flip, 150);
      }).observe(document.body, { childList: true, subtree: true });
    }),
  );
}
