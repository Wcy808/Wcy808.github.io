import { useEffect, useRef, type ReactNode } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { profile, projects, ui, type Lang } from "../content";
import { useLang } from "../langContext";

export const Route = createFileRoute("/")({
  component: Portfolio,
});

function Portfolio() {
  const { lang, toggle } = useLang();
  const t = ui[lang];

  return (
    <div className="page">
      <header className="side">
        <a className="sideTitle" href="#top">
          <span className="sideSub">{profile.name}</span>
          <h1>{lang === "zh" ? "个人作品集" : "Portfolio"}</h1>
        </a>
        <nav className="sideNav">
          <ul>
            <li>
              <a href="#projects">{t.nav.projects}</a>
            </li>
            <li>
              <a href="#about">{t.nav.about}</a>
            </li>
            <li>
              <a href="#contact">{t.nav.contact}</a>
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

      <main id="top">
        <article className="article">
          <div className="heroHead">
            <img className="heroAvatar" src={profile.avatar} alt={profile.name} width={56} height={56} />
            <h2 className="postTitle heroName">{profile.name}</h2>
          </div>
          <div className="meta">
            <span>{t.hero.role}</span>
          </div>
          <div className="prose">
            <p className="heroTagline">{t.hero.tagline}</p>
            <p>{t.hero.intro}</p>
          </div>
          <div className="heroCta">
            <a href="#projects">{t.hero.ctaProjects} ↓</a>
            <a href={profile.github} target="_blank" rel="noreferrer">
              <GithubIcon />
              {t.hero.ctaGithub} ↗
            </a>
          </div>
        </article>

        <SectionHead id="projects" index="01" title={t.sections.projects} sub={t.sections.projectsSub} />
        {projects.map((p) => (
          <ProjectArticle key={p.id} project={p} lang={lang} />
        ))}

        <SectionHead id="about" index="02" title={t.sections.about} />
        <Reveal className="article prose">
          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>
          {t.skillGroups.map((g) => (
            <div className="skillGroup" key={g.label}>
              <span className="skillLabel">{g.label}</span>
              <span className="skillItems">{g.items.join(" / ")}</span>
            </div>
          ))}
        </Reveal>

        <SectionHead id="contact" index="03" title={t.sections.contact} />
        <Reveal className="article prose">
          <p>{t.contact.text}</p>
          <div className="articleLinks">
            <a href={profile.github} target="_blank" rel="noreferrer">
              <GithubIcon />
              {t.contact.button}
            </a>
          </div>
        </Reveal>
      </main>

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

function ProjectArticle({ project, lang }: { project: (typeof projects)[number]; lang: Lang }) {
  const ref = useReveal<HTMLElement>();
  const t = ui[lang];
  const c = project[lang];

  return (
    <article ref={ref} data-reveal className="article">
      <h3 className="postTitle">
        <a href={project.github} target="_blank" rel="noreferrer">
          {c.name}
        </a>
      </h3>
      <div className="meta">
        <span>{c.tagline}</span>
        {project.stars && <span>★ {project.stars}</span>}
        <span>{project.tags.join(" / ")}</span>
      </div>
      <div className="prose">
        <p>{c.desc}</p>
        {"pipeline" in c && (
          <p className="pipeline">
            {c.pipeline.map((step, i) => (
              <span key={step}>
                {step}
                {i < c.pipeline.length - 1 && <span className="pipelineArrow">→</span>}
              </span>
            ))}
          </p>
        )}
        <ul>
          {c.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      </div>
      <div className="articleLinks">
        <a href={project.github} target="_blank" rel="noreferrer">
          <GithubIcon />
          {t.project.github}
        </a>
        {project.site && (
          <a href={project.site} target="_blank" rel="noreferrer">
            {t.project.site} ↗
          </a>
        )}
      </div>
    </article>
  );
}

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("inView");
          io.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return ref;
}

function Reveal({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} data-reveal className={className}>
      {children}
    </div>
  );
}

function SectionHead({ id, index, title, sub }: { id: string; index: string; title: string; sub?: string }) {
  return (
    <div className="sectionHead" id={id}>
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