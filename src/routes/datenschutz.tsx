import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { datenschutz, type LegalBlock } from "@/data/legal";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title: "Datenschutz — Bloom & Balance" },
      {
        name: "description",
        content: "Datenschutzerklärung for Bloom & Balance, Freiburg im Breisgau.",
      },
      { name: "robots", content: "index,follow" },
      { property: "og:title", content: "Datenschutz — Bloom & Balance" },
      { property: "og:url", content: "https://bloom-balance-wellness.com/datenschutz" },
    ],
    links: [
      { rel: "canonical", href: "https://bloom-balance-wellness.com/datenschutz" },
    ],
  }),
  component: Datenschutz,
});

type Lang = "de" | "en";

function Block({ block }: { block: LegalBlock }) {
  switch (block.type) {
    case "p":
      return <p>{block.text}</p>;
    case "list":
      return (
        <ul className="list-disc space-y-1 pl-6">
          {block.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );
    case "h":
      return <h3 className="pt-2 text-base font-semibold text-foreground">{block.text}</h3>;
    case "address":
      return (
        <address className="not-italic">
          {block.lines.map((line) => (
            <div key={line}>{line}</div>
          ))}
        </address>
      );
    case "link":
      return (
        <div>
          <p>{block.label}</p>
          <a
            href={block.url}
            target="_blank"
            rel="noopener noreferrer"
            className="break-all underline underline-offset-4"
          >
            {block.url}
          </a>
        </div>
      );
  }
}

function Datenschutz() {
  const [lang, setLang] = useState<Lang>("de");
  const content = datenschutz[lang];

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
          <p className="mt-2 text-sm text-foreground/60">{content.lastUpdated}</p>
          {content.intro.length > 0 && (
            <div className="mt-6 space-y-3 text-foreground/85">
              {content.intro.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          )}
          <div className="mt-8 space-y-10">
            {content.sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-lg font-semibold">{section.title}</h2>
                <div className="mt-3 space-y-3 text-foreground/85">
                  {section.blocks.map((block, i) => (
                    <Block key={i} block={block} />
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
