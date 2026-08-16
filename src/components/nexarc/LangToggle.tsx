import { useI18n, type Lang } from "@/lib/i18n";

const OPTIONS: { id: Lang; label: string }[] = [
  { id: "en", label: "EN" },
  { id: "zh", label: "中文" },
];

export function LangToggle({ className = "" }: { className?: string }) {
  const { lang, setLang } = useI18n();

  return (
    <div
      className={`clip-hud flex items-center border border-arc/35 bg-navy/50 p-0.5 backdrop-blur-sm ${className}`}
      role="group"
      aria-label="Language / 语言"
    >
      {OPTIONS.map((o) => (
        <button
          key={o.id}
          type="button"
          onClick={() => setLang(o.id)}
          aria-pressed={lang === o.id}
          className={`hud-label px-2.5 py-1.5 text-[0.55rem] transition-all ${
            lang === o.id
              ? "bg-arc text-primary-foreground shadow-[0_0_20px_-6px_rgba(20,107,255,0.95)]"
              : "text-muted-foreground hover:text-arc-bright"
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}
