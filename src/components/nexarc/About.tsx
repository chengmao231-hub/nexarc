import { ASSETS } from "@/lib/nexarc";
import { useI18n } from "@/lib/i18n";
import { Reveal, Section, SectionLabel } from "./ui";

export function About() {
  const { t } = useI18n();

  return (
    <Section id="about">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <Reveal className="order-2 lg:order-1">
          <div className="relative">
            <div className="absolute inset-8 -z-10 rounded-full bg-arc/22 blur-[70px]" />
            <img
              src={ASSETS.mascot1}
              alt="NEXARC futuristic mascot"
              loading="lazy"
              width={620}
              height={640}
              className="mx-auto w-full max-w-[360px] object-contain drop-shadow-[0_0_45px_rgba(20,107,255,0.5)] [animation:nx-float_9s_ease-in-out_infinite]"
            />
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <SectionLabel>{t("about.label")}</SectionLabel>
            <h2 className="text-[clamp(2rem,5vw,3.2rem)] font-black uppercase leading-[0.95]">
              {t("about.h")} <span className="text-arc-bright glow-text">NEXARC</span>
              {t("about.q")}
            </h2>
          </Reveal>

          <Reveal i={1}>
            <div className="panel clip-hud mt-7 p-6">
              <p className="text-muted-foreground">
                {t("about.p1a")}
                <span className="font-semibold text-foreground">{t("about.p1b")}</span>
              </p>
            </div>
          </Reveal>

          <Reveal i={2}>
            <div className="mt-4 grid grid-cols-[1fr_auto_1fr_auto_1.2fr] items-center gap-2 text-center">
              <Equation top="NEX" bottom={t("about.eq1")} />
              <span className="text-2xl font-black text-arc">+</span>
              <Equation top="ARC" bottom={t("about.eq2")} />
              <span className="text-2xl font-black text-arc">=</span>
              <Equation top="NEXARC" bottom={t("about.eq3")} highlight />
            </div>
          </Reveal>

          <Reveal i={3}>
            <p className="mt-6 text-muted-foreground">{t("about.p2")}</p>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

function Equation({ top, bottom, highlight }: { top: string; bottom: string; highlight?: boolean }) {
  return (
    <div
      className={`clip-hud border px-2 py-4 ${
        highlight
          ? "border-arc bg-arc/15 shadow-[0_0_36px_-10px_rgba(20,107,255,0.9)]"
          : "border-arc/30 bg-navy/50"
      }`}
    >
      <div
        className={`hud-label text-[clamp(0.6rem,2vw,0.95rem)] font-bold ${
          highlight ? "text-arc-bright" : "text-foreground"
        }`}
      >
        {top}
      </div>
      <div className="mt-1 text-[0.6rem] uppercase tracking-widest text-muted-foreground">{bottom}</div>
    </div>
  );
}
