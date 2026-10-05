import { TRAINING } from "../../data/portfolio";
import { SectionHeading } from "../SectionHeading";
import { Tag } from "../Tag";

export function Training() {
  return (
    <section id="training" className="bg-muted py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="04 — Learning" title="Training & Certificates" />
        <ol className="relative space-y-6 border-l border-border pl-6 md:pl-10">
          {TRAINING.map((t) => {
            const ongoing = t.status === "Ongoing";
            return (
              <li key={t.title} className="relative">
                <span
                  className={`absolute -left-[31px] top-8 h-3 w-3 rounded-full ring-4 ring-muted md:-left-[47px] ${ongoing ? "bg-pink-deep" : "bg-ink"}`}
                  aria-hidden />
                
                <article className="rounded-3xl border border-border bg-card p-7">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="min-w-0">
                      <h3 className="font-display text-xl md:text-2xl">{t.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {t.org}
                        {t.year && ` | ${t.year}`}
                      </p>
                    </div>
                    <span
                      className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${
                      ongoing ? "bg-pink text-accent-foreground" : "bg-primary text-primary-foreground"}`
                      }>
                      
                      {t.status}
                    </span>
                  </div>
                  <p className="mt-4 text-foreground/75">{t.description}</p>
                  {t.focus.length > 0 &&
                  <div className="mt-5 flex flex-wrap gap-2">
                      {t.focus.map((f) =>
                    <Tag key={f}>{f}</Tag>
                    )}
                    </div>
                  }
                </article>
              </li>);

          })}
        </ol>
      </div>
    </section>);

}