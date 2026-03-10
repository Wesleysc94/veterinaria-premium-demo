import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  CalendarClock,
  ChevronRight,
  Clock3,
  Instagram,
  MapPin,
  Menu,
  Phone,
  ShieldPlus,
  Stethoscope,
  X,
} from "lucide-react";

import { clinic } from "@/data/siteContent";
import { ThemeToggle } from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";

const pageTransition = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -18 },
  transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
};

function HeaderLink({ href, label }: { href: string; label: string }) {
  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        cn(
          "rounded-full px-4 py-2 text-sm font-semibold tracking-wide text-primary/70 transition-all duration-300 hover:bg-white/70 hover:text-primary",
          isActive && "bg-white text-primary shadow-[0_12px_40px_-24px_rgba(39,51,46,0.42)]",
        )
      }
    >
      {label}
    </NavLink>
  );
}

function Footer() {
  return (
    <footer className="mt-20 border-t border-primary/10 px-6 pb-32 pt-12 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.2fr,0.7fr,0.95fr]">
        <div className="space-y-5">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-white/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-primary/70">
            <ShieldPlus className="h-3.5 w-3.5 text-accent" />
            {clinic.badge}
          </span>
          <div>
            <p className="font-display text-4xl text-primary">{clinic.name}</p>
            <p className="mt-4 max-w-xl text-base leading-8 text-primary/70">
              {clinic.tagline}
            </p>
            <p className="mt-4 max-w-xl text-sm leading-7 text-primary/60">
              {clinic.supportingLine}
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary/58">
            Navegacao
          </p>
          <div className="grid gap-3">
            {clinic.nav.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="text-sm text-primary/70 transition hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary/58">
            Contato rapido
          </p>
          <div className="space-y-3 text-sm text-primary/70">
            <a className="flex items-center gap-3 hover:text-primary" href={clinic.whatsapp}>
              <Phone className="h-4 w-4 text-accent" />
              WhatsApp {clinic.emergencyPhone}
            </a>
            <p className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 text-accent" />
              {clinic.address}
            </p>
            <p className="flex items-start gap-3">
              <Clock3 className="mt-0.5 h-4 w-4 text-accent" />
              {clinic.hours[0]}
            </p>
            <a className="flex items-center gap-3 hover:text-primary" href={clinic.instagram}>
              <Instagram className="h-4 w-4 text-accent" />
              Instagram da clinica
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function StickyActions() {
  return (
    <>
      <motion.a
        href={clinic.whatsapp}
        target="_blank"
        rel="noreferrer"
        whileHover={{ y: -4 }}
        className="group fixed bottom-28 right-5 z-40 hidden items-center gap-2 rounded-full border border-white/70 bg-white/90 px-4 py-3 text-sm font-semibold text-primary shadow-[0_18px_50px_-24px_rgba(39,51,46,0.28)] backdrop-blur-xl sm:flex"
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#25D366] text-white">
          <Phone className="h-4 w-4" />
        </span>
        WhatsApp
        <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </motion.a>

      <div className="fixed bottom-3 left-4 right-4 z-50 sm:left-1/2 sm:right-auto sm:w-[min(1060px,calc(100%-2rem))] sm:-translate-x-1/2">
        <div className="rounded-[1.9rem] border border-white/70 bg-background/95 px-4 py-3 shadow-[0_20px_80px_-40px_rgba(39,51,46,0.38)] backdrop-blur-2xl">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-primary/55">
                Atendimento e urgencia
              </p>
              <p className="text-sm text-primary/70">
                Agendamento rapido para rotina, vacinacao e check-up, com canal visivel para triagem de urgencia.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link to="/emergencia" className="premium-button-secondary button-shimmer justify-center">
                <ShieldPlus className="h-4 w-4" />
                Ver sinais de urgencia
              </Link>
              <Link to="/contato" className="premium-button button-shimmer justify-center">
                <CalendarClock className="h-4 w-4" />
                Agendar atendimento
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function SiteChrome() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-primary">
      <div className="ambient-orb left-[-10rem] top-[-4rem] h-96 w-96 bg-[radial-gradient(circle_at_center,rgba(174,191,168,0.28),transparent_70%)]" />
      <div className="ambient-orb right-[-10rem] top-[18rem] h-[28rem] w-[28rem] bg-[radial-gradient(circle_at_center,rgba(94,130,145,0.18),transparent_72%)]" />

      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full border theme-adaptive-bg px-5 py-3 shadow-[0_20px_90px_-50px_rgba(39,51,46,0.36)] backdrop-blur-xl transition hover:shadow-[0_20px_90px_-40px_rgba(39,51,46,0.45)]">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-background shadow-[0_18px_50px_-18px_rgba(47,93,115,0.82)]">
              <Stethoscope className="h-5 w-5" />
            </div>
            <div>
              <p className="font-display text-2xl leading-none text-primary">{clinic.shortName}</p>
              <p className="text-[10px] uppercase tracking-[0.32em] text-primary/60">
                Clinica veterinaria premium
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 xl:flex">
            {clinic.nav.map((item) => (
              <HeaderLink key={item.href} href={item.href} label={item.label} />
            ))}
          </nav>

          <div className="hidden items-center gap-3 xl:flex">
            <Link to="/emergencia" className="premium-button-secondary button-shimmer">
              Emergencia
            </Link>
            <Link to="/contato" className="premium-button button-shimmer">
              Agendar consulta
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-primary/10 bg-background text-primary xl:hidden"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label="Abrir menu"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {menuOpen && (
          <div className="mx-auto mt-3 max-w-6xl rounded-[1.75rem] border border-white/70 bg-white/90 p-4 shadow-[0_20px_90px_-48px_rgba(39,51,46,0.4)] backdrop-blur-xl xl:hidden">
            <div className="grid gap-2">
              {clinic.nav.map((item) => (
                <HeaderLink key={item.href} href={item.href} label={item.label} />
              ))}
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                <Link to="/emergencia" className="premium-button-secondary button-shimmer justify-center">
                  Emergencia
                </Link>
                <Link to="/contato" className="premium-button button-shimmer justify-center">
                  Agendar consulta
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      <AnimatePresence mode="wait">
        <motion.main key={location.pathname} {...pageTransition} className="pb-32 sm:pb-24">
          <Outlet />
        </motion.main>
      </AnimatePresence>

      <Footer />
      <ThemeToggle />
      <StickyActions />
    </div>
  );
}
