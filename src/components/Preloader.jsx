import { useEffect, useState } from "react";

import "./Preloader.css";
import logoLarge from "../assets/images/preloader-logo.png";
import wordmark from "../assets/images/unique-tech-wordmark.png";
import heroImage from "../assets/images/hero-reference.webp";

const MIN_LOAD_MS = 2000; // the logo takes at least this long to fill
const EXIT_MS = 1500; // must cover the whole strip animation in Preloader.css (last strip ends at ~1360ms)
const REVEAL_MS = 2600; // how long the "site-reveal" class stays on <html>
const STRIPS = 5;

const reducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Wait (briefly) for the web fonts and the hero photo, so nothing swaps or pops in
// after the screen has opened.
const waitForAssets = () => {
  const fonts = document.fonts?.ready ?? Promise.resolve();
  const hero = new Promise((resolve) => {
    const img = new Image();
    img.src = heroImage;
    if (img.decode) img.decode().then(resolve, resolve);
    else img.onload = img.onerror = resolve;
  });
  const timeout = new Promise((resolve) => setTimeout(resolve, 3000)); // never wait longer than this
  return Promise.race([Promise.all([fonts, hero]), timeout]);
};

/**
 * Loading screen shown when the site opens.
 * The logo "colours in" from the bottom as the page loads. When it is full the
 * screen opens in vertical strips and the page content animates in
 * (the `site-reveal` class on <html>, styled in App.css).
 */
function Preloader() {
  const [progress, setProgress] = useState(0); // 0-100
  const [leaving, setLeaving] = useState(false);
  const [gone, setGone] = useState(false);

  // Fill to 94%, wait for the page to finish loading, then complete.
  useEffect(() => {
    const duration = reducedMotion() ? 300 : MIN_LOAD_MS;
    const start = performance.now();
    let frame;
    let timer;
    let cancelled = false;

    const complete = () => {
      setProgress(100);
      timer = setTimeout(() => setLeaving(true), 350);
    };

    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1);
      setProgress(94 * (1 - (1 - t) ** 2.2));
      if (t < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        const whenLoaded =
          document.readyState === "complete"
            ? Promise.resolve()
            : new Promise((resolve) => window.addEventListener("load", resolve, { once: true }));
        whenLoaded.then(waitForAssets).then(() => {
          if (!cancelled) complete();
        });
      }
    };

    frame = requestAnimationFrame(tick);
    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      clearTimeout(timer);
    };
  }, []);

  // When the screen starts opening: animate the page in, then remove the loader.
  useEffect(() => {
    if (!leaving) return undefined;
    const root = document.documentElement;
    root.classList.add("site-reveal");
    const removeLoader = setTimeout(() => setGone(true), reducedMotion() ? 0 : EXIT_MS);
    // Swap, don't just remove: removing "site-reveal" alone made the header and hero fall back to
    // their normal entrance animations, which replayed (a second, unwanted fade-in).
    const finishReveal = setTimeout(() => {
      root.classList.add("site-settled");
      root.classList.remove("site-reveal");
    }, REVEAL_MS);
    return () => {
      clearTimeout(removeLoader);
      clearTimeout(finishReveal);
    };
  }, [leaving]);

  // Lock page scroll while the loading screen is visible.
  useEffect(() => {
    if (gone) return undefined;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [gone]);

  if (gone) return null;

  return (
    <div className={`preloader${leaving ? " is-leaving" : ""}`} role="status" aria-label="Loading">
      <div className="preloader-strips" aria-hidden="true">
        {Array.from({ length: STRIPS }, (_, i) => (
          <span key={i} style={{ "--i": i }} />
        ))}
      </div>

      <div className="preloader-content">
        <div className="preloader-mark" style={{ "--fill": `${progress}%` }}>
          <img className="preloader-mark-base" src={logoLarge} alt="" />
          <img className="preloader-mark-fill" src={logoLarge} alt="" />
        </div>
        <img className="preloader-wordmark" src={wordmark} alt="Unique Tech General Maintenance LLC" />
      </div>
    </div>
  );
}

export default Preloader;
