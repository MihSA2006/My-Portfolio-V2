// MySkills.jsx
import React, { useState, useEffect } from "react";
import { skills } from "../data/dataTech";
import skillLogo from "../assets/skills.png"
import { motion, AnimatePresence } from "framer-motion";
import { 
    CodeBracketIcon, 
    DevicePhoneMobileIcon, 
    ServerIcon, 
    CircleStackIcon, 
    WrenchIcon 
} from '@heroicons/react/24/outline';

import { useLanguage } from '../context/LanguageContext';

const MySkills = () => {
    const { t } = useLanguage();
    const [hoveredSkill, setHoveredSkill] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState("frontend");
    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isResponsive = windowWidth <= 1200;

    // Categories definition
    const categories = [
        { id: "frontend", icon: CodeBracketIcon, label: "Frontend" },
        { id: "mobile", icon: DevicePhoneMobileIcon, label: "Mobile" },
        { id: "backend", icon: ServerIcon, label: "Backend" },
        { id: "database", icon: CircleStackIcon, label: "Database" },
        { id: "tools", icon: WrenchIcon, label: "Tools" }
    ];

    // Merge structural data with translations
    const translatedSkills = skills.map((skill, index) => ({
        ...skill,
        name: t.skills.items[index]?.name || skill.name,
        description: t.skills.items[index]?.description || skill.description
    }));

    // Filter skills by category for responsive view
    const filteredSkills = isResponsive 
        ? translatedSkills.filter(s => s.category === selectedCategory)
        : translatedSkills;

    return (
        <div className="relative w-full h-screen bg-white flex flex-col lg:flex-row items-center justify-center overflow-hidden font-sans">

            {/* Left Category Sidebar - Responsive Only */}
            <AnimatePresence>
                {isResponsive && (
                    <motion.div 
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -100, opacity: 0 }}
                        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 flex flex-col space-y-6 z-[110]"
                    >
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setSelectedCategory(cat.id)}
                                className={`p-3 rounded-xl transition-all duration-300 border-2 ${selectedCategory === cat.id ? 'bg-black text-white border-black scale-110 shadow-lg' : 'bg-white text-gray-400 border-gray-100 hover:border-black hover:text-black'}`}
                                title={cat.label}
                            >
                                <cat.icon className="w-6 h-6" />
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Content Wrapper */}
            <div className={`relative flex flex-col items-center ${isResponsive ? 'justify-start pt-16 overflow-y-auto overflow-x-hidden pb-10' : 'justify-center'} w-full h-full transition-all duration-700 ${isResponsive ? 'scale-[0.85] md:scale-100' : ''}`}>
                
                {/* Header - Changes based on hover state */}
                <div className={`${isResponsive ? 'fixed top-[22rem] scale-90' : 'absolute bottom-48 scale-100'} z-20 text-center max-w-md bg-white h-44 rounded-t-full w-96 transition-all duration-500 ease-in-out ${hoveredSkill ? 'scale-110' : ''} ${isResponsive && !hoveredSkill ? 'opacity-0 pointer-events-none' : ''}`}>
                    <h1
                        className={`mt-12 font-bold uppercase tracking-tighter ${isResponsive ? 'text-2xl' : 'text-4xl'} text-black`}
                    >
                        {hoveredSkill ? hoveredSkill.name : t.skills.title}
                    </h1>

                    <p className={`${isResponsive ? 'text-xs' : 'text-sm'} mt-4 px-6 transition-all duration-500 ${hoveredSkill ? 'text-gray-700 font-medium' : 'text-gray-500'}`}>
                        {hoveredSkill
                            ? hoveredSkill.description
                            : t.skills.defaultDescription
                        }
                    </p>
                </div>

                {/* Main Skill Circle - Scaling container for responsive */}
                <div className={`${isResponsive ? 'fixed top-24' : 'relative'} flex flex-col items-center justify-center z-10 transition-transform duration-500 ${isResponsive ? 'scale-[0.55] sm:scale-[0.7]' : ''}`}>
                    <div className={`absolute w-[420px] h-[420px] rounded-full animate-spin-slow 
                        bg-[conic-gradient(from_0deg,transparent,gray,transparent,transparent)] 
                        blur-md opacity-70 transition-all duration-700 ${hoveredSkill ? 'scale-110 opacity-100' : 'scale-100'}`}>
                    </div>

                    <div className={`relative w-[400px] h-[400px] rounded-full 
                        bg-black flex items-center justify-center
                        shadow-2xl transition-all duration-500 ease-out
                        ${hoveredSkill ? 'animate-none scale-105 shadow-white  shadow-3xl' : 'animate-breath'}`}>

                        <div className={`absolute inset-0 rounded-full blur-2xl transition-all duration-500 ${hoveredSkill ? 'bg-cyan-300/30 animate-pulse' : 'bg-cyan-300/10'}`}></div>

                        <div className={`relative overflow-hidden flex justify-center items-center transition-all duration-500 ${hoveredSkill ? 'w-64 h-64 rounded-2xl backdrop-blur-sm' : 'w-56 h-56 rounded-xl'}`}>
                            {hoveredSkill ? (
                                <div className="flex flex-col items-center justify-center animate-fade-in">
                                    <img
                                        src={hoveredSkill.img}
                                        alt={hoveredSkill.name}
                                        className="w-32 h-32 object-contain drop-shadow-2xl animate-bounce-slow"
                                    />
                                </div>
                            ) : (
                                <img
                                    src={skillLogo}
                                    alt="center"
                                    className="w-full h-full object-cover rounded-xl transition-transform duration-500 hover:scale-105"
                                />
                            )}
                        </div>
                    </div>
                </div>

                {/* Skills Container */}
                <div className={isResponsive ? "mt-[400px] w-full max-w-5xl px-4 z-20 flex flex-wrap justify-center items-center gap-x-4 gap-y-10 flex-1 pb-20" : "absolute inset-0 z-0"}>
                    <AnimatePresence mode="popLayout">
                        {filteredSkills.map((skill, index) => (
                            <motion.div
                                key={`${skill.name}-${selectedCategory}`}
                                initial={isResponsive ? { scale: 0, opacity: 0 } : false}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={isResponsive ? { scale: 0, opacity: 0 } : false}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                className={`cursor-pointer transition-all duration-300 ease-out group 
                                    hover:scale-125 hover:z-50
                                    ${hoveredSkill?.name === skill.name ? 'scale-125 z-50' : ''}
                                    ${!isResponsive ? `absolute ${skill.position} ml-16` : 'relative flex justify-center'}`}
                                onMouseEnter={() => setHoveredSkill(skill)}
                                onMouseLeave={() => setHoveredSkill(null)}
                            >
                                <div className={`relative flex items-center justify-center transition-all duration-300 ${isResponsive ? 'w-28 h-28' : 'w-36 h-36'}`}>
                                    <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none overflow-visible">
                                        <circle
                                            cx={isResponsive ? "56" : "72"}
                                            cy={isResponsive ? "56" : "72"}
                                            r={isResponsive ? "42" : "48"}
                                            fill="white"
                                            stroke="rgba(0,0,0,0.05)"
                                            strokeWidth="3"
                                            className="transition-all duration-500 shadow-sm"
                                        />
                                        <motion.circle
                                            cx={isResponsive ? "56" : "72"}
                                            cy={isResponsive ? "56" : "72"}
                                            r={isResponsive ? "42" : "48"}
                                            fill="transparent"
                                            stroke={skill.color}
                                            strokeWidth="4"
                                            strokeLinecap="round"
                                            strokeDasharray={2 * Math.PI * (isResponsive ? 42 : 48)}
                                            initial={{ strokeDashoffset: 2 * Math.PI * (isResponsive ? 42 : 48) }}
                                            animate={{ strokeDashoffset: 2 * Math.PI * (isResponsive ? 42 : 48) * (1 - skill.progress / 100) }}
                                            transition={{ duration: 2, ease: "easeOut", delay: index * 0.1 }}
                                            className="drop-shadow-sm"
                                            style={{
                                                filter: `drop-shadow(0 0 5px ${skill.color}80)`
                                            }}
                                        />
                                    </svg>

                                    <div className={`relative z-10 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 ${isResponsive ? 'w-16 h-16' : 'w-24 h-24'}`}>
                                        <img
                                            src={skill.img}
                                            alt={skill.name}
                                            className={`object-contain transition-all duration-300 ${isResponsive ? 'w-10 h-10' : 'w-14 h-12'} ${hoveredSkill?.name === skill.name ? 'scale-110 drop-shadow-md' : 'group-hover:scale-110'}`}
                                        />
                                    </div>

                                    {!isResponsive && (
                                        <span className="absolute -bottom-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[10px] font-bold text-gray-700 bg-white px-2 py-1 rounded shadow-md whitespace-nowrap border-b-2" style={{ borderColor: skill.color }}>
                                            {skill.name}
                                        </span>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default MySkills;