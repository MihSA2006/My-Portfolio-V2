// MySkills.jsx
import React, { useRef, useState } from "react";
import { skills } from "../data/dataTech";
import skillLogo from "../assets/skills.png"
import useBgAnimation from "../hooks/useBgAnimation";

const MySkills = () => {
    const [hoveredSkill, setHoveredSkill] = useState(null);
    const canvasRef = useRef(null);
    useBgAnimation(canvasRef);

    return (
        <div className="relative w-full h-screen bg-white flex items-center justify-center overflow-hidden">

            <canvas
                ref={canvasRef}
                className="absolute inset-0 pointer-events-none"
                style={{ zIndex: 1 }}
            />

            {/* Header - Changes based on hover state */}
            <div className={`absolute z-[99] bottom-48 text-center max-w-md bg-white h-44 rounded-t-full w-96 transition-all duration-500 ease-in-out ${hoveredSkill ? 'scale-110' : 'scale-100'}`}>
                <h1
                    className={`mt-12 font-bold transition-all duration-500 ${hoveredSkill ? 'text-5xl text-cyan-600' : 'text-7xl text-black'}`}
                    style={{
                        fontFamily: "Ephesis, cursive",
                        fontWeight: 400,
                        fontStyle: "normal",
                    }}
                >
                    {hoveredSkill ? hoveredSkill.name : "My Skills"}
                </h1>

                <p className={`text-sm mt-4 px-6 transition-all duration-500 ${hoveredSkill ? 'text-gray-700 font-medium' : 'text-gray-500'}`}>
                    {hoveredSkill
                        ? hoveredSkill.description
                        : "Passionate full-stack developer crafting modern web and mobile experiences with cutting-edge technologies and best practices."
                    }
                </p>
            </div>

            {/* Main Skill Circle */}
            <div className="relative flex flex-col items-center justify-center z-10">
                {/* Animated ring */}
                <div className={`absolute w-[420px] h-[420px] rounded-full animate-spin-slow 
                    bg-[conic-gradient(from_0deg,transparent,gray,transparent,transparent)] 
                    blur-md opacity-70 transition-all duration-700 ${hoveredSkill ? 'scale-110 opacity-100' : 'scale-100'}`}>
                </div>

                {/* Main circle */}
                <div className={`relative w-[400px] h-[400px] rounded-full 
                    bg-zinc-900 flex items-center justify-center
                    shadow-2xl transition-all duration-500 ease-out
                    ${hoveredSkill ? 'animate-none scale-105 shadow-cyan-500/50 shadow-3xl' : 'animate-breath'}`}>

                    {/* Glow effect on hover */}
                    <div className={`absolute inset-0 rounded-full blur-2xl transition-all duration-500 ${hoveredSkill ? 'bg-cyan-500/30 animate-pulse' : 'bg-cyan-500/10'}`}></div>

                    {/* Center content - Changes on hover */}
                    <div className={`relative overflow-hidden flex justify-center items-center transition-all duration-500 ${hoveredSkill ? 'w-64 h-64 rounded-2xl backdrop-blur-sm' : 'w-56 h-56 rounded-xl'}`}>
                        {hoveredSkill ? (
                            <div className="flex flex-col items-center justify-center animate-fade-in">
                                <img
                                    src={hoveredSkill.img}
                                    alt={hoveredSkill.name}
                                    className="w-32 h-32 object-contain drop-shadow-2xl animate-bounce-slow"
                                />
                                <span className="text-white mt-4 text-lg font-semibold tracking-wider uppercase">
                                    {hoveredSkill.name}
                                </span>
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

            {/* Small Skills with hover effects */}
            {skills.map((skill, index) => (
                <div
                    key={index}
                    className={`cursor-pointer absolute ${skill.position} w-36 h-36 bg-white rounded-full flex flex-col items-center justify-center text-white shadow-lg transition-all duration-300 ease-out group
                        hover:scale-125 hover:shadow-2xl hover:shadow-cyan-500/30 hover:border-2 hover:border-cyan-400 hover:z-50
                        ${hoveredSkill?.name === skill.name ? 'scale-125 shadow-cyan-500/50 border-2 border-cyan-400 z-50' : ''}`}
                    onMouseEnter={() => setHoveredSkill(skill)}
                    onMouseLeave={() => setHoveredSkill(null)}
                >
                    <img
                        src={skill.img}
                        alt={skill.name}
                        className={`w-20 h-16 mb-1 transition-all duration-300 ${hoveredSkill?.name === skill.name ? 'scale-110 drop-shadow-lg' : 'group-hover:scale-110'}`}
                    />

                    {/* Tooltip on hover */}
                    <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs font-semibold text-gray-700 bg-white px-2 py-1 rounded shadow-md whitespace-nowrap">
                        {skill.name}
                    </span>
                </div>
            ))}
        </div>
    );
};

export default MySkills;