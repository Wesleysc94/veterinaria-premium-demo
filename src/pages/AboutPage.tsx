import { Check, HeartHandshake, ShieldCheck, Sparkles } from "lucide-react";

import { clinic } from "@/data/siteContent";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionIntro } from "@/components/site/SectionIntro";

export default function AboutPage() {
  return (
    <div className="pb-10">
      <PageHero
        eyebrow="Sobre a clinica"
        title="Uma marca veterinaria premium pensada para acolher, organizar e gerar confianca local."
        description="A pagina sobre apresenta historia, filosofia de cuidado, valores e diferenciais com o equilibrio certo entre proximidade e autoridade medica."
      />

      <section className="px-6 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr,1fr] lg:items-center">
          <Reveal className="space-y-7">
            <SectionIntro
              eyebrow="Nossa historia"
              title="A Aura Vet nasceu para unir cuidado veterinario serio e experiencia acolhedora."
              description="O conceito da marca parte de uma dor real do mercado: muitos tutores encontram clinicas frias demais ou comunicacao bonita demais, mas pouca clareza clinica. A proposta aqui e equilibrar os dois lados."
            />
            <div className="space-y-4 text-base leading-8 text-primary/80">
              <p>
                Desde o primeiro contato, a experiencia foi desenhada para fazer o tutor sentir que existe metodo, atencao e previsibilidade. A identidade premium reforca limpeza, calma e organizacao sem cair no visual hospitalar rigido.
              </p>
              <p>
                A narrativa da marca valoriza pets de familia, check-up preventivo, atendimento de rotina, especialidades e urgencia bem orientada. Isso torna a demo relevante para clinicas gerais, hospitais boutique e operacoes premium de pet care.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="card-surface overflow-hidden p-4">
            <div className="relative overflow-hidden rounded-[2rem]">
              <img
                src="/assets/about/environment.png"
                alt="Fachada premium da Aura Vet"
                className="h-[560px] w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(27,42,48,0.1),rgba(27,42,48,0.5))]" />
              <div className="absolute bottom-6 left-6 right-6 rounded-[1.6rem] border border-white/30 bg-white/20 p-5 text-white backdrop-blur-md">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-white">Estrutura premium</p>
                <h2 className="mt-3 font-display text-4xl leading-none">Clinica organizada, acolhedora e localmente forte.</h2>
                <p className="mt-4 text-sm leading-7 text-white">
                  Consultorios claros, fluxo de triagem, area de observacao e comunicacao pensada para tutores que valorizam confianca e agilidade.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionIntro
              eyebrow="Filosofia de cuidado"
              title="O pet esta no centro, mas o tutor tambem precisa ser orientado com clareza."
              description="Nesta demo, a filosofia da clinica reforca responsabilidade medica, prevencao inteligente e uma experiencia emocionalmente segura para familias."
            />
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                icon: HeartHandshake,
                text: "Acolhimento real para pets e tutores, sem infantilizacao ou excessos de linguagem.",
              },
              {
                icon: ShieldCheck,
                text: "Conduta medica organizada, explicada com objetividade e reforcada por follow-up.",
              },
              {
                icon: Sparkles,
                text: "Ambiente premium e identidade visual sofisticada para parecer marca forte, nao template barato.",
              },
            ].map((item, index) => (
              <Reveal key={item.text} delay={index * 0.06} className="card-surface p-6">
                <item.icon className="h-5 w-5 text-accent" />
                <p className="mt-5 text-base leading-relaxed text-primary/80">{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.05fr,0.95fr]">
          <Reveal className="card-surface p-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-primary/70">
              Diferenciais da estrutura
            </p>
            <div className="mt-6 space-y-4">
              {clinic.certifications.map((item) => (
                <div key={item} className="flex gap-3 rounded-[1.35rem] border border-primary/20 bg-background/50 p-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/20 text-primary">
                    <Check className="h-4 w-4" />
                  </div>
                  <p className="text-sm leading-relaxed text-primary/90">{item}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08} className="card-surface p-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-primary/70">
              Posicionamento da marca
            </p>
            <h2 className="mt-5 font-display text-4xl leading-none text-primary">
              Cuidado veterinario com presenca premium, clareza local e valor percebido alto.
            </h2>
            <p className="mt-5 text-base leading-8 text-primary/70">
              O branding mistura azul confiavel, verde salvia e neutros quentes para criar um visual clinico, acolhedor e sofisticado. A tipografia editorial traz presenca, enquanto a navegacao e objetiva para ajudar conversao.
            </p>
            <div className="mt-8 space-y-3 text-sm leading-7 text-primary/80">
              <p>Hero emocional com CTA forte e urgencia visivel.</p>
              <p>Arquitetura pronta para SEO local, blog e paginas de especialidade.</p>
              <p>Mobile pensado para quem busca contato rapido, mapa e WhatsApp.</p>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
