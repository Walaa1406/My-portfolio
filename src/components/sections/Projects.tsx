import { PROJECTS } from "../../data/portfolio";
import { ProjectImage } from "../ProjectImage";
import { SectionHeading } from "../SectionHeading";
import { Tag } from "../Tag";

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading eyebrow="03 — Work" title="Featured Projects" />
      <div className="grid gap-6 md:grid-cols-2">
        {PROJECTS.map((p, i) =>
        <article
          key={p.title}
          className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-1 hover:shadow-soft">
          
            <ProjectImage src={p.image} alt={p.title} />
            <div className="flex flex-1 flex-col p-7">
              <div className="mb-3 flex items-center justify-between gap-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                <span className="text-pink-deep">{p.type}</span>
                <span>{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="font-display text-2xl leading-tight">{p.title}</h3>
              <p className="mt-3 text-muted-foreground">{p.description}</p>
              <div className="mt-5">
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest">My Role</p>
                <ul className="space-y-1.5 text-sm text-foreground/75">
                  {p.role.map((r) =>
                <li key={r} className="flex gap-2">
                      <span className="text-pink-deep" aria-hidden>—</span>
                      {r}
                    </li>
                )}
                </ul>
              </div>
              <div className="mt-auto flex flex-wrap gap-2 pt-6">
                {p.tech.map((t) =>
              <Tag key={t}>{t}</Tag>
              )}
              </div>
            </div>
          </article>
        )}
      </div>
    </section>);

}