import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { BookButton } from "@/components/BookButton";
import { Wordmark } from "@/components/Wordmark";
import { navLinks } from "@/data/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [heroInView, setHeroInView] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const hero = document.getElementById("top");
    if (!hero) {
      // On non-home routes there's no hero — behave as if we're past it,
      // so the wordmark + book button stay visible.
      setHeroInView(false);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => setHeroInView(entry.isIntersecting),
      { rootMargin: "-72px 0px 0px 0px", threshold: 0 },
    );
    io.observe(hero);
    return () => io.disconnect();
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-background/90 backdrop-blur transition-shadow ${
        scrolled ? "shadow-[0_2px_12px_rgba(0,0,0,0.05)]" : ""
      }`}
    >
      <div className="mx-auto grid max-w-[1160px] grid-cols-[1fr_auto_1fr] items-center gap-6 px-5 py-3">
        <Link
          to="/"
          hash="top"
          aria-label="Bloom and Balance, Freiburg"
          className={`justify-self-start transition-[opacity,transform] duration-200 ease-out motion-reduce:transition-none ${
            heroInView
              ? "md:pointer-events-none md:-translate-y-1.5 md:opacity-0"
              : "md:pointer-events-auto md:translate-y-0 md:opacity-100"
          }`}
        >
          <Wordmark />
        </Link>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/80 transition hover:text-celadon"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center justify-end gap-2">
          <div
            className={`transition-opacity duration-200 ease-out motion-reduce:transition-none ${
              heroInView ? "pointer-events-none opacity-0" : "opacity-100"
            }`}
          >
            <BookButton size="sm">
              <span className="sm:hidden">Book</span>
              <span className="hidden sm:inline">Book Your Session</span>
            </BookButton>
          </div>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="rounded-lg border border-border px-3 py-2 text-sm font-medium lg:hidden"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>
      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-border bg-background px-5 pb-5 lg:hidden"
        >
          <ul className="flex flex-col">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border/60 py-3 text-base font-medium"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
