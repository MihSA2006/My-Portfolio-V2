import React, { useRef, useState } from "react";
import useBgAnimation from "../hooks/useBgAnimation";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData } from '../data/dataProject.js';

const MyProjects = () => {
  const canvasRef = useRef(null);
  useBgAnimation(canvasRef);

  const [type, setType] = useState("web");
  const [activeIndex, setActiveIndex] = useState(0);

  const projects = projectsData[type];
  const activeProject = projects[activeIndex];

  const CARD_WIDTH_PERCENT = 35; // correspond à w-[35%]
  const GAP_PERCENT = 5; // approx gap visuel

  const nextProject = () => {
    setActiveIndex((prev) =>
      prev === projects.length - 1 ? 0 : prev + 1
    );
  };

  const prevProject = () => {
    setActiveIndex((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    );
  };

  return (
    <div className="relative w-full min-h-screen bg-white overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 1 }}
      />

      <div className="relative z-10">
        <div className="w-full h-[100vh] flex justify-center items-center">

          {/* TYPES */}
          <div className="types flex flex-col items-center gap-6 w-[5%] p-2">

            <div
              onClick={() => { setType("web"); setActiveIndex(0); }}
              className={`p-4 rounded-full border-2 border-black
                animate-pulse 
                hover:scale-110 transition duration-300 cursor-pointer
                ${type === "web" ? "bg-black text-white" : ""}`}
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill={type === "web" ? "#FFFFFF" : "#000000"}>
                <path d="M4 6h16v9H4V6zm-2 11h20v1.5c0 .83-.67 1.5-1.5 1.5h-17C2.67 20 2 19.33 2 18.5V17z" />
              </svg>
            </div>

            <div
              onClick={() => { setType("mobile"); setActiveIndex(0); }}
              className={`p-4 rounded-full border-2 border-black 
                animate-pulse 
                hover:scale-110 transition duration-300 cursor-pointer
                ${type === "mobile" ? "bg-black text-white" : ""}`}
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
                <h1 className="text-6xl font-extrabold bg-gradient-to-r 
                  from-black via-gray-800 to-gray-600
                  bg-clip-text text-transparent 
                  animate-pulse">
                  {activeProject.title}
                </h1>

                <p className="text-gray-600 text-[16px] leading-relaxed">
                  {activeProject.description}
                </p>
              </motion.div>
            </AnimatePresence>

            <div>
              <button className="relative inline-flex gap-2 
                px-16 py-6 rounded-sm
                bg-gradient-to-r from-black to-gray-800 
                text-white font-semibold text-left
                shadow-lg
                transition-all duration-300
                hover:scale-110 hover:shadow-2xl
                active:scale-95 mt-10">

                <span className="absolute top-3 left-3 text-white">Demo</span>
                <ArrowTopRightOnSquareIcon className="w-6 h-6 text-white absolute top-3 right-3" />
              </button>
            </div>
          </div>

          {/* RIGHT PROJECT DISPLAY */}
          <div className="flex flex-col justify-center w-[60%] p-6">

            <div className="overflow-hidden w-full">

              <motion.div
                layout
                transition={{ type: "spring", stiffness: 180, damping: 20 }}
                className="flex gap-5"
              >

                {[...projects.slice(activeIndex), ...projects.slice(0, activeIndex)].map((project, index) => {

                  const isActive = index === 0;

                  return (
                    <motion.div
                      key={project.id}
                      layout
                      initial={false}
                      animate={{
                        scale: isActive ? 1 : 0.92,
                        y: isActive ? 0 : 30,
                        opacity: 1,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 22
                      }}
                      onClick={() => setActiveIndex(projects.indexOf(project))}
                      className={`rounded-sm overflow-hidden shadow-xl w-[35%] 
              ${isActive ? "h-[550px]" : "h-[480px]"}
              cursor-pointer group bg-none border-none flex-shrink-0`}
                      style={{
                        zIndex: isActive ? 20 : 5
                      }}
                    >

                      <div className="p-6 bg-none border-none">
                        <h2 className="text-3xl font-bold text-gray-800">
                          {project.title}
                        </h2>
                        <p className="text-gray-500">Date : {project.date}</p>
                      </div>

                      <div className="relative h-[443px] overflow-hidden">
                        <img
                          src={project.image}
                          alt=""
                          className="absolute inset-0 w-full h-[443px] object-cover 
                group-hover:scale-110 transition duration-500"
                        />

                        <div className="absolute inset-0 bg-black/60 
                group-hover:bg-black/70 
                transition duration-500"></div>

                        <div className="relative z-10 flex flex-col justify-end 
                h-full p-6 text-white space-y-4">

                          <div className="flex gap-4 items-center">
                            {project.tech.map((icon, i) => (
                              <img
                                key={i}
                                src={icon}
                                alt=""
                                className="w-9 h-9 bg-white rounded-full p-1 hover:scale-110 transition"
                              />
                            ))}
                          </div>

                          <button className="px-6 py-2 rounded-sm 
                  bg-gradient-to-r from-white to-gray-200 
                  text-black
                  font-semibold
                  hover:scale-105 
                  hover:shadow-xl
                  active:scale-95
                  transition duration-300">
                            View on GitHub
                          </button>

                        </div>
                      </div>

                    </motion.div>
                  );
                })}

              </motion.div>
            </div>

            {/* NAVIGATION */}
            <div className="flex gap-9 mt-6 w-full items-center justify-center">
              <motion.button
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.85 }}
                transition={{ type: "spring", stiffness: 300 }}
                onClick={prevProject}
                className="p-2 border border-black text-black rounded-full hover:bg-black hover:text-white"
              >
                <ChevronLeftIcon className="w-9 h-9 font-bold" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.85 }}
                transition={{ type: "spring", stiffness: 300 }}
                onClick={nextProject}
                className="p-2 border border-black text-black rounded-full hover:bg-black hover:text-white"
              >
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