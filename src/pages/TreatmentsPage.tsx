import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, HeartPulse } from "lucide-react";

import { clinic, services } from "@/data/siteContent";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionIntro } from "@/components/site/SectionIntro";

export default function TreatmentsPage() {
  return (
    <div className="pb-10">
      <PageHero
        eyebrow="Nossos Servicos"
        title="Medicina de precisao em cada especialidade."
        description="Oferecemos uma estrutura completa para que o tutor encontre tudo o que o pet precisa em um unico ecossistema de saude."
        backgroundImage="/hero-services.png"
      />

      <section className="section-shell-tight">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionIntro
              eyebrow="Grid de especialidades"
              title="Uma navegacao clara para tutores e um portifolio convincente para a clinica."
              description="Os cards abaixo equilibram leitura rapida com profundidade suficiente para gerar interesse, melhorar autoridade local e abrir espaco para campanhas por servico."
            />
          </Reveal>
          <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Reveal
                key={service.slug}
                delay={index * 0.12}
                className="card-surface group overflow-hidden p-0 transition-all duration-700 hover:-translate-y-3 hover:shadow-[0_50px_120px_-40px_rgba(var(--accent-rgb),0.15)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-background via-background/40 to-transparent" />
                  <div className="absolute top-6 left-6">
                    <span className="rounded-full bg-background/80 backdrop-blur-md px-4 py-1.5 text-[9px] font-bold uppercase tracking-[0.3em] text-primary border border-primary/10">
                      {service.category}
                    </span>
                  </div>
                </div>
                <div className="p-8 space-y-5">
                  <h2 className="font-display text-4xl leading-none text-primary transition-colors group-hover:text-accent">
                    {service.name}
                  </h2>
                  <p className="text-sm leading-relaxed text-primary/70 line-clamp-2 italic">
                    "{service.excerpt}"
                  </p>
                  <div className="h-px w-full bg-primary/5" />
                  <div className="space-y-3 text-[11px] uppercase tracking-[0.15em] font-bold text-primary/40">
                    <p className="flex items-center gap-2">
                       <span className="h-1 w-1 rounded-full bg-accent" />
                       Ideal para: <span className="text-primary/70">{service.idealFor}</span>
                    </p>
                    <p className="flex items-center gap-2">
                       <span className="h-1 w-1 rounded-full bg-accent" />
                       Disponibilidade: <span className="text-primary/70">{service.availability}</span>
                    </p>
                  </div>
                  
                  <Link
                    to={`/servicos/${service.slug}`}
                    className="premium-button-new !gap-3 !py-3 !px-6 !mt-6 group/btn"
                  >
                    <span className="btn-text !text-[10px]">Detalhes clínicos</span>
                    <div className="btn-icon-circle !h-7 !w-7">
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                    </div>
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell-tight">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.05fr,0.95fr]">
          <Reveal className="card-surface p-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-primary/70">
              Como funciona o cuidado preventivo
            </p>
            <div className="mt-6 space-y-5">
              {clinic.visitSteps.map((item, index) => (
                <div key={item.title} className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent/10 text-primary">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-primary/70">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08} className="card-surface overflow-hidden p-4">
            <div className="relative overflow-hidden rounded-[2rem]">
              <img
                src={clinic.media.diagnostics}
                alt="Exames e diagnostico veterinario"
                className="h-[420px] w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(27,42,48,0.08),rgba(27,42,48,0.4))]" />
              <div className="absolute bottom-5 left-5 right-5 rounded-[1.4rem] border border-white/25 bg-white/20 p-5 text-white backdrop-blur">
                <p className="text-xs uppercase tracking-[0.3em] text-white/70">Check-up premium</p>
                <p className="mt-3 font-display text-4xl leading-none">Menos urgencia evitavel, mais prevencao organizada.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-shell-tight">
        <Reveal className="brand-panel mx-auto max-w-6xl rounded-[2.2rem] border border-white/15 px-8 py-10 shadow-[0_40px_120px_-60px_rgba(27,42,48,0.4)]">
          <div className="grid gap-8 lg:grid-cols-[1.2fr,0.8fr] lg:items-center">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.32em] opacity-60">
                CTA estrategico
              </p>
              <h2 className="mt-4 font-display text-4xl leading-[0.95] sm:text-5xl">
                Estruture a rotina do pet com consultas, vacinas e check-up acompanhados.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 opacity-80">
                O bloco final reforca conversao para clinicas que desejam vender cuidado continuo, nao apenas atendimento pontual.
              </p>
            </div>
            <div className="space-y-4">
              <Link to="/servicos/check-up-premium" className="premium-button-new group shadow-2xl shadow-accent/20">
                <span className="btn-text">Ver Detalhes Clínicos</span>
                <div className="btn-icon-circle">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </Link>
              <Link to="/emergencia" className="premium-button-new on-panel justify-center shadow-none !bg-red-500/10 !border-red-500/20 !text-red-500">
                <span className="btn-text">Ver emergência</span>
                <div className="btn-icon-circle !bg-red-500 !text-white">
                  <HeartPulse className="h-4 w-4" />
                </div>
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
