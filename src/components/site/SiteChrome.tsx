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
          "rounded-full px-4 py-2 text-sm font-semibold tracking-wide text-primary/70 transition-all duration-300 hover:bg-primary/5 hover:text-primary",
          isActive && "nav-active-item",
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
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/10 theme-adaptive-surface px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-primary/70">
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
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary/70">
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
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary/70">
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
  const WhatsAppIcon = () => (
    <svg
      viewBox="0 0 24 24"
      className="h-7 w-7 fill-current"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.63 1.433h.054c6.551 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );

  return (
    <>
      <motion.a
        href={clinic.whatsapp}
        target="_blank"
        rel="noreferrer"
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-28 right-5 z-40 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_20px_60px_-15px_rgba(37,211,102,0.6)] whatsapp-pulse"
        aria-label="Conversar no WhatsApp"
      >
        <WhatsAppIcon />
      </motion.a>

      <div className="fixed bottom-3 left-4 right-4 z-50 sm:left-1/2 sm:right-auto sm:w-[min(1060px,calc(100%-2rem))] sm:-translate-x-1/2">
        <div className="rounded-[1.9rem] border border-primary/10 theme-adaptive-surface px-4 py-3 shadow-[0_20px_80px_-40px_rgba(39,51,46,0.38)] backdrop-blur-2xl">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-primary/70">
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

      <header className="fixed inset-x-0 top-8 z-50 px-4 sm:px-8">
        <div className="mx-auto flex max-w-4xl items-center justify-between rounded-full border border-primary/10 bg-background/60 px-6 py-2 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.1)] backdrop-blur-3xl transition-all duration-500 hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.15)]">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg">
              <Stethoscope className="h-4 w-4" />
            </div>
            <div className="hidden sm:block">
              <p className="font-display text-2xl leading-none text-primary">{clinic.shortName}</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 xl:flex">
            {clinic.nav.map((item) => (
              <HeaderLink key={item.href} href={item.href} label={item.label} />
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link to="/contato" className="premium-button !py-3 !px-6 text-[11px]">
              <span>Agendar</span>
            </Link>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary/10 bg-primary/5 text-primary xl:hidden"
              onClick={() => setMenuOpen((value) => !value)}
              aria-label="Abrir menu"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="mx-auto mt-3 max-w-6xl rounded-[1.75rem] border border-primary/10 theme-adaptive-surface p-4 shadow-[0_30px_100px_-50px_rgba(0,0,0,0.5)] backdrop-blur-2xl xl:hidden">
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
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4, ease: "anticipate" }}
          className="pb-32 sm:pb-24"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>

      <Footer />
      <ThemeToggle />
      <StickyActions />
    </div>
  );
}
