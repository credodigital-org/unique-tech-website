import { useEffect } from "react";

const CARDS = [
  ".homecard",
  ".projectcard",
  ".benefit",
  ".service-catalog-card",
  ".portfolio-card",
  ".contact-detail-card",
  ".advantage-card",
  ".button",
].join(",");

// Buttons that get a short "pressed" look on tap (so it shows even when the tap navigates away).
const PRESSABLE = ".button, .navcta, .filter-button, .menubtn, .social a";

/**
 * Phones and tablets have no real "hover". On touch devices this gives the cards
 * their hover look as they pass through the middle of the screen, so the blue
 * card / white icon effect is visible while scrolling (and on tap, via :hover).
 * Buttons get the same in-view look, plus a "pressed" look for a moment after a tap.
 */
function TouchHover() {
  // Pressed look for buttons (all devices; the CSS only applies it on touch / small screens).
  useEffect(() => {
    const press = (event) => {
      const button = event.target.closest?.(PRESSABLE);
      if (!button) return;
      button.classList.add("is-pressed");
      setTimeout(() => button.classList.remove("is-pressed"), 600);
    };
    document.addEventListener("pointerdown", press, { passive: true });
    return () => document.removeEventListener("pointerdown", press);
  }, []);

  useEffect(() => {
    if (!window.matchMedia("(hover: none)").matches || !("IntersectionObserver" in window)) {
      return undefined;
    }

    const seen = new WeakSet();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => entry.target.classList.toggle("is-active", entry.isIntersecting));
      },
      { rootMargin: "-42% 0px -42% 0px", threshold: 0 }
    );

    const scan = () => {
      document.querySelectorAll(CARDS).forEach((card) => {
        if (!seen.has(card)) {
          seen.add(card);
          observer.observe(card);
        }
      });
    };

    scan();
    const mutations = new MutationObserver(scan); // routes and filters add new cards
    mutations.observe(document.getElementById("root"), { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutations.disconnect();
    };
  }, []);

  return null;
}

export default TouchHover;
