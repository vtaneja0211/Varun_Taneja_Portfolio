"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import type { ReactNode } from "react";
import type { Project } from "../lib/types";
import { PROJECTS, FILTER_CATS } from "../lib/constants";

/* ── icons ─────────────────────────────────────────────── */
const GithubIcon = () => (
  <svg viewBox="0 0 16 16" fill="currentColor">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.4 7.4 0 0 1 2-.27c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
  </svg>
);

const ExternalIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M6.5 3H3v10h10V9.5M9.5 2.5H13.5V6.5M13.5 2.5 7 9" />
  </svg>
);

/* ── types ──────────────────────────────────────────────── */
type ItemState = "visible" | "fading" | "hidden";
type LightboxState = { src: string; alt: string; caption: string } | null;

/* ── sub-components ─────────────────────────────────────── */
function ShotButton({
  project,
  inWell,
  onOpen,
}: {
  project: Project;
  inWell?: boolean;
  onOpen: (el: HTMLButtonElement) => void;
}): ReactNode {
  const ref = useRef<HTMLButtonElement>(null);
  return (
    <button
      ref={ref}
      className={`vt-shot${inWell ? " in-well" : ""}`}
      type="button"
      data-cap={project.imageCaption}
      onClick={() => ref.current && onOpen(ref.current)}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={project.imageUrl} alt={project.imageAlt} loading="lazy" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
      <span className="vt-zoom">Expand</span>
    </button>
  );
}

function CardBody({ project }: { project: Project }): ReactNode {
  return (
    <>
      <div className="vt-eyebrow">
        <b>{project.eyebrow.category}</b>
        <i>/</i>
        {project.eyebrow.detail}
      </div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="vt-proof">
        <span className="lbl">{project.proof.label}</span>
        <span className="val">{project.proof.value}</span>
      </div>
      <div className="vt-tags">
        {project.tags.map((tag) => (
          <span key={tag} className="vt-tag">{tag}</span>
        ))}
      </div>
      {(project.githubLink || project.websiteLink) && (
        <div className="vt-links">
          {project.githubLink && (
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
              <GithubIcon />Code
            </a>
          )}
          {project.websiteLink && (
            <a href={project.websiteLink} target="_blank" rel="noopener noreferrer">
              <ExternalIcon />{project.websiteLinkLabel ?? "Link"}
            </a>
          )}
        </div>
      )}
    </>
  );
}

function ProjectCard({
  project,
  state,
  onTransitionEnd,
  onImageOpen,
}: {
  project: Project;
  state: ItemState;
  onTransitionEnd: () => void;
  onImageOpen: (el: HTMLButtonElement) => void;
}): ReactNode {
  const cls = [
    "vt-item",
    project.hero ? "is-hero" : "",
    "vt-rv",
    state === "fading" ? "is-out" : "",
    state === "hidden" ? "is-gone" : "",
  ].filter(Boolean).join(" ");

  if (project.hero) {
    return (
      <article className={cls} data-cat={project.category} onTransitionEnd={(e) => { if (e.propertyName === "opacity") onTransitionEnd(); }}>
        <div className="vt-body">
          <CardBody project={project} />
        </div>
        <div className="vt-well">
          <ShotButton project={project} inWell onOpen={onImageOpen} />
          <div className="vt-well-cap">{project.heroWellCaption}</div>
          <div className="vt-metrics">
            {project.heroMetrics?.map((m) => (
              <div key={m.label} className="vt-metric">
                <div className="v">{m.value}</div>
                <div className="k">{m.label}</div>
              </div>
            ))}
          </div>
          {project.heroNote && <div className="vt-well-note">{project.heroNote}</div>}
        </div>
      </article>
    );
  }

  return (
    <article className={cls} data-cat={project.category} onTransitionEnd={(e) => { if (e.propertyName === "opacity") onTransitionEnd(); }}>
      <ShotButton project={project} onOpen={onImageOpen} />
      <div className="vt-body">
        <CardBody project={project} />
      </div>
    </article>
  );
}

