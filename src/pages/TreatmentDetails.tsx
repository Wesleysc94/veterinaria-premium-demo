import React, { useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import Navbar from '../components/cinematic/Navbar';
import Contact from '../components/cinematic/Contact';
import Footer from '../components/cinematic/Footer';

const TREATMENT_DATA = {
    'prevencao-integral': {
        title: 'Prevenção Integral',
        subtitle: 'Cuidado Contínuo e Diagnóstico Precoce',
        heroImage: '/prevention.png',
        description: 'A base de um sorriso perfeito é a saúde. Na Souffi Odontologia, acreditamos que a odontologia moderna deve ser focada em evitar problemas antes que eles ocorram.',
        benefits: [
            'Profilaxia profunda com ultrassom e jato de bicarbonato.',
            'Aplicação de flúor e selantes para máxima proteção.',
            'Avaliação precoce de cáries e doenças periodontais.',
            'Orientação de higiene oral construtiva e humanizada.'
        ]
    },
    'ortodontia': {
        title: 'Ortodontia e Estética',
        subtitle: 'Sorrisos Alinhados e Harmoniosos',
        heroImage: '/orthodontics.png',
        description: 'Corrija o alinhamento dos seus dentes com as tecnologias mais discretas e rápidas do mercado, incluindo os modernos Alinhadores Invisíveis.',
        benefits: [
            'Alinhadores transparentes (Invisalign) sem restrições alimentares.',
            'Aparelhos estéticos de porcelana para maior discrição.',
            'Planejamento 3D: veja o resultado antes mesmo de começar.',
            'Tratamentos mais rápidos e confortáveis.'
        ]
    },
    'reabilitacao': {
        title: 'Reabilitação Oral & Implantes',
        subtitle: 'Recupere sua Confiança e Mastigação',
        heroImage: '/rehab.png',
        description: 'Devolvemos a função, estética e saúde do seu sorriso. Utilizamos próteses de alta qualidade e implantes biocompatíveis para um resultado natural e duradouro.',
        benefits: [
            'Implantes dentários de titânio (carga imediata quando indicado).',
            'Próteses fixas e coroas em Zircônia/Porcelana ultra-realistas.',
            'Cirurgias guiadas sem dor, com tecnologia de ponta.',
            'Lentes de Contato Dental para fechamento de espaços e estética.'
        ]
    }
};

const TreatmentDetails = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const containerRef = useRef<HTMLDivElement>(null);

    // Assert id is a valid key, else we rely on default or show error
    const data = TREATMENT_DATA[id as keyof typeof TREATMENT_DATA];

    useEffect(() => {
        window.scrollTo(0, 0); // Reset scroll on page load

        if (data) {
            const ctx = gsap.context(() => {
                gsap.fromTo('.anim-up',
                    { y: 40, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
                );
            }, containerRef);
            return () => ctx.revert();
        }
    }, [data, id]);

    if (!data) {
        return (
            <div className="w-full h-screen flex flex-col items-center justify-center bg-dark text-cream">
                <h1 className="text-4xl font-serif-drama mb-4">Tratamento não encontrado</h1>
                <button onClick={() => navigate('/')} className="text-accent hover:underline">
                    Voltar para o Início
                </button>
            </div>
        );
    }

    return (
        <div ref={containerRef} className="min-h-screen bg-transparent w-full">
            <Navbar />

            {/* Hero Section Específica */}
            <section className="relative w-full h-[60vh] md:h-[70vh] flex flex-col items-center justify-center px-8 text-center pt-20">
                <div className="absolute inset-0 z-0">
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none"
                        style={{ backgroundImage: `url(${data.heroImage})` }}
                    />
                    <div className="absolute inset-0 bg-dark/70 backdrop-blur-[2px]" />
                    <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent" />
                </div>

                <div className="relative z-10 w-full max-w-4xl flex flex-col items-center">
                    <div className="anim-up flex items-center gap-4 mb-4">
                        <span className="w-12 h-[1px] bg-accent" />
                        <span className="font-mono-data text-accent tracking-widest uppercase text-sm font-bold">
                            Especialidades Souffi
                        </span>
                        <span className="w-12 h-[1px] bg-accent" />
                    </div>
                    <h1 className="anim-up font-serif-drama text-5xl md:text-7xl lg:text-8xl text-cream leading-none mb-6 drop-shadow-xl">
                        {data.title}
                    </h1>
                    <p className="anim-up font-sans-outfit text-xl text-cream/90 font-light drop-shadow-md">
                        {data.subtitle}
                    </p>
                </div>
            </section>

            {/* Detalhes Clínicos */}
            <section className="py-24 px-8 md:px-16 w-full max-w-5xl mx-auto">
                <div className="mb-12 anim-up flex w-full">
                    <button
                        onClick={() => navigate('/#tratamentos')}
                        className="flex items-center gap-2 text-primary/60 hover:text-accent font-sans-bold text-sm uppercase tracking-widest transition-colors group"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left group-hover:-translate-x-1 transition-transform"><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></svg>
                    </button>
                </div>

                <div className="flex flex-col md:flex-row gap-16 items-start">
                    <div className="md:w-1/2 flex flex-col gap-6">
                        <h2 className="anim-up font-serif-drama text-4xl text-primary">A Visão Clínica</h2>
                        <p className="anim-up font-sans-outfit text-primary/80 text-lg leading-relaxed">
                            {data.description}
                        </p>
                    </div>

                    <div className="md:w-1/2 flex flex-col gap-6">
                        <h2 className="anim-up font-serif-drama text-4xl text-primary">Benefícios</h2>
                        <ul className="flex flex-col gap-4">
                            {data.benefits.map((benefit, idx) => (
                                <li key={idx} className="anim-up flex items-start gap-4 p-4 rounded-xl bg-primary/[0.03] border border-primary/10">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-circle text-accent shrink-0 mt-0.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                                    <span className="font-sans-outfit text-primary/80">{benefit}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-20 flex justify-center w-full anim-up">
                    <button
                        onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                        className="bg-accent text-white px-10 py-5 rounded-full font-sans-bold uppercase tracking-widest shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:scale-105 transition-transform"
                    >
                        Agendar Avaliação
                    </button>
                </div>
            </section>

            <Contact />
            <Footer />
        </div>
    );
};

export default TreatmentDetails;
