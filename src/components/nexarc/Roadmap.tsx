import { useI18n, type Key } from "@/lib/i18n";
import { Reveal, Section, SectionLabel } from "./ui";

const PHASES: { phase: Key; title: Key; status: Key; items: Key[] }[] = [
  { phase: "road.p1", title: "road.p1t", status: "road.p1s", items: ["road.p1i1", "road.p1i2", "road.p1i3"] },
  { phase: "road.p2", title: "road.p2t", status: "road.p2s", items: ["road.p2i1", "road.p2i2", "road.p2i3"] },
  { phase: "road.p3", title: "road.p3t", status: "road.p3s", items: ["road.p3i1", "road.p3i2", "road.p3i3"] },
  { phase: "road.p4", title: "road.p4t", status: "road.p4s", items: ["road.p4i1", "road.p4i2", "road.p4i3"] },
];

export function Roadmap() {
  const { t } = useI18n();

  return (
    <Section id="roadmap">
      <Reveal>
        <SectionLabel>{t("road.label")}</SectionLabel>
        <h2 className="max-w-3xl text-[clamp(2rem,5vw,3.2rem)] font-black uppercase leading-[0.95]">
          {t("road.h1")} <span className="text-arc-bright glow-text">{t("road.h2")}</span>
        </h2>
      </Reveal>

      <div className="relative mt-12">
        <span
          aria-hidden="true"
          className="absolute left-[7px] top-0 h-full w-px bg-gradient-to-b from-arc via-arc/40 to-transparent md:left-0 md:top-[7px] md:h-px md:w-full md:bg-gradient-to-r"
        />
        <ol className="grid gap-8 md:grid-cols-4 md:gap-5">
          {PHASES.map((p, i) => (
            <li key={p.phase} className="relative pl-9 md:pl-0 md:pt-10">
              <span
                aria-hidden="true"
                className="absolute left-0 top-1.5 h-4 w-4 rotate-45 border border-arc bg-navy shadow-[0_0_18px_rgba(20,107,255,0.9)] md:left-0 md:top-0"
              />
              <Reveal i={i}>
                <div className="clip-hud h-full border border-arc/25 bg-navy/50 p-5 backdrop-blur-sm transition-all duration-300 hover:border-arc hover:shadow-[0_0_44px_-16px_rgba(20,107,255,0.95)]">
                  <div className="flex items-center justify-between gap-2">
                    <span className="hud-label text-[0.58rem] text-arc-bright">{t(p.phase)}</span>
                    <span className="hud-label border border-arc/40 px-2 py-0.5 text-[0.5rem] text-muted-foreground">
                      {t(p.status)}
                    </span>
                  </div>
                  <h3 className="mt-3 text-xl font-black uppercase">{t(p.title)}</h3>
                  <ul className="mt-3 space-y-1.5">
                    {p.items.map((it) => (
                      <li key={it} className="flex gap-2 text-sm text-muted-foreground">
                        <span aria-hidden="true" className="mt-1.5 h-1 w-1 shrink-0 bg-arc-bright" />
                        {t(it)}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
