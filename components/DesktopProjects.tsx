"use client";

import { projects } from "../data/portfolio";
import { HugeiconsIcon } from "@hugeicons/react";
import { ExternalLinkIcon, PlayCircleIcon } from "@hugeicons/core-free-icons";
import { useState } from "react";

export default function DesktopProjects() {
  const [showAll, setShowAll] = useState(false);
  const orderedProjects = [projects[4], projects[5], projects[0], projects[1], projects[2], projects[3]];
  const visibleProjects = showAll ? orderedProjects : orderedProjects.slice(0, 2);

  return <section className="section desktop-projects">
    <div className="section-head"><span className="section-title">06 — Projects</span></div>
    <div className="desktop-project-list">{visibleProjects.map((project, index) => {
      const href = project.website || project.video;
      return <article className="desktop-project-card" key={project.title}>
        <div className="desktop-project-heading"><span>0{index + 1}</span><h3>{project.title}</h3></div>
        <p>{project.description}</p>
        <div className="chips">{project.languages.map((language) => <span className="chip" key={language}>{language}</span>)}</div>
        {href && <a href={href} target="_blank" rel="noreferrer">
          <HugeiconsIcon icon={project.video ? PlayCircleIcon : ExternalLinkIcon} size={14} strokeWidth={1.8} aria-hidden="true" />
          {project.video ? "View demo" : "Visit live site"}
        </a>}
      </article>;
    })}</div>
    <button className="desktop-project-see-all" type="button" onClick={() => setShowAll((current) => !current)}>
      {showAll ? "Show less" : "See all projects"}
      <span aria-hidden="true">{showAll ? "↑" : "↓"}</span>
    </button>
  </section>;
}
