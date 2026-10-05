import { SKILLS } from "../../data/portfolio";
import { SectionHeading } from "../SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="bg-ink py-24 text-primary-foreground">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="02 — Toolkit" title="Skills" />
        <div className="grid gap-5 sm:grid-cols-2">
          {SKILLS.map((s) =>
          <article key={s.title} className="rounded-3xl border border-primary-foreground/10 p-8">
              <div className="mb-6 flex items-center justify-between gap-4">
                <h3 className="font-display text-2xl">{s.title}</h3>
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-pink font-mono text-sm text-ink" aria-hidden>
                  {s.icon}
                </span>
              </div>
              <ul className="flex flex-wrap gap-2">
                {s.items.map((i) =>
              <li key={i} className="rounded-full border border-primary-foreground/15 px-3 py-1.5 text-sm text-primary-foreground/80">
                    {i}
                  </li>
              )}
              </ul>
            </article>
          )}
        </div>
      </div>
    </section>);

}