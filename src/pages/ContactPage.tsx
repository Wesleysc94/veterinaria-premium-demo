import { FormEvent } from "react";
import { CalendarRange, Clock3, Instagram, MapPin, Phone, Siren } from "lucide-react";
import { toast } from "sonner";

import { clinic, services } from "@/data/siteContent";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";

export default function ContactPage() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    toast.success("Solicitacao enviada.", {
      description: "Fluxo demonstrativo concluido. O proximo passo seria integrar CRM, WhatsApp ou agenda da clinica.",
    });
  };

  return (
    <div className="pb-10">
      <PageHero
        eyebrow="Atendimento e Concierge"
        title="O primeiro passo para o bem-estar do seu pet começa aqui."
        description="Nossa equipe está pronta para oferecer um atendimento ágil, humano e tecnológico. Inicie seu protocolo de cuidado premium através do formulário abaixo."
        backgroundImage="/hero_contact_premium_cinematic_1773418210853.png"
        hideCTA={true}
      />

      <section className="section-shell-tight" id="contact-form">
        <div className="mx-auto grid max-w-6xl items-start gap-6 lg:grid-cols-[1.05fr,0.95fr]">
          <Reveal className="card-surface p-7">
            <p className="text-[11px] font-bold uppercase tracking-[0.32em] text-accent">
              Formulario de atendimento
            </p>
            <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="space-y-3 group">
                  <span className="text-[11px] font-black uppercase tracking-[0.3em] text-primary/50 group-focus-within:text-accent transition-colors">Nome do tutor</span>
                  <input className="input-surface !text-lg !font-medium" type="text" placeholder="Seu nome" required />
                </label>
                <label className="space-y-3 group">
                  <span className="text-[11px] font-black uppercase tracking-[0.3em] text-primary/50 group-focus-within:text-accent transition-colors">Telefone</span>
                  <input className="input-surface !text-lg !font-medium" type="tel" placeholder="(11) 99999-9999" required />
                </label>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                <label className="space-y-3 group">
                  <span className="text-[11px] font-black uppercase tracking-[0.3em] text-primary/50 group-focus-within:text-accent transition-colors">Nome do pet</span>
                  <input className="input-surface !text-lg !font-medium" type="text" placeholder="Nome do pet" required />
                </label>
                <label className="space-y-3 group">
                  <span className="text-[11px] font-black uppercase tracking-[0.3em] text-primary/50 group-focus-within:text-accent transition-colors">Serviço de interesse</span>
                  <select className="input-surface !text-lg !font-medium" defaultValue="">
                    <option value="" disabled>Selecionar</option>
                    {services.map((service) => (
                      <option key={service.slug}>{service.name}</option>
                    ))}
                  </select>
                </label>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                <label className="space-y-3 group">
                  <span className="text-[11px] font-black uppercase tracking-[0.3em] text-primary/50 group-focus-within:text-accent transition-colors">E-mail</span>
                  <input className="input-surface !text-lg !font-medium" type="email" placeholder="voce@email.com" />
                </label>
                <label className="space-y-3 group">
                  <span className="text-[11px] font-black uppercase tracking-[0.3em] text-primary/50 group-focus-within:text-accent transition-colors">Tipo de atendimento</span>
                  <select className="input-surface !text-lg !font-medium" defaultValue="">
                    <option value="" disabled>Selecionar</option>
                    <option>Primeira consulta</option>
                    <option>Retorno</option>
                    <option>Check-up preventivo</option>
                    <option>Urgência orientada</option>
                  </select>
                </label>
              </div>
              <label className="space-y-3 group">
                <span className="text-[11px] font-black uppercase tracking-[0.3em] text-primary/50 group-focus-within:text-accent transition-colors">Mensagem ou sintomas</span>
                <textarea
                  className="input-surface min-h-[160px] resize-none !text-lg !font-medium"
                  placeholder="Conte rapidamente o que está acontecendo..."
                />
              </label>
              <button type="submit" className="premium-button-new w-full !bg-accent !text-white !border-none !py-6 group shadow-2xl shadow-accent/20">
                <span className="btn-text !text-white !text-sm !tracking-widest">SOLICITAR AGENDAMENTO</span>
                <div className="btn-icon-circle !bg-white !text-accent shadow-none">
                  <CalendarRange className="h-5 w-5 stroke-[2.5px]" />
                </div>
              </button>
            </form>
          </Reveal>

          <div className="grid gap-6">
            <Reveal delay={0.08} className="card-surface p-8">
              <p className="text-[11px] font-bold uppercase tracking-[0.32em] text-accent">
                Concierge Digital
              </p>
              <div className="mt-8 space-y-8">
                <div>
                   <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/40 mb-4">Informações de Acesso</p>
                   <div className="space-y-6 text-sm font-medium text-primary/80">
                      <div className="flex items-start gap-4">
                        <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                        <div>
                          <p className="font-bold text-primary">Localização</p>
                          <p className="text-primary/60 mt-1 leading-relaxed">{clinic.address}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <Clock3 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                        <div>
                          <p className="font-bold text-primary">Horário de Atendimento</p>
                          <p className="text-primary/60 mt-1 leading-relaxed">{clinic.hours.join(" · ")}</p>
                        </div>
                      </div>
                   </div>
                </div>

                <div className="pt-8 border-t border-primary/5">
                   <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/40 mb-4">Redes Sociais</p>
                   <div className="flex gap-4">
                      <a href={clinic.instagram} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-primary/60 hover:text-accent transition-colors">
                        <Instagram className="h-4 w-4" />
                        <span className="text-xs font-bold uppercase tracking-widest">Instagram</span>
                      </a>
                   </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.12} className="card-surface p-8 bg-red-500/[0.03] border-red-500/10">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 shadow-lg shadow-red-500/5">
                  <Siren className="w-4 h-4" />
                </div>
                <p className="text-[11px] font-black uppercase tracking-[0.32em] text-red-500/80">
                  Canal de Urgência 24h
                </p>
              </div>
              <h3 className="mt-5 font-display text-2xl leading-none text-primary">
                Sinais de alerta não podem esperar.
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-primary/60">
                Se o seu pet apresenta sintomas graves, utilize nosso canal direto para triagem imediata via telefone.
              </p>
              <a href={`tel:${clinic.emergencyPhone.replace(/\D/g, "")}`} className="premium-button-new mt-6 !bg-red-600 !text-white !border-none !py-4 group shadow-xl shadow-red-600/20">
                <span className="btn-text !text-white !text-[11px]">LIGAR PARA TRIAGEM AGORA</span>
                <div className="btn-icon-circle !bg-white !text-red-600 shadow-none">
                  <Phone className="h-4 w-4 stroke-[2.5px]" />
                </div>
              </a>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.16} className="mx-auto mt-6 max-w-6xl w-full card-surface overflow-hidden p-4">
          <iframe
            title="Mapa da clinica"
            src={clinic.mapEmbed}
            className="h-[400px] w-full rounded-[1.8rem] border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Reveal>
      </section>
    </div>
  );
}
