import { useEffect, useState } from "react";
import { Menu, X as Close } from "lucide-react";
import { ASSETS, LINKS, NAV } from "@/lib/nexarc";
import { BuyButton, TelegramIcon, XIcon } from "./ui";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-arc/35 bg-[#020817]/88 shadow-[0_10px_40px_-20px_rgba(20,107,255,0.9)] backdrop-blur-xl"
          : "border-transparent bg-[#020817]/35 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3 sm:px-8 lg:grid-cols-[1fr_auto_1fr]">
        <a href="#home" className="flex min-w-0 items-center gap-3" aria-label="NEXARC home">
          <img
            src={ASSETS.logo}
            alt="NEXARC logo"
            width={44}
            height={44}
            className="h-10 w-10 shrink-0 rounded-full object-contain drop-shadow-[0_0_14px_rgba(20,107,255,0.8)]"
          />
          <span className="hud-label truncate text-sm font-bold text-foreground">NEXARC</span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="hud-label relative text-[0.64rem] text-muted-foreground transition-colors hover:text-arc-bright"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-2">
          <div className="hidden items-center gap-1 sm:flex">
            <IconLink href={LINKS.x} label="Follow NEXARC on X">
              <XIcon className="h-4 w-4" />
            </IconLink>
            <IconLink href={LINKS.telegram} label="Join NEXARC on Telegram">
              <TelegramIcon className="h-4 w-4" />
            </IconLink>
          </div>
          <BuyButton
            href={LINKS.buy}
            target="_blank"
            rel="noopener noreferrer"
            className="!px-4 !py-2.5 !text-[0.66rem]"
            aria-label="Buy $NEXARC on Radardex"
          >
            Buy $NEXARC
          </BuyButton>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="clip-hud border border-arc/40 p-2.5 text-foreground transition-colors hover:bg-arc/15 lg:hidden"
          >
            {open ? <Close className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-arc/25 bg-[#020817]/96 px-5 py-4 backdrop-blur-xl lg:hidden">
          <ul className="flex flex-col">
            {NAV.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="hud-label block border-b border-arc/12 py-3.5 text-[0.7rem] text-muted-foreground hover:text-arc-bright"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex gap-2">
            <IconLink href={LINKS.x} label="Follow NEXARC on X">
              <XIcon className="h-4 w-4" />
            </IconLink>
            <IconLink href={LINKS.telegram} label="Join NEXARC on Telegram">
              <TelegramIcon className="h-4 w-4" />
            </IconLink>
          </div>
        </nav>
      )}
    </header>
  );
}

function IconLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="clip-hud border border-arc/30 p-2.5 text-muted-foreground transition-all hover:border-arc hover:text-arc-bright hover:shadow-[0_0_22px_-6px_rgba(20,107,255,0.9)]"
    >
      {children}
    </a>
  );
}
