import { useEffect, useState } from "react";
import { NAV } from "../data/portfolio";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-[background-color,border-color] duration-200 ease-out ${
      scrolled ? "border-border bg-background/85 backdrop-blur-md" : "border-transparent bg-transparent"}`
      }>
      
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4" aria-label="Main">
        <a href="#home" className="font-display text-xl font-medium tracking-tight">
          Walaa Mahmoud<span className="text-pink-deep">.</span>
        </a>
        <ul className="hidden items-center gap-8 md:flex">
          {NAV.map((n) =>
          <li key={n.id}>
              <a href={`#${n.id}`} className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground">
                {n.label}
              </a>
            </li>
          )}
        </ul>
        <button
          className="grid h-10 w-10 place-items-center rounded-full border border-border md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}>
          
          <span className="relative block h-3 w-5">
            <span className={`absolute left-0 h-0.5 w-5 bg-foreground transition-transform duration-200 ${open ? "top-1.5 rotate-45" : "top-0"}`} />
            <span className={`absolute left-0 h-0.5 w-5 bg-foreground transition-transform duration-200 ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
          </span>
        </button>
      </nav>
      {open &&
      <ul className="border-t border-border bg-background px-6 py-4 md:hidden">
          {NAV.map((n) =>
        <li key={n.id}>
              <a href={`#${n.id}`} onClick={() => setOpen(false)} className="block py-3 font-display text-2xl">
                {n.label}
              </a>
            </li>
        )}
        </ul>
      }
    </header>);

}