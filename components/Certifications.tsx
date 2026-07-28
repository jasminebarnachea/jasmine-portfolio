import Image from "next/image";
import ccnaEnterprise from "../assets/certficates/CCNA.jpg";
import ccnaSwitch from "../assets/certficates/CCNA:Switch.jpg";
import ccnav7 from "../assets/certficates/CCNAv7.jpg";
import intro from "../assets/certficates/Intro.jpg";
import oracle from "../assets/certficates/oracle.jpg";
import smartbridge from "../assets/certficates/smartbridge.jpg";
import { certifications } from "../data/portfolio";

const certificateImages = {
  "ccna-enterprise": ccnaEnterprise,
  "ccna-switch": ccnaSwitch,
  ccnav7,
  intro,
  oracle,
  smartbridge,
};

export default function Certifications() {
  return <section className="section">
    <div className="section-head"><span className="section-title">05 — certifications</span></div>
    <div className="cert-grid">{certifications.map((cert, index) => <article className="cert-card" key={cert.title}>
      <a className="cert-image-link" href={certificateImages[cert.image as keyof typeof certificateImages].src} target="_blank" rel="noreferrer" aria-label={`View ${cert.title} certificate full size`}>
        <Image className="cert-image" src={certificateImages[cert.image as keyof typeof certificateImages]} alt={`${cert.title} certificate`} />
      </a>
      <span className="cert-number">0{index + 1}</span>
      <h3>{cert.title}</h3>
      <p>Certified</p>
    </article>)}</div>
  </section>;
}
