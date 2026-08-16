import { Reveal, Section, SectionLabel } from "./ui";

const PHASES = [
  {
    phase: "Phase 01",
    title: "Launch",
    items: ["Token launch on ARC", "Website & brand identity", "First meme drops"],
    status: "Live",
  },
  {
    phase: "Phase 02",
    title: "Expansion",
    items: ["Community growth", "Meme contests & raids", "Creator collabs"],
    status: "Next",
  },
  {
    phase: "Phase 03",
    title: "Culture",
    items: ["NEXARC lore & characters", "Ecosystem partnerships", "Wider ARC presence"],
    status: "Soon",
  },
  {
    phase: "Phase 04",
    title: "Legacy",
    items: ["The recognizable meme of ARC", "Community-led initiatives", "Endless memes"],
    status: "Vision",
  },
];

export function Roadmap() {
  return (
    <Section id="roadmap">
      <Reveal>
        <SectionLabel>Trajectory // 05</SectionLabel>
        <h2 className="max-w-3xl text-[clamp(2rem,5vw,3.2rem)] font-black uppercase leading-[0.95]">
          Flight <span className="text-arc-bright glow-text">Path</span>
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
                    <span className="hud-label text-[0.58rem] text-arc-bright">{p.phase}</span>
                    <span className="hud-label border border-arc/40 px-2 py-0.5 text-[0.5rem] text-muted-foreground">
                      {p.status}
                    </span>
                  </div>
                  <h3 className="mt-3 text-xl font-black uppercase">{p.title}</h3>
                  <ul className="mt-3 space-y-1.5">
                    {p.items.map((it) => (
                      <li key={it} className="flex gap-2 text-sm text-muted-foreground">
                        <span aria-hidden="true" className="mt-1.5 h-1 w-1 shrink-0 bg-arc-bright" />
                        {it}
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
