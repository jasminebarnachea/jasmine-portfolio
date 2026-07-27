"use client";

import { useEffect } from "react";

const revealSelector = [
  ".section-head",
  ".about-education .experience-item",
  ".about-line",
  ".timeline-row",
  ".stack-group",
  ".project-details",
  ".cert-card h3",
  ".cert-card p",
  ".contact .shell > .section-title",
  ".contact .shell > h2",
  ".contact .shell > p",
  ".contact .shell > .email",
].join(", ");

export default function ScrollReveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const elements = document.querySelectorAll<HTMLElement>(revealSelector);
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("scroll-pop-visible");
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.15 },
    );

    elements.forEach((element, index) => {
      element.classList.add("scroll-pop");
      element.style.setProperty("--scroll-pop-delay", `${Math.min(index % 4, 3) * 70}ms`);
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
