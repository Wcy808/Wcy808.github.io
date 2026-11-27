import { createFileRoute } from "@tanstack/react-router";
import { profile, ui } from "../content";
import { useLang } from "../langContext";
import { GithubIcon, SideShell } from "../sideShell";

export const Route = createFileRoute("/contact")({
  component: Contact,
});

function Contact() {
  const { lang } = useLang();
  const t = ui[lang];

  return (
    <SideShell>
      <article className="article">
        <h2 className="postTitle heroName">{t.sections.contact}</h2>
        <div className="prose">
          <p>{t.contact.text}</p>
        </div>
        <div className="articleLinks">
          <a href={profile.github} target="_blank" rel="noreferrer">
            <GithubIcon />
            {t.contact.button}
          </a>
        </div>
      </article>
    </SideShell>
  );
}