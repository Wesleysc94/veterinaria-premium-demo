import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CalendarClock,
  CheckCircle2,
  Clock3,
  HeartHandshake,
  MapPin,
  Phone,
  ShieldCheck,
  Siren,
  Star,
} from "lucide-react";

import { blogPosts, clinic, services, team } from "@/data/siteContent";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/site/Reveal";
import { SectionIntro } from "@/components/site/SectionIntro";
import { useScrollParallax } from "@/hooks/useScrollParallax";

const featuredServices = services.slice(0, 4);
const featuredTeam = team.slice(0, 3);
const latestPosts = blogPosts.slice(0, 3);

export default function HomePage() {
  return (
    <div className="pb-8 relative overflow-hidden">
      {/* ─── CINEMATIC OVERLAYS ─── */}
      <div className="noise-texture" />

      {/* ═══════════════════════════════════════════════════════════════
          A. HERO — "A Cena de Abertura" (fullscreen cinematográfico)
          ═══════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
        {/* Background Video (Cinematic Standard) */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-background" />
          <div className="video-hero-container absolute inset-0">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover grayscale-[0.1] brightness-[0.6] contrast-[1.05]"
            >
              <source src="https://player.vimeo.com/external/459389137.hd.mp4?s=875d30a17079a1f07ea3834608b760a5e016f468&profile_id=175&oauth2_token_id=57447761" type="video/mp4" />
              {/* Fallback para imagem se o vídeo não carregar ou não existir */}
              <img
                src={clinic.media.hero}
                alt="Fundo cinematográfico premium"
                className="h-full w-full object-cover opacity-40"
              />
            </video>
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.7)_100%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
        </div>

        {/* Cinematic Content — Lumina Rhythm */}
        <div className="relative z-10 w-full px-6 pt-32 pb-16 text-center lg:px-12">
          <div className="mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
              className="space-y-8"
            >
              <div className="flex flex-col items-center gap-4">
                <span className="luxury-chip px-5 py-2 border-white/10 bg-white/[0.04] text-[10px] uppercase tracking-[0.45em] text-white/50 backdrop-blur-xl">
                  {clinic.badge}
                </span>
                <span className="h-16 w-px bg-gradient-to-b from-white/20 to-transparent" />
              </div>

              <h1 className="font-display text-[3.2rem] font-semibold leading-[0.95] tracking-tight text-white sm:text-[6rem] lg:text-[7.5rem]">
                Cuidado e <br />
                <span className="font-display italic text-white/90">Excelência.</span>
              </h1>

              <p className="mx-auto mt-10 max-w-2xl text-lg leading-relaxed text-white/60 tracking-wide sm:text-xl">
                Medicina veterinária de precisão e hospitalidade premium. <br className="hidden sm:block" />
                Desenhamos cada detalhe para o bem-estar absoluto do seu pet.
              </p>

              <div className="mt-14 flex flex-col items-center justify-center gap-5 sm:flex-row w-full px-4 sm:px-0">
                <Link to="/contato" className="premium-button w-full sm:w-auto px-6 justify-center !text-[11px] uppercase tracking-widest whitespace-nowrap">
                  Agendar avaliação
                </Link>
                <a 
                  href={clinic.whatsapp} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="premium-button-secondary w-full sm:w-auto px-6 justify-center border-white/10 bg-white/5 text-white hover:bg-white/10 !text-[11px] uppercase tracking-widest whitespace-nowrap"
                >
                  Falar com especialista
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Viewport Indicator */}
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-12 flex flex-col items-center gap-3 text-white/20"
        >
          <span className="text-[10px] uppercase tracking-[0.4em]">Explorar</span>
          <div className="h-10 w-px bg-gradient-to-b from-white/30 to-transparent" />
        </motion.div>
      </section>

      <section className="section-shell">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[0.82fr,0.18fr] lg:items-end">
            <Reveal>
              <SectionIntro
                eyebrow="Especialidades em foco"
                title="Servicos apresentados com mais criterio, ritmo e valor percebido."
                description="A home prioriza os atendimentos que melhor posicionam a clinica como referencia local em medicina de familia, prevencao e suporte de maior complexidade."
              />
            </Reveal>

            <Reveal delay={0.08} className="flex justify-start lg:justify-end">
              <Link to="/servicos" className="premium-button-secondary">
                Ver todos os servicos
              </Link>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {featuredServices.map((service, index) => (
              <Reveal
                key={service.slug}
                delay={index * 0.08}
                className="card-surface group editorial-frame p-0"
              >
                <div className="relative aspect-[16/11] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent" />
                  <div className="absolute left-5 top-5 flex items-center gap-2">
                    <span className="rounded-full bg-background/90 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.34em] text-primary backdrop-blur-md border border-primary/5">
                      {service.category}
                    </span>
                  </div>
                </div>
                <div className="soft-divider mx-auto w-[85%]" />
                <div className="space-y-4 p-7">
                  <div>
                    <h3 className="font-display text-[2.2rem] leading-none text-primary">
                      {service.name}
                    </h3>
                    <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent/80">0{index + 1} — critério médico</p>
                  </div>

                  <div className="rounded-[1.4rem] border border-primary/5 bg-primary/[0.01] px-5 py-5">
                    <p className="font-mono-data text-[9px] uppercase tracking-[0.3em] text-[hsl(var(--primary)/0.4)]">
                      indicação clínica
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-[hsl(var(--primary)/0.66)]">{service.whenToSeek}</p>
                  </div>

                  <Link
                    to={`/servicos/${service.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary transition group-hover:text-accent"
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

      <section className="section-shell bg-primary/[0.02]">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.84fr,1.16fr] lg:items-center">
          <Reveal className="card-surface overflow-hidden p-4">
            <div className="relative overflow-hidden rounded-[2.3rem]">
              <img
                src={clinic.media.environment}
                alt="Recepcao da clinica veterinaria"
                className="h-[500px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/55 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 rounded-[1.6rem] border border-white/18 bg-[rgba(244,241,235,0.16)] p-5 text-white backdrop-blur-xl">
                <p className="font-mono-data text-[10px] uppercase tracking-[0.3em] text-white/70">
                  ambiente e experiencia
                </p>
                <p className="mt-3 font-display text-3xl leading-tight">
                  Design acolhedor, fluxo organizado e uma atmosfera que reduz a tensao do tutor.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="space-y-8">
            <SectionIntro
              eyebrow="Por que Aura Vet"
              title="A uniao entre ciencia, hospitalidade e clareza de processo."
              description="O site deixa visivel aquilo que um tutor premium procura: equipe competente, estrutura confiavel e uma experiencia que transmite controle sem perder afeto."
            />

            <div className="grid gap-4 sm:grid-cols-2">
              {clinic.trustPillars.map((item) => (
                <div key={item.title} className="metric-card">
                  <div className="flex gap-3">
                    <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <div>
                      <p className="text-lg font-bold leading-tight text-primary">{item.title}</p>
                      <p className="mt-2 text-sm leading-relaxed text-[hsl(var(--primary)/0.64)]">{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Link to="/sobre" className="premium-button">
              Conhecer nossa historia
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section-shell">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.02fr,0.98fr] lg:items-start">
          <Reveal className="space-y-8">
            <SectionIntro
              eyebrow="Primeira visita"
              title="A experiencia premium comeca antes da consulta entrar na sala."
              description="A jornada do paciente foi organizada para que o tutor entenda o proximo passo, o pet seja recebido com menos estresse e a equipe tenha contexto para conduzir o atendimento com mais precisao."
            />

            <div className="space-y-4">
              {clinic.visitSteps.map((item, index) => (
                <div key={item.title} className="metric-card">
                  <div className="flex gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-white">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-primary">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-[hsl(var(--primary)/0.64)]">{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.12} className="card-surface overflow-hidden p-4">
            <div className="overflow-hidden rounded-[2.3rem]">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={clinic.media.species}
                  alt="Paciente filhote em ambiente veterinario acolhedor"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/45 to-transparent" />
              </div>

              <div className="grid gap-4 p-5 sm:grid-cols-2">
                {clinic.species.map((item) => (
                  <div
                    key={item.name}
                    className="rounded-[1.45rem] border border-primary/10 bg-[hsl(var(--background)/0.78)] px-4 py-4 backdrop-blur-md"
                  >
                    <p className="font-mono-data text-[10px] uppercase tracking-[0.28em] text-[hsl(var(--primary)/0.44)]">
                      {item.label}
                    </p>
                    <h3 className="mt-3 font-display text-[1.9rem] leading-tight text-primary">
                      {item.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[hsl(var(--primary)/0.62)]">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-shell bg-primary/[0.02]">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[0.86fr,1.14fr] lg:items-end">
            <Reveal>
              <SectionIntro
                eyebrow="Equipe veterinaria"
                title="Rostos, especialidades e autoridade apresentados com mais presenca."
                description="A equipe e tratada como parte central da marca. Isso aumenta confianca, reduz incerteza e faz a clinica parecer pronta para um publico mais exigente."
              />
            </Reveal>

            <Reveal delay={0.08} className="grid gap-3 sm:grid-cols-2">
              {clinic.certifications.slice(0, 2).map((item) => (
                <div key={item} className="metric-card">
                  <p className="text-sm leading-relaxed text-[hsl(var(--primary)/0.68)]">{item}</p>
                </div>
              ))}
            </Reveal>
          </div>

          <div className="mt-12 grid gap-5 xl:grid-cols-3">
            {featuredTeam.map((member, index) => (
              <Reveal key={member.name} delay={index * 0.06} className="card-surface overflow-hidden p-4">
                <div className="overflow-hidden rounded-[1.9rem]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-[370px] w-full object-cover object-center"
                  />
                </div>
                <div className="space-y-3 px-2 pb-2 pt-5">
                  <p className="font-mono-data text-[10px] uppercase tracking-[0.3em] text-accent">
                    {member.role}
                  </p>
                  <h3 className="font-display text-[2rem] leading-tight text-primary">{member.name}</h3>
                  <p className="text-sm font-semibold leading-relaxed text-primary/80">
                    {member.specialty}
                  </p>
                  <p className="text-sm leading-relaxed text-[hsl(var(--primary)/0.62)]">{member.bio}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-8 flex justify-center">
            <Link to="/equipe" className="premium-button-secondary">
              Ver corpo clinico completo
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section-shell">
        <div className="brand-panel-muted mx-auto max-w-6xl rounded-[2.8rem] border border-white/12 px-6 py-6 shadow-[0_40px_120px_-60px_rgba(27,42,48,0.45)] sm:px-8 lg:px-10 lg:py-10">
          <div className="grid gap-10 lg:grid-cols-[0.82fr,1.18fr] lg:items-center">
            <Reveal className="card-surface overflow-hidden border-white/10 bg-white/[0.06] p-4">
              <div className="relative overflow-hidden rounded-[2rem]">
                <img
                  src={clinic.media.emergency}
                  alt="Central de urgencia veterinaria"
                  className="h-[420px] w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/82 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 rounded-[1.5rem] border border-white/18 bg-white/[0.12] p-5 text-white backdrop-blur-xl">
                  <p className="font-mono-data text-[10px] uppercase tracking-[0.3em] text-white/70">
                    urgencia e triagem
                  </p>
                  <p className="mt-3 font-display text-3xl leading-tight">
                    Quando cada minuto importa, a orientacao precisa ser imediata.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.12} className="space-y-8">
              <SectionIntro
                eyebrow="Central de urgencia"
                title="Agilidade e criterio para momentos em que o tutor nao pode hesitar."
                description="Sinais de alerta, contato rapido e linguagem objetiva deixam a percepcao da clinica mais forte e ajudam o tutor a agir com confianca."
                tone="inverse"
              />

              <div className="grid gap-4 sm:grid-cols-2">
                {clinic.emergencySignals.map((item) => (
                  <div key={item.title} className="rounded-[1.7rem] border border-white/10 bg-white/[0.08] p-5">
                    <div className="flex gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/[0.16] text-white">
                        <Siren className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold leading-tight text-white">{item.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-[rgb(255_255_255_/_0.72)]">{item.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a href={`tel:${clinic.emergencyPhone.replace(/\D/g, "")}`} className="premium-button on-panel">
                  <Phone className="h-5 w-5" />
                  Ligar para triagem
                </a>
                <Link to="/emergencia" className="premium-button-secondary on-panel">
                  Ver fluxo de socorro
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionIntro
              eyebrow="Depoimentos"
              title="Confiança real reforçada por experiências que fazem sentido para o nicho."
              description="O objetivo aqui é mostrar acolhimento, clareza de conduta e segurança médica sem cair em uma narrativa genérica."
            />
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {clinic.testimonials.map((testimonial, index) => (
              <Reveal key={testimonial.name} delay={index * 0.06} className="card-surface p-6">
                <div className="flex items-center gap-1 text-accent">
                  {[0, 1, 2, 3, 4].map((star) => (
                    <Star key={star} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-primary/70">
                  "{testimonial.quote}"
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-primary">{testimonial.name}</p>
                    <p className="text-xs text-accent">{testimonial.role}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-primary/[0.02]">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[0.82fr,0.18fr] lg:items-end">
            <Reveal>
              <SectionIntro
                eyebrow="Conteudo e SEO local"
                title="Artigos que ajudam a clinica a parecer mais util, atual e preparada."
                description="A secao de conteudo reforca autoridade, amplia oportunidades de busca local e ajuda a demo a parecer pronta para marketing organico."
              />
            </Reveal>

            <Reveal delay={0.08} className="flex justify-start lg:justify-end">
              <Link to="/conteudo" className="premium-button-secondary">
                Ver blog completo
              </Link>
            </Reveal>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {latestPosts.map((post, index) => (
              <Reveal
                key={post.slug}
                delay={index * 0.06}
                className="card-surface group overflow-hidden p-0"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/12 to-transparent" />
                  <div className="absolute left-4 top-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-white">
                    <span className="rounded-full border border-white/20 bg-black/20 px-3 py-1 backdrop-blur-md">
                      {post.category}
                    </span>
                    <span className="rounded-full border border-white/20 bg-black/20 px-3 py-1 font-mono-data backdrop-blur-md">
                      {post.readTime}
                    </span>
                  </div>
                </div>

                <div className="space-y-4 p-6">
                  <h3 className="font-display text-[2rem] leading-tight text-primary transition-colors group-hover:text-accent">
                    {post.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[hsl(var(--primary)/0.64)]">{post.excerpt}</p>
                  <Link
                    to="/conteudo"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary transition group-hover:text-accent"
                  >
                    Ler artigo
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr,1.1fr] lg:items-start">
          <Reveal className="space-y-6">
            <SectionIntro
              eyebrow="Perguntas frequentes"
              title="Transparencia suficiente para o tutor se sentir amparado antes do agendamento."
              description="Em um nicho sensivel como o veterinario, clareza vale muito. Este bloco antecipa duvidas importantes e reforca organizacao."
            />
            <div className="space-y-3">
              {clinic.highlights.map((item) => (
                <div key={item} className="metric-card">
                  <div className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <p className="text-sm leading-relaxed text-primary/70">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.12} className="card-surface p-6">
            <Accordion type="single" collapsible className="space-y-3">
              {clinic.faqs.map((item, index) => (
                <AccordionItem
                  key={item.question}
                  value={`faq-${index}`}
                  className="rounded-[1.5rem] border border-primary/10 px-5 py-1"
                >
                  <AccordionTrigger className="text-left text-base font-bold text-primary hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 pt-2 text-sm leading-relaxed text-[hsl(var(--primary)/0.62)]">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      <section className="section-shell-tight">
        <Reveal className="brand-panel mx-auto max-w-6xl rounded-[2.7rem] border border-white/15 px-8 py-12 shadow-[0_40px_120px_-60px_rgba(27,42,48,0.5)] sm:px-10 lg:px-12 lg:py-14">
          <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
            <div className="space-y-5">
              <p className="font-mono-data text-[11px] uppercase tracking-[0.34em] text-[rgb(255_255_255_/_0.62)]">
                contato imediato
              </p>
              <h2 className="font-display text-4xl leading-[0.94] text-white sm:text-5xl lg:text-6xl">
                Uma presenca premium que convida ao agendamento e transmite calma.
              </h2>
              <p className="max-w-2xl text-base leading-8 text-[rgb(255_255_255_/_0.76)]">
                O fechamento da home reforca localizacao, contato e proximidade humana para que a
                decisao de marcar a consulta pareca natural e segura.
              </p>
              <div className="grid gap-3 text-sm text-[rgb(255_255_255_/_0.76)] sm:grid-cols-2">
                <p className="rounded-[1.4rem] border border-white/10 bg-white/[0.08] px-4 py-4">
                  {clinic.address}
                </p>
                <p className="rounded-[1.4rem] border border-white/10 bg-white/[0.08] px-4 py-4">
                  {clinic.phone} · {clinic.hours[0]}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <Link to="/contato" className="premium-button on-panel justify-center">
                Agendar consulta
              </Link>
              <Link to="/emergencia" className="premium-button-secondary on-panel justify-center">
                Ver central de urgencia
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
