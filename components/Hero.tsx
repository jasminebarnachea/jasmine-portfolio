"use client";

import Image from "next/image";
import { useState } from "react";
import profilePhoto from "../assets/picture/jasmine-profile.jpg";

export default function Hero() {
  const [emailOpen, setEmailOpen] = useState(false);
  const email = "barnacheajassy@gmail.com";

  const copyEmail = async () => {
    await navigator.clipboard?.writeText(email);
  };

  return <section className="hero">
    <div className="hero-grid">
        <div className="portrait-wrap reveal">
        <div className="portrait-ring" />
        <div className="portrait"><Image src={profilePhoto} alt="Jasmine Barnachea" className="profile-photo" priority /></div>
      </div>
      <div className="intro reveal">
        <h1>Jasmine<br />Barnachea</h1>
        <p>I’m an Information Technology graduate. I’m building a strong foundation in web and mobile development, databases, and networks.</p>
        <p>Right now, I’m looking for an entry-level opportunity where I can learn from a team and turn my skills into useful work.</p>
        <div className="socials"><a href="#email" onClick={(event) => { event.preventDefault(); setEmailOpen(true); }}>email ↗</a><a href="https://github.com/binibaby" target="_blank" rel="noreferrer">github ↗</a></div>
      </div>
    </div>
    <div className="stats"><div className="stat"><strong>BSIT</strong><span>Graduate</span></div><div className="stat"><strong>2026</strong><span>Class of</span></div><div className="stat"><strong>Agoo</strong><span>La Union</span></div></div>
    {emailOpen && <div className="email-modal-backdrop" role="presentation" onClick={() => setEmailOpen(false)}>
      <div className="email-modal" role="dialog" aria-modal="true" aria-labelledby="email-modal-title" onClick={(event) => event.stopPropagation()}>
        <button className="email-modal-close" type="button" aria-label="Close email dialog" onClick={() => setEmailOpen(false)}>×</button>
        <span className="section-title">Get in touch</span>
        <h2 id="email-modal-title">say hello</h2>
        <p>For work, collaboration, or just to say hi — drop me a line.</p>
        <div className="email-modal-address"><span>{email}</span><button type="button" onClick={copyEmail}>Copy</button></div>
        <a className="email-modal-open" href={`mailto:${email}`}>Open mail app</a>
      </div>
    </div>}
  </section>;
}
