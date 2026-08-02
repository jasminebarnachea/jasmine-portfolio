"use client";

import Image, { type StaticImageData } from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import { Copy01Icon, ExternalLinkIcon, PlayCircleIcon } from "@hugeicons/core-free-icons";
import { useState } from "react";
import { projects } from "../data/portfolio";
import { CircularCarousel } from "./ui/circular-carousel";
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
import triFareOverview from "../assets/picture/trifare-agoo-overview.png";

const projectImages: Record<string, StaticImageData[]> = {
  "Recipe Finder": [recipeOne, recipeTwo],
  "PetSit Connect": [capstoneOne, capstoneTwo],
  AiDeaMo: [aiOne, aiTwo, aiThree],
  "Cafe Pulse": [advertiseOne, advertiseTwo, advertiseThree],
  "LGU-DigiVault": [lguOne, lguTwo, lguThree],
  "CareerBridge AI": [careerBridgeOne, careerBridgeTwo, careerBridgeThree],
  "TriFare Agoo": [triFareOverview],
};

type DesktopProjectsProps = {
  variant?: "featured" | "archive";
};

export default function DesktopProjects({ variant = "featured" }: DesktopProjectsProps) {
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null);
  const orderedProjects = variant === "featured"
    ? [projects[3], projects[6], projects[5], projects[4], projects[2], projects[1], projects[0]]
    : [projects[4], projects[2], projects[1], projects[0]];

  const copyUrl = async (url: string) => {
    await navigator.clipboard?.writeText(url);
    setCopiedUrl(url);
    window.setTimeout(() => setCopiedUrl((current) => current === url ? null : current), 1400);
  };

  const renderProjectCard = (index: number, isActive = true) => {
    const project = orderedProjects[index];
    const projectNumber = variant === "archive" ? index + 4 : index + 1;
    const projectClass = project.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
    return <article className={`desktop-project-card desktop-project-card--${projectClass} ${variant === "featured" ? "desktop-project-card--coverflow" : "desktop-project-card--archive"} ${isActive ? "is-front" : ""}`}>
      <div className={`desktop-project-gallery desktop-project-gallery--${projectImages[project.title].length}`}>
        {projectImages[project.title].map((image, imageIndex) => <a
          href={image.src}
          target="_blank"
          rel="noreferrer"
          key={image.src}
          aria-label={`View ${project.title} screenshot ${imageIndex + 1}`}
          onClick={(event) => {
            if (!isActive) event.preventDefault();
          }}
        >
          <Image src={image} alt={`${project.title} screenshot ${imageIndex + 1}`} />
        </a>)}
      </div>
      <div className="desktop-project-heading"><span>0{projectNumber}</span><h3>{project.title}</h3></div>
      <p>{project.description}</p>
      <div className="chips">{project.languages.map((language) => <span className="chip" key={language}>{language}</span>)}</div>
      {project.website && <div className="desktop-project-url">
        <span title={project.website}>{project.website.replace(/^https?:\/\//, "").replace(/\/$/, "")}</span>
        <button type="button" onClick={() => copyUrl(project.website!)} aria-label={`Copy ${project.title} website URL`} title={copiedUrl === project.website ? "Copied" : "Copy URL"}>
          <HugeiconsIcon icon={Copy01Icon} size={13} strokeWidth={1.8} aria-hidden="true" />
        </button>
        <a href={project.website} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} website`} title="Open website">
          <HugeiconsIcon icon={ExternalLinkIcon} size={13} strokeWidth={1.8} aria-hidden="true" />
        </a>
      </div>}
      {project.video && <a className="desktop-project-demo" href={project.video} target="_blank" rel="noreferrer">
        <HugeiconsIcon icon={PlayCircleIcon} size={14} strokeWidth={1.8} aria-hidden="true" />
        <span>View demo</span>
      </a>}
    </article>;
  };

  return <section id="projects" className={`section desktop-projects ${variant === "archive" ? "projects-archive" : ""}`}>
    <div className="section-head">
      <span className="section-title">01 — Projects</span>
    </div>
    {variant === "featured" ? <div className="desktop-project-circular">
      <CircularCarousel
        autoPlay={false}
        items={orderedProjects.map((project) => ({
          id: project.title,
          title: project.title,
          description: project.description,
          tag: project.languages[0],
        }))}
        renderItem={(_, index, isActive) => renderProjectCard(index, isActive)}
      />
    </div> : <div className="projects-archive-list">
      {orderedProjects.map((project, index) => <div key={project.title}>{renderProjectCard(index)}</div>)}
    </div>}
  </section>;
}
