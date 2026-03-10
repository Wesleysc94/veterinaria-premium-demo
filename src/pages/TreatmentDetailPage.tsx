import { Link, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";

import { clinic, services } from "@/data/siteContent";
import { Reveal } from "@/components/site/Reveal";

export default function TreatmentDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return (
      <div className="px-6 pb-24 pt-36 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl rounded-[2rem] border border-primary/10 theme-adaptive-surface p-8 text-center shadow-[0_30px_120px_-60px_rgba(39,51,46,0.32)]">
          <h1 className="font-display text-5xl text-primary">Servico nao encontrado</h1>
          <p className="mt-4 text-base leading-8 text-primary/70">
            O servico solicitado nao esta cadastrado nesta demo veterinaria.
          </p>
          <button
            onClick={() => navigate("/servicos")}
            className="premium-button mt-8 inline-flex"
          >
            Voltar para servicos
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pb-10">
      <section className="px-6 pb-14 pt-32 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <button
            onClick={() => navigate("/servicos")}
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary/60 transition hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para servicos
          </button>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.08fr,0.92fr] lg:items-center">
            <Reveal className="space-y-6">
              <span className="inline-flex items-center gap-3 rounded-full theme-adaptive-surface px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-primary/70">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {service.category}
              </span>
              <h1 className="font-display text-5xl leading-[0.92] text-primary sm:text-6xl">
                {service.name}
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-primary/70">
                {service.excerpt}
              </p>
              <div className="flex flex-wrap gap-3 text-sm text-primary/60">
                <span className="rounded-full theme-adaptive-surface px-4 py-2 shadow-[0_18px_50px_-36px_rgba(39,51,46,0.35)]">
                  {service.availability}
                </span>
                <span className="rounded-full theme-adaptive-surface px-4 py-2 shadow-[0_18px_50px_-36px_rgba(39,51,46,0.35)]">
                  {service.idealFor}
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.12} className="card-surface overflow-hidden p-4">
              <div className="relative overflow-hidden rounded-[2rem]">
                <img
                  src={clinic.media.consultation}
                  alt={`Imagem ilustrativa do servico ${service.name}`}
                  className="h-[500px] w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(27,42,48,0.04),rgba(27,42,48,0.42))]" />
                <div className="absolute bottom-5 left-5 right-5 rounded-[1.4rem] border border-white/25 bg-white/20 p-5 text-white backdrop-blur">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/75">Protocolo veterinario</p>
                  <p className="mt-3 font-display text-4xl leading-none">{service.name}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="px-6 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.95fr,1.05fr]">
          <Reveal className="card-surface p-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-primary/70">
              Beneficios
            </p>
            <div className="mt-6 space-y-4">
              {service.benefits.map((item) => (
                <div key={item} className="flex gap-3 rounded-[1.35rem] border border-primary/10 bg-background/80 p-4">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-accent" />
                  <p className="text-sm leading-7 text-primary/70">{item}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08} className="card-surface p-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-primary/70">
              Quando procurar
            </p>
            <h2 className="mt-5 font-display text-4xl leading-none text-primary">
              {service.whenToSeek}
            </h2>
            <p className="mt-5 text-base leading-8 text-primary/70">
              O detalhamento do servico ajuda o tutor a reconhecer cenarios comuns, entender o valor da consulta e chegar mais preparado para a conversa com a equipe.
            </p>
            <div className="mt-8 space-y-4">
              {service.steps.map((step, index) => (
                <div key={step} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-primary">
                    {index + 1}
                  </div>
                  <p className="text-sm leading-7 text-primary/70">{step}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-10 sm:px-8 lg:px-12">
        <Reveal className="brand-panel mx-auto max-w-6xl rounded-[2.2rem] border border-white/15 px-8 py-10 shadow-[0_40px_120px_-60px_rgba(27,42,48,0.92)]">
          <div className="grid gap-8 lg:grid-cols-[1.2fr,0.8fr] lg:items-center">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-white/65">
                Agendamento
              </p>
              <h2 className="mt-4 font-display text-4xl leading-[0.95] text-white sm:text-5xl">
                Agende uma consulta e receba uma conduta clara para este atendimento.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/82">
                Contato rapido, orientacao objetiva e acompanhamento pensado para gerar seguranca ao tutor.
              </p>
            </div>
            <div className="space-y-4">
              <Link to="/contato" className="premium-button on-panel justify-center">
                Quero agendar
              </Link>
              <a
                href={clinic.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="premium-button-secondary on-panel justify-center"
              >
                Falar pelo WhatsApp
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
