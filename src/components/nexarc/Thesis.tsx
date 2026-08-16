import { Reveal, Section, SectionLabel } from "./ui";

const FLOW = ["Meme", "Community", "Attention", "Culture", "More Memes"];

const POINTS = [
  { t: "Communities", d: "People who show up every day, not just holders." },
  { t: "Inside Jokes", d: "Language only the fam understands." },
  { t: "Characters", d: "A mascot with a face, a vibe and a mission." },
  { t: "Movements", d: "Culture that spreads faster than any roadmap." },
];

export function Thesis() {
  return (
    <Section id="thesis">
      <Reveal>
        <SectionLabel>Thesis // 02</SectionLabel>
        <h2 className="max-w-3xl text-[clamp(2rem,5vw,3.2rem)] font-black uppercase leading-[0.95]">
          The <span className="text-arc-bright glow-text">NEXARC</span> Thesis
        </h2>
      </Reveal>

      <Reveal i={1}>
        <div className="panel clip-hud mt-8 p-7 sm:p-10">
          <p className="text-[clamp(1.4rem,3.6vw,2.2rem)] font-black uppercase leading-tight">
            Every chain needs a culture.
          </p>
          <p className="mt-3 text-lg text-muted-foreground">
            ARC brings the infrastructure.{" "}
            <span className="font-semibold text-arc-bright">NEXARC brings the memes.</span>
          </p>
        </div>
      </Reveal>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {POINTS.map((p, i) => (
          <Reveal key={p.t} i={i}>
            <div className="clip-hud h-full border border-arc/25 bg-navy/45 p-5 backdrop-blur-sm transition-all duration-300 hover:border-arc hover:shadow-[0_0_40px_-14px_rgba(20,107,255,0.95)]">
              <div className="hud-label text-[0.62rem] text-arc-bright">{p.t}</div>
              <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal i={2}>
        <p className="mt-8 max-w-2xl text-muted-foreground">
          NEXARC wants to become one of the recognizable meme-native communities within the ARC
          ecosystem.
        </p>
      </Reveal>

      <Reveal i={3}>
        <div className="mt-12 flex flex-col items-stretch gap-0 sm:flex-row sm:items-center">
          {FLOW.map((step, i) => (
            <div key={step} className="flex flex-1 flex-col items-center sm:flex-row">
              <div className="clip-hud w-full border border-arc/40 bg-navy/60 px-3 py-4 text-center backdrop-blur-sm transition-all hover:border-arc hover:bg-arc/12">
                <span className="hud-label text-[0.6rem] text-foreground">{step}</span>
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
