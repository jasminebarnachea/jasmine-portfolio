"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import { Cancel01Icon, ExternalLinkIcon, PlayCircleIcon } from "@hugeicons/core-free-icons";
import capstoneOne from "../assets/picture/capstone1.jpg";
import capstoneTwo from "../assets/picture/casptone2.jpg";
import recipeOne from "../assets/picture/recipe1.jpg";
import recipeTwo from "../assets/picture/recipe2.jpg";
import aiOne from "../assets/picture/ai.jpg";
import aiTwo from "../assets/picture/ai2.jpg";
import aiThree from "../assets/picture/ai3.jpg";
import advertiseOne from "../assets/picture/advertise2.png";
import advertiseTwo from "../assets/picture/advertise3.png";
import advertiseThree from "../assets/picture/advertise.jpg";
import lguOne from "../assets/picture/lgu2.png";
import lguTwo from "../assets/picture/lgu3.png";
import lguThree from "../assets/picture/lgu.png";
import careerBridgeOne from "../assets/picture/cb.png";
import careerBridgeTwo from "../assets/picture/cb1.png";
import careerBridgeThree from "../assets/picture/cb2.png";
import { projects } from "../data/portfolio";
import CoverflowGallery from "./originkit/CoverflowGallery";

const projectImages = [
  [recipeOne, recipeTwo],
  [capstoneOne, capstoneTwo],
  [aiOne, aiTwo, aiThree],
  [advertiseOne, advertiseTwo, advertiseThree],
  [lguOne, lguTwo, lguThree],
  [careerBridgeOne, careerBridgeTwo, careerBridgeThree],
];

export default function Focus() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

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

  useEffect(() => {
    if (!activeVideo) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveVideo(null);
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [activeVideo]);

  return <section id="focus" className="section" ref={sectionRef}>
    <div className="section-head"><span className="section-title">03 — projects</span></div>
    <div className="project-card-coverflow">
      <CoverflowGallery
        autoplay={false}
        cardWidth={360}
        cardHeight={540}
        radius={22}
        gap={5}
        tilt={8}
        sideTilt={4}
        opacity={48}
        slides={projects.map((project, index) => ({
          image: { src: projectImages[index][0]?.src || "", alt: project.title },
          title: project.title,
        }))}
        renderSlide={(_, index, isActive) => {
          const project = projects[index];
          return <article className={`project-card project-card--coverflow ${isActive ? "is-front" : ""}`}>
            <div className={`project-gallery ${projectImages[index].length === 3 ? "project-gallery--three" : ""} ${projectImages[index].length === 0 ? "project-gallery--empty" : ""}`}>
              {projectImages[index].length === 0
                ? <span className="project-placeholder" aria-hidden="true">CB<span>AI</span></span>
                : projectImages[index].map((image, imageIndex) => <div
                  className={`project-image-frame image-${imageIndex + 1}`}
                  key={image.src}
                ><Image src={image} alt={`${project.title} app screen ${imageIndex + 1}`} className="project-image" /></div>)}
            </div>
            <div className="project-details"><div><span className="project-number">0{index + 1}</span><h3>{project.title}</h3></div><p>{project.description}</p><div className="chips">{project.languages.map((language) => <span className="chip" key={language}>{language}</span>)}</div><div className="project-actions">{project.video && <button className="project-link project-video-button icon-link" type="button" onClick={() => isActive && setActiveVideo(project.video!)}><HugeiconsIcon icon={PlayCircleIcon} size={15} strokeWidth={1.8} aria-hidden="true" />Watch demo</button>}{project.website && <a className="project-link project-live-link icon-link" href={project.website} target="_blank" rel="noreferrer" onClick={(event) => { if (!isActive) event.preventDefault(); }}>Visit live site<HugeiconsIcon icon={ExternalLinkIcon} size={14} strokeWidth={1.8} aria-hidden="true" /></a>}</div></div>
          </article>;
        }}
      />
    </div>
    {activeVideo && <div className="video-modal-backdrop" role="presentation" onMouseDown={(event) => {
      if (event.target === event.currentTarget) setActiveVideo(null);
    }}>
      <div className="video-modal" role="dialog" aria-modal="true" aria-label="PetSit Connect demo video">
        <button className="video-modal-close" type="button" onClick={() => setActiveVideo(null)} aria-label="Close video"><HugeiconsIcon icon={Cancel01Icon} size={24} strokeWidth={1.7} aria-hidden="true" /></button>
        <video src={activeVideo} controls autoPlay playsInline preload="metadata">Your browser does not support this video.</video>
      </div>
    </div>}
  </section>;
}
