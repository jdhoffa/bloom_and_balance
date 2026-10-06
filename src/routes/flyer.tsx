import { createFileRoute } from "@tanstack/react-router";
import { QRCodeSVG } from "qrcode.react";
import { useEffect } from "react";

const SITE_URL = "https://bloom-balance-wellness.com";

export const Route = createFileRoute("/flyer")({
  head: () => ({
    meta: [{ title: "Bloom & Balance — Flyer" }, { name: "robots", content: "noindex" }],
  }),
  component: Flyer,
});

function Accent({ children }: { children: React.ReactNode }) {
  return <span className="font-medium text-celadon">{children}</span>;
}

function Flyer() {
  useEffect(() => {
    const prev = document.documentElement.lang;
    document.documentElement.lang = "de";
    return () => {
      document.documentElement.lang = prev;
    };
  }, []);

  return (
    <div className="flyer-screen flex min-h-screen items-start justify-center bg-neutral-200 py-10 print:bg-white print:py-0">
      <article
        className="flyer-page relative flex flex-col overflow-hidden bg-cream text-taupe shadow-[0_10px_40px_rgba(0,0,0,0.15)] print:shadow-none"
        style={{ width: "210mm", height: "297mm", padding: "22mm 20mm" }}
      >
        <header className="grid grid-cols-[1fr_1fr] items-center gap-6">
          <div className="flex flex-col items-center text-center">
            <h1 className="font-display text-[88px] leading-[0.95] tracking-[0.02em] text-celadon">
              <span className="block">Bloom &amp;</span>
              <span className="block">Balance</span>
            </h1>
            <p className="mt-7 text-[11px] font-semibold uppercase tracking-[0.4em] text-taupe/70">
              Freiburg
            </p>
          </div>

          <div className="aspect-square overflow-hidden rounded-2xl">
            <img
              src="/angie.png"
              alt="Angie, Wellness-Massagetherapeutin"
              className="h-full w-full object-cover object-[50%_28%]"
            />
          </div>
        </header>

        <section className="mt-16 space-y-7 font-serif text-[18px] leading-[1.55] text-taupe">
          <p>
            Hallo, ich bin Angie – Wellness-Massagetherapeutin. Ich arbeite hier an ausgewählten
            Donnerstagen und Samstagen und biete spezielle Bodywork-Sitzungen an, bei denen{" "}
            <Accent>Körperhaltung</Accent>, <Accent>Beweglichkeit</Accent>, <Accent>Atmung</Accent>{" "}
            und <Accent>Entspannung</Accent> im Mittelpunkt stehen.
          </p>

          <p>
            Außerdem biete ich <Accent>Buccal und Kobido Face Lift Massage</Accent> an, die dabei
            unterstützen kann, aufgestaute emotionale Anspannung und Stress im Gesicht zu lösen.
          </p>

          <p>
            Scannen Sie einfach den QR-Code, um mehr über mich und meine Arbeitsweise zu erfahren
            und einen Termin zu vereinbaren.
          </p>
        </section>

        <footer className="mt-auto flex items-end justify-between gap-6">
          <div className="font-serif text-[14px] leading-snug text-taupe/80">
            <p className="font-semibold text-taupe">Hamsa Studio</p>
            <p>Hildastraße 17</p>
            <p>79102 Freiburg</p>
            <p className="mt-2 text-celadon">bloom-balance-wellness.com</p>
          </div>

          <div className="rounded-xl bg-white p-2 shadow-sm">
            <QRCodeSVG value={SITE_URL} size={140} bgColor="#ffffff" fgColor="#443627" level="M" />
          </div>
        </footer>
      </article>
    </div>
  );
}
