import { ASSETS, LINKS } from "@/lib/nexarc";
import { BuyButton, GhostButton, Reveal, TelegramIcon, XIcon } from "./ui";
import { Particles } from "./Backdrop";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden px-5 py-28 sm:px-8 lg:py-36">
      <Particles />
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <img
            src={ASSETS.logo}
            alt="NEXARC logo"
            loading="lazy"
            width={120}
            height={120}
            className="mx-auto h-24 w-24 rounded-full object-contain drop-shadow-[0_0_36px_rgba(20,107,255,0.9)] [animation:nx-float_6s_ease-in-out_infinite]"
          />
        </Reveal>
        <Reveal i={1}>
          <h2 className="mt-8 text-[clamp(2.2rem,7vw,4.6rem)] font-black uppercase leading-[0.9]">
            Be Early to the{" "}
            <span className="glow-text text-arc-bright">Next Meme on ARC</span>
          </h2>
        </Reveal>
        <Reveal i={2}>
          <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
            The arc is drawn. The memes are loaded. Join the NEXARC fam and help write the next
            chapter of ARC culture.
          </p>
        </Reveal>
        <Reveal i={3}>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <BuyButton href={LINKS.buy} target="_blank" rel="noopener noreferrer">
              Buy $NEXARC
            </BuyButton>
            <GhostButton href={LINKS.telegram} target="_blank" rel="noopener noreferrer">
              <TelegramIcon className="h-4 w-4" /> Telegram
            </GhostButton>
            <GhostButton href={LINKS.x} target="_blank" rel="noopener noreferrer">
              <XIcon className="h-4 w-4" /> X
            </GhostButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-arc/25 bg-[#020817]/80 px-5 py-10 backdrop-blur-md sm:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 text-center">
        <div className="flex items-center gap-3">
          <img
            src={ASSETS.logo}
            alt="NEXARC logo"
            loading="lazy"
            width={36}
            height={36}
            className="h-9 w-9 rounded-full object-contain"
          />
          <span className="hud-label text-sm font-bold">NEXARC</span>
        </div>
        <p className="max-w-2xl text-xs leading-relaxed text-muted-foreground">
          $NEXARC is a meme coin with no intrinsic value or expectation of financial return. It is
          for entertainment and community purposes only. Nothing here is financial advice — always
          do your own research.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a href={LINKS.x} target="_blank" rel="noopener noreferrer" aria-label="NEXARC on X" className="text-muted-foreground hover:text-arc-bright">
            <XIcon className="h-4 w-4" />
          </a>
          <a href={LINKS.telegram} target="_blank" rel="noopener noreferrer" aria-label="NEXARC on Telegram" className="text-muted-foreground hover:text-arc-bright">
            <TelegramIcon className="h-4 w-4" />
          </a>
          <a href={LINKS.buy} target="_blank" rel="noopener noreferrer" className="hud-label text-[0.58rem] text-muted-foreground hover:text-arc-bright">
            Radardex
          </a>
        </div>
        <span className="hud-label text-[0.55rem] text-muted-foreground/70">
          © {new Date().getFullYear()} NEXARC — The Next Meme on ARC
        </span>
      </div>
    </footer>
  );
}
