import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarClock,
  CheckCircle2,
  Clock3,
  HeartHandshake,
  MapPin,
  MessageCircleMore,
  Phone,
  ShieldCheck,
  Siren,
  Sparkles,
  Star,
  Stethoscope,
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

const featuredServices = services.slice(0, 6);
const featuredTeam = team.slice(0, 3);
const latestPosts = blogPosts.slice(0, 3);

export default function HomePage() {
  return (
    <div className="pb-10">
      <section className="relative overflow-hidden px-6 pb-16 pt-32 sm:px-8 lg:px-12 lg:pt-36">
        <div className="ambient-orb left-[-3rem] top-20 h-64 w-64 bg-[radial-gradient(circle_at_center,rgba(174,191,168,0.34),transparent_68%)]" />
        <div className="ambient-orb right-[2%] top-[16%] h-80 w-80 bg-[radial-gradient(circle_at_center,rgba(94,130,145,0.28),transparent_70%)]" />
        <div className="mx-auto grid max-w-6xl gap-14 xl:grid-cols-[0.92fr,1.08fr] xl:items-center">
          <Reveal className="space-y-8">
            <motion.span
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="inline-flex items-center gap-3 rounded-full border border-primary/10 bg-white/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-primary/70 shadow-[0_24px_60px_-40px_rgba(39,51,46,0.32)] backdrop-blur"
            >
              <Sparkles className="h-3.5 w-3.5 text-accent" />
              {clinic.badge}
            </motion.span>

            <div className="space-y-6">
              <h1 className="font-display text-5xl leading-[0.9] text-primary sm:text-6xl lg:text-8xl">
                Seu pet merece cuidado veterinario de nivel premium.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-primary/75">
                {clinic.tagline} Uma infraestrutura projetada para inspirar seguranca clinica,
                reduzir a ansiedade do seu pet e acolher sua familia em todos os momentos.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link to="/contato" className="premium-button button-shimmer justify-center">
                Agendar atendimento
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={clinic.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="premium-button-secondary button-shimmer justify-center"
              >
                <MessageCircleMore className="h-4 w-4" />
                WhatsApp da clinica
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {clinic.stats.map((item, index) => (
                <Reveal
                  key={item.label}
                  delay={0.08 * index}
                  className="card-surface interactive-card rounded-[1.75rem] p-5"
                >
                  <p className="text-2xl font-semibold text-primary">{item.value}</p>
                  <p className="mt-2 text-sm leading-6 text-primary/70">{item.label}</p>
                </Reveal>
              ))}
            </div>

            <div className="grid gap-4 sm:grid-cols-[1.05fr,0.95fr]">
              <motion.div whileHover={{ y: -5 }} className="glass-panel rounded-[1.8rem] p-5">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-full bg-accent/20 text-primary">
                    <CalendarClock className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.3em] text-primary/60">
                      Primeira visita
                    </p>
                    <p className="mt-2 text-sm leading-7 text-primary/70">
                      Triagem gentil, consulta organizada e plano de cuidado claro para o tutor sair seguro.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div whileHover={{ y: -5 }} className="glass-panel rounded-[1.8rem] p-5">
                <p className="text-[11px] uppercase tracking-[0.3em] text-primary/60">
                  Urgencia orientada
                </p>
                <div className="mt-3 flex items-center justify-between gap-4">
                  <p className="text-sm leading-7 text-primary/70">
                    Contato visivel para sinais de alerta, encaixe e direcionamento rapido.
                  </p>
                  <Siren className="h-4 w-4 shrink-0 text-accent" />
                </div>
              </motion.div>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="relative z-10 w-full flex flex-col gap-4">
            {/* Main Hero Image Panel */}
            <motion.div
              whileHover={{ y: -4 }}
              className="relative h-[480px] w-full overflow-hidden rounded-[2.1rem] border theme-adaptive-bg shadow-2xl"
            >
              <motion.div
                animate={{ scale: [1, 1.03, 1] }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <img
                  src={clinic.media.hero}
                  alt="Veterinaria acolhendo tutor e pet em ambiente premium"
                  className="h-full w-full object-cover object-center"
                />
              </motion.div>
              {/* Subtle gradient to ensure text readability if we put something over it, though we'll keep it minimal */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-10">
                <p className="text-[11px] uppercase tracking-[0.32em] text-white/80">
                  Padrao internacional
                </p>
                <p className="mt-2 font-display text-3xl leading-[1.1] text-white sm:text-4xl md:pr-6">
                  Mais do que uma clinica, um centro de cuidado completo.
                </p>
              </div>
            </motion.div>

            {/* Sub-cards Bento Grid */}
            <div className="grid gap-4 sm:grid-cols-2">
              <motion.div whileHover={{ y: -4 }} className="glass-panel flex flex-col justify-between rounded-[1.7rem] p-6 shadow-xl">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.32em] text-primary/70">
                    Pronto atendimento
                  </p>
                  <p className="mt-3 font-display text-2xl leading-[1.05] text-primary">
                    A clinica preparada para o que seu pet precisar.
                  </p>
                </div>
                <div className="mt-6 flex">
                  <Link to="/emergencia" className="premium-button text-xs">
                    Central de Urgencia
                  </Link>
                </div>
              </motion.div>

              <motion.div whileHover={{ y: -4 }} className="glass-panel flex flex-col justify-center rounded-[1.7rem] p-6 shadow-xl">
                <div className="flex items-center gap-5">
                  <div className="shrink-0 overflow-hidden rounded-full border-2 border-primary/10">
                    <img
                      src={clinic.media.consultation}
                      alt="Consulta veterinaria"
                      className="h-20 w-20 object-cover object-center"
                    />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.28em] text-primary/70">
                      Atendimento premium
                    </p>
                    <p className="mt-2 text-sm font-semibold leading-relaxed text-primary">
                      Consulta clara, humana e orientacao sem pressa.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Quick Info Bar */}
            <motion.div whileHover={{ y: -4 }} className="glass-panel flex flex-col sm:flex-row items-center justify-between rounded-[1.7rem] p-5 shadow-xl gap-4">
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <MapPin className="h-4 w-4" />
                </div>
                <p className="text-sm font-medium text-primary line-clamp-1">{clinic.location}</p>
              </div>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Phone className="h-4 w-4" />
                </div>
                <p className="text-sm font-medium text-primary truncate sm:max-w-max max-w-[120px]">{clinic.phone}</p>
              </div>
              <div className="hidden items-center gap-3 w-full lg:flex lg:w-auto">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Clock3 className="h-4 w-4" />
                </div>
                <p className="text-sm font-medium text-primary truncate md:max-w-max max-w-[150px]">{clinic.hours[0]}</p>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-14 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionIntro
              eyebrow="Servicos em destaque"
              title="Uma vitrine premium para consultas, prevencao, especialidades e urgencia."
              description="Os cards foram pensados para mostrar amplitude clinica, valor percebido e leitura rapida. A experiencia continua com paginas de detalhe que reforcam beneficios, quando procurar e CTA de agendamento."
            />
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {featuredServices.map((service, index) => (
              <Reveal
                key={service.slug}
                delay={index * 0.05}
                className="card-surface group p-6 transition duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-primary/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-primary/60">
                    {service.category}
                  </span>
                  <Stethoscope className="h-4 w-4 text-accent" />
                </div>
                <h3 className="mt-5 font-display text-3xl leading-none text-primary">
                  {service.name}
                </h3>
                <p className="mt-4 text-sm leading-7 text-primary/70">
                  {service.excerpt}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="rounded-full bg-background px-3 py-2 text-xs text-primary/70">
                    {service.availability}
                  </span>
                </div>
                <Link
                  to={`/servicos/${service.slug}`}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition group-hover:text-accent"
                >
                  Ver detalhes
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-14 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.94fr,1.06fr] lg:items-center">
          <Reveal className="card-surface overflow-hidden p-4">
            <div className="relative overflow-hidden rounded-[2rem]">
              <img
                src={clinic.media.specialist}
                alt="Medica veterinaria em atendimento premium"
                className="h-[520px] w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(27,42,48,0.05),rgba(27,42,48,0.42))]" />
              <div className="absolute bottom-5 left-5 rounded-[1.4rem] border border-white/25 bg-white/20 p-4 text-white backdrop-blur-md">
                <p className="text-xs uppercase tracking-[0.28em] text-white/75">Corpo clinico</p>
                <p className="mt-2 font-display text-3xl">Equipe multidisciplinar</p>
                <p className="mt-1 text-sm text-white/80">
                  Medicina de rotina, urgencia, cirurgia e prevencao.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="space-y-7">
            <SectionIntro
              eyebrow="Por que escolher a clinica"
              title="Confianca medica, acolhimento e organizacao apresentados com clareza."
              description="O posicionamento mistura linguagem clinica responsavel, experiencia premium e um tom humano que ajuda o tutor a sentir seguranca sem achar o site frio ou generico."
            />

            <div className="grid gap-4 sm:grid-cols-2">
              {clinic.trustPillars.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.5rem] border border-primary/10 bg-white/70 p-5 shadow-[0_22px_60px_-46px_rgba(39,51,46,0.32)]"
                >
                  <div className="flex gap-3">
                    <ShieldCheck className="mt-1 h-5 w-5 text-accent" />
                    <div>
                      <p className="text-lg font-semibold text-primary">{item.title}</p>
                      <p className="mt-2 text-sm leading-7 text-primary/70">{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Link to="/sobre" className="premium-button-secondary inline-flex">
              Conhecer a historia da clinica
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-14 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.02fr,0.98fr] lg:items-center">
          <Reveal className="space-y-6">
            <SectionIntro
              eyebrow="Primeira visita"
              title="Uma jornada pensada para deixar o tutor orientado e o pet mais tranquilo."
              description="Ao incorporar o bloco de primeira consulta, a demo aumenta valor percebido e mostra maturidade estrategica mesmo sem o cliente pedir esse diferencial explicitamente."
            />
            <div className="space-y-4">
              {clinic.visitSteps.map((item, index) => (
                <div
                  key={item.title}
                  className="flex gap-4 rounded-[1.5rem] border border-primary/10 bg-white/70 p-5"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/20 text-primary">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-2xl font-semibold text-primary">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-primary/70">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.12} className="card-surface overflow-hidden p-4">
            <div className="relative overflow-hidden rounded-[2rem]">
              <img
                src={clinic.media.species}
                alt="Pets de familia em ambiente acolhedor"
                className="h-[520px] w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(22,33,29,0.08),rgba(22,33,29,0.44))]" />
              <div className="absolute bottom-5 left-5 right-5 rounded-[1.5rem] border border-white/25 bg-white/20 p-5 text-white backdrop-blur">
                <p className="text-xs uppercase tracking-[0.3em] text-white/75">Especies atendidas</p>
                <p className="mt-3 font-display text-4xl leading-none">
                  Caes, gatos, filhotes e pets seniores em uma mesma narrativa premium.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-14 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionIntro
              eyebrow="Especies e fases"
              title="Amplitude de atendimento sem perder foco em pets de familia."
              description="Esse bloco ajuda a demo a parecer mais completa para clinicas gerais, hospitais boutique e marcas de pet care com prevencao, check-up e acompanhamento."
            />
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {clinic.species.map((item, index) => (
              <Reveal key={item.name} delay={index * 0.05} className="card-surface p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary/50">
                  {item.label}
                </p>
                <h3 className="mt-4 font-display text-3xl leading-none text-primary">
                  {item.name}
                </h3>
                <p className="mt-4 text-sm leading-7 text-primary/70">{item.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-14 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionIntro
              eyebrow="Equipe veterinaria"
              title="Rostos, especialidades e formacao resumida para aumentar confianca."
              description="No nicho veterinario, apresentar equipe com clareza costuma elevar bastante a sensacao de credibilidade. Aqui a composicao mistura postura medica, proximidade e visual premium."
            />
          </Reveal>
          <div className="mt-10 grid gap-5 xl:grid-cols-3">
            {featuredTeam.map((member, index) => (
              <Reveal key={member.name} delay={index * 0.06} className="card-surface overflow-hidden p-4">
                <div className="overflow-hidden rounded-[1.75rem]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-80 w-full object-cover object-center"
                  />
                </div>
                <div className="p-2 pb-1 pt-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary/50">
                    {member.role}
                  </p>
                  <h3 className="mt-3 font-display text-[2rem] leading-none text-primary">
                    {member.name}
                  </h3>
                  <p className="mt-3 text-sm font-medium text-primary/70">{member.specialty}</p>
                  <p className="mt-3 text-sm leading-7 text-primary/60">{member.education}</p>
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

      <section className="px-6 py-14 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.92fr,1.08fr] lg:items-center">
          <Reveal className="card-surface overflow-hidden p-4">
            <div className="relative overflow-hidden rounded-[2rem]">
              <img
                src={clinic.media.emergency}
                alt="Atendimento rapido para emergencia veterinaria"
                className="h-[520px] w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(27,42,48,0.12),rgba(22,33,29,0.54))]" />
              <div className="absolute bottom-5 left-5 right-5 rounded-[1.5rem] border border-white/25 bg-white/20 p-5 text-white backdrop-blur">
                <p className="text-xs uppercase tracking-[0.3em] text-white/75">Urgencia visivel</p>
                <p className="mt-3 font-display text-4xl leading-none">
                  Quando o tutor precisa agir rapido, o caminho esta claro.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="space-y-7">
            <SectionIntro
              eyebrow="Emergencia e contato rapido"
              title="Um bloco estrategico para converter urgencia em acao, nao em indecisao."
              description="Muitos sites do nicho escondem informacoes importantes justamente quando o tutor esta mais sensivel. Aqui o fluxo deixa telefone, sinais de alerta e CTA de atendimento sempre acessiveis."
            />

            <div className="grid gap-4 sm:grid-cols-2">
              {clinic.emergencySignals.map((item) => (
                <div key={item.title} className="card-surface p-5">
                  <div className="flex gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Siren className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary">{item.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-primary/70">{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a href={`tel:${clinic.emergencyPhone.replace(/\D/g, "")}`} className="premium-button justify-center">
                <Phone className="h-4 w-4" />
                Ligar agora
              </a>
              <Link to="/emergencia" className="premium-button-secondary justify-center">
                Entender o fluxo de emergencia
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-14 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionIntro
              eyebrow="Depoimentos"
              title="Prova social com tom sereno, humano e confiavel."
              description="Os depoimentos reforcam acolhimento, seguranca medica e clareza de processo, tres fatores que costumam pesar muito na decisao de tutores."
            />
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {clinic.testimonials.map((testimonial, index) => (
              <Reveal key={testimonial.name} delay={index * 0.05} className="card-surface p-6">
                <div className="flex items-center gap-2 text-accent">
                  {[0, 1, 2, 3, 4].map((star) => (
                    <Star key={star} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-5 text-base leading-8 text-primary/75">
                  "{testimonial.quote}"
                </p>
                <div className="mt-6">
                  <p className="font-semibold text-primary">{testimonial.name}</p>
                  <p className="text-sm text-primary/60">{testimonial.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-14 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionIntro
              eyebrow="Conteudo e SEO local"
              title="Blog demonstrativo para educar tutores e fortalecer autoridade na regiao."
              description="A estrutura editorial prepara a demo para campanhas locais, buscas organicas e reforco de credibilidade. Os temas foram escolhidos para parecerem reais e estrategicos."
            />
          </Reveal>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {latestPosts.map((post, index) => (
              <Reveal key={post.slug} delay={index * 0.06} className="card-surface p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary/50">
                  {post.category} . {post.readTime}
                </p>
                <h3 className="mt-4 font-display text-3xl leading-none text-primary">
                  {post.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-primary/70">{post.excerpt}</p>
                <Link
                  to="/conteudo"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary"
                >
                  Explorar conteudo
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-14 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr,1.1fr] lg:items-start">
          <Reveal className="space-y-6">
            <SectionIntro
              eyebrow="FAQ"
              title="Perguntas que ajudam o tutor a agir com mais tranquilidade."
              description="A FAQ reduz duvidas de rotina, aumenta percepcao de organizacao e ajuda a clinica a parecer mais preparada para conversas reais do dia a dia."
            />
            <div className="space-y-4">
              {clinic.highlights.map((item) => (
                <div key={item} className="flex gap-3 rounded-[1.4rem] border border-primary/10 bg-white/70 p-4">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-accent" />
                  <p className="text-sm leading-7 text-primary/70">{item}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08} className="card-surface p-6 sm:p-8">
            <Accordion type="single" collapsible className="space-y-2">
              {clinic.faqs.map((item, index) => (
                <AccordionItem
                  key={item.question}
                  value={`faq-${index}`}
                  className="rounded-[1.3rem] border border-primary/10 px-5"
                >
                  <AccordionTrigger className="text-left text-base font-semibold text-primary hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-7 text-primary/70">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-14 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.94fr,1.06fr]">
          <Reveal className="card-surface p-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-primary/50">
              Contato local
            </p>
            <h2 className="mt-5 font-display text-4xl leading-[0.95] text-primary sm:text-5xl">
              Endereco forte, mapa visivel e canais prontos para gerar agendamento.
            </h2>
            <div className="mt-6 space-y-4 text-sm leading-7 text-primary/70">
              <p className="flex items-start gap-3">
                <MapPin className="mt-1 h-4 w-4 text-accent" />
                {clinic.address}
              </p>
              <p className="flex items-start gap-3">
                <Phone className="mt-1 h-4 w-4 text-accent" />
                {clinic.phone} . Emergencia: {clinic.emergencyPhone}
              </p>
              <p className="flex items-start gap-3">
                <Clock3 className="mt-1 h-4 w-4 text-accent" />
                {clinic.hours.join(" . ")}
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/contato" className="premium-button justify-center">
                <HeartHandshake className="h-4 w-4" />
                Falar com a clinica
              </Link>
              <a href={clinic.whatsapp} className="premium-button-secondary justify-center">
                WhatsApp direto
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="card-surface overflow-hidden p-4">
            <iframe
              title="Mapa da clinica veterinaria"
              src={clinic.mapEmbed}
              className="h-[380px] w-full rounded-[1.7rem] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-14 sm:px-8 lg:px-12">
        <Reveal className="mx-auto max-w-6xl rounded-[2.4rem] border border-primary/10 bg-primary px-8 py-10 text-background shadow-[0_40px_120px_-62px_rgba(27,42,48,0.92)] sm:px-10 md:py-12">
          <div className="grid gap-8 lg:grid-cols-[1.2fr,0.8fr] lg:items-center">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-background/55">
                CTA final
              </p>
              <h2 className="mt-4 font-display text-4xl leading-[0.95] sm:text-5xl lg:text-6xl">
                Agende uma avaliacao e mostre ao tutor que o cuidado comeca antes da consulta.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-background/75">
                Esta demo foi desenhada para convencer clinicas veterinarias reais:
                branding premium, clareza de servicos, urgencia visivel e uma UX
                preparada para mobile e conversao local.
              </p>
            </div>
            <div className="space-y-4">
              <Link to="/contato" className="premium-button light justify-center">
                Solicitar atendimento
              </Link>
              <Link to="/emergencia" className="premium-button-secondary dark justify-center">
                <Siren className="h-4 w-4" />
                Acessar fluxo de urgencia
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </div >
  );
}
