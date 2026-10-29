import { useEffect } from "react";

const CARDS = [
  ".homecard",
  ".projectcard",
  ".benefit",
  ".service-catalog-card",
  ".portfolio-card",
  ".contact-detail-card",
  ".advantage-card",
].join(",");

/**
 * Phones and tablets have no real "hover". On touch devices this gives the cards
 * their hover look as they pass through the middle of the screen, so the blue
 * card / white icon effect is visible while scrolling (and on tap, via :hover).
 */
function TouchHover() {
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
