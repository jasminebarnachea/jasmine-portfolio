"use client";

import { useEffect } from "react";

const revealSelector = [
  ".stats .stat",
  ".section-head",
  ".about-education .experience-list",
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

const mobileRevealSelector = [
  ".hero-grid .intro h1",
  ".hero-grid .intro p",
  ".hero-grid .socials",
].join(", ");

export default function ScrollReveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const selector = window.matchMedia("(max-width: 650px)").matches
      ? `${revealSelector}, ${mobileRevealSelector}`
      : revealSelector;
    const elements = document.querySelectorAll<HTMLElement>(selector);
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
