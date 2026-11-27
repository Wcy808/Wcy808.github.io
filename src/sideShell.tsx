import { useEffect, useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { profile, ui } from "./content";
import { useLang } from "./langContext";
import CursorGrid from "./cursorGrid";

export function SideShell({ children }: { children: ReactNode }) {
  const { lang, toggle } = useLang();
  const t = ui[lang];
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    setDark(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setDark(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const ink = dark ? "#ffffff" : "#94a3b8";

  return (
    <div className="page">
      <CursorGrid
        className="bgCursorGrid"
        cellSize={36}
        color={ink}
        gridColor={ink}
        highlight="area"
        gridStyle="lines"
        radius={140}
        holdTime={400}
        fadeDuration={800}
        fillOpacity={0.06}
        gridOpacity={0.08}
        maxOpacity={0.4}
        spotlight={0.3}
        clickPulse
      />
      <header className="side">
        <Link className="sideTitle" to="/">
          <span className="sideSub">{profile.name}</span>
          <h1>{lang === "zh" ? "个人作品集" : "Portfolio"}</h1>
        </Link>
        <nav className="sideNav">
          <ul>
            <li>
              <Link to="/" hash="projects">
                {t.nav.projects}
              </Link>
            </li>
            <li>
              <Link to="/about">{t.nav.about}</Link>
            </li>
            <li>
              <Link to="/contact">{t.nav.contact}</Link>
            </li>
          </ul>
          <div className="sideSocial">
            <a href={profile.github} target="_blank" rel="noreferrer" title="GitHub">
              <GithubIcon />
            </a>
            <button type="button" className="langToggle" onClick={toggle} aria-label="Switch language">
              {t.nav.toggle}
            </button>
          </div>
        </nav>
      </header>

      <main id="top">{children}</main>

      <footer className="sideFooter">
        <p>© 2026 {profile.name}</p>
        <p>{t.footer.theme}</p>
        <p>
          {t.footer.built} ·{" "}
          <a href="https://github.com/Wcy808/Wcy808.github.io" target="_blank" rel="noreferrer">
            {t.footer.source}
          </a>
        </p>
      </footer>
    </div>
  );
}

export function GithubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
    </svg>
  );
}