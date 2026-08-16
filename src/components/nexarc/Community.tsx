import { ASSETS, LINKS } from "@/lib/nexarc";
import { GhostButton, Reveal, Section, SectionLabel, TelegramIcon, XIcon } from "./ui";

export function Community() {
  return (
    <Section id="community">
      <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <div className="relative">
            <div className="absolute inset-10 -z-10 rounded-full bg-arc/20 blur-[70px]" />
            <img
              src={ASSETS.mascot2}
              alt="NEXARC mascot in techwear giving a peace sign"
              loading="lazy"
              width={560}
              height={780}
              className="mx-auto w-full max-w-[330px] object-contain drop-shadow-[0_0_45px_rgba(20,107,255,0.5)] [animation:nx-float_8s_ease-in-out_infinite]"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <SectionLabel>Community // 03</SectionLabel>
            <h2 className="text-[clamp(2rem,5vw,3.2rem)] font-black uppercase leading-[0.95]">
              Powered by <span className="text-arc-bright glow-text">People</span>
            </h2>
            <p className="mt-5 max-w-xl text-muted-foreground">
              NEXARC is powered by its community. No promises, no roadmap theater — just memes,
              momentum and the people who show up.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <Reveal i={1}>
              <SocialCard
                href={LINKS.x}
                label="X / Twitter"
                desc="Memes, announcements and daily NEXARC energy."
                icon={<XIcon className="h-5 w-5" />}
              />
            </Reveal>
            <Reveal i={2}>
              <SocialCard
                href={LINKS.telegram}
                label="Telegram"
                desc="The main hub. Where the fam actually lives."
                icon={<TelegramIcon className="h-5 w-5" />}
              />
            </Reveal>
          </div>

          <Reveal i={3}>
            <div className="mt-5">
              <GhostButton href={LINKS.buy} target="_blank" rel="noopener noreferrer">
                Trade on Radardex
              </GhostButton>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

function SocialCard({
  href,
  label,
  desc,
  icon,
}: {
  href: string;
  label: string;
  desc: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="panel clip-hud group block h-full p-5 transition-all duration-300 hover:-translate-y-1 hover:border-arc hover:shadow-[0_0_44px_-14px_rgba(20,107,255,0.95)]"
    >
      <span className="clip-hud inline-flex border border-arc/40 bg-arc/12 p-2.5 text-arc-bright">
        {icon}
      </span>
      <div className="hud-label mt-4 text-[0.66rem] text-foreground">{label}</div>
      <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
    </a>
  );
}
