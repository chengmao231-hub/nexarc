import { ASSETS } from "@/lib/nexarc";

/** The persistent NEXARC world: one background image, fixed, with overlays. */
export function Backdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
      <img
        src={ASSETS.background}
        alt=""
        className="h-full w-full object-cover object-center opacity-70"
      />
      <div className="absolute inset-0 bg-[#020817]/72" />
      <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_70%_10%,rgba(20,107,255,0.28),transparent_60%)]" />
      <div className="absolute inset-0 grid-lines opacity-60" />
      <div className="absolute inset-0 scanlines opacity-40" />
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#020817] to-transparent" />
    </div>
  );
}

const PARTICLES = [
  { l: "8%", d: "0s", s: 9, o: 0.5 },
  { l: "21%", d: "2.4s", s: 12, o: 0.35 },
  { l: "34%", d: "5.1s", s: 8, o: 0.6 },
  { l: "47%", d: "1.2s", s: 14, o: 0.3 },
  { l: "58%", d: "6.3s", s: 10, o: 0.45 },
  { l: "69%", d: "3.6s", s: 11, o: 0.4 },
  { l: "80%", d: "7.4s", s: 9, o: 0.5 },
  { l: "92%", d: "4.2s", s: 13, o: 0.32 },
];

export function Particles({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {PARTICLES.map((p) => (
        <span
          key={p.l}
          className="absolute bottom-0 h-1 w-1 rounded-full bg-arc-bright shadow-[0_0_10px_2px_rgba(20,107,255,0.9)]"
          style={{
            left: p.l,
            opacity: p.o,
            animation: `nx-drift ${p.s}s linear ${p.d} infinite`,
          }}
        />
      ))}
    </div>
  );
}
