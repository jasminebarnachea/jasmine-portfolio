"use client";

import { useEffect } from "react";

const revealSelector = [
  ".hero-grid .intro h1",
  ".hero-grid .hero-location",
  ".hero-grid .hero-role",
  ".hero-grid .hero-summary",
  ".hero-grid .socials",
  ".stats .stat",
  ".section-head",
  ".professional-summary-copy p",
  ".about-education .experience-list",
  ".about-education .experience-item",
  ".stack-group",
  ".stack-chip",
  ".desktop-project-card",
  ".desktop-project-see-all",
  ".certificate-name-list a",
  ".certificate-screenshot-card",
  ".gear-card",
  ".desktop-contact h2",
  ".desktop-contact > p",
  ".desktop-contact-email",
  ".desktop-contact-links",
  ".mobile-project-showcase .project-details",
  ".contact .shell > .section-title",
  ".contact .shell > h2",
  ".contact .shell > p",
  ".contact .shell > .email",
  ".contact-bottom > span",
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
      { threshold: 0.12, rootMargin: "0px 0px -7% 0px" },
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
