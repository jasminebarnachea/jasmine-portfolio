"use client";

import { useEffect } from "react";

const revealSelector = [
  ".hero-grid .profile-effect-card",
  ".hero-grid .hero-greeting",
  ".hero-grid .hero-summary p",
  ".hero-profile-meta > div",
  ".section-head",
  ".desktop-project-card",
  ".mobile-project-showcase .project-card",
  ".stack-group",
  ".stack-chip",
  ".service-card-wrap",
  ".education-summary .experience-item",
  ".certificate-name-list a",
  ".certificate-screenshot-card",
  ".certificates-contact .experience-item",
  ".social-card-heading",
  ".social-orbit-card",
  ".gear-tilt-item",
].join(", ");

const textRevealSelector = [
  "main h1", "main h2", "main h3", "main h4",
  "main p", "main strong",
  "main .section-title", "main .mono-label",
  "main .chip", "main .stack-chip",
  "main .timeline-year", "main .timeline-place",
  "footer h3", "footer p", "footer strong", "footer li", "footer span",
].join(", ");

export default function ScrollReveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const elements = document.querySelectorAll<HTMLElement>(revealSelector);
    const textElements = document.querySelectorAll<HTMLElement>(textRevealSelector);
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("scroll-pop-visible");
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.12, rootMargin: "0px 0px -7% 0px" },
    );

    elements.forEach((element, index) => {
      element.classList.add("scroll-pop");
      element.style.setProperty("--scroll-pop-delay", `${Math.min(index % 5, 4) * 65}ms`);
      observer.observe(element);
    });

    textElements.forEach((element, index) => {
      element.classList.add("scroll-text");
      element.style.setProperty("--scroll-text-delay", `${Math.min(index % 4, 3) * 45}ms`);
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
