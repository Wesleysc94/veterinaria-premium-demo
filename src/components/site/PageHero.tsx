import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

import { Reveal } from "./Reveal";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  ctaLabel = "Agendar atendimento",
  ctaHref = "/contato",
}: PageHeroProps) {
  return (
    <section className="section-shell-tight relative overflow-hidden pt-32">
      <div className="ambient-orb left-[-6rem] top-20 h-56 w-56 bg-[radial-gradient(circle_at_center,rgba(174,191,168,0.24),transparent_68%)]" />
      <div className="ambient-orb right-[-4rem] top-12 h-72 w-72 bg-[radial-gradient(circle_at_center,rgba(94,130,145,0.24),transparent_70%)]" />
      <div className="mx-auto max-w-6xl rounded-[2.6rem] border border-primary/10 theme-adaptive-surface px-7 py-10 shadow-[0_30px_120px_-55px_rgba(39,51,46,0.22)] backdrop-blur md:px-12 md:py-14">
        <div className="grid gap-10 lg:grid-cols-[1.15fr,0.85fr] lg:items-end">
          <Reveal className="space-y-6">
            <div className="inline-flex items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.34em] text-[hsl(var(--primary)/0.62)]">
              <span className="h-px w-10 bg-primary/25" />
              <span className="font-mono-data tracking-[0.28em]">{eyebrow}</span>
            </div>
            <h1 className="max-w-4xl font-display text-5xl leading-[0.92] text-primary sm:text-6xl lg:text-7xl">
              {title}
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-[hsl(var(--primary)/0.68)]">
              {description}
            </p>
          </Reveal>

          <Reveal delay={0.08} className="metric-card p-6 sm:p-7">
            <p className="font-mono-data text-[11px] uppercase tracking-[0.3em] text-[hsl(var(--primary)/0.52)]">
              contato rapido
            </p>
            <p className="mt-4 text-sm leading-7 text-[hsl(var(--primary)/0.66)]">
              Estrutura pensada para transformar interesse em agendamento com rapidez, clareza e percepção premium.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                to={ctaHref}
                className="premium-button inline-flex items-center justify-center gap-2"
              >
                {ctaLabel}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contato"
                className="premium-button-secondary inline-flex items-center justify-center gap-2"
              >
                Falar com a clinica
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
