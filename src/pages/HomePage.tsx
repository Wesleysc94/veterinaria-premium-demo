import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowRight,
  CalendarClock,
  CheckCircle2,
  Clock3,
  HeartHandshake,
  MapPin,
  Phone,
  ShieldCheck,
  Siren,
  Star,
  Hexagon,
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
      {/* ─── DNA LUMINA: BACKGROUND BLOBS ─── */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="bg-blob left-[-10%] top-[10%] bg-accent/20" />
        <div className="bg-blob right-[-5%] top-[40%] bg-primary/10" style={{ animationDelay: '-5s' }} />
        <div className="bg-blob left-[20%] bottom-[-10%] bg-accent/10" style={{ animationDelay: '-10s' }} />
      </div>

      <div className="noise-texture" />

      {/* ═══════════════════════════════════════════════════════════════
          A. HERO — "A Cena de Abertura" (fullscreen cinematográfico)
          ═══════════════════════════════════════════════════════════════ */}
      <section className="group relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
        {/* Cinematic Background (Video with Image Fallback) */}
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
          <img 
            src="/hero-fallback.png" 
            alt="Interior de clínica veterinária de luxo"
            className="absolute inset-0 h-full w-full object-cover"
          />
          
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover scale-105 transition-transform duration-[3s] group-hover:scale-110 opacity-0 animate-fade-in"
            onCanPlay={(e) => (e.currentTarget.style.opacity = "1")}
          >
            <source src="https://player.vimeo.com/external/6235735.hd.mp4?s=d0b6777c7f717804961502f3a693c067d5e4b6c6&profile_id=175" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-black/10 backdrop-brightness-[1.05] transition-opacity duration-1000 group-hover:opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-white/10 opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-background/40" />
          <div className="absolute inset-0 bg-noise-overlay opacity-10 mix-blend-overlay pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent z-[5]" />
        </div>

        <div className="relative z-10 w-full px-6 pt-32 pb-16 text-center lg:px-12">
          <div className="mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-10"
            >
              <div className="flex flex-col items-center gap-6">
                <span className="luxury-chip px-5 py-2 border-white/20 bg-black/40 text-[10px] uppercase tracking-[0.45em] text-white backdrop-blur-xl shadow-2xl">
                  {clinic.badge}
                </span>
                <div className="h-20 w-[1px] bg-gradient-to-b from-white/20 to-transparent" />
              </div>

              <h1 className="font-display text-[3.2rem] font-bold leading-[0.9] tracking-tighter text-white sm:text-[6.5rem] lg:text-[8.5rem] hero-title-shadow">
                Cuidado & <br />
                <span className="font-display italic font-light text-accent">Excelência.</span>
              </h1>

              <p className="mx-auto max-w-2xl text-[16px] leading-[1.6] text-white tracking-[0.05em] font-bold sm:text-lg hero-text-shadow-strong px-4">
                Medicina veterinária de precisão. <br className="hidden sm:block" />
                Desenhamos cada detalhe para o bem-estar absoluto do seu pet.
              </p>

              <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6 w-full max-w-2xl mx-auto px-4">
                <Link to="/contato" className="premium-button-new size-equal shadow-2xl shadow-accent/20 !border-accent/40 bg-accent/20 dark:bg-accent/10">
                  <span className="btn-text !text-primary dark:!text-white !font-black !text-[12px]">Agendar agora</span>
                  <div className="btn-icon-circle !bg-primary dark:!bg-white">
                    <ArrowRight className="h-4 w-4 text-white dark:text-accent" />
                  </div>
                </Link>
                <a 
                  href={clinic.whatsapp} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="premium-button-new size-equal border-black/20 dark:border-white/20 bg-black/5 dark:bg-white/5"
                >
                   <span className="flex items-center gap-3">
                     <span className="h-3 w-3 rounded-full bg-[#25D366] shadow-[0_0_10px_#25D366]" />
                     <span className="btn-text !text-primary dark:!text-white">Chamar no WhatsApp</span>
                   </span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-[5]" />
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3 z-10 pointer-events-none"
        >
          <span className="text-[9px] tracking-[0.3em] text-white/30 uppercase rotate-90 mb-6 origin-top whitespace-nowrap">DESCUBRA</span>
          <div className="w-[1px] h-20 bg-white/10 relative overflow-hidden">
            <motion.div 
              initial={{ y: '-100%' }}
              animate={{ y: '100%' }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              className="absolute inset-0 w-full h-[30%] bg-accent"
            />
          </div>
        </motion.div>
      </section>

      {/* ═══ DESTAQUES — Pilares de Autoridade ═══ */}
      <section className="section-shell relative z-10 pt-32 lg:pt-40">
        <div className="mx-auto max-w-7xl">
          {/* Section ID (Lumina Style) */}
          <div className="section-id-deco">
            <span>01</span>
            <div />
            <span>Nossa Especialidade</span>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <Reveal className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif leading-tight">
                Cuidado que combina <br />
                <span className="text-accent italic">ciência e afeto.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="max-w-xs text-primary/60">
              <p>Utilizamos medicina diagnóstica de ponta para garantir o bem-estar absoluto do seu pet.</p>
            </Reveal>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredServices.map((service, index) => (
              <Reveal key={service.slug} delay={index * 0.1}>
                <Link
                  to={`/servicos/${service.slug}`}
                  className="glass-hover group flex flex-col h-full rounded-[2.8rem] p-10 transition-all duration-700 hover:-translate-y-3 hover:shadow-[0_45px_100px_-40px_rgba(var(--accent-rgb),0.15)] border border-primary/5"
                >
                  <div className="mini-logo-wrapper mb-8 group-hover:rotate-6 group-hover:scale-110">
                    <Hexagon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-4 text-3xl font-extrabold text-foreground" style={{ fontFamily: 'Outfit, sans-serif' }}>
                    {service.name}
                  </h3>
                  <p className="flex-1 text-sm leading-relaxed text-foreground/60 italic">
                    {service.excerpt}
                  </p>
                  <div className="mt-8 flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-accent opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-2">
                    VER ESPECIALIDADE <ArrowUpRight className="h-4 w-4 stroke-[3px]" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ AMBIENTE ═══ */}
      <section className="section-shell relative z-10">
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
            <div className="section-id-deco">
              <span>02</span>
              <div />
              <span>Diferenciais</span>
            </div>
            <SectionIntro
              eyebrow="Por que Aura Vet"
              title="A uniao entre ciencia, hospitalidade e clareza de processo."
              description="O site deixa visivel aquilo que um tutor premium procura: equipe competente, estrutura confiavel e uma experiencia que transmite controle sem perder afeto."
            />

            <div className="grid gap-4 sm:grid-cols-2">
              {clinic.trustPillars.map((item) => (
                <div key={item.title} className="glass p-6 rounded-[2rem]">
                  <div className="flex gap-3">
                    <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <div>
                      <p className="text-lg font-bold leading-tight text-primary">{item.title}</p>
                      <p className="mt-2 text-sm leading-relaxed text-primary/60">{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Link to="/sobre" className="premium-button-new">
              <span className="btn-text">Conhecer nossa história</span>
              <div className="btn-icon-circle">
                 <ArrowRight className="h-4 w-4" />
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ═══ CORPO CLÍNICO ═══ */}
      <section className="section-shell relative z-10">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between mb-16">
            <Reveal>
              <div className="section-id-deco">
                <span>03</span>
                <div />
                <span>Nossa Autoridade</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-serif max-w-xl">
                 Equipe técnica focada em <span className="text-accent">diagnóstico de vida.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <Link to="/equipe" className="premium-button-new">
                <span className="btn-text">Corpo Clínico</span>
                <div className="btn-icon-circle">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </Link>
            </Reveal>
          </div>

          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {featuredTeam.map((member, index) => (
              <Reveal key={member.name} delay={index * 0.15}>
                <div className="group relative overflow-hidden rounded-[2.5rem] transition-all duration-700 hover:-translate-y-3">
                  <div className="aspect-[4/5] overflow-hidden rounded-[2.5rem]">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-10 text-white">
                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent/90 mb-2">
                      {member.role}
                    </p>
                    <h3 className="font-display text-3xl font-bold leading-tight">
                      {member.name}
                    </h3>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ URGÊNCIA ═══ */}
      <section className="section-shell relative z-10 overflow-hidden bg-primary/5 dark:bg-primary/5 py-24 lg:py-32">
        {/* Urgent Blobs */}
        <div className="bg-blob left-[-5%] top-0 bg-primary/5 opacity-20" />
        
        <div className="mx-auto max-w-6xl">
          <div className="section-id-deco !mb-12">
            <span className="!text-primary/40">04</span>
            <div className="!bg-primary/10" />
            <span className="!text-primary/30">Protocolos de Segurança</span>
          </div>
          
          <div className="grid gap-16 lg:grid-cols-[1fr,1.2fr] lg:items-center">
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
              <div className="space-y-4">
                <p className="text-[11px] font-extrabold uppercase tracking-[0.4em] text-primary/40">Central de Urgência</p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium leading-tight text-primary">
                  Agilidade médica e <br />
                  <span className="italic text-accent">critério humanizado.</span>
                </h2>
                <p className="max-w-xl text-lg text-primary/60 font-medium">
                  Protocolos internacionais de triagem para momentos em que a vida não pode esperar.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {clinic.emergencySignals.map((item) => (
                  <div key={item.title} className="glass p-6 rounded-[1.7rem] border-black/5 dark:border-white/10 dark:bg-white/5">
                    <div className="flex gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent text-white shadow-xl">
                        <Siren className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold leading-tight text-primary mb-1">{item.title}</h3>
                        <p className="text-sm leading-relaxed text-primary/50">{item.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-4 sm:flex-row pt-4">
                <a href={`tel:${clinic.emergencyPhone.replace(/\D/g, "")}`} className="premium-button-new !bg-accent !text-white !border-none !py-5 pulse-danger shadow-2xl shadow-accent/40 flex-1">
                  <Phone className="h-5 w-5 fill-current" />
                  <span className="btn-text !text-white !text-sm !tracking-widest">LIGAR IMEDIATAMENTE</span>
                </a>
                <Link to="/emergencia" className="premium-button-new !bg-primary/5 !border-primary/10 !py-5 hover:!bg-primary/10 flex-1">
                  <span className="btn-text !text-primary/80 !text-sm !tracking-widest">Protocolos de Socorro</span>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══ DEPOIMENTOS ═══ */}
      <section className="section-shell relative z-10">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="section-id-deco">
              <span>05</span>
              <div />
              <span>Experiência</span>
            </div>
            <SectionIntro
              eyebrow="Depoimentos"
              title="Confiança real reforçada por experiências que fazem sentido."
              description="O objetivo aqui é mostrar acolhimento, clareza de conduta e segurança médica sem cair em uma narrativa genérica."
            />
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {clinic.testimonials.map((testimonial, index) => (
              <Reveal key={testimonial.name} delay={index * 0.06} className="glass p-8 rounded-[2rem] border-black/5 dark:border-white/10 dark:bg-white/5">
                <div className="flex items-center gap-1 text-accent">
                  {[0, 1, 2, 3, 4].map((star) => (
                    <Star key={star} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-primary/80 dark:text-white/70">
                  "{testimonial.quote}"
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 dark:bg-white/10 text-sm font-bold text-primary dark:text-white">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-primary dark:text-white">{testimonial.name}</p>
                    <p className="text-xs text-accent font-medium tracking-wide">{testimonial.role}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* CTA FINAL DEPOIMENTOS (Para Falar/Agendar redundância) */}
          <Reveal delay={0.3} className="mt-20 flex flex-col sm:flex-row items-center justify-center gap-8">
            <Link to="/contato" className="premium-button-new !bg-accent !text-white !border-none !px-10 !py-6 shadow-2xl shadow-accent/30 group">
              <span className="btn-text !text-white !text-sm !tracking-widest">Agendar Atendimento</span>
              <div className="btn-icon-circle !bg-white !text-accent shadow-none">
                <ArrowRight className="h-5 w-5 stroke-[2.5px]" />
              </div>
            </Link>
            <a href={clinic.whatsapp} target="_blank" rel="noreferrer" className="premium-button-new !px-10 !py-6 shadow-2xl group">
              <span className="btn-text !text-sm !tracking-widest">Falar com a Clínica</span>
              <div className="btn-icon-circle !bg-accent !text-white">
                <ArrowUpRight className="h-5 w-5 stroke-[2.5px]" />
              </div>
            </a>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
