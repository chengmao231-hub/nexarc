import { useI18n, type Key } from "@/lib/i18n";
import { Reveal, Section, SectionLabel } from "./ui";

const FLOW: Key[] = ["thesis.f1", "thesis.f2", "thesis.f3", "thesis.f4", "thesis.f5"];

const POINTS: { t: Key; d: Key }[] = [
  { t: "thesis.p1t", d: "thesis.p1d" },
  { t: "thesis.p2t", d: "thesis.p2d" },
  { t: "thesis.p3t", d: "thesis.p3d" },
  { t: "thesis.p4t", d: "thesis.p4d" },
];

export function Thesis() {
  const { t } = useI18n();

  return (
    <Section id="thesis">
      <Reveal>
        <SectionLabel>{t("thesis.label")}</SectionLabel>
        <h2 className="max-w-3xl text-[clamp(2rem,5vw,3.2rem)] font-black uppercase leading-[0.95]">
          {t("thesis.h1")} <span className="text-arc-bright glow-text">{t("thesis.h2")}</span>
        </h2>
      </Reveal>

      <Reveal i={1}>
        <div className="panel clip-hud mt-8 p-7 sm:p-10">
          <p className="text-[clamp(1.4rem,3.6vw,2.2rem)] font-black uppercase leading-tight">
            {t("thesis.big")}
          </p>
          <p className="mt-3 text-lg text-muted-foreground">
            {t("thesis.suba")}{" "}
            <span className="font-semibold text-arc-bright">{t("thesis.subb")}</span>
          </p>
        </div>
      </Reveal>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {POINTS.map((p, i) => (
          <Reveal key={p.t} i={i}>
            <div className="clip-hud h-full border border-arc/25 bg-navy/45 p-5 backdrop-blur-sm transition-all duration-300 hover:border-arc hover:shadow-[0_0_40px_-14px_rgba(20,107,255,0.95)]">
              <div className="hud-label text-[0.62rem] text-arc-bright">{t(p.t)}</div>
              <p className="mt-2 text-sm text-muted-foreground">{t(p.d)}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal i={2}>
        <p className="mt-8 max-w-2xl text-muted-foreground">{t("thesis.outro")}</p>
      </Reveal>

      <Reveal i={3}>
        <div className="mt-12 flex flex-col items-stretch gap-0 sm:flex-row sm:items-center">
          {FLOW.map((step, i) => (
            <div key={step} className="flex flex-1 flex-col items-center sm:flex-row">
              <div className="clip-hud w-full border border-arc/40 bg-navy/60 px-3 py-4 text-center backdrop-blur-sm transition-all hover:border-arc hover:bg-arc/12">
                <span className="hud-label text-[0.6rem] text-foreground">{t(step)}</span>
              </div>
              {i < FLOW.length - 1 && (
                <span
                  aria-hidden="true"
                  className="h-6 w-px shrink-0 bg-gradient-to-b from-arc to-arc/20 shadow-[0_0_10px_rgba(20,107,255,0.8)] sm:h-px sm:w-6 sm:bg-gradient-to-r"
                />
              )}
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
