import React, { useState } from 'react'
import profilePic from '../assets/profile.png';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const NavBar = ({ activeIndex, onNavigate }) => {
    const { t, language, toggleLanguage } = useLanguage();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleNavigate = (index) => {
        onNavigate(index);
        setIsMenuOpen(false);
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-[100] flex items-center justify-between px-6 py-4 md:px-12 lg:px-20 bg-white/80 backdrop-blur-md">
            {/* Left side */}
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => handleNavigate(0)}>
                <div className="w-10 h-10 border border-black flex items-center justify-center font-black text-sm hover:bg-black hover:text-white transition-colors duration-300">
                    HS
                </div>
                <span className="font-bold tracking-tighter text-lg uppercase hidden sm:block">{t.me.name} {t.me.lastName}</span>
            </div>

            {/* Center Links (Desktop) */}
            <div className="hidden min-[1401px]:flex space-x-10 text-[13px] font-bold tracking-[0.2em] text-black uppercase">
                {t.nav.links.map((link, index) => (
                    <button
                        key={link.id}
                        onClick={() => onNavigate(index)}
                        className={`hover:text-black transition-colors duration-300 border-b-2 pb-1 ${activeIndex === index ? 'text-black border-black' : 'border-transparent'}`}
                    >
                        {link.title}
                    </button>
                ))}
            </div>

            {/* Right side */}
            <div className="flex items-center space-x-3 md:space-x-8">
                <a 
                    href="/cv_harena.pdf" 
                    download="CV_Harena.pdf"
                    className="text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] border border-black px-4 py-2 md:px-6 md:py-3 hover:bg-black hover:text-white transition-all duration-300 hidden md:block text-black text-center"
                >
                    {t.nav.downloadCV}
                </a>

                {/* Modern Language Toggle */}
                <div className="relative flex items-center bg-gray-100 rounded-full p-1 w-20 h-8 md:w-24 md:h-10 shadow-inner overflow-hidden border border-gray-200">
                    <motion.div
                        className="absolute bg-black rounded-full h-6 w-8 md:h-8 md:w-11 shadow-md"
                        initial={false}
                        animate={{ x: language === 'en' ? 0 : (language === 'fr' ? (window.innerWidth < 768 ? 36 : 44) : 0) }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                    <button
                        onClick={() => toggleLanguage()}
                        className={`relative z-10 w-1/2 text-[9px] md:text-[10px] font-black uppercase transition-colors duration-300 ${language === 'en' ? 'text-white' : 'text-gray-500'}`}
                    >
                        EN
                    </button>
                    <button
                        onClick={() => toggleLanguage()}
                        className={`relative z-10 w-1/2 text-[9px] md:text-[10px] font-black uppercase transition-colors duration-300 ${language === 'fr' ? 'text-white' : 'text-gray-500'}`}
                    >
                        FR
                    </button>
                </div>

                <img src={profilePic} alt="Avatar" className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border-2 border-gray-200 hover:border-gray-300 transition-colors cursor-pointer" />

                {/* Mobile Menu Toggle */}
                <button 
                    className="min-[1401px]:hidden p-2 text-black"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full bg-white shadow-xl min-[1401px]:hidden flex flex-col py-6 px-10 border-t border-gray-100"
                    >
                        {t.nav.links.map((link, index) => (
                            <button
                                key={link.id}
                                onClick={() => handleNavigate(index)}
                                className={`py-4 text-left text-sm font-bold tracking-[0.2em] uppercase transition-colors ${activeIndex === index ? 'text-black' : 'text-gray-400'}`}
                            >
                                {link.title}
                            </button>
                        ))}
                        <a 
                            href="/cv_harena.pdf" 
                            download="CV_Harena.pdf"
                            className="mt-4 text-[10px] font-bold uppercase tracking-[0.15em] border border-black px-4 py-4 hover:bg-black hover:text-white transition-all text-black w-full text-center"
                        >
                            {t.nav.downloadCV}
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}

export default NavBar