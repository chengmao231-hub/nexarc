import { ASSETS } from "@/lib/nexarc";
import { useI18n, type Key } from "@/lib/i18n";
import { Reveal, Section, SectionLabel } from "./ui";

const GALLERY: { src: string; alt: string; caption: Key; span: string }[] = [
  {
    src: ASSETS.meme,
    alt: "NEXARC meme: mascot in a director's chair with a HODL LAUGH REPEAT mug",
    caption: "culture.c1",
    span: "sm:col-span-2",
  },
  {
    src: ASSETS.buyChill,
    alt: "NEXARC mascot relaxing in a beanbag with NEXARC FUEL coffee under neon signs",
    caption: "culture.c2",
    span: "",
  },
  {
    src: ASSETS.mascot2,
    alt: "NEXARC mascot standing in techwear with headphones",
    caption: "culture.c3",
    span: "",
  },
];

export function Culture() {
  const { t } = useI18n();

  return (
    <Section id="culture">
      <Reveal>
        <SectionLabel>{t("culture.label")}</SectionLabel>
        <h2 className="max-w-3xl text-[clamp(2rem,5vw,3.2rem)] font-black uppercase leading-[0.95]">
          {t("culture.h1")} <span className="text-arc-bright glow-text">{t("culture.h2")}</span>
        </h2>
        <p className="mt-5 max-w-xl text-muted-foreground">{t("culture.p")}</p>
      </Reveal>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {GALLERY.map((g, i) => (
          <Reveal key={g.caption} i={i} className={g.span}>
            <figure className="panel clip-hud group h-full overflow-hidden">
              <div className="overflow-hidden">
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>
              <figcaption className="hud-label border-t border-arc/25 px-4 py-3 text-[0.6rem] text-muted-foreground">
                {t(g.caption)}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
