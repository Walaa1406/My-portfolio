import { EMAIL, LINKEDIN_URL, NAV } from "../../data/portfolio";

export function Footer() {
  return (
    <footer className="bg-ink text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl">
            Walaa Mahmoud<span className="text-pink">.</span>
          </p>
          <p className="mt-2 text-sm text-primary-foreground/70">Front-End Developer | UI/UX Designer</p>
          <p className="mt-4 text-sm italic text-primary-foreground/60">Building clean, responsive, and user-friendly digital experiences.</p>
        </div>
        <nav aria-label="Footer">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-pink">Quick Links</p>
          <ul className="grid grid-cols-2 gap-2 text-sm">
            {NAV.map((n) =>
            <li key={n.id}>
                <a href={`#${n.id}`} className="text-primary-foreground/70 transition-colors hover:text-primary-foreground">{n.label}</a>
              </li>
            )}
          </ul>
        </nav>
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-pink">Connect</p>
          <ul className="space-y-2 text-sm">
            <li><a href={`mailto:${EMAIL}`} className="text-primary-foreground/70 transition-colors hover:text-primary-foreground">Email</a></li>
            <li><a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 transition-colors hover:text-primary-foreground">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 py-6 text-center text-xs text-primary-foreground/60">
        © 2026 Walaa Mahmoud. All rights reserved.
      </div>
    </footer>);

}