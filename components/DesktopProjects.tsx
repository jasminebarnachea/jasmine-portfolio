"use client";

import { projects } from "../data/portfolio";
import { HugeiconsIcon } from "@hugeicons/react";
import { Copy01Icon, ExternalLinkIcon, PlayCircleIcon } from "@hugeicons/core-free-icons";
import { useState } from "react";

export default function DesktopProjects() {
  const [showAll, setShowAll] = useState(false);
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null);
  const orderedProjects = [projects[4], projects[5], projects[0], projects[1], projects[2], projects[3]];
  const visibleProjects = showAll ? orderedProjects : orderedProjects.slice(0, 2);
  const copyUrl = async (url: string) => {
    await navigator.clipboard?.writeText(url);
    setCopiedUrl(url);
    window.setTimeout(() => setCopiedUrl((current) => current === url ? null : current), 1400);
  };

  return <section className="section desktop-projects">
    <div className="section-head"><span className="section-title">06 — Projects</span></div>
    <div className="desktop-project-list">{visibleProjects.map((project, index) => {
      return <article className="desktop-project-card" key={project.title}>
        <div className="desktop-project-heading"><span>0{index + 1}</span><h3>{project.title}</h3></div>
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
          View demo
        </a>}
      </article>;
    })}</div>
    <button className="desktop-project-see-all" type="button" onClick={() => setShowAll((current) => !current)}>
      {showAll ? "Show less" : "See all projects"}
      <span aria-hidden="true">{showAll ? "↑" : "↓"}</span>
    </button>
  </section>;
}
