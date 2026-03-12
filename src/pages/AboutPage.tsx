import { Check, HeartHandshake, ShieldCheck, Sparkles, Stethoscope, Users, Clock } from "lucide-react";
import { Link } from "react-router-dom";

import { clinic } from "@/data/siteContent";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionIntro } from "@/components/site/SectionIntro";

export default function AboutPage() {
  return (
    <div className="pb-8">
      <PageHero
        eyebrow="Sobre a Clínica"
        title="Cuidado veterinário que une ciência, empatia e excelência."
        description="Conheça a história, os valores e a filosofia que fazem da Aura Vet referência em medicina veterinária no Jardim Paulista."
      />

      {/* ═══ NOSSA HISTÓRIA ═══ */}
      <section className="section-shell">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal className="space-y-6">
            <SectionIntro
              eyebrow="Nossa História"
              title="A Aura Vet nasceu do desejo de oferecer algo melhor."
              description="Fundada por veterinários apaixonados, nossa clínica surgiu da percepção de que tutores mereciam mais: mais clareza, mais acolhimento e mais excelência médica."
            />
            <div className="space-y-4 text-base leading-8 text-primary/70">
              <p>
                Desde o primeiro contato, cada detalhe da experiência foi pensado para transmitir segurança e confiança. Nosso ambiente une o rigor médico necessário ao conforto que pets e tutores merecem.
              </p>
              <p>
                Acreditamos que a medicina veterinária de qualidade vai além do diagnóstico: envolve comunicação transparente, acompanhamento contínuo e um compromisso genuíno com a longevidade e qualidade de vida de cada paciente.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="card-surface overflow-hidden p-4">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={clinic.media.environment}
                alt="Interior da Aura Vet"
                className="h-[480px] w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-white/20 bg-white/10 p-5 text-white backdrop-blur-xl">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/70">Nosso Espaço</p>
                <p className="mt-2 font-display text-2xl leading-tight">
                  Infraestrutura moderna, acolhedora e preparada para cuidar.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ VALORES ═══ */}
      <section className="section-shell bg-primary/[0.02]">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionIntro
              eyebrow="Nossos Valores"
              title="O que guia cada decisão na Aura Vet."
              description="Nossos valores não são apenas palavras — são os pilares que sustentam cada atendimento, cada diagnóstico e cada interação com os tutores."
            />
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: HeartHandshake,
                title: "Acolhimento Genuíno",
                text: "Recebemos cada tutor e pet com empatia real, criando um ambiente onde ambos se sintam seguros e confortáveis.",
              },
              {
                icon: ShieldCheck,
                title: "Conduta Médica Rigorosa",
                text: "Cada diagnóstico é baseado em evidências, cada tratamento é explicado com clareza e cada decisão prioriza o bem-estar do paciente.",
              },
              {
                icon: Sparkles,
                title: "Excelência Contínua",
                text: "Investimos em atualização constante, equipamentos de ponta e protocolos que garantem o mais alto padrão de cuidado veterinário.",
              },
            ].map((item, index) => (
              <Reveal key={item.title} delay={index * 0.06} className="card-surface p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15 text-accent">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-primary">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-primary/60">{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ DIFERENCIAIS ═══ */}
      <section className="section-shell">
        <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-2">
          <Reveal className="card-surface p-6">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary/50">
              Diferenciais da Estrutura
            </p>
            <div className="mt-5 space-y-3">
              {clinic.certifications.map((item) => (
                <div key={item} className="flex gap-3 rounded-2xl border border-primary/10 bg-primary/[0.02] p-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                    <Check className="h-4 w-4" />
                  </div>
                  <p className="text-sm leading-relaxed text-primary/70">{item}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08} className="card-surface p-6">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary/50">
              Nosso Compromisso
            </p>
            <h2 className="mt-4 font-display text-3xl leading-tight text-primary">
              Cuidado veterinário com presença premium e clareza total.
            </h2>
            <p className="mt-4 text-sm leading-7 text-primary/60">
              Nossa identidade visual combina tons confiáveis com um design sofisticado para criar uma experiência que inspira confiança desde o primeiro contato.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {[
                { icon: Stethoscope, label: "15+ Especialistas" },
                { icon: Users, label: "Equipe Multidisciplinar" },
                { icon: Clock, label: "Triagem 24h" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col items-center gap-2 rounded-2xl border border-primary/10 p-4 text-center">
                  <stat.icon className="h-5 w-5 text-accent" />
                  <p className="text-xs font-bold text-primary/70">{stat.label}</p>
                </div>
              ))}
            </div>
            <Link to="/contato" className="mt-6 premium-button w-full justify-center">
              Agende uma visita
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
