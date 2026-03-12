import { HeartHandshake, ShieldCheck } from "lucide-react";

import { clinic, team } from "@/data/siteContent";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionIntro } from "@/components/site/SectionIntro";

export default function TeamPage() {
  return (
    <div className="pb-10">
      <PageHero
        eyebrow="Equipe veterinaria"
        title="Um corpo clinico apresentado com autoridade, proximidade e especialidades bem posicionadas."
        description="Mostrar nomes, areas de atuacao e formacao reduz incerteza, aumenta confianca e faz a clinica parecer real para tutores e proprietarios avaliando a demo."
      />

      <section className="section-shell-tight">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionIntro
              eyebrow="Corpo clinico"
              title="Profissionais que reforcam seguranca medica e acolhimento em todas as fases do atendimento."
              description="A pagina de equipe foi desenhada para funcionar tanto como prova de autoridade quanto como bloco emocional: o tutor ve rostos, especialidades e entende que existe uma operacao organizada por tras da marca."
            />
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {team.map((member, index) => (
              <Reveal key={member.name} delay={index * 0.05} className="card-surface overflow-hidden p-4">
                <div className="grid gap-6 lg:grid-cols-[0.45fr,0.55fr] lg:items-center">
                  <div className="overflow-hidden rounded-[1.7rem]">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-[360px] w-full object-cover object-center"
                    />
                  </div>
                  <div className="space-y-4 pr-2">
                    <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-accent">
                      {member.role}
                    </p>
                    <h2 className="font-display text-4xl leading-none text-primary">{member.name}</h2>
                    <p className="text-sm font-semibold leading-7 text-primary/90">{member.specialty}</p>
                    <p className="text-sm leading-7 text-primary/80">{member.education}</p>
                    <p className="text-sm leading-7 text-primary/70">{member.bio}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell-tight">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1fr,1fr]">
          <Reveal className="card-surface p-7">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent/10 text-primary">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-primary/70">
                  Cultura clinica
                </p>
                <h2 className="mt-3 font-display text-4xl leading-none text-primary">
                  Alinhamento tecnico, triagem organizada e comunicacao clara em toda a jornada.
                </h2>
                <p className="mt-5 text-base leading-8 text-primary/70">
                  A pagina mostra que a experiencia premium nao depende apenas do visual. Ela e sustentada por processos, equipe bem posicionada e uma narrativa coerente de cuidado continuo.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="card-surface p-7">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent/10 text-primary">
                <HeartHandshake className="h-5 w-5" />
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-primary/70">
                  Humanizacao
                </p>
                <h2 className="mt-3 font-display text-4xl leading-none text-primary">
                  O tutor entende quem vai cuidar do pet e isso muda a confianca na decisao.
                </h2>
                <p className="mt-5 text-base leading-8 text-primary/70">
                  Em segmentos premium, exibir a equipe com esse nivel de detalhe costuma aumentar o valor percebido do atendimento e diminuir objecoes antes do agendamento.
                </p>
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
                Prova de autoridade
              </p>
              <h2 className="mt-4 font-display text-4xl leading-[0.95] sm:text-5xl">
                Equipe bem apresentada gera mais seguranca antes mesmo do primeiro contato.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 opacity-80">
                A combinacao de fotos, especialidades e copy humana deixa o site pronto para clinicas que valorizam relacionamento, medicina de familia e posicionamento premium.
              </p>
            </div>
            <div className="space-y-4">
              <p className="rounded-[1.5rem] border border-white/10 bg-white/10 px-5 py-4 text-sm leading-7 opacity-90">
                {clinic.certifications[0]}
              </p>
              <p className="rounded-[1.5rem] border border-white/10 bg-white/10 px-5 py-4 text-sm leading-7 opacity-90">
                {clinic.certifications[1]}
              </p>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
