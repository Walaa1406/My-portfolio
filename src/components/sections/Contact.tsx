import type { ReactNode } from "react";
import { EMAIL, LINKEDIN_LABEL, LINKEDIN_URL } from "../../data/portfolio";
import { btnOutline, btnPrimary } from "../../utils/buttonStyles";

export function Contact() {
  const details: [string, ReactNode][] = [
  ["Email", <a href={`mailto:${EMAIL}`} className="break-all hover:underline">{EMAIL}</a>],
  ["LinkedIn", <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="break-all hover:underline">{LINKEDIN_LABEL}</a>],
  ["Location", "Minya, Egypt"]];


  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-blush p-8 md:p-16">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-pink-deep">05 — Say hello</p>
        <h2 className="font-display text-4xl font-medium tracking-tight text-ink md:text-6xl">Contact Me</h2>
        <p className="mt-6 max-w-xl text-lg text-ink/75">
          Have a project idea, collaboration opportunity, or a Front-End/UI/UX role in mind?
          <br />
          I’d love to hear from you.
        </p>
        <dl className="mt-10 grid gap-6 sm:grid-cols-3">
          {details.map(([label, value]) =>
          <div key={label} className="min-w-0">
              <dt className="text-xs font-semibold uppercase tracking-widest text-ink/60">{label}</dt>
              <dd className="mt-1 font-medium text-ink">{value}</dd>
            </div>
          )}
        </dl>
        <div className="mt-10 flex flex-wrap gap-3">
          <a href={`mailto:${EMAIL}`} className={btnPrimary}>Send Me an Email</a>
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className={btnOutline}>LinkedIn Profile ↗</a>
        </div>
      </div>
    </section>);

}