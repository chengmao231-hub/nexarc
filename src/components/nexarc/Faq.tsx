import { Reveal, Section, SectionLabel } from "./ui";
import { ChevronDown } from "lucide-react";

export const FAQ_ITEMS = [
  {
    q: "What is NEXARC?",
    a: "NEXARC is a community-driven memecoin built on the ARC chain, centered on the idea of being the next meme on ARC.",
  },
  {
    q: "What is the ticker?",
    a: "The ticker is $NEXARC.",
  },
  {
    q: "What is the contract address?",
    a: "The contract address is COMING SOON. Always verify it from the official NEXARC channels before buying.",
  },
  {
    q: "Where can I buy $NEXARC?",
    a: "$NEXARC will be tradeable on Radardex at radardex.pro.",
  },
  {
    q: "Does NEXARC have utility?",
    a: "NEXARC is a memecoin. Its value is community, culture and memes — no promises, no roadmap theater.",
  },
];

export function Faq() {
  return (
    <Section id="faq">
      <Reveal>
        <SectionLabel>Intel // 07</SectionLabel>
        <h2 className="max-w-3xl text-[clamp(2rem,5vw,3.2rem)] font-black uppercase leading-[0.95]">
          Frequently <span className="text-arc-bright glow-text">Asked</span>
        </h2>
      </Reveal>

      <div className="mt-9 grid gap-3">
        {FAQ_ITEMS.map((item, i) => (
          <Reveal key={item.q} i={i}>
            <details className="panel clip-hud group p-5 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                <span className="text-base font-bold uppercase tracking-tight">{item.q}</span>
                <ChevronDown className="h-4 w-4 shrink-0 text-arc-bright transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-sm text-muted-foreground">{item.a}</p>
            </details>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
