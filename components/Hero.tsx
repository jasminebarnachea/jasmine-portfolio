"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Cancel01Icon, Copy01Icon, Download02Icon, File01Icon, Github01Icon, Mail02Icon } from "@hugeicons/core-free-icons";
import transparentProfilePhoto from "../assets/picture/jasmineicon-transparent.png";
import resumeImage from "../assets/picture/JasmineBarnachea-Portfolio.jpg";
import ProfileCard from "./ui/ProfileCard";
import "./ui/ProfileCard.css";

export default function Hero() {
  const [emailOpen, setEmailOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const email = "barnacheajassy@gmail.com";

  useEffect(() => {
    if (!resumeOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setResumeOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [resumeOpen]);

  const copyEmail = async () => {
    await navigator.clipboard?.writeText(email);
  };

  return <section className="hero">
    <div className="hero-grid">
      <div className="portrait-wrap reveal">
        <ProfileCard
          avatarUrl={transparentProfilePhoto.src}
          name="Jasmine Barnachea"
          title="Full-Stack Developer"
          className="hero-profile-card"
        />
      </div>
      <div className="intro reveal">
        <div className="hero-greeting" aria-label="Hi. I'm Jasmine.">
          <span>Hi.</span>
          <p>I&apos;m <em>Jasmine.</em></p>
        </div>
        <div className="hero-summary">
          <p>I’m a Full-Stack Developer who creates practical, user-friendly web and mobile applications. I enjoy transforming ideas into responsive interfaces, seamless user experiences, and reliable systems.</p>
          <p>I’m currently open to full-stack web and mobile development opportunities where I can contribute my skills, collaborate with creative teams, and continue growing as a developer.</p>
        </div>
        <div className="hero-profile-meta" aria-label="Profile details">
          <div><span>Role</span><strong>Full-Stack<br />Developer</strong></div>
          <div><span>Location</span><strong>La Union,<br />Philippines</strong></div>
          <div><span>Status</span><strong>Open to<br />Work</strong></div>
          <div><span>Focus</span><strong>Web &amp; Mobile<br />Development</strong></div>
        </div>
      </div>
    </div>
    {emailOpen && <div className="email-modal-backdrop" role="presentation" onClick={() => setEmailOpen(false)}>
      <div className="email-modal" role="dialog" aria-modal="true" aria-labelledby="email-modal-title" onClick={(event) => event.stopPropagation()}>
        <button className="email-modal-close" type="button" aria-label="Close email dialog" onClick={() => setEmailOpen(false)}><HugeiconsIcon icon={Cancel01Icon} size={23} strokeWidth={1.7} aria-hidden="true" /></button>
        <span className="section-title">Get in touch</span>
        <h2 id="email-modal-title">let&apos;s connect</h2>
        <p>I&apos;m open to development opportunities, collaborative projects, and new ideas.</p>
        <div className="email-modal-address"><span>{email}</span><button className="icon-button-label" type="button" onClick={copyEmail}><HugeiconsIcon icon={Copy01Icon} size={15} strokeWidth={1.8} aria-hidden="true" />Copy</button></div>
        <a className="email-modal-open icon-link icon-link--center" href={`mailto:${email}`}><HugeiconsIcon icon={Mail02Icon} size={16} strokeWidth={1.7} aria-hidden="true" />Open mail app</a>
      </div>
    </div>}
    {resumeOpen && <div className="resume-modal-backdrop" role="presentation" onClick={() => setResumeOpen(false)}>
      <div className="resume-modal" role="dialog" aria-modal="true" aria-labelledby="resume-modal-title" onClick={(event) => event.stopPropagation()}>
        <button className="email-modal-close resume-modal-close" type="button" aria-label="Close resume preview" onClick={() => setResumeOpen(false)}><HugeiconsIcon icon={Cancel01Icon} size={23} strokeWidth={1.7} aria-hidden="true" /></button>
        <div className="resume-modal-head"><div><span className="section-title">Resume</span><h2 id="resume-modal-title">Jasmine Barnachea</h2></div><a className="resume-download icon-link" href="/Jasmine-Barnachea-Resume.pdf" download><HugeiconsIcon icon={Download02Icon} size={15} strokeWidth={1.8} aria-hidden="true" />Download PDF</a></div>
        <div className="resume-preview"><Image src={resumeImage} alt="Jasmine Barnachea resume" /></div>
      </div>
    </div>}
  </section>;
}
