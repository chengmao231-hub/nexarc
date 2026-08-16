import { ASSETS, CA, LINKS } from "@/lib/nexarc";
import { useI18n, type Key } from "@/lib/i18n";
import { BuyButton, Reveal, Section, SectionLabel } from "./ui";

const STEPS: { n: string; t: Key; d: Key }[] = [
  { n: "01", t: "buy.s1t", d: "buy.s1d" },
  { n: "02", t: "buy.s2t", d: "buy.s2d" },
  { n: "03", t: "buy.s3t", d: "buy.s3d" },
  { n: "04", t: "buy.s4t", d: "buy.s4d" },
];

export function HowToBuy() {
  const { t } = useI18n();

  return (
    <Section id="buy">
      <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <Reveal>
            <SectionLabel>{t("buy.label")}</SectionLabel>
            <h2 className="text-[clamp(2rem,5vw,3.2rem)] font-black uppercase leading-[0.95]">
              {t("buy.h1")} <span className="text-arc-bright glow-text">{t("buy.h2")}</span>
            </h2>
          </Reveal>

          <ol className="mt-8 grid gap-3 sm:grid-cols-2">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} i={i}>
                <li className="clip-hud h-full border border-arc/25 bg-navy/50 p-5 backdrop-blur-sm transition-all hover:border-arc">
                  <span className="hud-label text-2xl font-black text-arc/70">{s.n}</span>
                  <h3 className="mt-2 text-base font-bold uppercase">{t(s.t)}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{t(s.d)}</p>
                </li>
              </Reveal>
            ))}
          </ol>

          <Reveal i={4}>
            <div className="panel clip-hud mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 p-5">
              <span className="hud-label text-[0.58rem] text-muted-foreground">{t("buy.ca")}</span>
              <span className="hud-label text-sm font-bold text-arc-bright">{CA}</span>
            </div>
          </Reveal>

          <Reveal i={5}>
            <div className="mt-5">
              <BuyButton href={LINKS.buy} target="_blank" rel="noopener noreferrer">
                {t("buy.cta")}
              </BuyButton>
            </div>
          </Reveal>
        </div>

        <Reveal i={2}>
          <figure className="panel clip-hud overflow-hidden">
            <img
              src={ASSETS.buyChill}
              alt="NEXARC mascot chilling with NEXARC FUEL coffee under BUY NEXARC AND CHILL neon signs"
              loading="lazy"
              className="h-auto w-full object-contain"
            />
            <figcaption className="hud-label border-t border-arc/25 px-4 py-3 text-[0.6rem] text-muted-foreground">
              {t("buy.cap")}
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </Section>
  );
}
