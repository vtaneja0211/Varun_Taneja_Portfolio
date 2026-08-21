import type { ReactNode } from "react";

export default function AboutSection(): ReactNode {
  return (
    <>
      <style>{STYLES}</style>
      <section id="about" className="vt-about">
        <div className="ab-tag">
          <b>Varun Taneja</b> · Computer Engineer
        </div>

        <div className="ab-cols">
          <div>
            <p>
              I am <strong>Varun Taneja</strong>, a recent graduate from the{" "}
              <strong>University of Notre Dame</strong> with a Bachelor of
              Science in <strong>Computer Engineering</strong> and a
              concentration in <strong>cybersecurity</strong> and{" "}
              <strong>AI</strong>.
            </p>
            <p>
              My diverse background, growing up in Singapore, has equipped me
              with the valuable skill of bridging cultural divides and
              connecting with individuals from various backgrounds.
            </p>
            <p>
              At Notre Dame, I served as Vice President of the club golf team,
              representing the university in national tournaments. Competitive
              golf taught me to manage pressure, adapt quickly, and stay
              mentally resilient — skills I find just as useful in fast-paced
              technical environments.
            </p>
          </div>
          <div>
            <p>
              I also completed two years of mandatory national service in
              Singapore, which strengthened my discipline and teamwork —
              qualities I brought with me when I joined Notre Dame's club
              boxing team.
            </p>
            <p>
              Technically, I've built a strong foundation through hands-on
              experience in cloud computing at <strong>Vena Energy</strong>,
              data engineering at <strong>Partior</strong>, and AI research at{" "}
              <strong>Notre Dame</strong>. These experiences, combined with my
              academic training, have prepared me to tackle complex technical
              challenges with creativity and clarity.
            </p>
            <p>
              I'm currently working full-time at <strong>Rowan</strong> in
              Chicago as a <strong>Full Stack AI Engineer</strong>. We are
              trying to revolutionize the world of SMB M&A using AI. Reach out
              if you would like to learn more!
            </p>
          </div>
        </div>

        <div className="ab-resume">
          Here is my{" "}
          <a href="/Varun_Taneja_Resume.pdf" target="_blank" rel="noopener noreferrer">
            Resume<span>↗</span>
          </a>
        </div>

        <div className="ab-strip">
          <div className="ab-fact">
            <div className="k">Now</div>
            <div className="v">
              <b>Full Stack AI Engineer</b>
              <br />
              Rowan · Chicago
            </div>
          </div>
          <div className="ab-fact">
            <div className="k">Education</div>
            <div className="v">
              B.S. Computer Engineering
              <br />
              University of Notre Dame
            </div>
          </div>
          <div className="ab-fact">
            <div className="k">Concentration</div>
            <div className="v">Cybersecurity &amp; AI</div>
          </div>
          <div className="ab-fact">
            <div className="k">Roots</div>
            <div className="v">
              Singapore → Indiana
              <br />→ Chicago
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const STYLES = `
.vt-about {
  --p-bg:       #0A0A0A;
  --p-surface:  #16181A;
  --p-line:     #262A2C;
  --p-line-2:   #343A3C;
  --p-text:     #D9DEDD;
  --p-dim:      #8A9391;
  --p-dimmer:   #626C6B;
  --p-accent:   #4ADE80;
  --p-accent-d: #1F6B3D;
  --p-sans:     'IBM Plex Sans', system-ui, sans-serif;
  --p-mono:     'IBM Plex Mono', ui-monospace, monospace;
  --p-ease:     cubic-bezier(.2,.7,.3,1);
  color: var(--p-text);
  font-family: var(--p-sans);
  font-size: 15.5px;
  line-height: 1.65;
  width: 100%;
  max-width: 920px;
  container-type: inline-size;
}
.vt-about * { box-sizing: border-box; margin: 0; padding: 0 }
.vt-about a { color: inherit }
.vt-about :focus-visible { outline: 2px solid var(--p-accent); outline-offset: 3px; border-radius: 2px }

/* eyebrow */
.vt-about .ab-tag {
  font-family: var(--p-mono); font-size: 11px; letter-spacing: .14em; text-transform: uppercase;
  color: var(--p-dimmer); display: flex; align-items: center; gap: 12px; margin-bottom: 26px;
}
.vt-about .ab-tag::after { content: ""; flex: 1; height: 1px; background: var(--p-line); max-width: 220px }
.vt-about .ab-tag b { color: var(--p-accent); font-weight: 500 }

/* two-column prose */
.vt-about .ab-cols {
  display: grid; grid-template-columns: 1fr 1fr; gap: 36px;
  padding-top: 26px; border-top: 1px solid var(--p-line);
}
.vt-about .ab-cols p { color: var(--p-dim); font-size: 14.5px; line-height: 1.7; margin-bottom: 16px }
.vt-about .ab-cols p:last-child { margin-bottom: 0 }
.vt-about .ab-cols strong { color: var(--p-text); font-weight: 500 }

/* resume line */
.vt-about .ab-resume {
  margin-top: 28px; font-family: var(--p-mono); font-size: 12.5px; color: var(--p-dim);
}
.vt-about .ab-resume a {
  color: var(--p-accent); text-decoration: none;
  border-bottom: 1px solid var(--p-accent-d); padding-bottom: 1px;
  transition: border-color .18s var(--p-ease);
}
.vt-about .ab-resume a:hover { border-bottom-color: var(--p-accent) }
.vt-about .ab-resume a span { margin-left: 5px; font-size: 11px }

/* fact strip */
.vt-about .ab-strip {
  display: flex; flex-wrap: wrap; margin-top: 34px;
  border: 1px solid var(--p-line); border-radius: 4px; overflow: hidden; background: var(--p-surface);
}
.vt-about .ab-fact { flex: 1 1 158px; padding: 15px 18px; border-right: 1px solid var(--p-line) }
.vt-about .ab-fact:last-child { border-right: 0 }
.vt-about .ab-fact .k {
  font-family: var(--p-mono); font-size: 9px; letter-spacing: .12em; text-transform: uppercase;
  color: var(--p-dimmer); margin-bottom: 5px;
}
.vt-about .ab-fact .v { font-family: var(--p-mono); font-size: 12px; color: var(--p-text); line-height: 1.5 }
.vt-about .ab-fact .v b { color: var(--p-accent); font-weight: 500 }

/* responsive */
@media (max-width: 820px) {
  .vt-about .ab-cols { grid-template-columns: 1fr; gap: 0 }
  .vt-about .ab-fact { flex: 1 1 100%; border-right: 0; border-bottom: 1px solid var(--p-line) }
  .vt-about .ab-fact:last-child { border-bottom: 0 }
}
@container (max-width: 680px) {
  .vt-about .ab-cols { grid-template-columns: 1fr; gap: 0 }
  .vt-about .ab-fact { flex: 1 1 100%; border-right: 0; border-bottom: 1px solid var(--p-line) }
  .vt-about .ab-fact:last-child { border-bottom: 0 }
}
@media (max-width: 560px) {
  .vt-about { font-size: 15px }
}
@media (prefers-reduced-motion: reduce) {
  .vt-about * { transition-duration: .01ms !important }
}
`;
