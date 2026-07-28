"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Cancel01Icon, Copy01Icon, Download02Icon, File01Icon, Github01Icon, Mail02Icon } from "@hugeicons/core-free-icons";
import profilePhoto from "../assets/picture/jasmineicon.png";
import transparentProfilePhoto from "../assets/picture/jasmineicon-transparent.png";
import resumeImage from "../assets/picture/JasmineBarnachea-Portfolio.jpg";

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
        <div className="portrait">
          <Image src={profilePhoto} alt="Jasmine Barnachea" className="profile-photo profile-photo--opaque" priority />
          <Image src={transparentProfilePhoto} alt="" className="profile-photo profile-photo--transparent" aria-hidden="true" />
        </div>
      </div>
      <div className="intro reveal">
        <h1>Jasmine<br />Barnachea</h1>
        <p>I’m an Information Technology graduate. I’m building a strong foundation in web and mobile development, databases, and networks.</p>
        <p>Right now, I’m looking for an entry-level opportunity where I can learn from a team and turn my skills into useful work.</p>
        <div className="socials"><a className="icon-link" href="#email" onClick={(event) => { event.preventDefault(); setEmailOpen(true); }}><HugeiconsIcon icon={Mail02Icon} size={15} strokeWidth={1.7} aria-hidden="true" />email</a><a className="icon-link" href="https://github.com/jasminebarnachea" target="_blank" rel="noreferrer"><HugeiconsIcon icon={Github01Icon} size={15} strokeWidth={1.7} aria-hidden="true" />github</a><a className="icon-link" href="#resume" onClick={(event) => { event.preventDefault(); setResumeOpen(true); }}><HugeiconsIcon icon={File01Icon} size={15} strokeWidth={1.7} aria-hidden="true" />resume</a></div>
      </div>
    </div>
    <div className="stats"><div className="stat"><strong>BSIT</strong><span>Graduate</span></div><div className="stat"><strong>2026</strong><span>Class of</span></div><div className="stat"><strong>Agoo</strong><span>La Union</span></div></div>
    {emailOpen && <div className="email-modal-backdrop" role="presentation" onClick={() => setEmailOpen(false)}>
      <div className="email-modal" role="dialog" aria-modal="true" aria-labelledby="email-modal-title" onClick={(event) => event.stopPropagation()}>
        <button className="email-modal-close" type="button" aria-label="Close email dialog" onClick={() => setEmailOpen(false)}><HugeiconsIcon icon={Cancel01Icon} size={23} strokeWidth={1.7} aria-hidden="true" /></button>
        <span className="section-title">Get in touch</span>
        <h2 id="email-modal-title">say hello</h2>
        <p>For work, collaboration, or just to say hi — drop me a line.</p>
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
