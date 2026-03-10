import { Link } from "react-router-dom";
import { ArrowUpRight, HeartPulse } from "lucide-react";

import { clinic, services } from "@/data/siteContent";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionIntro } from "@/components/site/SectionIntro";

export default function TreatmentsPage() {
  return (
    <div className="pb-10">
      <PageHero
        eyebrow="Servicos e especialidades"
        title="Consultas, prevencao, exames, cirurgia e urgencia apresentados com clareza premium."
        description="A pagina de servicos foi desenhada para ajudar a clinica a parecer completa, organizada e segura. Cada bloco explica quando procurar, beneficios e disponibilidade de forma facil de escanear."
      />

      <section className="px-6 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionIntro
              eyebrow="Grid de especialidades"
              title="Uma navegacao clara para tutores e um portifolio convincente para a clinica."
              description="Os cards abaixo equilibram leitura rapida com profundidade suficiente para gerar interesse, melhorar autoridade local e abrir espaco para campanhas por servico."
            />
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <Reveal
                key={service.slug}
                delay={index * 0.04}
                className="card-surface group overflow-hidden p-0"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                </div>
                <div className="p-6">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.28em] text-primary">
                    {service.category}
                  </span>
                  <h2 className="mt-5 font-display text-3xl leading-none text-primary">
                    {service.name}
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-primary/80">{service.excerpt}</p>
                  <div className="mt-5 space-y-2 text-sm text-primary/70">
                    <p><span className="font-bold">Ideal para:</span> {service.idealFor}</p>
                    <p><span className="font-bold">Disponibilidade:</span> {service.availability}</p>
                  </div>
                  <Link
                    to={`/servicos/${service.slug}`}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary hover:text-accent transition-colors"
                  >
                    Ver detalhe do servico
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-10 sm:px-8 lg:px-12">
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

      <section className="px-6 py-10 sm:px-8 lg:px-12">
        <Reveal className="mx-auto max-w-6xl rounded-[2.2rem] border border-primary/10 bg-primary px-8 py-10 theme-adaptive-surface text-primary-foreground shadow-[0_40px_120px_-60px_rgba(27,42,48,0.4)]">
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
              <Link to="/contato" className="premium-button light justify-center shadow-none hover:shadow-xl">
                Falar com a equipe
              </Link>
              <Link to="/emergencia" className="premium-button-secondary dark justify-center shadow-none border-white/20 text-white">
                <HeartPulse className="h-4 w-4" />
                Ver emergencia
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