/* ── main component ─────────────────────────────────────── */
export default function ProjectsSection(): ReactNode {
  const [activeFilter, setActiveFilter] = useState("all");
  const [itemStates, setItemStates] = useState<Record<number, ItemState>>(
    () => Object.fromEntries(PROJECTS.map((p) => [p.id, "visible" as ItemState]))
  );
  const [lightbox, setLightbox] = useState<LightboxState>(null);
  const lastFocusRef = useRef<HTMLButtonElement | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  /* scroll reveal */
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const items = sectionRef.current?.querySelectorAll<HTMLElement>(".vt-rv");
    if (!items) return;
    if (reduced || !("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("vt-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.classList.add("vt-in");
          io.unobserve(e.target);
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.08 }
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  /* lightbox keyboard close */
  useEffect(() => {
    if (!lightbox) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") closeLightbox(); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [lightbox]); // eslint-disable-line react-hooks/exhaustive-deps

  const applyFilter = useCallback((cat: string) => {
    setActiveFilter(cat);
    setItemStates((prev) => {
      const next = { ...prev };
      PROJECTS.forEach((p) => {
        const matches = cat === "all" || p.category.split(/\s+/).includes(cat);
        if (matches) {
          next[p.id] = "visible";
        } else if (prev[p.id] !== "hidden") {
          next[p.id] = "fading";
        }
      });
      return next;
    });
  }, []);

  const handleTransitionEnd = useCallback((id: number) => {
    setItemStates((prev) => {
      if (prev[id] !== "fading") return prev;
      return { ...prev, [id]: "hidden" };
    });
  }, []);

  const openLightbox = useCallback((btn: HTMLButtonElement) => {
    const img = btn.querySelector("img");
    if (!img) return;
    lastFocusRef.current = btn;
    setLightbox({ src: img.src, alt: img.alt, caption: btn.dataset.cap ?? "" });
    document.body.style.overflow = "hidden";
  }, []);

  const closeLightbox = useCallback(() => {
    setLightbox(null);
    document.body.style.overflow = "";
    lastFocusRef.current?.focus();
  }, []);

  const matchingCount =
    activeFilter === "all"
      ? PROJECTS.length
      : PROJECTS.filter((p) => p.category.split(/\s+/).includes(activeFilter)).length;

  const anyVisible = PROJECTS.some((p) => itemStates[p.id] !== "hidden");

  return (
    <>
      <style>{STYLES}</style>
      <section id="projects" ref={sectionRef} className="vt-projects">
        <div className="vt-head">
          <h2>Projects</h2>
          <span className="vt-count">
            {matchingCount} {matchingCount === 1 ? "project" : "projects"}
          </span>
        </div>

        <div className="vt-filter" role="group" aria-label="Filter projects by domain">
          {FILTER_CATS.map((cat) => {
            const n =
              cat.id === "all"
                ? PROJECTS.length
                : PROJECTS.filter((p) => p.category.split(/\s+/).includes(cat.id)).length;
            return (
              <button
                key={cat.id}
                type="button"
                className="vt-chip"
                aria-pressed={activeFilter === cat.id}
                onClick={() => applyFilter(cat.id)}
              >
                {cat.label} <span className="n">{n}</span>
              </button>
            );
          })}
        </div>

        <div className="vt-grid">
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              state={itemStates[project.id]}
              onTransitionEnd={() => handleTransitionEnd(project.id)}
              onImageOpen={openLightbox}
            />
          ))}
          {!anyVisible && (
            <div className="vt-empty">Nothing here yet in this domain.</div>
          )}
        </div>

        {lightbox && (
          <div
            className="vt-lb on"
            role="dialog"
            aria-modal="true"
            aria-label="Project screenshot"
            onClick={(e) => { if (e.target === e.currentTarget) closeLightbox(); }}
          >
            <button className="vt-lb-close" onClick={closeLightbox}>Close ×</button>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="vt-lb-img" src={lightbox.src} alt={lightbox.alt} />
            <p className="vt-lb-cap">{lightbox.caption}</p>
          </div>
        )}
      </section>
    </>
  );
}

