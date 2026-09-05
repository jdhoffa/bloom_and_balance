import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, ChevronDown, Instagram, Mail } from "lucide-react";
import { useState } from "react";

import { BookButton } from "@/components/BookButton";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import {
  aftercareDisclaimer,
  babySession,
  contact,
  faqs,
  services,
  steps,
} from "@/data/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    links: [{ rel: "canonical", href: "https://bloom-balance-wellness.com/" }],
  }),
  component: Index,
});

function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[calc(100vh-72px)] min-h-[calc(100svh-72px)] items-center justify-center px-5 py-16"
    >
      <div className="mx-auto flex max-w-[1160px] flex-col items-center gap-10 text-center">
        <div>
          <h1 className="font-display text-[clamp(3.5rem,11vw,7rem)] leading-[0.95] tracking-[0.02em] text-celadon">
            <span className="block">Bloom &amp;</span>
            <span className="block">Balance</span>
          </h1>
          <p className="mt-7 text-[0.9rem] font-medium uppercase tracking-[0.4em] text-taupe/70">
            Freiburg
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <BookButton />
          <a
            href="#services"
            className="inline-flex items-center justify-center rounded-xl border-2 border-celadon bg-background/60 px-6 py-3 text-base font-medium text-foreground backdrop-blur transition hover:bg-celadon/20"
          >
            View services
          </a>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-6 flex justify-center">
        <a
          href="#meet-angie"
          aria-label="Scroll to Meet Angie"
          className="scroll-hint pointer-events-auto flex flex-col items-center gap-1.5 text-taupe/60 transition-colors hover:text-taupe"
        >
          <span className="pl-[0.3em] text-[0.7rem] font-medium uppercase tracking-[0.3em]">
            Meet Angie
          </span>
          <ChevronDown className="size-5" aria-hidden />
        </a>
      </div>
    </section>
  );
}

function MeetAngie() {
  return (
    <section id="meet-angie" className="section-pad bg-cream">
      <div className="mx-auto grid max-w-[1160px] gap-12 px-5 md:grid-cols-[1fr_1.25fr] md:items-center">
        <div className="relative mx-auto w-full max-w-sm">
          <div
            aria-hidden
            className="absolute -inset-3 rotate-3 rounded-[2rem] bg-peach/25"
          />
          <div
            aria-hidden
            className="absolute -inset-2 -rotate-2 rounded-[1.75rem] bg-lavender/45"
          />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] shadow-[0_8px_30px_rgba(0,0,0,0.10)]">
            <img
              src="/angie.png"
              alt="Angie, massage therapist at Bloom and Balance in Freiburg"
              loading="lazy"
              className="h-full w-full origin-center scale-[1.15] object-cover object-[50%_30%]"
            />
          </div>
        </div>

        <div>
          <h2 className="text-3xl md:text-4xl">Meet Angie</h2>
          <p className="mt-5 text-foreground/80">
            Born in Moscow, I moved to England at a young age and went on to study at the British
            College of Osteopathic Medicine in London where in 2019 I was awarded a Master of
            Osteopathy degree with commendation. The following year I also completed a
            specialisation course in paediatrics at the Osteopathic Centre for Children in London.
          </p>
          <p className="mt-4 text-foreground/80">
            In 2021, I moved to Berlin and continued working as a manual therapist, initially in a
            family practice and later in a private orthopaedic clinic. During this period, I
            developed a strong interest in preventative treatments, as well as buccal techniques
            that help release the stress and emotional tension we often carry in our faces.
          </p>
          <p className="mt-4 text-foreground/80">
            After six years, I felt ready to create my own space — a place where I could bring
            together my knowledge, experience, and passion for holistic wellbeing and natural
            beauty. That&apos;s where the idea for Bloom &amp; Balance began to form.
          </p>
        </div>
      </div>
    </section>
  );
}

