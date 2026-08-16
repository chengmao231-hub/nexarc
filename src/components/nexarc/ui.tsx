import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";

export function XIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" className={className}>
      <path d="M18.244 2H21.5l-7.51 8.583L22.5 22h-6.9l-5.404-7.06L3.99 22H.73l8.03-9.177L1.5 2h7.07l4.884 6.457L18.244 2Zm-1.21 18h1.81L7.05 3.9H5.11L17.034 20Z" />
    </svg>
  );
}

export function TelegramIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" className={className}>
      <path d="M21.94 4.3 18.9 19.05c-.23 1.02-.84 1.27-1.7.79l-4.7-3.47-2.27 2.19c-.25.25-.46.46-.95.46l.34-4.8 8.73-7.9c.38-.34-.08-.53-.59-.19L6.98 13.2l-4.65-1.45c-1.01-.32-1.03-1.01.21-1.5l18.16-7c.84-.31 1.58.2 1.24 1.05Z" />
    </svg>
  );
}

const base =
  "group relative inline-flex items-center justify-center gap-2 clip-hud px-6 py-3.5 text-[0.78rem] font-bold uppercase tracking-[0.18em] transition-all duration-300 hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export function BuyButton({
  children = "Buy $NEXARC",
  className = "",
  ...rest
}: { children?: ReactNode; className?: string } & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      {...rest}
      className={`${base} bg-arc text-primary-foreground shadow-[0_0_28px_-4px_rgba(20,107,255,0.75)] hover:bg-arc-bright hover:shadow-[0_0_50px_-4px_rgba(20,107,255,0.95)] ${className}`}
    >
      <span className="pointer-events-none absolute inset-0 overflow-hidden">
        <span className="absolute inset-y-0 -left-1/3 w-1/3 bg-white/25 blur-md [animation:nx-sweep_3.2s_linear_infinite]" />
      </span>
      <span className="relative">{children}</span>
    </a>
  );
}

export function GhostButton({
  children,
  className = "",
  ...rest
}: { children: ReactNode; className?: string } & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      {...rest}
      className={`${base} border border-arc/50 bg-navy/40 text-foreground backdrop-blur-sm hover:border-arc hover:bg-arc/15 hover:shadow-[0_0_32px_-8px_rgba(20,107,255,0.8)] ${className}`}
    >
      {children}
    </a>
  );
}

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function Reveal({
  children,
  i = 0,
  className = "",
}: {
  children: ReactNode;
  i?: number;
  className?: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      custom={i}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <span className="h-px w-8 bg-arc" />
      <span className="hud-label text-[0.62rem] text-arc-bright">{children}</span>
      <span className="h-px flex-1 max-w-24 bg-gradient-to-r from-arc/60 to-transparent" />
    </div>
  );
}

export function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative scroll-mt-24 px-5 py-24 sm:px-8 lg:py-32 ${className}`}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}
