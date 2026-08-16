import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ASSETS } from "@/lib/nexarc";
import { Particles } from "./Backdrop";

/** Full-screen access terminal. User must click the logo to enter the site. */
export function EnterGate({ onEnter }: { onEnter: () => void }) {
  const [leaving, setLeaving] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (leaving) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [leaving]);

  const handleEnter = () => {
    if (leaving) return;
    setLeaving(true);
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";
    window.setTimeout(() => onEnter(), 900);
    window.setTimeout(() => setVisible(false), 1700);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="gate"
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#020817]"
          exit={{ opacity: 0 }}
        >
          {/* atmosphere */}
          <img
            src={ASSETS.background}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_45%,rgba(20,107,255,0.3),transparent_65%)]" />
          <div className="absolute inset-0 grid-lines opacity-70" />
          <div className="absolute inset-0 scanlines opacity-50" />
          <Particles />

          {/* iris wipe panels */}
          <motion.div
            aria-hidden="true"
            initial={{ y: "-100%" }}
            animate={leaving ? { y: ["-100%", "0%", "-100%"] } : { y: "-100%" }}
            transition={{ duration: 1.4, times: [0, 0.35, 1], ease: [0.76, 0, 0.24, 1] }}
            className="pointer-events-none absolute inset-x-0 top-0 z-30 h-1/2 border-b border-arc/60 bg-[#020817]"
          />
          <motion.div
            aria-hidden="true"
            initial={{ y: "100%" }}
            animate={leaving ? { y: ["100%", "0%", "100%"] } : { y: "100%" }}
            transition={{ duration: 1.4, times: [0, 0.35, 1], ease: [0.76, 0, 0.24, 1] }}
            className="pointer-events-none absolute inset-x-0 bottom-0 z-30 h-1/2 border-t border-arc/60 bg-[#020817]"
          />

          {/* flash */}
          <motion.div
            aria-hidden="true"
            initial={{ opacity: 0 }}
            animate={leaving ? { opacity: [0, 0.85, 0] } : { opacity: 0 }}
            transition={{ duration: 0.7, times: [0, 0.25, 1] }}
            className="pointer-events-none absolute inset-0 z-40 bg-arc-bright"
          />

          <motion.div
            animate={leaving ? { scale: 1.35, opacity: 0 } : { scale: 1, opacity: 1 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-20 flex flex-col items-center px-6 text-center"
          >
            <motion.span
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="clip-hud hud-label border border-arc/50 bg-arc/10 px-4 py-2 text-[0.55rem] text-arc-bright"
            >
              NEXARC // Access Terminal
            </motion.span>

            <motion.button
              type="button"
              onClick={handleEnter}
              aria-label="Click the logo to enter the NEXARC site"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
              className="group relative mt-12 flex h-44 w-44 items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background sm:h-56 sm:w-56"
            >
              <span
                aria-hidden="true"
                className="absolute inset-0 rounded-full border border-arc/40 [animation:nx-radar_14s_linear_infinite] before:absolute before:-top-1 before:left-1/2 before:h-2 before:w-2 before:-translate-x-1/2 before:rounded-full before:bg-arc-bright before:shadow-[0_0_14px_4px_rgba(20,107,255,0.9)] before:content-['']"
              />
              <span
                aria-hidden="true"
                className="absolute -inset-5 rounded-full border border-dashed border-arc/25 [animation:nx-radar_26s_linear_infinite_reverse]"
              />
              <span
                aria-hidden="true"
                className="absolute inset-6 rounded-full bg-arc/25 blur-2xl transition-all duration-500 group-hover:bg-arc/50 group-hover:blur-3xl"
              />
              <span
                aria-hidden="true"
                className="absolute inset-0 rounded-full border border-arc-bright/70 [animation:nx-pulse-ring_2.6s_ease-out_infinite]"
              />
              <img
                src={ASSETS.logo}
                alt="NEXARC logo"
                width={220}
                height={220}
                className="relative h-32 w-32 rounded-full object-contain drop-shadow-[0_0_40px_rgba(20,107,255,0.9)] transition-transform duration-500 group-hover:drop-shadow-[0_0_70px_rgba(20,107,255,1)] sm:h-40 sm:w-40"
              />
            </motion.button>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-12 text-[clamp(1.5rem,5vw,2.6rem)] font-black uppercase leading-none"
            >
              <span className="glow-text text-arc-bright">Click the logo to enter</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-3 text-lg font-bold text-foreground"
            >
              点击标志进入
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="hud-label mt-5 text-[0.55rem] text-muted-foreground"
            >
              Initialize the ARC meme protocol · 启动 ARC 迷因协议
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="mt-8 h-px w-56 max-w-full overflow-hidden bg-arc/20"
            >
              <span className="block h-full w-1/3 bg-arc-bright [animation:nx-sweep_2.4s_linear_infinite]" />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
