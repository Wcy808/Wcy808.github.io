import { createFileRoute } from "@tanstack/react-router";
import { ui } from "../content";
import { useLang } from "../langContext";
import { SideShell } from "../sideShell";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  const { lang } = useLang();
  const t = ui[lang];

  return (
    <SideShell>
      <article className="article">
        <h2 className="postTitle heroName">{t.sections.about}</h2>
        <div className="meta">
          <span>{t.hero.role}</span>
        </div>
        <div className="prose">
          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>
          {t.skillGroups.map((g) => (
            <div className="skillGroup" key={g.label}>
              <span className="skillLabel">{g.label}</span>
              <span className="skillItems">{g.items.join(" / ")}</span>
            </div>
          ))}
        </div>
      </article>
    </SideShell>
  );
}