"use client";

import { useState, type ReactNode } from "react";

type SocialLink = {
  label: string;
  href: string;
  icon: ReactNode;
};

const GithubIcon = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.87c-2.78.6-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.09.64-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.6 9.6 0 0 1 12 6.82a9.6 9.6 0 0 1 2.5.34c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.56 4.93.36.31.68.92.68 1.86v2.76c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" /></svg>;
const MailIcon = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 5.5h18v13H3v-13Zm1.5 1.7 7.5 5.2 7.5-5.2M4.5 17l5.2-5.1m9.8 5.1-5.2-5.1" /></svg>;
const LinkedinIcon = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.3 8.2V19M6.3 5v.1M10.5 19V8.2m0 4.7c0-2.6 1.6-4.7 4.1-4.7 2.3 0 3.1 1.7 3.1 4V19" /></svg>;
const FacebookIcon = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.2 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.8-.1-1.6-.2-2.4-.2-2.4 0-4.1 1.5-4.1 4.2v2.3H8.3V13H11v8h3.2Z" /></svg>;

const links: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/jasminebarnachea", icon: <GithubIcon /> },
  { label: "Email", href: "mailto:barnacheajassy@gmail.com", icon: <MailIcon /> },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/jasminebarnachea/", icon: <LinkedinIcon /> },
  { label: "Facebook", href: "https://www.facebook.com/jaseeehhh", icon: <FacebookIcon /> },
];

export default function SocialCard() {
  const [activeSocial, setActiveSocial] = useState<string | null>(null);

  return <section className="social-card" aria-labelledby="social-card-title">
    <div className="social-card-heading">
      <span className="section-title">07 — Socials</span>
      <h3 id="social-card-title">Let&apos;s connect.</h3>
    </div>
    <div className="social-orbit-card">
      <div className="social-orbit-background" />
      <div className="social-orbit-logo">Socials</div>
      {links.map((link, index) => <a
        href={link.href}
        target={link.href.startsWith("http") ? "_blank" : undefined}
        rel={link.href.startsWith("http") ? "noreferrer" : undefined}
        className={`social-orbit-box social-orbit-box--${index + 1}`}
        style={{ transitionDelay: `${index * 0.2}s` }}
        aria-label={link.label}
        title={link.label}
        onMouseEnter={() => setActiveSocial(link.label)}
        onMouseLeave={() => setActiveSocial(null)}
        onFocus={() => setActiveSocial(link.label)}
        onBlur={() => setActiveSocial(null)}
        key={link.label}
      ><span className="social-orbit-icon">{link.icon}</span></a>)}
      <span className={`social-orbit-active-label ${activeSocial ? "is-visible" : ""}`} aria-hidden="true">{activeSocial}</span>
    </div>
  </section>;
}
