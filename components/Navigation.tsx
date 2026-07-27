"use client";

import { useEffect, useRef, useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDown01Icon, Cancel01Icon, MenuTwoLineIcon } from "@hugeicons/core-free-icons";

type ThemePreference = "system" | "light" | "dark";

const applyTheme = (preference: ThemePreference) => {
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  document.documentElement.dataset.theme = preference === "system" ? systemTheme : preference;
};

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<ThemePreference>("system");
  const transitionTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const closeMenu = () => setMenuOpen(false);

  const updateTheme = (preference: ThemePreference) => {
    const root = document.documentElement;
    root.classList.add("theme-transition");

    setTheme(preference);
    localStorage.setItem("portfolio-theme", preference);
    applyTheme(preference);

    if (transitionTimeout.current) clearTimeout(transitionTimeout.current);
    transitionTimeout.current = setTimeout(() => {
      root.classList.remove("theme-transition");
    }, 200);
  };

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

  useEffect(() => () => {
    if (transitionTimeout.current) clearTimeout(transitionTimeout.current);
  }, []);

  return <header className="topbar">
    <div className="shell">
      <a className="wordmark" href="#top">
        <span>Jasmine Barnachea</span>
      </a>
      <label className="theme-control">
        <span className="sr-only">Color theme</span>
        <select value={theme} onChange={(event) => updateTheme(event.target.value as ThemePreference)} aria-label="Color theme">
          <option value="system">System</option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
        <HugeiconsIcon className="theme-control-icon" icon={ArrowDown01Icon} size={13} strokeWidth={1.8} aria-hidden="true" />
      </label>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="site-nav">
        <HugeiconsIcon icon={menuOpen ? Cancel01Icon : MenuTwoLineIcon} size={23} strokeWidth={1.7} aria-hidden="true" />
        <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
      </button>
      <nav id="site-nav" className={`nav ${menuOpen ? "open" : ""}`}>
        <a onClick={closeMenu} href="#credentials">education</a>
        <a onClick={closeMenu} href="#about">experience</a>
        <a onClick={closeMenu} href="#focus">projects</a>
        <a onClick={closeMenu} href="#contact">contact</a>
      </nav>
    </div>
  </header>;
}
