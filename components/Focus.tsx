"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import capstoneOne from "../assets/picture/capstone1.jpg";
import capstoneTwo from "../assets/picture/casptone2.jpg";
import recipeOne from "../assets/picture/recipe1.jpg";
import recipeTwo from "../assets/picture/recipe2.jpg";
import aiOne from "../assets/picture/ai.jpg";
import aiTwo from "../assets/picture/ai2.jpg";
import aiThree from "../assets/picture/ai3.jpg";
import { projects } from "../data/portfolio";

const projectImages = [
  [recipeOne, recipeTwo],
  [capstoneOne, capstoneTwo],
  [aiOne, aiTwo, aiThree],
];

export default function Focus() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll<HTMLElement>(".scroll-reveal");
    if (!cards?.length) return;

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.2 },
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return <section id="focus" className="section" ref={sectionRef}>
    <div className="section-head"><span className="section-title">03 — projects</span></div>
    <div className="project-grid">
      {projects.map((project, index) => <article className="project-card scroll-reveal" key={project.title}>
        <div className={`project-gallery ${projectImages[index].length === 3 ? "project-gallery--three" : ""}`}>
          {projectImages[index].map((image, imageIndex) => <a className={`project-image-link image-${imageIndex + 1}`} href={image.src} target="_blank" rel="noreferrer" key={image.src} aria-label={`View ${project.title} app screen ${imageIndex + 1} full size`}><Image src={image} alt={`${project.title} app screen ${imageIndex + 1}`} className="project-image" /></a>)}
        </div>
        <div className="project-details"><div><span className="project-number">0{index + 1}</span><h3>{project.title}</h3></div><p>{project.description}</p><div className="chips">{project.languages.map((language) => <span className="chip" key={language}>{language}</span>)}</div>{project.website && <a className="project-link" href={project.website} target="_blank" rel="noreferrer">Visit live site ↗</a>}</div>
      </article>)}
    </div>
  </section>;
}
