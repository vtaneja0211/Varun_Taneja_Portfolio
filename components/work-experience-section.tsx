"use client";

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";
import { EXPERIENCES } from "../lib/constants";

export default function WorkExperienceSection(): ReactNode {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const entries = sectionRef.current?.querySelectorAll<HTMLElement>(".wex-entry");
    if (!entries) return;

    const observer = new IntersectionObserver(
      (observedEntries) => {
        observedEntries.forEach((observedEntry) => {
          if (observedEntry.isIntersecting) {
            observedEntry.target.classList.add("wex-visible");
            observer.unobserve(observedEntry.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    entries.forEach((entry) => observer.observe(entry));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{STYLES}</style>
      <section id="work_experience" ref={sectionRef} className="wex-section">
        <div className="wex-kicker">
          <b>Career</b> · Experience
        </div>

        <div className="wex-title-row">
          <h2>Work Experience</h2>
          <span>{EXPERIENCES.length} roles</span>
        </div>

        <div className="wex-timeline">
          {EXPERIENCES.map((experience, index) => (
            <article
              key={experience.id}
              className={`wex-entry${experience.current ? " is-current" : ""}`}
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              <div className="wex-spine" aria-hidden="true">
                <div className="wex-dot" />
                <div className="wex-connector" />
              </div>

              <div className="wex-card">
                <div className="wex-header">
                  <div>
                    <a href={experience.link} target="_blank" rel="noopener noreferrer" className="wex-org">
                      {experience.company}<span aria-hidden="true">↗</span>
                    </a>
                    <p className="wex-role">{experience.role}</p>
                  </div>
                  <div className="wex-meta">
                    {experience.current && <span className="wex-current">Current</span>}
                    <span className="wex-date">{experience.date}</span>
                  </div>
                </div>

                <ul className="wex-bullets">
                  {experience.tasks.map((task) => (
                    <li key={task}>{task}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

const STYLES = `
.wex-section {
  --wex-bg: #0A0A0A;
  --wex-surface: #16181A;
  --wex-raised: #1C1F21;
  --wex-line: #262A2C;
  --wex-line-2: #343A3C;
  --wex-text: #D9DEDD;
  --wex-dim: #8A9391;
  --wex-dimmer: #626C6B;
  --wex-accent: #4ADE80;
  width: 100%;
  max-width: 920px;
  margin-top: clamp(72px, 9vw, 112px);
  color: var(--wex-text);
  font-family: 'IBM Plex Sans', system-ui, sans-serif;
}

.wex-section * { box-sizing: border-box }

.wex-kicker {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 18px;
  color: var(--wex-dimmer);
  font-family: 'IBM Plex Mono', ui-monospace, monospace;
  font-size: 10px;
  letter-spacing: .13em;
  text-transform: uppercase;
}
.wex-kicker::after {
  content: '';
  width: min(220px, 35%);
  height: 1px;
  background: var(--wex-line);
}
.wex-kicker b { color: var(--wex-accent); font-weight: 500 }

.wex-title-row {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 16px;
  padding-bottom: 22px;
  border-bottom: 1px solid var(--wex-line);
}
.wex-title-row h2 {
  margin: 0;
  color: var(--wex-text);
  font-size: 24px;
  font-weight: 600;
  letter-spacing: -.025em;
}
.wex-title-row > span {
  color: var(--wex-dimmer);
  font-family: 'IBM Plex Mono', ui-monospace, monospace;
  font-size: 10px;
  letter-spacing: .06em;
  text-transform: uppercase;
}

.wex-timeline { padding-top: 22px }
.wex-entry {
  display: grid;
  grid-template-columns: 16px minmax(0, 1fr);
}

@media (prefers-reduced-motion: no-preference) {
  .wex-entry {
    opacity: 0;
    transform: translateY(10px);
    transition: opacity .38s ease, transform .38s ease;
  }
  .wex-entry.wex-visible { opacity: 1; transform: translateY(0) }
}

.wex-spine {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.wex-dot {
  position: relative;
  z-index: 1;
  width: 9px;
  height: 9px;
  margin-top: 5px;
  border: 1px solid var(--wex-line);
  border-radius: 50%;
  background: var(--wex-bg);
}
.wex-entry.is-current .wex-dot {
  border-color: #1F6B3D;
  background: var(--wex-accent);
  box-shadow: 0 0 0 3px rgba(74, 222, 128, .08);
}
.wex-connector {
  width: 1px;
  flex: 1;
  min-height: 16px;
  background: var(--wex-line);
}
.wex-entry:last-child .wex-connector { display: none }

.wex-card {
  margin: 0 0 12px 10px;
  padding: 18px 20px 19px;
  border: 1px solid var(--wex-line);
  border-radius: 4px;
  background: var(--wex-surface);
  transition: border-color .18s ease, background .18s ease;
}
.wex-card:hover { border-color: var(--wex-line-2); background: var(--wex-raised) }

.wex-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 12px;
}
.wex-org {
  color: var(--wex-text);
  font-size: 14px;
  font-weight: 600;
  line-height: 1.35;
  text-decoration: none;
}
.wex-org span {
  margin-left: 6px;
  color: var(--wex-accent);
  font-family: 'IBM Plex Mono', ui-monospace, monospace;
  font-size: 9px;
}
.wex-org:hover { color: var(--wex-accent) }
.wex-role {
  margin: 4px 0 0;
  color: var(--wex-dim);
  font-family: 'IBM Plex Mono', ui-monospace, monospace;
  font-size: 10.5px;
  line-height: 1.45;
}
.wex-meta {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 5px;
  flex: 0 0 auto;
}
.wex-current {
  padding: 2px 6px;
  border: 1px solid #1F6B3D;
  border-radius: 2px;
  background: rgba(74, 222, 128, .06);
  color: var(--wex-accent);
  font-family: 'IBM Plex Mono', ui-monospace, monospace;
  font-size: 7.5px;
  letter-spacing: .08em;
  text-transform: uppercase;
}
.wex-date {
  color: var(--wex-dimmer);
  font-family: 'IBM Plex Mono', ui-monospace, monospace;
  font-size: 9px;
  letter-spacing: .03em;
  white-space: nowrap;
}

.wex-bullets {
  display: grid;
  gap: 6px;
  margin: 0;
  padding: 12px 0 0;
  border-top: 1px solid var(--wex-line);
  list-style: none;
}
.wex-bullets li {
  position: relative;
  padding-left: 16px;
  color: var(--wex-dim);
  font-size: 12px;
  line-height: 1.65;
}
.wex-bullets li::before {
  content: '—';
  position: absolute;
  left: 0;
  color: var(--wex-line-2);
  font-family: 'IBM Plex Mono', ui-monospace, monospace;
}

.wex-section :focus-visible {
  outline: 2px solid var(--wex-accent);
  outline-offset: 3px;
  border-radius: 2px;
}

@media (max-width: 640px) {
  .wex-entry { grid-template-columns: 14px minmax(0, 1fr) }
  .wex-card { margin-left: 7px; padding: 15px 16px 16px }
  .wex-header { flex-direction: column; gap: 8px }
  .wex-meta { align-items: flex-start; flex-direction: row; flex-wrap: wrap }
  .wex-bullets li { font-size: 11.5px }
}

@media (prefers-reduced-motion: reduce) {
  .wex-section * { transition-duration: .01ms !important }
}
`;
