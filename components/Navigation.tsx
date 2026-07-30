"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDown01Icon, Download02Icon, Mail02Icon, SparklesIcon } from "@hugeicons/core-free-icons";

type ThemePreference = "system" | "light" | "dark";

const applyTheme = (preference: ThemePreference) => {
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  document.documentElement.dataset.theme = preference === "system" ? systemTheme : preference;
};

const navLinks = [
  { label: "Education", href: "/#credentials" },
  { label: "Projects", href: "/#projects" },
  { label: "Experience", href: "/#about" },
  { label: "Tech Stack", href: "/#stack" },
  { label: "Certifications", href: "/#certifications" },
  { label: "Contact", href: "/#contact" },
];

export default function Navigation() {
  const router = useRouter();
  const [theme, setTheme] = useState<ThemePreference>("system");
  const [menuOpen, setMenuOpen] = useState(false);
  const [localTime, setLocalTime] = useState("--:--");
  const transitionTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const updateTheme = (preference: ThemePreference) => {
    const root = document.documentElement;
    root.classList.add("theme-transition");
    setTheme(preference);
    localStorage.setItem("portfolio-theme", preference);
    applyTheme(preference);
    if (transitionTimeout.current) clearTimeout(transitionTimeout.current);
    transitionTimeout.current = setTimeout(() => root.classList.remove("theme-transition"), 200);
  };

  useEffect(() => {
    router.prefetch("/projects");
    router.prefetch("/stack");
    router.prefetch("/certifications");
  }, [router]);

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme") as ThemePreference | null;
    const preference = savedTheme === "light" || savedTheme === "dark" || savedTheme === "system" ? savedTheme : "system";
    setTheme(preference);
    applyTheme(preference);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const followSystemTheme = () => {
      if (theme === "system") applyTheme("system");
    };
    mediaQuery.addEventListener("change", followSystemTheme);
    return () => mediaQuery.removeEventListener("change", followSystemTheme);
  }, [theme]);

  useEffect(() => {
    const updateTime = () => setLocalTime(new Intl.DateTimeFormat("en-PH", {
      timeZone: "Asia/Manila",
      hour: "numeric",
      minute: "2-digit",
    }).format(new Date()));
    updateTime();
    const timer = window.setInterval(updateTime, 30000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    document.body.classList.add("portfolio-menu-open");
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.classList.remove("portfolio-menu-open");
    };
  }, [menuOpen]);

  useEffect(() => () => {
    if (transitionTimeout.current) clearTimeout(transitionTimeout.current);
  }, []);

  const navigationPanel = (mobile: boolean) => <aside className={`portfolio-menu-panel ${mobile ? "portfolio-menu-mobile" : "portfolio-menu-desktop"}`} id={mobile ? "portfolio-menu" : "portfolio-sidebar"} aria-label="Portfolio navigation">
    <div className="portfolio-menu-head">
      <div><span className="mono-label">Portfolio</span><strong>Jasmine Barnachea</strong></div>
      {mobile && <button type="button" onClick={() => setMenuOpen(false)} aria-label="Close navigation">×</button>}
    </div>
    <nav className="portfolio-menu-links">
      {navLinks.map((link, index) => <a href={link.href} onClick={() => setMenuOpen(false)} key={link.href}><span>0{index + 1}</span>{link.label}<i aria-hidden="true">→</i></a>)}
    </nav>
    <div className="portfolio-menu-quick">
      <span className="mono-label">Quick actions</span>
      <a href="/Jasmine-Barnachea-Resume.pdf" download><HugeiconsIcon icon={Download02Icon} size={16} strokeWidth={1.8} aria-hidden="true" />Download résumé</a>
      <button type="button" onClick={() => {
        setMenuOpen(false);
        window.dispatchEvent(new Event("open-jas-chat"));
      }}><HugeiconsIcon icon={SparklesIcon} size={16} strokeWidth={1.8} aria-hidden="true" />Ask Jas AI</button>
    </div>
    <div className="portfolio-menu-status">
      <div><span className="availability-dot" aria-hidden="true" /><span>Available for opportunities</span></div>
      <div><span>La Union · GMT+8</span><time>{localTime}</time></div>
    </div>
    <a className="portfolio-menu-email" href="mailto:barnacheajassy@gmail.com"><HugeiconsIcon icon={Mail02Icon} size={16} strokeWidth={1.8} aria-hidden="true" />barnacheajassy@gmail.com</a>
  </aside>;

  return <>
    <header className="topbar">
      <div className="shell">
        <a className="wordmark" href="/"><span>Jasmine Barnachea</span></a>
        <div className="topbar-actions">
          <label className="theme-control">
            <span className="sr-only">Color theme</span>
            <select value={theme} onChange={(event) => updateTheme(event.target.value as ThemePreference)} aria-label="Color theme">
              <option value="system">System</option>
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
            <HugeiconsIcon className="theme-control-icon" icon={ArrowDown01Icon} size={13} strokeWidth={1.8} aria-hidden="true" />
          </label>
        </div>
      </div>
    </header>
    {menuOpen && <div className="portfolio-menu-backdrop" role="presentation" onMouseDown={(event) => {
      if (event.target === event.currentTarget) setMenuOpen(false);
    }}>
      {navigationPanel(true)}
    </div>}
  </>;
}
