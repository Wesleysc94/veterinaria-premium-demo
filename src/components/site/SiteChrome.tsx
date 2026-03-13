import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  Menu,
  Stethoscope,
  X,
  ArrowRight,
  ShieldAlert,
  Phone,
  Mail,
  Instagram,
  MapPin,
  Facebook,
  Linkedin,
  Siren,
  CalendarDays
} from "lucide-react";

import { clinic } from "@/data/siteContent";
import { ThemeToggle } from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";

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

export function SiteChrome() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-primary selection:bg-accent/30 overflow-x-hidden">
      {/* ─── NAVBAR INTEGRADA (Editorial Premium) ─── */}
      <header className={cn(
        "fixed inset-x-0 top-0 z-[120] transition-all duration-500",
        isScrolled ? "navbar-scrolled pointer-events-auto" : "pointer-events-none"
      )}>
        <div className="mx-auto px-6 py-6 md:px-12 flex items-center justify-between max-w-[1800px]">
          <div className="flex items-center gap-4 pointer-events-auto">
            <Link to="/" className="flex items-center gap-4 group">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-white shadow-xl transition-all duration-500 group-hover:rotate-6 logo-icon">
                <Stethoscope className="h-5 w-5" />
              </div>
              <p className="font-display text-3xl font-bold tracking-tight text-primary logo-text">
                {clinic.shortName}<span className="text-accent italic font-light ml-1">Premium</span>
              </p>
            </Link>
          </div>

          <div className="flex items-center gap-8 pointer-events-auto">
            {/* Links Diretos: Apenas no Desktop para Navegação Ágil */}
            <nav className="hidden items-center lg:flex gap-2">
              {clinic.nav.slice(0, 5).map((item) => (
                <HeaderLink key={item.href} href={item.href} label={item.label} />
              ))}
            </nav>
            
            <div className="flex items-center gap-4">
              <Link to="/emergencia" className="flex items-center gap-2 px-5 py-2.5 text-white rounded-full text-[10px] font-bold uppercase tracking-[0.2em] pulse-danger">
                 <ShieldAlert className="h-4 w-4" />
                 <span className="hidden xs:inline">Emergência</span> 24h
              </Link>

              {/* Hamburger Button: No Desktop funciona como "Info Hub", no Mobile como Menu Principal */}
              <button
                onClick={() => setMenuOpen(true)}
                className="group flex h-12 w-12 items-center justify-center rounded-2xl bg-white/40 dark:bg-black/40 backdrop-blur-xl border border-white/20 shadow-xl transition-all hover:bg-white/60"
                aria-label="Informações e Contato"
              >
                <Menu className="w-6 h-6 text-accent" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ─── FULLSCREEN MENU (LUMINA EXACT REVEAL) ─── Fora do Header para evitar conflito de pointer-events */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at right top)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at right top)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at right top)" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[150] bg-background text-primary overflow-hidden pointer-events-auto"
          >
            {/* Close Button UI (Lumina Style) */}
            <div className="absolute top-6 right-6 md:right-12 z-20 flex items-center gap-4">
                <button
                  onClick={() => setMenuOpen(false)}
                  className="group relative flex items-center justify-center gap-3 px-6 py-3 overflow-hidden rounded-full bg-primary/5 backdrop-blur-xl border border-primary/10 text-primary transition-all hover:bg-primary/10"
                >
                  <span className="text-sm font-medium uppercase tracking-widest">Fechar</span>
                  <X className="w-5 h-5" />
                </button>
            </div>

            <div className="container h-full mx-auto px-6 py-24 flex flex-col lg:flex-row gap-12 lg:gap-24 relative z-0">
              {/* Column 1: Links with Slide In */}
              <div className="flex-1 flex flex-col justify-center gap-4">
                {clinic.nav.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + i * 0.05, duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                  >
                    <Link
                      to={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="group flex items-center gap-6 text-4xl md:text-5xl lg:text-7xl font-display font-medium text-primary/30 hover:text-primary transition-all duration-300"
                    >
                        <span className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-accent">
                        <ArrowRight className="w-8 h-8 md:w-12 md:h-12" />
                      </span>
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Column 2: Info (O "Hub de Contato" Premium) */}
              <div className="w-full lg:w-1/3 flex flex-col justify-center gap-6 border-l border-primary/5 pl-12 hidden lg:flex">
                <motion.div 
                  initial={{ opacity: 0, x: 20 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  transition={{ delay: 0.6 }}
                  className="glass p-6 rounded-[1.5rem] border-primary/5 space-y-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent">Localização</h4>
                  </div>
                  <p className="text-lg font-light leading-relaxed">{clinic.address}</p>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: 20 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  transition={{ delay: 0.7 }}
                  className="glass p-8 rounded-[2rem] border-primary/10 bg-primary/5 space-y-4 group hover:bg-primary/10 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center text-accent shadow-lg shadow-accent/10">
                      <Phone className="w-5 h-5 stroke-[2.5px]" />
                    </div>
                    <h4 className="text-[11px] uppercase tracking-[0.4em] font-black text-accent/80">Agendamentos</h4>
                  </div>
                  <p className="text-4xl font-bold tracking-tighter text-primary whitespace-nowrap" style={{ fontFamily: 'Outfit, sans-serif' }}>
                    {clinic.phone}
                  </p>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: 20 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  transition={{ delay: 0.8 }}
                  className="glass p-8 rounded-[2rem] border-red-500/20 bg-red-500/5 space-y-4 group hover:bg-red-500/10 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-red-600/20 flex items-center justify-center text-red-600 shadow-lg shadow-red-600/10">
                      <Siren className="w-5 h-5 stroke-[2.5px]" />
                    </div>
                    <h4 className="text-[11px] uppercase tracking-[0.4em] font-black text-red-600/80">Plantão 24h</h4>
                  </div>
                  <p className="text-4xl font-bold tracking-tighter text-red-600 whitespace-nowrap" style={{ fontFamily: 'Outfit, sans-serif' }}>
                    {clinic.emergencyPhone}
                  </p>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: 20 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  transition={{ delay: 0.9 }}
                  className="pt-4"
                >
                  <Link 
                    to="/contato" 
                    onClick={() => setMenuOpen(false)} 
                    className="premium-button-new w-full !bg-accent !text-white !border-none !py-4 group shadow-xl shadow-accent/20"
                  >
                    <span className="btn-text !text-white !text-sm !tracking-widest capitalize">Agendar Avaliação</span>
                    <div className="btn-icon-circle !bg-white !text-accent shadow-none">
                      <CalendarDays className="w-5 h-5" />
                    </div>
                  </Link>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.0 }} className="flex gap-4 items-center justify-start pt-6">
                    <a href={clinic.instagram} target="_blank" rel="noreferrer" className="h-12 w-12 flex items-center justify-center rounded-full bg-primary/5 text-primary border border-primary/5 hover:bg-accent hover:text-white hover:border-accent transition-all duration-500">
                      <span className="sr-only">Instagram</span>
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a href="#" target="_blank" rel="noreferrer" className="h-12 w-12 flex items-center justify-center rounded-full bg-primary/5 text-primary border border-primary/5 hover:bg-accent hover:text-white hover:border-accent transition-all duration-500">
                      <span className="sr-only">Facebook</span>
                      <Facebook className="w-5 h-5" />
                    </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className=""
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>

      <footer className="bg-primary/5 section-shell-tight mt-24 border-t border-primary/10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-3">
          <div className="space-y-6">
             <p className="font-display text-4xl text-primary">{clinic.name}<span className="text-accent italic">Premium</span></p>
             <p className="text-sm leading-8 text-primary/60">{clinic.tagline}</p>
             <div className="pt-8 border-t border-primary/5">
                <p className="text-[10px] uppercase tracking-[0.2em] text-primary/40 font-medium">
                  Developed by <a href="https://wx-digital.vercel.app/" target="_blank" rel="noreferrer" className="text-primary/60 hover:text-accent transition-colors font-bold">WX Digital</a>
                </p>
             </div>
          </div>
          <div className="space-y-6 lg:pl-12">
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-accent">Navegação</p>
            <div className="grid gap-3">
              {clinic.nav.map((item) => (
                <Link key={item.href} to={item.href} className="text-sm text-primary/70 transition hover:text-accent">{item.label}</Link>
              ))}
            </div>
          </div>
          <div className="space-y-6">
             <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-accent">Localização</p>
             <p className="text-sm text-primary/70 leading-7">{clinic.address}</p>
             <div className="flex gap-4 mt-8">
               <a href={`tel:${clinic.phone}`} className="h-10 w-10 flex items-center justify-center rounded-full bg-primary/5 text-primary hover:bg-accent hover:text-white transition-all">
                 <Phone className="h-4 w-4" />
               </a>
               <a href={clinic.instagram} target="_blank" rel="noreferrer" className="h-10 w-10 flex items-center justify-center rounded-full bg-primary/5 text-primary hover:bg-accent hover:text-white transition-all">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
               </a>
             </div>
          </div>
        </div>
      </footer>

      {/* ─── BOTÕES FLUTUANTES (Alinhamento Milimétrico) ─── */}
      <ThemeToggle className="!fixed !bottom-12 !left-8 !z-[200] !flex" />
      
      <a
        href={clinic.whatsapp}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-12 right-8 z-[200] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-all duration-500 hover:scale-110 hover:rotate-6 sm:right-12 pulse-whatsapp"
        aria-label="Conversar no WhatsApp"
      >
        <svg
          viewBox="0 0 448 512"
          className="h-8 w-8 fill-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.2-8.5-44.2-27.1-16.4-14.6-27.4-32.7-30.6-38.2-3.2-5.6-.3-8.6 2.5-11.3 2.5-2.5 5.5-6.5 8.3-9.7 2.8-3.3 3.7-5.6 5.5-9.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.8 23.5 9.2 31.6 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
        </svg>
      </a>
    </div>
  );
}
