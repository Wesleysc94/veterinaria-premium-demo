import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  CalendarClock,
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
          "site-nav-link",
          isActive && "site-nav-link-active",
        )
      }
    >
      {label}
    </NavLink>
  );
}

function Footer() {
  return (
    <footer className="section-shell-tight mt-14 border-t border-primary/10 pb-32">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.25fr,0.7fr,0.95fr]">
        <div className="space-y-5">
          <span className="luxury-chip">
            <ShieldPlus className="h-3.5 w-3.5 text-accent" />
            {clinic.badge}
          </span>
          <div>
            <p className="font-display text-4xl text-primary sm:text-5xl">{clinic.name}</p>
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
    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.63 1.433h.054c6.551 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );

  return (
    <>
      <motion.a
        href={clinic.whatsapp}
        target="_blank"
        rel="noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-28 left-1/2 -translate-x-1/2 z-[100] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_40px_-10px_rgba(37,211,102,0.5)] lg:bottom-10 lg:left-auto lg:right-10 lg:translate-x-0 group"
        aria-label="WhatsApp"
      >
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 group-hover:hidden" />
        <WhatsAppIcon />
      </motion.a>

      <div className="fixed bottom-6 left-4 right-4 z-[90] lg:bottom-10 lg:left-10 lg:right-auto lg:w-auto">
        <div className="rounded-full border border-white/20 bg-primary/95 px-6 py-2.5 shadow-2xl backdrop-blur-xl transition-all hover:bg-primary">
          <div className="flex items-center gap-5">
            <div className="hidden sm:flex border-r border-white/10 pr-5 mr-1 items-center gap-2">
              <Phone className="h-3 w-3 text-red-400" />
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">{clinic.emergencyPhone}</p>
            </div>
            <div className="flex items-center gap-6 w-full justify-center sm:justify-start">
              <Link to="/emergencia" className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/90 hover:text-white transition-colors">
                Urgência
              </Link>
              <div className="h-4 w-px bg-white/10" />
              <Link to="/contato" className="text-[10px] font-bold uppercase tracking-[0.25em] text-white hover:text-white transition-colors">
                Agendar
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
    <div className="relative min-h-screen bg-background text-primary selection:bg-accent/30">
      {/* ─── NAVBAR (LUMINA STYLE) ─── */}
      <header className="fixed inset-x-0 top-6 z-[120] px-4 md:px-8">
        <div className="site-shell-header mx-auto flex max-w-7xl items-center justify-between rounded-full bg-white/80 px-4 py-2 shadow-xl backdrop-blur-2xl border border-white/40">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-white shadow-md transition-transform group-hover:scale-105">
              <Stethoscope className="h-3.5 w-3.5" />
            </div>
            <p className="font-display text-xl font-bold tracking-tight text-primary">{clinic.shortName}</p>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {clinic.nav.map((item) => (
              <HeaderLink key={item.href} href={item.href} label={item.label} />
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden sm:block scale-90">
              <ThemeToggle />
            </div>
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/5 text-primary hover:bg-primary/10 transition-colors lg:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* ─── MOBILE MENU (LUMINA STYLE) ─── */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -15, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.98 }}
              className="absolute left-4 right-4 top-[70px] overflow-hidden rounded-[2rem] bg-white shadow-2xl border border-primary/5 p-8 backdrop-blur-3xl lg:hidden z-[130]"
            >
              <nav className="grid gap-6">
                {clinic.nav.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={item.href}
                      className="text-3xl font-display font-medium text-primary/40 hover:text-primary transition-colors hover:italic"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                
                <div className="mt-8 pt-6 border-t border-primary/5 flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary/30">Inverter Tema</span>
                  <div className="flex">
                    <ThemeToggle />
                  </div>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
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
       <StickyActions />
     </div>
   );
 }
