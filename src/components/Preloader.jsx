import { useEffect, useState } from "react";

import "./Preloader.css";
import logoMark from "../assets/images/unique-tech-logo-mark.png";

const MIN_LOAD_MS = 1800; // the counter takes at least this long to reach 95%
const EXIT_MS = 800; // must match the slide-up transition in Preloader.css

// Loading styles: "classic" (slide up), "ring" (progress ring), "curtain" (opens from the middle), "reveal" (closes to a dot).
const VARIANTS = ["classic", "ring", "curtain", "reveal"];
const DEFAULT_VARIANT = "classic";

// Add ?loader=ring (or curtain / reveal / classic) to the URL to preview a style.
const getVariant = () => {
  const requested = new URLSearchParams(window.location.search).get("loader");
  return VARIANTS.includes(requested) ? requested : DEFAULT_VARIANT;
};

const RING_LENGTH = 2 * Math.PI * 70;

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Full-screen loading screen shown when the site is opened:
 * logo reveal + 0-100% counter, then it slides up and is removed.
 */
function Preloader() {
  const [variant] = useState(getVariant);
  const [percent, setPercent] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const [gone, setGone] = useState(false);

  // Count up to 95%, wait for the page to finish loading, then complete to 100%.
  useEffect(() => {
    const duration = prefersReducedMotion() ? 300 : MIN_LOAD_MS;
    const start = performance.now();
    let frame;
    let timer;

    const complete = () => {
      setPercent(100);
      timer = setTimeout(() => setLeaving(true), 300);
    };

    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1);
      setPercent(Math.round(95 * (1 - (1 - t) ** 2))); // ease-out
      if (t < 1) {
        frame = requestAnimationFrame(tick);
      } else if (document.readyState === "complete") {
        complete();
      } else {
        window.addEventListener("load", complete, { once: true });
      }
    };

    frame = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(timer);
      window.removeEventListener("load", complete);
    };
  }, []);

  // Remove it from the DOM after the slide-up finishes.
  useEffect(() => {
    if (!leaving) return undefined;
    const timer = setTimeout(() => setGone(true), prefersReducedMotion() ? 0 : EXIT_MS);
    return () => clearTimeout(timer);
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

  const logo = (
    <span className="preloader-logo" style={{ "--logo-src": `url("${logoMark}")` }}>
      <img src={logoMark} alt="" width="70" height="70" />
      <span className="preloader-sheen" aria-hidden="true" />
    </span>
  );

  return (
    <div
      className={`preloader preloader--${variant}${leaving ? " is-leaving" : ""}`}
      role="status"
      aria-label="Loading"
    >
      {variant === "ring" ? (
        <div className="preloader-ring">
          <svg viewBox="0 0 150 150" aria-hidden="true">
            <circle className="ring-track" cx="75" cy="75" r="70" />
            <circle
              className="ring-fill"
              cx="75"
              cy="75"
              r="70"
              strokeDasharray={RING_LENGTH}
              strokeDashoffset={RING_LENGTH * (1 - percent / 100)}
            />
          </svg>
          {logo}
        </div>
      ) : (
        logo
      )}

      <h2 className="preloader-title">
        UNIQUE TECH
        <span>GENERAL MAINTENANCE LLC</span>
      </h2>

      {variant !== "ring" && (
        <div className="preloader-bar">
          <span style={{ width: `${percent}%` }} />
        </div>
      )}
      <p className="preloader-percent">{percent}%</p>
    </div>
  );
}

export default Preloader;
