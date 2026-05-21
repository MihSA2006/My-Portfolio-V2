import React, { useState } from "react";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData } from '../data/dataProject.js';

import { useLanguage } from '../context/LanguageContext';

const MyProjects = () => {
    const { t } = useLanguage();
    const [type, setType] = useState("web");
    const [activeIndex, setActiveIndex] = useState(0);
    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

    React.useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isResponsive = windowWidth <= 1200;

    // Merge translated projects with tech icons from original data
    const translatedProjects = (type === "web" ? t.projects.web : t.projects.mobile).map((project) => {
        const originalProject = projectsData[type].find(p => p.id === project.id);
        return {
            ...project,
            image: originalProject?.image || "",
            videoUrl: originalProject?.url || "",
            tech: originalProject?.tech || []
        };
    });

    const activeProject = translatedProjects[activeIndex];

    const CARD_WIDTH_PERCENT = 35;
    const GAP_PERCENT = 5;

    const nextProject = () => {
        setActiveIndex((prev) =>
            prev === translatedProjects.length - 1 ? 0 : prev + 1
        );
    };

    const prevProject = () => {
        setActiveIndex((prev) =>
            prev === 0 ? translatedProjects.length - 1 : prev - 1
        );
    };

    const getYouTubeId = (url) => {
        if (!url) return null;
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11) ? match[2] : null;
    };

    return (
        <div className="relative w-full min-h-screen bg-white overflow-hidden">
            {/* Abstract Background Decoration - Mobile only */}
            {isResponsive && (
                <div className="absolute top-0 left-0 w-full opacity-20 pointer-events-none">
                     <svg className="w-64 h-64 -ml-16 -mt-16 text-gray-400" viewBox="0 0 200 200">
                        <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
                        <path d="M20 100 L180 100 M100 20 L100 180" stroke="currentColor" strokeWidth="0.5" />
                     </svg>
                </div>
            )}
            <div className="relative z-10 w-full h-full">
                <div className={`w-full min-h-[100vh] flex ${isResponsive ? 'flex-col items-center pb-12' : 'relative h-screen'}`}>

                    {/* TYPES - Horizontal bottom bar on mobile, vertical sidebar on desktop */}
                    <div className={`${isResponsive ? 'absolute bottom-10 left-4 z-[100] flex-row gap-4' : 'flex flex-col items-center gap-6 w-[5%] p-2 justify-center'}`}>
                        <div
                            onClick={() => { setType("web"); setActiveIndex(0); }}
                            className={`p-3 rounded-full border-2 border-black hover:scale-110 transition duration-300 cursor-pointer ${type === "web" ? "bg-black text-white shadow-xl" : "bg-white text-black"}`}
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M4 6h16v9H4V6zm-2 11h20v1.5c0 .83-.67 1.5-1.5 1.5h-17C2.67 20 2 19.33 2 18.5V17z" />
                            </svg>
                        </div>

                        <div
                            onClick={() => { setType("mobile"); setActiveIndex(0); }}
                            className={`${isResponsive ? 'mt-2' : ''} p-3 rounded-full border-2 border-black hover:scale-110 transition duration-300 cursor-pointer ${type === "mobile" ? "bg-black text-white shadow-xl" : "bg-white text-black"}`}
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M7 2h10c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2zm5 18c.83 0 1.5-.67 1.5-1.5S12.83 17 12 17s-1.5.67-1.5 1.5S11.17 20 12 20z" />
                            </svg>
                        </div>
                    </div>

                    <div className={isResponsive 
                        ? "flex flex-col w-full px-6 text-center items-center space-y-6 pt-20" 
                        : "absolute left-[8%] top-[45%] -translate-y-1/2 w-[35%] space-y-14 z-20"}>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeProject.id}
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -30 }}
                                transition={{ duration: 0.5 }}
                                className={`${isResponsive ? 'space-y-6' : 'text-left space-y-8'}`}
                            >
                                <h1 className={`${isResponsive ? 'text-4xl' : 'text-5xl lg:text-7xl'} font-black uppercase tracking-tighter text-black leading-none`}>
                                    {activeProject.title}
                                </h1>

                                <p className={`text-gray-600 ${isResponsive ? 'text-sm' : 'text-base'} leading-relaxed font-body max-w-lg`}>
                                    {activeProject.description}
                                </p>

                                {/* Tech Icons */}
                                <div className={`flex gap-4 items-center ${isResponsive ? 'justify-center' : ''}`}>
                                    {activeProject.tech.map((icon, i) => (
                                        <motion.img
                                            key={i}
                                            initial={{ opacity: 0, scale: 0.5 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.2 + (i * 0.1) }}
                                            src={icon}
                                            alt=""
                                            className="w-10 h-10 bg-white/90 rounded shadow-md p-1.5 hover:scale-110 transition border border-gray-100"
                                        />
                                    ))}
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* <div className={isResponsive ? 'w-full flex justify-center' : ''}>
                            <button className="relative inline-flex gap-2 px-12 py-6 rounded-sm bg-gradient-to-r from-black to-gray-800 text-white font-semibold shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl active:scale-95 mt-4 items-center">
                                <span className="absolute top-4 left-5 text-white uppercase tracking-widest text-[8px]">{t.projects.demo}</span>
                                <ArrowTopRightOnSquareIcon className="w-5 h-5 text-white absolute top-2 right-3" />
                            </button>
                        </div> */}
                    </div>

                    {/* ACTIVE PROJECT IMAGE PREVIEW - Desktop Only */}
                    {!isResponsive && (
                        <div className="absolute right-[15%] top-[22%] w-[38%] h-[44%] z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/50 bg-black">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeProject.id}
                                    initial={{ opacity: 0, scale: 1.05 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 1.05 }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                    className="w-full h-full"
                                >
                                    {activeProject.videoUrl ? (
                                        <iframe
                                            key={`video-${activeProject.id}`}
                                            width="100%"
                                            height="100%"
                                            src={`https://www.youtube.com/embed/${getYouTubeId(activeProject.videoUrl)}?rel=0&modestbranding=1&enablejsapi=1`}
                                            title={activeProject.title}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowFullScreen
                                            className="w-full h-full"
                                        ></iframe>
                                    ) : (
                                        <>
                                            <div className="absolute inset-0 via-transparent to-transparent z-10 w-1/4"></div>
                                            <img 
                                                src={activeProject.image} 
                                                alt={activeProject.title} 
                                                className="w-full h-full object-cover"
                                            />
                                        </>
                                    )}
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    )}

                    {/* PROJECTS DISPLAY - Bottom Right on desktop */}
                    <div className={`flex flex-col ${isResponsive ? 'w-full px-4 mt-8' : 'absolute bottom-8 right-8 w-max max-w-[50%] z-30'}`}>
                        <div className="relative overflow-visible w-full">
                            {/* Navigation Arrows - Only on mobile/tablet */}
                            {isResponsive && (
                                <>
                                    <button onClick={prevProject} className="absolute left-[-10px] top-1/2 -translate-y-1/2 z-50 p-2 bg-white rounded-full shadow-lg border border-gray-200">
                                        <ChevronLeftIcon className="w-6 h-6" />
                                    </button>
                                    <button onClick={nextProject} className="absolute right-[-10px] top-1/2 -translate-y-1/2 z-50 p-2 bg-white rounded-full shadow-lg border border-gray-200">
                                        <ChevronRightIcon className="w-6 h-6" />
                                    </button>
                                </>
                            )}

                            <div className={`${isResponsive ? 'overflow-hidden px-2' : ''}`}>
                                <motion.div className={`flex ${isResponsive ? 'gap-6' : 'gap-4 overflow-x-auto scrollbar-hide pb-4'}`} initial={false}>
                                    <AnimatePresence mode="popLayout" initial={false}>
                                        {(isResponsive 
                                            ? [activeProject] // Show only active project on mobile or use a slider
                                            : [...translatedProjects.slice(activeIndex + 1), ...translatedProjects.slice(0, activeIndex)]
                                        ).map((project) => (
                                            <motion.div
                                                key={project.id}
                                                layout
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 0.8 }}
                                                transition={{ duration: 0.4 }}
                                                className={`rounded-xl overflow-hidden shadow-2xl ${isResponsive ? 'w-full h-[300px]' : 'w-[180px] h-[120px] lg:w-[220px] lg:h-[140px] hover:scale-105'} cursor-pointer group bg-white border border-gray-100 flex-shrink-0 relative transition-transform duration-300`}
                                                onClick={() => setActiveIndex(translatedProjects.findIndex(p => p.id === project.id))}
                                            >
                                                <div className={`absolute top-0 left-0 right-0 p-3 z-20 ${isResponsive ? 'bg-gradient-to-b from-black/60' : 'bg-black/40'} to-transparent`}>
                                                    <h3 className={`${isResponsive ? 'text-xl' : 'text-xs'} font-black uppercase tracking-tighter text-white truncate`}>
                                                        {project.title}
                                                    </h3>
                                                </div>
                                                <div className="relative h-full w-full bg-black">
                                                    {isResponsive && project.videoUrl ? (
                                                        <iframe
                                                            key={`video-mobile-${project.id}`}
                                                            width="100%"
                                                            height="100%"
                                                            src={`https://www.youtube.com/embed/${getYouTubeId(project.videoUrl)}?rel=0&modestbranding=1&enablejsapi=1`}
                                                            title={project.title}
                                                            frameBorder="0"
                                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                            allowFullScreen
                                                            className="w-full h-full"
                                                        ></iframe>
                                                    ) : (
                                                        <img src={project.image} alt="" className="absolute inset-0 w-full h-full object-cover" />
                                                    )}
                                                </div>
                                            </motion.div>
                                        ))}
                                    </AnimatePresence>
                                </motion.div>
                            </div>

                            {/* Pagination Dots - Only on mobile */}
                            {isResponsive && (
                                <div className="flex justify-center gap-2 mt-8">
                                    {translatedProjects.map((_, i) => (
                                        <div 
                                            key={i} 
                                            className={`w-2 h-2 rounded-full transition-all duration-300 ${i === activeIndex ? 'bg-black w-4' : 'bg-gray-300'}`}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>
                        
                        {/* Desktop Navigation - Small arrows under/over the carousel */}
                        {!isResponsive && (
                            <div className="flex gap-4 mt-2 w-full items-center justify-end pr-4">
                                <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={prevProject} className="p-1.5 border border-black text-black rounded-full hover:bg-black hover:text-white transition-colors duration-300">
                                    <ChevronLeftIcon className="w-5 h-5" />
                                </motion.button>
                                <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={nextProject} className="p-1.5 border border-black text-black rounded-full hover:bg-black hover:text-white transition-colors duration-300">
                                    <ChevronRightIcon className="w-5 h-5" />
                                </motion.button>
                            </div>
                        )}
                    </div>
                </div>
                {/* Bottom Navigation Arrow - Mobile only */}
                {isResponsive && (
                    <div className="fixed bottom-0 left-0 right-0 h-16 flex items-center justify-center bg-white/80 backdrop-blur-md z-[90] border-t border-gray-100">
                        <div className="p-2 rounded-full border border-gray-200">
                            <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                            </svg>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyProjects;