import { PortraitFrame } from "../PortraitFrame";
import { btnOutline, btnPrimary } from "../../utils/buttonStyles";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 pb-24 pt-16 md:grid-cols-[1.4fr_1fr] md:items-center md:pt-28">
        <div>
          <p className="mb-6 inline-flex animate-rise items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium">
            <span className="h-1.5 w-1.5 rounded-full bg-pink-deep" /> Minya, Egypt
          </p>
          <h1 className="animate-rise font-display text-6xl font-medium leading-[0.95] tracking-tight [animation-delay:60ms] sm:text-7xl lg:text-8xl">
            Walaa <em className="text-pink-deep">Mahmoud</em>
          </h1>
          <p className="mt-6 animate-rise text-lg font-semibold [animation-delay:120ms]">Front-End Developer | UI/UX Designer</p>
          <p className="mt-4 max-w-xl animate-rise leading-relaxed text-muted-foreground [animation-delay:180ms]">
            I’m a fourth-year Information Technology student with a strong interest in Front-End Development and UI/UX Design. I enjoy turning ideas into clean, responsive, and user-friendly digital experiences.
          </p>
          <div className="mt-10 flex animate-rise flex-wrap gap-3 [animation-delay:240ms]">
            <a href="#projects" className={btnPrimary}>View My Work →</a>
            <a href="#contact" className={btnOutline}>Contact Me</a>
          </div>
        </div>
        <PortraitFrame badge="Code × Design" badgeSide="left" className="mx-auto animate-rise [animation-delay:150ms]" />
      </div>
    </section>);

}