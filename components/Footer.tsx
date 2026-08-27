"use client";

import type { ComponentProps, ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { FileTextIcon, MailIcon } from "lucide-react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Facebook01Icon, Github01Icon, Linkedin01Icon } from "@hugeicons/core-free-icons";

const GithubIcon = ({ className }: { className?: string }) => <HugeiconsIcon className={className} icon={Github01Icon} />;
const LinkedinIcon = ({ className }: { className?: string }) => <HugeiconsIcon className={className} icon={Linkedin01Icon} />;
const FacebookIcon = ({ className }: { className?: string }) => <HugeiconsIcon className={className} icon={Facebook01Icon} />;

interface FooterLink {
  title: string;
  href: string;
  external?: boolean;
  icon?: React.ComponentType<{ className?: string }>;
}

interface FooterSection {
  label: string;
  links: FooterLink[];
}

const footerLinks: FooterSection[] = [
  {
    label: "Résumé",
    links: [
      { title: "View résumé", href: "/Jasmine-Barnachea-Resume.pdf", external: true, icon: FileTextIcon },
    ],
  },
  {
    label: "Contact",
    links: [
      { title: "Email", href: "mailto:barnacheajassy@gmail.com", icon: MailIcon },
      { title: "GitHub", href: "https://github.com/jasminebarnachea", external: true, icon: GithubIcon },
      { title: "LinkedIn", href: "https://www.linkedin.com/in/jasminebarnachea/", external: true, icon: LinkedinIcon },
      { title: "Facebook", href: "https://www.facebook.com/jaseeehhh", external: true, icon: FacebookIcon },
    ],
  },
];

export default function Footer() {
  return <footer className="site-footer">
    <div className="site-footer-glow" aria-hidden="true" />
    <div className="shell site-footer-grid">
      <AnimatedContainer className="site-footer-brand">
        <div>
          <strong>Jasmine Barnachea</strong>
          <p>Full-Stack Developer.</p>
        </div>
        <span>© {new Date().getFullYear()} Jasmine Barnachea. All rights reserved.</span>
      </AnimatedContainer>

      <div className="site-footer-links">
        {footerLinks.map((section, index) => <AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
          <section className="site-footer-column">
            <h3>{section.label}</h3>
            <ul>
              {section.links.map((link) => <li key={link.title}>
                <a
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noreferrer" : undefined}
                >
                  {link.icon && <link.icon className="site-footer-link-icon" />}
                  {link.title}
                </a>
              </li>)}
            </ul>
          </section>
        </AnimatedContainer>)}
      </div>
    </div>
  </footer>;
}

type ViewAnimationProps = {
  delay?: number;
  className?: ComponentProps<typeof motion.div>["className"];
  children: ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) return <div className={className}>{children}</div>;

  return <motion.div
    initial={{ filter: "blur(4px)", y: -8, opacity: 0 }}
    whileInView={{ filter: "blur(0px)", y: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.8 }}
    className={className}
  >
    {children}
  </motion.div>;
}
