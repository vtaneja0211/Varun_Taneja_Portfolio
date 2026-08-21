"use client";
import { useEffect, useRef } from "react";
import type { ReactNode } from "react";
import type { WorkExperienceItem } from "../lib/types";
import { EXPERIENCES } from "../lib/constants";

export default function WorkExperienceSection(): ReactNode {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const entries = sectionRef.current?.querySelectorAll<HTMLElement>(".wex-entry");
    if (!entries) return;

    const observer = new IntersectionObserver(
      (observed) => {
        observed.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("wex-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    entries.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{STYLES}</style>
      <section id="work_experience" ref={sectionRef} className="wex-section">
        <div className="hidden sm:block mt-12" />
        <h1 className="font-bold text-2xl font-serif">Work Experience</h1>
        <hr className="my-4 border-black dark:border-white" />
        <div className="wex-timeline">
          {EXPERIENCES.map((exp, i) => (
            <div
              key={exp.id}
              className="wex-entry"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="wex-spine" aria-hidden="true">
                <div className={`wex-dot${exp.current ? " wex-dot--current" : ""}`} />
                <div className="wex-connector" />
              </div>
              <div className="wex-body">
                <div className="wex-header">
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="wex-org"
                  >
                    {exp.company}
                  </a>
                  <span className="wex-date">{exp.date}</span>
                </div>
                <p className="wex-role">{exp.role}</p>
                <ul className="wex-bullets">
                  {exp.tasks.map((task, j) => (
                    <li key={j}>{task}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

const STYLES = `
  .wex-section {
    --wex-bg:       #0A0A0A;
    --wex-surface:  #16181A;
    --wex-line:     #262A2C;
    --wex-text:     #D9DEDD;
    --wex-dim:      #8A9391;
    --wex-accent:   #4ADE80;
    --wex-accent-2: #5EEAD4;
  }

  /* ── timeline container ─────────────────────────────── */
  .wex-timeline {
    display: flex;
    flex-direction: column;
    margin-top: 0.25rem;
  }

  /* ── single entry row ───────────────────────────────── */
  .wex-entry {
    display: flex;
    gap: 0;
  }

  /* scroll reveal — hidden until .wex-visible is added */
  @media (prefers-reduced-motion: no-preference) {
    .wex-entry {
      opacity: 0;
      transform: translateY(10px);
      transition: opacity 0.38s ease, transform 0.38s ease;
    }
    .wex-entry.wex-visible {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* ── left spine: dot + connector line ──────────────── */
  .wex-spine {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 14px;
    flex-shrink: 0;
  }

  .wex-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 1px solid var(--wex-line);
    background: var(--wex-bg);
    flex-shrink: 0;
    margin-top: 5px;
    position: relative;
    z-index: 1;
  }

  .wex-dot--current {
    background: var(--wex-accent);
    border-color: var(--wex-accent);
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--wex-accent) 20%, transparent);
  }

  .wex-connector {
    flex: 1;
    width: 1px;
    background: var(--wex-line);
    min-height: 1rem;
  }

  .wex-entry:last-child .wex-connector {
    display: none;
  }

  /* ── entry body ─────────────────────────────────────── */
  .wex-body {
    flex: 1;
    padding: 0 0 2rem 1.25rem;
  }

  .wex-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .wex-org {
    font-family: ui-monospace, Menlo, Monaco, "Cascadia Code", Consolas, monospace;
    font-size: 0.9375rem;
    font-weight: 700;
    color: var(--wex-accent);
    text-decoration: none;
    line-height: 1.3;
  }

  .wex-org:hover {
    text-decoration: underline;
    text-underline-offset: 3px;
  }

  .wex-org:focus-visible {
    outline: 2px solid var(--wex-accent);
    outline-offset: 3px;
    border-radius: 2px;
  }

  .wex-date {
    font-family: ui-monospace, Menlo, Monaco, "Cascadia Code", Consolas, monospace;
    font-size: 0.6875rem;
    color: var(--wex-dim);
    letter-spacing: 0.05em;
    white-space: nowrap;
    flex-shrink: 0;
  }

  .wex-role {
    font-family: ui-monospace, Menlo, Monaco, "Cascadia Code", Consolas, monospace;
    font-size: 0.75rem;
    color: var(--wex-dim);
    margin: 0.2rem 0 0.6rem;
    line-height: 1.4;
  }

  /* ── bullets ────────────────────────────────────────── */
  .wex-bullets {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
  }

  .wex-bullets li {
    position: relative;
    padding-left: 1.25rem;
    color: var(--wex-text);
    font-family: "IBM Plex Sans", system-ui, -apple-system, sans-serif;
    font-size: 0.8125rem;
    line-height: 1.65;
  }

  .wex-bullets li::before {
    content: "—";
    position: absolute;
    left: 0;
    color: var(--wex-line);
    font-family: ui-monospace, Menlo, Monaco, Consolas, monospace;
    line-height: 1.65;
  }

  /* ── responsive ─────────────────────────────────────── */
  @media (max-width: 640px) {
    .wex-header {
      flex-direction: column;
      gap: 0.125rem;
    }
    .wex-body {
      padding-left: 1rem;
    }
  }
`;
