import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const TARGETS = [
  ".page-main > section",
  ".page-main .homecard",
  ".page-main .projectcard",
  ".page-main .service-catalog-card",
  ".page-main .advantage-card",
  ".page-main .portfolio-card",
  ".page-main .benefit",
  ".page-main .contact-detail-card",
  ".page-main .miniphotos img",
  ".footer",
].join(",");

function ScrollReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    const targets = [...document.querySelectorAll(TARGETS)];
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced || !("IntersectionObserver" in window)) {
      targets.forEach((node) => node.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0, rootMargin: "0px 0px -6% 0px" }
    );

    targets.forEach((node, index) => {
      node.style.setProperty("--reveal-delay", `${(index % 5) * 55}ms`);
      node.classList.add("reveal-section");
      observer.observe(node);
    });

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}

export default ScrollReveal;
