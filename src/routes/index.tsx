import { createFileRoute } from "@tanstack/react-router";
import { profile, projects, ui } from "../content";
import { useLang } from "../langContext";

export const Route = createFileRoute("/")({
  component: Portfolio,
});

function Portfolio() {
  const { lang, toggle } = useLang();
  const t = ui[lang];

  return (
    <div className="page">
      <div className="bgGlow" aria-hidden="true" />

      <header className="nav">
        <a className="navLogo" href="#top">
          <span className="navLogoMark">W</span>
          {profile.name}
        </a>
        <nav className="navLinks">
          <a href="#projects">{t.nav.projects}</a>
          <a href="#about">{t.nav.about}</a>
          <a href="#contact">{t.nav.contact}</a>
          <button type="button" className="langToggle" onClick={toggle} aria-label="Switch language">
            {t.nav.toggle}
          </button>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <img className="heroAvatar" src={profile.avatar} alt={profile.name} width={112} height={112} />
          <p className="heroRole">{t.hero.role}</p>
          <h1 className="heroTitle">
            {profile.name}
            <span className="heroTagline">{t.hero.tagline}</span>
          </h1>
          <p className="heroIntro">{t.hero.intro}</p>
          <div className="heroCta">
            <a className="btnPrimary" href="#projects">
              {t.hero.ctaProjects}
            </a>
            <a className="btnGhost" href={profile.github} target="_blank" rel="noreferrer">
              <GithubIcon />
              {t.hero.ctaGithub}
            </a>
          </div>
        </section>

        <section className="section" id="projects">
          <SectionTitle index="01" title={t.sections.projects} sub={t.sections.projectsSub} />
          <div className="projectGrid">
            {projects.map((p) => {
              const c = p[lang];
              return (
                <article className="projectCard" key={p.id}>
                  <div className="projectHead">
                    <h3 className="projectName">{c.name}</h3>
                    {p.stars && (
                      <span className="projectStars" title={`${p.stars} ${t.project.stars}`}>
                        ★ {p.stars}
                      </span>
                    )}
                  </div>
                  <p className="projectTagline">{c.tagline}</p>
                  <p className="projectDesc">{c.desc}</p>
                  {"pipeline" in c && (
                    <ol className="pipeline">
                      {c.pipeline.map((step, i) => (
                        <li key={step}>
                          <span className="pipelineStep">{step}</span>
                          {i < c.pipeline.length - 1 && <span className="pipelineArrow">→</span>}
                        </li>
                      ))}
                    </ol>
                  )}
                  <ul className="projectHighlights">
                    {c.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                  <div className="projectTags">
                    {p.tags.map((tag) => (
                      <span className="tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="projectLinks">
                    <a href={p.github} target="_blank" rel="noreferrer">
                      <GithubIcon />
                      {t.project.github}
                    </a>
                    {p.site && (
                      <a href={p.site} target="_blank" rel="noreferrer">
                        {t.project.site} ↗
                      </a>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="section" id="about">
          <SectionTitle index="02" title={t.sections.about} />
          <div className="aboutGrid">
            <div className="aboutText">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
            </div>
            <div className="skillPanel">
              <h3 className="skillTitle">{t.sections.skills}</h3>
              {t.skillGroups.map((g) => (
                <div className="skillGroup" key={g.label}>
                  <span className="skillLabel">{g.label}</span>
                  <div className="skillItems">
                    {g.items.map((item) => (
                      <span className="tag" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section contact" id="contact">
          <SectionTitle index="03" title={t.sections.contact} />
          <p className="contactText">{t.contact.text}</p>
          <a className="btnPrimary" href={profile.github} target="_blank" rel="noreferrer">
            <GithubIcon />
            {t.contact.button}
          </a>
        </section>
      </main>

      <footer className="footer">
        <span>© 2026 {profile.name}</span>
        <span className="footerDot">·</span>
        <span>{t.footer.built}</span>
        <span className="footerDot">·</span>
        <a href="https://github.com/Wcy808/Wcy808.github.io" target="_blank" rel="noreferrer">
          {t.footer.source}
        </a>
      </footer>
    </div>
  );
}

function SectionTitle({ index, title, sub }: { index: string; title: string; sub?: string }) {
  return (
    <div className="sectionHead">
      <span className="sectionIndex">{index}</span>
      <h2 className="sectionTitle">{title}</h2>
      {sub && <p className="sectionSub">{sub}</p>}
    </div>
  );
}

function GithubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
    </svg>
  );
}