import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { hackathons } from '../data/dataHackathon';
import { socialLinks } from '../data/dataSocials';
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const Hackathons = () => {
    const { t } = useLanguage();
    const [activeIndex, setActiveIndex] = useState(0);
    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
    const [isHovered, setIsHovered] = useState(false);

    const isMobile = windowWidth < 768;
    const isTablet = windowWidth >= 768 && windowWidth <= 1200;
    const isResponsive = windowWidth <= 1200;

    // Number of cards to show based on device
    const cardsPerView = isMobile ? 1 : (isTablet ? 2 : t.hackathons.items.length);

    const nextCard = useCallback(() => {
        setActiveIndex((prev) => {
            const nextIdx = prev + cardsPerView;
            return nextIdx >= t.hackathons.items.length ? 0 : nextIdx;
        });
    }, [cardsPerView, t.hackathons.items.length]);

    const prevCard = useCallback(() => {
        setActiveIndex((prev) => {
            const prevIdx = prev - cardsPerView;
            return prevIdx < 0 ? Math.max(0, t.hackathons.items.length - cardsPerView) : prevIdx;
        });
    }, [cardsPerView, t.hackathons.items.length]);

    // Auto-play logic
    useEffect(() => {
        if (!isResponsive || isHovered) return;
        
        const interval = setInterval(() => {
            nextCard();
        }, 3000);

        return () => clearInterval(interval);
    }, [isResponsive, isHovered, nextCard]);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);



    return (
        <div className="relative w-screen min-h-screen bg-white flex flex-col items-center justify-center py-12 lg:py-20 px-6 overflow-hidden">          
            {/* Cards Slider/Container */}
            <div className="relative w-full max-w-[1600px] flex justify-center items-center">
                {/* Connecting Dotted Line - Desktop Only */}
                {!isResponsive && (
                    <div className="absolute top-[45%] left-0 w-full h-[2px] bg-transparent border-t-2 border-dashed border-gray-200 z-0" />
                )}

                <div 
                    className={`relative z-10 flex ${isResponsive ? 'flex-row items-center w-full justify-between' : 'flex-row space-x-12 px-10 items-center justify-center w-full'}`}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {/* Pagination Arrows - Responsive Only */}
                    {isResponsive && (
                        <button 
                            onClick={prevCard} 
                            className="z-50 p-3 bg-white/80 backdrop-blur-md rounded-full shadow-2xl border border-gray-100 transition-all active:scale-90"
                        >
                             <ChevronLeftIcon className="w-5 h-5 text-black" />
                        </button>
                    )}

                    <div className={`flex ${isResponsive ? 'w-[85%] overflow-hidden' : ''} justify-center items-center`}>
                        <AnimatePresence mode="wait">
                            <motion.div 
                                key={activeIndex}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.5 }}
                                className={`flex ${isResponsive ? 'gap-4 w-full justify-center' : 'gap-12'}`}
                            >
                                {t.hackathons.items.slice(activeIndex, activeIndex + cardsPerView).map((item, index) => {
                                    const realIndex = activeIndex + index;
                                    return (
                                        <div
                                            key={realIndex}
                                            className={`relative bg-white border border-gray-100 rounded-2xl md:rounded-[32px] p-6 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.08)] w-full max-w-[320px] lg:max-w-[360px] min-h-[480px] lg:h-[550px] flex flex-col justify-between transition-all duration-500 hover:shadow-[0_40px_80px_rgba(0,0,0,0.12)] ${isResponsive ? '' : 'hover:-translate-y-4'}`}
                                        >
                                            <div className="space-y-6 lg:space-y-8">
                                                {/* Card Icon Area */}
                                                <div className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-white rounded-2xl shadow-xl border border-gray-50 flex items-center justify-center group overflow-hidden">
                                                     {React.createElement(hackathons[realIndex].icon, { 
                                                         className: "w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-black transition-transform duration-500 group-hover:scale-110" 
                                                     })}
                                                </div>

                                                {/* Text content */}
                                                <div className="space-y-3 lg:space-y-5">
                                                    <h3 className="text-xl lg:text-2xl font-black text-black uppercase tracking-tight leading-tight">
                                                        {item.title}
                                                    </h3>
                                                    <p className="text-xs lg:text-sm text-gray-500 leading-relaxed font-medium">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Card Footer */}
                                            <div className="space-y-6 lg:space-y-8">
                                                <div className="text-[11px] lg:text-[13px] font-bold text-gray-400 uppercase tracking-[0.2em] space-y-2">
                                                    <p className="flex items-center gap-2">
                                                        <span className="text-black">{hackathons[realIndex].year}</span>
                                                    </p>
                                                    <p className="flex items-center gap-2">
                                                        <span>{item.location}</span>
                                                    </p>
                                                </div>

                                                <div className="pt-2">
                                                    <button className="text-[10px] lg:text-[12px] font-black uppercase tracking-[0.3em] text-black hover:text-gray-400 transition-colors inline-flex items-center gap-3 group relative pb-1 overflow-hidden">
                                                        {t.hackathons.readDetails}
                                                        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-black translate-x-[-100%] transition-transform duration-300 group-hover:translate-x-0"></div>
                                                    </button>
                                                </div>
                                            </div>

                                            {/* Prize Badge Overlay */}
                                            <div className="absolute -top-3 -right-3 bg-white text-white px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-2xl z-20">
                                                {item.prize}
                                            </div>
                                        </div>
                                    )
                                })}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {isResponsive && (
                        <button 
                            onClick={nextCard} 
                            className="z-50 p-3 bg-white/80 backdrop-blur-md rounded-full shadow-2xl border border-gray-100 transition-all active:scale-90"
                        >
                             <ChevronRightIcon className="w-5 h-5 text-black" />
                        </button>
                    )}
                </div>

                {/* Pagination Indicators - Lines Only */}

            </div>

                                    {isResponsive && (
                    <div className="flex justify-center gap-3 mt-10">
                        {Array.from({ length: Math.ceil(t.hackathons.items.length / cardsPerView) }).map((_, i) => (
                            <div 
                                key={i}
                                onClick={() => setActiveIndex(i * cardsPerView)}
                                className={`h-[3px] rounded-full transition-all duration-500 cursor-pointer ${Math.floor(activeIndex / cardsPerView) === i ? 'w-10 bg-black' : 'w-6 bg-gray-200 hover:bg-gray-400'}`}
                            />
                        ))}
                    </div>
                )}
            {/* Global Social Links pattern copied from Me.jsx */}
             <div className="flex lg:absolute lg:right-6 md:lg:right-10 lg:top-1/2 lg:-translate-y-1/2 lg:flex-col space-x-8 lg:space-x-0 lg:space-y-8 z-[100] mt-12 lg:mt-0 justify-center">
                <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black transition-all duration-300 hover:scale-110">
                    <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 md:w-6 md:h-6"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                </a>
                <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black transition-all duration-300 hover:scale-110">
                    <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 md:w-6 md:h-6"><path fillRule="evenodd" d="M12.008 1.996C6.486 1.996 2 6.483 2 12.005c0 1.764.462 3.42 1.306 4.85l-1.397 5.105 5.228-1.371a9.98 9.98 0 004.871 1.263h.004c5.524 0 10.007-4.488 10.007-10.01 0-2.678-1.042-5.193-2.936-7.086a10.038 10.038 0 00-7.075-2.76zm-.004 16.32a8.318 8.318 0 01-4.24-1.155l-.304-.18-3.155.827.842-3.076-.197-.314A8.303 8.303 0 013.684 12c0-4.595 3.738-8.334 8.336-8.334 2.227 0 4.319.867 5.894 2.443 1.574 1.576 2.441 3.668 2.441 5.895 0 4.595-3.739 8.334-8.334 8.334zm4.575-6.242c-.25-.125-1.484-.733-1.714-.817-.23-.083-.398-.125-.565.125-.167.25-.65.817-.798.983-.148.167-.297.188-.547.063-.25-.125-1.058-.39-2.016-1.241-.745-.662-1.248-1.48-1.396-1.73-.148-.25-.016-.385.11-.51.112-.112.25-.292.374-.438.125-.146.167-.25.25-.417.083-.166.042-.312-.02-.437-.064-.125-.566-1.365-.776-1.87-.205-.494-.413-.427-.565-.435-.148-.008-.318-.009-.485-.009-.167 0-.44.062-.67.312-.23.25-.88.86-.88 2.096 0 1.236.9 2.43 1.026 2.597.125.166 1.77 2.704 4.288 3.788.6.258 1.066.413 1.431.528.602.19 1.15.163 1.583.1.483-.07 1.484-.607 1.693-1.194.21-.588.21-1.092.147-1.194-.062-.103-.23-.166-.48-.291z" clipRule="evenodd" /></svg>
                </a>
                <a href={socialLinks.linkedin} className="text-gray-500 hover:text-black transition-all duration-300 hover:scale-110">
                    <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 md:w-6 md:h-6"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
                </a>
            </div>

            {/* Vertical Copyright Line copied from Me.jsx */}
            <div className="absolute left-6 top-full -translate-y-[150%] -rotate-90 origin-left text-[9px] uppercase font-black tracking-[0.4em] text-gray-400 hidden xl:block whitespace-nowrap opacity-50">
                © COPYRIGHT 2026, HARENA S.
            </div>
        </div>
    )
}

export default Hackathons;