// MySkills.jsx
import React, { useRef, useState } from "react";
import { skills } from "../data/dataTech";
import skillLogo from "../assets/skills.png"
import { motion } from "framer-motion";

import { useLanguage } from '../context/LanguageContext';

const MySkills = () => {
    const { t } = useLanguage();
    const [hoveredSkill, setHoveredSkill] = useState(null);

    // Merge structural data with translations
    const translatedSkills = skills.map((skill, index) => ({
        ...skill,
        name: t.skills.items[index]?.name || skill.name,
        description: t.skills.items[index]?.description || skill.description
    }));

    return (
        <div className="relative w-full h-screen bg-white flex items-center justify-center overflow-hidden">

            {/* Header - Changes based on hover state */}
            <div className={`absolute z-[99] bottom-48 text-center max-w-md bg-white h-44 rounded-t-full w-96 transition-all duration-500 ease-in-out ${hoveredSkill ? 'scale-110' : 'scale-100'}`}>
                <h1
                    className={`mt-12 font-bold uppercase tracking-tighter transition-all duration-500 ${hoveredSkill ? 'text-5xl lg:text-5xl' : 'text-5xl lg:text-5xl'} text-black`}
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                    {hoveredSkill ? hoveredSkill.name : t.skills.title}
                </h1>

                <p className={`text-sm mt-4 px-6 transition-all duration-500 ${hoveredSkill ? 'text-gray-700 font-medium' : 'text-gray-500'} font-body`}>
                    {hoveredSkill
                        ? hoveredSkill.description
                        : t.skills.defaultDescription
                    }
                </p>
            </div>

            {/* Main Skill Circle */}
            <div className="relative flex flex-col items-center justify-center z-10">
                {/* ... existing content ... */}
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

            {/* Small Skills with circular progress bars */}
            {translatedSkills.map((skill, index) => (
                <div
                    key={index}
                    className={`cursor-pointer absolute ${skill.position} transition-all duration-300 ease-out group
                        hover:scale-125 hover:z-50
                        ${hoveredSkill?.name === skill.name ? 'scale-125 z-50' : ''}`}
                    onMouseEnter={() => setHoveredSkill(skill)}
                    onMouseLeave={() => setHoveredSkill(null)}
                >
                    <div className="relative w-36 h-36 flex items-center justify-center">
                        <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none overflow-visible">
                            <circle
                                cx="72"
                                cy="72"
                                r="48"
                                fill="white"
                                stroke="rgba(0,0,0,0.05)"
                                strokeWidth="4"
                                className="transition-all duration-500 shadow-sm"
                            />
                            <motion.circle
                                cx="72"
                                cy="72"
                                r="48"
                                fill="transparent"
                                stroke={skill.color}
                                strokeWidth="5"
                                strokeLinecap="round"
                                strokeDasharray={2 * Math.PI * 48}
                                initial={{ strokeDashoffset: 2 * Math.PI * 48 }}
                                animate={{ strokeDashoffset: 2 * Math.PI * 48 * (1 - skill.progress / 100) }}
                                transition={{ duration: 2, ease: "easeOut", delay: index * 0.1 }}
                                className="drop-shadow-sm"
                                style={{
                                    filter: `drop-shadow(0 0 5px ${skill.color}80)`
                                }}
                            />
                        </svg>

                        <div className="relative z-10 w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                            <img
                                src={skill.img}
                                alt={skill.name}
                                className={`w-14 h-12 object-contain transition-all duration-300 ${hoveredSkill?.name === skill.name ? 'scale-110 drop-shadow-md' : 'group-hover:scale-110'}`}
                            />
                        </div>

                        <span className="absolute -bottom-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs font-bold text-gray-700 bg-white px-2 py-1 rounded shadow-md whitespace-nowrap border-b-2" style={{ borderColor: skill.color }}>
                            {skill.name}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MySkills;