import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import draAmandaImg from '@/assets/dra_amanda.png';

gsap.registerPlugin(ScrollTrigger);

export const About = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.about-reveal',
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 70%",
                    }
                }
            );

            gsap.fromTo('.about-image',
                { scale: 0.9, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 1.2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 70%",
                    }
                }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="sobre" ref={containerRef} className="py-16 lg:py-24 px-8 md:px-16 w-full max-w-7xl mx-auto overflow-hidden">
            <div className="flex flex-col lg:flex-row gap-16 items-center">

                {/* Content Side */}
                <div className="lg:w-1/2 flex flex-col gap-6">
                    <div className="about-reveal flex items-center gap-4 mb-2">
                        <div className="w-12 h-[1px] bg-accent" />
                        <span className="font-mono-data text-xs text-accent uppercase tracking-widest font-semibold">
                            Quem Somos
                        </span>
                    </div>

                    <h2 className="about-reveal font-serif-drama text-4xl md:text-6xl text-primary leading-tight">
                        Muito além dos dentes, cuidamos de pessoas.
                    </h2>

                    <p className="about-reveal font-sans-outfit text-lg text-primary/80 font-light mt-4 leading-relaxed">
                        A Souffi Odontologia nasceu com o propósito de desmistificar a ida ao dentista. Acreditamos que cuidar da saúde bucal não precisa ser sinônimo de dor ou ansiedade, mas sim um momento de autocuidado e reconexão com o seu sorriso.
                    </p>

                    <p className="about-reveal font-sans-outfit text-lg text-primary/80 font-light leading-relaxed">
                        Nossa equipe é formada por profissionais apaixonados e tecnicamente rigorosos, prontos para oferecer tratamentos acessíveis, seguros e com resultados que você volta a ter orgulho de mostrar para o mundo.
                    </p>

                    <div className="about-reveal mt-8 pb-4 border-b border-border flex items-center gap-4">
                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-accent/20">
                            <img src={draAmandaImg} alt="Dra. Responsável" className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <div className="font-sans-bold text-primary text-lg">Dra. Amanda Souffi</div>
                            <div className="font-sans-outfit text-sm text-primary/60">Cirurgiã-Dentista e Diretora Clínica</div>
                        </div>
                    </div>
                </div>

                {/* Image Side */}
                <div className="lg:w-1/2 relative h-[500px] md:h-[600px] w-full mt-10 lg:mt-0">
                    <div
                        className="about-image absolute inset-0 rounded-[3rem] bg-cover bg-center shadow-2xl"
                        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop")' }}
                    />
                    {/* Decorative element */}
                    <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-accent/10 rounded-full blur-3xl -z-10" />
                    <div className="absolute -top-8 -right-8 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
                </div>

            </div>
        </section>
    );
};

export default About;
