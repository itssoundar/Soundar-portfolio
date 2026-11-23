import { useEffect, useRef, useState } from "react";
import { afterLoad, saveDataOn, whenIdle } from "@/lib/warmMedia";

interface LazyVideoProps {
  /** Path to the mp4 file. A poster is expected at `<name>-poster.webp`. */
  src: string;
  poster?: string;
  className?: string;
  ariaLabel?: string;
}

// Videos that are off-screen are downloaded one at a time in the background,
// so they never fight each other (or the visible content) for a slow connection.
const queue: Array<() => Promise<void>> = [];
let busy = false;
function pump() {
  if (busy) return;
  const job = queue.shift();
  if (!job) return;
  busy = true;
  job().finally(() => {
    busy = false;
    pump();
  });
}

/**
 * Looping, muted "screen recording" video.
 * - The poster frame (~13 KB) shows instantly.
 * - A video that is near the screen starts downloading immediately.
 * - Every other video downloads quietly in the background, one at a time, once
 *   the page has finished loading — so it's ready before you scroll to it.
 * - It plays only while visible, and not at all for users who prefer reduced
 *   motion (they just see the poster).
 */
export function LazyVideo({ src, poster, className, ariaLabel }: LazyVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const loadedRef = useRef(false);
  const posterSrc = poster ?? src.replace(/\.mp4$/, "-poster.webp");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const startLoading = () => {
      loadedRef.current = true;
      setShouldLoad(true);
    };

    // Near the screen (generous margin): download right now.
    const loader = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          startLoading();
          loader.disconnect();
        }
      },
      { rootMargin: "1500px 0px" },
    );
    loader.observe(el);

    // Everything else: queue it for background download after the page is ready.
    let cancelled = false;
    if (!reduceMotion && !saveDataOn()) {
      afterLoad(() =>
        whenIdle(() => {
          if (cancelled) return;
          queue.push(
            () =>
              new Promise<void>((resolve) => {
                if (cancelled || loadedRef.current) return resolve();
                startLoading();
                const done = () => {
                  el.removeEventListener("canplaythrough", done);
                  el.removeEventListener("error", done);
                  window.clearTimeout(timer);
                  resolve();
                };
                const timer = window.setTimeout(done, 45000); // never block the queue forever
                el.addEventListener("canplaythrough", done);
                el.addEventListener("error", done);
              }),
          );
          pump();
        }, 4000),
      );
    }

    // Play only while actually on screen (saves CPU/battery on long pages).
    const player = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (reduceMotion) return;
          if (e.isIntersecting) el.play().catch(() => {});
          else el.pause();
        });
      },
      { threshold: 0.15 },
    );
    player.observe(el);

    return () => {
      cancelled = true;
      loader.disconnect();
      player.disconnect();
    };
  }, []);

  return (
    <video
      ref={ref}
      src={shouldLoad ? src : undefined}
      poster={posterSrc}
      preload={shouldLoad ? "auto" : "none"}
      loop
      muted
      playsInline
      aria-label={ariaLabel}
      className={className}
    />
  );
}
