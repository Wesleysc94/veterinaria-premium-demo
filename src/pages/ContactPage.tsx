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
        eyebrow="Contato e agendamento"
        title="Uma pagina clara para rotina, primeira consulta, check-up e urgencia."
        description="Formulario, WhatsApp, telefone, endereco, mapa e horario aparecem em uma unica experiencia pensada para reduzir friccao e aumentar conversao em mobile."
      />

      <section className="px-6 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.05fr,0.95fr]">
          <Reveal className="card-surface p-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-primary/50">
              Formulario de atendimento
            </p>
            <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="space-y-2">
                  <span className="text-sm font-medium text-primary/70">Nome do tutor</span>
                  <input className="input-surface" type="text" placeholder="Seu nome" required />
                </label>
                <label className="space-y-2">
                  <span className="text-sm font-medium text-primary/70">Telefone</span>
                  <input className="input-surface" type="tel" placeholder="(11) 99999-9999" required />
                </label>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="space-y-2">
                  <span className="text-sm font-medium text-primary/70">Nome do pet</span>
                  <input className="input-surface" type="text" placeholder="Nome do pet" required />
                </label>
                <label className="space-y-2">
                  <span className="text-sm font-medium text-primary/70">Servico de interesse</span>
                  <select className="input-surface" defaultValue="">
                    <option value="" disabled>
                      Selecionar
                    </option>
                    {services.map((service) => (
                      <option key={service.slug}>{service.name}</option>
                    ))}
                  </select>
                </label>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="space-y-2">
                  <span className="text-sm font-medium text-primary/70">E-mail</span>
                  <input className="input-surface" type="email" placeholder="voce@email.com" />
                </label>
                <label className="space-y-2">
                  <span className="text-sm font-medium text-primary/70">Tipo de atendimento</span>
                  <select className="input-surface" defaultValue="">
                    <option value="" disabled>
                      Selecionar
                    </option>
                    <option>Primeira consulta</option>
                    <option>Retorno</option>
                    <option>Check-up preventivo</option>
                    <option>Urgencia orientada</option>
                  </select>
                </label>
              </div>
              <label className="space-y-2">
                <span className="text-sm font-medium text-primary/70">Conte rapidamente o que esta acontecendo</span>
                <textarea
                  className="input-surface min-h-[148px] resize-none"
                  placeholder="Sintomas, rotina, tempo de evolucao, vacinas recentes ou qualquer detalhe que ajude na triagem."
                />
              </label>
              <button type="submit" className="premium-button w-full justify-center">
                <CalendarRange className="h-4 w-4" />
                Solicitar atendimento
              </button>
            </form>
          </Reveal>

          <div className="grid gap-6">
            <Reveal delay={0.08} className="card-surface p-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-primary/50">
                Informacoes da clinica
              </p>
              <div className="mt-6 space-y-4 text-sm text-primary/70">
                <a href={clinic.whatsapp} className="flex items-center gap-3 hover:text-primary">
                  <Phone className="h-4 w-4 text-accent" />
                  WhatsApp {clinic.emergencyPhone}
                </a>
                <a href={`tel:${clinic.phone.replace(/\D/g, "")}`} className="flex items-center gap-3 hover:text-primary">
                  <Phone className="h-4 w-4 text-accent" />
                  Telefone principal {clinic.phone}
                </a>
                <p className="flex items-start gap-3">
                  <MapPin className="mt-1 h-4 w-4 text-accent" />
                  {clinic.address}
                </p>
                <p className="flex items-start gap-3">
                  <Clock3 className="mt-1 h-4 w-4 text-accent" />
                  {clinic.hours.join(" . ")}
                </p>
                <a href={clinic.instagram} className="flex items-center gap-3 hover:text-primary">
                  <Instagram className="h-4 w-4 text-accent" />
                  @auravet
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="card-surface p-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-primary/50">
                Canal de urgencia
              </p>
              <h2 className="mt-4 font-display text-4xl leading-none text-primary">
                Quando houver sinal de alerta, o tutor encontra um caminho claro.
              </h2>
              <p className="mt-4 text-sm leading-7 text-primary/70">
                O site reforca o telefone, o WhatsApp e o fluxo de triagem para momentos em que a rapidez de resposta importa tanto quanto a confianca na equipe.
              </p>
              <a href={`tel:${clinic.emergencyPhone.replace(/\D/g, "")}`} className="premium-button mt-6 justify-center">
                <Siren className="h-4 w-4" />
                Ligar para triagem
              </a>
            </Reveal>

            <Reveal delay={0.12} className="card-surface overflow-hidden p-4">
              <iframe
                title="Mapa da clinica"
                src={clinic.mapEmbed}
                className="h-[320px] w-full rounded-[1.6rem] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
