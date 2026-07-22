import Image from "next/image";
import profilePhoto from "../assets/picture/jasmine-profile.jpg";

export default function Hero() {
  return <section className="hero">
    <div className="hero-grid">
      <div className="portrait-wrap reveal">
        <div className="portrait-ring" />
        <div className="portrait"><Image src={profilePhoto} alt="Jasmine Barnachea" className="profile-photo" priority /></div>
        <span className="portrait-tag">Jasmine P. Barnachea</span>
      </div>
      <div className="intro reveal">
        <h1>Jasmine<br />Barnachea</h1>
        <p>I’m an Information Technology graduate. I’m building a strong foundation in web and mobile development, databases, and networks.</p>
        <p>Right now, I’m looking for an entry-level opportunity where I can learn from a team and turn my skills into useful work.</p>
        <div className="socials"><a href="mailto:barnacheajassy@gmail.com">email ↗</a><a href="https://github.com/binibaby" target="_blank" rel="noreferrer">github ↗</a><a href="https://www.facebook.com/jaseeehhh" target="_blank" rel="noreferrer">facebook ↗</a><a href="#credentials">credentials ↓</a><a href="#contact">say hello →</a></div>
      </div>
    </div>
    <div className="stats"><div className="stat"><strong>BSIT</strong><span>Graduate</span></div><div className="stat"><strong>2026</strong><span>Class of</span></div><div className="stat"><strong>Agoo</strong><span>La Union</span></div></div>
  </section>;
}
