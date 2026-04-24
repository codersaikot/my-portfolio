// ============================================================
// components/Navbar.jsx
// Sticky navbar with smooth-scroll links + dark/light toggle
// ============================================================
import { useState, useEffect } from "react";

const NAV_LINKS = ["About", "Skills", "Projects", "Experience", "Contact"];

export default function Navbar({ dark, setDark }) {
  const [menuOpen, setMenuOpen]   = useState(false);
  const [scrolled, setScrolled]   = useState(false);

  // Add shadow once user scrolls past hero
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
        {/* Logo */}
        <a href="#hero" className="logo">
          Tariqul<span className="logo__accent">.</span>
        </a>

        {/* Desktop links */}
        <div className="nav-links">
          {NAV_LINKS.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="nav-link">
              {link}
            </a>
          ))}
          <button
            className="theme-btn"
            onClick={() => setDark(!dark)}
            aria-label="Toggle theme"
          >
            {dark ? "☀️" : "🌙"}
          </button>
        </div>

        {/* Mobile controls */}
        <div className="nav-mobile-controls">
          <button className="theme-btn" onClick={() => setDark(!dark)}>
            {dark ? "☀️" : "🌙"}
          </button>
          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="mobile-menu">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="mobile-menu__link"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
