import React, { useState, useRef, useEffect, useCallback } from 'react';
import antesImg from '../../assets/antes.png';
import depoisImg from '../../assets/depois.png';

const BeforeAfterGallery = () => {
    const [sliderPos, setSliderPos] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMove = useCallback((clientX: number) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
        const percentage = (x / rect.width) * 100;
        setSliderPos(percentage);
    }, []);

    const onMouseMove = useCallback((e: MouseEvent) => {
        if (!isDragging) return;
        handleMove(e.clientX);
    }, [isDragging, handleMove]);

    const onTouchMove = useCallback((e: TouchEvent) => {
        if (!isDragging) return;
        handleMove(e.touches[0].clientX);
    }, [isDragging, handleMove]);

    const stopDragging = useCallback(() => {
        setIsDragging(false);
    }, []);

    useEffect(() => {
        if (isDragging) {
            window.addEventListener('mousemove', onMouseMove);
            window.addEventListener('mouseup', stopDragging);
            // Non-passive to prevent scrolling while dragging on mobile
            window.addEventListener('touchmove', onTouchMove, { passive: false });
            window.addEventListener('touchend', stopDragging);
        } else {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseup', stopDragging);
            window.removeEventListener('touchmove', onTouchMove);
            window.removeEventListener('touchend', stopDragging);
        }

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseup', stopDragging);
            window.removeEventListener('touchmove', onTouchMove);
            window.removeEventListener('touchend', stopDragging);
        };
    }, [isDragging, onMouseMove, onTouchMove, stopDragging]);

    return (
        <section id="galeria" className="py-24 px-4 md:px-16 w-full max-w-6xl mx-auto overflow-hidden">
            {/* Header */}
            <div className="mb-16 flex flex-col items-center mx-auto text-center">
                <div className="flex items-center gap-4 mb-6">
                    <span className="w-12 h-[1px] bg-accent/50" />
                    <span className="font-mono-data text-xs text-accent uppercase tracking-[0.2em] font-medium">
                        A Arte da Transformação
                    </span>
                    <span className="w-12 h-[1px] bg-accent/50" />
                </div>
                <h2 className="font-serif-drama text-5xl md:text-6xl text-primary mb-6 leading-none">
                    Mude Seu Sorriso.
                </h2>
                <p className="font-sans-outfit text-primary/70 max-w-xl mx-auto text-base md:text-lg">
                    Deslize para ver os resultados impressionantes de uma reabilitação estética avançada.
                </p>
            </div>

            {/* Split Slider Container */}
            <div className="w-full max-w-4xl mx-auto">
                <div
                    ref={containerRef}
                    className="relative w-full aspect-[4/3] sm:aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl bg-dark/20 border border-white/10 group select-none touch-none"
                    onMouseDown={(e) => {
                        setIsDragging(true);
                        handleMove(e.clientX);
                    }}
                    onTouchStart={(e) => {
                        setIsDragging(true);
                        handleMove(e.touches[0].clientX);
                    }}
                >
                    {/* After Image (Background) */}
                    <div className="absolute inset-0 w-full h-full">
                        <img
                            src={depoisImg}
                            alt="Sorriso depois do tratamento"
                            className="w-full h-full object-cover pointer-events-none"
                        />
                        <div className="absolute top-6 right-6 bg-dark/80 backdrop-blur-md px-5 py-2 rounded-full border border-white/10 shadow-lg z-0">
                            <span className="font-mono-data text-xs text-cream uppercase tracking-widest font-bold">Depois</span>
                        </div>
                    </div>

                    {/* Before Image (Foreground, clipped) */}
                    <div
                        className="absolute inset-0 w-full h-full"
                        style={{ clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)` }}
                    >
                        <img
                            src={antesImg}
                            alt="Sorriso antes do tratamento"
                            className="w-full h-full object-cover pointer-events-none"
                        />
                        <div className="absolute top-6 left-6 bg-dark/80 backdrop-blur-md px-5 py-2 rounded-full border border-white/10 shadow-lg z-10">
                            <span className="font-mono-data text-xs text-white/50 uppercase tracking-widest font-bold">Antes</span>
                        </div>

                        {/* Shadow over the after image for depth */}
                        <div className="absolute top-0 right-0 bottom-0 w-[50px] translate-x-1/2 bg-gradient-to-r from-transparent to-black/20 pointer-events-none" />
                    </div>

                    {/* Slider UI */}
                    <div
                        className="absolute top-0 bottom-0 flex flex-col items-center justify-center cursor-ew-resize will-change-transform z-30 group/handle"
                        style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}
                    >
                        {/* Divider Line */}
                        <div className="w-0.5 h-full bg-white/50 backdrop-blur-sm group-hover/handle:bg-white transition-colors" />

                        {/* Handle Thumb */}
                        <div className={`absolute w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border-2 transition-all duration-300 flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.5)] ${isDragging ? 'border-accent scale-95 bg-white/20' : 'border-white/50 group-hover/handle:border-white group-hover/handle:scale-110'}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white drop-shadow-md">
                                <path d="m9 18-6-6 6-6" />
                                <path d="m15 18 6-6-6-6" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BeforeAfterGallery;
