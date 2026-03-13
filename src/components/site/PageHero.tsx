import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

import { Reveal } from "./Reveal";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
  hideCTA?: boolean;
};

export function PageHero({
  eyebrow,
  title,
  description,
  ctaLabel = "Agendar atendimento",
  ctaHref = "/contato",
  backgroundImage,
  hideCTA = false,
}: PageHeroProps & { backgroundImage?: string }) {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 group min-h-[60dvh] flex items-center">
        {/* Cinematic Background */}
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none bg-background">
          {backgroundImage && backgroundImage !== "" && (
            <img 
              src={backgroundImage} 
              alt=""
              className="absolute inset-0 h-full w-full object-cover opacity-100"
              onError={(e) => (e.currentTarget.style.display = 'none')}
            />
          )}
          
          {/* Overlays consistent with Home Hero */}
          <div className="absolute inset-0 bg-black/10 backdrop-brightness-[1.05] transition-opacity duration-1000 group-hover:opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-white/10 opacity-95" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-background/40" />
          <div className="absolute inset-0 bg-noise-overlay opacity-10 mix-blend-overlay pointer-events-none" />
          
          {/* Edge Feathering Fade */}
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent z-[5]" />
        </div>

      <div className="container relative z-10 mx-auto max-w-6xl rounded-[2.6rem] border border-white/10 bg-white/[0.03] backdrop-blur-3xl px-7 py-10 shadow-[0_30px_120px_-55px_rgba(39,51,46,0.3)] md:px-12 md:py-14">
        <div className={hideCTA ? "max-w-4xl" : "grid gap-10 lg:grid-cols-[1.15fr,0.85fr] lg:items-end"}>
          <Reveal className="space-y-6">
            <div className="inline-flex items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.34em] text-[hsl(var(--primary)/0.62)]">
              <span className="h-px w-10 bg-primary/25" />
              <span className="font-mono-data tracking-[0.28em]">{eyebrow}</span>
            </div>
            <h1 className="max-w-4xl font-display text-5xl leading-[0.92] text-primary sm:text-6xl lg:text-8xl hero-title-shadow">
              {title}
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-primary font-medium [text-wrap:balance]">
              {description}
            </p>
          </Reveal>

          {!hideCTA && (
            <Reveal delay={0.08} className="metric-card p-6 sm:p-7">
              <p className="font-mono-data text-[11px] uppercase tracking-[0.3em] text-[hsl(var(--primary)/0.52)]">
                contato rapido
              </p>
              <p className="mt-4 text-sm leading-7 text-[hsl(var(--primary)/0.66)]">
                Estrutura pensada para transformar interesse em agendamento com rapidez, clareza e percepção premium.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row lg:flex-col">
                <Link
                  to={ctaHref}
                  className="premium-button-new !bg-accent !text-white !border-none !py-4 group"
                >
                  <span className="btn-text !text-white !text-sm !tracking-widest">{ctaLabel}</span>
                  <div className="btn-icon-circle !bg-white !text-accent shadow-none">
                    <ArrowUpRight className="h-5 w-5 stroke-[2.5px]" />
                  </div>
                </Link>
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
