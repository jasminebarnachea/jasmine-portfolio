import { HugeiconsIcon } from "@hugeicons/react";
import { Facebook01Icon, Github01Icon, Mail02Icon } from "@hugeicons/core-free-icons";

export default function DesktopContact() {
  return <section id="contact-desktop" className="section desktop-contact">
    <div className="section-head"><span className="section-title">Get in touch</span></div>
    <h2>let&apos;s connect</h2>
    <p>I&apos;m open to full-stack web and mobile development opportunities, collaborative projects, and new ideas.</p>
    <a className="desktop-contact-email" href="mailto:barnacheajassy@gmail.com"><HugeiconsIcon icon={Mail02Icon} size={14} strokeWidth={1.7} aria-hidden="true" />barnacheajassy@gmail.com</a>
    <div className="desktop-contact-links">
      <a href="https://github.com/jasminebarnachea" target="_blank" rel="noreferrer"><HugeiconsIcon icon={Github01Icon} size={14} strokeWidth={1.7} aria-hidden="true" />GitHub</a>
      <a href="https://www.facebook.com/jaseeehhh" target="_blank" rel="noreferrer"><HugeiconsIcon icon={Facebook01Icon} size={14} strokeWidth={1.7} aria-hidden="true" />Facebook</a>
    </div>
  </section>;
}
