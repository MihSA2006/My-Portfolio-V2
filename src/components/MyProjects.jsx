import React, { useRef, useState } from "react";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData } from '../data/dataProject.js';

import { useLanguage } from '../context/LanguageContext';

const MyProjects = () => {
    const { t } = useLanguage();
    const [type, setType] = useState("web");
    const [activeIndex, setActiveIndex] = useState(0);

    // Merge translated projects with tech icons from original data
    const translatedProjects = (type === "web" ? t.projects.web : t.projects.mobile).map((project, index) => ({
        ...project,
        image: projectsData[type][index]?.image || "",
        tech: projectsData[type][index]?.tech || []
    }));

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

    return (
        <div className="relative w-full min-h-screen bg-white overflow-hidden">
            <div className="relative z-10">
                <div className="w-full h-[100vh] flex justify-center items-center">

                    {/* TYPES */}
                    <div className="types flex flex-col items-center gap-6 w-[5%] p-2">
                        <div
                            onClick={() => { setType("web"); setActiveIndex(0); }}
                            className={`p-4 rounded-full border-2 border-black animate-pulse hover:scale-110 transition duration-300 cursor-pointer ${type === "web" ? "bg-black text-white" : ""}`}
                        >
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill={type === "web" ? "#FFFFFF" : "#000000"}>
                                <path d="M4 6h16v9H4V6zm-2 11h20v1.5c0 .83-.67 1.5-1.5 1.5h-17C2.67 20 2 19.33 2 18.5V17z" />
                            </svg>
                        </div>

                        <div
                            onClick={() => { setType("mobile"); setActiveIndex(0); }}
                            className={`p-4 rounded-full border-2 border-black animate-pulse hover:scale-110 transition duration-300 cursor-pointer ${type === "mobile" ? "bg-black text-white" : ""}`}
                        >
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill={type === "mobile" ? "#FFFFFF" : "#000000"}>
                                <path d="M7 2h10c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2zm5 18c.83 0 1.5-.67 1.5-1.5S12.83 17 12 17s-1.5.67-1.5 1.5S11.17 20 12 20z" />
                            </svg>
                        </div>
                    </div>

                    {/* LEFT CONTENT */}
                    <div className="flex flex-col justify-start w-[35%] space-y-6 p-16">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeProject.id}
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -40 }}
                                transition={{ duration: 0.5 }}
                                className="text-left space-y-14"
                            >
                                <h1 className="text-6xl font-black uppercase tracking-tighter text-black">
                                    {activeProject.title}
                                </h1>

                                <p className="text-gray-600 text-[16px] leading-relaxed font-body">
                                    {activeProject.description}
                                </p>

                                {/* Tech Icons for active project */}
                                <div className="flex gap-4 items-center">
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

                        <div>
                            <button className="relative inline-flex gap-2 px-16 py-5 rounded-sm bg-gradient-to-r from-black to-gray-800 text-white font-semibold text-left shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl active:scale-95 mt-10 items-center">
                                <span className="absolute top-4 left-3 text-white uppercase tracking-widest text-[10px]">{t.projects.demo}</span>
                                <ArrowTopRightOnSquareIcon className="w-6 h-6 text-white absolute top-2 right-3" />
                            </button>
                        </div>
                    </div>

                    {/* RIGHT PROJECT DISPLAY */}
                    <div className="flex flex-col justify-center w-[60%] p-6">
                        <div className="overflow-hidden w-full px-5">
                            <motion.div
                                className="flex gap-8"
                                initial={false}
                            >
                                <AnimatePresence mode="popLayout" initial={false}>
                                    {[...translatedProjects.slice(activeIndex + 1), ...translatedProjects.slice(0, activeIndex)].map((project) => (
                                        <motion.div
                                            key={project.id}
                                            layout
                                            initial={{ opacity: 0, scale: 0.8, x: 50 }}
                                            animate={{ opacity: 1, scale: 1, x: 0 }}
                                            exit={{ opacity: 0, scale: 0.8, x: -50 }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 400,
                                                damping: 35,
                                                layout: { duration: 0.4 }
                                            }}
                                            onClick={() => setActiveIndex(translatedProjects.findIndex(p => p.id === project.id))}
                                            className="rounded-sm overflow-hidden shadow-2xl w-[45%] h-[380px] cursor-pointer group bg-white border border-gray-100 flex-shrink-0 relative"
                                        >
                                            <div className="absolute top-0 left-0 right-0 p-5 z-20 bg-gradient-to-b from-black/50 to-transparent">
                                                <h2 className="text-xl font-black uppercase tracking-tighter text-white">
                                                    {project.title}
                                                </h2>
                                            </div>

                                            <div className="relative h-full w-full overflow-hidden">
                                                <img src={project.image} alt="" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-1000" />
                                                <div className="absolute inset-0 group-hover:bg-black/20 transition duration-500"></div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            </motion.div>
                        </div>
                        {/* ... navigation ... */}
                        <div className="flex gap-9 mt-6 w-full items-center justify-center">
                            <motion.button whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.85 }} transition={{ type: "spring", stiffness: 300 }} onClick={prevProject} className="p-2 border border-black text-black rounded-full hover:bg-black hover:text-white">
                                <ChevronLeftIcon className="w-9 h-9 font-bold" />
                            </motion.button>
                            <motion.button whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.85 }} transition={{ type: "spring", stiffness: 300 }} onClick={nextProject} className="p-2 border border-black text-black rounded-full hover:bg-black hover:text-white">
                                <ChevronRightIcon className="w-9 h-9" />
                            </motion.button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProjects;