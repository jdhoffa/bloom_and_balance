import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { impressum } from "@/data/legal";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum — Bloom & Balance" },
      { name: "description", content: "Impressum for Bloom & Balance, Freiburg im Breisgau." },
      { name: "robots", content: "index,follow" },
      { property: "og:title", content: "Impressum — Bloom & Balance" },
      { property: "og:url", content: "https://bloom-balance-wellness.com/impressum" },
    ],
    links: [
      { rel: "canonical", href: "https://bloom-balance-wellness.com/impressum" },
    ],
  }),
  component: Impressum,
});

type Lang = "de" | "en";

function Impressum() {
  const [lang, setLang] = useState<Lang>("de");
  const content = impressum[lang];

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
          {content.intro.length > 0 && (
            <div className="mt-6 space-y-3 text-foreground/85">
              {content.intro.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          )}
          <p className="mt-6 font-medium">{content.tmgHeader}</p>
          <address className="mt-2 not-italic text-foreground/85">
            {impressum.entity.map((line) => (
              <div key={line}>{line}</div>
            ))}
          </address>
          <p className="mt-6 font-medium">{content.contactLabel}</p>
          <p className="mt-1 text-foreground/85">
            {content.emailLabel}{" "}
            <a
              href={`mailto:${impressum.email}`}
              className="underline underline-offset-4"
            >
              {impressum.email}
            </a>
          </p>

          <h2 className="mt-10 text-xl font-semibold">{content.copyright.title}</h2>
          <div className="mt-3 space-y-3 text-foreground/85">
            {content.copyright.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
