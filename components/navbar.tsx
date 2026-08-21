"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-scroll";
import type { ReactNode } from "react";
import { NAV_ITEMS } from "../lib/constants";

export default function Navbar(): ReactNode {
  const [active, setActive] = useState("about");

  return (
    <>
      <style>{STYLES}</style>
      <header className="vt-nav-wrap">
        <nav className="vt-nav" aria-label="Primary navigation">
          <div className="vt-nav-links">
            {Object.entries(NAV_ITEMS).map(([path, { name }], index) => {
              const isActive = active === path;

              return (
                <Link
                  to={path}
                  key={path}
                  spy
                  smooth
                  duration={450}
                  offset={-88}
                  onClick={() => setActive(path)}
                  onSetActive={() => setActive(path)}
                  className={`vt-nav-link${isActive ? " is-active" : ""}`}
                  aria-current={isActive ? "page" : undefined}
                >
                  <span className="vt-nav-index">0{index + 1}</span>
                  <span>{name}</span>
                  {isActive && (
                    <motion.span
                      className="vt-nav-active"
                      layoutId="nav-active"
                      transition={{ type: "spring", stiffness: 420, damping: 34 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>
        </nav>
      </header>
    </>
  );
}

const STYLES = `
.vt-nav-wrap {
  position: fixed;
  top: 16px;
  right: 40px;
  z-index: 50;
  pointer-events: none;
}

.vt-nav {
  --nav-bg: rgba(22, 24, 26, .9);
  --nav-line: #262A2C;
  --nav-text: #D9DEDD;
  --nav-dim: #8A9391;
  --nav-dimmer: #626C6B;
  --nav-accent: #4ADE80;
  display: flex;
  align-items: center;
  padding: 6px;
  border: 1px solid var(--nav-line);
  border-radius: 5px;
  background: var(--nav-bg);
  box-shadow: 0 10px 30px rgba(0, 0, 0, .24);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  font-family: 'IBM Plex Mono', ui-monospace, monospace;
  pointer-events: auto;
}

.vt-nav a {
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  user-select: none;
}

.vt-nav-links {
  display: flex;
  align-items: center;
  gap: 2px;
}

.vt-nav-link {
  position: relative;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 7px 10px;
  border-radius: 3px;
  color: var(--nav-dim);
  font-size: 10.5px;
  font-weight: 500;
  letter-spacing: .035em;
  white-space: nowrap;
  transition: color .18s ease, background .18s ease;
}

.vt-nav-link:hover {
  color: var(--nav-text);
  background: rgba(255, 255, 255, .025);
}

.vt-nav-link.is-active {
  color: var(--nav-accent);
  background: rgba(74, 222, 128, .055);
}

.vt-nav-index {
  color: var(--nav-dimmer);
  font-size: 8px;
  letter-spacing: .04em;
}

.vt-nav-active {
  position: absolute;
  right: 8px;
  bottom: 3px;
  left: 8px;
  height: 1px;
  background: var(--nav-accent);
  opacity: .72;
}

.vt-nav :focus-visible {
  outline: 2px solid var(--nav-accent);
  outline-offset: 2px;
}

@media (max-width: 640px) {
  .vt-nav-wrap {
    top: 10px;
    right: 10px;
    left: 10px;
  }

  .vt-nav {
    justify-content: space-between;
  }

  .vt-nav-link {
    padding-inline: 8px;
  }

  .vt-nav-index {
    display: none;
  }
}

@media (max-width: 390px) {
  .vt-nav-link {
    padding-inline: 6px;
    font-size: 10px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .vt-nav * {
    scroll-behavior: auto !important;
    transition-duration: .01ms !important;
  }
}
`;
