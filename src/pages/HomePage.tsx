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
import { useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const DiagnosticShuffler = ({ items }: { items: string[] }) => {
  const [activeItems, setActiveItems] = useState(items);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveItems((prev) => {
        const next = [...prev];
        const last = next.pop();
        if (last) next.unshift(last);
        return next;
      });
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[200px] w-full perspective-1000">
      {activeItems.slice(0, 3).map((item, i) => (
        <motion.div
          key={item}
          layout
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{
            opacity: 1 - i * 0.25,
            y: i * 20,
            scale: 1 - i * 0.05,
            zIndex: 10 - i,
          }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="absolute inset-x-0 top-0 rounded-[1.5rem] border border-primary/10 bg-card p-6 shadow-xl"
        >
          <p className="text-sm font-bold text-primary">{item}</p>
        </motion.div>
      ))}
    </div>
  );
};

const TelemetryTypewriter = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState("");
  const fullText = text;

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) i = 0;
    }, 100);
    return () => clearInterval(interval);
  }, [fullText]);

  return (
    <div className="space-y-4 rounded-[1.5rem] border border-primary/5 bg-primary/5 p-6 font-mono text-[11px]">
      <div className="flex items-center gap-2">
        <div className="h-2 w-2 animate-ping rounded-full bg-accent" />
        <span className="uppercase text-primary/50">Live Telemetry Feed</span>
      </div>
      <p className="text-primary/80 leading-relaxed">
        {displayText}
        <span className="ml-1 inline-block h-4 w-1 animate-pulse bg-accent" />
      </p>
    </div>
  );
};

