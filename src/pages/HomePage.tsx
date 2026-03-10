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
  MessageCircle,
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
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const featuredServices = services.slice(0, 6);
const featuredTeam = team.slice(0, 3);
const latestPosts = blogPosts.slice(0, 3);

export default function HomePage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <div ref={containerRef} className="pb-10">
      <section className="relative min-h-[95vh] overflow-hidden px-4 pt-32 sm:px-8 sm:pt-40 lg:pt-48">
        <div className="ambient-orb left-[-10rem] top-[-4rem] h-[32rem] w-[32rem] bg-[radial-gradient(circle_at_center,rgba(174,191,168,0.25),transparent_70%)]" />
        <div className="ambient-orb right-[-10rem] top-[18rem] h-[36rem] w-[36rem] bg-[radial-gradient(circle_at_center,rgba(94,130,145,0.2),transparent_72%)]" />

        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-24">
            {/* Left Column: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 space-y-10"
            >
              <div className="space-y-6">
                <motion.span
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="inline-flex items-center gap-2 rounded-full border border-primary/10 theme-adaptive-surface px-5 py-2 text-[12px] font-bold uppercase tracking-[0.4em] text-accent"
                >
                  <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
                  {clinic.badge}
                </motion.span>
                <h1 className="font-display text-6xl leading-[0.9] tracking-tight text-primary sm:text-8xl xl:text-9xl">
                  Medicina <br />
                  veterinária <br />
                  <span className="italic text-accent">de precisão.</span>
                </h1>
                <p className="max-w-xl text-xl leading-relaxed text-primary/80 sm:text-2xl">
                  Onde a tecnologia avançada encontra um cuidado profundamente humano para o seu pet.
                </p>
              </div>

              <div className="flex flex-wrap gap-5">
                <Link to="/contato" className="premium-button h-16 px-12 text-lg">
                  <CalendarClock className="h-6 w-6" />
                  Agendar Avaliação
                </Link>
                <Link to="/servicos" className="premium-button-secondary h-16 px-12 text-lg">
                  Nossas Especialidades
                </Link>
              </div>
            </motion.div>

            {/* Right Column: Premium Image Stack with Parallax */}
            <motion.div
              style={{ y: y1 }}
              className="relative"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[4rem] border border-primary/10 bg-primary/5 shadow-2xl lg:aspect-[3/4]">
                <img
                  src={clinic.media.hero}
                  alt="Aura Vet - Excelência Clínica"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />

                <motion.div
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="absolute bottom-10 left-10 right-10 rounded-[2.5rem] border border-white/20 theme-adaptive-surface p-8 shadow-2xl backdrop-blur-3xl"
                >
                  <div className="flex items-center gap-6">
                    <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-accent/20 text-accent">
                      <ShieldCheck className="h-8 w-8" />
                    </div>
                    <div>
                      <p className="text-lg font-bold text-primary tracking-tight">Referência em SP</p>
                      <p className="text-sm text-primary/70 leading-snug">Infraestrutura completa no coração do Jardim Paulista.</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionIntro
              eyebrow="CORPO CLÍNICO"
              title="A tranquilidade de saber que seu pet está em boas mãos."
              description="Nossa equipe multidisciplinar é formada pelos melhores especialistas, focados em oferecer um diagnóstico preciso e um tratamento acolhedor."
            />
          </Reveal>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((service, index) => (
              <Reveal
                key={service.slug}
                delay={index * 0.1}
                className="card-surface group overflow-hidden p-0"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                  <div className="absolute top-6 left-6">
                    <span className="rounded-full bg-background/80 backdrop-blur-md px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.35em] text-primary">
                      {service.category}
                    </span>
                  </div>
                  <div className="absolute top-6 right-6 h-10 w-10 rounded-full bg-accent/20 backdrop-blur-md flex items-center justify-center text-accent">
                    <Stethoscope className="h-5 w-5" />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="font-display text-4xl leading-none text-primary">
                    {service.name}
                  </h3>
                  <p className="text-sm text-primary/75 line-clamp-2 leading-relaxed">
                    {service.excerpt}
                  </p>
                  <Link
                    to={`/servicos/${service.slug}`}
                    className="mt-8 inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-primary transition group-hover:text-accent"
                  >
                    Saiba mais
                    <ArrowUpRight className="h-5 w-5" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 sm:px-8 lg:px-12 bg-primary/[0.02]">
        <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[0.9fr,1.1fr] lg:items-center">
          <motion.div style={{ y: y2 }} className="card-surface overflow-hidden p-6">
            <div className="relative overflow-hidden rounded-[3rem]">
              <img
                src={clinic.media.specialist}
                alt="Medicina Especializada"
                className="h-[600px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 rounded-[2rem] border border-white/20 theme-adaptive-surface p-6 backdrop-blur-xl">
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent">Especialidades</p>
                <p className="mt-3 font-display text-4xl leading-tight text-primary">Cuidado Completo</p>
                <p className="mt-2 text-sm text-primary/80 leading-relaxed">
                  Cardiologia, Dermatologia, Ortopedia e Medicina Felina integradas.
                </p>
              </div>
            </div>
          </motion.div>

          <Reveal delay={0.2} className="space-y-10">
            <SectionIntro
              eyebrow="POR QUE AURA VET"
              title="A união perfeita entre ciência e empatia."
              description="Entendemos que cada pet é um membro da família. Por isso, nossa abordagem é integral e personalizada."
            />

            <div className="grid gap-6 sm:grid-cols-2">
              {clinic.trustPillars.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[2rem] border border-primary/10 theme-adaptive-surface p-6 shadow-xl"
                >
                  <div className="flex gap-4">
                    <ShieldCheck className="mt-1 h-6 w-6 text-accent shrink-0" />
                    <div>
                      <p className="text-xl font-bold text-primary tracking-tight">{item.title}</p>
                      <p className="mt-3 text-sm leading-relaxed text-primary/70">{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Link to="/sobre" className="premium-button">
              Conheça Nossa História
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[1.05fr,0.95fr] lg:items-center">
          <Reveal className="space-y-10">
            <SectionIntro
              eyebrow="JORNADA DO PACIENTE"
              title="A experiência Aura Vet começa antes mesmo da consulta."
              description="Desenhamos um fluxo de atendimento que prioriza a clareza para o tutor e o máximo conforto para o pet."
            />
            <div className="space-y-6">
              {clinic.visitSteps.map((item, index) => (
                <div
                  key={item.title}
                  className="flex gap-6 rounded-[2.5rem] border border-primary/10 theme-adaptive-surface p-6 shadow-lg"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent text-white font-bold text-lg">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-2xl font-bold text-primary tracking-tight">{item.title}</h3>
                    <p className="mt-2 text-base leading-relaxed text-primary/70">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2} className="card-surface overflow-hidden p-6">
            <div className="relative overflow-hidden rounded-[3rem]">
              <img
                src={clinic.media.species}
                alt="Nossos Pacientes"
                className="h-[600px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 rounded-[2rem] border border-white/20 theme-adaptive-surface p-6 backdrop-blur-xl">
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent">PACIENTES</p>
                <p className="mt-3 font-display text-4xl leading-tight text-primary">
                  Atendimento especializado para cães, gatos e pets seniores.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-24 sm:px-8 lg:px-12 bg-primary/[0.01]">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionIntro
              eyebrow="MEDICINA POR ETAPAS"
              title="Cuidado integral em todas as fases da vida."
              description="Protocolos personalizados que respeitam a individualidade e as necessidades específicas de cada espécie e idade."
            />
          </Reveal>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {clinic.species.map((item, index) => (
              <Reveal key={item.name} delay={index * 0.1} className="card-surface p-8">
                <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-primary/70">
                  {item.label}
                </p>
                <h3 className="mt-6 font-display text-3xl leading-none text-primary">
                  {item.name}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-primary/70">{item.description}</p>
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
            {team.map((member, index) => (
              <Reveal key={member.name} delay={index * 0.1} className="card-surface overflow-hidden p-6">
                <div className="overflow-hidden rounded-[2.5rem] aspect-[4/5] relative group">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="mt-8">
                  <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-accent">
                    {member.role}
                  </p>
                  <h3 className="mt-4 font-display text-3xl leading-none text-primary">
                    {member.name}
                  </h3>
                  <p className="mt-4 text-sm font-medium text-primary/80">{member.specialty}</p>
                  <p className="mt-3 text-sm leading-relaxed text-primary/60">{member.education}</p>
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

      <section className="px-6 py-24 sm:px-8 lg:px-12 bg-dark text-white overflow-hidden">
        <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[0.9fr,1.10fr] lg:items-center">
          <Reveal className="card-surface overflow-hidden p-6 border-white/10 theme-adaptive-surface">
            <div className="relative overflow-hidden rounded-[3rem]">
              <img
                src={clinic.media.emergency}
                alt="Triagem de Emergência"
                className="h-[600px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 rounded-[2rem] border border-white/20 bg-white/10 p-6 text-white backdrop-blur-xl">
                <p className="text-xs font-bold uppercase tracking-[0.4em] text-white/80">URGÊNCIA</p>
                <p className="mt-3 font-display text-4xl leading-tight">Atendimento imediato.</p>
                <p className="mt-2 text-sm text-white/90 leading-relaxed">
                  Canais de triagem 24h para orientar o socorro do seu pet.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2} className="space-y-10">
            <SectionIntro
              eyebrow="CENTRAL DE URGÊNCIA"
              title="Agilidade e perícia quando cada segundo conta."
              description="Nosso fluxo de emergência foi desenhado para reduzir a incerteza e garantir que seu pet receba o suporte necessário sem demoras."
            />

            <div className="grid gap-6 sm:grid-cols-2">
              {clinic.emergencySignals.map((item) => (
                <div key={item.title} className="card-surface p-6 border-white/10 bg-white/5">
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent text-white shadow-xl shadow-accent/20">
                      <Siren className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white tracking-tight">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-white/70">{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a href={`tel:${clinic.emergencyPhone.replace(/\D/g, "")}`} className="premium-button">
                <Phone className="h-5 w-5" />
                Ligar para Emergência
              </a>
              <Link to="/emergencia" className="premium-button-secondary border-white/20 text-white hover:border-white">
                Ver Fluxo de Socorro
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
              <Reveal key={testimonial.name} delay={index * 0.1} className="card-surface p-8 relative overflow-hidden group">
                <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-accent/5 blur-2xl group-hover:bg-accent/10 transition-colors" />
                <div className="flex items-center gap-1.5 text-accent">
                  {[0, 1, 2, 3, 4].map((star) => (
                    <Star key={star} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-6 text-lg leading-relaxed text-primary/80 italic font-medium">
                  "{testimonial.quote}"
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-primary tracking-tight">{testimonial.name}</p>
                    <p className="text-sm text-accent font-semibold">{testimonial.role}</p>
                  </div>
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
              <Reveal key={post.slug} delay={index * 0.1} className="card-surface group p-8 hover:bg-primary/[0.02] transition-all">
                <div className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.4em] text-accent">
                  <span>{post.category}</span>
                  <span className="h-1 w-1 rounded-full bg-accent/40" />
                  <span>{post.readTime}</span>
                </div>
                <h3 className="mt-6 font-display text-3xl leading-tight text-primary group-hover:text-accent transition-colors">
                  {post.title}
                </h3>
                <p className="mt-5 text-base leading-relaxed text-primary/70">{post.excerpt}</p>
                <Link
                  to="/conteudo"
                  className="mt-8 inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-primary transition-all group-hover:gap-5"
                >
                  Ler artigo completo
                  <ArrowUpRight className="h-5 w-5 text-accent" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 sm:px-8 lg:px-12 bg-primary/[0.02]">
        <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[0.9fr,1.1fr] lg:items-start">
          <Reveal className="space-y-8">
            <SectionIntro
              eyebrow="DÚVIDAS FREQUENTES"
              title="Transparência e clareza para sua tranquilidade."
              description="Nossa FAQ foi pensada para responder às principais questões dos nossos tutores, garantindo que nada fique sem explicação."
            />
            <div className="space-y-5">
              {clinic.highlights.map((item) => (
                <div key={item} className="flex gap-5 rounded-[2rem] border border-primary/10 theme-adaptive-surface p-5 shadow-sm">
                  <CheckCircle2 className="mt-1 h-6 w-6 text-accent shrink-0" />
                  <p className="text-base leading-relaxed text-primary/80">{item}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2} className="card-surface p-8 sm:p-10">
            <Accordion type="single" collapsible className="space-y-4">
              {clinic.faqs.map((item, index) => (
                <AccordionItem
                  key={item.question}
                  value={`faq-${index}`}
                  className="rounded-[2rem] border border-primary/10 px-6 py-2"
                >
                  <AccordionTrigger className="text-left text-lg font-bold text-primary hover:no-underline tracking-tight">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base leading-relaxed text-primary/70 pt-4 pb-6">
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
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-primary/70">
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
              <a href={clinic.whatsapp} className="premium-button-secondary whatsapp-pulse justify-center border-[#25D366]/30 text-[#25D366] hover:bg-[#25D366]/5">
                WhatsApp Direto
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

      <section className="px-6 py-24 sm:px-8 lg:px-12">
        <Reveal className="mx-auto max-w-6xl rounded-[4rem] border border-primary/10 bg-primary px-10 py-16 theme-adaptive-surface text-primary-foreground shadow-[0_60px_150px_-60px_rgba(27,42,48,0.45)] sm:px-16 md:py-20 overflow-hidden relative">
          <div className="ambient-orb inset-0 opacity-20 pointer-events-none" />
          <div className="grid gap-12 lg:grid-cols-[1.2fr,0.8fr] lg:items-center relative z-10">
            <div className="space-y-6">
              <p className="text-[12px] font-bold uppercase tracking-[0.5em] opacity-60">
                ATENDIMENTO DE EXCELÊNCIA
              </p>
              <h2 className="font-display text-5xl leading-[0.95] sm:text-7xl lg:text-8xl">
                O melhor cuidado para quem você mais ama.
              </h2>
              <p className="max-w-xl text-lg leading-relaxed opacity-80">
                Agende uma consulta avaliativa e descubra como nossa metodologia diagnóstica e acolhimento humano podem transformar a saúde do seu pet.
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <Link to="/contato" className="premium-button light h-16 text-lg justify-center shadow-none hover:shadow-xl">
                Agendar Agora
              </Link>
              <Link to="/emergencia" className="premium-button-secondary dark h-16 text-lg justify-center border-white/20 text-white shadow-none">
                Ver Central de Urgência
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </div >
  );
}
