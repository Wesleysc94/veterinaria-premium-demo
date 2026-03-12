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
        "space-y-5",
        centered ? "mx-auto max-w-3xl text-center" : "max-w-2xl",
        className,
      )}
    >
      <div
        className={cn(
          "inline-flex items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.34em]",
          inverse
            ? "text-white/75"
            : "text-primary/60",
          centered && "mx-auto",
        )}
      >
        <span className="h-px w-10 bg-current/35" />
        <span className="font-mono-data tracking-[0.3em]">{eyebrow}</span>
      </div>
      <div className="space-y-4">
        <h2
          className={cn(
            "font-display text-4xl leading-[0.96] sm:text-5xl lg:text-6xl",
            inverse ? "text-white" : "text-primary",
          )}
        >
          {title}
        </h2>
        <p
          className={cn(
            "max-w-2xl text-base leading-8 sm:text-lg",
            inverse ? "text-[rgb(255_255_255_/_0.72)]" : "text-[hsl(var(--primary)/0.68)]",
          )}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
