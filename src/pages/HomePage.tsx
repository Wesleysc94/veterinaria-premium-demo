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
const latestPosts = blogPosts.slice(0, 3);

export default function HomePage() {
  return (
    <div className="pb-8">
      {/* ═══ HERO ═══ */}
      <section className="relative min-h-[90vh] overflow-hidden px-4 pt-28 pb-16 sm:px-8 sm:pt-36">
        <div className="ambient-orb left-[-10rem] top-[-4rem] h-[32rem] w-[32rem] bg-[radial-gradient(circle_at_center,rgba(174,191,168,0.25),transparent_70%)]" />
        <div className="ambient-orb right-[-10rem] top-[18rem] h-[36rem] w-[36rem] bg-[radial-gradient(circle_at_center,rgba(94,130,145,0.2),transparent_72%)]" />

        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Texto */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 space-y-8"
            >
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 rounded-full border border-primary/10 theme-adaptive-surface px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.3em] text-accent"
              >
                <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
                {clinic.badge}
              </motion.span>

              <h1 className="font-display text-5xl font-bold leading-[0.9] tracking-tight text-primary sm:text-7xl lg:text-8xl">
                Medicina <br />
                veterinária <br />
                <span className="italic text-accent">de precisão.</span>
              </h1>

              <p className="max-w-lg text-lg leading-relaxed text-primary/70 sm:text-xl">
                Onde a tecnologia avançada encontra um cuidado profundamente humano para o seu pet.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link to="/contato" className="premium-button">
                  <CalendarClock className="h-5 w-5" />
                  Agendar Avaliação
                </Link>
                <Link to="/servicos" className="premium-button-secondary">
                  Nossas Especialidades
                </Link>
              </div>
            </motion.div>

            {/* Imagem Hero */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border border-primary/10 bg-primary/5 shadow-2xl lg:aspect-[3/4]">
                <img
                  src={clinic.media.hero}
                  alt="Aura Vet — Excelência Clínica"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/20 theme-adaptive-surface p-5 shadow-xl backdrop-blur-xl sm:bottom-8 sm:left-8 sm:right-8">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/20 text-accent">
                      <ShieldCheck className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-primary">Referência em São Paulo</p>
                      <p className="text-xs text-primary/60">Infraestrutura completa no Jardim Paulista.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ SERVIÇOS ═══ */}
      <section className="px-4 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionIntro
              eyebrow="ESPECIALIDADES"
              title="Cuidado completo para cada necessidade do seu pet."
              description="Nossa equipe multidisciplinar oferece diagnóstico preciso e tratamento acolhedor em todas as especialidades."
            />
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((service, index) => (
              <Reveal
                key={service.slug}
                delay={index * 0.08}
                className="card-surface group overflow-hidden p-0"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="rounded-full bg-background/80 backdrop-blur-md px-3 py-1 text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
                      {service.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl leading-tight text-primary">
                    {service.name}
                  </h3>
                  <p className="mt-2 text-sm text-primary/60 line-clamp-2 leading-relaxed">
                    {service.excerpt}
                  </p>
                  <Link
                    to={`/servicos/${service.slug}`}
                    className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary transition group-hover:text-accent"
                  >
                    Saiba mais
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ POR QUE NÓS ═══ */}
      <section className="px-4 py-16 sm:px-8 sm:py-20 bg-primary/[0.02]">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal className="card-surface overflow-hidden p-4">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={clinic.media.specialist}
                alt="Medicina Especializada"
                className="h-[420px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 rounded-xl border border-white/20 theme-adaptive-surface p-5 backdrop-blur-xl">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent">Especialidades</p>
                <p className="mt-2 font-display text-2xl leading-tight text-primary">Cuidado completo e integrado</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="space-y-8">
            <SectionIntro
              eyebrow="POR QUE AURA VET"
              title="A união perfeita entre ciência e empatia."
              description="Entendemos que cada pet é um membro da família. Por isso, nossa abordagem é integral e personalizada."
            />

            <div className="grid gap-4 sm:grid-cols-2">
              {clinic.trustPillars.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-primary/10 theme-adaptive-surface p-5"
                >
                  <div className="flex gap-3">
                    <ShieldCheck className="mt-0.5 h-5 w-5 text-accent shrink-0" />
                    <div>
                      <p className="text-base font-bold text-primary">{item.title}</p>
                      <p className="mt-2 text-sm leading-relaxed text-primary/60">{item.text}</p>
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

      {/* ═══ JORNADA DO PACIENTE ═══ */}
      <section className="px-4 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal className="space-y-8">
            <SectionIntro
              eyebrow="JORNADA DO PACIENTE"
              title="A experiência Aura Vet começa antes mesmo da consulta."
              description="Desenhamos um fluxo de atendimento que prioriza a clareza para o tutor e o máximo conforto para o pet."
            />
            <div className="space-y-4">
              {clinic.visitSteps.map((item, index) => (
                <div
                  key={item.title}
                  className="flex gap-4 rounded-2xl border border-primary/10 theme-adaptive-surface p-5"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-white font-bold">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-primary">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-primary/60">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15} className="card-surface overflow-hidden p-4">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={clinic.media.consultation}
                alt="Nossos Pacientes"
                className="h-[420px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 rounded-xl border border-white/20 theme-adaptive-surface p-5 backdrop-blur-xl">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent">Pacientes</p>
                <p className="mt-2 font-display text-2xl leading-tight text-primary">
                  Atendimento para cães, gatos e pets seniores.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ MEDICINA POR ETAPAS ═══ */}
      <section className="px-4 py-16 sm:px-8 sm:py-20 bg-primary/[0.02]">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionIntro
              eyebrow="MEDICINA POR ETAPAS"
              title="Cuidado integral em todas as fases da vida."
              description="Protocolos personalizados que respeitam a individualidade e as necessidades específicas de cada espécie e idade."
            />
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {clinic.species.map((item, index) => (
              <Reveal key={item.name} delay={index * 0.08} className="card-surface p-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary/50">
                  {item.label}
                </p>
                <h3 className="mt-4 font-display text-2xl leading-tight text-primary">
                  {item.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-primary/60">{item.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ EQUIPE ═══ */}
      <section className="px-4 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionIntro
              eyebrow="EQUIPE VETERINÁRIA"
              title="Profissionais dedicados à saúde do seu pet."
              description="Conheça os especialistas que fazem da Aura Vet referência em cuidado veterinário de alto padrão."
            />
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {team.map((member, index) => (
              <Reveal key={member.name} delay={index * 0.08} className="card-surface overflow-hidden p-4">
                <div className="overflow-hidden rounded-2xl aspect-[4/5] relative group">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                </div>
                <div className="mt-5 px-2">
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent">
                    {member.role}
                  </p>
                  <h3 className="mt-2 font-display text-2xl leading-tight text-primary">
                    {member.name}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-primary/70">{member.specialty}</p>
                  <p className="mt-1 text-xs leading-relaxed text-primary/50">{member.education}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-8 flex justify-center">
            <Link to="/equipe" className="premium-button-secondary">
              Ver corpo clínico completo
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ═══ EMERGÊNCIA ═══ */}
      <section className="px-4 py-16 sm:px-8 sm:py-20 bg-dark text-white overflow-hidden">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal className="card-surface overflow-hidden p-4 border-white/10 bg-white/5">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={clinic.media.emergency}
                alt="Triagem de Emergência"
                className="h-[400px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 rounded-xl border border-white/20 bg-white/10 p-5 text-white backdrop-blur-xl">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/70">Urgência</p>
                <p className="mt-2 font-display text-2xl leading-tight">Atendimento imediato.</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="space-y-8">
            <SectionIntro
              eyebrow="CENTRAL DE URGÊNCIA"
              title="Agilidade e perícia quando cada segundo conta."
              description="Nosso fluxo de emergência foi desenhado para reduzir a incerteza e garantir que seu pet receba o suporte necessário sem demoras."
              tone="inverse"
            />

            <div className="grid gap-4 sm:grid-cols-2">
              {clinic.emergencySignals.map((item) => (
                <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="flex gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-white">
                      <Siren className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white">{item.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-white/70">{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
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

      {/* ═══ DEPOIMENTOS ═══ */}
      <section className="px-4 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionIntro
              eyebrow="DEPOIMENTOS"
              title="O que dizem os tutores que confiam na Aura Vet."
              description="Histórias reais de acolhimento, segurança médica e clareza de processo que fazem a diferença na vida dos nossos pacientes."
            />
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {clinic.testimonials.map((testimonial, index) => (
              <Reveal key={testimonial.name} delay={index * 0.08} className="card-surface p-6 relative overflow-hidden group">
                <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-accent/5 blur-2xl group-hover:bg-accent/10 transition-colors" />
                <div className="flex items-center gap-1 text-accent">
                  {[0, 1, 2, 3, 4].map((star) => (
                    <Star key={star} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-primary/70 italic">
                  "{testimonial.quote}"
                </p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">
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

      {/* ═══ BLOG ═══ */}
      <section className="px-4 py-16 sm:px-8 sm:py-20 bg-primary/[0.02]">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionIntro
              eyebrow="CONTEÚDO"
              title="Informação de qualidade para tutores conscientes."
              description="Artigos escritos pela nossa equipe para ajudar você a entender melhor a saúde do seu pet."
            />
          </Reveal>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {latestPosts.map((post, index) => (
              <Reveal key={post.slug} delay={index * 0.08} className="card-surface group p-6 hover:bg-primary/[0.02] transition-all">
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-accent">
                  <span>{post.category}</span>
                  <span className="h-1 w-1 rounded-full bg-accent/40" />
                  <span>{post.readTime}</span>
                </div>
                <h3 className="mt-4 font-display text-2xl leading-tight text-primary group-hover:text-accent transition-colors">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-primary/60">{post.excerpt}</p>
                <Link
                  to="/conteudo"
                  className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary transition-all group-hover:gap-3"
                >
                  Ler artigo completo
                  <ArrowUpRight className="h-4 w-4 text-accent" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="px-4 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-start">
          <Reveal className="space-y-6">
            <SectionIntro
              eyebrow="DÚVIDAS FREQUENTES"
              title="Transparência e clareza para sua tranquilidade."
              description="Respondemos às principais questões dos nossos tutores para que nada fique sem explicação."
            />
            <div className="space-y-3">
              {clinic.highlights.map((item) => (
                <div key={item} className="flex gap-3 rounded-2xl border border-primary/10 theme-adaptive-surface p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-accent shrink-0" />
                  <p className="text-sm leading-relaxed text-primary/70">{item}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15} className="card-surface p-6">
            <Accordion type="single" collapsible className="space-y-3">
              {clinic.faqs.map((item, index) => (
                <AccordionItem
                  key={item.question}
                  value={`faq-${index}`}
                  className="rounded-2xl border border-primary/10 px-5 py-1"
                >
                  <AccordionTrigger className="text-left text-base font-bold text-primary hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-primary/60 pt-2 pb-4">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      {/* ═══ CONTATO + MAPA ═══ */}
      <section className="px-4 py-16 sm:px-8 sm:py-20 bg-primary/[0.02]">
        <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-2">
          <Reveal className="card-surface p-6">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary/50">
              Contato e localização
            </p>
            <h2 className="mt-4 font-display text-3xl leading-tight text-primary sm:text-4xl">
              Venha conhecer a Aura Vet pessoalmente.
            </h2>
            <div className="mt-5 space-y-3 text-sm text-primary/70">
              <p className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-accent shrink-0" />
                {clinic.address}
              </p>
              <p className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 text-accent shrink-0" />
                {clinic.phone} · Emergência: {clinic.emergencyPhone}
              </p>
              <p className="flex items-start gap-3">
                <Clock3 className="mt-0.5 h-4 w-4 text-accent shrink-0" />
                {clinic.hours.join(" · ")}
              </p>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link to="/contato" className="premium-button justify-center">
                <HeartHandshake className="h-4 w-4" />
                Falar com a clínica
              </Link>
              <a href={clinic.whatsapp} className="premium-button-secondary whatsapp-pulse justify-center border-[#25D366]/30 text-[#25D366] hover:bg-[#25D366]/5">
                WhatsApp Direto
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="card-surface overflow-hidden p-3">
            <iframe
              title="Mapa da Clínica Veterinária Aura Vet"
              src={clinic.mapEmbed}
              className="h-[350px] w-full rounded-xl border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>
        </div>
      </section>

      {/* ═══ CTA FINAL ═══ */}
      <section className="px-4 py-16 sm:px-8 sm:py-20">
        <Reveal className="brand-panel mx-auto max-w-6xl rounded-[2.5rem] border border-white/15 px-8 py-12 shadow-xl sm:px-12 md:py-16 overflow-hidden relative">
          <div className="grid gap-10 lg:grid-cols-[1.2fr,0.8fr] lg:items-center relative z-10">
            <div className="space-y-5">
              <p className="text-[11px] font-bold uppercase tracking-[0.4em] opacity-60">
                Atendimento de excelência
              </p>
              <h2 className="font-display text-4xl leading-[0.95] sm:text-5xl lg:text-6xl">
                O melhor cuidado para quem você mais ama.
              </h2>
              <p className="max-w-lg text-base leading-relaxed opacity-75">
                Agende uma consulta avaliativa e descubra como nossa metodologia diagnóstica e acolhimento humano podem transformar a saúde do seu pet.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <Link to="/contato" className="premium-button on-panel justify-center">
                Agendar Agora
              </Link>
              <Link to="/emergencia" className="premium-button-secondary on-panel justify-center">
                Ver Central de Urgência
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
