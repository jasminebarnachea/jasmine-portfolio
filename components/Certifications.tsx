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

type CertificationsProps = {
  variant?: "featured" | "archive";
};

export default function Certifications({ variant = "featured" }: CertificationsProps) {
  const visibleCertifications = certifications;

  return <section id="certifications" className="section">
    <div className="section-head"><span className="section-title">06 — Certifications</span></div>
    {variant === "featured" ? <div className="certificate-name-list">{visibleCertifications.map((cert, index) => <a
      href={certificateImages[cert.image as keyof typeof certificateImages].src}
      target="_blank"
      rel="noreferrer"
      key={cert.title}
      aria-label={`View ${cert.title} certificate screenshot`}
    ><span>0{index + 1}</span><strong>{cert.title}</strong><span aria-hidden="true">↗</span></a>)}</div> : <div className="certificate-screenshot-grid certificate-screenshot-grid--archive">{visibleCertifications.map((cert, index) => <a
      className="certificate-screenshot-card"
      href={certificateImages[cert.image as keyof typeof certificateImages].src}
      target="_blank"
      rel="noreferrer"
      key={cert.title}
      aria-label={`View ${cert.title} certificate`}
    >
      <span className="certificate-screenshot-frame"><Image src={certificateImages[cert.image as keyof typeof certificateImages]} alt={`${cert.title} certificate`} /></span>
      <span className="certificate-screenshot-copy"><span>0{index + 1}</span><strong>{cert.title}</strong><span aria-hidden="true">↗</span></span>
    </a>)}</div>}
  </section>;
}
