"use client";

import { useState } from "react";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return <header className="topbar">
    <div className="shell">
      <a className="wordmark" href="#top">
        <span>Jasmine Barnachea</span>
      </a>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="site-nav">
        {menuOpen ? "×" : "☰"}
      </button>
      <nav id="site-nav" className={`nav ${menuOpen ? "open" : ""}`}>
        <a onClick={closeMenu} href="#about">about</a>
        <a onClick={closeMenu} href="#credentials">education</a>
        <a onClick={closeMenu} href="#focus">projects</a>
        <a onClick={closeMenu} href="#contact">contact</a>
      </nav>
    </div>
  </header>;
}