function Philosophy() {
  return (
    <section id="philosophy" className="section-pad bg-lavender/50">
      <div className="mx-auto max-w-[820px] px-5 text-center">
        <p className="text-[0.8rem] font-medium uppercase tracking-[0.4em] text-peach">
          Philosophy
        </p>
        <h2 className="mt-4 text-3xl md:text-4xl">
          <span className="block">Harmony of Body and Mind</span>
          <span className="mt-1 block">Beauty Inside and Out</span>
        </h2>
        <p className="mt-8 text-foreground/80">
          I offer a holistic approach to wellbeing and natural beauty, creating space for
          relaxation, self-care, and mindful rejuvenation.
        </p>
        <div className="mx-auto mt-6 max-w-lg text-left">
          <p className="text-foreground/80">
            My unique bodywork approach comes from combining:
          </p>
          <ul className="mt-5 space-y-2.5 text-foreground/85">
            {[
              "My background in osteopathy",
              "Lymphatic and fascial massage",
              "Body awareness techniques to recognise your stress patterns",
              "Gentle mobilisations and stretches to promote deep relaxation and restore vitality",
              "Buccal massage",
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

  return (
    <section id="expect" className="section-pad bg-cream">
      <div className="mx-auto max-w-[1000px] px-5">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="max-w-xl text-3xl md:text-4xl">What to expect from your session</h2>
          <div
            role="tablist"
            aria-label="Session type"
            className="inline-flex self-start rounded-full border border-border bg-background/70 p-1 shadow-sm"
          >
            {(
              [
                { key: "adult", label: "Adults" },
                { key: "baby", label: "Babies" },
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
            <ol className="mt-10 grid gap-5 sm:grid-cols-2">
              {steps.map((s, i) => (
                <li key={s.title} className="card-soft p-7">
                  <span className="accent-text text-lg">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-1 text-xl">{s.title}</h3>
                  <p className="mt-2 text-foreground/80">{s.body}</p>
                </li>
              ))}
            </ol>
            <p className="mt-6 text-base text-foreground/85">
              <span className="font-medium text-foreground">Disclaimer · </span>
              {aftercareDisclaimer}
            </p>
          </>
        ) : (
          <div className="mt-10">
            <div className="card-soft p-7 sm:p-9">
              <h3 className="text-xl">{babySession.tagline}</h3>
              <div className="mt-5 space-y-4 text-foreground/80">
                {babySession.paragraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
            <p className="mt-6 text-base text-foreground/85">
              <span className="font-medium text-foreground">Disclaimer · </span>
              {babySession.disclaimer}
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
          <h2 className="text-3xl md:text-4xl">Services</h2>
          <p className="mt-4 text-foreground/75">
            Your first visit includes a wellness consultation followed by a bespoke whole body
            session.
          </p>
          <p className="mt-3 text-foreground/75">
            Follow-up sessions allow us to focus on specific areas of the body therefore less
            time is sufficient.
          </p>
        </div>

        <div className="mt-6 rounded-xl border border-peach/50 bg-background p-4 sm:p-5">
          <span className="inline-flex items-center gap-2 rounded-full bg-peach/25 px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wider text-peach">
            Current offer
          </span>
          <div className="mt-2.5 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
            <span className="text-sm font-medium">Intro session with a 50% discount</span>
            <span className="whitespace-nowrap font-serif text-base">
              75 € <span className="text-muted-foreground">· 90 min</span>
            </span>
          </div>
          <p className="mt-2.5 text-xs text-foreground/75">
            Use code{" "}
            <span className="font-semibold tracking-wide text-foreground">FIRSTBLOOM</span>{" "}
            at checkout.
          </p>
        </div>

        <ul className="mt-10 divide-y divide-border border-y border-border">
          {services.map((s) => (
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
                    aria-label={`Book ${s.name}, ${opt.duration}, ${opt.price}`}
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
        <h2 className="text-3xl md:text-4xl">Frequently asked questions</h2>
        <div className="mt-8 border-t border-border">
          {faqs.map((f) => (
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
                {f.a.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
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
        <h2 className="text-3xl md:text-4xl">Ready to book?</h2>
        <p className="mt-3 text-foreground/80">
          Sessions offered in{" "}
          <strong className="font-semibold text-foreground">
            English, German, and Russian
          </strong>
          .
        </p>
        <div className="mt-7 flex justify-center">
          <BookButton />
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

function Index() {
  return (
    <>
      <Hero />
      <MeetAngie />
      <Philosophy />
      <Expect />
      <Services />
      <Faq />
      <Booking />
    </>
  );
}
