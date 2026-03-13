import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  Menu,
  Stethoscope,
  X,
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
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen bg-background text-primary selection:bg-accent/30 overflow-x-hidden">
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
            <Link to="/contato" className="premium-button hidden sm:flex !py-2.5 !px-5 text-[11px] uppercase tracking-widest">
              Agendar Avaliação
            </Link>
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/5 text-primary hover:bg-primary/10 transition-colors lg:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* ─── MOBILE MENU DELUXE (WX/LUMINA STYLE) ─── */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-0 z-[110] flex flex-col items-center justify-center bg-white/95 backdrop-blur-3xl lg:hidden p-8"
            >
              <nav className="flex flex-col items-center gap-8 w-full">
                {clinic.nav.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                  >
                    <Link
                      to={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="text-4xl font-display font-medium text-primary/40 hover:text-primary transition-all duration-300 hover:italic hover:tracking-widest"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="mt-12 flex flex-col items-center gap-6 w-full max-w-xs"
                >
                  <Link to="/contato" onClick={() => setMenuOpen(false)} className="premium-button w-full justify-center py-5 uppercase tracking-[0.2em] text-[12px]">
                    Agendar Agora
                  </Link>
                  <div className="flex items-center gap-4 py-4 px-8 rounded-full border border-primary/5 bg-primary/5">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary/30">Mudar Tema</span>
                    <ThemeToggle />
                  </div>
                </motion.div>
              </nav>

              <button 
                onClick={() => setMenuOpen(false)}
                className="absolute top-8 right-8 h-12 w-12 flex items-center justify-center rounded-full bg-primary/5 text-primary"
              >
                <X className="h-6 w-6" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="relative z-10"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>

      <footer className="section-shell-tight mt-14 border-t border-primary/10 pb-32">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.25fr,0.7fr,0.95fr]">
          <div className="space-y-5">
             <p className="font-display text-4xl text-primary sm:text-5xl">{clinic.name}</p>
             <p className="mt-4 max-w-xl text-base leading-8 text-primary/70">{clinic.tagline}</p>
          </div>
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary/70">Navegação</p>
            <div className="grid gap-3">
              {clinic.nav.map((item) => (
                <Link key={item.href} to={item.href} className="text-sm text-primary/70 transition hover:text-primary">{item.label}</Link>
              ))}
            </div>
          </div>
          <div className="space-y-4">
             <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary/70">Contato</p>
             <p className="text-sm text-primary/70">{clinic.address}</p>
             <p className="text-sm text-primary/70">{clinic.phone}</p>
          </div>
        </div>
      </footer>
      
      {/* ─── DISCRETE WHATSAPP (STANDALONE) ─── */}
      <motion.a
        href={clinic.whatsapp}
        target="_blank"
        rel="noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-[100] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl lg:bottom-10 lg:right-10 group"
        aria-label="WhatsApp"
      >
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 group-hover:hidden" />
        <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.63 1.433h.054c6.551 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </motion.a>
    </div>
  );
}
