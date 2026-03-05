import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export const Footer = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleNavClick = (path: string, hash?: string) => {
        if (location.pathname !== path) {
            navigate(hash ? `${path}#${hash}` : path);
        } else if (hash) {
            const element = document.getElementById(hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <footer className="w-full bg-dark text-cream pt-24 pb-12 px-8 md:px-16 rounded-t-[4rem] relative overflow-hidden mt-16">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-16">

                {/* Brand & System Status */}
                <div className="flex flex-col gap-6 max-w-sm">
                    <div className="font-sans-bold text-3xl tracking-tight text-cream">
                        Souffi Odontologia
                    </div>
                    <p className="font-sans-outfit text-cream/60 text-sm leading-relaxed">
                        Odontologia de excelência em Guaianases. Precisão clínica, reabilitação avançada e estética natural em um ambiente humano e acolhedor.
                    </p>

                    <div className="mt-8 flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-4 py-2 w-max">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                        </span>
                        <span className="font-mono-data text-xs text-cream/80 uppercase tracking-widest">
                            Sistema Operacional
                        </span>
                    </div>
                </div>

                {/* Links Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full max-w-2xl font-sans-outfit">
                    <div className="flex flex-col gap-5">
                        <h4 className="font-mono-data text-xs text-accent uppercase tracking-widest flex items-center gap-2">
                            <span className="w-2 h-[1px] bg-accent"></span> A Clínica
                        </h4>
                        <div className="flex flex-col gap-3 text-sm">
                            <button onClick={() => handleNavClick('/', 'sobre')} className="text-left text-cream/50 xl:text-cream/70 hover:text-white hover:translate-x-1 transition-all duration-300">Sobre a Souffi</button>
                            <button onClick={() => handleNavClick('/', 'especialidades')} className="text-left text-cream/50 xl:text-cream/70 hover:text-white hover:translate-x-1 transition-all duration-300">Nossos Diferenciais</button>
                            <button onClick={() => handleNavClick('/', 'avaliacoes')} className="text-left text-cream/50 xl:text-cream/70 hover:text-white hover:translate-x-1 transition-all duration-300">Testemunhos</button>
                        </div>
                    </div>

                    <div className="flex flex-col gap-5">
                        <h4 className="font-mono-data text-xs text-accent uppercase tracking-widest flex items-center gap-2">
                            <span className="w-2 h-[1px] bg-accent"></span> Tratamentos
                        </h4>
                        <div className="flex flex-col gap-3 text-sm">
                            <button onClick={() => handleNavClick('/tratamentos/prevencao-integral')} className="text-left text-cream/50 xl:text-cream/70 hover:text-white hover:translate-x-1 transition-all duration-300">Prevenção e Limpeza</button>
                            <button onClick={() => handleNavClick('/tratamentos/ortodontia')} className="text-left text-cream/50 xl:text-cream/70 hover:text-white hover:translate-x-1 transition-all duration-300">Ortodontia e Estética</button>
                            <button onClick={() => handleNavClick('/tratamentos/reabilitacao')} className="text-left text-cream/50 xl:text-cream/70 hover:text-white hover:translate-x-1 transition-all duration-300">Reabilitação Oral</button>
                        </div>
                    </div>

                    <div className="flex flex-col gap-5 col-span-1 md:col-span-2 lg:col-span-1">
                        <h4 className="font-mono-data text-xs text-accent uppercase tracking-widest flex items-center gap-2">
                            <span className="w-2 h-[1px] bg-accent"></span> Contato
                        </h4>
                        <div className="flex flex-col gap-3 text-sm">
                            <span className="text-cream/50 xl:text-cream/70 block">Guaianases, São Paulo - SP</span>
                            <span className="text-cream/50 xl:text-cream/70 block">WhatsApp: (11) 99999-9999</span>
                            <button
                                onClick={() => handleNavClick('/', 'contato')}
                                className="text-left text-accent border-b border-accent/30 hover:border-accent hover:text-white transition-all w-max pb-0.5 mt-2"
                            >
                                Agendar Avaliação &rarr;
                            </button>
                        </div>
                    </div>
                </div>

            </div>

            <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 font-mono-data text-xs text-cream/40 px-4">
                <span>&copy; {new Date().getFullYear()} Souffi Odontologia. Todos os direitos reservados.</span>
                <div className="flex gap-6">
                    <a href="#" className="hover:text-cream/80 transition-colors">Privacidade</a>
                    <a href="#" className="hover:text-cream/80 transition-colors">Termos</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
