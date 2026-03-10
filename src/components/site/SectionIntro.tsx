import { cn } from "@/lib/utils";

type SectionIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
  tone?: "default" | "inverse";
  className?: string;
};

export function SectionIntro({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "default",
  className,
}: SectionIntroProps) {
  const centered = align === "center";
  const inverse = tone === "inverse";

  return (
    <div
      className={cn(
        "space-y-4",
        centered ? "mx-auto max-w-3xl text-center" : "max-w-2xl",
        className,
      )}
    >
      <div
        className={cn(
          "inline-flex items-center gap-3 rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.32em] shadow-[0_20px_60px_-40px_rgba(90,70,58,0.55)] backdrop-blur",
          inverse
            ? "border border-white/20 bg-white/10 text-white/80"
            : "theme-adaptive-surface text-primary/70",
          centered && "mx-auto",
        )}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
        {eyebrow}
      </div>
      <div className="space-y-4">
        <h2
          className={cn(
            "font-display text-4xl leading-[0.95] sm:text-5xl lg:text-6xl",
            inverse ? "text-white" : "text-primary",
          )}
        >
          {title}
        </h2>
        <p
          className={cn(
            "max-w-2xl text-base leading-8 sm:text-lg",
            inverse ? "text-white/70" : "text-primary/70",
          )}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
