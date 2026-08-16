import { motion } from "motion/react";
import { ASSETS, CA, LINKS } from "@/lib/nexarc";
import { useI18n } from "@/lib/i18n";
import { BuyButton, GhostButton, TelegramIcon, XIcon, fadeUp } from "./ui";
import { Particles } from "./Backdrop";

export function Hero() {
  const { t } = useI18n();

  return (
    <section id="home" className="relative overflow-hidden px-5 pb-24 pt-32 sm:px-8 lg:pb-32 lg:pt-40">
      <Particles />
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.div variants={fadeUp} custom={0} initial="hidden" animate="show">
            <span className="clip-hud inline-flex items-center gap-2 border border-arc/50 bg-arc/12 px-4 py-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-arc-bright [animation:nx-pulse-ring_1.8s_ease-out_infinite]" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-arc-bright" />
              </span>
              <span className="hud-label text-[0.6rem] text-arc-bright">{t("hero.badge")}</span>
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            custom={1}
            initial="hidden"
            animate="show"
            className="mt-7 text-[clamp(2.9rem,8.5vw,5.6rem)] font-black uppercase leading-[0.88]"
          >
            <span className="block text-foreground">{t("hero.t1")}</span>
            <span className="block text-foreground">{t("hero.t2")}</span>
            <span className="glow-text block text-arc-bright">{t("hero.t3")}</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={2}
            initial="hidden"
            animate="show"
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {t("hero.p")}
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={3}
            initial="hidden"
            animate="show"
            className="mt-9 flex flex-wrap gap-3"
          >
            <BuyButton href={LINKS.buy} target="_blank" rel="noopener noreferrer" aria-label="Buy $NEXARC on Radardex">
              {t("nav.buy")}
            </BuyButton>
            <GhostButton href={LINKS.telegram} target="_blank" rel="noopener noreferrer" aria-label="Join NEXARC on Telegram">
              <TelegramIcon className="h-4 w-4" /> {t("hero.telegram")}
            </GhostButton>
            <GhostButton href={LINKS.x} target="_blank" rel="noopener noreferrer" aria-label="Follow NEXARC on X">
              <XIcon className="h-4 w-4" /> {t("hero.x")}
            </GhostButton>
          </motion.div>

          <motion.div
            variants={fadeUp}
            custom={4}
            initial="hidden"
            animate="show"
            className="panel clip-hud mt-8 inline-flex flex-wrap items-center gap-x-3 gap-y-1 px-4 py-3"
          >
            <span className="hud-label text-[0.58rem] text-muted-foreground">{t("hero.contract")}</span>
            <span className="hud-label text-[0.72rem] font-bold text-arc-bright">{CA}</span>
          </motion.div>
        </div>

        <motion.div
          variants={fadeUp}
          custom={3}
          initial="hidden"
          animate="show"
          className="relative mx-auto w-full max-w-sm lg:max-w-none"
        >
          <div className="absolute inset-x-6 top-10 -z-10 aspect-square rounded-full bg-arc/25 blur-[70px]" />
          <img
            src={ASSETS.mascot1}
            alt="NEXARC futuristic mascot"
            width={620}
            height={640}
            className="mx-auto w-full max-w-[420px] object-contain drop-shadow-[0_0_60px_rgba(20,107,255,0.55)] [animation:nx-float_7s_ease-in-out_infinite]"
          />
        </motion.div>
      </div>

      <motion.div
        variants={fadeUp}
        custom={5}
        initial="hidden"
        animate="show"
        className="mx-auto mt-20 w-full max-w-6xl"
      >
        <div className="panel clip-hud overflow-hidden">
          <img
            src={ASSETS.banner}
            alt="NEXARC — The Next Meme on ARC banner artwork"
            width={1792}
            height={896}
            className="h-auto w-full object-contain"
          />
        </div>
      </motion.div>
    </section>
  );
}
