import { PortraitFrame } from "../PortraitFrame";
import { SectionHeading } from "../SectionHeading";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading eyebrow="01 — About" title="About Me" />
      <div className="grid gap-12 md:grid-cols-[1fr_1.5fr]">
        <PortraitFrame badge="IT ’26" badgeSide="right" className="mx-auto self-start md:mx-0" />
        <div className="space-y-6 text-lg leading-relaxed text-foreground/80">
          <p className="font-display text-2xl leading-snug text-foreground md:text-3xl">
            I’m an Information Technology student passionate about building modern and user-friendly digital experiences.
          </p>
          <p>I have experience working on Front-End and UI/UX projects using technologies such as HTML, CSS, JavaScript, React, Flutter, and Figma.</p>
          <p>Through my academic projects, training, and team-based work, I’ve developed strong problem-solving, teamwork, attention to detail, and design skills.</p>
          <p>I’m continuously improving my Front-End development skills and exploring better ways to combine functionality with intuitive user experiences.</p>
        </div>
      </div>
    </section>);

}