import { useEffect, useRef, type ReactNode } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { profile, projects, ui, type Lang } from "../content";
import { useLang } from "../langContext";
import { GithubIcon, SideShell } from "../sideShell";

export const Route = createFileRoute("/")({
  component: Portfolio,
});

function Portfolio() {
  const { lang } = useLang();
  const t = ui[lang];

  return (
    <SideShell>
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

      <SectionHead id="contact" index="02" title={t.sections.contact} />
      <Reveal className="article prose">
        <p>{t.contact.text}</p>
        <div className="articleLinks">
          <a href={profile.github} target="_blank" rel="noreferrer">
            <GithubIcon />
            {t.contact.button}
          </a>
        </div>
      </Reveal>
    </SideShell>
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