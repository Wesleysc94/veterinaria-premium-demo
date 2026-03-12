import { Link } from "react-router-dom";
import { Phone, ShieldAlert, Siren } from "lucide-react";

import { clinic } from "@/data/siteContent";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionIntro } from "@/components/site/SectionIntro";

export default function EmergencyPage() {
  return (
    <div className="pb-10">
      <PageHero
        eyebrow="Emergencia e atendimento rapido"
        title="Uma pagina desenhada para orientar tutores em momentos de pressao sem perder clareza."
        description="O objetivo desta area e deixar sinais de alerta, canais de contato e fluxo de triagem visiveis em poucos segundos, principalmente no mobile."
        ctaLabel="Ver canais de atendimento"
        ctaHref="/contato"
      />

      <section className="section-shell-tight">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr,1fr] lg:items-start">
          <Reveal className="card-surface overflow-hidden p-4">
            <div className="relative overflow-hidden rounded-[2rem]">
              <img
                src={clinic.media.emergency}
                alt="Fluxo de emergencia veterinaria"
                className="h-[420px] w-full object-cover object-center md:h-[520px]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(27,42,48,0.12),rgba(22,33,29,0.54))]" />
              <div className="absolute bottom-5 left-5 right-5 rounded-[1.5rem] border border-white/25 bg-white/20 p-5 text-white backdrop-blur">
                <p className="text-xs uppercase tracking-[0.3em] text-white/75">Canal de urgencia</p>
                <p className="mt-3 font-display text-4xl leading-none">Contato visivel para agir rapido com mais seguranca.</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="space-y-7">
            <SectionIntro
              eyebrow="Sinais de alerta"
              title="Respiracao alterada, trauma, convulsao ou sangramento pedem orientacao imediata."
              description="Esta pagina existe para diminuir ambiguidade. O tutor encontra uma lista clara de sinais e entende que existe um canal preparado para dar a primeira orientacao."
              tone="default"
            />

            <div className="space-y-4">
              {clinic.emergencySignals.map((item, index) => (
                <div key={item.title} className="card-surface p-5">
                  <div className="flex gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/15 text-primary">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="text-xl font-semibold text-primary">{item.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-primary/70">{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-shell-tight">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1fr,1fr]">
          <Reveal className="card-surface p-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-primary/70">
              Como funciona a triagem
            </p>
            <div className="mt-6 space-y-5">
              {clinic.emergencyFlow.map((step, index) => (
                <div key={step} className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent/10 text-primary">
                    {index + 1}
                  </div>
                  <p className="text-sm leading-7 text-primary/70">{step}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08} className="card-surface p-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-primary/70">
              O que esta pagina resolve
            </p>
            <div className="mt-6 space-y-5">
              {[
                "Reduz o tempo ate o contato com a clinica em momentos sensiveis.",
                "Deixa claro que urgencia tem um fluxo proprio e nao fica escondida no rodape.",
                "Ajuda o site a parecer mais preparado para hospital veterinario, clinica com encaixe e atendimento rapido.",
              ].map((item) => (
                <div key={item} className="flex gap-3 rounded-[1.35rem] border border-primary/10 bg-background/80 p-4">
                  <ShieldAlert className="mt-1 h-5 w-5 text-accent" />
                  <p className="text-sm leading-7 text-primary/70">{item}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-shell-tight">
        <Reveal className="brand-panel mx-auto max-w-6xl rounded-[2.2rem] border border-white/15 px-8 py-10 shadow-[0_40px_120px_-60px_rgba(27,42,48,0.92)]">
          <div className="grid gap-8 lg:grid-cols-[1.2fr,0.8fr] lg:items-center">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[rgb(255_255_255_/_0.65)]">
                Contato imediato
              </p>
              <h2 className="mt-4 font-display text-4xl leading-[0.95] text-white sm:text-5xl">
                Quando houver duvida sobre gravidade, a melhor proxima acao precisa estar evidente.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/82">
                O CTA final combina design premium e urgencia funcional para ajudar o tutor a agir sem perder confianca.
              </p>
            </div>
            <div className="space-y-4">
              <a href={`tel:${clinic.emergencyPhone.replace(/\D/g, "")}`} className="premium-button on-panel justify-center">
                <Phone className="h-4 w-4" />
                {clinic.emergencyPhone}
              </a>
              <Link to="/contato" className="premium-button-secondary on-panel justify-center">
                <Siren className="h-4 w-4" />
                Falar com a clinica
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
