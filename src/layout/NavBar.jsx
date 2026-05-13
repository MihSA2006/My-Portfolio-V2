import React from 'react'
import profilePic from '../assets/profile.png';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

const NavBar = ({ activeIndex, onNavigate }) => {
    const { t, language, toggleLanguage } = useLanguage();

    return (
        <nav className="fixed top-0 left-0 w-full z-[100] flex items-center justify-between px-6 py-6 md:px-12 lg:px-20 bg-white/10">
            {/* Left side */}
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => onNavigate(0)}>
                <div className="w-10 h-10 border border-black flex items-center justify-center font-black text-sm hover:bg-black hover:text-white transition-colors duration-300">
                    HS
                </div>
                <span className="font-bold tracking-tighter text-lg uppercase hidden sm:block">{t.me.name} {t.me.lastName}</span>
            </div>

            {/* Center Links */}
            <div className="hidden lg:flex space-x-10 text-[13px] font-bold tracking-[0.2em] mb-4 text-black uppercase">
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
            <div className="flex items-center space-x-4 md:space-x-8">
                <button className="text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] border border-black px-4 py-2 md:px-6 md:py-3 hover:bg-black hover:text-white transition-all duration-300 hidden sm:block text-black">
                    {t.nav.downloadCV}
                </button>

                {/* Modern Language Toggle */}
                <div className="relative flex items-center bg-gray-100 rounded-full p-1 w-24 h-10 shadow-inner overflow-hidden border border-gray-200">
                    <motion.div
                        className="absolute bg-black rounded-full h-8 w-11 shadow-md"
                        initial={false}
                        animate={{ x: language === 'en' ? 0 : 44 }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                    <button
                        onClick={() => toggleLanguage()}
                        className={`relative z-10 w-1/2 text-[10px] font-black uppercase transition-colors duration-300 ${language === 'en' ? 'text-white' : 'text-gray-500'}`}
                    >
                        EN
                    </button>
                    <button
                        onClick={() => toggleLanguage()}
                        className={`relative z-10 w-1/2 text-[10px] font-black uppercase transition-colors duration-300 ${language === 'fr' ? 'text-white' : 'text-gray-500'}`}
                    >
                        FR
                    </button>
                </div>

                <img src={profilePic} alt="Avatar" className="w-15 h-15 md:w-12 md:h-12 rounded-full object-cover border-2 border-gray-200 hover:border-gray-300 transition-colors cursor-pointer" />
            </div>
        </nav>
    )
}

export default NavBar