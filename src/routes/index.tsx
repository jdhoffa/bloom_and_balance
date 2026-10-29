import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, ChevronDown, Instagram, Mail } from "lucide-react";
import { useState } from "react";

import { BookButton } from "@/components/BookButton";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import {
  aftercareDisclaimerDE,
  babySessionDE,
  contact,
  faqsDE,
  servicesDE,
  stepsDE,
} from "@/data/site";
import { cn } from "@/lib/utils";

const SITE_URL = "https://bloom-balance-wellness.com";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bloom & Balance — Massage & Wellness in Freiburg" },
      {
        name: "description",
        content:
          "Ganzheitliche Körpertherapie, Buccal-, Kobido- und Babymassage mit Angie in Freiburg.",
      },
      { property: "og:title", content: "Bloom & Balance — Massage & Wellness in Freiburg" },
      {
        property: "og:description",
        content:
          "Ganzheitliche Körpertherapie, Buccal-, Kobido- und Babymassage mit Angie in Freiburg.",
      },
      { property: "og:url", content: `${SITE_URL}/` },
      { property: "og:locale", content: "de_DE" },
      { property: "og:locale:alternate", content: "en_US" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/` }],
  }),
  component: DeIndex,
});

function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[calc(100vh-128px)] min-h-[calc(100svh-128px)] items-center justify-center px-5 py-16"
    >
      <div className="mx-auto flex max-w-[1160px] flex-col items-center gap-10 text-center">
        <div>
          <h1 className="font-display text-[clamp(4.5rem,13vw,7rem)] leading-[0.95] tracking-[0.02em] text-celadon">
            <span className="block">Bloom &amp;</span>
            <span className="block">Balance</span>
          </h1>
          <p className="mt-7 text-[0.9rem] font-medium uppercase tracking-[0.4em] text-taupe/70">
            Freiburg
          </p>
        </div>
        <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-4">
          <BookButton size="sm" className="sm:px-6 sm:py-3 sm:text-base">
            Termin buchen
          </BookButton>
          <a
            href="#services"
            className="inline-flex items-center justify-center rounded-xl border-2 border-celadon bg-background/60 px-4 py-2 text-sm font-medium text-foreground backdrop-blur transition hover:bg-celadon/20 sm:px-6 sm:py-3 sm:text-base"
          >
            Behandlungen ansehen
          </a>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-6 flex justify-center">
        <a
          href="#meet-angie"
          aria-label="Scroll zu über mich"
          className="scroll-hint pointer-events-auto flex flex-col items-center gap-1.5 text-taupe/60 transition-colors hover:text-taupe"
        >
          <span className="pl-[0.3em] text-[0.7rem] font-medium uppercase tracking-[0.3em]">
            über mich
          </span>
          <ChevronDown className="size-5" aria-hidden />
        </a>
      </div>
    </section>
  );
}

function MeetAngie() {
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <section id="meet-angie" className="section-pad bg-cream">
      <div className="mx-auto grid max-w-[1160px] gap-8 px-5 md:grid-cols-[1fr_1.25fr] md:items-center md:gap-12">
        <div className="relative mx-auto w-full max-w-[240px] md:max-w-sm">
          <div aria-hidden className="absolute -inset-3 rotate-3 rounded-[2rem] bg-peach/25" />
          <div aria-hidden className="absolute -inset-2 -rotate-2 rounded-[1.75rem] bg-lavender/45" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] shadow-[0_8px_30px_rgba(0,0,0,0.10)]">
            <img
              src="/angie.png"
              alt="Angie, Wellness-Massagetherapeutin bei Bloom and Balance in Freiburg"
              loading="lazy"
              className="h-full w-full origin-center scale-[1.15] object-cover object-[50%_30%]"
            />
          </div>
        </div>

        <div>
          <h2 className="text-3xl md:text-4xl">Hallo, ich bin Angie.</h2>
          <p className="mt-5 text-foreground/80">
            Ich wurde in Moskau geboren, zog schon in jungen Jahren nach England und studierte
            anschließend am British College of Osteopathic Medicine in London, wo ich 2019 meinen
            Master of Osteopathy mit Auszeichnung abschloss. Im darauffolgenden Jahr absolvierte
            ich zudem einen Spezialisierungskurs in Pädiatrie am Osteopathic Centre for Children
            in London.
          </p>
          <div
            id="about-angie-more-de"
            className={cn("md:!block", aboutOpen ? "block" : "hidden")}
          >
            <p className="mt-4 text-foreground/80">
              Im Jahr 2021 zog ich nach Berlin und setzte meine Tätigkeit als manuelle Therapeutin
              fort, zunächst in einer Familienpraxis und später in einer privaten orthopädischen
              Klinik. Während dieser Zeit entwickelte ich ein starkes Interesse an präventiven und
              ästhetischen Behandlungen und absolvierte Fortbildungen in Kiefer- und
              Gesichtstechniken.
            </p>
            <p className="mt-4 text-foreground/80">
              Nach sechs Jahren fühlte ich mich bereit, meinen eigenen Raum zu schaffen – einen
              Ort, an dem ich mein Wissen, meine Erfahrung und meine Leidenschaft für ganzheitliches
              Wohlbefinden und natürliche Schönheit vereinen konnte. So entstand die Idee für
              Bloom &amp; Balance.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setAboutOpen((v) => !v)}
            aria-expanded={aboutOpen}
            aria-controls="about-angie-more-de"
            className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-celadon underline-offset-4 hover:underline md:hidden"
          >
            {aboutOpen ? "Weniger lesen" : "Mehr lesen"}
            <ChevronDown
              aria-hidden
              className={cn("size-4 transition-transform", aboutOpen && "rotate-180")}
            />
          </button>
        </div>
      </div>
    </section>
  );
}

function Philosophie() {
  return (
    <section id="philosophy" className="section-pad bg-lavender/50">
      <div className="mx-auto max-w-[820px] px-5 text-center">
        <p className="text-[0.8rem] font-medium uppercase tracking-[0.4em] text-peach">
          Philosophie
        </p>
        <h2 className="mt-4 text-3xl md:text-4xl">
          <span className="block">Harmonie von Körper und Geist</span>
          <span className="mt-1 block">Schönheit von innen und außen</span>
        </h2>
        <p className="mt-8 text-foreground/80">
          Ich biete einen ganzheitlichen Ansatz für Wohlbefinden und natürliche Schönheit und
          schaffe Raum für Entspannung, Selfcare und achtsame Regeneration.
        </p>
        <div className="mx-auto mt-6 max-w-lg text-left">
          <p className="text-foreground/80">
            Mein einzigartiger Ansatz in der Körperarbeit basiert auf einer Kombination aus:
          </p>
          <ul className="mt-5 space-y-2.5 text-foreground/85">
            {[
              "meinem Hintergrund in der Osteopathie",
              "Kobido- und Bukkalmassage",
              "Lymph- und Faszienmassage",
              "Techniken zur Körperwahrnehmung, um Ihre Stressmuster zu erkennen",
              "sanften Mobilisierungen und Dehnungen, um tiefe Entspannung zu fördern und die Vitalität wiederherzustellen",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span
                  aria-hidden
                  className="mt-2.5 inline-block size-1.5 shrink-0 rounded-full bg-celadon"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Expect() {
  const [mode, setMode] = useState<"adult" | "baby">("adult");
  const [openStep, setOpenStep] = useState<number | null>(null);

  return (
    <section id="expect" className="section-pad bg-cream">
      <div className="mx-auto max-w-[1000px] px-5">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="max-w-xl text-3xl md:text-4xl">Was Sie von Ihrer Sitzung erwarten können</h2>
          <div
            role="tablist"
            aria-label="Sitzungsart"
            className="inline-flex self-start rounded-full border border-border bg-background/70 p-1 shadow-sm"
          >
            {(
              [
                { key: "adult", label: "Erwachsene" },
                { key: "baby", label: "Babys" },
              ] as const
            ).map((opt) => (
              <button
                key={opt.key}
                type="button"
                role="tab"
                aria-selected={mode === opt.key}
                onClick={() => setMode(opt.key)}
                className={cn(
                  "rounded-full px-5 py-2 text-sm font-medium transition",
                  mode === opt.key
                    ? "bg-celadon/30 text-foreground shadow-inner"
                    : "text-foreground/60 hover:text-foreground",
                )}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {mode === "adult" ? (
          <>
            <ol className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-5">
              {stepsDE.map((s, i) => {
                const isOpen = openStep === i;
                return (
                  <li key={s.title} className="card-soft p-4 sm:p-7">
                    <button
                      type="button"
                      onClick={() => setOpenStep(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={`step-body-de-${i}`}
                      className="flex w-full items-center justify-between gap-3 text-left sm:pointer-events-none"
                    >
                      <div className="min-w-0">
                        <span className="accent-text text-sm sm:text-lg">
                          {i + 1}
                        </span>
                        <h3 className="mt-0.5 text-base sm:mt-1 sm:text-xl">{s.title}</h3>
                      </div>
                      <ChevronDown
                        aria-hidden
                        className={cn(
                          "size-5 shrink-0 text-celadon transition-transform sm:hidden",
                          isOpen && "rotate-180",
                        )}
                      />
                    </button>
                    <p
                      id={`step-body-de-${i}`}
                      className={cn(
                        "text-foreground/80 sm:!mt-2 sm:!block",
                        isOpen ? "mt-3 block" : "hidden",
                      )}
                    >
                      {s.body}
                    </p>
                  </li>
                );
              })}
            </ol>
            <p className="mt-6 text-base text-foreground/85">
              <span className="font-medium text-foreground">Haftungsausschluss · </span>
              {aftercareDisclaimerDE}
            </p>
          </>
        ) : (
          <div className="mt-10">
            <div className="card-soft p-7 sm:p-9">
              <h3 className="text-xl">{babySessionDE.tagline}</h3>
              <div className="mt-5 space-y-4 text-foreground/80">
                {babySessionDE.paragraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
            <p className="mt-6 text-base text-foreground/85">
              <span className="font-medium text-foreground">Haftungsausschluss · </span>
              {babySessionDE.disclaimer}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="section-pad bg-peach/20">
      <div className="mx-auto max-w-[900px] px-5">
        <div>
          <h2 className="text-3xl md:text-4xl">Behandlungen</h2>
          <p className="mt-4 text-sm text-foreground/75">
            Ihr erster Besuch umfasst ein Beratungsgespräch zu Ihrem Wohlbefinden, gefolgt von
            einer individuell auf Sie abgestimmten Ganzkörperbehandlung.
          </p>
          <p className="mt-3 text-sm text-foreground/75">
            Bei Folgeterminen können wir uns gezielt auf bestimmte Körperbereiche konzentrieren,
            weshalb ein geringerer Zeitaufwand ausreicht.
          </p>
        </div>

        <div className="mt-6 rounded-xl border border-peach/50 bg-background p-4 sm:p-5">
          <span className="inline-flex items-center gap-2 rounded-full bg-peach/25 px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wider text-peach">
            Aktuelles Angebot
          </span>
          <div className="mt-2.5 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
            <span className="text-sm font-medium">Kennenlern-Sitzung mit 50 % Rabatt</span>
            <span className="whitespace-nowrap font-serif text-base">
              75 € <span className="text-muted-foreground">· 90 Min.</span>
            </span>
          </div>
          <p className="mt-2.5 text-xs text-foreground/75">
            Verwenden Sie den Code{" "}
            <span className="font-semibold tracking-wide text-foreground">FIRSTBLOOM</span>{" "}
            beim Online-Bezahlvorgang.
          </p>
        </div>

        <ul className="mt-10 flex flex-col gap-4 sm:hidden">
          {servicesDE.map((s) => (
            <li
              key={s.name}
              className="overflow-hidden rounded-2xl border border-border bg-background shadow-sm"
            >
              <h3 className="border-b border-border/60 px-5 pb-3 pt-4 text-base font-medium leading-snug">
                {s.name}
              </h3>
              <ul className="divide-y divide-border/60">
                {s.options.map((opt) => (
                  <li key={opt.href}>
                    <a
                      href={opt.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${s.name} buchen, ${opt.duration}, ${opt.price} — öffnet Buchung in neuem Tab`}
                      className="flex items-center justify-between gap-3 px-5 py-3.5 text-[15px] transition active:bg-peach/15"
                    >
                      <span className="flex items-baseline gap-2">
                        <span className="font-semibold text-foreground">{opt.price}</span>
                        <span className="text-foreground/40">·</span>
                        <span className="text-foreground/75">{opt.duration}</span>
                      </span>
                      <ArrowUpRight aria-hidden className="size-4 text-peach" />
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <ul className="mt-10 hidden divide-y divide-border border-y border-border sm:block">
          {servicesDE.map((s) => (
            <li
              key={s.name}
              className="flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
            >
              <p className="font-medium">{s.name}</p>
              <div className="flex flex-wrap gap-2 sm:shrink-0 sm:justify-end">
                {s.options.map((opt) => (
                  <a
                    key={opt.href}
                    href={opt.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${s.name} buchen, ${opt.duration}, ${opt.price}`}
                    className="group inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm transition hover:bg-peach/15 focus-visible:bg-peach/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                  >
                    <span className="text-foreground/85">{opt.duration}</span>
                    <span className="text-foreground/40">·</span>
                    <span className="font-semibold">{opt.price}</span>
                    <ArrowUpRight
                      aria-hidden
                      className="size-3.5 text-peach/60 transition group-hover:text-peach"
                    />
                  </a>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section id="faq" className="section-pad bg-lavender/40">
      <div className="mx-auto max-w-[760px] px-5">
        <h2 className="text-3xl md:text-4xl">Häufig gestellte Fragen</h2>
        <div className="mt-8 border-t border-border">
          {faqsDE.map((f) => (
            <details key={f.q} className="group border-b border-border py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
                {f.q}
                <svg
                  aria-hidden
                  viewBox="0 0 24 24"
                  className="size-5 shrink-0 text-celadon transition-transform group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </summary>
              <div className="mt-3 space-y-3 text-foreground/80">
                {f.a.map((item, i) =>
                  typeof item === "string" ? (
                    <p key={i}>{item}</p>
                  ) : (
                    <ul key={i} className="list-disc space-y-1 pl-5">
                      {item.items.map((li) => (
                        <li key={li}>{li}</li>
                      ))}
                    </ul>
                  ),
                )}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Booking() {
  return (
    <section id="booking" className="bg-celadon/25 py-16 md:py-20">
      <div className="mx-auto max-w-[720px] px-5 text-center">
        <h2 className="text-3xl md:text-4xl">Bereit für Ihren Termin?</h2>
        <p className="mt-3 text-foreground/80">
          Sitzungen werden angeboten auf
          <br />
          <strong className="font-semibold text-foreground">Englisch, Deutsch und Russisch</strong>
          .
        </p>
        <div className="mt-7 flex justify-center">
          <BookButton>Termin buchen</BookButton>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-2.5">
          <a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-4 py-2 text-sm font-medium transition hover:bg-background"
          >
            <Mail className="size-4" aria-hidden />
            {contact.email}
          </a>
          <a
            href={contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-4 py-2 text-sm font-medium transition hover:bg-background"
          >
            <WhatsAppIcon className="size-4 text-[#25D366]" />
            WhatsApp
          </a>
          <a
            href={contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-4 py-2 text-sm font-medium transition hover:bg-background"
          >
            <Instagram className="size-4" aria-hidden />
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
}

function DeIndex() {
  return (
    <>
      <Hero />
      <MeetAngie />
      <Philosophie />
      <Expect />
      <Services />
      <Faq />
      <Booking />
    </>
  );
}
