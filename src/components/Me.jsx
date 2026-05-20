import React from 'react';
import profilePic from '../assets/profile.png';
import { useLanguage } from '../context/LanguageContext';
import { socialLinks } from '../data/dataSocials';

const Me = () => {
    const { t } = useLanguage();

    return (
        <div className="relative w-full min-h-screen lg:h-screen bg-white text-black lg:overflow-hidden font-sans flex flex-col  ">
            {/* Main Content container */}
            <div className="relative z-10 w-full flex-grow flex flex-col justify-center px-6 md:px-12 lg:px-20 xl:px-32 pt-24 pb-12 lg:py-0">
                <div className="flex flex-col lg:flex-row items-center justify-between w-full">

                    {/* Profile Picture - Moved above title for mobile/tablet */}
                    <div className="relative lg:absolute lg:left-[65%] lg:top-[50%] lg:-translate-x-1/2 lg:-translate-y-1/2 flex justify-center items-center pointer-events-none mb-6 lg:mb-0">
                        <div className="relative w-56 h-56 sm:w-80 sm:h-80 md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] min-[1401px]:w-[700px] min-[1401px]:h-[700px] overflow-visible transition-all duration-500">
                            <img
                                src={profilePic}
                                alt="Profile"
                                className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
                                style={{ filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.9))' }}
                            />
                            <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white via-white/30 to-transparent"></div>
                        </div>
                    </div>

                    {/* Title Part - Left */}
                    <div className="flex flex-col z-20 xl:w-1/3 text-center lg:text-left">
                        <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[80px] min-[1401px]:text-[120px] font-black tracking-tighter uppercase leading-[0.9] text-black drop-shadow-sm transition-all duration-500">
                            {t.me.name}<br />{t.me.lastName}
                        </h1>
                        <div className="flex items-center justify-center lg:justify-start mt-6 space-x-3">
                            <svg className="w-5 h-5 text-gray-600 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                            <span className="text-base md:text-xl text-gray-600 font-light tracking-widest uppercase">{t.me.role}</span>
                        </div>
                    </div>

                    <div className="hidden lg:block xl:w-1/3"></div>
                </div>

                {/* Social Links - Integrated into flow for mobile */}
                <div className="flex lg:absolute lg:right-6 md:lg:right-10 lg:top-1/2 lg:-translate-y-1/2 lg:flex-col space-x-8 lg:space-x-0 lg:space-y-8 z-20 mt-12 lg:mt-0 justify-center">
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
            </div>

            {/* Bottom Content Area - Passion/Vision/Copyright */}
            <div className="relative px-6 md:px-12 lg:px-32 pb-12 lg:pb-8 flex flex-col items-center lg:items-end">
                <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-12 lg:space-x-20 max-w-4xl w-full justify-center lg:justify-end">
                    <div className="flex flex-col max-w-xs text-center md:text-left">
                        <h3 className="text-[13px] font-bold uppercase tracking-[0.2em] mb-3 text-black">{t.me.passion.title}</h3>
                        <p className="text-[12px] text-gray-600 leading-relaxed font-medium tracking-wide">
                            {t.me.passion.text}
                        </p>
                    </div>
                    <div className="flex flex-col max-w-xs text-center md:text-left">
                        <h3 className="text-[13px] font-bold uppercase tracking-[0.2em] mb-3 text-black">{t.me.vision.title}</h3>
                        <p className="text-[12px] text-gray-600 leading-relaxed font-medium tracking-wide">
                            {t.me.vision.text}
                        </p>
                    </div>
                </div>

                {/* Rotated text - visible on desktop */}
                <div className="absolute left-6 top-0 -translate-y-full -rotate-90 origin-left text-[9px] uppercase font-bold tracking-[0.4em] text-gray-400 hidden xl:block whitespace-nowrap">
                    {t.me.copyright}
                </div>
                
                {/* Mobile copyright - visible on small screens */}
                <div className="mt-12 text-[10px] uppercase font-bold tracking-[0.2em] text-gray-400 xl:hidden">
                    {t.me.copyright}
                </div>
            </div>
        </div>
    );
};


export default Me;
