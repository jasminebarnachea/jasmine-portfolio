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
    <div className="section-head"><span className="section-title">05 — Certifications</span></div>
    <div className="certificate-name-list">{certifications.map((cert, index) => <a
      href={certificateImages[cert.image as keyof typeof certificateImages].src}
      target="_blank"
      rel="noreferrer"
      key={cert.title}
      aria-label={`View ${cert.title} certificate`}
    >
      <span>0{index + 1}</span>
      <strong>{cert.title}</strong>
      <span aria-hidden="true">↗</span>
    </a>)}</div>
  </section>;
}