/* ── scoped styles ──────────────────────────────────────── */
const STYLES = `
.vt-projects {
  --p-bg:       #0A0A0A;
  --p-surface:  #16181A;
  --p-raised:   #1C1F21;
  --p-line:     #262A2C;
  --p-line-2:   #343A3C;
  --p-text:     #D9DEDD;
  --p-dim:      #8A9391;
  --p-dimmer:   #626C6B;
  --p-accent:   #4ADE80;
  --p-accent-d: #1F6B3D;
  --p-accent-2: #5EEAD4;

  --p-sans: 'IBM Plex Sans', system-ui, sans-serif;
  --p-mono: 'IBM Plex Mono', ui-monospace, monospace;
  --p-ease: cubic-bezier(.2,.7,.3,1);

  color: var(--p-text);
  font-family: var(--p-sans);
  font-size: 15.5px;
  line-height: 1.65;
  width: 100%;
  max-width: 920px;
  margin-top: clamp(56px, 7vw, 88px);
}
.vt-projects * { box-sizing: border-box; margin: 0; padding: 0 }
.vt-projects a { color: inherit }
.vt-projects :focus-visible { outline: 2px solid var(--p-accent); outline-offset: 3px; border-radius: 2px }

/* header */
.vt-head { display: flex; align-items: baseline; gap: 14px; margin-bottom: 22px; flex-wrap: wrap }
.vt-head h2 { font-family: var(--p-sans); font-weight: 600; font-size: 24px; letter-spacing: -.02em; color: var(--p-text) }
.vt-head .vt-count { font-family: var(--p-mono); font-size: 11.5px; color: var(--p-dimmer); letter-spacing: .02em; margin-left: auto }

/* filter chips */
.vt-filter { display: flex; flex-wrap: wrap; gap: 6px; padding-bottom: 22px; margin-bottom: 22px; border-bottom: 1px solid var(--p-line) }
.vt-chip {
  font-family: var(--p-mono); font-size: 11.5px; letter-spacing: .03em;
  color: var(--p-dim); background: transparent; border: 1px solid var(--p-line); border-radius: 2px;
  padding: 6px 11px; cursor: pointer;
  transition: color .18s var(--p-ease), border-color .18s var(--p-ease), background .18s var(--p-ease);
}
.vt-chip:hover { color: var(--p-text); border-color: var(--p-line-2) }
.vt-chip[aria-pressed="true"] { color: var(--p-accent); border-color: var(--p-accent-d); background: rgba(74,222,128,.07) }
.vt-chip .n { color: var(--p-dimmer); font-size: 10px; margin-left: 5px }
.vt-chip[aria-pressed="true"] .n { color: var(--p-accent-d) }

/* grid */
.vt-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 14px }
.vt-item {
  border: 1px solid var(--p-line); border-radius: 4px; background: var(--p-surface);
  padding: 0; overflow: hidden; display: flex; flex-direction: column;
  transition: border-color .22s var(--p-ease), background .22s var(--p-ease),
              opacity .28s var(--p-ease), transform .28s var(--p-ease);
}
.vt-item:hover { border-color: var(--p-line-2); background: var(--p-raised) }
.vt-item.is-hero { grid-column: 1 / -1; display: grid; grid-template-columns: 1fr 320px; gap: 30px; padding: 26px 28px }
.vt-item.is-out { opacity: 0; transform: translateY(6px); pointer-events: none }
.vt-item.is-gone { display: none }

.vt-body { padding: 20px 22px 22px; display: flex; flex-direction: column; flex: 1 }
.vt-item.is-hero .vt-body { padding: 0 }

/* screenshots */
.vt-shot {
  display: block; position: relative; width: 100%; aspect-ratio: 16/10;
  border: 0; border-bottom: 1px solid var(--p-line); padding: 0; margin: 0;
  overflow: hidden; cursor: zoom-in; background: var(--p-raised);
  background-image: repeating-linear-gradient(45deg, transparent 0 9px, rgba(255,255,255,.022) 9px 18px);
}
.vt-shot::after {
  content: attr(data-cap); position: absolute; left: 0; right: 0; bottom: 11px; z-index: 0;
  text-align: center; font-family: var(--p-mono); font-size: 9.5px; letter-spacing: .06em; color: var(--p-dimmer);
}
.vt-shot img {
  position: relative; z-index: 1; width: 100%; height: 100%; display: block;
  object-fit: cover; object-position: top center;
  filter: grayscale(.55) contrast(.96); opacity: .74;
  transition: filter .35s var(--p-ease), opacity .35s var(--p-ease), transform .55s var(--p-ease);
}
.vt-item:hover .vt-shot img,
.vt-shot:focus-visible img { filter: none; opacity: 1; transform: scale(1.025) }
.vt-zoom {
  position: absolute; right: 8px; bottom: 8px; z-index: 2; opacity: 0;
  background: rgba(10,10,10,.82); border: 1px solid var(--p-line-2); border-radius: 2px;
  padding: 3px 7px; font-family: var(--p-mono); font-size: 9px; letter-spacing: .08em;
  text-transform: uppercase; color: var(--p-dim);
  transition: opacity .2s var(--p-ease);
}
.vt-item:hover .vt-zoom, .vt-shot:focus-visible .vt-zoom { opacity: 1 }
.vt-shot.in-well { aspect-ratio: 16/9; border: 1px solid var(--p-line); border-radius: 2px; margin-bottom: 14px }

/* content */
.vt-eyebrow {
  font-family: var(--p-mono); font-size: 10px; letter-spacing: .12em; text-transform: uppercase;
  color: var(--p-dimmer); margin-bottom: 9px; display: flex; align-items: center; gap: 7px;
}
.vt-eyebrow b { color: var(--p-accent); font-weight: 500 }
.vt-eyebrow i { font-style: normal; color: var(--p-line-2) }

.vt-item h3 { font-family: var(--p-sans); font-weight: 600; font-size: 16.5px; letter-spacing: -.012em; line-height: 1.3; margin-bottom: 9px; color: var(--p-text) }
.vt-item.is-hero h3 { font-size: 20px }
.vt-item p { color: var(--p-dim); font-size: 14px; line-height: 1.6; max-width: 64ch }
.vt-item.is-hero p { font-size: 14.8px }

/* proof strip */
.vt-proof {
  display: flex; align-items: baseline; gap: 10px; margin-top: 16px;
  padding: 9px 12px; border-left: 2px solid var(--p-accent-d); background: rgba(74,222,128,.045);
  font-family: var(--p-mono); font-size: 11.5px; line-height: 1.5;
}
.vt-proof .lbl { color: var(--p-dimmer); font-size: 9.5px; letter-spacing: .1em; text-transform: uppercase; flex: none }
.vt-proof .val { color: var(--p-accent) }

.vt-tags { display: flex; flex-wrap: wrap; gap: 5px; margin-top: 16px }
.vt-tag { font-family: var(--p-mono); font-size: 10px; color: var(--p-dimmer); border: 1px solid var(--p-line); border-radius: 2px; padding: 3px 7px }

.vt-links { display: flex; gap: 16px; margin-top: auto; padding-top: 16px }
.vt-links a { font-family: var(--p-mono); font-size: 11.5px; color: var(--p-dim); text-decoration: none; display: inline-flex; align-items: center; gap: 6px; transition: color .18s var(--p-ease) }
.vt-links a:hover { color: var(--p-accent) }
.vt-links svg { width: 12px; height: 12px; flex: none }

/* hero well */
.vt-well { border: 1px solid var(--p-line); border-radius: 3px; background: var(--p-bg); padding: 15px; align-self: start }
.vt-well-cap { font-family: var(--p-mono); font-size: 9.5px; letter-spacing: .1em; text-transform: uppercase; color: var(--p-dimmer); margin-bottom: 12px }
.vt-metrics { display: grid; grid-template-columns: 1fr 1fr; gap: 1px; background: var(--p-line) }
.vt-metric { background: var(--p-bg); padding: 14px 15px }
.vt-metric .v { font-family: var(--p-mono); font-size: 26px; font-weight: 500; color: var(--p-accent); letter-spacing: -.02em }
.vt-metric .k { font-family: var(--p-mono); font-size: 9px; letter-spacing: .09em; text-transform: uppercase; color: var(--p-dimmer); margin-top: 2px }
.vt-well-note { font-family: var(--p-mono); font-size: 10px; color: var(--p-dimmer); line-height: 1.65; margin-top: 11px }

.vt-empty { grid-column: 1 / -1; border: 1px dashed var(--p-line); border-radius: 4px; padding: 34px; text-align: center; font-family: var(--p-mono); font-size: 12px; color: var(--p-dimmer) }

/* reveal */
.vt-rv { opacity: 0; transform: translateY(12px); transition: opacity .5s var(--p-ease), transform .5s var(--p-ease) }
.vt-rv.vt-in { opacity: 1; transform: none }

/* lightbox */
.vt-lb {
  position: fixed; inset: 0; z-index: 9999; display: none;
  align-items: center; justify-content: center; flex-direction: column; gap: 14px;
  padding: 36px; background: rgba(6,7,7,.94);
}
.vt-lb.on { display: flex }
.vt-lb-img { max-width: min(1120px, 92vw); max-height: 78vh; object-fit: contain; border: 1px solid var(--p-line-2); border-radius: 3px; background: var(--p-bg) }
.vt-lb-cap { font-family: var(--p-mono); font-size: 11.5px; color: var(--p-dim); text-align: center; max-width: 70ch }
.vt-lb-close {
  position: absolute; top: 20px; right: 22px;
  background: transparent; border: 1px solid var(--p-line-2); border-radius: 2px;
  color: var(--p-dim); font-family: var(--p-mono); font-size: 11px; letter-spacing: .06em;
  padding: 6px 11px; cursor: pointer; transition: color .18s var(--p-ease), border-color .18s var(--p-ease);
}
.vt-lb-close:hover { color: var(--p-accent); border-color: var(--p-accent-d) }

/* responsive */
@media (max-width: 860px) {
  .vt-grid { grid-template-columns: 1fr }
  .vt-item.is-hero { grid-template-columns: 1fr; gap: 20px; padding: 22px 24px }
  .vt-item.is-hero h3 { font-size: 18px }
}
@media (max-width: 560px) {
  .vt-projects { font-size: 15px }
  .vt-body { padding: 17px 18px 19px }
  .vt-head .vt-count { margin-left: 0; width: 100% }
  .vt-chip { font-size: 11px; padding: 5px 9px }
  .vt-proof { flex-direction: column; gap: 3px }
  .vt-zoom { display: none }
  .vt-lb { padding: 20px }
}
@media (hover: none) {
  .vt-shot img { filter: none; opacity: 1 }
}
@media (prefers-reduced-motion: reduce) {
  .vt-projects * { transition-duration: .01ms !important; animation: none !important }
  .vt-rv { opacity: 1; transform: none }
  .vt-item.is-out { opacity: 1; transform: none }
  .vt-item:hover .vt-shot img { transform: none }
}
`;