const ProtocolScheduler = () => {
  const [activeDay, setActiveDay] = useState(2); // Wednesday
  const containerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
      tl.to(cursorRef.current, { x: 80, y: 40, duration: 1, ease: "power2.inOut" })
        .to(cursorRef.current, { scale: 0.8, duration: 0.1 })
        .call(() => setActiveDay(Math.floor(Math.random() * 7)))
        .to(cursorRef.current, { scale: 1, duration: 0.1 })
        .to(cursorRef.current, { x: 180, y: 150, duration: 1, ease: "power2.inOut" })
        .to(cursorRef.current, { opacity: 0, duration: 0.5 })
        .set(cursorRef.current, { x: 0, y: 0, opacity: 1 });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative rounded-[2rem] border border-primary/10 bg-card p-6 overflow-hidden">
      <div className="grid grid-cols-7 gap-2">
        {["S", "M", "T", "W", "T", "F", "S"].map((day, i) => (
          <div
            key={i}
            className={`flex h-10 w-10 items-center justify-center rounded-xl text-[10px] font-bold transition-colors ${activeDay === i ? "bg-accent text-white" : "border border-primary/5 text-primary/40"
              }`}
          >
            {day}
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-end">
        <div className="rounded-full bg-primary/5 px-6 py-2 text-[10px] font-bold uppercase tracking-widest text-primary/60">
          Save Protocol
        </div>
      </div>
      <motion.div
        ref={cursorRef}
        className="pointer-events-none absolute left-0 top-0 h-4 w-4 text-accent"
      >
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M7 2l12 11.23-6.73 1.35 4.3 6.9-2.2 1.36-4.38-6.9L7 20z" />
        </svg>
      </motion.div>
    </div>
  );
};

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
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
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
                <div className="space-y-4">
                  <h1 className="font-display text-7xl font-bold leading-[0.85] tracking-tighter text-primary sm:text-8xl xl:text-9xl">
                    Medicina <br />
                    veterinária
                  </h1>
                  <p className="font-display text-8xl italic text-accent leading-none -mt-4 xl:text-[11rem]">
                    de precisão.
                  </p>
                </div>
                <p className="max-w-xl text-xl leading-relaxed text-primary/80 sm:text-2xl pt-4">
                  Onde a tecnologia avançada encontra um cuidado profundamente humano para o seu pet.
                </p>
              </div>

              <div className="flex flex-wrap gap-5 pt-4">
                <Link to="/contato" className="premium-button">
                  <span>Agendar Avaliação</span>
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

      <section className="px-6 py-32 sm:px-8 lg:px-12 bg-primary/[0.01]">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionIntro
              eyebrow="ARTEFATOS FUNCIONAIS"
              title="A precisão digital a serviço da vida."
              description="Nossa tecnologia não é apenas estética. Ela é o motor que impulsiona cada diagnóstico e tratamento na Aura Vet."
            />
          </Reveal>

          <div className="mt-20 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            <Reveal className="card-surface p-10 space-y-8">
              <div className="space-y-3">
                <h3 className="font-display text-4xl leading-tight text-primary">Diagnostic Shuffler</h3>
                <p className="text-sm text-primary/60 leading-relaxed">
                  Algoritmos avançados que processam múltiplas hipóteses diagnósticas em tempo real.
                </p>
              </div>
              <DiagnosticShuffler items={["Análise de Hematologia", "Processamento de Imagem", "Triagem Neurológica", "Monitoramento Cardíaco"]} />
            </Reveal>

            <Reveal delay={0.1} className="card-surface p-10 space-y-8">
              <div className="space-y-3">
                <h3 className="font-display text-4xl leading-tight text-primary">Telemetry Typewriter</h3>
                <p className="text-sm text-primary/60 leading-relaxed">
                  Feed de dados biométricos contínuos, garantindo vigilância total sobre o estado do paciente.
                </p>
              </div>
              <TelemetryTypewriter text="SYSTEM STATUS: OPTIMAL... HEART RATE: 82 BPM... OXYGEN SATURATION: 98%... VITALS MONITORING ACTIVE..." />
            </Reveal>

            <Reveal delay={0.2} className="card-surface p-10 space-y-8">
              <div className="space-y-3">
                <h3 className="font-display text-4xl leading-tight text-primary">Protocol Scheduler</h3>
                <p className="text-sm text-primary/60 leading-relaxed">
                  Planejamento estratégico de cuidados que se adapta à evolução diária do seu pet.
                </p>
              </div>
              <ProtocolScheduler />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative px-6 py-40 sm:px-8 lg:px-12 bg-dark text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?q=80&w=2070&auto=format&fit=crop"
            alt="Parallax Texture"
            className="h-full w-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/80 to-dark" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl text-center space-y-16">
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-[0.5em] text-accent">Nossa Filosofia</p>
          </Reveal>

          <div className="space-y-12">
            <Reveal delay={0.1}>
              <p className="text-2xl font-medium text-white/50 sm:text-3xl">
                A maioria das clínicas foca em tratar doenças de forma isolada.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <h2 className="font-display text-6xl leading-[1.1] sm:text-8xl xl:text-9xl">
                Nós focamos na <br />
                <span className="italic text-accent">longevidade sistêmica.</span>
              </h2>
            </Reveal>
          </div>

          <Reveal delay={0.3}>
            <div className="mx-auto h-24 w-[1px] bg-gradient-to-b from-accent to-transparent" />
          </Reveal>
        </div>
      </section>

      <section className="relative">
        <div className="sticky top-0 h-screen overflow-hidden bg-background">
          <div className="absolute inset-0 flex items-center justify-center p-6 sm:p-12">
            <div className="grid w-full max-w-6xl gap-16 lg:grid-cols-2 lg:items-center">
              <div className="space-y-8">
                <p className="text-sm font-bold uppercase tracking-[0.5em] text-accent">O Protocolo</p>
                <h2 className="font-display text-6xl leading-tight text-primary sm:text-7xl">
                  Fluxo de <span className="italic">excelência.</span>
                </h2>
                <div className="space-y-6">
                  {clinic.visitSteps.map((step, i) => (
                    <Reveal key={step.title} delay={i * 0.1}>
                      <div className="flex gap-6 items-start">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary/20 font-mono text-sm text-primary/40">
                          0{i + 1}
                        </span>
                        <div>
                          <h3 className="text-2xl font-bold text-primary">{step.title}</h3>
                          <p className="mt-2 text-primary/60">{step.text}</p>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>

              <div className="relative aspect-square">
                <div className="absolute inset-0 rounded-[3rem] border border-primary/10 bg-primary/5 flex items-center justify-center overflow-hidden">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="h-2/3 w-2/3 border-2 border-dashed border-accent/20 rounded-full flex items-center justify-center"
                  >
                    <div className="h-1/2 w-1/2 border-2 border-accent rounded-full animate-pulse" />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[200vh]" /> {/* Scroll space for sticky effect */}
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
              tone="inverse"
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
                      <p className="mt-2 text-sm leading-relaxed text-white/85">{item.text}</p>
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
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-primary/80">
              Contato local
            </p>
            <h2 className="mt-5 font-display text-4xl leading-[0.95] text-primary sm:text-5xl">
              Endereco forte, mapa visivel e canais prontos para gerar agendamento.
            </h2>
            <div className="mt-6 space-y-4 text-sm leading-7 text-primary/85">
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
        <Reveal className="brand-panel mx-auto max-w-6xl rounded-[4rem] border border-white/15 px-10 py-16 shadow-[0_60px_150px_-60px_rgba(27,42,48,0.45)] sm:px-16 md:py-20 overflow-hidden relative">
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
              <Link to="/contato" className="premium-button on-panel h-16 text-lg justify-center shadow-none hover:shadow-xl">
                Agendar Agora
              </Link>
              <Link to="/emergencia" className="premium-button-secondary on-panel h-16 text-lg justify-center shadow-none">
                Ver Central de Urgência
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </div >
  );
}
