import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { agb } from "@/data/legal";

export const Route = createFileRoute("/agb")({
  head: () => ({
    meta: [
      { title: "AGB — Bloom & Balance" },
      {
        name: "description",
        content:
          "Allgemeine Geschäftsbedingungen (AGB) for Bloom & Balance, Freiburg im Breisgau.",
      },
      { name: "robots", content: "index,follow" },
      { property: "og:title", content: "AGB — Bloom & Balance" },
      { property: "og:url", content: "https://bloom-balance-wellness.com/agb" },
    ],
    links: [
      { rel: "canonical", href: "https://bloom-balance-wellness.com/agb" },
    ],
  }),
  component: Agb,
});

type Lang = "de" | "en";

function Agb() {
  const [lang, setLang] = useState<Lang>("de");
  const content = agb[lang];

  return (
    <section className="section-pad">
      <div className="mx-auto max-w-[820px] px-5">
        <div
          role="group"
          aria-label="Sprache / Language"
          className="mb-8 inline-flex rounded-full border border-border bg-background p-1"
        >
          {(
            [
              { code: "de", label: "Deutsch" },
              { code: "en", label: "English" },
            ] as const
          ).map((opt) => {
            const active = lang === opt.code;
            return (
              <button
                key={opt.code}
                type="button"
                onClick={() => setLang(opt.code)}
                aria-pressed={active}
                className={
                  "rounded-full px-4 py-1.5 text-sm font-medium transition " +
                  (active
                    ? "bg-celadon/30 text-foreground"
                    : "text-foreground/60 hover:text-foreground")
                }
              >
                {opt.label}
              </button>
            );
          })}
        </div>
        <div lang={lang}>
          <h1 className="text-3xl md:text-4xl">{content.title}</h1>
          <div className="mt-6 space-y-3 text-foreground/85">
            {content.intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="mt-8 space-y-8">
            {content.clauses.map((c) => (
              <div key={c.title}>
                <h2 className="text-lg font-semibold">{c.title}</h2>
                <div className="mt-3 space-y-2 text-foreground/85">
                  {c.items.map((item, i) => (
                    <p key={i}>{item}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
