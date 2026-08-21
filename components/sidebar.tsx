import Image from "next/image";
import type { ReactNode } from "react";
import me from "../assets/headshot2.jpg";
import { PORTFOLIO_NAME } from "../lib/constants";
import {
  ArrowIcon,
  Email,
  GitHubIcon,
  LinkedIN,
  SingaporeFlagIcon,
  USAFlagIcon,
} from "./icons";

const TOOLS = [
  { name: "C", href: "https://docs.microsoft.com/en-us/cpp/?view=msvc-170", src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/c-colored.svg" },
  { name: "C++", href: "https://docs.microsoft.com/en-us/cpp/?view=msvc-170", src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/cplusplus-colored.svg" },
  { name: "Git", href: "https://git-scm.com/", src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/git-colored.svg" },
  { name: "Python", href: "https://www.python.org/", src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/python-colored.svg" },
  { name: "Java", href: "https://www.oracle.com/java/", src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/java-colored.svg" },
  { name: "HTML5", href: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5", src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg" },
  { name: "CSS3", href: "https://www.w3.org/TR/CSS/#css", src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg" },
  { name: "TypeScript", href: "https://www.typescriptlang.org/", src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg" },
  { name: "Next.js", href: "https://nextjs.org/docs", src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nextjs-colored.svg" },
  { name: "React", href: "https://reactjs.org/", src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg" },
  { name: "Bootstrap", href: "https://getbootstrap.com/", src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/bootstrap-colored.svg" },
  { name: "Tailwind CSS", href: "https://tailwindcss.com/", src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg" },
  { name: "PHP", href: "https://www.php.net/", src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/php-colored.svg" },
  { name: "Firebase", href: "https://firebase.google.com/", src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/firebase-colored.svg" },
  { name: "AWS", href: "https://aws.amazon.com/", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "Bash", href: "https://www.gnu.org/software/bash/", src: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Bash_Logo_Colored.svg" },
  { name: "Assembly", href: "https://www.ibm.com/docs/en/zos/2.1.0?topic=introduction-assembler-language", src: "/icons/assembly.png" },
  { name: "Verilog", href: "https://www.verilog.com/", src: "/icons/verilog.png" },
  { name: "Figma", href: "https://www.figma.com/", src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/figma-colored.svg" },
  { name: "Anaconda", href: "https://www.anaconda.com/", src: "/icons/anaconda.png" },
  { name: "Logisim Evolution", href: "https://github.com/logisim-evolution/logisim-evolution", src: "/icons/logisim.png" },
  { name: "Pandas", href: "https://pandas.pydata.org/", src: "/icons/pandas.png" },
  { name: "PyTorch", href: "https://pytorch.org/", src: "/icons/pytorch.png" },
  { name: "Google Cloud", href: "https://cloud.google.com/", src: "/icons/gcp.png" },
  { name: "BigQuery", href: "https://cloud.google.com/bigquery", src: "/icons/bigquery.svg" },
  { name: "Vertex AI", href: "https://cloud.google.com/vertex-ai", src: "/icons/vertexai.png" },
  { name: "Google Cloud Storage", href: "https://cloud.google.com/storage", src: "/icons/gcs.png" },
  { name: "Cadence Virtuoso", href: "https://www.cadence.com/en_US/home/tools/custom-ic-analog-rf-design/layout-design/virtuoso-layout-suite.html", src: "/icons/cadence.png" },
  { name: "OllyDbg", href: "https://www.ollydbg.de/", src: "/icons/ollydbg.png" },
  { name: "IDA Pro", href: "https://hex-rays.com/ida-pro/", src: "/icons/ida.png" },
  { name: "Matplotlib", href: "https://matplotlib.org/", src: "/icons/matplotlib.png" },
  { name: "scikit-learn", href: "https://scikit-learn.org/stable/", src: "/icons/sklearn.png" },
] as const;

const CONTACT_LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/varuntaneja7/", icon: <LinkedIN /> },
  { label: "GitHub", href: "https://github.com/vtaneja0211", icon: <GitHubIcon /> },
  { label: "USA Phone", href: "tel:+12694798385", icon: <USAFlagIcon /> },
  { label: "Singapore Phone", href: "tel:+6597572510", icon: <SingaporeFlagIcon /> },
  { label: "Email", href: "mailto:varuntaneja0211@gmail.com", icon: <Email /> },
] as const;

export default function Sidebar(): ReactNode {
  return (
    <>
      <style>{STYLES}</style>
      <aside className="vt-sidebar">
        <div className="vt-profile">
          <div className="vt-avatar-wrap">
            <Image
              alt={PORTFOLIO_NAME}
              className="vt-avatar"
              src={me}
              placeholder="blur"
              width={200}
              height={200}
              priority
            />
            <span className="vt-profile-dot" aria-hidden="true" />
          </div>
          <div className="vt-profile-label">Profile</div>
          <h1>{PORTFOLIO_NAME}</h1>
          <section id="bio">
            <h2>Full Stack AI Engineer at Rowan</h2>
          </section>
        </div>

        <section className="vt-tools" aria-labelledby="tools-title">
          <div className="vt-section-head">
            <h3 id="tools-title">Languages &amp; Tools</h3>
            <span>{TOOLS.length}</span>
          </div>
          <div className="vt-tool-grid">
            {TOOLS.map((tool) => (
              <a key={tool.name} href={tool.href} target="_blank" rel="noreferrer" title={tool.name}>
                <img src={tool.src} width="36" height="36" alt={tool.name} loading="lazy" />
              </a>
            ))}
          </div>
        </section>

        <section id="contact" className="vt-contact" aria-labelledby="contact-title">
          <div className="vt-section-head">
            <h3 id="contact-title">Contact Me</h3>
            <span>Open</span>
          </div>

          <div className="vt-contact-links">
            {CONTACT_LINKS.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">
                <span className="vt-contact-label">
                  <span className="vt-contact-icon">{link.icon}</span>
                  {link.label}
                </span>
                <ArrowIcon />
              </a>
            ))}
          </div>

          <div className="vt-contact-info">
            <div className="vt-info-label">Contact Information</div>
            <p>Reach out to me using the contact information below.</p>
            <dl>
              <div>
                <dt>Email</dt>
                <dd>varuntaneja0211@gmail.com</dd>
              </div>
              <div>
                <dt>Phone</dt>
                <dd>USA: +1 (269) 479-8385<br />Singapore: +65 97572510</dd>
              </div>
            </dl>
          </div>
        </section>
      </aside>
    </>
  );
}

const STYLES = `
.vt-sidebar {
  --side-bg: #0A0A0A;
  --side-surface: #16181A;
  --side-raised: #1C1F21;
  --side-line: #262A2C;
  --side-line-2: #343A3C;
  --side-text: #D9DEDD;
  --side-dim: #8A9391;
  --side-dimmer: #626C6B;
  --side-accent: #4ADE80;
  width: 100%;
  padding: 24px 0 64px;
  color: var(--side-text);
  font-family: 'IBM Plex Sans', system-ui, sans-serif;
}

.vt-sidebar * { box-sizing: border-box }
.vt-sidebar a { color: inherit }

.vt-profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 30px;
  text-align: center;
}

.vt-avatar-wrap { position: relative; margin-bottom: 18px }
.vt-avatar {
  width: 148px;
  height: 148px;
  border: 1px solid var(--side-line-2);
  border-radius: 50%;
  object-fit: cover;
  filter: saturate(.85) contrast(1.03);
  box-shadow: 0 0 0 7px var(--side-bg), 0 0 0 8px var(--side-line);
}
.vt-profile-dot {
  position: absolute;
  right: 8px;
  bottom: 9px;
  width: 11px;
  height: 11px;
  border: 3px solid var(--side-bg);
  border-radius: 50%;
  background: var(--side-accent);
}
.vt-profile-label {
  margin-bottom: 6px;
  color: var(--side-accent);
  font-family: 'IBM Plex Mono', ui-monospace, monospace;
  font-size: 11px;
  letter-spacing: .14em;
  text-transform: uppercase;
}
.vt-profile h1 {
  margin: 0;
  color: var(--side-text);
  font-size: 32px;
  font-weight: 600;
  letter-spacing: -.025em;
}
.vt-profile h2 {
  max-width: 270px;
  margin: 10px auto 0;
  color: var(--side-dim);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.65;
}

.vt-tools,
.vt-contact {
  margin-top: 10px;
  border: 1px solid var(--side-line);
  border-radius: 4px;
  background: var(--side-surface);
  overflow: hidden;
}
.vt-section-head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  padding: 14px 16px;
  border-bottom: 1px solid var(--side-line);
}
.vt-section-head h3 {
  margin: 0;
  color: var(--side-text);
  font-size: 15px;
  font-weight: 600;
}
.vt-section-head span {
  color: var(--side-dimmer);
  font-family: 'IBM Plex Mono', ui-monospace, monospace;
  font-size: 9px;
  letter-spacing: .1em;
  text-transform: uppercase;
}

.vt-tool-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 7px;
  padding: 12px;
}
.vt-tool-grid a {
  display: grid;
  aspect-ratio: 1;
  place-items: center;
  min-width: 0;
  border: 1px solid var(--side-line);
  border-radius: 3px;
  background: var(--side-bg);
  transition: border-color .18s ease, background .18s ease, transform .18s ease;
}
.vt-tool-grid a:hover {
  border-color: var(--side-line-2);
  background: var(--side-raised);
  transform: translateY(-1px);
}
.vt-tool-grid img {
  width: 28px;
  height: 28px;
  object-fit: contain;
}

.vt-contact-links { padding: 10px }
.vt-contact-links > a {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  min-height: 48px;
  padding: 10px 12px;
  border-bottom: 1px solid var(--side-line);
  color: var(--side-dim);
  text-decoration: none;
  transition: color .18s ease, background .18s ease;
}
.vt-contact-links > a:last-child { border-bottom: 0 }
.vt-contact-links > a:hover { color: var(--side-text); background: var(--side-raised) }
.vt-contact-label { display: flex; align-items: center; gap: 10px; font-size: 13px }
.vt-contact-icon { display: grid; width: 22px; height: 22px; place-items: center }
.vt-contact-icon svg { width: 19px; height: 19px }
.vt-contact-links > a > svg { margin: 0; color: var(--side-accent) }

.vt-contact-info {
  padding: 16px;
  border-top: 1px solid var(--side-line);
  background: var(--side-bg);
}
.vt-info-label,
.vt-contact-info dt {
  color: var(--side-accent);
  font-family: 'IBM Plex Mono', ui-monospace, monospace;
  font-size: 11px;
  letter-spacing: .1em;
  text-transform: uppercase;
}
.vt-info-label { font-size: 12px }
.vt-contact-info > p {
  margin: 10px 0 18px;
  color: var(--side-dim);
  font-size: 14px;
  line-height: 1.6;
}
.vt-contact-info dl { display: grid; gap: 15px; margin: 0 }
.vt-contact-info dt { margin-bottom: 5px }
.vt-contact-info dd {
  margin: 0;
  color: var(--side-text);
  font-family: 'IBM Plex Mono', ui-monospace, monospace;
  font-size: 13px;
  line-height: 1.65;
  overflow-wrap: anywhere;
}

.vt-sidebar :focus-visible { outline: 2px solid var(--side-accent); outline-offset: 2px }

@media (min-width: 768px) {
  .vt-sidebar {
    width: 360px;
    flex: 0 0 360px;
    padding: 0 20px 220px 0;
    border-right: 1px solid var(--side-line);
  }
}

@media (prefers-reduced-motion: reduce) {
  .vt-sidebar * { transition-duration: .01ms !important }
}
`;
